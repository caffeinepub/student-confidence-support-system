import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Globe,
  GraduationCap,
  Languages,
  Lightbulb,
  MessageCircleQuestion,
  Mic,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import { AppRole } from "../backend";
import Header from "../components/Header";
import { useUserProfile } from "../hooks/useQueries";

function HeroCard() {
  return (
    <div className="glass-card rounded-2xl p-5 warm-shadow-xl w-full max-w-sm mx-auto animate-float">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
          A
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">
            Arjun Sharma
          </div>
          <div className="text-xs text-muted-foreground">
            Computer Science · Year 1
          </div>
        </div>
        <span className="ml-auto text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
          🔥 Day 7
        </span>
      </div>
      <div className="bg-muted/60 rounded-xl p-3 mb-3">
        <div className="text-xs text-muted-foreground mb-1 font-medium">
          📚 Mathematics
        </div>
        <div className="text-sm text-foreground font-medium">
          Why does the limit of sin(x)/x as x→0 equal 1?
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
            <Brain className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground">
            AI matched 3 similar questions
          </span>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Confidence</div>
          <div className="text-sm font-bold text-primary">+12 pts</div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
        <span className="text-xs text-green-600 font-medium">
          Answered by Prof. Meena Rao · 2h ago
        </span>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: Shield,
    color: "bg-blue-100 text-blue-600",
    title: "100% Anonymous Questions",
    desc: "Ask anything without fear. Your identity stays hidden until you choose to reveal it.",
  },
  {
    icon: Brain,
    color: "bg-purple-100 text-purple-600",
    title: "AI Doubt Clustering",
    desc: "Our AI groups similar doubts so teachers answer once and many students benefit.",
  },
  {
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
    title: "Confidence Score System",
    desc: "Earn XP and track your growth. Watch your confidence score rise with every question.",
  },
  {
    icon: Mic,
    color: "bg-orange-100 text-orange-600",
    title: "Multimedia Answers",
    desc: "Teachers reply with voice, video, images, or text — whatever explains best.",
  },
  {
    icon: Users,
    color: "bg-pink-100 text-pink-600",
    title: "Smart Teacher Dashboard",
    desc: "Prioritized queues, response analytics, and easy multimedia tools for educators.",
  },
  {
    icon: Languages,
    color: "bg-teal-100 text-teal-600",
    title: "Multilingual Support",
    desc: "Submit and receive answers in English, Hindi, Telugu and more regional languages.",
  },
];

const STEPS = [
  {
    icon: Shield,
    title: "Sign In or Stay Anonymous",
    desc: "Login with Google or submit doubts anonymously — no pressure either way.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Submit Your Doubt",
    desc: "Type your question, add images, pick subject. Takes under 60 seconds.",
  },
  {
    icon: Brain,
    title: "AI Processes & Clusters",
    desc: "Our AI finds similar questions and prioritizes for teachers automatically.",
  },
  {
    icon: Mic,
    title: "Teacher Answers",
    desc: "Get rich multimedia responses — voice, video, images, or text from experts.",
  },
  {
    icon: Trophy,
    title: "Gain Confidence",
    desc: "Earn badges, XP, and watch your confidence score grow every time you engage.",
  },
];

const PROBLEMS = [
  "Fear of being judged in class",
  "Questions go unanswered in large classrooms",
  "No way to track learning progress",
  "Language barriers limit understanding",
];
const SOLUTIONS = [
  "Safe anonymous environment to ask freely",
  "Every question is seen and answered",
  "XP, confidence score & badge tracking",
  "Multilingual submission and responses",
];

const STATS = [
  { value: "10,000+", label: "Students Helped" },
  { value: "95%", label: "Questions Answered" },
  { value: "50+", label: "Expert Teachers" },
  { value: "4.9★", label: "Average Rating" },
];

const TEAM = [
  {
    initials: "RK",
    name: "Rohith Kumar",
    role: "Team Leader",
    color: "bg-blue-500",
  },
  { initials: "H", name: "Hemanth", role: "Developer", color: "bg-purple-500" },
  {
    initials: "PR",
    name: "P. Rohith",
    role: "Backend / Support",
    color: "bg-emerald-500",
  },
  {
    initials: "N",
    name: "Nehal",
    role: "Designer / Research",
    color: "bg-amber-500",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is AskSpark?",
    a: "AskSpark is a free student doubt platform that lets school and college students ask questions anonymously and receive answers from expert teachers. It's designed to build student confidence and remove the fear of asking doubts in class.",
  },
  {
    q: "Is AskSpark free to use?",
    a: "Yes, AskSpark is completely free for students. You can submit unlimited doubts, access the student dashboard, join community study rooms, and take weekly tests — all at no cost.",
  },
  {
    q: "How does the anonymous doubt feature work on AskSpark?",
    a: "AskSpark lets you submit doubts with an anonymous toggle. When enabled, your name is hidden from teachers and other students. Only you can see your own identity. This makes AskSpark the safest anonymous doubt app for students.",
  },
  {
    q: "Which students can use AskSpark?",
    a: "AskSpark supports both school students (Class 6 to Class 12) and college students from branches like CSE, EEE, ECE, Mechanical, IT, Medical, CSD, ITI, and Polytechnic. AskSpark is built for all Indian students.",
  },
  {
    q: "How can I ask doubts online using AskSpark?",
    a: "To ask doubts online on AskSpark: (1) Visit the AskSpark website, (2) Click 'Submit a Doubt', (3) Type your question or upload a photo of your doubt, (4) Select your subject and branch/class, (5) Toggle anonymous if preferred, and (6) Submit. Your teacher will respond with text, voice, or video.",
  },
  {
    q: "Does AskSpark support image uploads for doubts?",
    a: "Yes! AskSpark has a built-in camera feature that lets you take a photo of your notebook or whiteboard directly from your phone and attach it to your doubt. You can also upload existing images from your gallery.",
  },
  {
    q: "How is AskSpark different from other student learning systems?",
    a: "AskSpark combines anonymous doubt submission, AI-powered doubt clustering, multimedia teacher answers (voice + video + images), a confidence score system with badges, weekly branch-based tests with fear zone analysis, and real-time community chat — all in one platform. No other student learning system offers this combination.",
  },
  {
    q: "How do I sign in to AskSpark?",
    a: "AskSpark supports Google Sign-In for quick, secure access. You can also submit doubts anonymously without signing in at all.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const { data: profile } = useUserProfile();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-1.5 bg-white/70 text-primary border border-primary/20 text-sm font-medium px-4 py-1.5 rounded-full warm-shadow">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Education Platform
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-foreground">
              AskSpark – Ask Any Question,{" "}
              <span className="text-gradient">Build Real Confidence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              AskSpark is the student doubt platform where you can ask doubts
              online anonymously and get real answers from expert teachers. The
              anonymous doubt app built for school and college students who want
              to learn fearlessly.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Button
                size="lg"
                className="rounded-full gradient-primary text-white font-semibold px-8 shadow-primary border-0 hover:opacity-90 transition-opacity"
                onClick={() => navigate({ to: "/submit" })}
                data-ocid="hero.primary_button"
              >
                Submit a Doubt <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8"
                onClick={() => navigate({ to: "/onboarding" })}
                data-ocid="hero.secondary_button"
              >
                Join as Teacher
              </Button>
            </div>
            {profile && (
              <div
                className="mt-2 flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20"
                data-ocid="hero.panel"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {profile.role === AppRole.teacher ? "T" : "S"}
                </div>
                <div className="flex-1 text-sm">
                  <span className="font-semibold text-foreground">
                    Welcome back!
                  </span>
                  <span className="text-muted-foreground ml-1">
                    You're signed in as{" "}
                    {profile.role === AppRole.teacher
                      ? "a teacher"
                      : "a student"}
                    .
                  </span>
                </div>
                <Button
                  size="sm"
                  className="rounded-full gradient-primary text-white border-0 font-semibold"
                  onClick={() =>
                    navigate({
                      to:
                        profile.role === AppRole.teacher
                          ? "/dashboard/teacher"
                          : "/dashboard/student",
                    })
                  }
                  data-ocid="hero.primary_button"
                >
                  Go to Dashboard <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Button>
              </div>
            )}
            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
              {["Free forever", "No credit card", "100% anonymous"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <HeroCard />
                <div
                  className="absolute -top-6 -left-10 glass-card rounded-xl px-3 py-2 animate-float warm-shadow"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-semibold text-foreground">
                      +150 XP earned!
                    </span>
                  </div>
                </div>
                <div
                  className="absolute -bottom-6 -right-10 glass-card rounded-xl px-3 py-2 animate-float warm-shadow"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">
                      AI matched instantly
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AskSpark */}
      <section id="what-is-askspark" className="py-20 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            About the Platform
          </Badge>
          <h2 className="font-display text-4xl font-bold text-foreground mb-6">
            What is <span className="text-gradient">AskSpark</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            <strong>AskSpark</strong> is a free student doubt platform designed
            to help school and college students overcome the fear of asking
            questions. Using AskSpark, students can{" "}
            <strong>ask doubts online</strong> anonymously — no name, no
            embarrassment, just answers.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            As the most accessible <strong>anonymous doubt app</strong> for
            Indian students, AskSpark connects you with real teachers who
            respond with text, voice, video, and images. Whether you're in Class
            6 or a final-year engineering student, AskSpark is built for you.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10 text-left">
            {[
              {
                icon: Shield,
                title: "Ask Anonymously",
                desc: "Submit any doubt without revealing your name. AskSpark keeps your identity safe.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: GraduationCap,
                title: "For All Students",
                desc: "AskSpark supports Class 6–12 school students and college branches like CSE, EEE, ECE and more.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Zap,
                title: "Instant Answers",
                desc: "AskSpark's AI matches your doubt instantly with similar questions and notifies teachers.",
                color: "bg-amber-100 text-amber-600",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="glass-card warm-shadow border-white/40"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="gradient-primary py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.value}>
              <div className="text-4xl font-display font-bold text-white mb-1">
                {s.value}
              </div>
              <div className="text-white/70 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="bg-muted text-muted-foreground border-border mb-4">
              The Problem & Our Solution
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Why students don't ask — and how we fix it
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="warm-shadow border-red-100 bg-red-50/50">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    The Problem
                  </h3>
                </div>
                {PROBLEMS.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{p}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="warm-shadow border-green-100 bg-green-50/50">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Our Solution
                  </h3>
                </div>
                {SOLUTIONS.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{s}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Platform Features
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Everything AskSpark Offers —{" "}
              <span className="text-gradient">
                The Complete Student Doubt Platform
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              AskSpark is more than an anonymous doubt app. It's a complete
              ecosystem for student confidence, teacher efficiency, and
              AI-powered learning.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <Card
                key={f.title}
                className="glass-card warm-shadow hover:warm-shadow-lg transition-all duration-300 hover:-translate-y-1 border-white/40 cursor-default group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              Simple Process
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground">
              From doubt to <span className="text-gradient">confidence</span> in
              5 steps
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid md:grid-cols-5 gap-8">
              {STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-14 h-14 rounded-2xl glass-card warm-shadow flex items-center justify-center border-white/40">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full gradient-primary text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center warm-shadow-xl border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 gradient-hero opacity-40" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-primary">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Ready to ask your first question?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Join thousands of students who've overcome the fear of asking.
                Your first question is always free.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full gradient-primary text-white font-semibold px-10 shadow-primary border-0 hover:opacity-90"
                  onClick={() => navigate({ to: "/submit" })}
                  data-ocid="cta.primary_button"
                >
                  Ask Anonymously <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/30 text-primary hover:bg-primary/5 font-semibold px-10"
                  onClick={() => navigate({ to: "/dashboard/student" })}
                  data-ocid="cta.secondary_button"
                >
                  View Demo Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              FAQ
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions about{" "}
              <span className="text-gradient">AskSpark</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about the AskSpark student doubt
              platform.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className="glass-card border-white/40 rounded-xl px-4 warm-shadow"
              >
                <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-muted text-muted-foreground border-border mb-4">
              Team Spark
            </Badge>
            <h2 className="font-display text-4xl font-bold text-foreground">
              Built with ❤️ by students, for students
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              We are{" "}
              <span className="font-semibold text-primary">Team Spark</span> — a
              group of passionate students on a mission to make education
              fearless.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <Card
                key={member.name}
                className="glass-card warm-shadow border-white/40 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}
                  >
                    {member.initials}
                  </div>
                  <div className="font-display font-bold text-foreground">
                    {member.name}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {member.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                AskSpark
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The AI-powered confidence-building platform for students. Ask
              freely, learn boldly.
            </p>
          </div>
          <div>
            <div className="font-display font-bold text-white/80 mb-4 text-sm uppercase tracking-wider">
              Platform
            </div>
            <div className="space-y-2">
              {["Features", "How It Works", "For Students", "For Teachers"].map(
                (l) => (
                  <div
                    key={l}
                    className="text-white/50 text-sm hover:text-white/80 cursor-pointer transition-colors"
                  >
                    {l}
                  </div>
                ),
              )}
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-white/80 mb-4 text-sm uppercase tracking-wider">
              Contact
            </div>
            <div className="space-y-2 text-white/50 text-sm">
              <div>📧 hello@askspark.app</div>
              <div>🌐 askspark.caffeine.ai</div>
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> English · हिंदी · తెలుగు
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
          © {year} AskSpark · Team Spark. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-white/70 transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
