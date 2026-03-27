import { useEffect } from "react";
import { AppRole } from "../backend";
import { fetchRoleFromFirestore } from "../lib/useRoleSwitch";
import { loadLocalProfile, saveLocalProfile } from "./useLocalProfile";

export function useRoleSync() {
  useEffect(() => {
    const profile = loadLocalProfile();
    if (!profile?.userId) return;

    fetchRoleFromFirestore(profile.userId)
      .then((firebaseRole) => {
        if (!firebaseRole) return;
        const localRole = profile.role as string;
        if (firebaseRole !== localRole) {
          const appRole =
            firebaseRole === "teacher" ? AppRole.teacher : AppRole.student;
          saveLocalProfile({ ...profile, role: appRole });
          localStorage.setItem("askspark_role", firebaseRole);
        }
      })
      .catch(() => {
        /* silent fail — localStorage is source of truth if Firebase unreachable */
      });
  }, []);
}
