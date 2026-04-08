import { c as createLucideIcon, j as jsxRuntimeExports, u as useNavigate, r as reactExports, U as Link, l as loadLocalProfile } from "./index-DhKLV7cR.js";
import { B as Button } from "./button-4VCeLX1c.js";
import { u as useNotifications, B as Bell } from "./useNotifications-BF3RW-AQ.js";
import { X } from "./x-BIp1SqQQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode);
function AskSparkLogo({
  variant = "horizontal",
  height = 40,
  className = ""
}) {
  const iconSize = height;
  if (variant === "icon") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: iconSize,
        height: iconSize,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className,
        "aria-label": "AskSpark",
        role: "img",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "spark-icon-grad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3B82F6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#6366F1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#8B5CF6" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "spark-glow-icon", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "2", result: "blur" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in: "SourceGraphic", in2: "blur", operator: "over" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "ellipse",
            {
              cx: "32",
              cy: "28",
              rx: "14",
              ry: "16",
              fill: "url(#spark-icon-grad)",
              filter: "url(#spark-glow-icon)",
              opacity: "0.15"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M22 28c0-5.523 4.477-10 10-10s10 4.477 10 10c0 3.5-1.8 6.6-4.5 8.4V40H26.5v-3.6C23.8 34.6 22 31.5 22 28z",
              fill: "url(#spark-icon-grad)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "26.5",
              y: "40",
              width: "11",
              height: "2.5",
              rx: "1.25",
              fill: "url(#spark-icon-grad)",
              opacity: "0.7"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: "28",
              y: "43",
              width: "8",
              height: "2",
              rx: "1",
              fill: "url(#spark-icon-grad)",
              opacity: "0.5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M33.5 22l-4 7h3.5l-2 7 6-8.5H33l2.5-5.5z",
              fill: "white",
              opacity: "0.95"
            }
          )
        ]
      }
    );
  }
  const wordmarkFontSize = height * 0.48;
  const totalWidth = iconSize + 8 + wordmarkFontSize * 4.2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: totalWidth,
      height,
      viewBox: `0 0 ${totalWidth} ${height}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      "aria-label": "AskSpark",
      role: "img",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "spark-h-grad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3B82F6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#6366F1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#8B5CF6" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "spark-text-grad", x1: "0", y1: "0", x2: "1", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3B82F6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#6366F1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#8B5CF6" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "spark-glow-h", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "1.5", result: "blur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in: "SourceGraphic", in2: "blur", operator: "over" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(0, ${(height - iconSize) / 2})`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "ellipse",
            {
              cx: iconSize / 2,
              cy: iconSize * 0.44,
              rx: iconSize * 0.22,
              ry: iconSize * 0.25,
              fill: "url(#spark-h-grad)",
              opacity: "0.18",
              filter: "url(#spark-glow-h)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: `M${iconSize * 0.345} ${iconSize * 0.438}
             c0-${iconSize * 0.156} ${iconSize * 0.07}-${iconSize * 0.282} ${iconSize * 0.156}-${iconSize * 0.282}
             s${iconSize * 0.156} ${iconSize * 0.126} ${iconSize * 0.156} ${iconSize * 0.282}
             c0 ${iconSize * 0.109}-${iconSize * 0.056} ${iconSize * 0.206}-${iconSize * 0.141} ${iconSize * 0.263}
             V${iconSize * 0.625}H${iconSize * 0.414}v-${iconSize * 0.063}
             c-${iconSize * 0.085}-${iconSize * 0.057}-${iconSize * 0.069}-${iconSize * 0.154}-${iconSize * 0.069}-${iconSize * 0.263}z`,
              fill: "url(#spark-h-grad)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: iconSize * 0.414,
              y: iconSize * 0.625,
              width: iconSize * 0.172,
              height: iconSize * 0.063,
              rx: iconSize * 0.031,
              fill: "url(#spark-h-grad)",
              opacity: "0.7"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "rect",
            {
              x: iconSize * 0.438,
              y: iconSize * 0.703,
              width: iconSize * 0.125,
              height: iconSize * 0.047,
              rx: iconSize * 0.023,
              fill: "url(#spark-h-grad)",
              opacity: "0.5"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: `M${iconSize * 0.523} ${iconSize * 0.281}
             l-${iconSize * 0.063} ${iconSize * 0.109}
             h${iconSize * 0.055}
             l-${iconSize * 0.031} ${iconSize * 0.109}
             l${iconSize * 0.094}-${iconSize * 0.133}
             H${iconSize * 0.516}
             l${iconSize * 0.039}-${iconSize * 0.086}z`,
              fill: "white",
              opacity: "0.95"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: iconSize + 8,
            y: height * 0.72,
            fontSize: wordmarkFontSize,
            fontWeight: "700",
            fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
            letterSpacing: "-0.02em",
            fill: "url(#spark-text-grad)",
            children: "AskSpark"
          }
        )
      ]
    }
  );
}
function timeAgo(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 6e4);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}
const TYPE_ICONS = {
  call: "📞",
  class: "🎥",
  doubt_answered: "✅",
  new_doubt: "❓",
  call_request: "📲"
};
function NotificationBell() {
  const navigate = useNavigate();
  const { notifications, unreadCount, markRead, markAllRead } = useNotifications();
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const recent = notifications.slice(0, 10);
  function handleClick(id, navigateTo) {
    markRead(id);
    setOpen(false);
    if (navigateTo) {
      navigate({ to: navigateTo });
    }
  }
  function handleBlur(e) {
    if (ref.current && !ref.current.contains(e.relatedTarget)) {
      setOpen(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "relative",
      onBlur: handleBlur,
      tabIndex: -1,
      "data-ocid": "notifications.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "relative w-9 h-9 rounded-full border border-border bg-white/60 flex items-center justify-center hover:bg-muted/40 transition-colors",
            onClick: () => setOpen((o) => !o),
            "aria-label": "Notifications",
            "data-ocid": "notifications.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-foreground" }),
              unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-4.5 h-4.5 min-w-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center px-0.5", children: unreadCount > 9 ? "9+" : unreadCount })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute top-full mt-2 right-0 w-80 glass-card rounded-2xl warm-shadow border-white/40 overflow-hidden z-50 animate-fade-in",
            "data-ocid": "notifications.popover",
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
                    "data-ocid": "notifications.secondary_button",
                    children: "Mark all read"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto", children: recent.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "py-8 text-center text-sm text-muted-foreground",
                  "data-ocid": "notifications.empty_state",
                  children: "No notifications yet"
                }
              ) : recent.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-muted/40 transition-colors border-b border-border/30 last:border-0 ${n.read ? "opacity-60" : ""}`,
                  onClick: () => handleClick(n.id, n.navigateTo),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0 mt-0.5", children: TYPE_ICONS[n.type] ?? "🔔" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground leading-snug", children: n.message }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: timeAgo(n.createdAt) })
                    ] }),
                    !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" })
                  ]
                },
                n.id
              )) })
            ]
          }
        )
      ]
    }
  );
}
const NAV_LINKS = [
  { href: "/#features", label: "Features", isAnchor: true },
  { href: "/#how-it-works", label: "How It Works", isAnchor: true },
  { href: "/#team", label: "Team", isAnchor: true },
  { href: "/learning", label: "Learning", isAnchor: false },
  { href: "/blog", label: "Blog", isAnchor: false },
  { href: "/help", label: "Help Center", isAnchor: false },
  { href: "/chat", label: "Community", isAnchor: false }
];
function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `sticky top-0 z-50 glass-nav transition-all duration-300 ${scrolled ? "warm-shadow" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center", "data-ocid": "nav.link", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AskSparkLogo,
              {
                variant: "horizontal",
                height: 38,
                className: "hidden md:block"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AskSparkLogo, { variant: "icon", height: 36, className: "md:hidden" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground", children: NAV_LINKS.map(
            (link) => link.isAnchor ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.href,
                className: "hover:text-foreground transition-colors duration-200",
                "data-ocid": "nav.link",
                children: link.label
              },
              link.href
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: link.href,
                className: "hover:text-foreground transition-colors duration-200",
                "data-ocid": "nav.link",
                children: link.label
              },
              link.href
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
            loadLocalProfile() && /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "rounded-full border-primary/30 text-primary hover:bg-primary/5 font-medium",
                onClick: () => navigate({ to: "/onboarding" }),
                "data-ocid": "header.secondary_button",
                children: "I'm a Student"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "rounded-full gradient-primary text-white hover:opacity-90 font-medium px-5 shadow-primary border-0",
                onClick: () => navigate({ to: "/onboarding" }),
                "data-ocid": "header.primary_button",
                children: "I'm a Teacher"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "md:hidden p-2 rounded-xl hover:bg-muted transition-colors",
              onClick: () => setMobileOpen(!mobileOpen),
              "data-ocid": "header.toggle",
              children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
            }
          )
        ] }),
        mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden glass-card border-t border-white/30 px-4 py-4 flex flex-col gap-3 animate-fade-in", children: [
          NAV_LINKS.map(
            (link) => link.isAnchor ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.href,
                className: "text-sm font-medium py-2 text-foreground hover:text-primary transition-colors",
                onClick: () => setMobileOpen(false),
                "data-ocid": "nav.link",
                children: link.label
              },
              link.href
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: link.href,
                className: "text-sm font-medium py-2 text-foreground hover:text-primary transition-colors",
                onClick: () => setMobileOpen(false),
                "data-ocid": "nav.link",
                children: link.label
              },
              link.href
            )
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-2 border-t border-border", children: [
            loadLocalProfile() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "rounded-full border-primary/30 text-primary",
                onClick: () => {
                  navigate({ to: "/onboarding" });
                  setMobileOpen(false);
                },
                "data-ocid": "header.secondary_button",
                children: "I'm a Student"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "rounded-full gradient-primary text-white border-0",
                onClick: () => {
                  navigate({ to: "/onboarding" });
                  setMobileOpen(false);
                },
                "data-ocid": "header.primary_button",
                children: "I'm a Teacher"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  AskSparkLogo as A,
  Header as H
};
