import { j as jsxRuntimeExports, u as useNavigate, r as reactExports } from "./index-B800XCAJ.js";
import { B as Bell, L as LogOut, M as MessageSquare, V as Video, a as VideoCallModal } from "./VideoCallModal-Cz-Al5K6.js";
import { B as Badge } from "./badge-BIURL7cs.js";
import { c as createLucideIcon, a as cn, B as Button } from "./button-BvyUxXoC.js";
import { C as Card, a as CardContent } from "./card-DZaejbfi.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-ClkTpw0x.js";
import { I as Input } from "./input-CZKAmHy7.js";
import { P as Progress } from "./progress-BdYePAaI.js";
import { S as Search, P as Plus } from "./search-CBu1IlCh.js";
import { X } from "./x-BFi_PMpP.js";
import { C as ChevronUp } from "./chevron-up-HqQuZc5j.js";
import { C as ChevronDown } from "./chevron-down-BmTxOdwm.js";
import { B as BookOpen } from "./book-open-Ci3ai6ix.js";
import { C as CircleCheck } from "./circle-check-B1fsPhuk.js";
import { Z as Zap } from "./zap-D7EhZXzW.js";
import { T as TrendingUp } from "./trending-up-CTKva_Z-.js";
import { C as Clock } from "./clock-ob9vV4gK.js";
import { S as Send } from "./send-D7AleP_c.js";
import "./monitor-dxbXRWzn.js";
import "./index-DuDLhzDB.js";
import "./index-Bl4NdBW6.js";
import "./Combination-bEvvapRF.js";
import "./index-CMbBnj4F.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
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
      imageUrl: ""
    }
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
      imageUrl: ""
    }
  },
  {
    id: 3,
    subject: "Physics",
    subjectColor: "bg-orange-100 text-orange-700",
    title: "How does a transformer work and why can't it work on DC?",
    status: "Pending",
    timeAgo: "3 hours ago",
    answer: null
  },
  {
    id: 4,
    subject: "Chemistry",
    subjectColor: "bg-green-100 text-green-700",
    title: "What is the difference between ionic and covalent bonds?",
    status: "Pending",
    timeAgo: "5 hours ago",
    answer: null
  }
];
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
const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    icon: "✅",
    type: "doubt_reply",
    relatedId: 1,
    text: "Prof. Meena Rao answered your Math doubt",
    time: "2h ago",
    read: false
  },
  {
    id: 2,
    icon: "💬",
    type: "message",
    relatedId: "teacher_arjun",
    text: "New message from Mr. Arjun Das",
    time: "4h ago",
    read: false
  },
  {
    id: 3,
    icon: "📝",
    type: "weekly_test",
    relatedId: null,
    text: "Your weekly test is ready!",
    time: "1d ago",
    read: false
  }
];
const TEST_HISTORY = [
  { week: 12, score: 80, strong: ["CS"], fearZones: ["Math"] },
  { week: 11, score: 65, strong: ["Math", "CS"], fearZones: ["Physics"] },
  { week: 10, score: 50, strong: ["CS"], fearZones: ["Chemistry", "Biology"] },
  { week: 9, score: 40, strong: [], fearZones: ["Math", "Physics", "CS"] }
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
function StudentDashboard() {
  const navigate = useNavigate();
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
  const [expandedDoubt, setExpandedDoubt] = reactExports.useState(1);
  const [videoCallDoubt, setVideoCallDoubt] = reactExports.useState(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const searchRef = reactExports.useRef(null);
  const [notifications, setNotifications] = reactExports.useState(MOCK_NOTIFICATIONS);
  const [notifOpen, setNotifOpen] = reactExports.useState(false);
  const notifRef = reactExports.useRef(null);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const [historyExpanded, setHistoryExpanded] = reactExports.useState(true);
  const [ratings, setRatings] = reactExports.useState({});
  const [hoverRating, setHoverRating] = reactExports.useState({});
  const [replyInputs, setReplyInputs] = reactExports.useState({});
  const [replies, setReplies] = reactExports.useState({});
  const confidenceScore = 73;
  const xp = 1240;
  const xpToNext = 2e3;
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
  const filteredDoubts = searchQuery.trim().length > 0 ? MOCK_DOUBTS.filter(
    (d) => {
      var _a;
      return d.title.toLowerCase().includes(searchQuery.toLowerCase()) || d.subject.toLowerCase().includes(searchQuery.toLowerCase()) || (((_a = d.answer) == null ? void 0 : _a.text) ?? "").toLowerCase().includes(searchQuery.toLowerCase());
    }
  ) : [];
  function markRead(id) {
    setNotifications(
      (prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n)
    );
  }
  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }
  function handleNotifClick(n) {
    var _a;
    markRead(n.id);
    setNotifOpen(false);
    if (n.type === "doubt_reply") {
      (_a = document.getElementById("doubts-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    } else if (n.type === "message") {
      navigate({ to: "/chat" });
    } else if (n.type === "weekly_test") {
      navigate({ to: "/weekly-test" });
    }
  }
  function submitReply(doubtId) {
    const text = (replyInputs[doubtId] ?? "").trim();
    if (!text) return;
    setReplies((prev) => ({
      ...prev,
      [doubtId]: [...prev[doubtId] ?? [], text]
    }));
    setReplyInputs((prev) => ({ ...prev, [doubtId]: "" }));
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
        notifications.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        notifications.every((n) => n.read) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-sm text-muted-foreground", children: "You're all caught up! \\uD83C\\uDF89" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm", children: "AS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-sm", children: "Arjun Sharma" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 text-xs", children: "Student" })
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `${d.subjectColor} border-0 text-xs`,
                        children: d.subject
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `text-xs border-0 ${d.status === "Answered" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`,
                        children: d.status
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground mt-1 line-clamp-1", children: d.title })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${d.subjectColor} border-0 text-xs`, children: d.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground mt-1 line-clamp-1", children: d.title })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: "You're doing amazing, Arjun!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "You've asked 4 questions this week. Keep it up — curious minds grow faster!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-100 text-amber-700 border-amber-200 animate-pulse-soft hidden sm:flex", children: "🔥 7-day streak" })
      ] }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mt-4", children: TEST_HISTORY.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "student.list", children: MOCK_DOUBTS.map((doubt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300",
            "data-ocid": `student.item.${i + 1}`,
            "data-doubt-id": doubt.id,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-start justify-between gap-3 w-full text-left",
                  onClick: () => setExpandedDoubt(
                    expandedDoubt === doubt.id ? null : doubt.id
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            className: `${doubt.subjectColor} border-0 text-xs`,
                            children: doubt.subject
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Badge,
                          {
                            className: `text-xs border-0 ${doubt.status === "Answered" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`,
                            children: [
                              doubt.status === "Answered" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                              doubt.status
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground text-sm truncate", children: doubt.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: doubt.timeAgo })
                    ] }),
                    expandedDoubt === doubt.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" })
                  ]
                }
              ),
              expandedDoubt === doubt.id && doubt.answer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border animate-fade-in", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700", children: doubt.answer.teacher.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: doubt.answer.teacher }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-100 text-green-700 border-green-200 text-xs", children: "Teacher" })
                ] }),
                doubt.answer.voiceUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "audio",
                  {
                    controls: true,
                    src: doubt.answer.voiceUrl,
                    className: "w-full mb-3 rounded-lg",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" })
                  }
                ),
                doubt.answer.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "video",
                  {
                    controls: true,
                    src: doubt.answer.videoUrl,
                    className: "w-full rounded-xl mb-3",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("track", { kind: "captions" })
                  }
                ),
                doubt.answer.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: doubt.answer.imageUrl,
                    alt: "Teacher attachment",
                    className: "rounded-xl mb-3 max-w-sm"
                  }
                ),
                doubt.answer.text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed bg-muted/40 rounded-xl p-4", children: doubt.answer.text }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "rounded-full gradient-primary text-white border-0 shadow-primary mt-2",
                    onClick: (e) => {
                      e.stopPropagation();
                      setVideoCallDoubt(doubt.id);
                    },
                    "data-ocid": "student.primary_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4 mr-2" }),
                      " Join Video Call"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/50 mt-4 pt-4", children: [
                  ratings[doubt.id] ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Thanks for your feedback!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-amber-500", children: [
                      "⭐ ",
                      ratings[doubt.id],
                      "/5"
                    ] })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Rate this answer:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "transition-transform hover:scale-110 focus:outline-none",
                        onClick: () => setRatings((prev) => ({
                          ...prev,
                          [doubt.id]: star
                        })),
                        onMouseEnter: () => setHoverRating((prev) => ({
                          ...prev,
                          [doubt.id]: star
                        })),
                        onMouseLeave: () => setHoverRating((prev) => ({
                          ...prev,
                          [doubt.id]: 0
                        })),
                        "aria-label": `Rate ${star} star`,
                        "data-ocid": `student.toggle.${star}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Star,
                          {
                            className: `w-5 h-5 ${star <= (hoverRating[doubt.id] ?? 0) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`
                          }
                        )
                      },
                      star
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    (replies[doubt.id] ?? []).map((reply, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-2 bg-muted/30 rounded-xl p-3",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0", children: "A" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: reply })
                        ]
                      },
                      `reply-${doubt.id}-${ri}`
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          className: "flex-1 rounded-full h-9 text-sm bg-white/60 border-border",
                          placeholder: "Ask a follow-up…",
                          value: replyInputs[doubt.id] ?? "",
                          onChange: (e) => setReplyInputs((prev) => ({
                            ...prev,
                            [doubt.id]: e.target.value
                          })),
                          onKeyDown: (e) => {
                            if (e.key === "Enter") submitReply(doubt.id);
                          },
                          "data-ocid": "student.input"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "rounded-full gradient-primary text-white border-0 h-9 w-9 p-0 flex-shrink-0",
                          onClick: () => submitReply(doubt.id),
                          "data-ocid": "student.submit_button",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                        }
                      )
                    ] })
                  ] })
                ] })
              ] }),
              expandedDoubt === doubt.id && !doubt.answer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-border animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-amber-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                " Your doubt is in the queue. A teacher will respond soon!"
              ] }) })
            ] })
          },
          doubt.id
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
      ] }),
      videoCallDoubt !== null && (() => {
        var _a;
        const d = MOCK_DOUBTS.find((x) => x.id === videoCallDoubt);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          VideoCallModal,
          {
            open: videoCallDoubt !== null,
            onClose: () => setVideoCallDoubt(null),
            studentName: ((_a = d == null ? void 0 : d.answer) == null ? void 0 : _a.teacher) ?? "Prof. Meena Rao",
            isTeacher: false
          }
        );
      })()
    ] }),
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
