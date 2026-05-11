import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { Section, SectionHeader, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";
import { getService, services, type ServiceDetail } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — Rynolve" }] };
    return {
      meta: [
        { title: `${s.title} — Rynolve` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.title} — Rynolve` },
        { property: "og:description", content: s.overview },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold">Service not found</h1>
      <p className="mt-3 text-muted-foreground">The service you're looking for doesn't exist.</p>
      <Link to="/services" className="mt-6 text-primary inline-flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" /> Back to all services
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: ServiceDetail };
  const Icon = s.icon;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20">
          <FadeIn>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="h-3.5 w-3.5" /> All services
            </Link>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-balance">
              {s.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{s.overview}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GradientButton to="/book-consultation" size="lg">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/contact" variant="outline" size="lg">Contact us</GradientButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <div className="glass rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold">Benefits</h2>
              <ul className="mt-6 space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold">Use cases</h2>
              <ul className="mt-6 space-y-3">
                {s.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <div className="glass rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold">What you get</h2>
              <ul className="mt-6 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass glow-border rounded-2xl p-8 h-full">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Stack & tools</p>
              <h3 className="mt-2 text-2xl font-bold">Built on a proven stack</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full glass text-sm">{t}</span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Engagements start at</p>
                <p className="mt-1 text-4xl font-bold gradient-text">£8,000</p>
                <p className="mt-1 text-sm text-muted-foreground">Custom-quoted by scope and outcome.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Related" title={<>Other services you may <span className="gradient-text">need</span></>} />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {related.map((r) => {
            const RIcon = r.icon;
            return (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="block">
                <div className="group relative glass rounded-2xl p-6 h-full hover:shadow-glow transition-all overflow-hidden">
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${r.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                  <div className="relative">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-4`}>
                      <RIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.tagline}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to start with <span className="gradient-text">{s.title}?</span></h2>
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
