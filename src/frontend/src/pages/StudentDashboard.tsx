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
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
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
  Video,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MOCK_DOUBTS = [
  {
    id: 1,
    subject: "Mathematics",
    subjectColor: "bg-blue-100 text-blue-700",
    title: "Why does the limit of sin(x)/x as x→0 equal 1?",
    status: "Answered",
    timeAgo: "2 hours ago",
    answer: {
      teacher: "Prof. Meena Rao",
      text: "Great question! The limit sin(x)/x → 1 as x→0 is proved using the squeeze theorem. Consider the unit circle: the area of triangle ≤ sector ≤ outer triangle gives us cos(x) ≤ sin(x)/x ≤ 1/cos(x). As x→0, both bounds converge to 1, so by squeeze theorem, sin(x)/x → 1.",
      voiceUrl: "",
      videoUrl: "",
      imageUrl: "",
    },
  },
  {
    id: 2,
    subject: "Computer Science",
    subjectColor: "bg-purple-100 text-purple-700",
    title: "What's the difference between a stack and a queue?",
    status: "Answered",
    timeAgo: "1 day ago",
    answer: {
      teacher: "Mr. Arjun Das",
      text: "Stack follows LIFO (Last In, First Out) — like a pile of plates. Queue follows FIFO (First In, First Out) — like a line at a ticket counter. Stacks use push/pop; queues use enqueue/dequeue. Stacks are used in recursion and undo operations; queues in BFS and scheduling.",
      voiceUrl: "",
      videoUrl: "",
      imageUrl: "",
    },
  },
  {
    id: 3,
    subject: "Physics",
    subjectColor: "bg-orange-100 text-orange-700",
    title: "How does a transformer work and why can't it work on DC?",
    status: "Pending",
    timeAgo: "3 hours ago",
    answer: null,
  },
  {
    id: 4,
    subject: "Chemistry",
    subjectColor: "bg-green-100 text-green-700",
    title: "What is the difference between ionic and covalent bonds?",
    status: "Pending",
    timeAgo: "5 hours ago",
    answer: null,
  },
];

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

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    icon: "\u2705",
    text: "Prof. Meena Rao answered your Math doubt",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    icon: "\ud83d\udcac",
    text: "New message from Mr. Arjun Das",
    time: "4h ago",
    read: false,
  },
  {
    id: 3,
    icon: "\ud83d\udcdd",
    text: "Your weekly test is ready!",
    time: "1d ago",
    read: false,
  },
];

const TEST_HISTORY = [
  { week: 12, score: 80, strong: ["CS"], fearZones: ["Math"] },
  { week: 11, score: 65, strong: ["Math", "CS"], fearZones: ["Physics"] },
  { week: 10, score: 50, strong: ["CS"], fearZones: ["Chemistry", "Biology"] },
  { week: 9, score: 40, strong: [], fearZones: ["Math", "Physics", "CS"] },
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

export default function StudentDashboard() {
  const navigate = useNavigate();

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
  const [expandedDoubt, setExpandedDoubt] = useState<number | null>(1);
  const [videoCallDoubt, setVideoCallDoubt] = useState<number | null>(null);

  // Search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Notifications
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Test history
  const [historyExpanded, setHistoryExpanded] = useState(true);

  // Ratings keyed by doubt id
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [hoverRating, setHoverRating] = useState<Record<number, number>>({});

  // Replies keyed by doubt id
  const [replyInputs, setReplyInputs] = useState<Record<number, string>>({});
  const [replies, setReplies] = useState<Record<number, string[]>>({});

  const confidenceScore = 73;
  const xp = 1240;
  const xpToNext = 2000;

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
      ? MOCK_DOUBTS.filter(
          (d) =>
            d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (d.answer?.text ?? "")
              .toLowerCase()
              .includes(searchQuery.toLowerCase()),
        )
      : [];

  function markRead(id: number) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function submitReply(doubtId: number) {
    const text = (replyInputs[doubtId] ?? "").trim();
    if (!text) return;
    setReplies((prev) => ({
      ...prev,
      [doubtId]: [...(prev[doubtId] ?? []), text],
    }));
    setReplyInputs((prev) => ({ ...prev, [doubtId]: "" }));
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
      {notifications.map((n) => (
        <button
          key={n.id}
          type="button"
          className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${n.read ? "opacity-60" : ""}`}
          onClick={() => markRead(n.id)}
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
      {notifications.every((n) => n.read) && (
        <div className="p-4 text-center text-sm text-muted-foreground">
          You're all caught up! \uD83C\uDF89
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
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm">
              AS
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-sm">
                Arjun Sharma
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                Student
              </Badge>
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
                          <Badge
                            className={`${d.subjectColor} border-0 text-xs`}
                          >
                            {d.subject}
                          </Badge>
                          <Badge
                            className={`text-xs border-0 ${d.status === "Answered" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                          >
                            {d.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-foreground mt-1 line-clamp-1">
                          {d.title}
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
                  <Badge className={`${d.subjectColor} border-0 text-xs`}>
                    {d.subject}
                  </Badge>
                  <div className="text-sm text-foreground mt-1 line-clamp-1">
                    {d.title}
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
              You're doing amazing, Arjun!
            </div>
            <div className="text-sm text-muted-foreground">
              You've asked 4 questions this week. Keep it up — curious minds
              grow faster!
            </div>
          </div>
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 animate-pulse-soft hidden sm:flex">
            🔥 7-day streak
          </Badge>
        </div>

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
                  {TEST_HISTORY.map((row, i) => (
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
                  ))}
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
        <div>
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
            {MOCK_DOUBTS.map((doubt, i) => (
              <Card
                key={doubt.id}
                className="glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300"
                data-ocid={`student.item.${i + 1}`}
                data-doubt-id={doubt.id}
              >
                <CardContent className="p-5">
                  {/* Header row - clickable */}
                  <button
                    type="button"
                    className="flex items-start justify-between gap-3 w-full text-left"
                    onClick={() =>
                      setExpandedDoubt(
                        expandedDoubt === doubt.id ? null : doubt.id,
                      )
                    }
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <Badge
                          className={`${doubt.subjectColor} border-0 text-xs`}
                        >
                          {doubt.subject}
                        </Badge>
                        <Badge
                          className={`text-xs border-0 ${doubt.status === "Answered" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                        >
                          {doubt.status === "Answered" ? (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          ) : (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {doubt.status}
                        </Badge>
                      </div>
                      <div className="font-medium text-foreground text-sm truncate">
                        {doubt.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {doubt.timeAgo}
                      </div>
                    </div>
                    {expandedDoubt === doubt.id ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </button>

                  {/* Expanded: has answer */}
                  {expandedDoubt === doubt.id && doubt.answer && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700">
                          {doubt.answer.teacher.charAt(0)}
                        </div>
                        <span className="text-xs font-semibold text-foreground">
                          {doubt.answer.teacher}
                        </span>
                        <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                          Teacher
                        </Badge>
                      </div>
                      {doubt.answer.voiceUrl && (
                        <audio
                          controls
                          src={doubt.answer.voiceUrl}
                          className="w-full mb-3 rounded-lg"
                        >
                          <track kind="captions" />
                        </audio>
                      )}
                      {doubt.answer.videoUrl && (
                        <video
                          controls
                          src={doubt.answer.videoUrl}
                          className="w-full rounded-xl mb-3"
                        >
                          <track kind="captions" />
                        </video>
                      )}
                      {doubt.answer.imageUrl && (
                        <img
                          src={doubt.answer.imageUrl}
                          alt="Teacher attachment"
                          className="rounded-xl mb-3 max-w-sm"
                        />
                      )}
                      {doubt.answer.text && (
                        <p className="text-sm text-foreground/80 leading-relaxed bg-muted/40 rounded-xl p-4">
                          {doubt.answer.text}
                        </p>
                      )}
                      <Button
                        size="sm"
                        className="rounded-full gradient-primary text-white border-0 shadow-primary mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setVideoCallDoubt(doubt.id);
                        }}
                        data-ocid="student.primary_button"
                      >
                        <Video className="w-4 h-4 mr-2" /> Join Video Call
                      </Button>

                      {/* Rating & Reply divider */}
                      <div className="border-t border-border/50 mt-4 pt-4">
                        {/* Star Rating */}
                        {ratings[doubt.id] ? (
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm text-muted-foreground">
                              Thanks for your feedback!
                            </span>
                            <span className="font-bold text-amber-500">
                              ⭐ {ratings[doubt.id]}/5
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm text-muted-foreground">
                              Rate this answer:
                            </span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  className="transition-transform hover:scale-110 focus:outline-none"
                                  onClick={() =>
                                    setRatings((prev) => ({
                                      ...prev,
                                      [doubt.id]: star,
                                    }))
                                  }
                                  onMouseEnter={() =>
                                    setHoverRating((prev) => ({
                                      ...prev,
                                      [doubt.id]: star,
                                    }))
                                  }
                                  onMouseLeave={() =>
                                    setHoverRating((prev) => ({
                                      ...prev,
                                      [doubt.id]: 0,
                                    }))
                                  }
                                  aria-label={`Rate ${star} star`}
                                  data-ocid={`student.toggle.${star}`}
                                >
                                  <Star
                                    className={`w-5 h-5 ${star <= (hoverRating[doubt.id] ?? 0) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Reply section */}
                        <div className="space-y-2">
                          {(replies[doubt.id] ?? []).map((reply, ri) => (
                            <div
                              key={`reply-${doubt.id}-${ri}`}
                              className="flex items-start gap-2 bg-muted/30 rounded-xl p-3"
                            >
                              <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                A
                              </div>
                              <span className="text-sm text-foreground">
                                {reply}
                              </span>
                            </div>
                          ))}
                          <div className="flex gap-2">
                            <Input
                              className="flex-1 rounded-full h-9 text-sm bg-white/60 border-border"
                              placeholder="Ask a follow-up…"
                              value={replyInputs[doubt.id] ?? ""}
                              onChange={(e) =>
                                setReplyInputs((prev) => ({
                                  ...prev,
                                  [doubt.id]: e.target.value,
                                }))
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") submitReply(doubt.id);
                              }}
                              data-ocid="student.input"
                            />
                            <Button
                              size="sm"
                              className="rounded-full gradient-primary text-white border-0 h-9 w-9 p-0 flex-shrink-0"
                              onClick={() => submitReply(doubt.id)}
                              data-ocid="student.submit_button"
                            >
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expanded: pending */}
                  {expandedDoubt === doubt.id && !doubt.answer && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <div className="flex items-center gap-2 text-sm text-amber-600">
                        <Clock className="w-4 h-4" /> Your doubt is in the
                        queue. A teacher will respond soon!
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
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
            const d = MOCK_DOUBTS.find((x) => x.id === videoCallDoubt);
            return (
              <VideoCallModal
                open={videoCallDoubt !== null}
                onClose={() => setVideoCallDoubt(null)}
                studentName={d?.answer?.teacher ?? "Prof. Meena Rao"}
                isTeacher={false}
              />
            );
          })()}
      </main>

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
