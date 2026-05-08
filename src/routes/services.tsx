import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bot, Sparkles, Code2, Smartphone, ShoppingBag, FileCode2, LayoutDashboard,
  Palette, Users, Search, Megaphone, Plug, BarChart3, Workflow, Cloud, ArrowRight,
} from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/services")({
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

const services = [
  { icon: Bot, title: "AI Automation", desc: "Eliminate repetitive work with intelligent workflows.", color: "from-violet to-primary" },
  { icon: Sparkles, title: "AI Agents", desc: "Custom autonomous agents trained on your business.", color: "from-primary to-accent" },
  { icon: Code2, title: "Website Development", desc: "Marketing sites and platforms that convert.", color: "from-accent to-violet" },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android with React Native and Flutter.", color: "from-violet to-accent" },
  { icon: ShoppingBag, title: "Shopify Development", desc: "Premium ecommerce stores that scale.", color: "from-primary to-violet" },
  { icon: FileCode2, title: "WordPress Development", desc: "Custom themes, blocks and headless WP.", color: "from-accent to-primary" },
  { icon: LayoutDashboard, title: "SaaS Platforms", desc: "End-to-end product engineering, MVP to enterprise.", color: "from-violet to-primary" },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces that feel premium and intuitive.", color: "from-primary to-accent" },
  { icon: Users, title: "CRM Systems", desc: "Custom CRMs and sales enablement tools.", color: "from-accent to-violet" },
  { icon: Search, title: "SEO Services", desc: "Technical SEO and content that ranks.", color: "from-violet to-accent" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance marketing and brand campaigns.", color: "from-primary to-violet" },
  { icon: Plug, title: "API Integrations", desc: "Connect any system, any service, any data.", color: "from-accent to-primary" },
  { icon: BarChart3, title: "Custom Dashboards", desc: "Real-time analytics tailored to your KPIs.", color: "from-violet to-primary" },
  { icon: Workflow, title: "Business Automation", desc: "Streamline operations end-to-end.", color: "from-primary to-accent" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Secure, scalable cloud on AWS, GCP, Azure.", color: "from-accent to-violet" },
];

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
              15 specialised services. One senior team. Zero handoffs.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={(i % 6) * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative glass rounded-2xl p-7 h-full hover:shadow-glow transition-all overflow-hidden"
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5`}>
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
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
