import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, FadeIn, GlowBackground, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Rynolve" },
      { name: "description", content: "The modern stack we work with — from React and Next.js to OpenAI, AWS and Postgres." },
      { property: "og:title", content: "Technologies — Rynolve" },
      { property: "og:description", content: "Our full stack of frameworks, AI, cloud, and tools." },
    ],
  }),
  component: Tech,
});

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TanStack Start", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Astro"] },
  { title: "Backend", items: ["Node.js", "Python", "FastAPI", "Hono", "tRPC", "GraphQL", "REST", "WebSockets"] },
  { title: "Mobile", items: ["React Native", "Expo", "Flutter", "Swift", "Kotlin"] },
  { title: "AI & ML", items: ["OpenAI", "Gemini", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Hugging Face", "Replicate"] },
  { title: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Supabase", "Firebase", "Prisma", "Drizzle"] },
  { title: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Docker", "Kubernetes", "Terraform"] },
  { title: "Ecommerce", items: ["Shopify", "Shopify Plus", "Hydrogen", "WooCommerce", "Stripe", "Klaviyo"] },
  { title: "Automation", items: ["n8n", "Make", "Zapier", "Twilio", "Slack API", "HubSpot", "Airtable", "Notion API"] },
];

function Tech() {
  return (
    <>
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <GlowBackground />
        <div className="absolute inset-0 grid-bg radial-fade opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center">
          <FadeIn>
            <span className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-6">Technologies</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-balance">The modern stack, <span className="gradient-text">mastered</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">We work with the tools that ship the best products — chosen for performance, scalability and developer experience.</p>
          </FadeIn>
        </div>
      </section>

      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, gi) => (
            <FadeIn key={g.title} delay={(gi % 4) * 0.05}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="text-base font-semibold gradient-text">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <motion.span key={t} whileHover={{ scale: 1.06 }} className="px-3 py-1.5 rounded-full glass text-xs hover:text-primary transition-colors">
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Why these" title={<>Stack chosen for <span className="gradient-text">outcomes</span></>} />
        <div className="mt-12 max-w-3xl mx-auto text-center text-muted-foreground">
          <p>Every tool in our stack is selected for a reason — performance, ecosystem maturity, hiring depth and long-term maintainability. We're framework-agnostic when needed and opinionated when it matters.</p>
        </div>
      </Section>
    </>
  );
}
