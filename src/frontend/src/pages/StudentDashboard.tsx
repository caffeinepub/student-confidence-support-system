import AvatarButton from "@/components/AvatarButton";
import VideoCallModal from "@/components/VideoCallModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { rtdbListen } from "@/hooks/useFirebaseRTDB";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Flame,
  Lock,
  LogOut,
  MessageSquare,
  Plus,
  Search,
  Send,
  Star,
  TrendingUp,
  User,
  Video,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { loadLocalProfile } from "../hooks/useLocalProfile";
import { useNotifications } from "../hooks/useNotifications";
import { type FirestoreDoubt, useMyDoubts } from "../lib/useFirestoreDoubts";
import { getRating, submitRating } from "../lib/useFirestoreRatings";

const BADGES = [
  {
    icon: TrendingUp,
    name: "First Question",
    desc: "Asked your very first doubt",
    earned: true,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: BookOpen,
    name: "10 Questions",
    desc: "Reached 10 total doubts",
    earned: true,
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Zap,
    name: "Answered Quickly",
    desc: "Got a reply within 1 hour",
    earned: true,
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Award,
    name: "Anonymous Hero",
    desc: "Submit 5 anonymous doubts",
    earned: false,
    color: "bg-gray-100 text-gray-400",
  },
  {
    icon: Flame,
    name: "Streak Master",
    desc: "7-day asking streak",
    earned: false,
    color: "bg-gray-100 text-gray-400",
  },
  {
    icon: MessageSquare,
    name: "Top Contributor",
    desc: "Top 10% most active student",
    earned: false,
    color: "bg-gray-100 text-gray-400",
  },
];

function ConfidenceRing({ score }: { score: number }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  const color = score >= 70 ? "#22c55e" : score >= 40 ? "#6366f1" : "#f59e0b";
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg
        width="96"
        height="96"
        className="absolute inset-0 -rotate-90"
        role="img"
        aria-label="Confidence score ring"
      >
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="oklch(0.93 0.012 265)"
          strokeWidth="8"
        />
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      <div className="font-display font-bold text-foreground text-xl">
        {score}
      </div>
    </div>
  );
}

function ScoreIndicator({ score }: { score: number }) {
  const dot =
    score >= 70 ? "bg-green-500" : score >= 40 ? "bg-amber-400" : "bg-red-500";
  const text =
    score >= 70
      ? "text-green-700"
      : score >= 40
        ? "text-amber-700"
        : "text-red-700";
  return (
    <span className={`inline-flex items-center gap-1 font-bold ${text}`}>
      <span className={`w-2 h-2 rounded-full ${dot} inline-block`} />
      {score}%
    </span>
  );
}

type NotifItem = {
  id: number;
  icon: string;
  type: string;
  relatedId: number | string | null;
  text: string;
  time: string;
  read: boolean;
};

type TestHistoryItem = {
  week: number;
  score: number;
  strong: string[];
  fearZones: string[];
  date: string;
};

// ── Active Live Classes ───────────────────────────────────────────────────────
interface LiveClass {
  id: string;
  title: string;
  subject: string;
  hostName: string;
  viewerCount: number;
  active: boolean;
}

function ActiveLiveClasses({
  navigate,
}: {
  navigate: ReturnType<typeof import("@tanstack/react-router").useNavigate>;
}) {
  const [classes, setClasses] = useState<LiveClass[]>([]);

  useEffect(() => {
    const unsub = rtdbListen("liveClasses", (val) => {
      const raw = val as Record<string, Omit<LiveClass, "id">> | null;
      if (!raw) {
        setClasses([]);
        return;
      }
      const active = Object.entries(raw)
        .filter(([, c]) => c.active)
        .map(([id, c]) => ({ ...c, id }));
      setClasses(active);
    });
    return unsub;
  }, []);

  if (classes.length === 0) {
    return (
      <div className="glass-card rounded-3xl border-white/50 warm-shadow p-6">
        <h2 className="font-display font-bold text-foreground mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" />
          Live Classes
        </h2>
        <div
          className="text-center text-muted-foreground text-sm py-4"
          data-ocid="liveclass.empty_state"
        >
          No live classes right now. Check back soon!
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl border-white/50 warm-shadow p-6">
      <h2 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        Live Now
      </h2>
      <div className="space-y-3">
        {classes.map((c, i) => (
          <div
            key={c.id}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white/60"
            data-ocid={`liveclass.item.${i + 1}`}
          >
            <div>
              <div className="font-semibold text-sm text-foreground">
                {c.title}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {c.subject} · {c.hostName} · {c.viewerCount ?? 0} watching
              </div>
            </div>
            <button
              type="button"
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-xs font-bold transition-all shadow-sm"
              onClick={() =>
                navigate({ to: `/live/${c.id}`, search: { role: "viewer" } })
              }
              data-ocid={`liveclass.primary_button.${i + 1}`}
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Firestore Doubt Card for Students ───────────────────────────────────────────
function FirestoreDoubtStudentCard({
  doubt,
  index,
  expanded,
  onToggle,
  studentId,
}: {
  doubt: FirestoreDoubt;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  studentId: string;
}) {
  const [localRating, setLocalRating] = useState<number | null>(null);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  // Check if already rated
  useEffect(() => {
    if (doubt.status === "answered" && !ratingSubmitted) {
      getRating(doubt.id, studentId).then((r) => {
        if (r !== null) {
          setLocalRating(r);
          setRatingSubmitted(true);
        }
      });
    }
  }, [doubt.id, doubt.status, studentId, ratingSubmitted]);

  async function handleRate(stars: number) {
    if (ratingSubmitted) return;
    setLocalRating(stars);
    setRatingSubmitted(true);
    try {
      await submitRating(
        doubt.id,
        doubt.userId,
        doubt.teacherName ?? "Teacher",
        studentId,
        stars,
      );
    } catch {
      /* ignore */
    }
  }

  const borderAccent =
    doubt.status === "answered"
      ? "border-l-4 border-l-green-400"
      : "border-l-4 border-l-amber-400";

  return (
    <div
      className={`glass-card rounded-2xl border-white/50 warm-shadow hover:warm-shadow-lg transition-all duration-300 overflow-hidden ${borderAccent}`}
      data-ocid={`student.item.${index + 1}`}
      data-doubt-id={doubt.id}
    >
      <div className="p-5">
        <button
          type="button"
          className="flex items-start justify-between gap-3 w-full text-left"
          onClick={onToggle}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <Badge className="bg-indigo-100 text-indigo-700 border-0 text-xs">
                {doubt.subject}
              </Badge>
              {doubt.status === "answered" ? (
                <Badge className="text-xs border-0 bg-green-100 text-green-700">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Answered
                </Badge>
              ) : (
                <Badge className="text-xs border-0 bg-amber-100 text-amber-700">
                  <Clock className="w-3 h-3 mr-1" />
                  Pending
                </Badge>
              )}
            </div>
            <div className="font-semibold text-foreground text-sm truncate">
              {doubt.question}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {doubt.createdAt
                ? new Date(doubt.createdAt).toLocaleDateString()
                : ""}
            </div>
          </div>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
          )}
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-white/40 animate-fade-in">
            {doubt.status === "answered" && doubt.answer ? (
              <div className="space-y-3">
                <div className="text-xs font-semibold text-green-700 mb-1">
                  ✅ Teacher's Answer
                </div>
                <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {doubt.answer}
                  </p>
                  {doubt.teacherName && (
                    <p className="text-xs text-muted-foreground mt-2">
                      — {doubt.teacherName}
                      {doubt.answeredAt
                        ? `, ${new Date(doubt.answeredAt).toLocaleString()}`
                        : ""}
                    </p>
                  )}
                </div>
                {/* Rating */}
                <div className="mt-3">
                  <div className="text-xs text-muted-foreground mb-1">
                    {ratingSubmitted ? "Your rating:" : "Rate this answer:"}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRate(star)}
                        disabled={ratingSubmitted}
                        className={`text-xl transition-colors ${
                          star <= (localRating ?? 0)
                            ? "text-yellow-400"
                            : "text-gray-300 hover:text-yellow-300"
                        } ${ratingSubmitted ? "cursor-default" : "cursor-pointer"}`}
                        data-ocid={`student.rating.${index + 1}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  {ratingSubmitted && (
                    <p className="text-xs text-green-600 mt-1">
                      Thanks for your feedback!
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <Clock className="w-4 h-4" />
                <span>Waiting for a teacher to answer this doubt</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function StudentDashboard() {
  const navigate = useNavigate();
  const localProfile = loadLocalProfile();
  const classesAttended = (() => {
    try {
      return Number(localStorage.getItem("askspark_attended_classes") ?? "0");
    } catch {
      return 0;
    }
  })();

  // Real doubts from Firestore (with localStorage fallback)
  const userId = localProfile?.userId ?? "";
  const firestoreDoubts = useMyDoubts(userId);
  const realDoubts = firestoreDoubts;

  // Real test history from localStorage
  const [testHistory, setTestHistory] = useState<TestHistoryItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("askspark_test_history") || "[]");
    } catch {
      return [];
    }
  });

  // Reload test history on focus
  useEffect(() => {
    function reloadData() {
      try {
        setTestHistory(
          JSON.parse(localStorage.getItem("askspark_test_history") || "[]"),
        );
      } catch {
        /* ignore */
      }
    }
    window.addEventListener("focus", reloadData);
    return () => window.removeEventListener("focus", reloadData);
  }, []);

  // Onboarding modal — shown once on first login
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return !localStorage.getItem("askspark_onboarded");
  });
  function closeOnboarding() {
    localStorage.setItem("askspark_onboarded", "1");
    setShowOnboarding(false);
  }

  // Skeleton loading state
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  const [expandedDoubt, setExpandedDoubt] = useState<number | string | null>(
    null,
  );
  const [videoCallDoubt, setVideoCallDoubt] = useState<number | string | null>(
    null,
  );

  // Search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Notifications (real-time from RTDB)
  const {
    notifications: rtdbNotifs,
    unreadCount,
    markRead: markReadRTDB,
    markAllRead: markAllReadRTDB,
  } = useNotifications(userId);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  // Test history
  const [historyExpanded, setHistoryExpanded] = useState(true);

  const confidenceScore = Math.min(realDoubts.length * 15, 100);
  const xp = realDoubts.length * 50;
  const xpToNext = Math.max(xp + 200, 500);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filteredDoubts =
    searchQuery.trim().length > 0
      ? realDoubts.filter(
          (d) =>
            (d.question ?? "")
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            (d.subject ?? "").toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : [];

  function markRead(id: string | number) {
    markReadRTDB(String(id));
  }

  function markAllRead() {
    markAllReadRTDB();
  }

  function handleNotifClick(n: NotifItem) {
    markRead(String(n.id));
    setNotifOpen(false);
    if (n.type === "doubt_reply" || n.type === "doubt_answered") {
      document
        .getElementById("doubts-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else if (n.type === "message") {
      navigate({ to: "/chat" });
    } else if (n.type === "weekly_test") {
      navigate({ to: "/weekly-test" });
    }
  }

  const NotifPanel = () => (
    <div
      className="absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl shadow-xl border-white/50 overflow-hidden z-50 animate-fade-in"
      data-ocid="student.popover"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/30">
        <span className="font-display font-bold text-sm text-foreground">
          Notifications
        </span>
        {unreadCount > 0 && (
          <button
            type="button"
            className="text-xs text-primary hover:underline"
            onClick={markAllRead}
            data-ocid="student.secondary_button"
          >
            Mark all read
          </button>
        )}
      </div>
      {(rtdbNotifs as unknown as NotifItem[]).map((n) => (
        <button
          key={n.id}
          type="button"
          className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/40 transition-colors border-b border-white/20 last:border-0 ${n.read ? "opacity-60" : ""}`}
          onClick={() => handleNotifClick(n)}
        >
          <span className="text-lg flex-shrink-0 mt-0.5">{n.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm text-foreground">{n.text}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{n.time}</div>
          </div>
          {!n.read && (
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
          )}
        </button>
      ))}
      {rtdbNotifs.length === 0 && (
        <div className="py-6 text-center text-sm text-muted-foreground">
          No notifications yet
        </div>
      )}
      {rtdbNotifs.length > 0 && rtdbNotifs.every((n) => n.read) && (
        <div className="p-4 text-center text-sm text-muted-foreground">
          You're all caught up! 🎉
        </div>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <div className="dashboard-gradient">
        <div className="h-16 bg-white/60 backdrop-blur-xl border-b border-white/40 flex items-center px-6 gap-4">
          <Skeleton className="w-10 h-10 rounded-xl" />
          <Skeleton className="w-32 h-4" />
          <div className="ml-auto flex gap-3">
            <Skeleton className="w-20 h-8 rounded-lg" />
            <Skeleton className="w-24 h-8 rounded-lg" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
          <Skeleton className="w-48 h-7" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-3xl glass-card p-6 space-y-3">
                <Skeleton className="w-8 h-8 rounded-full" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-3/4 h-3" />
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl glass-card p-5 space-y-2">
                <Skeleton className="w-24 h-5 rounded-full" />
                <Skeleton className="w-3/4 h-4" />
                <Skeleton className="w-1/2 h-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-gradient">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 px-4 sm:px-6 py-3 backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <AvatarButton
              imageUrl={localProfile?.profileImageUrl}
              name={localProfile?.displayName ?? "Student"}
            />
            <div>
              <div className="font-display font-bold text-foreground text-sm">
                {localProfile?.displayName ?? "Student"}
              </div>
              <Badge className="bg-indigo-100 text-indigo-700 border-0 text-xs">
                Student
              </Badge>
              {localProfile?.interests && localProfile.interests.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {localProfile.interests.slice(0, 3).map((interest) => (
                    <Badge
                      key={interest}
                      className="bg-white/60 text-muted-foreground border border-white/50 text-[10px] px-1.5 py-0"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop controls */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Search */}
            <div ref={searchRef} className="relative">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="pl-9 pr-8 h-9 w-52 rounded-full bg-white/60 border-white/50 text-sm focus:w-72 transition-all duration-300"
                  placeholder="Search doubts…"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchOpen(e.target.value.trim().length > 0);
                  }}
                  onFocus={() =>
                    searchQuery.trim().length > 0 && setSearchOpen(true)
                  }
                  data-ocid="student.search_input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              {searchOpen && filteredDoubts.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 glass-card rounded-2xl shadow-xl border-white/50 overflow-hidden z-50">
                  {filteredDoubts.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      className="w-full text-left px-4 py-3 hover:bg-white/50 border-b border-white/30 last:border-0"
                      onClick={() => {
                        setExpandedDoubt(d.id);
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                    >
                      <Badge className="bg-indigo-100 text-indigo-700 border-0 text-xs">
                        {d.subject}
                      </Badge>
                      <div className="text-sm text-foreground mt-1 line-clamp-1">
                        {d.question}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification bell */}
            <div className="relative" ref={notifRef}>
              <button
                type="button"
                className="relative w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-white/70 transition-colors"
                onClick={() => setNotifOpen((o) => !o)}
                aria-label="Notifications"
                data-ocid="student.open_modal_button"
              >
                <Bell className="w-4 h-4 text-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifOpen && <NotifPanel />}
            </div>

            <Button
              size="sm"
              className="rounded-full gradient-primary text-white border-0 shadow-primary text-xs font-bold"
              onClick={() => navigate({ to: "/submit" })}
              data-ocid="student.primary_button"
            >
              <Plus className="w-3.5 h-3.5 mr-1" /> Ask Doubt
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="rounded-full w-9 h-9 p-0 hover:bg-white/50"
              onClick={() => navigate({ to: "/" })}
              data-ocid="student.secondary_button"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile icons */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="relative" ref={notifRef}>
              <button
                type="button"
                className="relative w-9 h-9 rounded-full glass-card flex items-center justify-center"
                onClick={() => setNotifOpen((o) => !o)}
                aria-label="Notifications"
                data-ocid="student.open_modal_button"
              >
                <Bell className="w-4 h-4 text-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifOpen && <NotifPanel />}
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="rounded-full w-9 h-9 p-0 hover:bg-white/50"
              onClick={() => navigate({ to: "/" })}
              data-ocid="student.secondary_button"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile search row */}
        <div
          className="sm:hidden max-w-5xl mx-auto mt-2 relative"
          ref={searchRef}
        >
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" />
          <Input
            className="pl-9 pr-8 h-9 w-full rounded-full bg-white/60 border-white/50 text-sm"
            placeholder="Search doubts…"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchOpen(e.target.value.trim().length > 0);
            }}
            data-ocid="student.search_input"
          />
          {searchQuery && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              onClick={() => {
                setSearchQuery("");
                setSearchOpen(false);
              }}
            >
              <X className="w-3 h-3" />
            </button>
          )}
          {searchOpen && filteredDoubts.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 glass-card rounded-2xl shadow-xl border-white/50 overflow-hidden z-50">
              {filteredDoubts.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-white/50 border-b border-white/30 last:border-0"
                  onClick={() => {
                    setExpandedDoubt(d.id);
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                >
                  <Badge className="bg-indigo-100 text-indigo-700 border-0 text-xs">
                    {d.subject}
                  </Badge>
                  <div className="text-sm text-foreground mt-1 line-clamp-1">
                    {d.question}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* ── Hero Section ── */}
        <div className="glass-card rounded-3xl p-6 border-white/50 warm-shadow flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Welcome back 👋
            </h1>
            <p className="text-muted-foreground mt-1 text-base">
              {localProfile?.displayName
                ? `Hey ${localProfile.displayName}, keep sparking your curiosity!`
                : "Ask without fear. Learn without limits."}
            </p>
          </div>
          {/* Confidence Score Card */}
          <div
            className="glass-card rounded-2xl p-5 border-white/50 flex flex-col items-center gap-2 min-w-[140px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.12) 100%)",
            }}
          >
            <ConfidenceRing score={confidenceScore} />
            <div className="text-sm font-bold text-foreground text-center">
              Confidence Score
            </div>
            <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 text-xs">
              +8 pts this week
            </Badge>
          </div>
        </div>

        {/* ── Quick Action Grid ── */}
        <div>
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: MessageSquare,
                title: "Ask Doubt",
                desc: "Post your question anonymously",
                color: "from-indigo-500 to-violet-500",
                action: () => navigate({ to: "/submit" }),
                ocid: "student.ask_doubt.button",
              },
              {
                icon: Video,
                title: "Join Live Class",
                desc: "Join an active class now",
                color: "from-rose-500 to-pink-500",
                action: () =>
                  document
                    .getElementById("live-classes-section")
                    ?.scrollIntoView({ behavior: "smooth" }),
                ocid: "student.live_class.button",
              },
              {
                icon: Search,
                title: "Search Doubts",
                desc: "Find answers instantly",
                color: "from-sky-500 to-cyan-500",
                action: () => navigate({ to: "/learning" }),
                ocid: "student.search_doubts.button",
              },
              {
                icon: MessageSquare,
                title: "Chat Support",
                desc: "24/7 AI assistance",
                color: "from-emerald-500 to-teal-500",
                action: () => navigate({ to: "/learning/support" }),
                ocid: "student.chat_support.button",
              },
            ].map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={item.action}
                className="action-card glass-card rounded-2xl p-5 border-white/50 flex flex-col items-start gap-3 text-left w-full cursor-pointer warm-shadow"
                data-ocid={item.ocid}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                    {item.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Problem → Solution Section ── */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-bold text-foreground">
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                emoji: "😰",
                title: "Fear of Asking",
                desc: "Worried about being judged for asking basic questions",
              },
              {
                emoji: "😞",
                title: "Lack of Confidence",
                desc: "Not sure if your doubt is worth asking",
              },
              {
                emoji: "⏳",
                title: "No Instant Help",
                desc: "Stuck waiting hours for an answer",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="glass-card rounded-2xl p-5 border-white/50 warm-shadow"
                style={{ background: "rgba(239,68,68,0.05)" }}
              >
                <div className="text-2xl mb-2">{p.emoji}</div>
                <div className="font-bold text-foreground text-sm">
                  {p.title}
                </div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm font-bold text-primary">
              AskSpark solves this
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                emoji: "🎭",
                title: "Anonymous Doubts",
                color: "from-violet-500 to-indigo-500",
              },
              {
                emoji: "👨‍🏫",
                title: "Teacher Answers",
                color: "from-sky-500 to-blue-500",
              },
              {
                emoji: "📺",
                title: "Live Classes",
                color: "from-rose-500 to-pink-500",
              },
              {
                emoji: "🔍",
                title: "Smart Search",
                color: "from-emerald-500 to-green-500",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="glass-card rounded-2xl p-5 border-white/50 flex flex-col items-center text-center gap-2 warm-shadow"
                style={{ background: "rgba(99,102,241,0.06)" }}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-lg`}
                >
                  {s.emoji}
                </div>
                <div className="font-bold text-foreground text-sm">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Progress Analytics ── */}
        <Card
          className="glass-card border-white/50 rounded-3xl warm-shadow"
          style={{ borderLeft: "4px solid oklch(0.55 0.22 265)" }}
          data-ocid="student.progress.card"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h2 className="font-display font-bold text-foreground">
                  Your Progress
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-indigo-50 rounded-xl p-3 text-center">
                <div className="text-2xl font-display font-bold text-indigo-700">
                  {realDoubts.length}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Doubts Asked
                </div>
              </div>
              <div className="bg-violet-50 rounded-xl p-3 text-center">
                <div className="text-2xl font-display font-bold text-violet-700">
                  {classesAttended}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Classes Attended
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Doubts progress</span>
                <span>{realDoubts.length} / 10</span>
              </div>
              <Progress
                value={Math.min((realDoubts.length / 10) * 100, 100)}
                className="h-2 rounded-full"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {realDoubts.length === 0
                ? "🌱 Start by asking your first doubt!"
                : realDoubts.length < 5
                  ? "📚 Great start! Keep asking doubts to build confidence."
                  : realDoubts.length < 10
                    ? "🔥 You're on a roll! Almost at 10 doubts."
                    : "🏆 Amazing! You've asked 10+ doubts. You're a champion learner!"}
            </p>
          </CardContent>
        </Card>

        {/* ── Learning Hub Shortcut ── */}
        <button
          type="button"
          className="action-card glass-card rounded-3xl border-white/50 warm-shadow overflow-hidden cursor-pointer w-full text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.14) 100%)",
          }}
          onClick={() => navigate({ to: "/learning" })}
          data-ocid="student.learning.card"
        >
          <div className="p-5 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-500">
              🎓
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-bold text-foreground text-base">
                  Learning Hub
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                  New!
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Lectures, DPP practice & 24/7 support — all in one place
              </p>
            </div>
            <span className="text-primary font-bold text-lg flex-shrink-0">
              →
            </span>
          </div>
        </button>

        {/* ── Weekly Test CTA ── */}
        <div
          className="glass-card rounded-3xl border-white/50 warm-shadow overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.14) 100%)",
          }}
        >
          <div className="p-5 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-2xl flex-shrink-0 shadow-primary">
              📝
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-bold text-foreground text-base">
                  Weekly Test
                </span>
                <Badge className="bg-primary text-white border-0 text-xs animate-pulse">
                  ✨ This Week
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Test your knowledge and track improvement
              </p>
            </div>
            <Button
              size="sm"
              className="rounded-full gradient-primary text-white border-0 shadow-primary flex-shrink-0"
              onClick={() => navigate({ to: "/weekly-test" })}
              data-ocid="student.test.button"
            >
              Start Test
            </Button>
          </div>
        </div>

        {/* ── Test History ── */}
        {testHistory.length > 0 && (
          <Card className="glass-card border-white/50 rounded-3xl warm-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  Test History
                </h2>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                  onClick={() => setHistoryExpanded((e) => !e)}
                  data-ocid="student.history.toggle"
                >
                  {historyExpanded ? "Hide" : "Show all"}
                </button>
              </div>
              {historyExpanded && (
                <div className="space-y-2">
                  {testHistory.slice(-5).map((t, tIdx) => (
                    <div
                      key={t.week}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/50 border border-white/40"
                      data-ocid={`student.history.item.${tIdx + 1}`}
                    >
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Week {t.week}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display font-bold text-foreground">
                          <ScoreIndicator score={t.score} />
                        </div>
                        {t.strong && t.strong.length > 0 && (
                          <div className="text-xs text-muted-foreground mt-0.5">
                            Strong: {t.strong.slice(0, 2).join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {testHistory.length > 5 && historyExpanded && (
                <div className="text-center mt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full text-xs glass-card border-white/50"
                    onClick={() => navigate({ to: "/weekly-test" })}
                    data-ocid="student.history.button"
                  >
                    View All History →
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            className="glass-card border-white/50 rounded-3xl warm-shadow col-span-2 sm:col-span-1"
            data-ocid="student.card"
          >
            <CardContent className="p-5 flex flex-col items-center">
              <ConfidenceRing score={confidenceScore} />
              <div className="text-sm font-display font-bold text-foreground mt-2">
                Confidence Score
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                +8 pts this week
              </div>
            </CardContent>
          </Card>
          <Card
            className="glass-card border-white/50 rounded-3xl warm-shadow"
            data-ocid="student.card"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">
                  +2
                </Badge>
              </div>
              <div className="text-2xl font-display font-bold text-foreground">
                14
              </div>
              <div className="text-xs text-muted-foreground">
                Questions Asked
              </div>
            </CardContent>
          </Card>
          <Card
            className="glass-card border-white/50 rounded-3xl warm-shadow"
            data-ocid="student.card"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <Badge className="bg-green-100 text-green-700 border-0 text-xs">
                  ↑ 86%
                </Badge>
              </div>
              <div className="text-2xl font-display font-bold text-foreground">
                12
              </div>
              <div className="text-xs text-muted-foreground">
                Answers Received
              </div>
            </CardContent>
          </Card>
          <Card
            className="glass-card border-white/50 rounded-3xl warm-shadow"
            data-ocid="student.card"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-white" />
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-0 text-xs">
                  Best!
                </Badge>
              </div>
              <div className="text-2xl font-display font-bold text-foreground">
                7
              </div>
              <div className="text-xs text-muted-foreground">
                Days in a Row 🔥
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── XP Bar ── */}
        <Card className="glass-card border-white/50 rounded-3xl warm-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">
                    Level 4 Scholar
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {xp.toLocaleString()} / {xpToNext.toLocaleString()} XP
                  </div>
                </div>
              </div>
              <Badge className="bg-indigo-100 text-indigo-700 border-0 font-bold">
                Lv. 4
              </Badge>
            </div>
            <Progress
              value={(xp / xpToNext) * 100}
              className="h-3 rounded-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>{xp} XP</span>
              <span>{xpToNext - xp} XP to Level 5</span>
            </div>
          </CardContent>
        </Card>

        {/* ── Badges ── */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold text-foreground">
              Your Achievements
            </h2>
            <Badge className="bg-white/60 text-muted-foreground border-white/50">
              3 / 6 earned
            </Badge>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BADGES.map((b, i) => (
              <Card
                key={b.name}
                className={`border warm-shadow text-center transition-all duration-300 rounded-2xl ${
                  b.earned
                    ? "glass-card border-white/50 hover:-translate-y-1"
                    : "bg-white/30 border-white/30 opacity-60"
                }`}
                data-ocid={`student.card.${i + 1}`}
              >
                <CardContent className="p-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${b.color} flex items-center justify-center mx-auto mb-2`}
                  >
                    {b.earned ? (
                      <b.icon className="w-5 h-5" />
                    ) : (
                      <Lock className="w-4 h-4" />
                    )}
                  </div>
                  <div className="text-xs font-bold text-foreground">
                    {b.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">
                    {b.desc}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ── Active Live Classes ── */}
        <div id="live-classes-section">
          <ActiveLiveClasses navigate={navigate} />
        </div>

        {/* ── Recent Doubts ── */}
        <div id="doubts-section">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold text-foreground">
              Recent Doubts
            </h2>
            <Button
              size="sm"
              className="rounded-full text-xs gradient-primary text-white border-0 shadow-primary"
              onClick={() => navigate({ to: "/submit" })}
              data-ocid="student.secondary_button"
            >
              <Plus className="w-3 h-3 mr-1" /> New
            </Button>
          </div>
          <div className="space-y-3" data-ocid="student.list">
            {realDoubts.length === 0 ? (
              <div
                className="text-center py-12 text-muted-foreground glass-card rounded-3xl border-white/50"
                data-ocid="student.empty_state"
              >
                <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-medium">No doubts submitted yet</p>
                <p className="text-sm mt-1">Start by asking your first doubt</p>
                <Button
                  size="sm"
                  className="mt-4 rounded-full gradient-primary text-white border-0"
                  onClick={() => navigate({ to: "/submit" })}
                  data-ocid="student.primary_button"
                >
                  Ask a Doubt
                </Button>
              </div>
            ) : (
              realDoubts.map((doubt, i) => (
                <FirestoreDoubtStudentCard
                  key={doubt.id}
                  doubt={doubt}
                  index={i}
                  expanded={expandedDoubt === doubt.id}
                  onToggle={() =>
                    setExpandedDoubt(
                      expandedDoubt === doubt.id ? null : doubt.id,
                    )
                  }
                  studentId={userId}
                />
              ))
            )}
          </div>
        </div>

        {/* ── Video Solutions ── */}
        <div>
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Video Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Algebra Basics Explained",
                subject: "Mathematics",
                thumb: "🧮",
              },
              {
                title: "Newton's Laws of Motion",
                subject: "Physics",
                thumb: "⚡",
              },
              {
                title: "Python for Beginners",
                subject: "Computer Science",
                thumb: "💻",
              },
            ].map((v, idx) => (
              <div
                key={v.title}
                className="action-card glass-card rounded-2xl border-white/50 overflow-hidden warm-shadow"
                data-ocid={`student.video.card.${idx + 1}`}
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-4xl">
                  {v.thumb}
                </div>
                <div className="p-4">
                  <Badge className="bg-indigo-100 text-indigo-700 border-0 text-xs mb-2">
                    {v.subject}
                  </Badge>
                  <div className="font-bold text-foreground text-sm">
                    {v.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Ad Banner ── */}
        <div
          className="glass-card rounded-2xl border-white/50 p-3 text-xs text-muted-foreground text-center"
          data-ocid="student.ad.panel"
        >
          📢 Your Ad Here — Partner with AskSpark
          <br />
          Reach 10,000+ students · sponsor@askspark.app
        </div>

        <div className="text-center text-xs text-muted-foreground py-6">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </div>

        {videoCallDoubt !== null &&
          (() => {
            const d = realDoubts.find(
              (x) => String(x.id) === String(videoCallDoubt),
            );
            return (
              <VideoCallModal
                open={videoCallDoubt !== null}
                onClose={() => setVideoCallDoubt(null)}
                studentName={(d?.question ?? "").slice(0, 20) || "Student"}
                isTeacher={false}
              />
            );
          })()}
      </main>

      {/* Floating AI Chat Button */}
      <button
        type="button"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold shadow-xl text-sm"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.22 265), oklch(0.55 0.22 310))",
          boxShadow: "0 8px 32px rgba(99,102,241,0.4)",
        }}
        onClick={() => navigate({ to: "/learning/support" })}
        data-ocid="student.ai_chat_button"
        aria-label="Open AI Chat"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">AI Chat</span>
      </button>

      {/* First-login onboarding modal */}
      <Dialog
        open={showOnboarding}
        onOpenChange={(open) => {
          if (!open) closeOnboarding();
        }}
      >
        <DialogContent className="max-w-md" data-ocid="onboarding.dialog">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              ✨ Welcome to AskSpark!
            </DialogTitle>
            <p className="text-center text-muted-foreground text-sm mt-1">
              Your confidence-building journey starts here
            </p>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {[
              {
                icon: "📝",
                step: "Submit Your Doubt",
                desc: "Ask any question, anonymously if you want",
              },
              {
                icon: "💬",
                step: "Get an Answer",
                desc: "Teachers respond with text, voice, and video",
              },
              {
                icon: "⭐",
                step: "Rate & Reply",
                desc: "Give feedback and continue the conversation",
              },
              {
                icon: "🏆",
                step: "Earn Points",
                desc: "Earn points and climb the leaderboard",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50/60"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-sm">{item.step}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="w-full mt-2 gradient-primary text-white font-semibold"
            onClick={closeOnboarding}
            data-ocid="onboarding.confirm_button"
          >
            Let's Go! 🚀
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
