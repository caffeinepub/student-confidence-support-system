import VideoCallModal from "@/components/VideoCallModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
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
  TrendingUp,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";

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

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [expandedDoubt, setExpandedDoubt] = useState<number | null>(1);
  const [videoCallDoubt, setVideoCallDoubt] = useState<number | null>(null);

  const confidenceScore = 73;
  const xp = 1240;
  const xpToNext = 2000;

  return (
    <div className="min-h-screen bg-background">
      <header className="glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
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
          <div className="flex items-center gap-2">
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

        {/* Stats */}
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
                className={`border warm-shadow text-center transition-all duration-300 ${
                  b.earned
                    ? "glass-card border-white/40 hover:-translate-y-1"
                    : "bg-muted/40 border-border opacity-60"
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
                className="glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300 cursor-pointer"
                data-ocid={`student.item.${i + 1}`}
              >
                <CardContent
                  className="p-5"
                  onClick={() =>
                    setExpandedDoubt(
                      expandedDoubt === doubt.id ? null : doubt.id,
                    )
                  }
                >
                  <div className="flex items-start justify-between gap-3">
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
                  </div>

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
                        onClick={() => setVideoCallDoubt(doubt.id)}
                        data-ocid="student.primary_button"
                      >
                        <Video className="w-4 h-4 mr-2" /> Join Video Call
                      </Button>
                    </div>
                  )}

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
    </div>
  );
}
