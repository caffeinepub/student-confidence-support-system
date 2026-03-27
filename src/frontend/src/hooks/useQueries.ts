import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Doubt, UserProfile } from "../backend";
import type { AppRole } from "../backend";
import {
  type FirestoreDoubt,
  answerDoubt as firestoreAnswerDoubt,
  submitDoubt as firestoreSubmitDoubt,
  useAllDoubts as useFirestoreAllDoubts,
  useMyDoubts,
} from "../lib/useFirestoreDoubts";
import { useActor } from "./useActor";
import {
  type LocalProfile,
  getOrCreateUserId,
  loadLocalProfile,
  saveLocalProfile,
} from "./useLocalProfile";

/** Returns the user profile from localStorage — no auth required */
export function useUserProfile() {
  return useQuery<UserProfile | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const profile = loadLocalProfile();
      if (!profile) return null;
      return {
        displayName: profile.displayName,
        doubtsSubmitted: BigInt(0),
        role: profile.role,
      } as UserProfile;
    },
    staleTime: 30_000,
  });
}

/** Returns the full local profile (includes userType, class, branch) */
export function useLocalFullProfile(): LocalProfile | null {
  return loadLocalProfile();
}

export function useCallerDoubts(): {
  data: FirestoreDoubt[];
  isLoading: boolean;
} {
  const userId = getOrCreateUserId();
  const doubts = useMyDoubts(userId);
  return { data: doubts, isLoading: false };
}

export function useConfidenceScore() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["confidenceScore"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getCallerConfidenceScore();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllDoubts(): { data: FirestoreDoubt[]; isLoading: boolean } {
  const doubts = useFirestoreAllDoubts();
  return { data: doubts, isLoading: false };
}

export function useUnansweredDoubts() {
  const { actor, isFetching } = useActor();
  return useQuery<Doubt[]>({
    queryKey: ["unansweredDoubts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUnansweredDoubts();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 15_000,
  });
}

export function useNotificationCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["notificationCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getTeacherNotificationCount();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 20_000,
  });
}

interface DoubtInput {
  text: string;
  isAnonymous: boolean;
}

export function useSubmitDoubt() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DoubtInput) => {
      const userId = getOrCreateUserId();
      const profile = loadLocalProfile();
      const subject = profile?.userBranch ?? profile?.userClass ?? "General";
      const studentName = profile?.displayName ?? "Anonymous";

      try {
        await firestoreSubmitDoubt({
          question: input.text,
          subject,
          studentName: input.isAnonymous ? "Anonymous" : studentName,
          userId,
          isAnonymous: input.isAnonymous,
        });
      } catch {
        // Final fallback to localStorage
        const stored = JSON.parse(
          localStorage.getItem("askspark_doubts") || "[]",
        );
        stored.unshift({
          id: `local_${Date.now()}`,
          text: input.text,
          title: input.text,
          subject,
          branch: subject,
          isAnonymous: input.isAnonymous,
          userId,
          timestamp: Date.now(),
          createdAt: Date.now(),
          status: "pending",
          studentName: input.isAnonymous ? "Anonymous" : studentName,
        });
        localStorage.setItem(
          "askspark_doubts",
          JSON.stringify(stored.slice(0, 100)),
        );
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["callerDoubts"] });
      qc.invalidateQueries({ queryKey: ["confidenceScore"] });
      qc.invalidateQueries({ queryKey: ["allDoubts"] });
      qc.invalidateQueries({ queryKey: ["unansweredDoubts"] });
      qc.invalidateQueries({ queryKey: ["notificationCount"] });
    },
  });
}

export function useAnswerDoubt() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      doubtId,
      response,
      teacherName,
      studentUserId,
    }: {
      doubtId: string;
      response: string;
      teacherName?: string;
      studentUserId?: string;
    }) => {
      try {
        await firestoreAnswerDoubt(
          doubtId,
          response,
          teacherName ?? "Teacher",
          studentUserId,
        );
      } catch (err) {
        console.error("answerDoubt failed:", err);
        throw err;
      }
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allDoubts"] });
      qc.invalidateQueries({ queryKey: ["unansweredDoubts"] });
      qc.invalidateQueries({ queryKey: ["notificationCount"] });
    },
  });
}

/** Saves profile to localStorage — no auth required */
export function useSubmitProfile() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      displayName,
      role,
      userType,
      userClass,
      userBranch,
    }: {
      displayName: string;
      role: AppRole;
      userType?: string;
      userClass?: string;
      userBranch?: string;
    }) => {
      saveLocalProfile({ displayName, role, userType, userClass, userBranch });
      return { displayName, role };
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}
