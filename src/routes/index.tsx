import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, Bot, Code2, Smartphone, Palette, Cloud, Zap, Shield,
  ArrowRight, Star, Check, TrendingUp, Globe, Users, Award, Rocket,
} from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";
import { Counter } from "@/components/Counter";
import { HeroRobot } from "@/components/HeroRobot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rynolve — Intelligence Made Simple" },
      { name: "description", content: "We build intelligent digital experiences. AI automation, web, mobile, and SaaS — engineered to a premium standard." },
      { property: "og:title", content: "Rynolve — We Build Intelligent Digital Experiences" },
      { property: "og:description", content: "Premium AI automation, web, mobile and SaaS development." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Bot, title: "AI Automation", desc: "Custom AI agents and workflows that eliminate repetitive work.", slug: "ai-automation" },
  { icon: Code2, title: "Web Development", desc: "Performant, beautiful, SEO-optimised sites and platforms.", slug: "website-development" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feel iOS and Android apps with React Native & Flutter.", slug: "mobile-apps" },
  { icon: Cloud, title: "SaaS Platforms", desc: "End-to-end product engineering, from MVP to enterprise scale.", slug: "saas-platforms" },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces that feel premium, intuitive and on-brand.", slug: "ui-ux-design" },
  { icon: Zap, title: "Business Automation", desc: "Connect your stack with custom APIs, dashboards and CRMs.", slug: "business-automation" },
];

const why = [
  { icon: Shield, title: "Enterprise-grade", desc: "Production code, security baked in, audited architectures." },
  { icon: Rocket, title: "Speed to ship", desc: "MVPs in weeks, not quarters — without sacrificing quality." },
  { icon: TrendingUp, title: "Outcome-focused", desc: "We design for measurable business impact, not pretty demos." },
  { icon: Users, title: "True partnership", desc: "Senior engineers embedded with your team end-to-end." },
];

const process = [
  { n: "01", title: "Discover", desc: "Deep-dive workshops to understand your goals and constraints." },
  { n: "02", title: "Design", desc: "Strategy, architecture and high-fidelity prototypes." },
  { n: "03", title: "Build", desc: "Iterative engineering with weekly demos and full transparency." },
  { n: "04", title: "Launch & scale", desc: "Optimisation, growth, and ongoing AI-powered improvements." },
];

const tech = ["React", "Next.js", "TypeScript", "Node.js", "Python", "OpenAI", "TensorFlow", "AWS", "GCP", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Flutter", "Shopify"];

const projects = [
  { title: "NeuroDesk AI", tag: "AI SaaS", color: "from-violet to-primary", metric: "+312% conversions" },
  { title: "Vault Banking", tag: "Fintech App", color: "from-primary to-accent", metric: "1.2M users" },
  { title: "Polaris CRM", tag: "Enterprise", color: "from-accent to-violet", metric: "47% time saved" },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "CTO, Lumina Labs", quote: "Rynolve delivered our AI platform in 9 weeks. Polished, fast, and exactly what we briefed. Best agency we've worked with." },
  { name: "Daniel Okafor", role: "Founder, Vaultway", quote: "They genuinely care about outcomes. Our app launch was flawless and conversion is up 3x." },
  { name: "Aiko Tanaka", role: "VP Product, Helix", quote: "Senior engineers from day one. The level of craftsmanship is rare — it shows in every screen." },
];

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements kick off within 1–2 weeks of the discovery call." },
  { q: "Do you work with startups or only enterprise?", a: "Both. We have packages tuned for early-stage MVPs through to enterprise transformations." },
  { q: "Can you integrate AI into our existing product?", a: "Yes — that's our specialty. We embed AI agents, automation and intelligent UX into existing platforms." },
  { q: "What does pricing look like?", a: "Fixed-scope projects start around $10k. SaaS engagements and AI platforms are custom-quoted." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Intelligence Made Simple
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
              We Build <span className="gradient-text animate-gradient-shift">Intelligent</span> Digital Experiences
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Rynolve is a premium engineering studio crafting AI automation, web,
              mobile and SaaS products for ambitious teams worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GradientButton to="/book-consultation" size="lg">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/portfolio" variant="outline" size="lg">
                View Portfolio
              </GradientButton>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background"
                       style={{ background: `oklch(${0.6 + i*0.05} 0.2 ${250 + i*15})` }} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 fill-primary text-primary" />)}
                </div>
                <p>Trusted by 200+ companies</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <HeroRobot />
          </FadeIn>
        </div>
      </section>

      {/* METRICS */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { n: 250, s: "+", l: "Projects Delivered" },
            { n: 98, s: "%", l: "Client Satisfaction" },
            { n: 32, s: "+", l: "Countries Served" },
            { n: 8, s: "+", l: "Years Experience" },
            { n: 1200, s: "+", l: "AI Automations Built" },
          ].map((m, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="text-center glass rounded-2xl p-6 hover:shadow-glow-sm transition-shadow">
                <p className="text-4xl font-bold gradient-text">
                  <Counter to={m.n} suffix={m.s} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{m.l}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TRUSTED BY */}
      <section className="py-12 border-y border-border overflow-hidden">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by forward-thinking teams
        </p>
        <div className="relative">
          <div className="flex animate-marquee gap-16 w-max">
            {[...Array(2)].flatMap((_, j) =>
              ["Lumina", "Vaultway", "Helix", "Polaris", "Northwind", "Stratos", "Quanta", "Nimbus", "Apex"].map((name, i) => (
                <div key={`${j}-${i}`} className="text-2xl font-display font-semibold text-muted-foreground/50 whitespace-nowrap">
                  {name}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="Our Expertise"
          title={<>What we do, <span className="gradient-text">exceptionally well</span></>}
          description="Full-stack capabilities under one roof — strategy, design, engineering and AI."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.05}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative glass rounded-2xl p-7 h-full hover:shadow-glow transition-all overflow-hidden"
                >
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(135deg, oklch(0.62 0.22 290 / 0.4), transparent 70%)" }} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet/30 to-primary/30 flex items-center justify-center mb-5 group-hover:shadow-glow-sm transition-shadow">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <div className="mt-5 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">
              Why Rynolve
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Premium engineering, <span className="gradient-text">measurable impact</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We don't ship demos — we ship products that customers love and businesses
              measure. Every engagement is led by senior engineers and designers.
            </p>
            <div className="mt-8 space-y-3">
              {["No junior bait-and-switch", "Weekly demos & full transparency", "Production-ready from day one", "Post-launch optimisation included"].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {why.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl p-6 h-full hover:shadow-glow-sm transition-shadow"
                >
                  <w.icon className="h-7 w-7 text-accent mb-4" />
                  <h4 className="font-semibold">{w.title}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground">{w.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeader
          eyebrow="Our Process"
          title={<>From idea to <span className="gradient-text">launch</span> in weeks</>}
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {process.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.1}>
              <div className="relative glass rounded-2xl p-6">
                <div className="text-5xl font-display font-bold gradient-text mb-3">{p.n}</div>
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TECH ORBIT */}
      <Section>
        <SectionHeader
          eyebrow="Technologies"
          title={<>The modern stack, <span className="gradient-text">mastered</span></>}
        />
        <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tech.map((t, i) => (
            <FadeIn key={t} delay={i * 0.03}>
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                className="px-5 py-2.5 glass rounded-full text-sm font-medium hover:shadow-glow-sm hover:text-primary transition-all"
              >
                {t}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section>
        <SectionHeader
          eyebrow="Featured Work"
          title={<>Built to <span className="gradient-text">impress</span></>}
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <Link to="/portfolio" className="block">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs text-white/70 uppercase tracking-wide">{p.tag}</span>
                    <h3 className="mt-2 text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/80">{p.metric}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      View case study <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Words from <span className="gradient-text">our clients</span></>}
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="glass rounded-2xl p-7 h-full glow-border relative">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_,i)=> <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-primary" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader eyebrow="FAQ" title={<>Common <span className="gradient-text">questions</span></>} />
        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <details className="group glass rounded-2xl p-5 cursor-pointer">
                <summary className="flex items-center justify-between font-medium list-none">
                  {f.q}
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden glass glow-border p-12 sm:p-16 text-center">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet/40 blur-3xl animate-blob" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/40 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
            </div>
            <div className="relative">
              <Award className="h-12 w-12 mx-auto text-primary mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                Ready to build something <span className="gradient-text">extraordinary?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Book a free 30-minute strategy call. We'll show you exactly how AI and modern engineering can transform your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <GradientButton to="/book-consultation" size="lg">
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </GradientButton>
                <GradientButton to="/contact" variant="outline" size="lg">
                  <Globe className="h-4 w-4" /> Get in touch
                </GradientButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
