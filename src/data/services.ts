import {
  Bot, Sparkles, Code2, Smartphone, ShoppingBag, FileCode2, LayoutDashboard,
  Palette, Users, Search, Megaphone, Plug, BarChart3, Workflow, Cloud,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: LucideIcon;
  color: string;
  tagline: string;
  desc: string;
  overview: string;
  benefits: string[];
  useCases: string[];
  deliverables: string[];
  stack: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: Bot,
    color: "from-violet to-primary",
    tagline: "Eliminate repetitive work with intelligent workflows.",
    desc: "Eliminate repetitive work with intelligent workflows.",
    overview:
      "We design, build and operate AI-powered workflows that quietly run your business 24/7 — from lead qualification and support to internal ops and reporting. Built on production-grade tooling, monitored, and tuned to your KPIs.",
    benefits: [
      "Save 20–40 hours per week per team",
      "Cut operational cost by up to 60%",
      "Eliminate human error in repetitive tasks",
      "Respond to customers and leads in seconds",
      "Scale operations without hiring",
    ],
    useCases: [
      "Customer support triage and resolution",
      "Lead qualification and routing",
      "Document and contract processing",
      "Recurring reporting and KPI alerts",
      "Internal approvals and onboarding flows",
    ],
    deliverables: [
      "Automation strategy and ROI map",
      "End-to-end workflow build and integrations",
      "Monitoring, logging and human-in-the-loop controls",
      "Documentation and team training",
    ],
    stack: ["OpenAI", "Gemini AI", "LangChain", "n8n", "Make", "Zapier", "Twilio", "Supabase"],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    icon: Sparkles,
    color: "from-primary to-accent",
    tagline: "Custom autonomous agents trained on your business.",
    desc: "Custom autonomous agents trained on your business.",
    overview:
      "Custom AI agents that understand your business context — your data, your tone, your processes — and act on it across chat, email, voice and your internal tools.",
    benefits: [
      "Always-on agents handling 80%+ of repetitive work",
      "Personalised, on-brand interactions at scale",
      "Deep integration with your existing systems",
      "Continuous learning from real conversations",
    ],
    useCases: [
      "AI sales development representatives",
      "In-app customer copilots",
      "Internal knowledge assistants",
      "Voice agents over Twilio",
    ],
    deliverables: [
      "Agent architecture and prompt design",
      "Knowledge base and retrieval pipeline",
      "Tool integrations and guardrails",
      "Evaluation suite and continuous improvement",
    ],
    stack: ["OpenAI", "Gemini", "LangChain", "Pinecone", "Supabase", "Twilio"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: Code2,
    color: "from-accent to-violet",
    tagline: "Marketing sites and platforms that convert.",
    desc: "Marketing sites and platforms that convert.",
    overview:
      "High-performance marketing sites and web platforms engineered for speed, SEO and conversion. Custom design, accessible by default, built on modern frameworks.",
    benefits: [
      "Lighthouse 90–100 performance",
      "SEO-ready architecture from day one",
      "CMS or headless options to fit your team",
      "Conversion-focused UX",
    ],
    useCases: [
      "Premium marketing sites",
      "Product launch sites",
      "Documentation and developer portals",
      "Multi-region brand sites",
    ],
    deliverables: [
      "Design system and components",
      "Production codebase with CI/CD",
      "CMS setup and editor training",
      "Analytics and SEO baseline",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Sanity", "Vercel"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    icon: Smartphone,
    color: "from-violet to-accent",
    tagline: "iOS & Android with React Native and Flutter.",
    desc: "iOS & Android with React Native and Flutter.",
    overview:
      "Native-feel iOS and Android apps from a single codebase. Premium UX, deep native integrations, and a release pipeline that ships updates weekly.",
    benefits: [
      "Single codebase, both platforms",
      "Native performance and feel",
      "App Store and Play Store launch support",
      "Crash reporting and OTA updates",
    ],
    useCases: [
      "Consumer apps and marketplaces",
      "Fintech and on-demand services",
      "Internal field-ops apps",
      "Companion apps for SaaS products",
    ],
    deliverables: [
      "Product design and prototyping",
      "Cross-platform engineering",
      "Backend and APIs",
      "Store submission and post-launch support",
    ],
    stack: ["React Native", "Expo", "Flutter", "Firebase", "Supabase", "Stripe"],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    icon: ShoppingBag,
    color: "from-primary to-violet",
    tagline: "Premium ecommerce stores that scale.",
    desc: "Premium ecommerce stores that scale.",
    overview:
      "Premium Shopify and Shopify Plus stores — custom themes, conversion-tuned UX, headless storefronts and advanced integrations with your stack.",
    benefits: [
      "Higher conversion rates and AOV",
      "Custom checkout and storefront UX",
      "Robust integrations with your CRM, ERP and 3PL",
      "Performance-tuned themes",
    ],
    useCases: [
      "DTC brand launches and migrations",
      "Headless Shopify storefronts",
      "Subscription and B2B commerce",
      "Multi-region and multi-currency stores",
    ],
    deliverables: [
      "Custom theme or headless build",
      "App and integration setup",
      "Analytics and conversion tracking",
      "Launch and post-launch optimisation",
    ],
    stack: ["Shopify", "Shopify Plus", "Hydrogen", "Liquid", "Klaviyo"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    icon: FileCode2,
    color: "from-accent to-primary",
    tagline: "Custom themes, blocks and headless WP.",
    desc: "Custom themes, blocks and headless WP.",
    overview:
      "Custom WordPress builds — bespoke themes, Gutenberg blocks, WooCommerce, and headless WP backends — engineered for speed, security and editorial flexibility.",
    benefits: [
      "Editor-friendly content workflows",
      "Fast, secure and SEO-ready",
      "WooCommerce and membership integrations",
      "Optional headless front-ends",
    ],
    useCases: [
      "Brand and publisher sites",
      "WooCommerce stores",
      "Membership and community sites",
      "Headless WP with Next.js front-ends",
    ],
    deliverables: [
      "Custom theme and block library",
      "Plugin selection and integrations",
      "Performance and security hardening",
      "Editor onboarding and docs",
    ],
    stack: ["WordPress", "WooCommerce", "ACF", "Gutenberg", "PHP", "MySQL"],
  },
  {
    slug: "saas-platforms",
    title: "SaaS Platforms",
    icon: LayoutDashboard,
    color: "from-violet to-primary",
    tagline: "End-to-end product engineering, MVP to enterprise.",
    desc: "End-to-end product engineering, MVP to enterprise.",
    overview:
      "End-to-end SaaS engineering — from MVP to multi-tenant enterprise platforms — covering product, design, frontend, backend, infra and growth instrumentation.",
    benefits: [
      "Senior product team from day one",
      "MVP in weeks, not quarters",
      "Scalable, multi-tenant architecture",
      "Built-in billing, auth and analytics",
    ],
    useCases: [
      "Vertical SaaS MVPs",
      "Internal platforms and tools",
      "Marketplaces and two-sided platforms",
      "AI-native SaaS products",
    ],
    deliverables: [
      "Product strategy and architecture",
      "Frontend, backend and infrastructure",
      "Auth, billing and admin tools",
      "Observability and analytics",
    ],
    stack: ["Next.js", "Node.js", "Postgres", "Stripe", "AWS", "Supabase"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    color: "from-primary to-accent",
    tagline: "Interfaces that feel premium and intuitive.",
    desc: "Interfaces that feel premium and intuitive.",
    overview:
      "Product, brand and marketing design that feels premium — from research and information architecture to high-fidelity prototypes and design systems.",
    benefits: [
      "Brand-consistent, accessible interfaces",
      "Higher engagement and conversion",
      "Reusable design systems your team can extend",
      "Tight handoff with engineering",
    ],
    useCases: [
      "Product UX and visual design",
      "Marketing site design",
      "Design systems and component libraries",
      "Brand identity and guidelines",
    ],
    deliverables: [
      "Research and discovery",
      "Wireframes and high-fidelity designs",
      "Interactive prototypes",
      "Design system documentation",
    ],
    stack: ["Figma", "Framer", "Lottie", "Storybook"],
  },
  {
    slug: "crm-systems",
    title: "CRM Systems",
    icon: Users,
    color: "from-accent to-violet",
    tagline: "Custom CRMs and sales enablement tools.",
    desc: "Custom CRMs and sales enablement tools.",
    overview:
      "Custom CRMs and sales enablement tools tailored to how your team actually sells — integrated with your data, automations and AI assistants.",
    benefits: [
      "Workflows mapped to your sales motion",
      "AI-assisted enrichment and scoring",
      "Cleaner pipeline and forecasting",
      "Native integrations with your stack",
    ],
    useCases: [
      "Custom CRM platforms",
      "Sales pipeline dashboards",
      "AI lead enrichment and scoring",
      "HubSpot/Salesforce extensions",
    ],
    deliverables: [
      "CRM data model and design",
      "Pipelines, automations and reporting",
      "Integrations with email, calendar, billing",
      "Onboarding and adoption support",
    ],
    stack: ["React", "Node.js", "Postgres", "HubSpot", "Salesforce", "Zapier"],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    icon: Search,
    color: "from-violet to-accent",
    tagline: "Technical SEO and content that ranks.",
    desc: "Technical SEO and content that ranks.",
    overview:
      "Technical SEO, content strategy and link-building that compounds traffic month over month — backed by a measurable, audit-driven approach.",
    benefits: [
      "Higher organic rankings and traffic",
      "Audit-driven, measurable progress",
      "Technical fixes baked into your stack",
      "Content briefs your team can execute",
    ],
    useCases: [
      "Technical SEO audits and fixes",
      "Programmatic SEO at scale",
      "Content strategy and clusters",
      "Migration SEO",
    ],
    deliverables: [
      "Full SEO audit",
      "Keyword and content roadmap",
      "On-page and technical implementation",
      "Monthly reporting",
    ],
    stack: ["Ahrefs", "GSC", "Screaming Frog", "Schema.org"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    color: "from-primary to-violet",
    tagline: "Performance marketing and brand campaigns.",
    desc: "Performance marketing and brand campaigns.",
    overview:
      "Performance and brand marketing — paid media, creative, lifecycle and analytics — engineered to drive pipeline, not vanity metrics.",
    benefits: [
      "Lower CAC and higher ROAS",
      "Creative that actually converts",
      "Lifecycle that retains and expands",
      "Clear, weekly reporting",
    ],
    useCases: [
      "Paid social and search",
      "Creative production",
      "Email and lifecycle marketing",
      "Attribution and analytics",
    ],
    deliverables: [
      "Channel strategy and budget plan",
      "Creative and copy production",
      "Campaign launch and optimisation",
      "Reporting dashboard",
    ],
    stack: ["Meta Ads", "Google Ads", "Klaviyo", "GA4", "Hyros"],
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    icon: Plug,
    color: "from-accent to-primary",
    tagline: "Connect any system, any service, any data.",
    desc: "Connect any system, any service, any data.",
    overview:
      "We connect any system to any other — payment, comms, CRM, AI, ERP — with reliable, observable integrations and clear contracts between teams.",
    benefits: [
      "Reliable, monitored integrations",
      "Faster delivery via reusable patterns",
      "Clear API contracts and versioning",
      "Secure handling of credentials and data",
    ],
    useCases: [
      "Twilio voice and SMS",
      "OpenAI and Gemini AI",
      "Stripe billing and payouts",
      "HubSpot, Salesforce, Notion, Airtable",
    ],
    deliverables: [
      "Integration design and specs",
      "Implementation and deployment",
      "Monitoring and alerting",
      "Documentation",
    ],
    stack: ["Twilio", "OpenAI", "Gemini", "Stripe", "REST", "GraphQL", "Webhooks"],
  },
  {
    slug: "custom-dashboards",
    title: "Custom Dashboards",
    icon: BarChart3,
    color: "from-violet to-primary",
    tagline: "Real-time analytics tailored to your KPIs.",
    desc: "Real-time analytics tailored to your KPIs.",
    overview:
      "Real-time, role-based dashboards that surface the KPIs your team actually acts on — built on your data, with the UX of a modern SaaS product.",
    benefits: [
      "One source of truth across teams",
      "Real-time KPIs and alerts",
      "Role-based views and permissions",
      "Embeddable in your existing apps",
    ],
    useCases: [
      "Executive KPI dashboards",
      "Operations control centres",
      "Customer-facing analytics",
      "Embedded BI for SaaS products",
    ],
    deliverables: [
      "Data model and pipeline",
      "Dashboard design and build",
      "Permissions and SSO",
      "Documentation and training",
    ],
    stack: ["React", "Recharts", "Postgres", "ClickHouse", "Metabase"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    icon: Workflow,
    color: "from-primary to-accent",
    tagline: "Streamline operations end-to-end.",
    desc: "Streamline operations end-to-end.",
    overview:
      "Streamline operations end-to-end — finance, ops, HR, support — with reliable workflows that connect your tools and people.",
    benefits: [
      "Faster cycle times across ops",
      "Lower error rates and rework",
      "Better visibility for leadership",
      "Happier teams doing higher-value work",
    ],
    useCases: [
      "Finance and invoicing automation",
      "HR onboarding and offboarding",
      "Order-to-cash workflows",
      "Internal approvals and SLAs",
    ],
    deliverables: [
      "Process mapping and ROI plan",
      "Workflow build and integrations",
      "Monitoring and reporting",
      "Team enablement",
    ],
    stack: ["n8n", "Make", "Zapier", "Airtable", "Notion", "Slack"],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    icon: Cloud,
    color: "from-accent to-violet",
    tagline: "Secure, scalable cloud on AWS, GCP, Azure.",
    desc: "Secure, scalable cloud on AWS, GCP, Azure.",
    overview:
      "Secure, scalable cloud architectures on AWS, GCP and Azure — designed for performance, cost and compliance from day one.",
    benefits: [
      "Production-grade reliability",
      "Cost-optimised architectures",
      "Security and compliance baked in",
      "Infrastructure as code",
    ],
    useCases: [
      "New product infrastructure",
      "Cloud migrations",
      "DevOps and CI/CD",
      "Cost and performance optimisation",
    ],
    deliverables: [
      "Architecture design",
      "Terraform / IaC implementation",
      "CI/CD pipelines",
      "Monitoring and runbooks",
    ],
    stack: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
