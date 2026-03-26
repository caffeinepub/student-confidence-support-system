import { r as reactExports, j as jsxRuntimeExports, L as Link, a as ue } from "./index-B800XCAJ.js";
import { L as Lightbulb, A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-Q0TBjuXY.js";
import { c as createLucideIcon, B as Button } from "./button-BvyUxXoC.js";
import { C as Card, a as CardContent } from "./card-DZaejbfi.js";
import { I as Input } from "./input-CZKAmHy7.js";
import { L as Label } from "./label-Be8XCPRD.js";
import { T as Textarea } from "./textarea-DNJkaDPT.js";
import { U as Users } from "./users-Dn-UhVqs.js";
import { C as Clock } from "./clock-ob9vV4gK.js";
import { S as Shield } from "./shield-DsS1qdsM.js";
import { S as Send } from "./send-D7AleP_c.js";
import { B as BookOpen } from "./book-open-Ci3ai6ix.js";
import { M as MessageCircle } from "./message-circle-KJsPTkcY.js";
import { G as GraduationCap } from "./graduation-cap-llT6mVyr.js";
import { A as ArrowRight } from "./arrow-right-CL-18_DO.js";
import "./index-Bl4NdBW6.js";
import "./index-FpoN-Jne.js";
import "./index-DuDLhzDB.js";
import "./index-CMbBnj4F.js";
import "./chevron-down-BmTxOdwm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const CircleHelp = createLucideIcon("circle-help", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
const FAQS = [
  {
    q: "How do I submit a doubt?",
    a: "Click the 'Submit Doubt' button in the navigation or from your student dashboard. Fill in the subject, title, and description of your question. You can also attach an image for better context. Anonymous submission is available if you prefer privacy."
  },
  {
    q: "Is anonymous submission really safe?",
    a: "Yes, completely. When you submit anonymously, your name and identity are not attached to the doubt at any point. Teachers only see the question content and subject, never your personal information. This is designed to reduce the fear of judgment."
  },
  {
    q: "How long does it take for a teacher to respond?",
    a: "Most doubts are answered within 24 hours. High-priority doubts (marked as urgent) are typically addressed within 2-4 hours. You'll receive an in-app notification as soon as your doubt is answered."
  },
  {
    q: "Can teachers do video calls to explain doubts?",
    a: "Yes! Teachers can initiate a video call session directly from any doubt card in their dashboard. You'll receive a join link in your student dashboard under the answered doubt. This uses your device's camera and microphone via WebRTC."
  },
  {
    q: "What is the Community Chat and how do I use it?",
    a: "The Community Chat (/chat) has two sections: Study Rooms (group discussions organized by subject) and Personal Messages (one-on-one chats with other students). All chats are moderated — abusive language is automatically detected and results in warnings or a ban."
  },
  {
    q: "What happens if someone uses abusive language in chat?",
    a: "Our automatic moderation system detects inappropriate language in real time. The first offense triggers a warning. After 3 violations, the user is permanently blocked from the community. You can report violations by contacting support."
  },
  {
    q: "How does the confidence score work?",
    a: "Your confidence score increases each time you submit a doubt, engage in discussions, or receive an upvote on a helpful question. It reflects how actively you participate in learning. Badges are awarded at milestones to celebrate your growth."
  },
  {
    q: "I'm a teacher — how do I manage my account?",
    a: "Teachers get access to the Teacher Dashboard where you can view all submitted doubts, respond with text/voice/video/image answers, initiate video calls, and track your response stats. Contact your institution admin to set up your teacher account."
  }
];
const QUICK_LINKS = [
  {
    to: "/submit",
    icon: BookOpen,
    title: "Submit a Doubt",
    desc: "Ask your question anonymously or with your name",
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    to: "/dashboard/student",
    icon: LayoutDashboard,
    title: "Student Dashboard",
    desc: "View your doubts, scores, and badges",
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    to: "/chat",
    icon: MessageCircle,
    title: "Community Chat",
    desc: "Join study rooms and connect with peers",
    color: "text-violet-500",
    bg: "bg-violet-50"
  },
  {
    to: "/dashboard/teacher",
    icon: GraduationCap,
    title: "Teacher Dashboard",
    desc: "Manage doubts and track student progress",
    color: "text-amber-500",
    bg: "bg-amber-50"
  }
];
function HelpCenter() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      ue.error("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Help Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}

Message:
${message}`
    );
    window.location.href = `mailto:rohitkumar021107k@gmail.com?subject=${subject}&body=${body}`;
    ue.success("Opening your email client...");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-hero pt-20 pb-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-4 h-4" }),
        "Support Center"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight", children: [
        "We're here to",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "help you succeed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Find answers to common questions, contact our support team, or explore quick links to get where you need to go." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-12 space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
        { icon: Users, label: "Students Helped", value: "2,400+" },
        { icon: Clock, label: "Avg Response Time", value: "< 4 hrs" },
        { icon: Shield, label: "Safe & Anonymous", value: "100%" },
        { icon: Lightbulb, label: "Doubts Resolved", value: "8,100+" }
      ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "glass-card border-white/40 text-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-xl text-foreground", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: label })
          ] })
        },
        label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "help.section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Quick answers to the most common questions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Accordion,
          {
            type: "single",
            collapsible: true,
            className: "space-y-2",
            "data-ocid": "help.panel",
            children: FAQS.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AccordionItem,
              {
                value: faq.q,
                className: "glass-card border-white/40 px-5 rounded-2xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "font-medium text-foreground hover:no-underline text-left", children: faq.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: faq.a })
                ]
              },
              faq.q
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid md:grid-cols-2 gap-8", "data-ocid": "help.section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/40 warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col items-center text-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Still need help?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Our support team typically responds within a few hours. Reach out directly and we'll get back to you." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground font-medium bg-muted/50 px-4 py-2 rounded-full", children: "rohitkumar021107k@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:rohitkumar021107k@gmail.com", className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "w-full rounded-full gradient-primary text-white border-0 shadow-primary hover:opacity-90",
              "data-ocid": "help.primary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mr-2" }),
                "Send us an email"
              ]
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/40 warm-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-1", children: "Send a message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: "Fill out the form and we'll open your email client with the details pre-filled." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleContactSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "help-name", className: "text-sm font-medium", children: "Your Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "help-name",
                  placeholder: "e.g. Arjun Sharma",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  className: "mt-1 rounded-xl border-border/60",
                  "data-ocid": "help.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "help-email", className: "text-sm font-medium", children: "Your Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "help-email",
                  type: "email",
                  placeholder: "your@email.com",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  className: "mt-1 rounded-xl border-border/60",
                  "data-ocid": "help.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "help-message", className: "text-sm font-medium", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "help-message",
                  placeholder: "Describe your issue or question...",
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  rows: 4,
                  className: "mt-1 rounded-xl border-border/60 resize-none",
                  "data-ocid": "help.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                className: "w-full rounded-full gradient-primary text-white border-0 shadow-primary hover:opacity-90",
                "data-ocid": "help.submit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 mr-2" }),
                  "Send Message"
                ]
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "help.section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Jump directly to the feature you need." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: QUICK_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.to, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card border-white/40 warm-shadow hover:warm-shadow-lg transition-all duration-300 cursor-pointer group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-11 h-11 rounded-xl ${link.bg} ${link.color} flex items-center justify-center flex-shrink-0`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: link.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: link.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" })
        ] }) }) }, link.to)) })
      ] })
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
  HelpCenter as default
};
