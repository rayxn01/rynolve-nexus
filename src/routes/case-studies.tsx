import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Rynolve" },
      { name: "description", content: "Deep-dive stories of how we partnered with clients to ship outcomes that moved metrics." },
      { property: "og:title", content: "Case Studies — Rynolve" },
      { property: "og:description", content: "Deep-dive stories of how we partnered with clients to ship outcomes that moved metrics." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Case Studies"
      title={<>Real <span className="gradient-text">transformations</span></>}
      description="Deep-dive stories of how we partnered with clients to ship outcomes that moved metrics."
      highlights={["Problem framing & strategy","Engineering & rollout","Outcomes, ROI & growth"]}
    />
  ),
});
