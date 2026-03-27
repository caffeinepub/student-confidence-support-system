import { useEffect, useRef, useState } from "react";
import { rtdbListen, rtdbPush, rtdbSet } from "./useFirebaseRTDB";

export interface AppNotification {
  id: string;
  type: "call" | "class" | "doubt_answered" | "new_doubt" | "call_request";
  message: string;
  navigateTo: string;
  read: boolean;
  createdAt: number;
}

const STORAGE_KEY = "askspark_notifications";

function getLocalNotifications(): AppNotification[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AppNotification[];
  } catch {
    return [];
  }
}

function saveLocalNotifications(list: AppNotification[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
}

// Legacy standalone functions (used by some components)
export function getNotifications(): AppNotification[] {
  return getLocalNotifications();
}

export function addNotification(
  n: Omit<AppNotification, "id" | "read" | "createdAt">,
  userId?: string,
): void {
  const entry: AppNotification = {
    ...n,
    id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    read: false,
    createdAt: Date.now(),
  };
  if (userId) {
    try {
      rtdbPush(`notifications/${userId}`, entry);
    } catch {
      /* ignore */
    }
  } else {
    const list = getLocalNotifications();
    list.unshift(entry);
    saveLocalNotifications(list);
  }
}

export function markAllRead(userId?: string): void {
  if (userId) {
    // We handle this via RTDB in the hook
  } else {
    const list = getLocalNotifications().map((n) => ({ ...n, read: true }));
    saveLocalNotifications(list);
  }
}

export function markRead(id: string, userId?: string): void {
  if (userId) {
    rtdbSet(`notifications/${userId}/${id}/read`, true);
  } else {
    const list = getLocalNotifications().map((n) =>
      n.id === id ? { ...n, read: true } : n,
    );
    saveLocalNotifications(list);
  }
}

export function useNotifications(userId?: string) {
  const [notifications, setNotifications] = useState<AppNotification[]>(() =>
    getLocalNotifications(),
  );
  const unsubRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!userId) {
      // Fallback: reload from localStorage on focus
      function reload() {
        setNotifications(getLocalNotifications());
      }
      window.addEventListener("focus", reload);
      return () => window.removeEventListener("focus", reload);
    }

    // Real-time from RTDB
    unsubRef.current = rtdbListen(`notifications/${userId}`, (value) => {
      if (!value || typeof value !== "object") {
        setNotifications([]);
        return;
      }
      const map = value as Record<string, AppNotification>;
      const list = Object.entries(map)
        .map(([key, val]) => ({ ...val, id: key }))
        .sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0))
        .slice(0, 50);
      setNotifications(list);
    });

    return () => {
      unsubRef.current?.();
    };
  }, [userId]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  function handleMarkRead(id: string) {
    markRead(id, userId);
    if (!userId) {
      setNotifications(getLocalNotifications());
    }
    // RTDB version: state updates via listener
  }

  function handleMarkAllRead() {
    if (userId) {
      // Mark all read in RTDB
      for (const n of notifications) {
        if (!n.read) rtdbSet(`notifications/${userId}/${n.id}/read`, true);
      }
    } else {
      markAllRead();
      setNotifications(getLocalNotifications());
    }
  }

  function handleAdd(n: Omit<AppNotification, "id" | "read" | "createdAt">) {
    addNotification(n, userId);
    if (!userId) {
      setNotifications(getLocalNotifications());
    }
  }

  return {
    notifications,
    unreadCount,
    markRead: handleMarkRead,
    markAllRead: handleMarkAllRead,
    addNotification: handleAdd,
  };
}
