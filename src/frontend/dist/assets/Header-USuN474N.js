import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-B800XCAJ.js";
import { c as createLucideIcon, B as Button } from "./button-BvyUxXoC.js";
import { G as GraduationCap } from "./graduation-cap-llT6mVyr.js";
import { X } from "./x-BFi_PMpP.js";
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
const NAV_LINKS = [
  { href: "/#features", label: "Features", isAnchor: true },
  { href: "/#how-it-works", label: "How It Works", isAnchor: true },
  { href: "/#team", label: "Team", isAnchor: true },
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
