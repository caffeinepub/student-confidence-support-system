import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Doubt, UserProfile } from "../backend";
import type { AppRole } from "../backend";
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
      // Adapt to UserProfile shape expected by the rest of the app
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

export function useCallerDoubts() {
  const { actor, isFetching } = useActor();
  return useQuery<Doubt[]>({
    queryKey: ["callerDoubts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCallerDoubts();
    },
    enabled: !!actor && !isFetching,
  });
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

export function useAllDoubts() {
  const { actor, isFetching } = useActor();
  return useQuery<Doubt[]>({
    queryKey: ["allDoubts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllDoubts();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 15_000,
  });
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
      const stored = JSON.parse(
        localStorage.getItem("askspark_doubts") || "[]",
      );
      stored.unshift({
        id: `local_${Date.now()}`,
        text: input.text,
        subject: profile?.userBranch ?? profile?.userClass ?? "",
        branch: profile?.userBranch ?? profile?.userClass ?? "",
        isAnonymous: input.isAnonymous,
        userId,
        timestamp: Date.now(),
        isAnswered: false,
      });
      localStorage.setItem(
        "askspark_doubts",
        JSON.stringify(stored.slice(0, 100)),
      );
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
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      doubtId,
      response,
    }: { doubtId: string; response: string }) => {
      if (!actor) throw new Error("Service not available, please try again");
      return actor.answerDoubt(doubtId, response);
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
      // Save everything to localStorage under a generated userId
      saveLocalProfile({ displayName, role, userType, userClass, userBranch });
      return { displayName, role };
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}
