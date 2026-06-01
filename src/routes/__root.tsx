import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const AIMascot = lazy(() => import("@/components/AIMascot").then((m) => ({ default: m.AIMascot })));
const CursorGlow = lazy(() => import("@/components/CursorGlow").then((m) => ({ default: m.CursorGlow })));

function useDeferredMount(delay = 1500) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void, opts?: { timeout: number }) => number);
    if (ric) {
      const id = ric(() => setReady(true), { timeout: delay });
      return () => (window as any).cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return ready;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-violet via-primary to-accent"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rynolve — AI Automation, Web, Mobile & SaaS Development" },
      { name: "description", content: "Rynolve is a premium digital engineering studio building AI automation, web, mobile and SaaS products for teams in the United States, United Kingdom, and Pakistan." },
      { name: "keywords", content: "Rynolve, AI automation, web development, mobile app development, SaaS development, AI agency USA, AI agency UK, AI agency Pakistan, custom software, digital engineering studio" },
      { name: "author", content: "Rynolve" },
      { name: "theme-color", content: "#7c3aed" },
      { property: "og:site_name", content: "Rynolve" },
      { property: "og:title", content: "Rynolve — AI Automation, Web, Mobile & SaaS Development" },
      { property: "og:description", content: "Premium AI, web, mobile and SaaS development for forward-thinking companies in the US, UK and Pakistan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rynolve-vision-nexus.lovable.app/" },
      { property: "og:image", content: "https://rynolve-vision-nexus.lovable.app/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rynolve — AI Automation, Web, Mobile & SaaS Development" },
      { name: "twitter:description", content: "Premium AI, web, mobile and SaaS development for forward-thinking companies." },
      { name: "twitter:image", content: "https://rynolve-vision-nexus.lovable.app/favicon.png" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1" },
      { name: "geo.region", content: "US" },
      { name: "geo.placename", content: "United States" },
      { name: "ICBM", content: "37.0902, -95.7129" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "en_GB" },
      { property: "og:locale:alternate", content: "en_PK" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
      { rel: "alternate", hrefLang: "en-us", href: "https://rynolve-vision-nexus.lovable.app/" },
      { rel: "alternate", hrefLang: "en-gb", href: "https://rynolve-vision-nexus.lovable.app/" },
      { rel: "alternate", hrefLang: "en-pk", href: "https://rynolve-vision-nexus.lovable.app/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://rynolve-vision-nexus.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://rynolve-vision-nexus.lovable.app/#organization",
          name: "Rynolve",
          alternateName: ["Rynolve.com", "Rynolve Studio", "Rynolve Nexus"],
          url: "https://rynolve-vision-nexus.lovable.app",
          logo: "https://rynolve-vision-nexus.lovable.app/favicon.png",
          image: "https://rynolve-vision-nexus.lovable.app/favicon.png",
          email: "hello@rynolve.com",
          description: "Rynolve is a premium digital engineering studio specializing in AI automation, web, mobile, and SaaS development.",
          foundingDate: "2024",
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Pakistan" },
          ],
          knowsAbout: [
            "AI Automation",
            "AI Agents",
            "Web Development",
            "Mobile App Development",
            "SaaS Development",
            "Custom Software Engineering",
            "WhatsApp Automation",
            "AI Receptionist",
          ],
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://rynolve-vision-nexus.lovable.app/#service",
          name: "Rynolve",
          url: "https://rynolve-vision-nexus.lovable.app",
          image: "https://rynolve-vision-nexus.lovable.app/favicon.png",
          priceRange: "$$",
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Pakistan" },
          ],
          serviceType: ["AI Automation", "Web Development", "Mobile App Development", "SaaS Development"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://rynolve-vision-nexus.lovable.app/#website",
          name: "Rynolve",
          alternateName: "Rynolve.com",
          url: "https://rynolve-vision-nexus.lovable.app",
          publisher: { "@id": "https://rynolve-vision-nexus.lovable.app/#organization" },
          inLanguage: ["en-US", "en-GB", "en-PK"],
          potentialAction: {
            "@type": "SearchAction",
            target: "https://rynolve-vision-nexus.lovable.app/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const decorReady = useDeferredMount(1200);
  return (
    <QueryClientProvider client={queryClient}>
      {decorReady && (
        <Suspense fallback={null}>
          <CursorGlow />
        </Suspense>
      )}
      <Navbar />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      {decorReady && (
        <Suspense fallback={null}>
          <AIMascot />
        </Suspense>
      )}
    </QueryClientProvider>
  );
}
