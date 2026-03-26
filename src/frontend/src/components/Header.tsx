import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#features", label: "Features", isAnchor: true },
  { href: "/#how-it-works", label: "How It Works", isAnchor: true },
  { href: "/#team", label: "Team", isAnchor: true },
  { href: "/learning", label: "Learning", isAnchor: false },
  { href: "/blog", label: "Blog", isAnchor: false },
  { href: "/help", label: "Help Center", isAnchor: false },
  { href: "/chat", label: "Community", isAnchor: false },
];

export default function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? "warm-shadow" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-foreground"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-primary">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold">
            <span className="text-gradient">Ask</span>
            <span className="text-foreground">Spark</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-foreground transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary/30 text-primary hover:bg-primary/5 font-medium"
            onClick={() => navigate({ to: "/onboarding" })}
            data-ocid="header.secondary_button"
          >
            I&apos;m a Student
          </Button>
          <Button
            size="sm"
            className="rounded-full gradient-primary text-white hover:opacity-90 font-medium px-5 shadow-primary border-0"
            onClick={() => navigate({ to: "/onboarding" })}
            data-ocid="header.primary_button"
          >
            I&apos;m a Teacher
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="header.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-white/30 px-4 py-4 flex flex-col gap-3 animate-fade-in">
          {NAV_LINKS.map((link) =>
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ),
          )}
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-primary/30 text-primary"
              onClick={() => {
                navigate({ to: "/onboarding" });
                setMobileOpen(false);
              }}
              data-ocid="header.secondary_button"
            >
              I&apos;m a Student
            </Button>
            <Button
              size="sm"
              className="rounded-full gradient-primary text-white border-0"
              onClick={() => {
                navigate({ to: "/onboarding" });
                setMobileOpen(false);
              }}
              data-ocid="header.primary_button"
            >
              I&apos;m a Teacher
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
