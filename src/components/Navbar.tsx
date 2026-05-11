import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/automations", label: "Automations" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  {
    label: "More",
    children: [
      { to: "/solutions", label: "Solutions" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/technologies", label: "Technologies" },
      { to: "/industries", label: "Industries" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all`}>
        <div
          className={`flex items-center justify-between rounded-2xl border border-border px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-elegant" : "bg-transparent border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              "to" in item ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <AnimatePresence>
                    {moreOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full pt-2 w-56"
                      >
                        <div className="glass rounded-xl p-2 shadow-elegant">
                          {item.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/book-consultation"
              className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-violet via-primary to-accent animate-gradient-shift hover:shadow-glow-sm transition-shadow"
            >
              Book a call
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {nav.flatMap((item) =>
                  "to" in item
                    ? [
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                        >
                          {item.label}
                        </Link>,
                      ]
                    : item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                        >
                          {c.label}
                        </Link>
                      ))
                )}
                <Link
                  to="/book-consultation"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-violet via-primary to-accent"
                >
                  Book a call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
