import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const FAQS = [
  {
    q: "How do I submit a doubt?",
    a: "Go to Submit Doubt page, fill in your question and subject, and hit Submit. It's anonymous!",
  },
  {
    q: "Is AskSpark free to use?",
    a: "Yes! AskSpark is completely free for all students.",
  },
  {
    q: "Can I ask questions anonymously?",
    a: "Absolutely. No login required — just ask your doubt and get help.",
  },
  {
    q: "How do I access recorded lectures?",
    a: "Go to Learning Hub → Lectures → Recorded Lectures tab.",
  },
  {
    q: "How does the weekly test work?",
    a: "Tests are auto-generated each week based on popular topics. Go to Weekly Test from your dashboard.",
  },
  {
    q: "Can I chat with other students?",
    a: "Yes! Join study rooms in the Chat section or send personal messages to peers.",
  },
  {
    q: "How do I earn points?",
    a: "Ask a doubt (+10 points) or invite a friend (+20 points). Points show on your dashboard.",
  },
  {
    q: "How do I change my class or branch?",
    a: "Go to your Profile page and click Edit Profile to update your class or branch.",
  },
];

type Message = { id: number; text: string; isUser: boolean; time: string };

const WELCOME_MESSAGE: Message = {
  id: 1,
  text: "👋 Hi! I'm **AskSpark Bot**. I can guide you around AskSpark. Ask me anything!",
  isUser: false,
  time: "just now",
};

function getBotReply(input: string): string {
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

function BoldText({ text }: { text: string }) {
  const parts = text.split("**");
  const nodes: ReactNode[] = parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`b-${i}-${part.slice(0, 4)}`}>{part}</strong>
    ) : (
      <span key={`s-${i}-${part.slice(0, 4)}`}>{part}</span>
    ),
  );
  return <>{nodes}</>;
}

function BotChatTab() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const userMsg: Message = { id: Date.now(), text, isUser: true, time: now };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        text: getBotReply(text),
        isUser: false,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 300);
  }

  return (
    <div className="flex flex-col h-[480px] glass-card rounded-2xl border border-white/40 overflow-hidden warm-shadow">
      {/* Bot header */}
      <div className="px-4 py-3 border-b border-border/50 flex items-center gap-3 bg-white/40">
        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm">
          🤖
        </div>
        <div>
          <div className="font-display font-bold text-sm text-foreground">
            AskSpark Bot 🤖
          </div>
          <div className="text-xs text-green-600 font-medium">● Active</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-end gap-2 ${
              msg.isUser ? "justify-end" : "justify-start"
            }`}
          >
            {!msg.isUser && (
              <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-white text-xs flex-shrink-0">
                🤖
              </div>
            )}
            <div
              className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.isUser
                  ? "gradient-primary text-white rounded-br-sm"
                  : "bg-white/70 text-foreground border border-white/60 rounded-bl-sm"
              }`}
            >
              <BoldText text={msg.text} />
              <div
                className={`text-xs mt-1 ${
                  msg.isUser ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {msg.time}
              </div>
            </div>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-border/50 flex gap-2">
        <Input
          placeholder="Ask me anything about AskSpark..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
          className="rounded-full border-border/60 bg-white/60 text-sm"
          data-ocid="support.bot.input"
        />
        <Button
          size="icon"
          className="rounded-full gradient-primary text-white border-0 flex-shrink-0"
          onClick={sendMessage}
          disabled={!input.trim()}
          data-ocid="support.bot.submit_button"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function FAQTab() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((item, i) => (
        <div
          key={item.q}
          className="glass-card rounded-2xl border border-white/40 overflow-hidden"
          data-ocid={`support.faq.item.${i + 1}`}
        >
          <button
            type="button"
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            data-ocid="support.faq.toggle"
          >
            <span className="font-semibold text-foreground text-sm pr-4">
              {item.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 text-sm text-muted-foreground border-t border-border/40 pt-3">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function HelpFormTab() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !subject || !message.trim()) return;
    setSending(true);
    setTimeout(() => {
      const requests = JSON.parse(
        localStorage.getItem("support_requests") || "[]",
      );
      requests.push({ name, subject, message, timestamp: Date.now() });
      localStorage.setItem("support_requests", JSON.stringify(requests));
      setName("");
      setSubject("");
      setMessage("");
      setSending(false);
      toast.success("Your request has been sent! We'll get back to you soon.");
    }, 800);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl border border-white/40 p-6 warm-shadow space-y-5"
      data-ocid="support.help.panel"
    >
      <div className="space-y-1.5">
        <Label htmlFor="help-name">Your Name</Label>
        <Input
          id="help-name"
          placeholder="e.g. Rahul Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          data-ocid="support.help.input"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="help-subject">Subject</Label>
        <Select value={subject} onValueChange={setSubject} required>
          <SelectTrigger id="help-subject" data-ocid="support.help.select">
            <SelectValue placeholder="Pick a subject" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Mathematics",
              "Physics",
              "Chemistry",
              "Computer Science",
              "Biology",
              "Other",
            ].map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="help-message">Message</Label>
        <Textarea
          id="help-message"
          placeholder="Describe your issue or question..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          data-ocid="support.help.textarea"
        />
      </div>

      <Button
        type="submit"
        disabled={sending || !name.trim() || !subject || !message.trim()}
        className="w-full rounded-full gradient-primary text-white border-0 hover:opacity-90 font-semibold"
        data-ocid="support.help.submit_button"
      >
        {sending ? "Sending..." : "Send Request"}
      </Button>
    </form>
  );
}

export default function SupportPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="gradient-hero py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            onClick={() => navigate({ to: "/learning" })}
            data-ocid="support.link"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Learning Hub
          </button>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            🤖 <span className="text-gradient">24/7 Support</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Chat with our AI bot, browse FAQs, or send a help request.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Tabs defaultValue="chat" data-ocid="support.tab">
          <TabsList className="mb-8 rounded-xl">
            <TabsTrigger value="chat" data-ocid="support.chat.tab">
              🤖 AskSpark Bot
            </TabsTrigger>
            <TabsTrigger value="faq" data-ocid="support.faq.tab">
              ❓ FAQ
            </TabsTrigger>
            <TabsTrigger value="help" data-ocid="support.help.tab">
              📬 Ask for Help
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <BotChatTab />
          </TabsContent>
          <TabsContent value="faq">
            <FAQTab />
          </TabsContent>
          <TabsContent value="help">
            <HelpFormTab />
          </TabsContent>
        </Tabs>
      </div>

      <footer className="text-center py-8 text-xs text-muted-foreground border-t border-border/40">
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
