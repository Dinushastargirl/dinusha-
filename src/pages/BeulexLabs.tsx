import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, Smartphone, Database, Server } from "lucide-react";
import PackageModal from "../components/PackageModal";

const labServices = [
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    overview: "Bespoke software solutions tailored to your unique business processes.",
    features: ["Requirement Analysis", "Agile Development", "Quality Assurance", "Ongoing Support"],
    technologies: "React, Node.js, Python, PostgreSQL",
    industries: "Finance, Healthcare, Logistics"
  },
  {
    id: "saas-development",
    icon: Server,
    title: "SaaS Development",
    overview: "Scalable and secure multi-tenant architectures for your SaaS product.",
    features: ["Multi-tenancy", "Subscription Billing", "Scalable Infrastructure", "API Integration"],
    technologies: "AWS, Next.js, Stripe, Docker",
    industries: "B2B Tech, EdTech, Real Estate"
  },
  {
    id: "mobile-applications",
    icon: Smartphone,
    title: "Mobile Applications",
    overview: "High-performance native and cross-platform mobile experiences.",
    features: ["iOS & Android", "Offline Capabilities", "Push Notifications", "App Store Optimization"],
    technologies: "React Native, Flutter, Swift, Kotlin",
    industries: "Retail, Fitness, Delivery"
  },
  {
    id: "ai-solutions",
    icon: Cpu,
    title: "AI Solutions",
    overview: "Intelligent systems to automate processes and generate insights.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    technologies: "TensorFlow, PyTorch, OpenAI, LangChain",
    industries: "Healthcare, Finance, E-commerce"
  },
  {
    id: "business-automation",
    icon: Database,
    title: "Business Automation Systems",
    overview: "Streamline operations and eliminate manual tasks with smart automation.",
    features: ["Workflow Automation", "Data Integration", "Custom Dashboards", "RPA"],
    technologies: "Make, Zapier, Python, Custom Scripts",
    industries: "Manufacturing, HR, Operations"
  }
];

const labPackages = [
  {
    name: "MVP Package",
    description: "Launch your core product quickly to validate your idea in the market.",
    features: [
      "Core Feature Development",
      "Essential UI/UX Design",
      "Basic Database Setup",
      "Standard Security Protocols",
      "1 Month Post-Launch Support"
    ]
  },
  {
    name: "Growth Package",
    description: "Scale your existing platform with robust architecture and new features.",
    features: [
      "Advanced Feature Development",
      "Scalable Cloud Infrastructure",
      "Third-party API Integrations",
      "Advanced Security & Compliance",
      "Performance Optimization",
      "3 Months Post-Launch Support"
    ]
  },
  {
    name: "Enterprise Package",
    description: "End-to-end enterprise-grade solutions with dedicated teams.",
    features: [
      "Complex Custom Architecture",
      "Enterprise Grade Security (SOC2 ready)",
      "High Availability Setup",
      "Dedicated Project Manager",
      "Custom AI Integrations",
      "24/7 SLA Support",
      "Annual Maintenance Contract"
    ]
  }
];

export default function BeulexLabs() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen grid-bg relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block p-4 rounded-2xl bg-indigo-500/20 text-indigo-400 mb-6 border border-indigo-500/10">
            <Code2 className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-none">
            Beulex Labs
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Cutting-edge custom software, multi-tenant SaaS platforms, and enterprise AI integrations engineered for scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsPackagesOpen(true)}
              className="bg-accent-cyan text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-md flex items-center"
            >
              View Packages <ArrowRight className="ml-2 w-5 h-5 text-slate-950" />
            </button>
            <Link 
              to="/contact?service=Beulex Labs Engineering"
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
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Engineering Capabilities</h2>
          <p className="text-lg text-slate-600">Robust technical systems built to solve complex operational problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labServices.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100/30">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.overview}</p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">Key Features</div>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-2"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">Technologies</div>
                  <p className="text-sm text-slate-700 font-semibold">{service.technologies}</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">Target Industries</div>
                  <p className="text-xs text-slate-500">{service.industries}</p>
                </div>
              </div>

              <div className="space-y-3 mt-auto">
                <Link 
                  to={`/services/labs/${service.id}`}
                  className="w-full py-3.5 rounded-xl bg-slate-950 text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all text-center block shadow-sm"
                >
                  Explore Capability Details
                </Link>
                <button 
                  onClick={() => setIsPackagesOpen(true)}
                  className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-slate-300 hover:text-slate-900 transition-colors text-xs uppercase tracking-wider"
                >
                  View Group Packages
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Modal */}
      {isPackagesOpen && (
        <PackageModal 
          serviceName="Beulex Labs" 
          packages={labPackages} 
          onClose={() => setIsPackagesOpen(false)} 
        />
      )}
    </div>
  );
}
