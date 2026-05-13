import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, FadeIn, GlowBackground, SectionHeader } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Rynolve" },
      { name: "description", content: "Answers to common questions about engagement, pricing, AI and process." },
      { property: "og:title", content: "FAQ — Rynolve" },
      { property: "og:description", content: "Answers to common questions about working with Rynolve." },
    ],
  }),
  component: FAQ,
});

const groups = [
  {
    title: "Getting started",
    items: [
      { q: "How quickly can we kick off?", a: "Most engagements start within 1–2 weeks of the discovery call." },
      { q: "Do you offer free consultations?", a: "Yes — every project starts with a free 30-minute strategy call." },
      { q: "Do you sign NDAs?", a: "Always. We sign mutual NDAs before any sensitive discussion." },
    ],
  },
  {
    title: "Pricing & engagement",
    items: [
      { q: "What does pricing look like?", a: "Fixed-scope projects start around $10,000. SaaS and AI platforms are custom-quoted by scope and outcome." },
      { q: "Do you do retainers?", a: "Yes — monthly retainers from $7,500/month for ongoing product, AI ops or growth work." },
      { q: "What's included in a project?", a: "Product strategy, design, engineering, QA, deployment, and 30 days of post-launch support." },
    ],
  },
  {
    title: "AI & automation",
    items: [
      { q: "Can you integrate AI into our existing product?", a: "Absolutely — that's our specialty. We embed agents, RAG pipelines, and intelligent UX into existing platforms." },
      { q: "Which AI providers do you use?", a: "OpenAI, Gemini, Anthropic, and open-source models depending on the use case, latency and cost profile." },
      { q: "Is our data safe?", a: "Yes — we never train on your data, use your own keys, and keep PII isolated. SOC2-aligned practices." },
    ],
  },
  {
    title: "Process & team",
    items: [
      { q: "Will I work with senior people?", a: "Always. No bait-and-switch — the senior engineers and designers you meet are the ones who ship your project." },
      { q: "How do we communicate?", a: "Shared Slack, weekly demos, async Loom updates, and a live project board." },
      { q: "Do you work with startups or enterprise?", a: "Both. We have packages tuned for early-stage MVPs through to enterprise transformations." },
    ],
  },
];

function FAQ() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">FAQ</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">Common <span className="gradient-text">questions</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to know before reaching out.</p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto space-y-12">
          {groups.map((g, gi) => (
            <FadeIn key={g.title} delay={gi * 0.05}>
              <SectionHeader centered={false} title={g.title} />
              <div className="mt-6 space-y-3">
                {g.items.map((f, i) => (
                  <details key={i} className="group glass rounded-2xl p-5 cursor-pointer">
                    <summary className="flex items-center justify-between font-medium list-none">
                      {f.q}
                      <ArrowRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold">Still have <span className="gradient-text">questions?</span></h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GradientButton to="/contact" size="lg">Contact us <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/book-consultation" variant="outline" size="lg">Book a call</GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
