import AvatarButton from "@/components/AvatarButton";
import VideoCallModal from "@/components/VideoCallModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { rtdbSet } from "@/hooks/useFirebaseRTDB";
import { useNavigate } from "@tanstack/react-router";
import {
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Loader2,
  LogOut,
  MessageSquare,
  Mic,
  Send,
  Star,
  TrendingUp,
  Video,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { loadLocalProfile } from "../hooks/useLocalProfile";
import { useNotifications } from "../hooks/useNotifications";
import { useFirebaseRating } from "../hooks/useRatings";
import {
  type FirestoreDoubt,
  answerDoubt,
  useAllDoubts,
} from "../lib/useFirestoreDoubts";
import { type FirestoreUser, getAllStudents } from "../lib/useFirestoreUsers";

// ── Live Class Form ──────────────────────────────────────────────────────────
function LiveClassForm({
  navigate,
  teacherName,
  userId,
}: {
  navigate: ReturnType<typeof useNavigate>;
  teacherName: string;
  userId: string;
}) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  function startClass() {
    if (!title.trim()) return;
    const classId = Date.now().toString(36);
    rtdbSet(`liveClasses/${classId}`, {
      title: title.trim(),
      subject: subject.trim() || "General",
      hostId: userId,
      hostName: teacherName,
      startedAt: Date.now(),
      active: true,
      viewerCount: 0,
    });
    navigate({ to: `/live/${classId}`, search: { role: "host" } });
  }

  return (
    <div className="space-y-3">
      <div>
        <Label className="text-xs text-muted-foreground mb-1 block">
          Class Title
        </Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Algebra - Chapter 5"
          data-ocid="liveclass.input"
        />
      </div>
      <div>
        <Label className="text-xs text-muted-foreground mb-1 block">
          Subject
        </Label>
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Mathematics"
        />
      </div>
      <Button
        className="w-full gradient-primary text-white"
        onClick={startClass}
        disabled={!title.trim()}
        data-ocid="liveclass.primary_button"
      >
        🎥 Go Live
      </Button>
    </div>
  );
}

// ── Call Students ─────────────────────────────────────────────────────────────
function CallStudents({
  navigate,
  teacherName,
  userId,
}: {
  navigate: ReturnType<typeof useNavigate>;
  teacherName: string;
  userId: string;
}) {
  const [students, setStudents] = useState<FirestoreUser[]>([]);

  useEffect(() => {
    getAllStudents()
      .then(setStudents)
      .catch(() => setStudents([]));
  }, []);

  function initiateCall(student: FirestoreUser, callType: "audio" | "video") {
    const callId = `${userId}_${Date.now().toString(36)}`;
    rtdbSet(`calls/${student.id}/incoming`, {
      callId,
      callerName: teacherName,
      callType,
      callerUserId: userId,
    });
    navigate({ to: `/call/${callId}`, search: { role: "caller", callType } });
  }

  if (students.length === 0) {
    return (
      <div
        className="text-center text-muted-foreground text-sm py-4"
        data-ocid="call.empty_state"
      >
        No students found. Students will appear here once they register.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {students.slice(0, 6).map((s, i) => (
        <div
          key={s.id}
          className="flex items-center justify-between p-3 rounded-xl bg-muted/40"
          data-ocid={`call.item.${i + 1}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
              {s.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-medium">{s.name}</div>
              <div className="text-xs text-muted-foreground">Student</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => initiateCall(s, "audio")}
              data-ocid={`call.secondary_button.${i + 1}`}
            >
              <Mic className="w-3.5 h-3.5" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => initiateCall(s, "video")}
              data-ocid={`call.edit_button.${i + 1}`}
            >
              <Video className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Firestore Doubt Card ──────────────────────────────────────────────────────
function FirestoreDoubtCard({
  doubt,
  expanded,
  onToggle,
  teacherName,
  onAnswered,
}: {
  doubt: FirestoreDoubt;
  expanded: boolean;
  onToggle: () => void;
  teacherName: string;
  onAnswered: () => void;
}) {
  const [answerText, setAnswerText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [videoCallOpen, setVideoCallOpen] = useState(false);

  const subjectColor = "bg-primary/10 text-primary";

  async function handleSubmitAnswer() {
    if (!answerText.trim()) {
      toast.error("Please type an answer");
      return;
    }
    setSubmitting(true);
    try {
      await answerDoubt(doubt.id, answerText.trim(), teacherName, doubt.userId);
      toast.success("Answer submitted!");
      setAnswerText("");
      onAnswered();
    } catch {
      toast.error("Failed to submit answer. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const timeAgo = (() => {
    const diff = Date.now() - doubt.createdAt;
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return new Date(doubt.createdAt).toLocaleDateString();
  })();

  return (
    <Card
      className="glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300"
      data-ocid={`teacher.item.${doubt.id}`}
    >
      <CardContent className="p-5">
        <button
          type="button"
          className="flex items-start gap-3 cursor-pointer w-full text-left"
          onClick={onToggle}
        >
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
            {doubt.isAnonymous ? "?" : doubt.studentName.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge className={`${subjectColor} border-0 text-xs`}>
                {doubt.subject || "General"}
              </Badge>
              {doubt.status === "answered" ? (
                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Answered
                </Badge>
              ) : (
                <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs">
                  <Clock className="w-3 h-3 mr-1" /> Pending
                </Badge>
              )}
            </div>
            <div className="font-medium text-foreground text-sm line-clamp-2">
              {doubt.question}
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-muted-foreground">
                {doubt.isAnonymous ? "Anonymous" : doubt.studentName}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {timeAgo}
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </button>

        {expanded && (
          <div className="mt-4 animate-fade-in">
            <div className="bg-muted/40 rounded-xl p-4 mb-4">
              <div className="text-xs text-muted-foreground font-medium mb-1">
                Full Question
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {doubt.question}
              </p>
            </div>

            {doubt.status === "answered" && doubt.answer ? (
              <div className="space-y-3">
                <div className="text-sm font-display font-bold text-foreground">
                  ✅ Your Response
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
                <Button
                  size="sm"
                  className="rounded-full gradient-primary text-white border-0 shadow-primary mt-2"
                  onClick={() => setVideoCallOpen(true)}
                  data-ocid="teacher.primary_button"
                >
                  <Video className="w-4 h-4 mr-2" /> Start Video Call
                </Button>
                <VideoCallModal
                  open={videoCallOpen}
                  onClose={() => setVideoCallOpen(false)}
                  studentName={
                    doubt.isAnonymous ? "Student" : doubt.studentName
                  }
                  isTeacher={true}
                />
              </div>
            ) : (
              <div className="space-y-3">
                <Textarea
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  placeholder="Type your answer..."
                  rows={4}
                  data-ocid="teacher.textarea"
                />
                <Button
                  className="w-full gradient-primary text-white"
                  onClick={handleSubmitAnswer}
                  disabled={submitting || !answerText.trim()}
                  data-ocid="teacher.submit_button"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" /> Submit Answer
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ── Rating Display ────────────────────────────────────────────────────────────
function TeacherRatingCard({ teacherName }: { teacherName: string }) {
  const { average, count } = useFirebaseRating(teacherName);
  return (
    <Card
      className="glass-card border-white/40 warm-shadow col-span-2 lg:col-span-1"
      data-ocid="teacher.card.5"
    >
      <CardContent className="p-5">
        <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center mb-3">
          <Star className="w-5 h-5 text-yellow-500" />
        </div>
        <div className="text-2xl font-display font-bold text-foreground">
          {average > 0 ? `${average.toFixed(1)} / 5` : "—"}
        </div>
        <div className="text-xs text-muted-foreground">
          Avg Rating {count > 0 ? `(${count})` : ""}
        </div>
        {average > 0 && (
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-xs ${
                  star <= Math.round(average)
                    ? "text-yellow-400"
                    : "text-muted-foreground/30"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function TeacherDashboard() {
  const navigate = useNavigate();
  const localProfile = loadLocalProfile();
  const userId = localProfile?.userId ?? "";
  const teacherName = localProfile?.displayName ?? "Teacher";

  const firestoreDoubts = useAllDoubts();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterTab, setFilterTab] = useState<"all" | "pending" | "answered">(
    "pending",
  );

  // Notifications
  const { notifications, unreadCount, markRead, markAllRead } =
    useNotifications(userId);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const pending = firestoreDoubts.filter((d) => d.status === "pending");
  const answered = firestoreDoubts.filter((d) => d.status === "answered");
  const displayDoubts =
    filterTab === "pending"
      ? pending
      : filterTab === "answered"
        ? answered
        : firestoreDoubts;

  const STATS = [
    {
      label: "Total Doubts",
      value: firestoreDoubts.length,
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Answered",
      value: answered.length,
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      label: "Pending",
      value: pending.length,
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      label: "Response Rate",
      value:
        firestoreDoubts.length > 0
          ? `${Math.round((answered.length / firestoreDoubts.length) * 100)}%`
          : "0%",
      icon: TrendingUp,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AvatarButton
              imageUrl={localProfile?.profileImageUrl}
              name={teacherName}
            />
            <div>
              <div className="font-display font-bold text-foreground text-sm">
                {teacherName}
              </div>
              <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                Teacher
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Notification Bell */}
            <div className="relative" ref={notifRef}>
              <button
                type="button"
                className="relative w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-muted/60 transition-colors"
                onClick={() => setNotifOpen((o) => !o)}
                aria-label="Notifications"
                data-ocid="teacher.open_modal_button"
              >
                <Bell className="w-4 h-4 text-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifOpen && (
                <div
                  className="absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl shadow-xl border-white/40 overflow-hidden z-50"
                  data-ocid="teacher.popover"
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
                        data-ocid="teacher.secondary_button"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-72 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="py-6 text-center text-sm text-muted-foreground">
                        No notifications yet
                      </div>
                    ) : (
                      notifications.map((n) => (
                        <button
                          key={n.id}
                          type="button"
                          className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${
                            n.read ? "opacity-60" : ""
                          }`}
                          onClick={() => {
                            markRead(n.id);
                            setNotifOpen(false);
                          }}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-foreground leading-snug">
                              {n.message}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {new Date(n.createdAt).toLocaleTimeString()}
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
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              onClick={() => navigate({ to: "/" })}
              data-ocid="teacher.link"
            >
              <LogOut className="w-4 h-4 mr-1" /> Exit
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Review student doubts and provide helpful answers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((s, i) => (
            <Card
              key={s.label}
              className="glass-card border-white/40 warm-shadow"
              data-ocid={`teacher.card.${i + 1}`}
            >
              <CardContent className="p-5">
                <div
                  className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}
                >
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div className="text-2xl font-display font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </CardContent>
            </Card>
          ))}
          <TeacherRatingCard teacherName={teacherName} />
        </div>

        {/* Doubts with filter tabs */}
        <Tabs
          value={filterTab}
          onValueChange={(v) =>
            setFilterTab(v as "all" | "pending" | "answered")
          }
          data-ocid="teacher.tab"
          id="pending-doubts"
        >
          <TabsList className="bg-muted/50 rounded-xl p-1">
            <TabsTrigger
              value="all"
              className="rounded-lg"
              data-ocid="teacher.tab"
            >
              All
              {firestoreDoubts.length > 0 && (
                <Badge className="ml-2 bg-muted text-muted-foreground text-xs">
                  {firestoreDoubts.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="rounded-lg"
              data-ocid="teacher.tab"
            >
              Pending
              {pending.length > 0 && (
                <Badge className="ml-2 bg-amber-100 text-amber-700 border-amber-200 text-xs">
                  {pending.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="answered"
              className="rounded-lg"
              data-ocid="teacher.tab"
            >
              Answered
            </TabsTrigger>
          </TabsList>

          <TabsContent value={filterTab} className="mt-4 space-y-3">
            {displayDoubts.length === 0 ? (
              <div
                className="text-center py-16 text-muted-foreground"
                data-ocid="teacher.empty_state"
              >
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-green-300" />
                <div className="font-medium">
                  {filterTab === "pending"
                    ? "All caught up! No pending doubts. 🎉"
                    : "No doubts in this category."}
                </div>
              </div>
            ) : (
              displayDoubts.map((d) => (
                <FirestoreDoubtCard
                  key={d.id}
                  doubt={d}
                  expanded={expandedId === d.id}
                  onToggle={() =>
                    setExpandedId(expandedId === d.id ? null : d.id)
                  }
                  teacherName={teacherName}
                  onAnswered={() => setExpandedId(null)}
                />
              ))
            )}
          </TabsContent>
        </Tabs>

        {/* Live Class */}
        <Card className="glass-card border-white/40 warm-shadow">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h2 className="font-display font-bold text-foreground">
                Start Live Class
              </h2>
            </div>
            <LiveClassForm
              navigate={navigate}
              teacherName={teacherName}
              userId={userId}
            />
          </CardContent>
        </Card>

        {/* Call Students */}
        <Card className="glass-card border-white/40 warm-shadow">
          <CardContent className="p-5">
            <h2 className="font-display font-bold text-foreground mb-4">
              📞 Call a Student
            </h2>
            <CallStudents
              navigate={navigate}
              teacherName={teacherName}
              userId={userId}
            />
          </CardContent>
        </Card>

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
      </main>
    </div>
  );
}
