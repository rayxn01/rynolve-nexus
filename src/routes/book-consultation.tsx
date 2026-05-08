import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a call — Rynolve" },
      { name: "description", content: "Pick a 30-minute slot. No pitch — just a real conversation about your project." },
      { property: "og:title", content: "Book a call — Rynolve" },
      { property: "og:description", content: "Pick a 30-minute slot. No pitch — just a real conversation about your project." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Book a call"
      title={<>Talk to a <span className="gradient-text">senior</span> from day one</>}
      description="Pick a 30-minute slot. No pitch — just a real conversation about your project."
      highlights={["No sales reps","Senior consultants only","Strategy in 30 minutes"]}
    />
  ),
});
