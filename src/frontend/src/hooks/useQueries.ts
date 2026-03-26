import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Doubt, DoubtSubmission, UserProfile } from "../backend";
import type { AppRole } from "../backend";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export function useUserProfile() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<UserProfile | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor || !identity) return null;
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !!identity && !isFetching,
    staleTime: 30_000,
  });
}

export function useCallerDoubts() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<Doubt[]>({
    queryKey: ["callerDoubts"],
    queryFn: async () => {
      if (!actor || !identity) return [];
      return actor.getCallerDoubts();
    },
    enabled: !!actor && !!identity && !isFetching,
  });
}

export function useConfidenceScore() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();
  return useQuery<bigint>({
    queryKey: ["confidenceScore"],
    queryFn: async () => {
      if (!actor || !identity) return BigInt(0);
      return actor.getCallerConfidenceScore();
    },
    enabled: !!actor && !!identity && !isFetching,
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
  const { identity } = useInternetIdentity();
  return useQuery<bigint>({
    queryKey: ["notificationCount"],
    queryFn: async () => {
      if (!actor || !identity) return BigInt(0);
      return actor.getTeacherNotificationCount();
    },
    enabled: !!actor && !!identity && !isFetching,
    refetchInterval: 20_000,
  });
}

export function useSubmitDoubt() {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (submission: DoubtSubmission) => {
      if (!identity) throw new Error("Please login first");
      if (!actor) throw new Error("Not authenticated");
      return actor.submitDoubt(submission);
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
  const { identity } = useInternetIdentity();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      doubtId,
      response,
    }: { doubtId: string; response: string }) => {
      if (!identity) throw new Error("Please login first");
      if (!actor) throw new Error("Not authenticated");
      return actor.answerDoubt(doubtId, response);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["allDoubts"] });
      qc.invalidateQueries({ queryKey: ["unansweredDoubts"] });
      qc.invalidateQueries({ queryKey: ["notificationCount"] });
    },
  });
}

export function useSubmitProfile() {
  const { actor } = useActor();
  const { identity, isInitializing } = useInternetIdentity();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      displayName,
      role,
    }: { displayName: string; role: AppRole }) => {
      if (isInitializing) throw new Error("Auth is still loading, please wait");
      if (!identity) throw new Error("Please login first");
      if (!actor) throw new Error("Not authenticated");
      return actor.submitUserProfile(displayName, role);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}
