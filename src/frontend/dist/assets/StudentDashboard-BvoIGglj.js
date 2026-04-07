import { c as createLucideIcon, j as jsxRuntimeExports, u as useNavigate, l as loadLocalProfile, r as reactExports, V as Video, f as rtdbListen } from "./index-CldB4VhC.js";
import { A as AvatarButton, L as LogOut, S as Star, V as VideoCallModal } from "./VideoCallModal-DPcjqJk6.js";
import { B as Badge } from "./badge-CGmZAZY-.js";
import { B as Button } from "./button-C1ZNB9_6.js";
import { C as Card, a as CardContent } from "./card-Cj01kCqB.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-B0cSO82s.js";
import { I as Input } from "./input-UZdbOdM0.js";
import { P as Progress } from "./progress-Dct9f6zK.js";
import { c as cn } from "./index-C4t1-qkZ.js";
import { u as useNotifications, B as Bell } from "./useNotifications-Cmhqk2Rk.js";
import { u as useMyDoubts } from "./useFirestoreDoubts-B4DL_0iA.js";
import { g as getRating, s as submitRating } from "./useFirestoreRatings-d-R3XkoQ.js";
import { S as Search } from "./search-DtwHRwoI.js";
import { X } from "./x-CSi_P993.js";
import { P as Plus } from "./plus-BYBU-QI6.js";
import { M as MessageSquare } from "./message-square-N-_IM46Z.js";
import { T as TrendingUp } from "./trending-up-DjBBOtZB.js";
import { B as BookOpen } from "./book-open-CkVVMuiL.js";
import { C as CircleCheck } from "./circle-check--ySA4rvx.js";
import { Z as Zap } from "./zap-vM0uCV9Y.js";
import { L as Lock } from "./lock-Yk63K83d.js";
import { C as Clock } from "./clock-BmMN7j50.js";
import { C as ChevronUp } from "./chevron-up-BITjm4yt.js";
import { C as ChevronDown } from "./chevron-down-ORxMCOhv.js";
import "./mic-off-D2T01E-L.js";
import "./mic-BqW3xDbv.js";
import "./monitor-DvhnVS8t.js";
import "./index-DFyADs0y.js";
import "./index-DKJKj2ns.js";
import "./Combination-BkPRaxQx.js";
import "./index-BJkV86h2.js";
import "./index-N5RFLq5k.js";
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
              stroke: "oklch(0.93 0.012 265)",
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl border-white/50 warm-shadow p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-muted-foreground inline-block" }),
        "Live Classes"
      ] }),
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl border-white/50 warm-shadow p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" }),
      "Live Now"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: classes.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white/60",
        "data-ocid": `liveclass.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
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
              className: "px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-xs font-bold transition-all shadow-sm",
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
  const borderAccent = doubt.status === "answered" ? "border-l-4 border-l-green-400" : "border-l-4 border-l-amber-400";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `glass-card rounded-2xl border-white/50 warm-shadow hover:warm-shadow-lg transition-all duration-300 overflow-hidden ${borderAccent}`,
      "data-ocid": `student.item.${index + 1}`,
      "data-doubt-id": doubt.id,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "flex items-start justify-between gap-3 w-full text-left",
            onClick: onToggle,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-0 text-xs", children: doubt.subject }),
                  doubt.status === "answered" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs border-0 bg-green-100 text-green-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }),
                    "Answered"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs border-0 bg-amber-100 text-amber-700", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                    "Pending"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm truncate", children: doubt.question }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: doubt.createdAt ? new Date(doubt.createdAt).toLocaleDateString() : "" })
              ] }),
              expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" })
            ]
          }
        ),
        expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-white/40 animate-fade-in", children: doubt.status === "answered" && doubt.answer ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
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
      className: "absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl shadow-xl border-white/50 overflow-hidden z-50 animate-fade-in",
      "data-ocid": "student.popover",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/30", children: [
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
            className: `w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/40 transition-colors border-b border-white/20 last:border-0 ${n.read ? "opacity-60" : ""}`,
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-gradient", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-16 bg-white/60 backdrop-blur-xl border-b border-white/40 flex items-center px-6 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-10 h-10 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-32 h-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-8 rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-24 h-8 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-48 h-7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass-card p-6 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-3/4 h-3" })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass-card p-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-24 h-5 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-3/4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-1/2 h-3" })
        ] }, i)) })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-gradient", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 px-4 sm:px-6 py-3 backdrop-blur-xl bg-white/60 border-b border-white/40 shadow-sm", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-0 text-xs", children: "Student" }),
            (localProfile == null ? void 0 : localProfile.interests) && localProfile.interests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: localProfile.interests.slice(0, 3).map((interest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "bg-white/60 text-muted-foreground border border-white/50 text-[10px] px-1.5 py-0",
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
                  className: "pl-9 pr-8 h-9 w-52 rounded-full bg-white/60 border-white/50 text-sm focus:w-72 transition-all duration-300",
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
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
                  onClick: () => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                }
              )
            ] }),
            searchOpen && filteredDoubts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 right-0 mt-1 glass-card rounded-2xl shadow-xl border-white/50 overflow-hidden z-50", children: filteredDoubts.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full text-left px-4 py-3 hover:bg-white/50 border-b border-white/30 last:border-0",
                onClick: () => {
                  setExpandedDoubt(d.id);
                  setSearchOpen(false);
                  setSearchQuery("");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-0 text-xs", children: d.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground mt-1 line-clamp-1", children: d.question })
                ]
              },
              d.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: notifRef, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "relative w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-white/70 transition-colors",
                onClick: () => setNotifOpen((o) => !o),
                "aria-label": "Notifications",
                "data-ocid": "student.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-foreground" }),
                  unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5", children: unreadCount })
                ]
              }
            ),
            notifOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(NotifPanel, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "rounded-full gradient-primary text-white border-0 shadow-primary text-xs font-bold",
              onClick: () => navigate({ to: "/submit" }),
              "data-ocid": "student.primary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5 mr-1" }),
                " Ask Doubt"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "rounded-full w-9 h-9 p-0 hover:bg-white/50",
              onClick: () => navigate({ to: "/" }),
              "data-ocid": "student.secondary_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:hidden items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: notifRef, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "relative w-9 h-9 rounded-full glass-card flex items-center justify-center",
                onClick: () => setNotifOpen((o) => !o),
                "aria-label": "Notifications",
                "data-ocid": "student.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-foreground" }),
                  unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5", children: unreadCount })
                ]
              }
            ),
            notifOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(NotifPanel, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "rounded-full w-9 h-9 p-0 hover:bg-white/50",
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
                className: "pl-9 pr-8 h-9 w-full rounded-full bg-white/60 border-white/50 text-sm",
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
            searchOpen && filteredDoubts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 right-0 mt-1 glass-card rounded-2xl shadow-xl border-white/50 overflow-hidden z-50", children: filteredDoubts.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full text-left px-4 py-3 hover:bg-white/50 border-b border-white/30 last:border-0",
                onClick: () => {
                  setExpandedDoubt(d.id);
                  setSearchOpen(false);
                  setSearchQuery("");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-0 text-xs", children: d.subject }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-3xl p-6 border-white/50 warm-shadow flex flex-col sm:flex-row items-start sm:items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground", children: "Welcome back 👋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-base", children: (localProfile == null ? void 0 : localProfile.displayName) ? `Hey ${localProfile.displayName}, keep sparking your curiosity!` : "Ask without fear. Learn without limits." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "glass-card rounded-2xl p-5 border-white/50 flex flex-col items-center gap-2 min-w-[140px]",
            style: {
              background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.12) 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceRing, { score: confidenceScore }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground text-center", children: "Confidence Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-indigo-200 text-xs", children: "+8 pts this week" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-4", children: "Quick Actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          {
            icon: MessageSquare,
            title: "Ask Doubt",
            desc: "Post your question anonymously",
            color: "from-indigo-500 to-violet-500",
            action: () => navigate({ to: "/submit" }),
            ocid: "student.ask_doubt.button"
          },
          {
            icon: Video,
            title: "Join Live Class",
            desc: "Join an active class now",
            color: "from-rose-500 to-pink-500",
            action: () => {
              var _a;
              return (_a = document.getElementById("live-classes-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            ocid: "student.live_class.button"
          },
          {
            icon: Search,
            title: "Search Doubts",
            desc: "Find answers instantly",
            color: "from-sky-500 to-cyan-500",
            action: () => navigate({ to: "/learning" }),
            ocid: "student.search_doubts.button"
          },
          {
            icon: MessageSquare,
            title: "Chat Support",
            desc: "24/7 AI assistance",
            color: "from-emerald-500 to-teal-500",
            action: () => navigate({ to: "/learning/support" }),
            ocid: "student.chat_support.button"
          }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: item.action,
            className: "action-card glass-card rounded-2xl p-5 border-white/50 flex flex-col items-start gap-3 text-left w-full cursor-pointer warm-shadow",
            "data-ocid": item.ocid,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5 leading-tight", children: item.desc })
              ] })
            ]
          },
          item.title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Sound Familiar?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          {
            emoji: "😰",
            title: "Fear of Asking",
            desc: "Worried about being judged for asking basic questions"
          },
          {
            emoji: "😞",
            title: "Lack of Confidence",
            desc: "Not sure if your doubt is worth asking"
          },
          {
            emoji: "⏳",
            title: "No Instant Help",
            desc: "Stuck waiting hours for an answer"
          }
        ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "glass-card rounded-2xl p-5 border-white/50 warm-shadow",
            style: { background: "rgba(239,68,68,0.05)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: p.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: p.desc })
            ]
          },
          p.title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-primary", children: "AskSpark solves this" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          {
            emoji: "🎭",
            title: "Anonymous Doubts",
            color: "from-violet-500 to-indigo-500"
          },
          {
            emoji: "👨‍🏫",
            title: "Teacher Answers",
            color: "from-sky-500 to-blue-500"
          },
          {
            emoji: "📺",
            title: "Live Classes",
            color: "from-rose-500 to-pink-500"
          },
          {
            emoji: "🔍",
            title: "Smart Search",
            color: "from-emerald-500 to-green-500"
          }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "glass-card rounded-2xl p-5 border-white/50 flex flex-col items-center text-center gap-2 warm-shadow",
            style: { background: "rgba(99,102,241,0.06)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-lg`,
                  children: s.emoji
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: s.title })
            ]
          },
          s.title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "glass-card border-white/50 rounded-3xl warm-shadow",
          style: { borderLeft: "4px solid oklch(0.55 0.22 265)" },
          "data-ocid": "student.progress.card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground", children: "Your Progress" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-50 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-indigo-700", children: realDoubts.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Doubts Asked" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-violet-50 rounded-xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-violet-700", children: classesAttended }),
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
          className: "action-card glass-card rounded-3xl border-white/50 warm-shadow overflow-hidden cursor-pointer w-full text-left",
          style: {
            background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.14) 100%)"
          },
          onClick: () => navigate({ to: "/learning" }),
          "data-ocid": "student.learning.card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-500", children: "🎓" }),
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
          className: "glass-card rounded-3xl border-white/50 warm-shadow overflow-hidden",
          style: {
            background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.14) 100%)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-2xl flex-shrink-0 shadow-primary", children: "📝" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-base", children: "Weekly Test" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary text-white border-0 text-xs animate-pulse", children: "✨ This Week" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Test your knowledge and track improvement" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "rounded-full gradient-primary text-white border-0 shadow-primary flex-shrink-0",
                onClick: () => navigate({ to: "/weekly-test" }),
                "data-ocid": "student.test.button",
                children: "Start Test"
              }
            )
          ] })
        }
      ),
      testHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/50 rounded-3xl warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-white" }) }),
            "Test History"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-xs text-primary hover:underline",
              onClick: () => setHistoryExpanded((e) => !e),
              "data-ocid": "student.history.toggle",
              children: historyExpanded ? "Hide" : "Show all"
            }
          )
        ] }),
        historyExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: testHistory.slice(-5).map((t, tIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-3 rounded-xl bg-white/50 border border-white/40",
            "data-ocid": `student.history.item.${tIdx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium text-foreground", children: [
                  "Week ",
                  t.week
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.date })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreIndicator, { score: t.score }) }),
                t.strong && t.strong.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
                  "Strong: ",
                  t.strong.slice(0, 2).join(", ")
                ] })
              ] })
            ]
          },
          t.week
        )) }),
        testHistory.length > 5 && historyExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "rounded-full text-xs glass-card border-white/50",
            onClick: () => navigate({ to: "/weekly-test" }),
            "data-ocid": "student.history.button",
            children: "View All History →"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/50 rounded-3xl warm-shadow col-span-2 sm:col-span-1",
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
            className: "glass-card border-white/50 rounded-3xl warm-shadow",
            "data-ocid": "student.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-100 text-blue-700 border-0 text-xs", children: "+2" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: "14" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Questions Asked" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/50 rounded-3xl warm-shadow",
            "data-ocid": "student.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-700 border-0 text-xs", children: "↑ 86%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: "12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Answers Received" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/50 rounded-3xl warm-shadow",
            "data-ocid": "student.card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-100 text-orange-700 border-0 text-xs", children: "Best!" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-foreground", children: "7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Days in a Row 🔥" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/50 rounded-3xl warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-white" }) }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-0 font-bold", children: "Lv. 4" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-white/60 text-muted-foreground border-white/50", children: "3 / 6 earned" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: BADGES.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: `border warm-shadow text-center transition-all duration-300 rounded-2xl ${b.earned ? "glass-card border-white/50 hover:-translate-y-1" : "bg-white/30 border-white/30 opacity-60"}`,
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "live-classes-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveLiveClasses, { navigate }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "doubts-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Recent Doubts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "rounded-full text-xs gradient-primary text-white border-0 shadow-primary",
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
            className: "text-center py-12 text-muted-foreground glass-card rounded-3xl border-white/50",
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-4", children: "Video Solutions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          {
            title: "Algebra Basics Explained",
            subject: "Mathematics",
            thumb: "🧮"
          },
          {
            title: "Newton's Laws of Motion",
            subject: "Physics",
            thumb: "⚡"
          },
          {
            title: "Python for Beginners",
            subject: "Computer Science",
            thumb: "💻"
          }
        ].map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "action-card glass-card rounded-2xl border-white/50 overflow-hidden warm-shadow",
            "data-ocid": `student.video.card.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-4xl", children: v.thumb }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-0 text-xs mb-2", children: v.subject }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: v.title })
              ] })
            ]
          },
          v.title
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-card rounded-2xl border-white/50 p-3 text-xs text-muted-foreground text-center",
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
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : ""
            )}`,
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold shadow-xl text-sm",
        style: {
          background: "linear-gradient(135deg, oklch(0.55 0.22 265), oklch(0.55 0.22 310))",
          boxShadow: "0 8px 32px rgba(99,102,241,0.4)"
        },
        onClick: () => navigate({ to: "/learning/support" }),
        "data-ocid": "student.ai_chat_button",
        "aria-label": "Open AI Chat",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "AI Chat" })
        ]
      }
    ),
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
              className: "flex items-start gap-3 p-3 rounded-xl bg-indigo-50/60",
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
