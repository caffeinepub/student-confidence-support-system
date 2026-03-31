import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, U as Link, l as loadLocalProfile } from "./index-FXQKW5Uj.js";
import { B as Button } from "./button-C6kwI2FL.js";
import { u as useNotifications, B as Bell } from "./useNotifications-bsPSLgpC.js";
import { G as GraduationCap } from "./graduation-cap-CehvK_w4.js";
import { X } from "./x-qiUEfBcN.js";
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2.5 font-bold text-foreground",
              "data-ocid": "nav.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-5 h-5 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Ask" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Spark" })
                ] })
              ]
            }
          ),
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
  Header as H
};
