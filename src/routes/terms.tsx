import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Rynolve" },
      { name: "description", content: "The legal terms governing your use of Rynolve services." },
      { property: "og:title", content: "Terms — Rynolve" },
      { property: "og:description", content: "The legal terms governing your use of Rynolve services." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Terms"
      title={<>Terms of <span className="gradient-text">service</span></>}
      description="The legal terms governing your use of Rynolve services."
      highlights={[]}
    />
  ),
});
