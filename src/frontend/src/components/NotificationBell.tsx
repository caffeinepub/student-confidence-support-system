import { useNavigate } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { useRef, useState } from "react";
import { useNotifications } from "../hooks/useNotifications";

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

const TYPE_ICONS: Record<string, string> = {
  call: "📞",
  class: "🎥",
  doubt_answered: "✅",
  new_doubt: "❓",
  call_request: "📲",
};

export default function NotificationBell() {
  const navigate = useNavigate();
  const { notifications, unreadCount, markRead, markAllRead } =
    useNotifications();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const recent = notifications.slice(0, 10);

  function handleClick(id: string, navigateTo: string) {
    markRead(id);
    setOpen(false);
    if (navigateTo) {
      navigate({ to: navigateTo as "/" });
    }
  }

  // Close on outside click
  function handleBlur(e: React.FocusEvent) {
    if (ref.current && !ref.current.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  }

  return (
    <div
      ref={ref}
      className="relative"
      onBlur={handleBlur}
      tabIndex={-1}
      data-ocid="notifications.panel"
    >
      <button
        type="button"
        className="relative w-9 h-9 rounded-full border border-border bg-white/60 flex items-center justify-center hover:bg-muted/40 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-label="Notifications"
        data-ocid="notifications.open_modal_button"
      >
        <Bell className="w-4 h-4 text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4.5 h-4.5 min-w-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          className="absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50 animate-fade-in"
          data-ocid="notifications.popover"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
            <span className="font-display font-bold text-sm text-foreground">
              Notifications
            </span>
            {unreadCount > 0 && (
              <button
                type="button"
                className="text-xs text-primary hover:underline"
                onClick={() => {
                  markAllRead();
                }}
                data-ocid="notifications.secondary_button"
              >
                Mark all read
              </button>
            )}
          </div>
          <div className="max-h-72 overflow-y-auto">
            {recent.length === 0 ? (
              <div
                className="py-8 text-center text-sm text-muted-foreground"
                data-ocid="notifications.empty_state"
              >
                No notifications yet
              </div>
            ) : (
              recent.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${
                    n.read ? "opacity-60" : ""
                  }`}
                  onClick={() => handleClick(n.id, n.navigateTo)}
                >
                  <span className="text-lg flex-shrink-0 mt-0.5">
                    {TYPE_ICONS[n.type] ?? "🔔"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-foreground leading-snug">
                      {n.message}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {timeAgo(n.createdAt)}
                    </div>
                  </div>
                  {!n.read && (
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
