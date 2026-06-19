export interface Venture {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: "Active SaaS" | "AI Experiment" | "Concept Rebuild" | "Prototype";
  problemSolved: string;
  solutionDetails: string;
  expectedImpact: string;
  techStack: string[];
  image: string;
}

export const ventures: Venture[] = [
  {
    id: "beulex-crm",
    title: "Beulex CRM Lite",
    tagline: "Privacy-first lightweight CRM for digital freelancers and studios.",
    description: "A fast, local-first CRM featuring drag-and-drop pipeline stages and localized SQLite storage. Built to replace heavy, expensive sales platforms for small teams.",
    status: "Active SaaS",
    problemSolved: "Traditional CRMs are complex, slow, and store client data in centralized public clouds, causing privacy and cost overhead for boutique studios.",
    solutionDetails: "A light, clean sales board that compiles client logs locally. Uses SQLite for zero latency, allowing teams to manage prospects, timeline dates, and proposals in one dashboard.",
    expectedImpact: "Saves up to $150 per user monthly in licensing fees and cuts lead logging time by 60%.",
    techStack: ["React", "Express", "SQLite", "Tailwind CSS"],
    image: "https://picsum.photos/seed/crm/800/600"
  },
  {
    id: "kala-vision",
    title: "Kala Vision Shelf Analyzer",
    tagline: "AI compliance auditor for retail product placement using computer vision.",
    description: "An experimental neural network pipeline that processes in-store security camera frames to detect out-of-stock items and compliance mistakes on shelves in real-time.",
    status: "AI Experiment",
    problemSolved: "Retail brands lose millions annually due to stock outs and incorrect shelf positioning that goes unnoticed by staff for hours.",
    solutionDetails: "An object detection module trained to recognize specific packaging designs. It flags empty hooks or misaligned items and triggers instant notifications to store staff.",
    expectedImpact: "Ensures 98% shelf compliance and increases overall sales velocity by preventing empty-shelf scenarios.",
    techStack: ["Python", "PyTorch", "OpenCV", "FastAPI", "React"],
    image: "https://picsum.photos/seed/shelf/800/600"
  },
  {
    id: "pace-headless",
    title: "Pace Headless commerce bridge",
    tagline: "Next-gen Shopify API adapter compiling catalog queries in under 50ms.",
    description: "A developer tool designed to bridge old monolith e-commerce systems to high-speed Next.js frontends without rebuilding the billing databases.",
    status: "Concept Rebuild",
    problemSolved: "Migrating legacy online stores to modern frontend platforms usually requires complex, risky, and expensive backend overhauls.",
    solutionDetails: "Exposes a standardized schema query wrapper that maps old databases into modular React components, preserving orders and inventory systems intact.",
    expectedImpact: "Boosts e-commerce page speeds by 300% and reduces rebuild migrations from months to days.",
    techStack: ["Next.js", "GraphQL", "TypeScript", "Shopify API"],
    image: "https://picsum.photos/seed/headless/800/600"
  },
  {
    id: "agent-desk",
    title: "Agent Desk Support Hub",
    tagline: "Collaborative workspaces for AI agents and support teams.",
    description: "A customer ticket workspace coordinating multi-agent loops. Support agents can prompt research agents, translation modules, and auto-drafting tools side-by-side.",
    status: "Prototype",
    problemSolved: "Support teams struggle to research complex technical tickets under pressure, leading to long customer wait times and high churn.",
    solutionDetails: "Orchestrates background tasks where agents retrieve text fragments from technical manuals (RAG) and generate response alternatives for agents to review.",
    expectedImpact: "Reduces ticket resolution loops from 3 hours to under 3 minutes with 90% human approval on initial drafts.",
    techStack: ["Node.js", "WebSockets", "Gemini API", "React", "Tailwind CSS"],
    image: "https://picsum.photos/seed/desk/800/600"
  }
];
