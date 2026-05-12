import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import { Section, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Rynolve" },
      { name: "description", content: "Real outcomes from real clients — AI platforms, fintech apps and SaaS products built by Rynolve." },
      { property: "og:title", content: "Case Studies — Rynolve" },
      { property: "og:description", content: "Measurable wins from the products we ship." },
    ],
  }),
  component: CaseStudies,
});

const studies = [
  { title: "NeuroDesk AI", category: "AI SaaS", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=70&auto=format&fit=crop", metric: "+312%", metricLabel: "conversions", summary: "Built an AI workspace platform that ships content 8x faster for B2B teams.", clients: "12k", time: "9 weeks" },
  { title: "Vault Banking", category: "Fintech App", img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&q=70&auto=format&fit=crop", metric: "1.2M", metricLabel: "users", summary: "A neobank mobile app launched across iOS and Android in 14 weeks.", clients: "1.2M", time: "14 weeks" },
  { title: "Polaris CRM", category: "Enterprise SaaS", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=70&auto=format&fit=crop", metric: "47%", metricLabel: "time saved", summary: "Custom CRM and workflow engine for a 400-person sales team.", clients: "400+", time: "6 months" },
  { title: "Helix Health", category: "Healthcare", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=70&auto=format&fit=crop", metric: "85%", metricLabel: "auto-triage", summary: "AI triage and patient portal across 32 clinics.", clients: "120k", time: "12 weeks" },
  { title: "Stratos Commerce", category: "Headless Shopify", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=70&auto=format&fit=crop", metric: "+184%", metricLabel: "AOV", summary: "Headless storefront and AI merchandising for a DTC brand.", clients: "300k", time: "10 weeks" },
  { title: "Quanta Logistics", category: "Operations", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=70&auto=format&fit=crop", metric: "60%", metricLabel: "ops cost saved", summary: "Real-time fleet dashboard and AI route optimisation.", clients: "1,200 vehicles", time: "16 weeks" },
];

function CaseStudies() {
  return (
    <>
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Case Studies</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">Real outcomes, <span className="gradient-text">real numbers</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">A look inside the products we've shipped and the impact they delivered.</p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          {studies.map((s, i) => (
            <FadeIn key={s.title} delay={(i % 4) * 0.05}>
              <Link to="/contact" className="block">
                <motion.article whileHover={{ y: -6 }} className="group glass rounded-2xl overflow-hidden hover:shadow-glow transition-all h-full">
                  <div className="aspect-[16/9] overflow-hidden bg-black">
                    <img src={s.img} alt={s.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-7">
                    <span className="text-xs uppercase tracking-widest text-primary">{s.category}</span>
                    <h3 className="mt-2 text-2xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div><p className="text-2xl font-bold gradient-text">{s.metric}</p><p className="text-xs text-muted-foreground">{s.metricLabel}</p></div>
                      <div><p className="text-2xl font-bold gradient-text">{s.clients}</p><p className="text-xs text-muted-foreground">users</p></div>
                      <div><p className="text-2xl font-bold gradient-text">{s.time}</p><p className="text-xs text-muted-foreground">to ship</p></div>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">Read case study <ArrowRight className="h-3 w-3" /></div>
                  </div>
                </motion.article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold">Let's build <span className="gradient-text">your case study next</span></h2>
            <div className="mt-8"><GradientButton to="/book-consultation" size="lg">Start your project <ArrowRight className="h-4 w-4" /></GradientButton></div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
