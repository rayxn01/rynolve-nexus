import { createFileRoute } from "@tanstack/react-router";
import { Section, FadeIn, GlowBackground } from "@/components/Section";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Rynolve" },
      { name: "description", content: "How Rynolve collects, stores and protects your data." },
      { property: "og:title", content: "Privacy Policy — Rynolve" },
      { property: "og:description", content: "Your data, respected." },
    ],
  }),
  component: Privacy,
});

const sections = [
  { h: "Information we collect", p: "We collect information you provide directly (name, email, company), information from cookies and analytics, and information about how you use our services. We do not sell your personal data — ever." },
  { h: "How we use information", p: "To deliver and improve our services, communicate with you about projects, send relevant updates (only if you opt in), and meet legal obligations." },
  { h: "Data sharing", p: "We share data only with trusted processors (e.g. analytics, email) under strict data-processing agreements. We never sell or rent your data." },
  { h: "Your rights (GDPR)", p: "You may access, correct, export or delete your data at any time. Email privacy@rynolve.com and we'll respond within 30 days." },
  { h: "Cookies", p: "We use essential cookies and (with consent) analytics cookies to improve the site. You can disable non-essential cookies in your browser." },
  { h: "Security", p: "We use industry-standard encryption in transit and at rest, role-based access, and regular audits to keep your data safe." },
  { h: "Contact", p: "Questions? Email privacy@rynolve.com or write to Rynolve Ltd, London, United Kingdom." },
];

function Privacy() {
  return (
    <>
      <section className="relative min-h-[35vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Privacy</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-balance">Your data, <span className="gradient-text">respected</span></h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: May 2026</p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((s, i) => (
            <FadeIn key={s.h} delay={i * 0.04}>
              <div className="glass rounded-2xl p-7">
                <h2 className="text-xl font-semibold">{s.h}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.p}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
