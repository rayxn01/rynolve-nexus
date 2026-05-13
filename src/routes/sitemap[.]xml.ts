import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";

const BASE_URL = "https://rynolve-vision-nexus.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/solutions", changefreq: "monthly", priority: "0.7" },
          { path: "/industries", changefreq: "monthly", priority: "0.7" },
          { path: "/automations", changefreq: "monthly", priority: "0.7" },
          { path: "/portfolio", changefreq: "weekly", priority: "0.8" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.7" },
          { path: "/technologies", changefreq: "monthly", priority: "0.6" },
          { path: "/team", changefreq: "monthly", priority: "0.6" },
          { path: "/careers", changefreq: "weekly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/pricing", changefreq: "monthly", priority: "0.9" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/book-consultation", changefreq: "monthly", priority: "0.8" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
        ];

        const serviceEntries: SitemapEntry[] = services.map((s) => ({
          path: `/services/${s.slug}`,
          changefreq: "monthly",
          priority: "0.8",
        }));

        const entries = [...staticPaths, ...serviceEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
