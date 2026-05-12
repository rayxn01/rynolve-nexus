import { createFileRoute } from "@tanstack/react-router";
import { Section, FadeIn, GlowBackground } from "@/components/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Rynolve" },
      { name: "description", content: "The legal terms governing your use of Rynolve services." },
      { property: "og:title", content: "Terms of Service — Rynolve" },
      { property: "og:description", content: "Plain-English legal terms for working with Rynolve." },
    ],
  }),
  component: Terms,
});

const sections = [
  { h: "Acceptance of terms", p: "By engaging Rynolve Ltd ('Rynolve', 'we', 'us') for any service, or by using rynolve.com, you agree to these terms." },
  { h: "Services", p: "We provide design, engineering, AI and consulting services as scoped in a separate Statement of Work (SOW) signed by both parties." },
  { h: "Payment", p: "Invoices are due within 14 days unless agreed otherwise. Late payments may pause delivery and incur a 2% monthly fee." },
  { h: "Intellectual property", p: "Upon full payment, all custom code and designs created for you transfer to you. Pre-existing IP, libraries, and tools remain ours." },
  { h: "Confidentiality", p: "Both parties agree to keep confidential information private. We sign mutual NDAs when needed." },
  { h: "Warranties & liability", p: "We deliver work to professional standards. Liability is limited to the amount paid for the affected engagement in the previous 12 months." },
  { h: "Termination", p: "Either party may terminate with 30 days' written notice. You pay for work completed up to the termination date." },
  { h: "Governing law", p: "These terms are governed by the laws of England and Wales. Disputes will be resolved in London courts." },
  { h: "Contact", p: "Questions about these terms? Email legal@rynolve.com." },
];

function Terms() {
  return (
    <>
      <section className="relative min-h-[35vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Terms</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-balance">Terms of <span className="gradient-text">service</span></h1>
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
