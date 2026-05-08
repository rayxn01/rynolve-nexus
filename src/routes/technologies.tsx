import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Rynolve" },
      { name: "description", content: "We work fluently across React, Next.js, Node, Python, OpenAI, AWS, GCP and the full modern toolchain." },
      { property: "og:title", content: "Technologies — Rynolve" },
      { property: "og:description", content: "We work fluently across React, Next.js, Node, Python, OpenAI, AWS, GCP and the full modern toolchain." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Technologies"
      title={<>The modern stack, <span className="gradient-text">mastered</span></>}
      description="We work fluently across React, Next.js, Node, Python, OpenAI, AWS, GCP and the full modern toolchain."
      highlights={["Frontend & Mobile","AI/ML & data","Cloud, DevOps & infra"]}
    />
  ),
});
