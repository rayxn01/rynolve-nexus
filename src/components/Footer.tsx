import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/automations", label: "AI Automations" },
      { to: "/services", label: "Web Development" },
      { to: "/services", label: "Mobile Apps" },
      { to: "/services", label: "SaaS Platforms" },
      { to: "/services", label: "UI/UX Design" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/case-studies", label: "Case Studies" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/technologies", label: "Technologies" },
      { to: "/pricing", label: "Pricing" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-40 radial-fade pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Rynolve builds intelligent digital experiences — AI automation, web,
              mobile, and SaaS for ambitious teams worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a href="tel:+447466712583" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4 text-primary" /> +44 7466 712583
              </a>
              <a href="mailto:hello@rynolve.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4 text-primary" /> hello@rynolve.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> London, United Kingdom
              </p>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">Get insights monthly.</p>
            <form className="flex glass rounded-full p-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-transparent text-sm px-3 py-1.5 outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-full bg-primary text-primary-foreground p-2 hover:shadow-glow-sm transition-shadow" aria-label="Subscribe">
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rynolve Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms</Link>
            <div className="flex items-center gap-2 ml-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full glass hover:shadow-glow-sm transition-shadow">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
