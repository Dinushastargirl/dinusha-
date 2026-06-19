import { useState } from "react";
import { ArrowRight, PenTool, Layout, Smartphone, Share2, Megaphone, Search } from "lucide-react";
import PackageModal from "../components/PackageModal";
import LeadCaptureForm from "../components/LeadCaptureForm";

const digitalServices = [
  {
    icon: Layout,
    title: "Website Development",
    description: "High-performance, responsive websites built to convert visitors into customers.",
    benefits: ["SEO Optimized", "Lightning Fast", "Mobile First", "Custom Design"],
  },
  {
    icon: Smartphone,
    title: "E-Commerce Development",
    description: "Scalable online stores that provide seamless shopping experiences.",
    benefits: ["Secure Payments", "Inventory Management", "Conversion Focused", "User Friendly"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic content creation and community management to grow your brand.",
    benefits: ["Audience Growth", "Brand Awareness", "Engagement", "Analytics Tracking"],
  },
  {
    icon: PenTool,
    title: "Branding & Design",
    description: "Memorable brand identities that resonate with your target audience.",
    benefits: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Strategy"],
  },
  {
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
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block p-4 rounded-2xl bg-blue-100 text-blue-600 mb-6">
            <PenTool className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Beulex Digital
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Data-driven marketing and stunning web experiences engineered to accelerate your digital growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsPackagesOpen(true)}
              className="bg-accent-magenta text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg flex items-center"
            >
              View Packages <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
            >
              Request Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Digital Services</h2>
          <p className="text-lg text-slate-600">Everything you need to dominate your market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalServices.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="space-y-2 mb-8">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Benefits</div>
                {service.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-magenta mr-2"></div>
                    {benefit}
                  </div>
                ))}
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
          serviceName="Beulex Digital" 
          packages={digitalPackages} 
          onClose={() => setIsPackagesOpen(false)} 
        />
      )}
      
      {isFormOpen && (
        <LeadCaptureForm 
          selectedService="Beulex Digital" 
          onClose={() => setIsFormOpen(false)} 
        />
      )}
    </div>
  );
}
