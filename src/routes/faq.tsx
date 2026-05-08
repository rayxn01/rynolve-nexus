import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Rynolve" },
      { name: "description", content: "Everything you need to know about working with Rynolve." },
      { property: "og:title", content: "FAQ — Rynolve" },
      { property: "og:description", content: "Everything you need to know about working with Rynolve." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="FAQ"
      title={<>Common <span class="gradient-text">questions</span></>}
      description="Everything you need to know about working with Rynolve."
      highlights={["Process & timelines","Pricing & contracts","Team & support"]}
    />
  ),
});
