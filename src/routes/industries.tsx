import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Banknote, ShoppingBag, Truck, GraduationCap, Cloud, Building2, Plane } from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Rynolve" },
      { name: "description", content: "Vertical expertise across healthcare, fintech, ecommerce, logistics, education and SaaS." },
      { property: "og:title", content: "Industries — Rynolve" },
      { property: "og:description", content: "Specialised teams for every sector." },
    ],
  }),
  component: Industries,
});

const industries = [
  { icon: Heart, title: "Healthcare", desc: "Patient apps, telehealth and AI triage with HIPAA-aware architectures.", stats: "40+ projects" },
  { icon: Banknote, title: "Fintech", desc: "Banking, payments and KYC with bank-grade security.", stats: "£2B+ processed" },
  { icon: ShoppingBag, title: "Ecommerce & Retail", desc: "Shopify Plus, headless storefronts and AI merchandising.", stats: "+312% avg lift" },
  { icon: Cloud, title: "SaaS & Enterprise", desc: "Multi-tenant SaaS platforms from MVP to IPO scale.", stats: "85+ products" },
  { icon: Truck, title: "Logistics", desc: "Fleet, route optimisation and shipment tracking dashboards.", stats: "Real-time" },
  { icon: GraduationCap, title: "Education", desc: "LMS, AI tutors and lifecycle automation for institutions.", stats: "200k+ learners" },
  { icon: Building2, title: "Real Estate", desc: "Listings, lead bots and CRM-synced viewing schedulers.", stats: "AI-first" },
  { icon: Plane, title: "Travel & Hospitality", desc: "Booking engines, concierge bots and review automation.", stats: "Global" },
];

function Industries() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Industries</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Specialised for <span className="gradient-text">your sector</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep vertical expertise — we know your customers, regulations and growth levers.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((it, i) => (
            <FadeIn key={it.title} delay={(i % 4) * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="glass rounded-2xl p-6 h-full hover:shadow-glow transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet/30 to-primary/30 flex items-center justify-center mb-4">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-primary">{it.stats}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Let's solve your <span className="gradient-text">industry's hardest problem</span></h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/book-consultation" size="lg">Book a call <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/case-studies" variant="outline" size="lg">See case studies</GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
