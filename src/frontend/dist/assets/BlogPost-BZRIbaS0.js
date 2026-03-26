import { C as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-B800XCAJ.js";
import { B as Badge } from "./badge-BIURL7cs.js";
import { B as Button } from "./button-BvyUxXoC.js";
import { H as Header } from "./Header-USuN474N.js";
import { b as blogPosts, P as PenLine, C as Calendar, H as House } from "./blogPosts-2Yunv1o1.js";
import { A as ArrowLeft } from "./arrow-left-BtasNhE-.js";
import { C as Clock } from "./clock-ob9vV4gK.js";
import { S as Sparkles } from "./sparkles-Dt0j2V4a.js";
import { A as ArrowRight } from "./arrow-right-CL-18_DO.js";
import "./graduation-cap-llT6mVyr.js";
import "./x-BFi_PMpP.js";
function BlogPost() {
  const { slug } = useParams({ strict: false });
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  reactExports.useEffect(() => {
    if (!post) {
      navigate({ to: "/blog" });
    }
  }, [post, navigate]);
  if (!post) return null;
  const faqStartIndex = post.content.findIndex(
    (s) => s.type === "h2" && s.text.toLowerCase().startsWith("faq")
  );
  const renderContent = () => {
    const elements = [];
    let i = 0;
    while (i < post.content.length) {
      const section = post.content[i];
      const key = `${section.type}-${i}-${section.text.slice(0, 30)}`;
      if (i === faqStartIndex && faqStartIndex !== -1) {
        const faqItems = [];
        faqItems.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-6",
              children: section.text
            },
            `faq-h2-${i}`
          )
        );
        i++;
        while (i < post.content.length) {
          const s = post.content[i];
          const k = `faq-${s.type}-${i}`;
          if (s.type === "h3") {
            faqItems.push(
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-display text-lg font-semibold text-foreground mt-5 mb-2",
                  children: s.text
                },
                k
              )
            );
          } else if (s.type === "p") {
            faqItems.push(
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-muted-foreground text-[17px] leading-[1.8]",
                  children: s.text
                },
                k
              )
            );
          }
          i++;
        }
        elements.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-muted/30 rounded-2xl p-6 space-y-2 mt-10",
              children: faqItems
            },
            "faq-block"
          )
        );
        continue;
      }
      if (section.type === "h2") {
        elements.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display text-2xl sm:text-3xl font-bold text-foreground mt-10 first:mt-0",
              children: section.text
            },
            key
          )
        );
      } else if (section.type === "h3") {
        elements.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display text-xl font-semibold text-foreground mt-6",
              children: section.text
            },
            key
          )
        );
      } else if (section.type === "highlight") {
        elements.push(
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass-card border-l-4 border-primary rounded-2xl px-6 py-4 text-foreground font-medium leading-relaxed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-primary mb-2" }),
                section.text
              ]
            },
            key
          )
        );
      } else {
        elements.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-muted-foreground text-[17px] leading-[1.8]",
              children: section.text
            },
            key
          )
        );
      }
      i++;
    }
    return elements;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero pt-14 pb-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8",
          "data-ocid": "blog.link",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Blog"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          variant: "secondary",
          className: "text-xs bg-primary/10 text-primary border-0 rounded-full",
          children: tag
        },
        tag
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-7", children: post.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-border/40 pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0", children: "TA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-3.5 h-3.5" }),
            post.author
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
          post.date
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
          post.readTime
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 -mt-2 mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/assets/generated/blog-header.dim_1200x480.jpg",
        loading: "lazy",
        alt: "AskSpark blog article header — students learning and asking doubts",
        className: "w-full h-56 sm:h-72 object-cover rounded-2xl shadow-lg"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-[680px] mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "space-y-6", "data-ocid": "blog.panel", children: renderContent() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 glass-card rounded-3xl p-8 text-center border-white/40 warm-shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-primary mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-7 h-7 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Ready to Ask Your Doubt on AskSpark?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-sm mx-auto", children: "Join thousands of students who ask boldly on AskSpark — anonymously or with your name." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/submit", "data-ocid": "blog.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            className: "rounded-full gradient-primary text-white border-0 shadow-primary hover:opacity-90 px-8",
            children: "Ask Your Doubt Now"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-border/40 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-medium",
              "data-ocid": "blog.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4" }),
                "Back to Homepage"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/submit",
              className: "flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-medium",
              "data-ocid": "blog.link",
              children: [
                "Submit a Doubt",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ] }),
      relatedPosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-5", children: "You might also like" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: relatedPosts.map((related) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog/$slug",
            params: { slug: related.slug },
            className: "flex items-start gap-4 p-4 glass-card rounded-2xl hover:border-primary/30 transition-all group",
            "data-ocid": "blog.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/blog-header.dim_1200x480.jpg",
                  loading: "lazy",
                  alt: related.title,
                  className: "w-20 h-14 object-cover rounded-xl flex-shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2", children: related.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: related.readTime })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" })
            ]
          },
          related.slug
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 pt-6 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors",
          "data-ocid": "blog.link",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to all articles"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/40 mt-8 py-8 text-center text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with ❤️ using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
          target: "_blank",
          rel: "noreferrer",
          className: "text-primary hover:underline",
          children: "caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  BlogPost as default
};
