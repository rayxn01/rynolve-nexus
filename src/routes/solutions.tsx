import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Rynolve" },
      { name: "description", content: "Tailored playbooks for healthcare, real estate, finance, education, ecommerce and more." },
      { property: "og:title", content: "Solutions — Rynolve" },
      { property: "og:description", content: "Tailored playbooks for healthcare, real estate, finance, education, ecommerce and more." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Solutions"
      title={<>Industry-shaped <span className="gradient-text">solutions</span></>}
      description="Tailored playbooks for healthcare, real estate, finance, education, ecommerce and more."
      highlights={["Healthcare & Real Estate platforms","Finance, Legal & Logistics tooling","Ecommerce, Travel & Hospitality builds"]}
    />
  ),
});
