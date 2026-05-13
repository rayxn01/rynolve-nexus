import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Rynolve" },
      { name: "description", content: "AI automation, web, mobile, SaaS, design, cloud and growth — full-service engineering for ambitious teams." },
      { property: "og:title", content: "Rynolve Services" },
      { property: "og:description", content: "Premium engineering services across AI, web, mobile and SaaS." },
    ],
  }),
  component: Services,
});

const features = [
  "Senior engineers from day one",
  "Weekly demos and full transparency",
  "Production-ready code, always",
  "Post-launch optimisation included",
  "Security and accessibility baked in",
  "Long-term partnership, not project hand-off",
];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "OpenAI", "AWS", "PostgreSQL", "Docker"];

function Services() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Services</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Everything you need to <span className="gradient-text">build, launch and scale</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {services.length} specialised services. One senior team. Zero handoffs.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.slug} delay={(i % 6) * 0.05}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative glass rounded-2xl p-7 h-full hover:shadow-glow transition-all overflow-hidden"
                  >
                    <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                      <div className="mt-5 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Why */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <SectionHeader centered={false} eyebrow="What's included" title={<>Every project, <span className="gradient-text">premium by default</span></>} />
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 glass rounded-xl p-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center shrink-0">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="glass glow-border rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Tech stack</p>
              <h3 className="mt-2 text-2xl font-bold">Modern, proven, scalable</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full glass text-sm">{t}</span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Pricing starts at</p>
                <p className="mt-1 text-4xl font-bold gradient-text">£8,000</p>
                <p className="mt-1 text-sm text-muted-foreground">Custom-quoted by scope and outcome.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Not sure which service fits? <span className="gradient-text">Let's chat.</span></h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/book-consultation" size="lg">Book Consultation <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/pricing" variant="outline" size="lg">View pricing</GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
