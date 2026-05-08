import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Rynolve" },
      { name: "description", content: "Vertical expertise across healthcare, fintech, ecommerce, logistics, education and SaaS." },
      { property: "og:title", content: "Industries — Rynolve" },
      { property: "og:description", content: "Vertical expertise across healthcare, fintech, ecommerce, logistics, education and SaaS." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Industries"
      title={<>Built for <span class="gradient-text">your sector</span></>}
      description="Vertical expertise across healthcare, fintech, ecommerce, logistics, education and SaaS."
      highlights={["Healthcare & Fintech","Ecommerce & Retail","SaaS & Enterprise"]}
    />
  ),
});
