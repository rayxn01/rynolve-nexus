import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";
import { Counter } from "@/components/Counter";
import { Target, Eye, Heart, Lightbulb, Rocket, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rynolve — Engineering the future of digital" },
      { name: "description", content: "Rynolve is a premium engineering studio building AI, web, mobile and SaaS products for ambitious teams worldwide." },
      { property: "og:title", content: "About Rynolve" },
      { property: "og:description", content: "Our story, mission and the team building intelligent digital experiences." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Outcome-obsessed", desc: "Every line of code maps to a measurable business result." },
  { icon: Heart, title: "Craft over speed", desc: "We move fast — but never at the expense of quality." },
  { icon: Lightbulb, title: "Curious always", desc: "We adopt what works, ignore hype, and ship the future." },
  { icon: Rocket, title: "Partner, not vendor", desc: "Your success is our success — long after launch day." },
];

const timeline = [
  { year: "2017", title: "Founded in London", desc: "Started as a two-person studio for ambitious startups." },
  { year: "2019", title: "First enterprise client", desc: "Built a multi-region SaaS platform serving 100k users." },
  { year: "2021", title: "AI division launched", desc: "Pivoted into AI-first engineering, ahead of the curve." },
  { year: "2023", title: "32 countries served", desc: "Crossed 200 projects delivered across five continents." },
  { year: "2026", title: "The next chapter", desc: "Pioneering autonomous agents and AI-native products." },
];

function About() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">About Rynolve</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Building the <span className="gradient-text">intelligent</span> internet
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a global team of senior engineers, designers and AI specialists obsessed with one thing: shipping software that genuinely changes how businesses operate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <SectionHeader centered={false} eyebrow="Our Story" title={<>From a small studio to a <span className="gradient-text">global force</span></>} />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Rynolve started in 2017 with a simple belief: digital products should feel as premium as the brands behind them. Eight years later, that belief still drives every project we ship.</p>
              <p>Today we're a distributed team across London, Berlin, Lagos and Singapore — building AI agents, SaaS platforms and digital products for startups, scale-ups and the Fortune 500.</p>
              <p>We're not the biggest agency. We don't want to be. We're the team you call when ordinary won't cut it.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-square rounded-3xl glass glow-border overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet/30 via-transparent to-accent/30" />
              <div className="absolute inset-12 rounded-2xl bg-gradient-to-br from-violet via-primary to-accent opacity-30 blur-2xl animate-blob" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-7xl font-display font-bold gradient-text">8+ yrs</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Vision/Mission */}
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, label: "Vision", title: "A world where every business runs on intelligent software.", desc: "We see a near future where AI doesn't replace people — it amplifies them. Our work is the bridge." },
            { icon: Target, label: "Mission", title: "Engineer premium digital experiences that move the needle.", desc: "We exist to build software that's beautiful to use, profitable to run, and impossible to forget." },
          ].map((b) => (
            <FadeIn key={b.label}>
              <div className="glass glow-border rounded-3xl p-10 h-full">
                <b.icon className="h-10 w-10 text-primary mb-6" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{b.label}</p>
                <h3 className="mt-2 text-2xl font-bold">{b.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader eyebrow="Core Values" title={<>What we <span className="gradient-text">stand for</span></>} />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.06}>
              <motion.div whileHover={{ y: -5 }} className="glass rounded-2xl p-6 h-full">
                <v.icon className="h-7 w-7 text-accent mb-4" />
                <h4 className="font-semibold">{v.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader eyebrow="Growth" title={<>Our <span className="gradient-text">journey</span></>} />
        <div className="mt-16 max-w-3xl mx-auto relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-primary to-accent" />
          {timeline.map((t, i) => (
            <FadeIn key={t.year} delay={i * 0.05}>
              <div className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 mb-12 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-sm" />
                <div className={`${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                  <p className="text-3xl font-display font-bold gradient-text">{t.year}</p>
                  <h4 className="mt-1 font-semibold text-lg">{t.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
                <div />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: 250, s: "+", l: "Projects" },
            { n: 32, s: "+", l: "Countries" },
            { n: 98, s: "%", l: "Retention" },
            { n: 45, s: "+", l: "Specialists" },
          ].map((m, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="text-center glass rounded-2xl p-8">
                <p className="text-5xl font-bold gradient-text"><Counter to={m.n} suffix={m.s} /></p>
                <p className="mt-2 text-sm text-muted-foreground">{m.l}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Let's build something <span className="gradient-text">remarkable</span> together</h2>
            <div className="mt-8">
              <GradientButton to="/contact" size="lg">
                Get in touch <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
