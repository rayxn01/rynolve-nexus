import { createFileRoute } from "@tanstack/react-router";
import { Bot, Workflow, MessageSquare, Mail, Database, Zap, Bell, FileText, ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";
import { motion } from "framer-motion";

export const Route = createFileRoute("/automations")({
  head: () => ({
    meta: [
      { title: "AI Automations — Rynolve" },
      { name: "description", content: "Custom AI agents, workflow automation and integrations powered by OpenAI, Gemini, Twilio and your stack." },
      { property: "og:title", content: "AI Automations — Rynolve" },
      { property: "og:description", content: "Stop doing repetitive work. We build AI agents and automations that run your operations 24/7." },
    ],
  }),
  component: Automations,
});

const automations = [
  { icon: Bot, title: "AI Customer Support Agents", desc: "24/7 support agents that resolve 80% of tickets and escalate the rest with full context." },
  { icon: MessageSquare, title: "Lead Qualification Bots", desc: "Capture, qualify and route leads from your site, WhatsApp, Instagram and email — instantly." },
  { icon: Mail, title: "Email & Outreach Automation", desc: "Personalised cold email and follow-up sequences powered by AI research and CRM data." },
  { icon: Workflow, title: "Internal Workflow Automation", desc: "Replace manual ops — invoicing, onboarding, approvals, reporting — with reliable workflows." },
  { icon: Database, title: "Data Sync & Enrichment", desc: "Keep your CRM, billing, support and analytics in lock-step with automatic enrichment." },
  { icon: FileText, title: "Document & Contract AI", desc: "Generate, review and extract data from contracts, proposals and reports automatically." },
  { icon: Bell, title: "Smart Notifications", desc: "Real-time alerts in Slack, email or SMS when KPIs move, deals stall or systems break." },
  { icon: Zap, title: "Custom Integrations", desc: "Twilio, OpenAI, Gemini, Stripe, HubSpot, Notion, Airtable — connect anything to anything." },
];

const benefits = [
  "Save 20–40 hours per week per team",
  "Cut operational costs by up to 60%",
  "Respond to leads in seconds, not hours",
  "Eliminate human error in repetitive workflows",
  "Scale operations without hiring",
  "Production-grade monitoring and logging",
];

const useCases = [
  { title: "Ecommerce", desc: "Order routing, support automation, abandoned cart recovery and review collection." },
  { title: "Agencies", desc: "Client onboarding, reporting, content production and proposal generation." },
  { title: "SaaS", desc: "User onboarding, churn signals, in-app AI assistants and billing automation." },
  { title: "Real Estate", desc: "Lead qualification, listing distribution, viewing scheduling and CRM sync." },
  { title: "Healthcare", desc: "Appointment booking, intake forms, follow-up reminders and HIPAA-aware workflows." },
  { title: "Professional Services", desc: "Document automation, intake screening and recurring client communication." },
];

function Automations() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">
              <Bot className="h-3.5 w-3.5" /> AI Automations
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Let AI do the <span className="gradient-text">repetitive work</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom AI agents and automations that run your business 24/7 — built on OpenAI, Gemini, Twilio and your existing stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/book-consultation" size="lg">Book a strategy call <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/services" variant="outline" size="lg">All services</GradientButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="What we automate" title={<>Automation <span className="gradient-text">that pays for itself</span></>} />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automations.map((a, i) => (
            <FadeIn key={a.title} delay={(i % 4) * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="glass rounded-2xl p-6 h-full hover:shadow-glow transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet/30 to-primary/30 flex items-center justify-center mb-4">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <SectionHeader centered={false} eyebrow="Benefits" title={<>Real outcomes, <span className="gradient-text">measured weekly</span></>} />
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 glass rounded-xl p-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="glass glow-border rounded-3xl p-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Tools we work with</p>
              <h3 className="mt-2 text-2xl font-bold">A stack built for serious automation</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {["OpenAI", "Gemini AI", "Twilio", "n8n", "Make", "Zapier", "LangChain", "Pinecone", "Supabase", "Postgres", "Slack", "HubSpot", "Stripe", "Airtable"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full glass text-sm">{t}</span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Typical project</p>
                <p className="mt-1 text-4xl font-bold gradient-text">2–6 weeks</p>
                <p className="mt-1 text-sm text-muted-foreground">From discovery to a live, monitored automation.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Use cases" title={<>Built for <span className="gradient-text">every industry</span></>} />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((u, i) => (
            <FadeIn key={u.title} delay={(i % 6) * 0.05}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to automate? <span className="gradient-text">Let's map it out.</span></h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">Free 30-minute audit — we'll identify the 3 highest-ROI automations for your business.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/book-consultation" size="lg">Book consultation <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/contact" variant="outline" size="lg">Contact us</GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
