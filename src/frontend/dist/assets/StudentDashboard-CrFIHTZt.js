import { c as createLucideIcon, j as jsxRuntimeExports, u as useNavigate, l as loadLocalProfile, r as reactExports, d as rtdbListen } from "./index-Bzh1Z7Il.js";
import { A as AvatarButton, L as LogOut, V as VideoCallModal } from "./VideoCallModal-cVjFrpDK.js";
import { B as Badge } from "./badge-x6JhER0Q.js";
import { B as Button } from "./button-Dj6mJHLM.js";
import { C as Card, a as CardContent } from "./card-DzHv4YKg.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-CQYblFrT.js";
import { I as Input } from "./input-BPe8cg_M.js";
import { P as Progress } from "./progress-COi26BYC.js";
import { c as cn } from "./index-WYOXVuuI.js";
import { u as useNotifications, B as Bell } from "./useNotifications-DeovIxZq.js";
import { u as useMyDoubts } from "./useFirestoreDoubts-DAX9JtRN.js";
import { g as getRating, s as submitRating } from "./useFirestoreRatings-Bt6B1WwX.js";
import { S as Search } from "./search-r_xGJnpQ.js";
import { X } from "./x-DMw0mHjl.js";
import { P as Plus } from "./plus-B24kV3US.js";
import { T as TrendingUp } from "./trending-up-CYy1UIA1.js";
import { C as ChevronUp } from "./chevron-up-T3rwGTak.js";
import { C as ChevronDown } from "./chevron-down-BUntKUAb.js";
import { B as BookOpen } from "./book-open-BXgaPwbI.js";
import { C as CircleCheck } from "./circle-check-SxPeoXQY.js";
import { Z as Zap } from "./zap-CDUICwc3.js";
import { M as MessageSquare } from "./message-square-BypGAsMd.js";
import { L as Lock } from "./lock-CQMRf8hb.js";
import { C as Clock } from "./clock-CslzKm5S.js";
import "./mic-off-JZ8j3g4P.js";
import "./mic-Bm6Hx06T.js";
import "./monitor--bJuK8O9.js";
import "./index-Ct8s1mXL.js";
import "./index-D97QbqVl.js";
import "./Combination-DD7aQSMm.js";
import "./index-B-jffxg1.js";
import "./index-BtH5czlh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$1);
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
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode);
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
const BADGES = [
  {
    icon: TrendingUp,
    name: "First Question",
    desc: "Asked your very first doubt",
    earned: true,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: BookOpen,
    name: "10 Questions",
    desc: "Reached 10 total doubts",
    earned: true,
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Zap,
    name: "Answered Quickly",
    desc: "Got a reply within 1 hour",
    earned: true,
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Award,
    name: "Anonymous Hero",
    desc: "Submit 5 anonymous doubts",
    earned: false,
    color: "bg-gray-100 text-gray-400"
  },
  {
    icon: Flame,
    name: "Streak Master",
    desc: "7-day asking streak",
    earned: false,
    color: "bg-gray-100 text-gray-400"
  },
  {
    icon: MessageSquare,
    name: "Top Contributor",
    desc: "Top 10% most active student",
    earned: false,
    color: "bg-gray-100 text-gray-400"
  }
];
function ConfidenceRing({ score }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = score / 100 * circ;
  const color = score >= 70 ? "#22c55e" : score >= 40 ? "#6366f1" : "#f59e0b";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "96",
        height: "96",
        className: "absolute inset-0 -rotate-90",
        role: "img",
        "aria-label": "Confidence score ring",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "48",
              cy: "48",
              r,
              fill: "none",
              stroke: "oklch(0.93 0.012 70)",
              strokeWidth: "8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "48",
              cy: "48",
              r,
              fill: "none",
              stroke: color,
              strokeWidth: "8",
              strokeDasharray: `${dash} ${circ}`,
              strokeLinecap: "round",
              style: { transition: "stroke-dasharray 1s ease" }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-xl", children: score })
  ] });
}
function ScoreIndicator({ score }) {
  const dot = score >= 70 ? "bg-green-500" : score >= 40 ? "bg-amber-400" : "bg-red-500";
  const text = score >= 70 ? "text-green-700" : score >= 40 ? "text-amber-700" : "text-red-700";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 font-bold ${text}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${dot} inline-block` }),
    score,
    "%"
  ] });
}
function ActiveLiveClasses({
  navigate
}) {
  const [classes, setClasses] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const unsub = rtdbListen("liveClasses", (val) => {
      const raw = val;
      if (!raw) {
        setClasses([]);
        return;
      }
      const active = Object.entries(raw).filter(([, c]) => c.active).map(([id, c]) => ({ ...c, id }));
      setClasses(active);
    });
    return unsub;
  }, []);
  if (classes.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass-card border-white/40 warm-shadow p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground mb-2 flex items-center gap-2", children: "🎥 Live Classes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center text-muted-foreground text-sm py-4",
          "data-ocid": "liveclass.empty_state",
          children: "No live classes right now. Check back soon!"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass-card border-white/40 warm-shadow p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground mb-3 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" }),
      "Live Classes"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: classes.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-3 rounded-xl bg-muted/40",
        "data-ocid": `liveclass.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              c.subject,
              " · ",
              c.hostName,
              " · ",
              c.viewerCount ?? 0,
              " watching"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "px-4 py-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-semibold transition-colors",
              onClick: () => navigate({ to: `/live/${c.id}`, search: { role: "viewer" } }),
              "data-ocid": `liveclass.primary_button.${i + 1}`,
              children: "Join"
            }
          )
        ]
      },
      c.id
    )) })
  ] });
}
function FirestoreDoubtStudentCard({
  doubt,
  index,
  expanded,
  onToggle,
  studentId
}) {
  const [localRating, setLocalRating] = reactExports.useState(null);
  const [ratingSubmitted, setRatingSubmitted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (doubt.status === "answered" && !ratingSubmitted) {
      getRating(doubt.id, studentId).then((r) => {
        if (r !== null) {
          setLocalRating(r);
          setRatingSubmitted(true);
        }
      });
    }
  }, [doubt.id, doubt.status, studentId, ratingSubmitted]);
  async function handleRate(stars) {
    if (ratingSubmitted) return;
    setLocalRating(stars);
    setRatingSubmitted(true);
    try {
      await submitRating(
        doubt.id,
        doubt.userId,
        doubt.teacherName ?? "Teacher",
        studentId,
        stars
      );
    } catch {
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300",
      "data-ocid": `student.item.${index + 1}`,
      "data-doubt-id": doubt.id,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "flex items-start justify-between gap-3 w-full text-left",
            onClick: onToggle,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-0 text-xs", children: doubt.subject }),
                  doubt.status === "answered" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs border-0 bg-green-100 text-green-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
                    "Answered"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs border-0 bg-amber-100 text-amber-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                    "Pending"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm truncate", children: doubt.question }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: doubt.createdAt ? new Date(doubt.createdAt).toLocaleDateString() : "" })
              ] }),
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-border animate-fade-in", children: doubt.status === "answered" && doubt.answer ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-green-700 mb-1", children: "✅ Teacher's Answer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-100 rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: doubt.answer }),
            doubt.teacherName && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
              "— ",
              doubt.teacherName,
              doubt.answeredAt ? `, ${new Date(doubt.answeredAt).toLocaleString()}` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: ratingSubmitted ? "Your rating:" : "Rate this answer:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleRate(star),
                disabled: ratingSubmitted,
                className: `text-xl transition-colors ${star <= (localRating ?? 0) ? "text-yellow-400" : "text-gray-300 hover:text-yellow-300"} ${ratingSubmitted ? "cursor-default" : "cursor-pointer"}`,
                "data-ocid": `student.rating.${index + 1}`,
                children: "★"
              },
              star
            )) }),
            ratingSubmitted && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600 mt-1", children: "Thanks for your feedback!" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-amber-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Waiting for a teacher to answer this doubt" })
        ] }) })
      ] })
    }
  );
}
function StudentDashboard() {
  const navigate = useNavigate();
  const localProfile = loadLocalProfile();
  const [premiumOpen, setPremiumOpen] = reactExports.useState(false);
  const classesAttended = (() => {
    try {
      return Number(localStorage.getItem("askspark_attended_classes") ?? "0");
    } catch {
      return 0;
    }
  })();
  const userId = (localProfile == null ? void 0 : localProfile.userId) ?? "";
  const firestoreDoubts = useMyDoubts(userId);
  const realDoubts = firestoreDoubts;
  const [testHistory, setTestHistory] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("askspark_test_history") || "[]");
    } catch {
      return [];
    }
  });
  reactExports.useEffect(() => {
    function reloadData() {
      try {
        setTestHistory(
          JSON.parse(localStorage.getItem("askspark_test_history") || "[]")
        );
      } catch {
      }
    }
    window.addEventListener("focus", reloadData);
    return () => window.removeEventListener("focus", reloadData);
  }, []);
  const [showOnboarding, setShowOnboarding] = reactExports.useState(() => {
    return !localStorage.getItem("askspark_onboarded");
  });
  function closeOnboarding() {
    localStorage.setItem("askspark_onboarded", "1");
    setShowOnboarding(false);
  }
  const [isLoading, setIsLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);
  const [expandedDoubt, setExpandedDoubt] = reactExports.useState(
    null
  );
  const [videoCallDoubt, setVideoCallDoubt] = reactExports.useState(
    null
  );
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const searchRef = reactExports.useRef(null);
  const {
    notifications: rtdbNotifs,
    unreadCount,
    markRead: markReadRTDB,
    markAllRead: markAllReadRTDB
  } = useNotifications(userId);
  const [notifOpen, setNotifOpen] = reactExports.useState(false);
  const notifRef = reactExports.useRef(null);
  const [historyExpanded, setHistoryExpanded] = reactExports.useState(true);
  const confidenceScore = Math.min(realDoubts.length * 15, 100);
  const xp = realDoubts.length * 50;
  const xpToNext = Math.max(xp + 200, 500);
  reactExports.useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const filteredDoubts = searchQuery.trim().length > 0 ? realDoubts.filter(
    (d) => (d.question ?? "").toLowerCase().includes(searchQuery.toLowerCase()) || (d.subject ?? "").toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];
  function markRead(id) {
    markReadRTDB(String(id));
  }
  function markAllRead() {
    markAllReadRTDB();
  }
  function handleNotifClick(n) {
    var _a;
    markRead(String(n.id));
    setNotifOpen(false);
    if (n.type === "doubt_reply" || n.type === "doubt_answered") {
      (_a = document.getElementById("doubts-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    } else if (n.type === "message") {
      navigate({ to: "/chat" });
    } else if (n.type === "weekly_test") {
      navigate({ to: "/weekly-test" });
    }
  }
  const NotifPanel = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50 animate-fade-in",
      "data-ocid": "student.popover",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-foreground", children: "Notifications" }),
          unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-xs text-primary hover:underline",
              onClick: markAllRead,
              "data-ocid": "student.secondary_button",
              children: "Mark all read"
            }
          )
        ] }),
        rtdbNotifs.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${n.read ? "opacity-60" : ""}`,
            onClick: () => handleNotifClick(n),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0 mt-0.5", children: n.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground", children: n.text }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: n.time })
              ] }),
              !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" })
            ]
          },
          n.id
        )),
        rtdbNotifs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No notifications yet" }),
        rtdbNotifs.length > 0 && rtdbNotifs.every((n) => n.read) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-sm text-muted-foreground", children: "You're all caught up! 🎉" })
      ]
    }
  );
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-16 bg-card border-b flex items-center px-6 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-10 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-32 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-8 rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-24 h-8 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-48 h-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-3/4 h-3" })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-24 h-5 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-3/4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-1/2 h-3" })
        ] }, i)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AvatarButton,
            {
              imageUrl: localProfile == null ? void 0 : localProfile.profileImageUrl,
              name: (localProfile == null ? void 0 : localProfile.displayName) ?? "Student"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: (localProfile == null ? void 0 : localProfile.displayName) ?? "Student" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 text-xs", children: "Student" }),
            (localProfile == null ? void 0 : localProfile.interests) && localProfile.interests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: localProfile.interests.slice(0, 3).map((interest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "bg-muted text-muted-foreground border border-border text-[10px] px-1.5 py-0",
                children: interest
              },
              interest
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: searchRef, className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "pl-9 pr-8 h-9 w-52 rounded-full bg-white/60 border-border text-sm focus:w-72 transition-all duration-300",
                  placeholder: "Search doubts…",
                  value: searchQuery,
                  onChange: (e) => {
                    setSearchQuery(e.target.value);
                    setSearchOpen(e.target.value.trim().length > 0);
                  },
                  onFocus: () => searchQuery.trim().length > 0 && setSearchOpen(true),
                  "data-ocid": "student.search_input"
                }
              ),
              searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                  onClick: () => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                }
              )
            ] }),
            searchOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full mt-2 left-0 w-80 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50 animate-fade-in", children: filteredDoubts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 text-sm text-muted-foreground text-center", children: [
              "No results for “",
              searchQuery,
              "”"
            ] }) : filteredDoubts.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full text-left px-4 py-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0",
                onClick: () => {
                  setExpandedDoubt(d.id);
                  setSearchOpen(false);
                  setSearchQuery("");
                  setTimeout(() => {
                    var _a;
                    (_a = document.querySelector(`[data-doubt-id="${d.id}"]`)) == null ? void 0 : _a.scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                    });
                  }, 100);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-0 text-xs", children: d.subject }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `text-xs border-0 ${d.status === "answered" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`,
                        children: d.status === "answered" ? "✅ Answered" : "⏳ Pending"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground mt-1 line-clamp-1", children: d.question })
                ]
              },
              d.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: notifRef, className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "relative w-9 h-9 rounded-full border border-border bg-white/60 flex items-center justify-center hover:bg-muted/40 transition-colors",
                onClick: () => setNotifOpen((o) => !o),
                "data-ocid": "student.toggle",
                "aria-label": "Notifications",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-foreground" }),
                  unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center", children: unreadCount })
                ]
              }
            ),
            notifOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(NotifPanel, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "rounded-full gradient-primary text-white border-0 shadow-primary font-medium",
              onClick: () => navigate({ to: "/submit" }),
              "data-ocid": "student.primary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1" }),
                " Ask a Doubt"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-full",
              onClick: () => navigate({ to: "/" }),
              "data-ocid": "student.secondary_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:hidden items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: notifRef, className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "relative w-9 h-9 rounded-full border border-border bg-white/60 flex items-center justify-center",
                onClick: () => setNotifOpen((o) => !o),
                "data-ocid": "student.toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-foreground" }),
                  unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center", children: unreadCount })
                ]
              }
            ),
            notifOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(NotifPanel, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "rounded-full gradient-primary text-white border-0",
              onClick: () => navigate({ to: "/submit" }),
              "data-ocid": "student.primary_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-full",
              onClick: () => navigate({ to: "/" }),
              "data-ocid": "student.secondary_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "sm:hidden max-w-5xl mx-auto mt-2 relative",
          ref: searchRef,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "pl-9 pr-8 h-9 w-full rounded-full bg-white/60 border-border text-sm",
                placeholder: "Search doubts…",
                value: searchQuery,
                onChange: (e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(e.target.value.trim().length > 0);
                },
                "data-ocid": "student.search_input"
              }
            ),
            searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
                onClick: () => {
                  setSearchQuery("");
                  setSearchOpen(false);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
              }
            ),
            searchOpen && filteredDoubts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 right-0 mt-1 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50", children: filteredDoubts.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full text-left px-4 py-3 hover:bg-muted/40 border-b border-border/30 last:border-0",
                onClick: () => {
                  setExpandedDoubt(d.id);
                  setSearchOpen(false);
                  setSearchQuery("");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-0 text-xs", children: d.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground mt-1 line-clamp-1", children: d.question })
                ]
              },
              d.id
            )) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-5 border-white/40 warm-shadow flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "⭐" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-foreground", children: [
            "You're doing amazing, ",
            (localProfile == null ? void 0 : localProfile.displayName) || "there",
            "!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: realDoubts.length > 0 ? `You've asked ${realDoubts.length} question${realDoubts.length === 1 ? "" : "s"} so far. Keep it up — curious minds grow faster!` : "Start asking doubts to grow your confidence!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-700 border-amber-200 animate-pulse-soft hidden sm:flex", children: "🔥 7-day streak" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "glass-card border-white/40 warm-shadow",
          "data-ocid": "student.progress.card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground", children: "Your Progress" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-xs bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-1",
                  onClick: () => setPremiumOpen(true),
                  "data-ocid": "student.premium.button",
                  children: "✨ Go Premium"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: realDoubts.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Doubts Asked" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: classesAttended }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Classes Attended" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Doubts progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  realDoubts.length,
                  " / 10"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Progress,
                {
                  value: Math.min(realDoubts.length / 10 * 100, 100),
                  className: "h-2 rounded-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: realDoubts.length === 0 ? "🌱 Start by asking your first doubt!" : realDoubts.length < 5 ? "📚 Great start! Keep asking doubts to build confidence." : realDoubts.length < 10 ? "🔥 You're on a roll! Almost at 10 doubts." : "🏆 Amazing! You've asked 10+ doubts. You're a champion learner!" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "rounded-2xl warm-shadow overflow-hidden cursor-pointer w-full text-left",
          style: {
            background: "linear-gradient(135deg, oklch(0.52 0.18 145 / 0.08) 0%, oklch(0.52 0.18 145 / 0.15) 100%)",
            border: "1.5px solid oklch(0.52 0.18 145 / 0.25)"
          },
          onClick: () => navigate({ to: "/learning" }),
          "data-ocid": "student.learning.card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, oklch(0.52 0.18 145) 0%, oklch(0.45 0.16 160) 100%)"
                },
                children: "🎓"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-base", children: "Learning Hub" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700", children: "New!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Lectures, DPP practice & 24/7 support — all in one place" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold text-lg flex-shrink-0", children: "→" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl warm-shadow overflow-hidden",
          style: {
            background: "linear-gradient(135deg, oklch(0.52 0.18 265 / 0.08) 0%, oklch(0.52 0.18 265 / 0.15) 100%)",
            border: "1.5px solid oklch(0.52 0.18 265 / 0.25)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-2xl flex-shrink-0 shadow-primary", children: "📝" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-base", children: "Weekly Test" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary text-white border-0 text-xs animate-pulse", children: "✨ This Week" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Take this week's auto-generated test based on your doubt topics" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "rounded-full gradient-primary text-white border-0 shadow-primary font-medium flex-shrink-0",
                onClick: () => navigate({ to: "/weekly-test" }),
                "data-ocid": "student.primary_button",
                children: "Take Test →"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/40 warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-5 py-4 text-left",
            onClick: () => setHistoryExpanded((e) => !e),
            "data-ocid": "student.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "📊" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: "Test History" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-muted text-muted-foreground border-border text-xs", children: "Last 4 weeks" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block", children: "View All" }),
                historyExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
              ] })
            ]
          }
        ),
        historyExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 border-t border-border/50 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mt-4", children: testHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No test history available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Take your first weekly test to see your progress" })
          ] }) : testHistory.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl p-3 bg-muted/30 hover:bg-muted/50 transition-colors",
              "data-ocid": `student.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20 font-bold text-xs w-16 justify-center flex-shrink-0", children: [
                  "Wk ",
                  row.week
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreIndicator, { score: row.score }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 flex-1 min-w-0", children: [
                  row.fearZones.length > 0 ? row.fearZones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      className: "bg-red-100 text-red-700 border-red-200 text-xs",
                      children: [
                        "⚠ ",
                        z
                      ]
                    },
                    z
                  )) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-700 border-green-200 text-xs", children: "✅ No fear zones" }),
                  row.strong.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      className: "bg-blue-100 text-blue-700 border-blue-200 text-xs",
                      children: [
                        "💪 ",
                        s
                      ]
                    },
                    s
                  ))
                ] })
              ]
            },
            row.week
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-full mt-4 text-xs",
              onClick: () => navigate({ to: "/weekly-test" }),
              "data-ocid": "student.secondary_button",
              children: "View All History →"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/40 warm-shadow col-span-2 sm:col-span-1",
            "data-ocid": "student.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceRing, { score: confidenceScore }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-display font-bold text-foreground mt-2", children: "Confidence Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "+8 pts this week" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/40 warm-shadow",
            "data-ocid": "student.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-blue-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-100 text-blue-700 border-blue-200 text-xs", children: "+2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: "14" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Questions Asked" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/40 warm-shadow",
            "data-ocid": "student.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-700 border-green-200 text-xs", children: "↑ 86%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: "12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Answers Received" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/40 warm-shadow",
            "data-ocid": "student.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-orange-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-100 text-orange-700 border-orange-200 text-xs", children: "Best!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: "7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Days in a Row 🔥" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/40 warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl gradient-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Level 4 Scholar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                xp.toLocaleString(),
                " / ",
                xpToNext.toLocaleString(),
                " XP"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 font-bold", children: "Lv. 4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            value: xp / xpToNext * 100,
            className: "h-3 rounded-full"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            xp,
            " XP"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            xpToNext - xp,
            " XP to Level 5"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Your Achievements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-muted text-muted-foreground", children: "3 / 6 earned" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: BADGES.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: `border warm-shadow text-center transition-all duration-300 ${b.earned ? "glass-card border-white/40 hover:-translate-y-1" : "bg-muted/40 border-border opacity-60"}`,
            "data-ocid": `student.card.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-xl ${b.color} flex items-center justify-center mx-auto mb-2`,
                  children: b.earned ? /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: b.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1 leading-tight", children: b.desc })
            ] })
          },
          b.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "doubts-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Recent Doubts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-full text-xs",
              onClick: () => navigate({ to: "/submit" }),
              "data-ocid": "student.secondary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3 mr-1" }),
                " New"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "student.list", children: realDoubts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-12 text-muted-foreground",
            "data-ocid": "student.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No doubts submitted yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Start by asking your first doubt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "mt-4 rounded-full gradient-primary text-white border-0",
                  onClick: () => navigate({ to: "/submit" }),
                  "data-ocid": "student.primary_button",
                  children: "Ask a Doubt"
                }
              )
            ]
          }
        ) : realDoubts.map((doubt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          FirestoreDoubtStudentCard,
          {
            doubt,
            index: i,
            expanded: expandedDoubt === doubt.id,
            onToggle: () => setExpandedDoubt(
              expandedDoubt === doubt.id ? null : doubt.id
            ),
            studentId: userId
          },
          doubt.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-dashed border-primary/20 bg-primary/5 rounded-xl p-3 text-xs text-muted-foreground text-center",
          "data-ocid": "student.ad.panel",
          children: [
            "📢 Your Ad Here — Partner with AskSpark",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Reach 10,000+ students · sponsor@askspark.app"
          ]
        }
      ),
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
      ] }),
      videoCallDoubt !== null && (() => {
        const d = realDoubts.find(
          (x) => String(x.id) === String(videoCallDoubt)
        );
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          VideoCallModal,
          {
            open: videoCallDoubt !== null,
            onClose: () => setVideoCallDoubt(null),
            studentName: ((d == null ? void 0 : d.question) ?? "").slice(0, 20) || "Student",
            isTeacher: false
          }
        );
      })()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: premiumOpen, onOpenChange: setPremiumOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", "data-ocid": "student.premium.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl font-bold text-center", children: "✨ AskSpark Premium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-center text-sm mt-1", children: "Unlock advanced features for a better learning experience" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mt-2", children: [
        {
          icon: "⚡",
          title: "Priority Doubt Answers",
          desc: "Get answers 3x faster from teachers"
        },
        {
          icon: "💬",
          title: "Faster Teacher Response",
          desc: "Direct access to top educators"
        },
        {
          icon: "📊",
          title: "Advanced Analytics",
          desc: "Deep insights into your learning patterns"
        },
        {
          icon: "🏆",
          title: "Exclusive Badges",
          desc: "Premium profile badges & rewards"
        }
      ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-3 p-3 rounded-xl bg-muted/40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: f.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: f.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: f.desc })
            ] })
          ]
        },
        f.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-700 font-semibold text-sm", children: "🚀 Coming Soon" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-600 mt-0.5", children: "We are working on Premium. Stay tuned!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "w-full py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-white font-semibold text-sm hover:opacity-90 transition-opacity",
          onClick: () => setPremiumOpen(false),
          "data-ocid": "student.premium.close_button",
          children: "Got It!"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveLiveClasses, { navigate }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: showOnboarding,
        onOpenChange: (open) => {
          if (!open) closeOnboarding();
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", "data-ocid": "onboarding.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl font-bold text-center", children: "✨ Welcome to AskSpark!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm mt-1", children: "Your confidence-building journey starts here" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mt-2", children: [
            {
              icon: "📝",
              step: "Submit Your Doubt",
              desc: "Ask any question, anonymously if you want"
            },
            {
              icon: "💬",
              step: "Get an Answer",
              desc: "Teachers respond with text, voice, and video"
            },
            {
              icon: "⭐",
              step: "Rate & Reply",
              desc: "Give feedback and continue the conversation"
            },
            {
              icon: "🏆",
              step: "Earn Points",
              desc: "Earn points and climb the leaderboard"
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-3 p-3 rounded-xl bg-muted/40",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: item.step }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.desc })
                ] })
              ]
            },
            item.step
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full mt-2 gradient-primary text-white font-semibold",
              onClick: closeOnboarding,
              "data-ocid": "onboarding.confirm_button",
              children: "Let's Go! 🚀"
            }
          )
        ] })
      }
    )
  ] });
}
export {
  StudentDashboard as default
};
