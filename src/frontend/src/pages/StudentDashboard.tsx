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
          stroke="oklch(0.93 0.012 70)"
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
      <div className="rounded-2xl glass-card border-white/40 warm-shadow p-5">
        <h2 className="font-display font-bold text-foreground mb-2 flex items-center gap-2">
          🎥 Live Classes
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
    <div className="rounded-2xl glass-card border-white/40 warm-shadow p-5">
      <h2 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        Live Classes
      </h2>
      <div className="space-y-2">
        {classes.map((c, i) => (
          <div
            key={c.id}
            className="flex items-center justify-between p-3 rounded-xl bg-muted/40"
            data-ocid={`liveclass.item.${i + 1}`}
          >
            <div>
              <div className="font-semibold text-sm">{c.title}</div>
              <div className="text-xs text-muted-foreground">
                {c.subject} · {c.hostName} · {c.viewerCount ?? 0} watching
              </div>
            </div>
            <button
              type="button"
              className="px-4 py-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-semibold transition-colors"
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

  return (
    <Card
      className="glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300"
      data-ocid={`student.item.${index + 1}`}
      data-doubt-id={doubt.id}
    >
      <CardContent className="p-5">
        <button
          type="button"
          className="flex items-start justify-between gap-3 w-full text-left"
          onClick={onToggle}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <Badge className="bg-primary/10 text-primary border-0 text-xs">
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
            <div className="font-medium text-foreground text-sm truncate">
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
          <div className="mt-4 pt-4 border-t border-border animate-fade-in">
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
      </CardContent>
    </Card>
  );
}

export default function StudentDashboard() {
  const navigate = useNavigate();
  const localProfile = loadLocalProfile();
  const [premiumOpen, setPremiumOpen] = useState(false);
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
      className="absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50 animate-fade-in"
      data-ocid="student.popover"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
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
          className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${n.read ? "opacity-60" : ""}`}
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
      <div className="min-h-screen bg-background">
        <div className="h-16 bg-card border-b flex items-center px-6 gap-4">
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
              <div key={i} className="rounded-2xl border bg-card p-6 space-y-3">
                <Skeleton className="w-8 h-8 rounded-full" />
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-3/4 h-3" />
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl border bg-card p-5 space-y-2">
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
    <div className="min-h-screen bg-background">
      <header className="glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3">
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
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                Student
              </Badge>
              {localProfile?.interests && localProfile.interests.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {localProfile.interests.slice(0, 3).map((interest) => (
                    <Badge
                      key={interest}
                      className="bg-muted text-muted-foreground border border-border text-[10px] px-1.5 py-0"
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
                  className="pl-9 pr-8 h-9 w-52 rounded-full bg-white/60 border-border text-sm focus:w-72 transition-all duration-300"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              {searchOpen && (
                <div className="absolute top-full mt-2 left-0 w-80 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50 animate-fade-in">
                  {filteredDoubts.length === 0 ? (
                    <div className="p-4 text-sm text-muted-foreground text-center">
                      No results for “{searchQuery}”
                    </div>
                  ) : (
                    filteredDoubts.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        className="w-full text-left px-4 py-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0"
                        onClick={() => {
                          setExpandedDoubt(d.id);
                          setSearchOpen(false);
                          setSearchQuery("");
                          setTimeout(() => {
                            document
                              .querySelector(`[data-doubt-id="${d.id}"]`)
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });
                          }, 100);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary/10 text-primary border-0 text-xs">
                            {d.subject}
                          </Badge>
                          <Badge
                            className={`text-xs border-0 ${d.status === "answered" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                          >
                            {d.status === "answered"
                              ? "✅ Answered"
                              : "⏳ Pending"}
                          </Badge>
                        </div>
                        <div className="text-sm text-foreground mt-1 line-clamp-1">
                          {d.question}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div ref={notifRef} className="relative">
              <button
                type="button"
                className="relative w-9 h-9 rounded-full border border-border bg-white/60 flex items-center justify-center hover:bg-muted/40 transition-colors"
                onClick={() => setNotifOpen((o) => !o)}
                data-ocid="student.toggle"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4 text-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifOpen && <NotifPanel />}
            </div>

            <Button
              size="sm"
              className="rounded-full gradient-primary text-white border-0 shadow-primary font-medium"
              onClick={() => navigate({ to: "/submit" })}
              data-ocid="student.primary_button"
            >
              <Plus className="w-4 h-4 mr-1" /> Ask a Doubt
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              onClick={() => navigate({ to: "/" })}
              data-ocid="student.secondary_button"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex sm:hidden items-center gap-2">
            <div ref={notifRef} className="relative">
              <button
                type="button"
                className="relative w-9 h-9 rounded-full border border-border bg-white/60 flex items-center justify-center"
                onClick={() => setNotifOpen((o) => !o)}
                data-ocid="student.toggle"
              >
                <Bell className="w-4 h-4 text-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifOpen && <NotifPanel />}
            </div>
            <Button
              size="sm"
              className="rounded-full gradient-primary text-white border-0"
              onClick={() => navigate({ to: "/submit" })}
              data-ocid="student.primary_button"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
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
            className="pl-9 pr-8 h-9 w-full rounded-full bg-white/60 border-border text-sm"
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
            <div className="absolute top-full left-0 right-0 mt-1 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50">
              {filteredDoubts.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-muted/40 border-b border-border/30 last:border-0"
                  onClick={() => {
                    setExpandedDoubt(d.id);
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                >
                  <Badge className="bg-primary/10 text-primary border-0 text-xs">
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
        {/* Motivational banner */}
        <div className="glass-card rounded-2xl p-5 border-white/40 warm-shadow flex items-center gap-4">
          <div className="text-3xl">⭐</div>
          <div className="flex-1">
            <div className="font-display font-bold text-foreground">
              You're doing amazing, {localProfile?.displayName || "there"}!
            </div>
            <div className="text-sm text-muted-foreground">
              {realDoubts.length > 0
                ? `You've asked ${realDoubts.length} question${realDoubts.length === 1 ? "" : "s"} so far. Keep it up — curious minds grow faster!`
                : "Start asking doubts to grow your confidence!"}
            </div>
          </div>
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 animate-pulse-soft hidden sm:flex">
            🔥 7-day streak
          </Badge>
        </div>

        {/* Progress Analytics */}
        <Card
          className="glass-card border-white/40 warm-shadow"
          data-ocid="student.progress.card"
        >
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-foreground">
                  Your Progress
                </h2>
              </div>
              <button
                type="button"
                className="text-xs bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-1"
                onClick={() => setPremiumOpen(true)}
                data-ocid="student.premium.button"
              >
                ✨ Go Premium
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-muted/40 rounded-xl p-3 text-center">
                <div className="text-2xl font-display font-bold text-foreground">
                  {realDoubts.length}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Doubts Asked
                </div>
              </div>
              <div className="bg-muted/40 rounded-xl p-3 text-center">
                <div className="text-2xl font-display font-bold text-foreground">
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

        {/* Learning Hub Shortcut */}
        <button
          type="button"
          className="rounded-2xl warm-shadow overflow-hidden cursor-pointer w-full text-left"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.18 145 / 0.08) 0%, oklch(0.52 0.18 145 / 0.15) 100%)",
            border: "1.5px solid oklch(0.52 0.18 145 / 0.25)",
          }}
          onClick={() => navigate({ to: "/learning" })}
          data-ocid="student.learning.card"
        >
          <div className="p-5 flex items-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.52 0.18 145) 0%, oklch(0.45 0.16 160) 100%)",
              }}
            >
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

        {/* Weekly Test CTA */}
        <div
          className="rounded-2xl warm-shadow overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.18 265 / 0.08) 0%, oklch(0.52 0.18 265 / 0.15) 100%)",
            border: "1.5px solid oklch(0.52 0.18 265 / 0.25)",
          }}
        >
          <div className="p-5 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-2xl flex-shrink-0 shadow-primary">
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
                Take this week's auto-generated test based on your doubt topics
              </p>
            </div>
            <Button
              size="sm"
              className="rounded-full gradient-primary text-white border-0 shadow-primary font-medium flex-shrink-0"
              onClick={() => navigate({ to: "/weekly-test" })}
              data-ocid="student.primary_button"
            >
              Take Test →
            </Button>
          </div>
        </div>

        {/* Test History */}
        <Card className="glass-card border-white/40 warm-shadow">
          <CardContent className="p-0">
            <button
              type="button"
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setHistoryExpanded((e) => !e)}
              data-ocid="student.toggle"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📊</span>
                <span className="font-display font-bold text-foreground">
                  Test History
                </span>
                <Badge className="bg-muted text-muted-foreground border-border text-xs">
                  Last 4 weeks
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground hidden sm:block">
                  View All
                </span>
                {historyExpanded ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </button>
            {historyExpanded && (
              <div className="px-5 pb-5 border-t border-border/50 animate-fade-in">
                <div className="space-y-2 mt-4">
                  {testHistory.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      <p>No test history available</p>
                      <p className="text-xs mt-1">
                        Take your first weekly test to see your progress
                      </p>
                    </div>
                  ) : (
                    testHistory.map((row, i) => (
                      <div
                        key={row.week}
                        className="flex items-center gap-3 rounded-xl p-3 bg-muted/30 hover:bg-muted/50 transition-colors"
                        data-ocid={`student.item.${i + 1}`}
                      >
                        <Badge className="bg-primary/10 text-primary border-primary/20 font-bold text-xs w-16 justify-center flex-shrink-0">
                          Wk {row.week}
                        </Badge>
                        <div className="w-16 flex-shrink-0">
                          <ScoreIndicator score={row.score} />
                        </div>
                        <div className="flex flex-wrap gap-1 flex-1 min-w-0">
                          {row.fearZones.length > 0 ? (
                            row.fearZones.map((z) => (
                              <Badge
                                key={z}
                                className="bg-red-100 text-red-700 border-red-200 text-xs"
                              >
                                ⚠ {z}
                              </Badge>
                            ))
                          ) : (
                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                              ✅ No fear zones
                            </Badge>
                          )}
                          {row.strong.map((s) => (
                            <Badge
                              key={s}
                              className="bg-blue-100 text-blue-700 border-blue-200 text-xs"
                            >
                              💪 {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full mt-4 text-xs"
                  onClick={() => navigate({ to: "/weekly-test" })}
                  data-ocid="student.secondary_button"
                >
                  View All History →
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            className="glass-card border-white/40 warm-shadow col-span-2 sm:col-span-1"
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
            className="glass-card border-white/40 warm-shadow"
            data-ocid="student.card"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <BookOpen className="w-5 h-5 text-blue-500" />
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
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
            className="glass-card border-white/40 warm-shadow"
            data-ocid="student.card"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
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
            className="glass-card border-white/40 warm-shadow"
            data-ocid="student.card"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <Flame className="w-5 h-5 text-orange-500" />
                <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs">
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

        {/* XP bar */}
        <Card className="glass-card border-white/40 warm-shadow">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center">
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
              <Badge className="bg-primary/10 text-primary border-primary/20 font-bold">
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

        {/* Badges */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold text-foreground">
              Your Achievements
            </h2>
            <Badge className="bg-muted text-muted-foreground">
              3 / 6 earned
            </Badge>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BADGES.map((b, i) => (
              <Card
                key={b.name}
                className={`border warm-shadow text-center transition-all duration-300 ${b.earned ? "glass-card border-white/40 hover:-translate-y-1" : "bg-muted/40 border-border opacity-60"}`}
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

        {/* Recent doubts */}
        <div id="doubts-section">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-bold text-foreground">
              Recent Doubts
            </h2>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full text-xs"
              onClick={() => navigate({ to: "/submit" })}
              data-ocid="student.secondary_button"
            >
              <Plus className="w-3 h-3 mr-1" /> New
            </Button>
          </div>
          <div className="space-y-3" data-ocid="student.list">
            {realDoubts.length === 0 ? (
              <div
                className="text-center py-12 text-muted-foreground"
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

        {/* Ad Banner */}
        <div
          className="border border-dashed border-primary/20 bg-primary/5 rounded-xl p-3 text-xs text-muted-foreground text-center"
          data-ocid="student.ad.panel"
        >
          📢 Your Ad Here — Partner with AskSpark
          <br />
          Reach 10,000+ students · sponsor@askspark.app
        </div>

        <div className="text-center text-xs text-muted-foreground py-6">
          © {new Date().getFullYear()}. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
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

      {/* Premium Dialog */}
      <Dialog open={premiumOpen} onOpenChange={setPremiumOpen}>
        <DialogContent className="max-w-sm" data-ocid="student.premium.dialog">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              ✨ AskSpark Premium
            </DialogTitle>
            <DialogDescription className="text-center text-sm mt-1">
              Unlock advanced features for a better learning experience
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {[
              {
                icon: "⚡",
                title: "Priority Doubt Answers",
                desc: "Get answers 3x faster from teachers",
              },
              {
                icon: "💬",
                title: "Faster Teacher Response",
                desc: "Direct access to top educators",
              },
              {
                icon: "📊",
                title: "Advanced Analytics",
                desc: "Deep insights into your learning patterns",
              },
              {
                icon: "🏆",
                title: "Exclusive Badges",
                desc: "Premium profile badges & rewards",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-3 p-3 rounded-xl bg-muted/40"
              >
                <span className="text-xl">{f.icon}</span>
                <div>
                  <div className="font-semibold text-sm">{f.title}</div>
                  <div className="text-xs text-muted-foreground">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-center">
            <span className="text-amber-700 font-semibold text-sm">
              🚀 Coming Soon
            </span>
            <p className="text-xs text-amber-600 mt-0.5">
              We are working on Premium. Stay tuned!
            </p>
          </div>
          <DialogFooter>
            <button
              type="button"
              className="w-full py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              onClick={() => setPremiumOpen(false)}
              data-ocid="student.premium.close_button"
            >
              Got It!
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Active Live Classes */}
      <ActiveLiveClasses navigate={navigate} />

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
                className="flex items-start gap-3 p-3 rounded-xl bg-muted/40"
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
