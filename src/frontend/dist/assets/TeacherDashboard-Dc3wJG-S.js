import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-B3Qkl9ao.js";
import { M as MessageSquare, B as Bell, L as LogOut, V as Video, a as VideoCallModal, b as MicOff } from "./VideoCallModal-DQ1D_8aT.js";
import { B as Badge } from "./badge-CLbRtZYJ.js";
import { c as createLucideIcon, B as Button } from "./button-DXml6wI1.js";
import { C as Card, a as CardContent } from "./card-Bd0pzzq1.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DAqy9GSp.js";
import { T as Textarea } from "./textarea-CVJ_hUSl.js";
import { C as CircleCheck } from "./circle-check-Dfie66Cm.js";
import { C as Clock } from "./clock-CNqDoMRW.js";
import { T as TrendingUp, M as Mic } from "./trending-up-BAqB0kZH.js";
import { C as ChevronUp } from "./chevron-up-BKGYwQM0.js";
import { C as ChevronDown } from "./chevron-down-CsiIlkQB.js";
import { X } from "./x-CiiwNP2W.js";
import { L as LoaderCircle } from "./loader-circle-Bi4Gtzrx.js";
import { S as Send } from "./send-BEUzXilv.js";
import "./dialog-DR4OpiAS.js";
import "./index-ByOp_5W7.js";
import "./index-D3jB3YKe.js";
import "./Combination-BJg4r2Eo.js";
import "./index-DILF7umX.js";
import "./monitor-C8kk-SnJ.js";
import "./index-DvLujgAu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode);
const INITIAL_DOUBTS = [
  {
    id: 1,
    student: "Arjun S.",
    subject: "Mathematics",
    subjectColor: "bg-blue-100 text-blue-700",
    title: "Why does the limit of sin(x)/x as x→0 equal 1?",
    description: "I understand that we can evaluate limits in general, but I'm not sure why this specific case equals 1. I tried L'Hopital's rule but it feels circular. Can you explain using geometry?",
    timeAgo: "2h ago",
    priority: "High",
    status: "pending"
  },
  {
    id: 2,
    student: "Anonymous",
    subject: "Physics",
    subjectColor: "bg-orange-100 text-orange-700",
    title: "How does a transformer work and why can't it use DC?",
    description: "I know transformers are used in power transmission but don't understand the principle. My textbook mentions Faraday's law but I need a clearer intuition.",
    timeAgo: "3h ago",
    priority: "High",
    status: "pending"
  },
  {
    id: 3,
    student: "Priya M.",
    subject: "Chemistry",
    subjectColor: "bg-green-100 text-green-700",
    title: "What is the difference between ionic and covalent bonds?",
    description: "Both are chemical bonds but I always get confused about when each type forms and what determines which type will form between two elements.",
    timeAgo: "5h ago",
    priority: "Medium",
    status: "pending"
  },
  {
    id: 4,
    student: "Rahul K.",
    subject: "Computer Science",
    subjectColor: "bg-purple-100 text-purple-700",
    title: "What's the difference between a stack and a queue?",
    description: "I know both are data structures but can't understand the practical difference and when to use which one. Real-world examples would help.",
    timeAgo: "1d ago",
    priority: "Low",
    status: "answered",
    answer: {
      text: "Stack follows LIFO (Last In, First Out) — like a pile of plates. Queue follows FIFO (First In, First Out) — like a line at a ticket counter. Use stacks for recursion, undo features, and expression evaluation. Use queues for BFS, scheduling, and task processing."
    }
  },
  {
    id: 5,
    student: "Sneha R.",
    subject: "Biology",
    subjectColor: "bg-teal-100 text-teal-700",
    title: "How does DNA replication ensure accuracy?",
    description: "I understand the basic mechanism of DNA replication but want to know how errors are prevented and what happens when they occur.",
    timeAgo: "2d ago",
    priority: "Low",
    status: "answered",
    answer: {
      text: "DNA polymerase has built-in proofreading (3’→5’ exonuclease activity) that removes mismatched bases. Post-replication mismatch repair (MMR) fixes remaining errors. Error rate is ~1 in 10⁹ bases after all repair mechanisms."
    }
  }
];
const PRIORITY_COLORS = {
  High: "bg-red-100 text-red-700 border-red-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Low: "bg-green-100 text-green-700 border-green-200"
};
function AnswerPanel({
  doubtId,
  onSubmit
}) {
  const [mode, setMode] = reactExports.useState("text");
  const [text, setText] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [isRecording, setIsRecording] = reactExports.useState(false);
  const [recordedBlob, setRecordedBlob] = reactExports.useState(null);
  const [imagePreview, setImagePreview] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const mediaRecorderRef = reactExports.useRef(null);
  const chunksRef = reactExports.useRef([]);
  const startRecording = async (type) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        type === "video" ? { video: true, audio: true } : { audio: true }
      );
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      chunksRef.current = [];
      mr.ondataavailable = (e) => chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: type === "video" ? "video/webm" : "audio/webm"
        });
        setRecordedBlob(URL.createObjectURL(blob));
        for (const t of stream.getTracks()) {
          t.stop();
        }
      };
      mr.start();
      setIsRecording(true);
    } catch {
      ue.error("Could not access microphone/camera.");
    }
  };
  const stopRecording = () => {
    var _a;
    (_a = mediaRecorderRef.current) == null ? void 0 : _a.stop();
    setIsRecording(false);
  };
  const handleSubmit = async () => {
    if (!text.trim() && !recordedBlob && !imagePreview) {
      ue.error("Please provide an answer.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    const answer = {};
    if (text.trim()) answer.text = text.trim();
    if (mode === "voice" && recordedBlob) answer.voiceUrl = recordedBlob;
    if (mode === "video" && recordedBlob) answer.videoUrl = recordedBlob;
    if (mode === "image" && imagePreview) answer.imageUrl = imagePreview;
    onSubmit(doubtId, answer);
    setSubmitting(false);
    ue.success("Answer submitted! The student has been notified. 🎉");
  };
  const MODES = [
    { key: "text", icon: MessageSquare, label: "Text" },
    { key: "voice", icon: Mic, label: "Voice" },
    { key: "video", icon: Video, label: "Video" },
    { key: "image", icon: Image, label: "Image" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-display font-bold text-foreground", children: "📬 Your Response" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: MODES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => {
          setMode(m.key);
          setRecordedBlob(null);
          setImagePreview(null);
        },
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${mode === m.key ? "gradient-primary text-white border-transparent shadow-primary" : "bg-muted text-muted-foreground border-border hover:border-primary/30"}`,
        "data-ocid": "teacher.toggle",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "w-3.5 h-3.5" }),
          m.label
        ]
      },
      m.key
    )) }),
    mode === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        placeholder: "Type your answer here. Be clear, concise, and encouraging...",
        value: text,
        onChange: (e) => setText(e.target.value),
        className: "min-h-[120px] resize-none border-border",
        "data-ocid": "teacher.textarea"
      }
    ),
    mode === "voice" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      !recordedBlob ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 bg-muted/40 rounded-xl border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-16 h-16 rounded-full flex items-center justify-center transition-all ${isRecording ? "bg-red-500 animate-pulse-soft" : "bg-muted"}`,
            children: isRecording ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { className: "w-7 h-7 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-7 h-7 text-muted-foreground" })
          }
        ),
        isRecording ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-red-500 font-medium animate-pulse", children: "● Recording..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-full",
              onClick: stopRecording,
              "data-ocid": "teacher.secondary_button",
              children: "Stop Recording"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "rounded-full gradient-primary text-white border-0",
            onClick: () => startRecording("audio"),
            "data-ocid": "teacher.primary_button",
            children: "Start Recording"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { controls: true, src: recordedBlob, className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "rounded-lg text-xs",
            onClick: () => setRecordedBlob(null),
            "data-ocid": "teacher.delete_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 mr-1" }),
              " Re-record"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          placeholder: "Add text notes (optional)",
          value: text,
          onChange: (e) => setText(e.target.value),
          className: "resize-none border-border",
          rows: 2,
          "data-ocid": "teacher.textarea"
        }
      )
    ] }),
    mode === "video" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      !recordedBlob ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 bg-muted/40 rounded-xl border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-16 h-16 rounded-full flex items-center justify-center transition-all ${isRecording ? "bg-red-500 animate-pulse-soft" : "bg-muted"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Video,
              {
                className: `w-7 h-7 ${isRecording ? "text-white" : "text-muted-foreground"}`
              }
            )
          }
        ),
        isRecording ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-red-500 font-medium animate-pulse", children: "● Recording video..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-full",
              onClick: stopRecording,
              "data-ocid": "teacher.secondary_button",
              children: "Stop"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "rounded-full gradient-primary text-white border-0",
            onClick: () => startRecording("video"),
            "data-ocid": "teacher.primary_button",
            children: "Start Video"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("video", { controls: true, src: recordedBlob, className: "w-full rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "rounded-lg text-xs",
            onClick: () => setRecordedBlob(null),
            "data-ocid": "teacher.delete_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 mr-1" }),
              " Re-record"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          placeholder: "Add text notes (optional)",
          value: text,
          onChange: (e) => setText(e.target.value),
          className: "resize-none border-border",
          rows: 2,
          "data-ocid": "teacher.textarea"
        }
      )
    ] }),
    mode === "image" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors w-full",
          onClick: () => {
            var _a;
            return (_a = fileInputRef.current) == null ? void 0 : _a.click();
          },
          "data-ocid": "teacher.dropzone",
          children: imagePreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imagePreview,
              alt: "Preview",
              className: "max-h-48 mx-auto rounded-xl"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-8 h-8 text-muted-foreground mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Click to upload an image" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: fileInputRef,
          type: "file",
          accept: "image/*",
          className: "hidden",
          onChange: (e) => {
            var _a;
            const f = (_a = e.target.files) == null ? void 0 : _a[0];
            if (f) setImagePreview(URL.createObjectURL(f));
          },
          "data-ocid": "teacher.upload_button"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          placeholder: "Add text notes (optional)",
          value: text,
          onChange: (e) => setText(e.target.value),
          className: "resize-none border-border",
          rows: 2,
          "data-ocid": "teacher.textarea"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full rounded-xl gradient-primary text-white border-0 shadow-primary font-semibold hover:opacity-90",
        onClick: handleSubmit,
        disabled: submitting,
        "data-ocid": "teacher.submit_button",
        children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 w-4 h-4 animate-spin" }),
          " Submitting..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 w-4 h-4" }),
          " Submit Answer"
        ] })
      }
    )
  ] });
}
function DoubtCard({
  doubt,
  expanded,
  onToggle,
  onAnswerSubmit
}) {
  const [videoCallOpen, setVideoCallOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300",
      "data-ocid": `teacher.item.${doubt.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "flex items-start gap-3 cursor-pointer w-full text-left",
            onClick: onToggle,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0", children: doubt.student === "Anonymous" ? "?" : doubt.student.charAt(0) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${doubt.subjectColor} border-0 text-xs`, children: doubt.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-xs ${PRIORITY_COLORS[doubt.priority]}`, children: doubt.priority }),
                  doubt.status === "answered" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-green-100 text-green-700 border-green-200 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
                    " Answered"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm", children: doubt.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: doubt.student }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    doubt.timeAgo
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" }) })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-medium mb-1", children: "Full Question" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: doubt.description })
          ] }),
          doubt.status === "answered" && doubt.answer ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-display font-bold text-foreground", children: "✅ Your Response" }),
            doubt.answer.voiceUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "audio",
              {
                controls: true,
                src: doubt.answer.voiceUrl,
                className: "w-full rounded-lg",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" })
              }
            ),
            doubt.answer.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                controls: true,
                src: doubt.answer.videoUrl,
                className: "w-full rounded-xl",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" })
              }
            ),
            doubt.answer.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: doubt.answer.imageUrl,
                alt: "Answer",
                className: "rounded-xl max-w-sm"
              }
            ),
            doubt.answer.text && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 border border-green-100 rounded-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: doubt.answer.text }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "rounded-full gradient-primary text-white border-0 shadow-primary mt-2",
                onClick: () => setVideoCallOpen(true),
                "data-ocid": "teacher.primary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4 mr-2" }),
                  " Start Video Call"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              VideoCallModal,
              {
                open: videoCallOpen,
                onClose: () => setVideoCallOpen(false),
                studentName: doubt.student,
                isTeacher: true
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnswerPanel, { doubtId: doubt.id, onSubmit: onAnswerSubmit })
        ] })
      ] })
    }
  );
}
const TEACHER_MOCK_NOTIFICATIONS = [
  {
    id: 1,
    icon: "❓",
    type: "doubt",
    text: "Arjun S. submitted a new doubt: 'Why does sin(x)/x → 1?'",
    time: "5 min ago",
    read: false
  },
  {
    id: 2,
    icon: "💬",
    type: "reply",
    text: "Priya M. replied to your answer on 'Ionic vs Covalent Bonds'",
    time: "1h ago",
    read: false
  },
  {
    id: 3,
    icon: "⭐",
    type: "rating",
    text: "Rahul K. rated your answer 4/5 stars on 'Stack vs Queue'",
    time: "2h ago",
    read: false
  },
  {
    id: 4,
    icon: "✉️",
    type: "message",
    text: "New personal message from Sneha R.: 'Thank you for the explanation!'",
    time: "3h ago",
    read: true
  }
];
function TeacherDashboard() {
  const navigate = useNavigate();
  const [doubts, setDoubts] = reactExports.useState(INITIAL_DOUBTS);
  const [teacherNotifs, setTeacherNotifs] = reactExports.useState(
    TEACHER_MOCK_NOTIFICATIONS
  );
  const [teacherNotifOpen, setTeacherNotifOpen] = reactExports.useState(false);
  const teacherNotifRef = reactExports.useRef(null);
  const teacherUnreadCount = teacherNotifs.filter((n) => !n.read).length;
  const [expanded, setExpanded] = reactExports.useState(1);
  const pending = doubts.filter((d) => d.status === "pending");
  const answered = doubts.filter((d) => d.status === "answered");
  const answeredToday = answered.filter(
    (d) => d.timeAgo.includes("h ago")
  ).length;
  const responseRate = Math.round(answered.length / doubts.length * 100);
  const handleAnswerSubmit = (id, answer) => {
    setDoubts(
      (prev) => prev.map(
        (d) => d.id === id ? { ...d, status: "answered", answer } : d
      )
    );
    setExpanded(null);
  };
  reactExports.useEffect(() => {
    function handleClick(e) {
      if (teacherNotifRef.current && !teacherNotifRef.current.contains(e.target)) {
        setTeacherNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  function markTeacherNotifRead(id) {
    setTeacherNotifs(
      (prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n)
    );
  }
  function markAllTeacherNotifsRead() {
    setTeacherNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  }
  const STATS = [
    {
      label: "Total Doubts",
      value: doubts.length,
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      label: "Answered Today",
      value: answeredToday,
      icon: CircleCheck,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      label: "Pending",
      value: pending.length,
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      label: "Response Rate",
      value: `${responseRate}%`,
      icon: TrendingUp,
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold text-sm", children: "MR" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Prof. Meena Rao" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-700 border-green-200 text-xs", children: "Teacher" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: teacherNotifRef, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "relative w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-muted/60 transition-colors",
              onClick: () => setTeacherNotifOpen((o) => !o),
              "aria-label": "Teacher Notifications",
              "data-ocid": "teacher.open_modal_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-foreground" }),
                teacherUnreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5", children: teacherUnreadCount })
              ]
            }
          ),
          teacherNotifOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl shadow-xl border-white/40 overflow-hidden z-50",
              "data-ocid": "teacher.popover",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-foreground", children: "Notifications" }),
                  teacherUnreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-xs text-primary hover:underline",
                      onClick: markAllTeacherNotifsRead,
                      "data-ocid": "teacher.secondary_button",
                      children: "Mark all read"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-72 overflow-y-auto", children: [
                  teacherNotifs.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: `w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${n.read ? "opacity-60" : ""}`,
                      onClick: () => markTeacherNotifRead(n.id),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0 mt-0.5", children: n.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground leading-snug", children: n.text }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: n.time })
                        ] }),
                        !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" })
                      ]
                    },
                    n.id
                  )),
                  teacherNotifs.every((n) => n.read) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-sm text-muted-foreground", children: "All caught up! 🎉" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "rounded-full",
            onClick: () => navigate({ to: "/" }),
            "data-ocid": "teacher.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4 mr-1" }),
              " Exit"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Teacher Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Review student doubts and provide helpful answers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "glass-card border-white/40 warm-shadow",
          "data-ocid": `teacher.card.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `w-5 h-5 ${s.color}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label })
          ] })
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "pending", "data-ocid": "teacher.tab", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "bg-muted/50 rounded-xl p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: "pending",
              className: "rounded-lg",
              "data-ocid": "teacher.tab",
              children: [
                "Pending",
                pending.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-2 bg-amber-100 text-amber-700 border-amber-200 text-xs", children: pending.length })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TabsTrigger,
            {
              value: "answered",
              className: "rounded-lg",
              "data-ocid": "teacher.tab",
              children: "Answered"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TabsTrigger,
            {
              value: "all",
              className: "rounded-lg",
              "data-ocid": "teacher.tab",
              children: "All"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pending", className: "mt-4 space-y-3", children: pending.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-16 text-muted-foreground",
            "data-ocid": "teacher.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 mx-auto mb-3 text-green-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: "All caught up! No pending doubts. 🎉" })
            ]
          }
        ) : pending.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          DoubtCard,
          {
            doubt: d,
            expanded: expanded === d.id,
            onToggle: () => setExpanded(expanded === d.id ? null : d.id),
            onAnswerSubmit: handleAnswerSubmit
          },
          d.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "answered", className: "mt-4 space-y-3", children: answered.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          DoubtCard,
          {
            doubt: d,
            expanded: expanded === d.id,
            onToggle: () => setExpanded(expanded === d.id ? null : d.id),
            onAnswerSubmit: handleAnswerSubmit
          },
          d.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "all", className: "mt-4 space-y-3", children: doubts.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          DoubtCard,
          {
            doubt: d,
            expanded: expanded === d.id,
            onToggle: () => setExpanded(expanded === d.id ? null : d.id),
            onAnswerSubmit: handleAnswerSubmit
          },
          d.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-muted-foreground py-6", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        ". Built with ❤️ using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
            target: "_blank",
            rel: "noreferrer",
            className: "underline hover:text-foreground transition-colors",
            children: "caffeine.ai"
          }
        )
      ] })
    ] })
  ] });
}
export {
  TeacherDashboard as default
};
