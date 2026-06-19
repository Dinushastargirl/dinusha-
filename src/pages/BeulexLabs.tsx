import { useState } from "react";
import { ArrowRight, Code2, Cpu, Smartphone, Database, Server } from "lucide-react";
import PackageModal from "../components/PackageModal";
import LeadCaptureForm from "../components/LeadCaptureForm";

const labServices = [
  {
    icon: Code2,
    title: "Custom Software Development",
    overview: "Bespoke software solutions tailored to your unique business processes.",
    features: ["Requirement Analysis", "Agile Development", "Quality Assurance", "Ongoing Support"],
    technologies: "React, Node.js, Python, PostgreSQL",
    industries: "Finance, Healthcare, Logistics"
  },
  {
    icon: Server,
    title: "SaaS Development",
    overview: "Scalable and secure multi-tenant architectures for your SaaS product.",
    features: ["Multi-tenancy", "Subscription Billing", "Scalable Infrastructure", "API Integration"],
    technologies: "AWS, Next.js, Stripe, Docker",
    industries: "B2B Tech, EdTech, Real Estate"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    overview: "High-performance native and cross-platform mobile experiences.",
    features: ["iOS & Android", "Offline Capabilities", "Push Notifications", "App Store Optimization"],
    technologies: "React Native, Flutter, Swift, Kotlin",
    industries: "Retail, Fitness, Delivery"
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    overview: "Intelligent systems to automate processes and generate insights.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    technologies: "TensorFlow, PyTorch, OpenAI, LangChain",
    industries: "Healthcare, Finance, E-commerce"
  },
  {
    icon: Database,
    title: "Business Automation",
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
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block p-4 rounded-2xl bg-indigo-500/20 text-indigo-400 mb-6">
            <Code2 className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Beulex Labs
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Cutting-edge software, SaaS platforms, and enterprise AI solutions engineered for scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsPackagesOpen(true)}
              className="bg-accent-magenta text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-accent-magenta/20 flex items-center"
            >
              View Packages <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Request Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Engineering Capabilities</h2>
          <p className="text-lg text-slate-600">Robust technical solutions for complex business problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labServices.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.overview}</p>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Features</div>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {service.features.map((f, i) => <li key={i} className="flex items-center"><div className="w-1 h-1 bg-accent-magenta rounded-full mr-2"></div>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Technologies</div>
                  <p className="text-sm text-slate-600">{service.technologies}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Industries Served</div>
                  <p className="text-sm text-slate-600">{service.industries}</p>
                </div>
              </div>

              <button 
                onClick={() => setIsPackagesOpen(true)}
                className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-900 font-bold hover:border-accent-magenta hover:text-accent-magenta transition-colors mt-auto"
              >
                View Packages
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modals */}
      {isPackagesOpen && (
        <PackageModal 
          serviceName="Beulex Labs" 
          packages={labPackages} 
          onClose={() => setIsPackagesOpen(false)} 
        />
      )}
      
      {isFormOpen && (
        <LeadCaptureForm 
          selectedService="Beulex Labs" 
          onClose={() => setIsFormOpen(false)} 
        />
      )}
    </div>
  );
}
