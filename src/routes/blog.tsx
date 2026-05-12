import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Section, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Rynolve" },
      { name: "description", content: "Insights on AI automation, product engineering and growth from the Rynolve team." },
      { property: "og:title", content: "Blog — Rynolve" },
      { property: "og:description", content: "Sharp takes on AI, SaaS, and modern product engineering." },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "How AI Agents Are Replacing Entire SaaS Workflows", category: "AI", date: "May 8, 2026", read: "6 min", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=70&auto=format&fit=crop" },
  { title: "Shipping a Production SaaS in 9 Weeks: A Playbook", category: "Engineering", date: "Apr 28, 2026", read: "9 min", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=70&auto=format&fit=crop" },
  { title: "Why Headless Shopify Wins on Conversion", category: "Ecommerce", date: "Apr 14, 2026", read: "5 min", img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=70&auto=format&fit=crop" },
  { title: "Designing AI-First Interfaces Users Trust", category: "Design", date: "Apr 02, 2026", read: "7 min", img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=70&auto=format&fit=crop" },
  { title: "From MVP to Series A: The 6 Engineering Bets", category: "SaaS", date: "Mar 18, 2026", read: "8 min", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=70&auto=format&fit=crop" },
  { title: "The True Cost of n8n vs Custom Automation", category: "Automation", date: "Mar 04, 2026", read: "6 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=70&auto=format&fit=crop" },
];

function Blog() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Blog</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">Insights on <span className="gradient-text">AI & engineering</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Sharp takes from the team building the next generation of SaaS.</p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 6) * 0.05}>
              <motion.article whileHover={{ y: -6 }} className="group glass rounded-2xl overflow-hidden h-full hover:shadow-glow transition-all">
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img src={p.img} alt={p.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-primary">{p.category}</span>
                  <h3 className="mt-2 text-lg font-semibold leading-tight">{p.title}</h3>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold">Get monthly insights, <span className="gradient-text">no spam</span></h2>
            <form className="mt-8 max-w-md mx-auto flex glass rounded-full p-1" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" className="flex-1 bg-transparent text-sm px-4 py-2 outline-none placeholder:text-muted-foreground" />
              <button className="rounded-full bg-primary text-primary-foreground px-5 text-sm font-semibold">Subscribe</button>
            </form>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm text-primary">Or get in touch <ArrowRight className="h-3 w-3" /></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
