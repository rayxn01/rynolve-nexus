
# Rynolve — Premium IT Company Website

This is a very large brief (18 pages, heavy animation, custom mascot, 3D, etc.). Building it all at once would produce a shallow result on every page. I'll build it in phases, starting with a polished foundation + the 6 most important pages, then expand.

## Phase 1 (this build)

### Design system
- Dark, futuristic theme inspired by the logo (deep black, graphite, electric blue, cyan glow, soft white).
- Tokens defined in `src/styles.css` using `oklch`: `--background`, `--foreground`, `--primary` (electric blue), `--accent` (cyan), plus gradient/glow tokens (`--gradient-primary`, `--gradient-hero`, `--shadow-glow`, `--glass-bg`).
- Typography: Inter for body, Space Grotesk for headings (premium, modern).
- Reusable utilities: `.glass-card`, `.glow-border`, `.gradient-text`, `.magnetic`, `.hover-lift`, animated grid + blurred-blob backgrounds.

### Global shell (in `__root.tsx`)
- Sticky transparent navbar with mega-menu for Services & Solutions, animated underline, mobile drawer.
- Premium footer (logo, links, newsletter, contact, socials, animated divider).
- Smooth scrolling (CSS `scroll-behavior` + Lenis-style feel via Framer Motion — skipping a heavy Lenis dependency to stay snappy in the Worker SSR environment).
- Custom cursor: dot + trailing glow ring, magnetic on interactive elements.
- AI Robot Mascot (bottom-right): SVG robot whose head/eyes track the mouse via `useMotionValue`. Click toggles a small "Hi, I'm Ryno" greeting bubble (visual only — no chat backend in Phase 1).
- Page transition fades.

### Pages built in Phase 1
1. **Home (`/`)** — hero with animated gradient headline "We Build Intelligent Digital Experiences", floating UI cards, CTA buttons, animated counters (Projects, Clients, Countries, Years, AI Automations), trusted-logos marquee, Our Expertise grid, Why Rynolve, process timeline, technologies orbit, featured projects, testimonials slider, FAQ, glowing final CTA.
2. **About (`/about`)** — story, vision, mission, core values, animated growth timeline, founder message, stats.
3. **Services (`/services`)** — animated service cards for all 15 listed services, each linking to an anchor with overview/features/process/CTA.
4. **Portfolio (`/portfolio`)** — filterable grid (AI, Web, Mobile, SaaS, Ecommerce), 3D tilt cards, hover detail overlay, metrics.
5. **Pricing (`/pricing`)** — Startup / Business / Enterprise / Custom cards, monthly↔yearly toggle, glowing hover, comparison table.
6. **Contact (`/contact`)** — premium form, contact info card with phone `+44 7466 712583`, email `hello@rynolve.com`, WhatsApp + Calendly-style booking CTA, social icons, map placeholder.

### Stub routes (Phase 2)
To keep the navbar working without 404s, I'll add minimal route files for Solutions, Case Studies, Technologies, Industries, Team, Careers, Blog, Book Consultation, FAQ, Privacy, Terms — each with hero + "Detailed page coming next" section, properly themed and animated. They'll be expanded into full pages in Phase 2.

### Animation stack
- **Framer Motion** for scroll reveals, magnetic hover, tilt cards, counters, page transitions, mascot tracking.
- CSS keyframes for marquee, glow pulse, gradient shift, grid drift.
- Skipping Three.js and GSAP this phase to keep the bundle fast on Worker SSR; the look is achieved with layered SVG + CSS gradients + Framer Motion. Can be added later if you want true 3D.

### SEO
Per-route `head()` with unique title, description, og:title, og:description. Semantic HTML, single H1 per page, alt text, viewport meta.

### Content
Realistic professional placeholders (project names, metrics, testimonials, team-style bios where relevant) so the site looks complete, not skeletal. Easy to swap for real content later.

## Phase 2 (next message after Phase 1 ships)
Expand stub routes into full pages: Solutions (12 industries), Case Studies (detail template), Technologies (interactive ecosystem), Industries, Team (member cards), Careers (positions + form), Blog (article layout), Book Consultation (Calendly-style picker), FAQ (full), Privacy, Terms.

## Phase 3 (optional)
- Real AI chat on the mascot via Lovable AI Gateway.
- Three.js hero scene.
- Lenis smooth scroll.
- Working contact form via Lovable Cloud + email.

## Technical notes
- TanStack Start file-based routing under `src/routes/` (separate route files, not hash anchors).
- All colors via semantic tokens — no hardcoded hex in components.
- Fully responsive (mobile drawer nav, stacked layouts, mascot hides on small screens).
- Cursor effects + mascot disabled on touch devices for performance.

Approve to start Phase 1.
