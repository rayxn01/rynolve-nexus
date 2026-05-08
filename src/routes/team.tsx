import { createFileRoute } from "@tanstack/react-router";
import { StubPage } from "@/components/StubPage";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Rynolve" },
      { name: "description", content: "A distributed team of senior engineers, designers and AI specialists across four continents." },
      { property: "og:title", content: "Team — Rynolve" },
      { property: "og:description", content: "A distributed team of senior engineers, designers and AI specialists across four continents." },
    ],
  }),
  component: () => (
    <StubPage
      eyebrow="Team"
      title={<>The people behind <span class="gradient-text">Rynolve</span></>}
      description="A distributed team of senior engineers, designers and AI specialists across four continents."
      highlights={["Engineering leadership","Design & product","AI & growth"]}
    />
  ),
});
