import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { FadeIn, GlowBackground, Section, SectionHeader } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";
import leadershipImg from "@/assets/leadership.png";
import rayanImg from "@/assets/team/rayan.png";
import waseemImg from "@/assets/team/waseem.png";
import farizImg from "@/assets/team/fariz.png";
import shahzadImg from "@/assets/team/shahzad.png";
import arhamImg from "@/assets/team/arham.png";

const team = [
  {
    name: "Muhammad Rayan",
    role: "CEO & Lead Analyst",
    tagline: "Industry Expert | 7+ Years",
    bio: "Founder & CEO of Rynolve. Specialized in restructuring and organizational design for major public and private corporations across the UK and Pakistan.",
    photo: rayanImg,
  },
  {
    name: "Muhammad Waseem",
    role: "Director of Design Operations",
    tagline: "Design Industry Expert | 7+ Years in UI/UX & Digital Design",
    bio: "Specialized in design strategy, user experience and brand identity systems for startups and enterprise digital products at Rynolve.",
    photo: waseemImg,
  },
  {
    name: "Fariz Ali",
    role: "Chief Technology Officer",
    tagline: "Technology Industry Expert | 7+ Years in Engineering Leadership",
    bio: "CTO at Rynolve. Leads the engineering org across cloud, AI and product platforms — architecting scalable systems for high-growth companies.",
    photo: farizImg,
  },
  {
    name: "Rana Shahzad",
    role: "Director of Developer Operations",
    tagline: "Technology Industry Expert | 10+ Years in DevOps",
    bio: "Specialized in system infrastructure, CI/CD and developer workflows for major public and private corporations partnered with Rynolve.",
    photo: shahzadImg,
  },
  {
    name: "Arham Ijaz",
    role: "Chief Financial Officer",
    tagline: "Finance Industry Expert | 15+ Years in Financial Management",
    bio: "CFO at Rynolve. Specialized in financial strategy and corporate planning for major public and private corporations across multiple regions.",
    photo: arhamImg,
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership — Rynolve" },
      { name: "description", content: "Meet the leadership team behind Rynolve — engineering, design, technology and finance experts shaping the future of digital." },
      { property: "og:title", content: "Leadership — Rynolve" },
      { property: "og:description", content: "Meet the leadership team behind Rynolve — engineering, design, technology and finance experts shaping the future of digital." },
      { property: "og:image", content: leadershipImg },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">
              People behind Rynolve
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Our <span className="gradient-text">Leadership</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A senior team of operators, engineers, designers and strategists building Rynolve into a world-class digital partner.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <SectionHeader
          eyebrow="Meet the team"
          title={<>The minds behind <span className="gradient-text">every Rynolve project</span></>}
          description="Decades of combined experience across software, AI, design and finance."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.06}>
              <article className="glass glow-border rounded-2xl p-7 h-full flex flex-col hover-lift">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-black ring-1 ring-primary/20">
                  <img
                    src={m.photo}
                    alt={`${m.name} — ${m.role} at Rynolve`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-bold leading-tight">{m.name}</h3>
                  <p className="text-sm text-primary">{m.role}</p>
                </div>
                <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{m.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{m.bio}</p>
                <div className="mt-6 flex gap-2">
                  <a href="#" aria-label={`${m.name} on LinkedIn`} className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:hello@rynolve.com" aria-label={`Email ${m.name}`} className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Join us</p>
            <h2 className="text-3xl font-bold">
              Want to work with the team behind <span className="gradient-text">Rynolve</span>?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/contact" size="lg">
                Get in touch <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/careers" variant="outline" size="lg">
                See open roles
              </GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
