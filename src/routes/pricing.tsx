import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Rynolve" },
      { name: "description", content: "Transparent pricing for startups, scale-ups and enterprises. Fixed-scope and retainer options." },
      { property: "og:title", content: "Rynolve Pricing" },
      { property: "og:description", content: "Premium engineering at predictable prices." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Startup",
    monthly: 5500,
    yearly: 4675,
    desc: "Perfect for MVPs and early-stage products.",
    features: ["1 senior engineer", "1 designer (part-time)", "Up to 80 hrs/month", "Weekly demos", "Slack & Notion access", "30-day post-launch support"],
    highlight: false,
  },
  {
    name: "Business",
    monthly: 15000,
    yearly: 12750,
    desc: "Most popular for growing companies and SaaS teams.",
    features: ["Dedicated team of 3", "Senior engineers + designer + PM", "Up to 240 hrs/month", "AI/automation included", "Daily standups & weekly demos", "90-day post-launch support", "Priority response"],
    highlight: true,
  },
  {
    name: "Enterprise",
    monthly: 35000,
    yearly: 29750,
    desc: "For large-scale platforms and digital transformations.",
    features: ["Dedicated team of 6+", "Architects, AI engineers, QA", "Unlimited hours", "24/7 priority support", "SLA & security audits", "Dedicated account director", "Custom contracts"],
    highlight: false,
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Pricing</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              No surprises. No hourly games. Pick a plan, ship faster.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 glass rounded-full p-1.5">
              <button onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? "bg-gradient-to-r from-violet via-primary to-accent text-primary-foreground" : "text-muted-foreground"}`}>
                Monthly
              </button>
              <button onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${yearly ? "bg-gradient-to-r from-violet via-primary to-accent text-primary-foreground" : "text-muted-foreground"}`}>
                Yearly <span className="text-xs opacity-80">−15%</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative glass rounded-3xl p-8 h-full ${t.highlight ? "glow-border shadow-glow" : ""}`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet via-primary to-accent text-xs font-semibold text-primary-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold gradient-text">${(yearly ? t.yearly : t.monthly).toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
                {yearly && <p className="mt-1 text-xs text-accent">billed annually</p>}

                <GradientButton to="/book-consultation" variant={t.highlight ? "primary" : "outline"} className="mt-6 w-full">
                  Get started <ArrowRight className="h-4 w-4" />
                </GradientButton>

                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-12 glass rounded-3xl p-8 text-center">
            <h3 className="text-xl font-semibold">Need something custom?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Multi-team engagements, white-label builds, government contracts — we've done it all.</p>
            <div className="mt-5">
              <GradientButton to="/contact" variant="outline">Talk to sales</GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
