import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Rynolve" },
      { name: "description", content: "Selected work from Rynolve — AI platforms, mobile apps, SaaS products and ecommerce stores." },
      { property: "og:title", content: "Rynolve Portfolio" },
      { property: "og:description", content: "AI, web, mobile and SaaS projects delivered for global teams." },
    ],
  }),
  component: Portfolio,
});

const filters = ["All", "AI", "Web", "Mobile", "SaaS", "Ecommerce"] as const;

const projects = [
  { title: "NeuroDesk AI", cat: "AI", tag: "AI SaaS", color: "from-violet to-primary", metric: "+312% conversions", tech: ["Next.js", "OpenAI", "Postgres"] },
  { title: "Vault Banking", cat: "Mobile", tag: "Fintech App", color: "from-primary to-accent", metric: "1.2M users", tech: ["React Native", "AWS", "GraphQL"] },
  { title: "Polaris CRM", cat: "SaaS", tag: "Enterprise", color: "from-accent to-violet", metric: "47% time saved", tech: ["React", "Node.js", "MongoDB"] },
  { title: "Helix Health", cat: "Web", tag: "Healthtech", color: "from-violet to-accent", metric: "98% uptime", tech: ["Next.js", "Stripe"] },
  { title: "Northwind Shop", cat: "Ecommerce", tag: "Shopify Plus", color: "from-primary to-violet", metric: "5x revenue", tech: ["Shopify", "Hydrogen"] },
  { title: "Stratos Agents", cat: "AI", tag: "AI Automation", color: "from-accent to-primary", metric: "20k tasks/day", tech: ["Python", "LangChain"] },
  { title: "Quanta Logistics", cat: "SaaS", tag: "Operations", color: "from-violet to-primary", metric: "30% costs cut", tech: ["React", "Postgres"] },
  { title: "Nimbus Travel", cat: "Mobile", tag: "Consumer App", color: "from-primary to-accent", metric: "4.9★ rating", tech: ["Flutter", "Firebase"] },
  { title: "Apex Restaurant", cat: "Ecommerce", tag: "Multi-location", color: "from-accent to-violet", metric: "+220% online orders", tech: ["Next.js", "Square"] },
];

function Portfolio() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const items = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Portfolio</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Work we're <span className="gradient-text">proud of</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              250+ projects delivered. Here are a few that defined us.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-violet via-primary to-accent text-primary-foreground shadow-glow-sm"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <motion.div
                whileHover={{ y: -8, rotateY: 3, rotateX: -2 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60`} />
                <div className="absolute inset-0 grid-bg opacity-30" />

                {/* Mock UI */}
                <div className="absolute inset-6 top-6 bottom-32 rounded-xl glass overflow-hidden p-4">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-white/30 rounded" />
                    <div className="h-2 w-1/2 bg-white/20 rounded" />
                    <div className="h-16 mt-3 rounded bg-white/10" />
                    <div className="h-2 w-2/3 bg-white/20 rounded" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs text-white/70 uppercase tracking-wide">{p.tag}</span>
                  <h3 className="mt-1 text-2xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{p.metric}</p>
                </div>

                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.metric}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded-full glass">{t}</span>
                    ))}
                  </div>
                  <button className="mt-5 inline-flex items-center gap-1 text-sm text-primary self-start">
                    View case study <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Want to see your project here? <span className="gradient-text">Let's start.</span></h2>
            <div className="mt-8">
              <GradientButton to="/book-consultation" size="lg">Start a project <ArrowRight className="h-4 w-4" /></GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
