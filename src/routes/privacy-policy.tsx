import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy — Rynolve" },
      { name: "description", content: "How Rynolve collects, stores and protects your data." },
      { property: "og:title", content: "Privacy — Rynolve" },
      { property: "og:description", content: "How Rynolve collects, stores and protects your data." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Privacy"
      title={<>Your data, <span className="gradient-text">respected</span></>}
      description="How Rynolve collects, stores and protects your data."
      highlights={[]}
    />
  ),
});
