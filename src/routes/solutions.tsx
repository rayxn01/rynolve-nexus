import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Building2, Banknote, GraduationCap, ShoppingBag, Plane, Truck, Scale, Factory, Stethoscope } from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Rynolve" },
      { name: "description", content: "Industry-shaped solutions: healthcare, fintech, real estate, ecommerce, education, logistics and more." },
      { property: "og:title", content: "Solutions — Rynolve" },
      { property: "og:description", content: "Tailored AI, web and SaaS playbooks for every vertical." },
    ],
  }),
  component: Solutions,
});

const items = [
  { icon: Heart, title: "Healthcare", desc: "HIPAA-aware patient portals, intake automation and AI triage." },
  { icon: Banknote, title: "Fintech", desc: "Secure banking apps, KYC pipelines and AI risk scoring." },
  { icon: Building2, title: "Real Estate", desc: "Listing platforms, lead bots and CRM-synced viewing schedulers." },
  { icon: ShoppingBag, title: "Ecommerce", desc: "Shopify Plus, headless storefronts and AI-powered merchandising." },
  { icon: GraduationCap, title: "Education", desc: "LMS platforms, AI tutors and student lifecycle automation." },
  { icon: Truck, title: "Logistics", desc: "Fleet dashboards, route optimisation and shipment tracking." },
  { icon: Plane, title: "Travel & Hospitality", desc: "Booking engines, concierge bots and review automation." },
  { icon: Scale, title: "Legal", desc: "Contract AI, intake automation and matter management." },
  { icon: Factory, title: "Manufacturing", desc: "ERP integrations, IoT dashboards and predictive maintenance." },
  { icon: Stethoscope, title: "Wellness & Clinics", desc: "Booking, recall flows and patient comms automations." },
];

function Solutions() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Solutions</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Built for <span className="gradient-text">your industry</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Vertical playbooks combining AI, automation and product engineering — so you ship value faster.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <FadeIn key={s.title} delay={(i % 6) * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="group glass rounded-2xl p-7 h-full hover:shadow-glow transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet/30 to-primary/30 flex items-center justify-center mb-5">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Discuss your project <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Don't see your industry? <span className="gradient-text">We adapt.</span></h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/book-consultation" size="lg">Book a strategy call <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/services" variant="outline" size="lg">Explore services</GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
