import { u as useNavigate, j as jsxRuntimeExports, r as reactExports, a as ue } from "./index-D318_g4s.js";
import { B as Button } from "./button-DxKWBTF4.js";
import { I as Input } from "./input-Bs9YSXUG.js";
import { L as Label } from "./label-CuEeZtcz.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BDZMR8sB.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CQs3JB7D.js";
import { T as Textarea } from "./textarea-CAhpvl9a.js";
import { A as ArrowLeft } from "./arrow-left-Orr9tuxh.js";
import { m as motion } from "./proxy-CWzjrIFl.js";
import { S as Send } from "./send-DlSvmals.js";
import { C as ChevronDown } from "./chevron-down-DtuiAgfK.js";
import { A as AnimatePresence } from "./index-BJNxi1Nv.js";
import "./index-Br4aKzm6.js";
import "./index-IXOTxK3N.js";
import "./index-CGUHFkSF.js";
import "./index--j9EfYxj.js";
import "./index-F1lxqb1X.js";
import "./Combination-DOQN04HH.js";
import "./index-BnjHyatk.js";
import "./createLucideIcon-BYc_1kv7.js";
import "./chevron-up-DOHZ5Ve_.js";
import "./index-CvtHoH2O.js";
const FAQS = [
  {
    q: "How do I submit a doubt?",
    a: "Go to Submit Doubt page, fill in your question and subject, and hit Submit. It's anonymous!"
  },
  {
    q: "Is AskSpark free to use?",
    a: "Yes! AskSpark is completely free for all students."
  },
  {
    q: "Can I ask questions anonymously?",
    a: "Absolutely. No login required — just ask your doubt and get help."
  },
  {
    q: "How do I access recorded lectures?",
    a: "Go to Learning Hub → Lectures → Recorded Lectures tab."
  },
  {
    q: "How does the weekly test work?",
    a: "Tests are auto-generated each week based on popular topics. Go to Weekly Test from your dashboard."
  },
  {
    q: "Can I chat with other students?",
    a: "Yes! Join study rooms in the Chat section or send personal messages to peers."
  },
  {
    q: "How do I earn points?",
    a: "Ask a doubt (+10 points) or invite a friend (+20 points). Points show on your dashboard."
  },
  {
    q: "How do I change my class or branch?",
    a: "Go to your Profile page and click Edit Profile to update your class or branch."
  }
];
const WELCOME_MESSAGE = {
  id: 1,
  text: "👋 Hi! I'm **AskSpark Bot**. I can guide you around AskSpark. Ask me anything!",
  isUser: false,
  time: "just now"
};
function getBotReply(input) {
  const msg = input.toLowerCase();
  if (msg.includes("doubt"))
    return "You can submit your doubt in the **Submit Doubt** section. Just type your question, select your subject, and hit submit — no login required! 🎯";
  if (msg.includes("profile"))
    return "To update your details, go to your **Profile page**. You can change your name, class/branch, interests, and even upload a profile photo. ✏️";
  if (msg.includes("lecture"))
    return "Check the **Learning Hub → Lectures** section for both live classes and recorded videos. 🎓";
  if (msg.includes("test") || msg.includes("quiz"))
    return "The **Weekly Test** section on your dashboard auto-generates MCQs based on popular topics from your class/branch. 📝";
  if (msg.includes("point") || msg.includes("reward"))
    return "You earn **+10 points** for asking a doubt and **+20 points** for inviting a friend. Check the leaderboard on your dashboard! 🏆";
  if (msg.includes("chat"))
    return "You can chat with students and teachers in the **Chat** section. Join a study room or send personal messages. 💬";
  if (msg.includes("hello") || msg.includes("hi"))
    return "Hello! 👋 I'm AskSpark Bot. Ask me anything about using the platform!";
  return "I'm here to help! Please ask your question, or try typing: **doubt**, **profile**, **lecture**, **test**, or **chat**. 🤖";
}
function BoldText({ text }) {
  const parts = text.split("**");
  const nodes = parts.map(
    (part, i) => i % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: part }, `b-${i}-${part.slice(0, 4)}`) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, `s-${i}-${part.slice(0, 4)}`)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: nodes });
}
function BotChatTab() {
  const [messages, setMessages] = reactExports.useState([WELCOME_MESSAGE]);
  const [input, setInput] = reactExports.useState("");
  const bottomRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = bottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  });
  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    const now = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const userMsg = { id: Date.now(), text, isUser: true, time: now };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        text: getBotReply(text),
        isUser: false,
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      };
      setMessages((prev) => [...prev, reply]);
    }, 300);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[480px] glass-card rounded-2xl border border-white/40 overflow-hidden warm-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border/50 flex items-center gap-3 bg-white/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm", children: "🤖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-foreground", children: "AskSpark Bot 🤖" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-green-600 font-medium", children: "● Active" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-4 space-y-3", children: [
      messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          className: `flex items-end gap-2 ${msg.isUser ? "justify-end" : "justify-start"}`,
          children: [
            !msg.isUser && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-white text-xs flex-shrink-0", children: "🤖" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.isUser ? "gradient-primary text-white rounded-br-sm" : "bg-white/70 text-foreground border border-white/60 rounded-bl-sm"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BoldText, { text: msg.text }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `text-xs mt-1 ${msg.isUser ? "text-white/70" : "text-muted-foreground"}`,
                      children: msg.time
                    }
                  )
                ]
              }
            )
          ]
        },
        msg.id
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-3 border-t border-border/50 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Ask me anything about AskSpark...",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && !e.shiftKey && sendMessage(),
          className: "rounded-full border-border/60 bg-white/60 text-sm",
          "data-ocid": "support.bot.input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          className: "rounded-full gradient-primary text-white border-0 flex-shrink-0",
          onClick: sendMessage,
          disabled: !input.trim(),
          "data-ocid": "support.bot.submit_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
        }
      )
    ] })
  ] });
}
function FAQTab() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAQS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card rounded-2xl border border-white/40 overflow-hidden",
      "data-ocid": `support.faq.item.${i + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "w-full flex items-center justify-between px-5 py-4 text-left",
            onClick: () => setOpen(open === i ? null : i),
            "data-ocid": "support.faq.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm pr-4", children: item.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: `w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.2 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-4 text-sm text-muted-foreground border-t border-border/40 pt-3", children: item.a })
          }
        ) })
      ]
    },
    item.q
  )) });
}
function HelpFormTab() {
  const [name, setName] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !subject || !message.trim()) return;
    setSending(true);
    setTimeout(() => {
      const requests = JSON.parse(
        localStorage.getItem("support_requests") || "[]"
      );
      requests.push({ name, subject, message, timestamp: Date.now() });
      localStorage.setItem("support_requests", JSON.stringify(requests));
      setName("");
      setSubject("");
      setMessage("");
      setSending(false);
      ue.success("Your request has been sent! We'll get back to you soon.");
    }, 800);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "glass-card rounded-2xl border border-white/40 p-6 warm-shadow space-y-5",
      "data-ocid": "support.help.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "help-name", children: "Your Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "help-name",
              placeholder: "e.g. Rahul Sharma",
              value: name,
              onChange: (e) => setName(e.target.value),
              required: true,
              "data-ocid": "support.help.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "help-subject", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: subject, onValueChange: setSubject, required: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "help-subject", "data-ocid": "support.help.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Pick a subject" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Mathematics",
              "Physics",
              "Chemistry",
              "Computer Science",
              "Biology",
              "Other"
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "help-message", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "help-message",
              placeholder: "Describe your issue or question...",
              rows: 4,
              value: message,
              onChange: (e) => setMessage(e.target.value),
              required: true,
              "data-ocid": "support.help.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            disabled: sending || !name.trim() || !subject || !message.trim(),
            className: "w-full rounded-full gradient-primary text-white border-0 hover:opacity-90 font-semibold",
            "data-ocid": "support.help.submit_button",
            children: sending ? "Sending..." : "Send Request"
          }
        )
      ]
    }
  );
}
function SupportPage() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-hero py-10 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6",
          onClick: () => navigate({ to: "/learning" }),
          "data-ocid": "support.link",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to Learning Hub"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground", children: [
        "🤖 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "24/7 Support" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Chat with our AI bot, browse FAQs, or send a help request." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "chat", "data-ocid": "support.tab", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-8 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "chat", "data-ocid": "support.chat.tab", children: "🤖 AskSpark Bot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "faq", "data-ocid": "support.faq.tab", children: "❓ FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "help", "data-ocid": "support.help.tab", children: "📬 Ask for Help" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "chat", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BotChatTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "faq", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "help", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HelpFormTab, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "text-center py-8 text-xs text-muted-foreground border-t border-border/40", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with ❤️ using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-primary",
          children: "caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  SupportPage as default
};
