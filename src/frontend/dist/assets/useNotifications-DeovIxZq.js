import { c as createLucideIcon, r as reactExports, d as rtdbListen, f as rtdbSet, O as rtdbPush } from "./index-Bzh1Z7Il.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode);
const STORAGE_KEY = "askspark_notifications";
function getLocalNotifications() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function saveLocalNotifications(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
}
function addNotification(n, userId) {
  const entry = {
    ...n,
    id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    read: false,
    createdAt: Date.now()
  };
  if (userId) {
    try {
      rtdbPush(`notifications/${userId}`, entry);
    } catch {
    }
  } else {
    const list = getLocalNotifications();
    list.unshift(entry);
    saveLocalNotifications(list);
  }
}
function markAllRead(userId) {
  {
    const list = getLocalNotifications().map((n) => ({ ...n, read: true }));
    saveLocalNotifications(list);
  }
}
function markRead(id, userId) {
  if (userId) {
    rtdbSet(`notifications/${userId}/${id}/read`, true);
  } else {
    const list = getLocalNotifications().map(
      (n) => n.id === id ? { ...n, read: true } : n
    );
    saveLocalNotifications(list);
  }
}
function useNotifications(userId) {
  const [notifications, setNotifications] = reactExports.useState(
    () => getLocalNotifications()
  );
  const unsubRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!userId) {
      let reload = function() {
        setNotifications(getLocalNotifications());
      };
      window.addEventListener("focus", reload);
      return () => window.removeEventListener("focus", reload);
    }
    unsubRef.current = rtdbListen(`notifications/${userId}`, (value) => {
      if (!value || typeof value !== "object") {
        setNotifications([]);
        return;
      }
      const map = value;
      const list = Object.entries(map).map(([key, val]) => ({ ...val, id: key })).sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0)).slice(0, 50);
      setNotifications(list);
    });
    return () => {
      var _a;
      (_a = unsubRef.current) == null ? void 0 : _a.call(unsubRef);
    };
  }, [userId]);
  const unreadCount = notifications.filter((n) => !n.read).length;
  function handleMarkRead(id) {
    markRead(id, userId);
    if (!userId) {
      setNotifications(getLocalNotifications());
    }
  }
  function handleMarkAllRead() {
    if (userId) {
      for (const n of notifications) {
        if (!n.read) rtdbSet(`notifications/${userId}/${n.id}/read`, true);
      }
    } else {
      markAllRead();
      setNotifications(getLocalNotifications());
    }
  }
  function handleAdd(n) {
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
    addNotification: handleAdd
  };
}
export {
  Bell as B,
  useNotifications as u
};
