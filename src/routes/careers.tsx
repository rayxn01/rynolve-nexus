import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Rynolve" },
      { name: "description", content: "Remote-first, senior-only, and obsessed with craft. See open roles and our hiring process." },
      { property: "og:title", content: "Careers — Rynolve" },
      { property: "og:description", content: "Remote-first, senior-only, and obsessed with craft. See open roles and our hiring process." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Careers"
      title={<>Join the <span className="gradient-text">Rynolve crew</span></>}
      description="Remote-first, senior-only, and obsessed with craft. See open roles and our hiring process."
      highlights={["Remote-first culture","Top-of-market compensation","Real ownership & impact"]}
    />
  ),
});
