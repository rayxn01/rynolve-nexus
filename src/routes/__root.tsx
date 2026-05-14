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
      { title: "Rynolve — Intelligence Made Simple" },
      { name: "description", content: "Rynolve builds intelligent digital experiences — AI automation, web, mobile, and SaaS for ambitious teams worldwide." },
      { name: "theme-color", content: "#7c3aed" },
      { property: "og:title", content: "Rynolve — Intelligence Made Simple" },
      { property: "og:description", content: "Premium AI, web, mobile and SaaS development for forward-thinking companies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index,follow" },
      { name: "googlebot", content: "index,follow" },
      { name: "geo.region", content: "US" },
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
          name: "Rynolve",
          url: "https://rynolve-vision-nexus.lovable.app",
          logo: "https://rynolve-vision-nexus.lovable.app/favicon.png",
          description: "Premium AI, web, mobile and SaaS development for forward-thinking companies.",
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Pakistan" },
          ],
          sameAs: [],
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
