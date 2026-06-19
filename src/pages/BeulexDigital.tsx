import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PenTool, Layout, Smartphone, Share2, Search, Target } from "lucide-react";
import PackageModal from "../components/PackageModal";

const digitalServices = [
  {
    id: "website-development",
    icon: Layout,
    title: "Website Development",
    description: "High-performance, responsive websites built to convert visitors into customers.",
    benefits: ["SEO Optimized", "Lightning Fast", "Mobile First", "Custom Design"],
  },
  {
    id: "e-commerce-development",
    icon: Smartphone,
    title: "E-Commerce Development",
    description: "Scalable online stores that provide seamless shopping experiences.",
    benefits: ["Secure Payments", "Inventory Management", "Conversion Focused", "User Friendly"],
  },
  {
    id: "branding-identity",
    icon: PenTool,
    title: "Branding & Identity",
    description: "Memorable brand identities that resonate with your target audience.",
    benefits: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Strategy"],
  },
  {
    id: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic content creation and community management to grow your brand.",
    benefits: ["Audience Growth", "Brand Awareness", "Engagement", "Analytics Tracking"],
  },
  {
    id: "seo-services",
    icon: Search,
    title: "SEO Services",
    description: "Data-driven optimization to improve visibility and drive organic traffic.",
    benefits: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"],
  },
];

const digitalPackages = [
  {
    name: "Starter Package",
    description: "Perfect for new businesses looking to establish their digital presence.",
    features: [
      "Custom 5-page Website",
      "Basic SEO Setup",
      "2 Social Media Profiles Setup",
      "Brand Identity Basics",
      "Monthly Performance Report"
    ]
  },
  {
    name: "Growth Package",
    description: "Ideal for growing companies ready to scale their digital marketing.",
    features: [
      "Custom 10-page Website / E-commerce",
      "Advanced SEO Optimization",
      "Social Media Management (3 platforms)",
      "Full Brand Guidelines",
      "Bi-weekly Strategy Calls",
      "Content Creation (4 posts/mo)"
    ]
  },
  {
    name: "Premium Package",
    description: "Comprehensive digital domination for established enterprises.",
    features: [
      "Unlimited Pages / Complex E-commerce",
      "Enterprise SEO & Technical Audits",
      "Full-scale Social Media & Ad Management",
      "Complete Rebranding & Assets",
      "Weekly Strategy & Analytics Calls",
      "Dedicated Account Manager",
      "Priority 24/7 Support"
    ]
  }
];

export default function BeulexDigital() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen grid-bg relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block p-4 rounded-2xl bg-blue-100/60 text-blue-600 mb-6">
            <Target className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-none">
            Beulex Digital
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Data-driven marketing campaigns and stunning web experiences engineered to accelerate organic business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsPackagesOpen(true)}
              className="bg-accent-magenta text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-md flex items-center"
            >
              View Packages <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link 
              to="/contact?service=Beulex Digital Growth"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Our Digital Services</h2>
          <p className="text-lg text-slate-600">Everything you need to build trust and acquire customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalServices.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100/30">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-8">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">Key Features</div>
                {service.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-2"></div>
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="space-y-3 mt-auto">
                <Link 
                  to={`/services/digital/${service.id}`}
                  className="w-full py-3.5 rounded-xl bg-slate-950 text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all text-center block shadow-sm"
                >
                  Explore Service Details
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
          serviceName="Beulex Digital" 
          packages={digitalPackages} 
          onClose={() => setIsPackagesOpen(false)} 
        />
      )}
    </div>
  );
}
