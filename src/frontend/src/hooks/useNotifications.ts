import { useEffect, useState } from "react";

export interface AppNotification {
  id: string;
  type: "call" | "class" | "doubt_answered" | "new_doubt" | "call_request";
  message: string;
  navigateTo: string;
  read: boolean;
  createdAt: number;
}

const STORAGE_KEY = "askspark_notifications";

export function getNotifications(): AppNotification[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AppNotification[];
  } catch {
    return [];
  }
}

export function addNotification(
  n: Omit<AppNotification, "id" | "read" | "createdAt">,
): void {
  const list = getNotifications();
  const entry: AppNotification = {
    ...n,
    id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    read: false,
    createdAt: Date.now(),
  };
  list.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
}

export function markAllRead(): void {
  const list = getNotifications().map((n) => ({ ...n, read: true }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function markRead(id: string): void {
  const list = getNotifications().map((n) =>
    n.id === id ? { ...n, read: true } : n,
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<AppNotification[]>(() =>
    getNotifications(),
  );

  useEffect(() => {
    // Reload on focus
    function reload() {
      setNotifications(getNotifications());
    }
    window.addEventListener("focus", reload);
    return () => window.removeEventListener("focus", reload);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  function handleMarkRead(id: string) {
    markRead(id);
    setNotifications(getNotifications());
  }

  function handleMarkAllRead() {
    markAllRead();
    setNotifications(getNotifications());
  }

  function handleAdd(n: Omit<AppNotification, "id" | "read" | "createdAt">) {
    addNotification(n);
    setNotifications(getNotifications());
  }

  return {
    notifications,
    unreadCount,
    markRead: handleMarkRead,
    markAllRead: handleMarkAllRead,
    addNotification: handleAdd,
  };
}
