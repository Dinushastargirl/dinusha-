import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, FileText, Layers, Globe, TrendingUp, Sparkles, Check } from "lucide-react";
import PackageModal from "../components/PackageModal";

const startupServices = [
  {
    id: "startup-launch-package",
    icon: Rocket,
    title: "Startup Launch Package",
    description: "An all-in-one package designed to get your business off the ground with a complete brand and web presence.",
    benefits: ["Brand Assets Kit", "Launch Landing Page", "Domain & Email Setup", "Social Media Profiles"],
  },
  {
    id: "business-proposal-development",
    icon: FileText,
    title: "Business Proposal Development",
    description: "High-impact proposal layouts and investor decks structured to secure funding and business partners.",
    benefits: ["Market Research Mapping", "Financial Projection Visuals", "Pitch Deck Design", "Value Prop Structuring"],
  },
  {
    id: "mvp-planning",
    icon: Layers,
    title: "MVP Planning",
    description: "Strategic scope definition and user-journey wireframing to build your core product efficiently.",
    benefits: ["Feature Prioritization", "User Flow Mapping", "Tech Stack Architecture", "Cost & Timeline Roadmaps"],
  },
  {
    id: "digital-presence-setup",
    icon: Globe,
    title: "Digital Presence Setup",
    description: "Complete foundational setup of your company's web platforms, local SEO, and essential business tools.",
    benefits: ["SEO & Maps Listing", "Google Analytics & Console", "CRM & Lead Capture", "Professional Email Workspace"],
  },
  {
    id: "startup-growth-strategy",
    icon: TrendingUp,
    title: "Startup Growth Strategy",
    description: "Data-driven marketing blueprints and scaling models designed to acquire your first 1,000 customers.",
    benefits: ["Acquisition Channel Audit", "Content Funnel Strategy", "Performance Ad Planning", "Retention Loop Mechanics"],
  },
];

const startupPackages = [
  {
    name: "Launch Package",
    description: "Everything a new startup needs to introduce itself to the market.",
    features: [
      "Custom Landing Page",
      "Bespoke Primary Logo Suite",
      "Google Workspace & Domains Integration",
      "Social Media Setup (2 channels)",
      "Foundational SEO Configuration"
    ]
  },
  {
    name: "Growth & Pitch Package",
    description: "Designed for startups ready to present to partners and investors.",
    features: [
      "5-Page Premium Pitch Website",
      "Investor Pitch Deck Design (12 Slides)",
      "Business Proposal Template",
      "Detailed MVP Roadmap & Architecture",
      "Financial Graph Design & Visuals"
    ]
  },
  {
    name: "Venture Elite Package",
    description: "Comprehensive brand development, MVP prototyping, and marketing strategies.",
    features: [
      "Full Web App / MVP (Core Features)",
      "Complete Brand Identity Suite",
      "Pitch Deck & Proposal Development",
      "Full Digital Presence & Analytics",
      "Launch Marketing Playbook",
      "Dedicated Project Manager"
    ]
  }
];

export default function BeulexStartup() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen grid-bg relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent-green/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-emerald-950 text-white border-b border-emerald-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block p-4 rounded-2xl bg-emerald-500/20 text-accent-green mb-6 border border-emerald-500/10">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-none">
            Beulex Startup
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Incubation, MVP development, and brand launching blueprints engineered for early-stage founders and high-growth ventures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsPackagesOpen(true)}
              className="bg-accent-green text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-md flex items-center"
            >
              View Packages <ArrowRight className="ml-2 w-5 h-5 text-slate-950" />
            </button>
            <Link 
              to="/contact?service=Beulex Startup Acceleration"
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm flex items-center"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Startup Launch Services</h2>
          <p className="text-lg text-slate-600">The execution pipelines required to transform abstract business concepts into validated operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startupServices.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100/30">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-8">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">Key Features</div>
                {service.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green mr-2"></div>
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="space-y-3 mt-auto">
                <Link 
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full py-3.5 rounded-xl bg-slate-950 text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all text-center block shadow-sm"
                >
                  Request Service Info
                </Link>
                <button 
                  onClick={() => setIsPackagesOpen(true)}
                  className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-slate-300 hover:text-slate-900 transition-colors text-xs uppercase tracking-wider"
                >
                  View Startup Packages
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Modal */}
      {isPackagesOpen && (
        <PackageModal 
          serviceName="Beulex Startup" 
          packages={startupPackages} 
          onClose={() => setIsPackagesOpen(false)} 
        />
      )}
    </div>
  );
}
