import { doc, getDoc } from "firebase/firestore";
import { AppRole } from "../backend";
import { loadLocalProfile, saveLocalProfile } from "../hooks/useLocalProfile";
import { db } from "./firebase";
import { saveUserToFirestore } from "./useFirestoreUsers";

export const TEACHER_CODE = "SPARK2024";

/**
 * Checks if the user has already been a teacher before.
 * Returns true if isTeacherInitialized is set in Firestore or localStorage.
 */
export async function isTeacherInitialized(userId: string): Promise<boolean> {
  // Check localStorage first (fast path)
  const profile = loadLocalProfile();
  if (profile?.isTeacherInitialized) return true;

  // Check Firestore as fallback
  try {
    const snap = await getDoc(doc(db, "users", userId));
    if (snap.exists()) {
      return snap.data()?.isTeacherInitialized === true;
    }
  } catch {
    /* ignore */
  }
  return false;
}

export async function switchRole(
  userId: string,
  newRole: "student" | "teacher",
  teacherCode?: string,
): Promise<{ success: boolean; error?: string }> {
  if (newRole === "teacher" && teacherCode !== undefined) {
    // Code was provided — validate it
    if (teacherCode.trim() !== TEACHER_CODE) {
      return {
        success: false,
        error: "Incorrect teacher code. Please try again.",
      };
    }
  }

  const profile = loadLocalProfile();
  if (!profile) {
    return { success: false, error: "No profile found." };
  }

  const appRole = newRole === "teacher" ? AppRole.teacher : AppRole.student;
  const isFirstTimeTeacher =
    newRole === "teacher" && !profile.isTeacherInitialized;

  const updatedProfile = {
    ...profile,
    role: appRole,
    ...(isFirstTimeTeacher ? { isTeacherInitialized: true } : {}),
  };

  saveLocalProfile(updatedProfile);
  localStorage.setItem("askspark_role", newRole);

  try {
    await saveUserToFirestore(
      userId,
      profile.displayName,
      newRole,
      isFirstTimeTeacher,
    );
  } catch {
    /* best-effort — localStorage already updated */
  }

  return { success: true };
}

export async function fetchRoleFromFirestore(
  userId: string,
): Promise<string | null> {
  try {
    const snap = await getDoc(doc(db, "users", userId));
    if (snap.exists()) {
      const data = snap.data();
      return (data?.role as string) ?? null;
    }
    return null;
  } catch {
    return null;
  }
}
