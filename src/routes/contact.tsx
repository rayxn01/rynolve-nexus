import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Calendar, Send, ArrowRight } from "lucide-react";
import { Section, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rynolve" },
      { name: "description", content: "Get in touch with Rynolve. Call +44 7466 712583 or send a message — we reply within 24 hours." },
      { property: "og:title", content: "Contact Rynolve" },
      { property: "og:description", content: "Talk to our team. We respond within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Contact</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Let's <span className="gradient-text">talk</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We respond to every enquiry within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section className="!py-12">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <FadeIn className="lg:col-span-3">
            <div className="glass glow-border rounded-3xl p-8">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tell us what you're building. The more detail, the better.</p>

              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-8 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                </div>
                <Field label="Company" name="company" placeholder="Company name" />
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">What can we help with?</label>
                  <select className="w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none">
                    {["AI Automation", "Web Development", "Mobile App", "SaaS Platform", "UI/UX Design", "Other"].map(o => <option key={o} className="bg-background">{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
                  <textarea rows={5} placeholder="Tell us about your project..."
                    className="w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none placeholder:text-muted-foreground" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-violet via-primary to-accent animate-gradient-shift hover:shadow-glow transition-shadow"
                >
                  {sent ? "Message sent ✓" : <>Send message <Send className="h-4 w-4" /></>}
                </motion.button>
              </form>
            </div>
          </FadeIn>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn delay={0.1}>
              <div className="glass rounded-3xl p-8">
                <h3 className="font-semibold text-lg mb-5">Direct contact</h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+44 7466 712583", href: "tel:+447466712583" },
                    { icon: Mail, label: "Email", value: "hello@rynolve.com", href: "mailto:hello@rynolve.com" },
                    { icon: MessageCircle, label: "WhatsApp", value: "+44 7466 712583", href: "https://wa.me/447466712583" },
                    { icon: MapPin, label: "Office", value: "London, United Kingdom" },
                  ].map((c) => {
                    const inner = (
                      <div className="flex items-start gap-3 group">
                        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:shadow-glow-sm transition-shadow">
                          <c.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{c.label}</p>
                          <p className="text-sm font-medium">{c.value}</p>
                        </div>
                      </div>
                    );
                    return c.href ? <a key={c.label} href={c.href}>{inner}</a> : <div key={c.label}>{inner}</div>;
                  })}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="glass glow-border rounded-3xl p-8">
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg">Book a 30-min call</h3>
                <p className="mt-2 text-sm text-muted-foreground">Pick a slot that works — no pitch, just a real conversation.</p>
                <GradientButton to="/book-consultation" className="mt-5 w-full">
                  Book consultation <ArrowRight className="h-4 w-4" />
                </GradientButton>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative aspect-video rounded-3xl overflow-hidden glass">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet/30 via-primary/20 to-accent/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
                    <p className="text-sm font-medium">London HQ</p>
                    <p className="text-xs text-muted-foreground">United Kingdom</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground mb-1.5 block">{label}</label>
      <input type={type} name={name} placeholder={placeholder}
        className="w-full bg-transparent glass rounded-xl px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:shadow-glow-sm transition-shadow" />
    </div>
  );
}
