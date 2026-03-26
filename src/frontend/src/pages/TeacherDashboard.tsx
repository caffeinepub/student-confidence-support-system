import VideoCallModal from "@/components/VideoCallModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  ImageIcon,
  Loader2,
  LogOut,
  MessageSquare,
  Mic,
  MicOff,
  Send,
  TrendingUp,
  Video,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

type Priority = "High" | "Medium" | "Low";
type AnswerMode = "text" | "voice" | "video" | "image";

interface DoubtAnswer {
  text?: string;
  voiceUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
}

interface Doubt {
  id: number;
  student: string;
  subject: string;
  subjectColor: string;
  title: string;
  description: string;
  timeAgo: string;
  priority: Priority;
  status: "pending" | "answered";
  answer?: DoubtAnswer;
}

const INITIAL_DOUBTS: Doubt[] = [
  {
    id: 1,
    student: "Arjun S.",
    subject: "Mathematics",
    subjectColor: "bg-blue-100 text-blue-700",
    title: "Why does the limit of sin(x)/x as x→0 equal 1?",
    description:
      "I understand that we can evaluate limits in general, but I'm not sure why this specific case equals 1. I tried L'Hopital's rule but it feels circular. Can you explain using geometry?",
    timeAgo: "2h ago",
    priority: "High",
    status: "pending",
  },
  {
    id: 2,
    student: "Anonymous",
    subject: "Physics",
    subjectColor: "bg-orange-100 text-orange-700",
    title: "How does a transformer work and why can't it use DC?",
    description:
      "I know transformers are used in power transmission but don't understand the principle. My textbook mentions Faraday's law but I need a clearer intuition.",
    timeAgo: "3h ago",
    priority: "High",
    status: "pending",
  },
  {
    id: 3,
    student: "Priya M.",
    subject: "Chemistry",
    subjectColor: "bg-green-100 text-green-700",
    title: "What is the difference between ionic and covalent bonds?",
    description:
      "Both are chemical bonds but I always get confused about when each type forms and what determines which type will form between two elements.",
    timeAgo: "5h ago",
    priority: "Medium",
    status: "pending",
  },
  {
    id: 4,
    student: "Rahul K.",
    subject: "Computer Science",
    subjectColor: "bg-purple-100 text-purple-700",
    title: "What's the difference between a stack and a queue?",
    description:
      "I know both are data structures but can't understand the practical difference and when to use which one. Real-world examples would help.",
    timeAgo: "1d ago",
    priority: "Low",
    status: "answered",
    answer: {
      text: "Stack follows LIFO (Last In, First Out) — like a pile of plates. Queue follows FIFO (First In, First Out) — like a line at a ticket counter. Use stacks for recursion, undo features, and expression evaluation. Use queues for BFS, scheduling, and task processing.",
    },
  },
  {
    id: 5,
    student: "Sneha R.",
    subject: "Biology",
    subjectColor: "bg-teal-100 text-teal-700",
    title: "How does DNA replication ensure accuracy?",
    description:
      "I understand the basic mechanism of DNA replication but want to know how errors are prevented and what happens when they occur.",
    timeAgo: "2d ago",
    priority: "Low",
    status: "answered",
    answer: {
      text: "DNA polymerase has built-in proofreading (3’→5’ exonuclease activity) that removes mismatched bases. Post-replication mismatch repair (MMR) fixes remaining errors. Error rate is ~1 in 10⁹ bases after all repair mechanisms.",
    },
  },
];

const PRIORITY_COLORS: Record<Priority, string> = {
  High: "bg-red-100 text-red-700 border-red-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Low: "bg-green-100 text-green-700 border-green-200",
};

function AnswerPanel({
  doubtId,
  onSubmit,
}: { doubtId: number; onSubmit: (id: number, answer: DoubtAnswer) => void }) {
  const [mode, setMode] = useState<AnswerMode>("text");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async (type: "audio" | "video") => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        type === "video" ? { video: true, audio: true } : { audio: true },
      );
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      chunksRef.current = [];
      mr.ondataavailable = (e) => chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: type === "video" ? "video/webm" : "audio/webm",
        });
        setRecordedBlob(URL.createObjectURL(blob));
        for (const t of stream.getTracks()) {
          t.stop();
        }
      };
      mr.start();
      setIsRecording(true);
    } catch {
      toast.error("Could not access microphone/camera.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const handleSubmit = async () => {
    if (!text.trim() && !recordedBlob && !imagePreview) {
      toast.error("Please provide an answer.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    const answer: DoubtAnswer = {};
    if (text.trim()) answer.text = text.trim();
    if (mode === "voice" && recordedBlob) answer.voiceUrl = recordedBlob;
    if (mode === "video" && recordedBlob) answer.videoUrl = recordedBlob;
    if (mode === "image" && imagePreview) answer.imageUrl = imagePreview;
    onSubmit(doubtId, answer);
    setSubmitting(false);
    toast.success("Answer submitted! The student has been notified. 🎉");
  };

  const MODES: { key: AnswerMode; icon: React.ElementType; label: string }[] = [
    { key: "text", icon: MessageSquare, label: "Text" },
    { key: "voice", icon: Mic, label: "Voice" },
    { key: "video", icon: Video, label: "Video" },
    { key: "image", icon: ImageIcon, label: "Image" },
  ];

  return (
    <div className="mt-4 pt-4 border-t border-border space-y-4">
      <div className="text-sm font-display font-bold text-foreground">
        📬 Your Response
      </div>
      <div className="flex gap-2 flex-wrap">
        {MODES.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => {
              setMode(m.key);
              setRecordedBlob(null);
              setImagePreview(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              mode === m.key
                ? "gradient-primary text-white border-transparent shadow-primary"
                : "bg-muted text-muted-foreground border-border hover:border-primary/30"
            }`}
            data-ocid="teacher.toggle"
          >
            <m.icon className="w-3.5 h-3.5" />
            {m.label}
          </button>
        ))}
      </div>

      {mode === "text" && (
        <Textarea
          placeholder="Type your answer here. Be clear, concise, and encouraging..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[120px] resize-none border-border"
          data-ocid="teacher.textarea"
        />
      )}

      {mode === "voice" && (
        <div className="space-y-3">
          {!recordedBlob ? (
            <div className="flex flex-col items-center gap-3 p-6 bg-muted/40 rounded-xl border border-border">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isRecording ? "bg-red-500 animate-pulse-soft" : "bg-muted"
                }`}
              >
                {isRecording ? (
                  <MicOff className="w-7 h-7 text-white" />
                ) : (
                  <Mic className="w-7 h-7 text-muted-foreground" />
                )}
              </div>
              {isRecording ? (
                <>
                  <div className="text-xs text-red-500 font-medium animate-pulse">
                    ● Recording...
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                    onClick={stopRecording}
                    data-ocid="teacher.secondary_button"
                  >
                    Stop Recording
                  </Button>
                </>
              ) : (
                <Button
                  size="sm"
                  className="rounded-full gradient-primary text-white border-0"
                  onClick={() => startRecording("audio")}
                  data-ocid="teacher.primary_button"
                >
                  Start Recording
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <audio controls src={recordedBlob} className="w-full">
                <track kind="captions" />
              </audio>
              <Button
                size="sm"
                variant="outline"
                className="rounded-lg text-xs"
                onClick={() => setRecordedBlob(null)}
                data-ocid="teacher.delete_button"
              >
                <X className="w-3 h-3 mr-1" /> Re-record
              </Button>
            </div>
          )}
          <Textarea
            placeholder="Add text notes (optional)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="resize-none border-border"
            rows={2}
            data-ocid="teacher.textarea"
          />
        </div>
      )}

      {mode === "video" && (
        <div className="space-y-3">
          {!recordedBlob ? (
            <div className="flex flex-col items-center gap-3 p-6 bg-muted/40 rounded-xl border border-border">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isRecording ? "bg-red-500 animate-pulse-soft" : "bg-muted"
                }`}
              >
                <Video
                  className={`w-7 h-7 ${isRecording ? "text-white" : "text-muted-foreground"}`}
                />
              </div>
              {isRecording ? (
                <>
                  <div className="text-xs text-red-500 font-medium animate-pulse">
                    ● Recording video...
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full"
                    onClick={stopRecording}
                    data-ocid="teacher.secondary_button"
                  >
                    Stop
                  </Button>
                </>
              ) : (
                <Button
                  size="sm"
                  className="rounded-full gradient-primary text-white border-0"
                  onClick={() => startRecording("video")}
                  data-ocid="teacher.primary_button"
                >
                  Start Video
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <video controls src={recordedBlob} className="w-full rounded-xl">
                <track kind="captions" />
              </video>
              <Button
                size="sm"
                variant="outline"
                className="rounded-lg text-xs"
                onClick={() => setRecordedBlob(null)}
                data-ocid="teacher.delete_button"
              >
                <X className="w-3 h-3 mr-1" /> Re-record
              </Button>
            </div>
          )}
          <Textarea
            placeholder="Add text notes (optional)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="resize-none border-border"
            rows={2}
            data-ocid="teacher.textarea"
          />
        </div>
      )}

      {mode === "image" && (
        <div className="space-y-3">
          <button
            type="button"
            className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors w-full"
            onClick={() => fileInputRef.current?.click()}
            data-ocid="teacher.dropzone"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 mx-auto rounded-xl"
              />
            ) : (
              <>
                <ImageIcon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <div className="text-sm text-muted-foreground">
                  Click to upload an image
                </div>
              </>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setImagePreview(URL.createObjectURL(f));
            }}
            data-ocid="teacher.upload_button"
          />
          <Textarea
            placeholder="Add text notes (optional)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="resize-none border-border"
            rows={2}
            data-ocid="teacher.textarea"
          />
        </div>
      )}

      <Button
        className="w-full rounded-xl gradient-primary text-white border-0 shadow-primary font-semibold hover:opacity-90"
        onClick={handleSubmit}
        disabled={submitting}
        data-ocid="teacher.submit_button"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 w-4 h-4" /> Submit Answer
          </>
        )}
      </Button>
    </div>
  );
}

function DoubtCard({
  doubt,
  expanded,
  onToggle,
  onAnswerSubmit,
}: {
  doubt: Doubt;
  expanded: boolean;
  onToggle: () => void;
  onAnswerSubmit: (id: number, answer: DoubtAnswer) => void;
}) {
  const [videoCallOpen, setVideoCallOpen] = useState(false);
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
            {doubt.student === "Anonymous" ? "?" : doubt.student.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge className={`${doubt.subjectColor} border-0 text-xs`}>
                {doubt.subject}
              </Badge>
              <Badge className={`text-xs ${PRIORITY_COLORS[doubt.priority]}`}>
                {doubt.priority}
              </Badge>
              {doubt.status === "answered" && (
                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Answered
                </Badge>
              )}
            </div>
            <div className="font-medium text-foreground text-sm">
              {doubt.title}
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-muted-foreground">
                {doubt.student}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {doubt.timeAgo}
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
                {doubt.description}
              </p>
            </div>
            {doubt.status === "answered" && doubt.answer ? (
              <div className="space-y-3">
                <div className="text-sm font-display font-bold text-foreground">
                  ✅ Your Response
                </div>
                {doubt.answer.voiceUrl && (
                  <audio
                    controls
                    src={doubt.answer.voiceUrl}
                    className="w-full rounded-lg"
                  >
                    <track kind="captions" />
                  </audio>
                )}
                {doubt.answer.videoUrl && (
                  <video
                    controls
                    src={doubt.answer.videoUrl}
                    className="w-full rounded-xl"
                  >
                    <track kind="captions" />
                  </video>
                )}
                {doubt.answer.imageUrl && (
                  <img
                    src={doubt.answer.imageUrl}
                    alt="Answer"
                    className="rounded-xl max-w-sm"
                  />
                )}
                {doubt.answer.text && (
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {doubt.answer.text}
                    </p>
                  </div>
                )}
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
                  studentName={doubt.student}
                  isTeacher={true}
                />
              </div>
            ) : (
              <AnswerPanel doubtId={doubt.id} onSubmit={onAnswerSubmit} />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [doubts, setDoubts] = useState<Doubt[]>(INITIAL_DOUBTS);
  const [expanded, setExpanded] = useState<number | null>(1);

  const pending = doubts.filter((d) => d.status === "pending");
  const answered = doubts.filter((d) => d.status === "answered");
  const answeredToday = answered.filter((d) =>
    d.timeAgo.includes("h ago"),
  ).length;
  const responseRate = Math.round((answered.length / doubts.length) * 100);

  const handleAnswerSubmit = (id: number, answer: DoubtAnswer) => {
    setDoubts((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: "answered" as const, answer } : d,
      ),
    );
    setExpanded(null);
  };

  const STATS = [
    {
      label: "Total Doubts",
      value: doubts.length,
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Answered Today",
      value: answeredToday,
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
      value: `${responseRate}%`,
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
            <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold text-sm">
              MR
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-sm">
                Prof. Meena Rao
              </div>
              <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                Teacher
              </Badge>
            </div>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
            onClick={() => navigate({ to: "/" })}
            data-ocid="teacher.secondary_button"
          >
            <LogOut className="w-4 h-4 mr-1" /> Exit
          </Button>
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
        </div>

        <Tabs defaultValue="pending" data-ocid="teacher.tab">
          <TabsList className="bg-muted/50 rounded-xl p-1">
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
            <TabsTrigger
              value="all"
              className="rounded-lg"
              data-ocid="teacher.tab"
            >
              All
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="mt-4 space-y-3">
            {pending.length === 0 ? (
              <div
                className="text-center py-16 text-muted-foreground"
                data-ocid="teacher.empty_state"
              >
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-green-300" />
                <div className="font-medium">
                  All caught up! No pending doubts. 🎉
                </div>
              </div>
            ) : (
              pending.map((d) => (
                <DoubtCard
                  key={d.id}
                  doubt={d}
                  expanded={expanded === d.id}
                  onToggle={() => setExpanded(expanded === d.id ? null : d.id)}
                  onAnswerSubmit={handleAnswerSubmit}
                />
              ))
            )}
          </TabsContent>

          <TabsContent value="answered" className="mt-4 space-y-3">
            {answered.map((d) => (
              <DoubtCard
                key={d.id}
                doubt={d}
                expanded={expanded === d.id}
                onToggle={() => setExpanded(expanded === d.id ? null : d.id)}
                onAnswerSubmit={handleAnswerSubmit}
              />
            ))}
          </TabsContent>

          <TabsContent value="all" className="mt-4 space-y-3">
            {doubts.map((d) => (
              <DoubtCard
                key={d.id}
                doubt={d}
                expanded={expanded === d.id}
                onToggle={() => setExpanded(expanded === d.id ? null : d.id)}
                onAnswerSubmit={handleAnswerSubmit}
              />
            ))}
          </TabsContent>
        </Tabs>

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
      </main>
    </div>
  );
}
