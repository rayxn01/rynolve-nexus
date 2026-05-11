import { ArrowRight } from "lucide-react";
import { FadeIn, GlowBackground, Section } from "./Section";
import { GradientButton } from "./GradientButton";

export function StubPage({
  eyebrow,
  title,
  description,
  highlights,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  highlights?: string[];
}) {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">{eyebrow}</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">{title}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </FadeIn>
        </div>
      </section>

      {highlights && (
        <Section className="!pt-0">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <FadeIn key={h} delay={i * 0.06}>
                <div className="glass rounded-2xl p-7 h-full">
                  <p className="text-3xl font-display font-bold gradient-text">0{i + 1}</p>
                  <p className="mt-3 text-sm">{h}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Let's build together</p>
            <h2 className="text-3xl font-bold">Have a project in mind? <span className="gradient-text">Let's talk.</span></h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">Book a free 30-minute strategy call and get tailored recommendations for your goals.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/contact" size="lg">Contact us <ArrowRight className="h-4 w-4" /></GradientButton>
              <GradientButton to="/book-consultation" variant="outline" size="lg">Book a call</GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
