import { c as createLucideIcon, u as useNavigate, l as loadLocalProfile, r as reactExports, j as jsxRuntimeExports, V as Video, h as getAllStudents, e as ue, i as rtdbSet } from "./index-BE_nq51s.js";
import { A as AvatarButton, L as LogOut, V as VideoCallModal } from "./VideoCallModal-plUvzJ_D.js";
import { B as Badge } from "./badge-cMy-7hFe.js";
import { B as Button } from "./button-Cl_8vmOC.js";
import { C as Card, a as CardContent } from "./card-D7RzoVUz.js";
import { I as Input } from "./input-DAUunu7h.js";
import { L as Label } from "./label-_JbWer-n.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C3A8wNUn.js";
import { T as Textarea } from "./textarea-CzPWqEwq.js";
import { u as useNotifications, B as Bell } from "./useNotifications-DI1tt6RI.js";
import { u as useFirebaseRating } from "./useRatings-Cb0oKd1K.js";
import { a as useAllDoubts, b as answerDoubt } from "./useFirestoreDoubts-le9qz_ws.js";
import { M as MessageSquare } from "./message-square-CWG7vyhy.js";
import { C as CircleCheck } from "./circle-check-DAfqaB2n.js";
import { C as Clock } from "./clock-BvSLQ5xU.js";
import { T as TrendingUp } from "./trending-up-Ju0Cci4Q.js";
import { C as ChevronUp } from "./chevron-up-CW9SWq1k.js";
import { C as ChevronDown } from "./chevron-down-BCJBxwpq.js";
import { L as LoaderCircle } from "./loader-circle-DF2yWwqs.js";
import { S as Send } from "./send-CresbtXb.js";
import { M as Mic } from "./mic-B_pWcfgP.js";
import "./dialog-fjTXl3Ab.js";
import "./index-RjBxr0F5.js";
import "./index-DpL1GojK.js";
import "./index-Dwhy8Eih.js";
import "./Combination-CKbXYAUW.js";
import "./index-D01R6hvx.js";
import "./index-BE4c4O1h.js";
import "./x-CUJRMoMm.js";
import "./mic-off-CLzH48yI.js";
import "./monitor-D25K6tZz.js";
import "./index-CBceBPFE.js";
import "./useFirestoreRatings-c_ezshbV.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function LiveClassForm({
  navigate,
  teacherName,
  userId
}) {
  const [title, setTitle] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState("");
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
      viewerCount: 0
    });
    navigate({ to: `/live/${classId}`, search: { role: "host" } });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Class Title" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: title,
          onChange: (e) => setTitle(e.target.value),
          placeholder: "e.g. Algebra - Chapter 5",
          "data-ocid": "liveclass.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground mb-1 block", children: "Subject" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: subject,
          onChange: (e) => setSubject(e.target.value),
          placeholder: "e.g. Mathematics"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full gradient-primary text-white",
        onClick: startClass,
        disabled: !title.trim(),
        "data-ocid": "liveclass.primary_button",
        children: "🎥 Go Live"
      }
    )
  ] });
}
function CallStudents({
  navigate,
  teacherName,
  userId
}) {
  const [students, setStudents] = reactExports.useState([]);
  reactExports.useEffect(() => {
    getAllStudents().then(setStudents).catch(() => setStudents([]));
  }, []);
  function initiateCall(student, callType) {
    const callId = `${userId}_${Date.now().toString(36)}`;
    rtdbSet(`calls/${student.id}/incoming`, {
      callId,
      callerName: teacherName,
      callType,
      callerUserId: userId
    });
    navigate({ to: `/call/${callId}`, search: { role: "caller", callType } });
  }
  if (students.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-center text-muted-foreground text-sm py-4",
        "data-ocid": "call.empty_state",
        children: "No students found. Students will appear here once they register."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: students.slice(0, 6).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center justify-between p-3 rounded-xl bg-muted/40",
      "data-ocid": `call.item.${i + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold", children: s.name.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Student" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => initiateCall(s, "audio"),
              "data-ocid": `call.secondary_button.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-3.5 h-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => initiateCall(s, "video"),
              "data-ocid": `call.edit_button.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ]
    },
    s.id
  )) });
}
function FirestoreDoubtCard({
  doubt,
  expanded,
  onToggle,
  teacherName,
  onAnswered
}) {
  const [answerText, setAnswerText] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [videoCallOpen, setVideoCallOpen] = reactExports.useState(false);
  const subjectColor = "bg-primary/10 text-primary";
  async function handleSubmitAnswer() {
    if (!answerText.trim()) {
      ue.error("Please type an answer");
      return;
    }
    setSubmitting(true);
    try {
      await answerDoubt(doubt.id, answerText.trim(), teacherName, doubt.userId);
      ue.success("Answer submitted!");
      setAnswerText("");
      onAnswered();
    } catch {
      ue.error("Failed to submit answer. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }
  const timeAgo = (() => {
    const diff = Date.now() - doubt.createdAt;
    const mins = Math.floor(diff / 6e4);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return new Date(doubt.createdAt).toLocaleDateString();
  })();
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0", children: doubt.isAnonymous ? "?" : doubt.studentName.charAt(0) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${subjectColor} border-0 text-xs`, children: doubt.subject || "General" }),
                  doubt.status === "answered" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-green-100 text-green-700 border-green-200 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
                    " Answered"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-amber-100 text-amber-700 border-amber-200 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                    " Pending"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm line-clamp-2", children: doubt.question }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: doubt.isAnonymous ? "Anonymous" : doubt.studentName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    timeAgo
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: doubt.question })
          ] }),
          doubt.status === "answered" && doubt.answer ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-display font-bold text-foreground", children: "✅ Your Response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-100 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: doubt.answer }),
              doubt.teacherName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
                "— ",
                doubt.teacherName,
                doubt.answeredAt ? `, ${new Date(doubt.answeredAt).toLocaleString()}` : ""
              ] })
            ] }),
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
                studentName: doubt.isAnonymous ? "Student" : doubt.studentName,
                isTeacher: true
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: answerText,
                onChange: (e) => setAnswerText(e.target.value),
                placeholder: "Type your answer...",
                rows: 4,
                "data-ocid": "teacher.textarea"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full gradient-primary text-white",
                onClick: handleSubmitAnswer,
                disabled: submitting || !answerText.trim(),
                "data-ocid": "teacher.submit_button",
                children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 w-4 h-4 animate-spin" }),
                  " ",
                  "Submitting..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 w-4 h-4" }),
                  " Submit Answer"
                ] })
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function TeacherRatingCard({ teacherName }) {
  const { average, count } = useFirebaseRating(teacherName);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "glass-card border-white/40 warm-shadow col-span-2 lg:col-span-1",
      "data-ocid": "teacher.card.5",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-yellow-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: average > 0 ? `${average.toFixed(1)} / 5` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "Avg Rating ",
          count > 0 ? `(${count})` : ""
        ] }),
        average > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mt-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `text-xs ${star <= Math.round(average) ? "text-yellow-400" : "text-muted-foreground/30"}`,
            children: "★"
          },
          star
        )) })
      ] })
    }
  );
}
function TeacherDashboard() {
  const navigate = useNavigate();
  const localProfile = loadLocalProfile();
  const userId = (localProfile == null ? void 0 : localProfile.userId) ?? "";
  const teacherName = (localProfile == null ? void 0 : localProfile.displayName) ?? "Teacher";
  const firestoreDoubts = useAllDoubts();
  const [expandedId, setExpandedId] = reactExports.useState(null);
  const [filterTab, setFilterTab] = reactExports.useState(
    "pending"
  );
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications(userId);
  const [notifOpen, setNotifOpen] = reactExports.useState(false);
  const notifRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const pending = firestoreDoubts.filter((d) => d.status === "pending");
  const answered = firestoreDoubts.filter((d) => d.status === "answered");
  const displayDoubts = filterTab === "pending" ? pending : filterTab === "answered" ? answered : firestoreDoubts;
  const STATS = [
    {
      label: "Total Doubts",
      value: firestoreDoubts.length,
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      label: "Answered",
      value: answered.length,
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
      value: firestoreDoubts.length > 0 ? `${Math.round(answered.length / firestoreDoubts.length * 100)}%` : "0%",
      icon: TrendingUp,
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AvatarButton,
          {
            imageUrl: localProfile == null ? void 0 : localProfile.profileImageUrl,
            name: teacherName
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: teacherName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-700 border-green-200 text-xs", children: "Teacher" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: notifRef, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "relative w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-muted/60 transition-colors",
              onClick: () => setNotifOpen((o) => !o),
              "aria-label": "Notifications",
              "data-ocid": "teacher.open_modal_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-foreground" }),
                unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5", children: unreadCount })
              ]
            }
          ),
          notifOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl shadow-xl border-white/40 overflow-hidden z-50",
              "data-ocid": "teacher.popover",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-foreground", children: "Notifications" }),
                  unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-xs text-primary hover:underline",
                      onClick: () => {
                        markAllRead();
                      },
                      "data-ocid": "teacher.secondary_button",
                      children: "Mark all read"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto", children: notifications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No notifications yet" }) : notifications.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${n.read ? "opacity-60" : ""}`,
                    onClick: () => {
                      markRead(n.id);
                      setNotifOpen(false);
                      if (n.navigateTo) {
                        navigate({ to: n.navigateTo });
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground leading-snug", children: n.message }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: new Date(n.createdAt).toLocaleTimeString() })
                      ] }),
                      !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" })
                    ]
                  },
                  n.id
                )) })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
        STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherRatingCard, { teacherName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tabs,
        {
          value: filterTab,
          onValueChange: (v) => setFilterTab(v),
          "data-ocid": "teacher.tab",
          id: "pending-doubts",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "bg-muted/50 rounded-xl p-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: "all",
                  className: "rounded-lg",
                  "data-ocid": "teacher.tab",
                  children: [
                    "All",
                    firestoreDoubts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-2 bg-muted text-muted-foreground text-xs", children: firestoreDoubts.length })
                  ]
                }
              ),
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
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: filterTab, className: "mt-4 space-y-3", children: displayDoubts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-16 text-muted-foreground",
                "data-ocid": "teacher.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 mx-auto mb-3 text-green-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: filterTab === "pending" ? "All caught up! No pending doubts. 🎉" : "No doubts in this category." })
                ]
              }
            ) : displayDoubts.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FirestoreDoubtCard,
              {
                doubt: d,
                expanded: expandedId === d.id,
                onToggle: () => setExpandedId(expandedId === d.id ? null : d.id),
                teacherName,
                onAnswered: () => setExpandedId(null)
              },
              d.id
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/40 warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-red-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground", children: "Start Live Class" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LiveClassForm,
          {
            navigate,
            teacherName,
            userId
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/40 warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground mb-4", children: "📞 Call a Student" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CallStudents,
          {
            navigate,
            teacherName,
            userId
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-muted-foreground py-6", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        ". Built with ❤️ using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : ""
            )}`,
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
