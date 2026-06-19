export interface Service {
  id: string;
  name: string;
  division: "digital" | "labs";
  shortDesc: string;
  targetAudience: string;
  problems: string[];
  solutions: string[];
  features: string[];
  process: string[];
  relatedProjectIds: string[];
}

export const services: Service[] = [
  // Beulex Digital Services
  {
    id: "website-development",
    name: "Website Development",
    division: "digital",
    shortDesc: "High-performance websites that blend brand aesthetics with enterprise-grade conversion mechanics.",
    targetAudience: "Startups, growing brands, and established companies needing a high-conversion digital headquarters.",
    problems: [
      "Slow page load times causing high bounce rates.",
      "Outdated designs failing to build immediate user trust.",
      "Mobile layouts that are buggy or visually broken.",
      "Lack of clean conversion funnels to capture prospective leads."
    ],
    solutions: [
      "Custom-crafted React and Next.js frontends built for maximum speed.",
      "Stunning, bespoke visual design systems tailormade for your brand.",
      "Mobile-first responsive fluid layouts tested across all screen resolutions.",
      "Strategic CTA layouts optimized to channel traffic into lead captures."
    ],
    features: [
      "Static generation (SSG) for ultra-fast rendering under 1s.",
      "Search Engine Optimized (SEO) semantic HTML hierarchy.",
      "Clean visual transitions and micro-animations via framer-motion.",
      "Headless CMS integration for frictionless content editing.",
      "Fully responsive and accessible (WCAG compliant) structure."
    ],
    process: [
      "Discovery: Analyze competitors, target audience, and layout objectives.",
      "Design: Construct interactive wireframes and premium visual UI mockups.",
      "Development: Code a secure, fast, and structured React interface.",
      "Delivery: Rigorous testing, deployment to production hosting, and SEO setup.",
      "Support: Regular maintenance, speed monitoring, and analytics support."
    ],
    relatedProjectIds: ["personal-portfolio", "digital-agency-brandsen", "vork-global"]
  },
  {
    id: "e-commerce-development",
    name: "E-Commerce Development",
    division: "digital",
    shortDesc: "Headless and custom e-commerce engines designed for fluid buying paths and secure transaction scales.",
    targetAudience: "D2C brands, online retailers, and service providers aiming to scale digital transactions.",
    problems: [
      "Complicated checkout processes causing high cart abandonment.",
      "Slow product page load times under spikes in advertising traffic.",
      "Clunky inventory syncing leading to stock count errors.",
      "Poor mobile commerce UX making checkout difficult for smartphone users."
    ],
    solutions: [
      "Frictionless one-click checkout flows engineered to maximize sales.",
      "Blazing fast headless commerce backends that scale infinitely.",
      "Real-time inventory and database sync integrations.",
      "Highly responsive mobile commerce interfaces optimized for conversion."
    ],
    features: [
      "Stripe, PayPal, and multi-currency checkout systems.",
      "Optimized product listings with quick-search filtering.",
      "Automated tax, shipping, and promotional discount calculators.",
      "Real-time dashboard analytics integration.",
      "Secure user account vaults and order tracking interfaces."
    ],
    process: [
      "Discovery: Define product listing structure, inventory integrations, and payment gateways.",
      "Design: Wireframe the buyer journey from homepage grid to completed checkout.",
      "Development: Build a secure shopping platform with clean React states and database endpoints.",
      "Delivery: Perform end-to-end sandbox purchase verification and go live.",
      "Support: Monitor payment logs, optimize cart checkout rates, and perform platform updates."
    ],
    relatedProjectIds: ["market-store"]
  },
  {
    id: "branding-identity",
    name: "Branding & Identity",
    division: "digital",
    shortDesc: "Comprehensive digital-first brand identity kits that make companies stand out in saturated markets.",
    targetAudience: "New companies establishing their presence and existing brands undergoing visual modernization.",
    problems: [
      "Inconsistent visual style across marketing channels hurting brand trust.",
      "Lack of clear positioning, making the brand blend in with competitors.",
      "Absence of design guidelines, making assets difficult for design teams to reproduce."
    ],
    solutions: [
      "A unified, memorable brand system built for digital-first applications.",
      "Deep brand strategy aligning visual choices with target customer profiles.",
      "Complete design libraries and tokens to guarantee consistent brand outputs."
    ],
    features: [
      "Bespoke primary and secondary logo suites.",
      "Harmonious HSL-derived color palettes and typography rules.",
      "Complete design tokens and vector brand assets.",
      "Dynamic brand guidelines documenting visual spacing and voice guidelines.",
      "Digital templates for presentations, newsletters, and social assets."
    ],
    process: [
      "Discovery: Workshop with the client to uncover brand core, vision, and market spacing.",
      "Design: Draft logo concepts, typography pairings, and initial visual boards.",
      "Development: Finalize vector brand structures and build full design libraries.",
      "Delivery: Export and deliver all digital brand guidelines and assets.",
      "Support: Provide advisory support on campaign applications and brand evolution."
    ],
    relatedProjectIds: ["multilac-color-her", "christmas-tree-gen"]
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    division: "digital",
    shortDesc: "End-to-end social channel curation that builds organic engagement and active communities.",
    targetAudience: "B2B and B2C brands looking to build an engaged following without spending operational hours on content creation.",
    problems: [
      "Low engagement metrics and stagnant community follower counts.",
      "Inconsistent posting timelines resulting in low algorithmic visibility.",
      "Uninspired content that fails to capture user attention on feeds."
    ],
    solutions: [
      "Strategic content mapping designed to spark organic shares and discussions.",
      "Structured content calendars guaranteeing consistent multi-channel posts.",
      "High-end custom visual design and engaging, conversion-focused copy."
    ],
    features: [
      "Tailor-made visual layouts and graphic assets.",
      "High-converting copy adapted for diverse social channels.",
      "Interactive social templates (e.g. spinning wheels, count-downs).",
      "Audience engagement monitoring and community moderation.",
      "Monthly performance reports detailing reach, engagement, and click-through metrics."
    ],
    process: [
      "Discovery: Analyze target channels, competitor positioning, and brand voice guidelines.",
      "Design: Create visual post templates and curate initial content grids.",
      "Development: Write engaging captions, build active interactive elements, and schedule calendar.",
      "Delivery: Launch active social management, coordinate campaign days, and post updates.",
      "Support: Moderate comment feeds, adjust calendars based on analytics, and optimize assets."
    ],
    relatedProjectIds: ["goya-spin", "munchee-nekatha"]
  },
  {
    id: "seo-services",
    name: "SEO Services",
    division: "digital",
    shortDesc: "Technical audits, index alignment, and content optimizations to secure top-tier organic rankings.",
    targetAudience: "Businesses aiming to reduce paid advertising costs and establish long-term organic traffic loops.",
    problems: [
      "Low organic impressions despite having high-value digital solutions.",
      "Buggy page structures that search engine crawlers struggle to index.",
      "Unoptimized keywords failing to target active customer search intents."
    ],
    solutions: [
      "Complete site auditing to align structure with search algorithms.",
      "Deep keyword mapping matched directly to user purchasing intents.",
      "Technical layout fixes to index and render pages flawlessly under Google Search Console."
    ],
    features: [
      "Technical SEO auditing (Site speed, metadata, robots.txt, sitemaps).",
      "Comprehensive keyword strategy and competitor analysis.",
      "Content optimization for structure, hierarchy, and keywords.",
      "Local SEO maps optimization and listing management.",
      "Detailed organic growth metrics tracking."
    ],
    process: [
      "Discovery: Audit current crawl performance, index issues, and search trends.",
      "Design: Map target keywords to page URLs and structure content hierarchies.",
      "Development: Fix page speed blockers, metadata structures, and sitemap entries.",
      "Delivery: Register index changes and monitor search engine re-indexing.",
      "Support: Periodic content audits, competitor keyword updates, and performance checks."
    ],
    relatedProjectIds: ["personal-portfolio"]
  },

  // Beulex Labs Services
  {
    id: "custom-software",
    name: "Custom Software Development",
    division: "labs",
    shortDesc: "Bespoke, scalable software platforms designed to optimize unique enterprise workflows.",
    targetAudience: "Organizations bottlenecked by legacy software or needing tailor-made digital pipelines.",
    problems: [
      "Rigid off-the-shelf platforms that fail to adapt to operational workflows.",
      "Disconnected business databases resulting in manual duplicate work.",
      "Inefficient internal processes leaking time and budget."
    ],
    solutions: [
      "Custom-tailored software systems built around your company workflows.",
      "Frictionless database and API integrations connecting all tools.",
      "Automated dashboards providing instant visual reporting."
    ],
    features: [
      "Role-based secure access control (RBAC).",
      "Real-time database replication and backups.",
      "Highly responsive modular desktop/mobile interfaces.",
      "API integrations for standard ERPs, CRMs, and payment systems.",
      "Interactive data visualizations and reporting engines."
    ],
    process: [
      "Discovery: Deep-dive operational workshops to map data paths and user roles.",
      "Design: Model entity-relationship diagrams (ERDs) and structure wireframes.",
      "Development: Code a high-performance database schema and React dashboard UI.",
      "Delivery: Execute testing under staging and deploy securely to cloud instances.",
      "Support: Server performance checks, feature updates, and routine maintenance."
    ],
    relatedProjectIds: ["order-beverage", "mini-utilities"]
  },
  {
    id: "saas-development",
    name: "SaaS Development",
    division: "labs",
    shortDesc: "Rapid building and scaling of multi-tenant SaaS MVPs to prove product-market fit.",
    targetAudience: "Founders, tech-startups, and enterprises building web products with user subscription layers.",
    problems: [
      "Slow, unoptimized development cycles causing missed market timing.",
      "Complex multi-tenant architectures prone to scalability failures.",
      "Complicated billing integration setups for dynamic recurring plans."
    ],
    solutions: [
      "Agile product building tailored to release a robust MVP within weeks.",
      "Secure, scalable multi-tenant architecture designed from day one.",
      "Smooth Stripe billing integrations handling trial and subscription cycles."
    ],
    features: [
      "Robust tenant isolation and multi-factor auth (MFA).",
      "Stripe Customer Portal integrations for easy billing management.",
      "Global scaling infrastructure setup (AWS/Vercel).",
      "Admin user management and system usage analytics dashboard.",
      "Modular, maintainable codebase ready for future internal team handoff."
    ],
    process: [
      "Discovery: Refine MVP feature priority list, monetization model, and user roles.",
      "Design: Wireframe standard onboarding path and user dashboards.",
      "Development: Construct the database, Auth modules, payment webhooks, and UI.",
      "Delivery: Launch closed-beta feedback rounds and deploy to public production.",
      "Support: Monitor system errors, optimize SQL speed, and schedule updates."
    ],
    relatedProjectIds: ["vork-global", "aurum-bookings"]
  },
  {
    id: "mobile-applications",
    name: "Mobile Application Development",
    division: "labs",
    shortDesc: "High-performance iOS and Android applications utilizing cross-platform frameworks.",
    targetAudience: "Businesses looking to increase user engagement through a direct mobile presence.",
    problems: [
      "Sluggish app performance resulting in poor App Store reviews.",
      "High development costs from managing separate iOS and Android teams.",
      "Lack of stable offline data sync when user connections drop."
    ],
    solutions: [
      "Blazing fast cross-platform applications built via Flutter or React Native.",
      "Bespoke mobile UI layouts optimized for thumb reach and fluid animations.",
      "Offline-first databases that sync data automatically when back online."
    ],
    features: [
      "Offline operations using local databases.",
      "Secure biometrics login (FaceID, Fingerprint).",
      "Native device integration (Camera, GPS, Bluetooth).",
      "Highly optimized push notification mechanics.",
      "Automated App Store and Google Play deployment setups."
    ],
    process: [
      "Discovery: Define core mobile interactions, native dependencies, and API requirements.",
      "Design: Mobile-first interface designs mapping touch interactions and state loops.",
      "Development: Implement database API connections, native bindings, and app screen flow.",
      "Delivery: Deploy beta test runs on TestFlight/Play Console and push to public stores.",
      "Support: Crashlytics monitoring, version upgrades, and OS compatibility reviews."
    ],
    relatedProjectIds: ["visage-ai", "pick-her"]
  },
  {
    id: "ai-solutions",
    name: "AI Solutions",
    division: "labs",
    shortDesc: "Tailored AI integration using Large Language Models, agentic structures, and vision analysis.",
    targetAudience: "Forward-thinking enterprises aiming to automate intelligence steps and data classification.",
    problems: [
      "High human effort spent processing and extracting text from complex documents.",
      "Customer support backlogs from simple, repetitive questions.",
      "Difficulty connecting AI models safely to private corporate databases."
    ],
    solutions: [
      "Custom RAG setups querying internal documents accurately.",
      "Intelligent AI agents capable of carrying out complex multi-step analysis.",
      "Seamless integrations with top AI providers (OpenAI, Anthropic, Gemini)."
    ],
    features: [
      "Retrieval-Augmented Generation (RAG) querying internal PDF/text caches.",
      "Image classification and custom computer vision processing.",
      "AI chat assistants custom-tuned to represent company tone.",
      "Automatic data extraction and structured JSON pipeline processing.",
      "Secure enterprise pipelines preventing public model training on private data."
    ],
    process: [
      "Discovery: Map data formats, choose models, and outline output success criteria.",
      "Design: Structure prompt systems, data chunking strategies, and visual chat UIs.",
      "Development: Program server pipelines, vector search nodes, and validation layers.",
      "Delivery: Performance benchmarking, API scaling optimizations, and release.",
      "Support: Monitor token expenses, check responses for hallucinations, and tune models."
    ],
    relatedProjectIds: ["visage-ai", "nutrigpt-companion", "kala-verse", "ponds-skin-scanner", "brand-caption"]
  },
  {
    id: "business-automation",
    name: "Business Automation Systems",
    division: "labs",
    shortDesc: "Workflow automations that link internal databases and software together to execute hands-free.",
    targetAudience: "Operations teams overwhelmed by manual copy-pasting and repetitive notifications.",
    problems: [
      "Repetitive data entry across multiple tools causing error leaks.",
      "Slow communication response loops with prospective clients.",
      "Lack of real-time warning visibility on system errors."
    ],
    solutions: [
      "Connected systems interacting via API hooks and schedulers.",
      "Instant, context-aware notification loops sending data directly to Teams/Slack.",
      "Reliable visual dashboards highlighting system status at a glance."
    ],
    features: [
      "Custom webhook builders and scheduler handlers.",
      "Automatic PDF report creation and client email triggers.",
      "Real-time integrations between CRM, billing systems, and project tools.",
      "Detailed process failure logs and alerting pipelines.",
      "Internal Slack and Microsoft Teams notification systems."
    ],
    process: [
      "Discovery: Audit current business workflows and list target APIs to bridge.",
      "Design: Draft step-by-step logic flows detailing conditions and data formats.",
      "Development: Code visual pipelines, automated triggers, and log captures.",
      "Delivery: Execute controlled testing, run sandboxed automations, and go live.",
      "Support: Periodically audit API endpoint deprecations and adjust data models."
    ],
    relatedProjectIds: ["order-beverage"]
  }
];
