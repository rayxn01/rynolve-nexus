import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Heart, Zap, Globe } from "lucide-react";
import { Section, FadeIn, GlowBackground, SectionHeader } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Rynolve" },
      { name: "description", content: "Join Rynolve. Build AI-powered products with a senior, remote-first team." },
      { property: "og:title", content: "Careers — Rynolve" },
      { property: "og:description", content: "Senior, remote-first engineering and design roles." },
    ],
  }),
  component: Careers,
});

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote (UK/EU)", type: "Full-time" },
  { title: "AI / ML Engineer", team: "AI", location: "Remote (Global)", type: "Full-time" },
  { title: "Senior Product Designer", team: "Design", location: "Remote (UK/EU)", type: "Full-time" },
  { title: "Mobile Engineer (React Native)", team: "Engineering", location: "Remote (Global)", type: "Full-time" },
  { title: "DevOps / Platform Engineer", team: "Infrastructure", location: "Remote (UK/EU)", type: "Full-time" },
  { title: "Technical Project Manager", team: "Delivery", location: "Remote (UK/EU)", type: "Full-time" },
];

const perks = [
  { icon: Globe, title: "Remote-first", desc: "Work from anywhere — we've been distributed since day one." },
  { icon: Heart, title: "Health & wellness", desc: "Premium private healthcare and wellness allowance." },
  { icon: Zap, title: "Learning budget", desc: "£2,000 annual budget for books, courses and conferences." },
  { icon: Briefcase, title: "Equity & bonus", desc: "Meaningful equity and performance bonuses for everyone." },
];

function Careers() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Careers</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">Build the <span className="gradient-text">future of work</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">A senior, remote-first team shipping AI-powered products people love.</p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden glass max-w-6xl mx-auto">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=70&auto=format&fit=crop" alt="Rynolve team collaborating" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Perks" title={<>Why you'll <span className="gradient-text">love it</span></>} />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 h-full">
                <p.icon className="h-7 w-7 text-primary mb-4" />
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Open roles" title={<>Join the <span className="gradient-text">team</span></>} />
        <div className="mt-12 max-w-4xl mx-auto space-y-3">
          {roles.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.04}>
              <Link to="/contact" className="block">
                <motion.div whileHover={{ x: 4 }} className="glass rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:shadow-glow transition-all">
                  <div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" />{r.team}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{r.location}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">{r.type}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-primary">Apply <ArrowRight className="h-3 w-3" /></span>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold">Don't see your role? <span className="gradient-text">We still want to hear from you.</span></h2>
            <div className="mt-8"><GradientButton to="/contact" size="lg">Send us your CV <ArrowRight className="h-4 w-4" /></GradientButton></div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
