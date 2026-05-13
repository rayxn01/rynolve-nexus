import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";
import { Section, FadeIn, GlowBackground } from "@/components/Section";
import { GradientButton } from "@/components/GradientButton";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Rynolve" },
      { name: "description", content: "Selected work from Rynolve — WordPress, Shopify and full stack projects delivered for clients worldwide." },
      { property: "og:title", content: "Rynolve Portfolio" },
      { property: "og:description", content: "WordPress, Shopify and full stack projects delivered globally." },
    ],
  }),
  component: Portfolio,
});

type Category = "WordPress" | "Shopify" | "Full Stack";

interface Project {
  name: string;
  url: string;
  category: Category;
  description: string;
  color: string;
}

const projects: Project[] = [
  // WordPress
  { name: "TM Defenders", url: "https://www.tmdefenders.com/", category: "WordPress", description: "Trademark protection agency website with conversion-focused funnel.", color: "from-violet to-primary" },
  { name: "Ticket Busters Ontario", url: "https://ticketbustersontario.com/", category: "WordPress", description: "Legal services platform for traffic ticket defense in Ontario.", color: "from-primary to-accent" },
  { name: "Oxford Group", url: "https://www.oxford-grp.co.uk/", category: "WordPress", description: "Premium UK consulting brand site with rich content architecture.", color: "from-accent to-violet" },
  { name: "The Big Bounce America", url: "https://thebigbounceamerica.com/", category: "WordPress", description: "Nationwide event tour platform with ticketing and city schedules.", color: "from-violet to-accent" },
  { name: "Politically Basic", url: "https://www.politicallybasic.com/", category: "WordPress", description: "Editorial publication with custom WordPress theme and CMS.", color: "from-primary to-violet" },
  { name: "Swoop Property", url: "https://swoopproperty.co.uk/", category: "WordPress", description: "UK property investment site with lead capture and listings.", color: "from-accent to-primary" },
  { name: "Etime Alev", url: "https://etimealev.com/", category: "WordPress", description: "Personal coaching brand with elegant editorial layout.", color: "from-violet to-primary" },
  { name: "Call Her Daddy", url: "https://www.callherdaddy.com/", category: "WordPress", description: "High-traffic media brand site optimised for performance.", color: "from-primary to-accent" },
  { name: "Ignite Consults", url: "https://igniteconsults.com/", category: "WordPress", description: "Business consulting firm with service funnels and case studies.", color: "from-accent to-violet" },
  { name: "RTO Advance", url: "https://www.rtoadvance.com.au/", category: "WordPress", description: "Australian RTO compliance platform with lead-gen architecture.", color: "from-violet to-accent" },
  { name: "S Eleven Boutique Clinic", url: "https://selevenboutiqueclinic.com/", category: "WordPress", description: "Premium aesthetics clinic site with online booking.", color: "from-primary to-violet" },
  { name: "WeWork JM", url: "https://www.weworkjm.com/", category: "WordPress", description: "Co-working spaces brand site with location pages and booking.", color: "from-accent to-primary" },
  { name: "Revival Coaching", url: "https://www.revivalcoaching.ca/", category: "WordPress", description: "Coaching platform with program pages and conversion CTAs.", color: "from-violet to-primary" },
  { name: "JumpZone PK", url: "https://jumpzonepk.com/", category: "WordPress", description: "Trampoline park experience with packages and party booking.", color: "from-primary to-accent" },
  { name: "Padel Cafe", url: "https://padelcafe.pk/", category: "WordPress", description: "Padel club website with court booking and membership flow.", color: "from-accent to-violet" },

  // Shopify
  { name: "Edne Group", url: "https://ednegroup.com/", category: "Shopify", description: "Premium Shopify storefront with custom sections and checkout flow.", color: "from-violet to-primary" },
  { name: "Maxstilo", url: "https://maxstilo.com/", category: "Shopify", description: "Fashion ecommerce store built on Shopify with conversion-tuned UX.", color: "from-primary to-accent" },

  // Full Stack
  { name: "Patreon (clone build)", url: "https://www.patreon.com/", category: "Full Stack", description: "Membership and creator-economy platform engineering reference build.", color: "from-accent to-violet" },
  { name: "Criminal Modz", url: "https://criminalmodz.com/", category: "Full Stack", description: "Game services storefront with custom checkout and order pipeline.", color: "from-violet to-accent" },
  { name: "Your Diamond Guys", url: "https://yourdiamondguys.com/", category: "Full Stack", description: "Luxury jewellery commerce platform with custom backend.", color: "from-primary to-violet" },
  { name: "Snap Shutter Social", url: "https://snap-shutter-social.netlify.app/", category: "Full Stack", description: "Social photo-sharing app with realtime feed and auth.", color: "from-accent to-primary" },
  { name: "Asna Constructions", url: "https://asna-constructions.vercel.app/", category: "Full Stack", description: "Construction firm web app with portfolio CMS and inquiry pipeline.", color: "from-violet to-primary" },
  { name: "Wakeel Online", url: "https://wakeelonlinesecondmilestone.netlify.app/", category: "Full Stack", description: "Legal-tech consultation platform with booking and dashboards.", color: "from-primary to-accent" },
  { name: "AA Photobooth 360", url: "https://aa-photobooth-360.netlify.app/", category: "Full Stack", description: "Event services booking platform with packages and availability.", color: "from-accent to-violet" },
  { name: "Netcoins App", url: "https://netcoins-app.vercel.app/", category: "Full Stack", description: "Crypto trading dashboard with charts, auth and live data.", color: "from-violet to-accent" },
];

const filters: Array<"All" | Category> = ["All", "WordPress", "Shopify", "Full Stack"];

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Portfolio</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">
              Work we're <span className="gradient-text">proud of</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of {projects.length}+ live client projects across WordPress, Shopify and full stack engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => {
            const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-violet via-primary to-accent text-primary-foreground shadow-glow-sm"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => {
            const shot = `https://image.thum.io/get/width/900/crop/1100/noanimate/${p.url}`;
            return (
              <motion.a
                layout
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (i % 9) * 0.04 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass cursor-pointer block"
              >
                <img
                  src={shot}
                  alt={`${p.name} — live website preview`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={i < 3 ? "high" : "low"}
                  width={900}
                  height={1100}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-30 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-white/90 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur">
                    <Globe className="h-3 w-3" /> {p.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white leading-tight">{p.name}</h3>
                  <p className="mt-1 text-xs text-white/70 line-clamp-2">{p.description}</p>
                </div>

                <div className="absolute inset-0 bg-background/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-xs text-primary uppercase tracking-wider">{p.category}</span>
                  <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary self-start">
                    Visit website <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </Section>

      <Section>
        <FadeIn>
          <div className="glass glow-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Want to see your project here? <span className="gradient-text">Let's start.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <GradientButton to="/book-consultation" size="lg">
                Start a project <ArrowRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/services" variant="outline" size="lg">
                View services
              </GradientButton>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
