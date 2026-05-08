import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Rynolve" },
      { name: "description", content: "AI, engineering, product and growth — practical writing from people who ship." },
      { property: "og:title", content: "Blog — Rynolve" },
      { property: "og:description", content: "AI, engineering, product and growth — practical writing from people who ship." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Blog"
      title={<>Insights from the <span className="gradient-text">build floor</span></>}
      description="AI, engineering, product and growth — practical writing from people who ship."
      highlights={["AI & automation deep-dives","Engineering best practices","Founder & growth playbooks"]}
    />
  ),
});
