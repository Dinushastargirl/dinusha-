import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { ArrowLeft, ArrowRight, HelpCircle, CheckCircle2, ChevronRight, Settings, Sparkles, BookOpen } from "lucide-react";

export default function ServiceDetail() {
  const { division, serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId && s.division === division);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The service page you are looking for does not exist.</p>
          <Link to="/" className="text-accent-magenta flex items-center gap-2 justify-center hover:underline">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get related case studies dynamically
  const relatedProjects = projects.filter((p) => service.relatedProjectIds.includes(p.id));

  return (
    <div className="pt-32 pb-24 bg-background grid-bg relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/10 w-96 h-96 bg-accent-magenta/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link 
            to={`/services/${division}`}
            className="text-slate-500 hover:text-slate-900 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Beulex {division === "digital" ? "Digital" : "Labs"}
          </Link>
        </div>

        {/* 1. Hero Section */}
        <div className="border border-slate-200/60 rounded-[40px] bg-white p-8 md:p-16 shadow-sm mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-slate-50 rounded-bl-full flex items-center justify-center border-l border-b border-slate-100">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              {division}
            </span>
          </div>
          
          <div className="max-w-3xl">
            <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border ${
              division === "digital"
                ? "bg-blue-50 text-blue-600 border-blue-200"
                : "bg-teal-50 text-teal-600 border-teal-200"
            }`}>
              Beulex {division === "digital" ? "Digital" : "Labs"} Division
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-none"
            >
              {service.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8"
            >
              {service.shortDesc}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 inline-flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-mono text-xs">
                🎯
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Target Audience</div>
                <div className="text-sm font-bold text-slate-700 leading-none">{service.targetAudience}</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. Problem Section & 3. Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          
          {/* Problem Block */}
          <div className="border border-slate-200/60 rounded-[32px] bg-white p-8 md:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mb-6">
                <HelpCircle size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Key Business Pain Points</h2>
              <ul className="space-y-4">
                {service.problems.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                    <p className="text-slate-600 text-base leading-relaxed">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 font-mono">
              UNRESOLVED BOTTLENECKSISE
            </div>
          </div>

          {/* Solution Block */}
          <div className="border border-slate-200/60 rounded-[32px] bg-slate-900 p-8 md:p-12 shadow-md flex flex-col justify-between text-white">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-accent-cyan mb-6">
                <Sparkles size={24} />
              </div>
              <h2 className="text-2xl font-display font-bold text-white mb-6">How Beulex Solves This</h2>
              <ul className="space-y-4">
                {service.solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-cyan mt-1 shrink-0" size={18} />
                    <p className="text-slate-300 text-base leading-relaxed">{s}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-500 font-mono">
              THE BEULEX BLUEPRINT
            </div>
          </div>

        </div>

        {/* 4. Features & Benefits Section */}
        <div className="border border-slate-200/60 rounded-[32px] bg-white p-8 md:p-12 shadow-sm mb-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Features & Benefits</h2>
            <p className="text-slate-500 text-sm">Our structural parameters guarantee fast performance and reliable deployment scales.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/50 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-accent-magenta/5 border border-accent-magenta/10 flex items-center justify-center text-accent-magenta mb-4 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <p className="text-slate-800 font-semibold text-base leading-snug mb-2">{f.split(":")[0]}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.split(":")[1] || "Tailored configuration built to satisfy campaign goals."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Process Section */}
        <div className="border border-slate-200/60 rounded-[32px] bg-white p-8 md:p-12 shadow-sm mb-16 relative overflow-hidden">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-slate-500 text-sm">From initial ideation to long-term database support, our step-by-step pipeline guarantees delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {service.process.map((step, idx) => {
              const name = step.split(":")[0];
              const desc = step.split(":")[1];
              return (
                <div key={idx} className="relative group">
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-7 left-full w-full h-[1px] bg-slate-200 z-0" />
                  )}
                  <div className="relative z-10 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 font-display font-bold text-lg mb-4 group-hover:border-accent-cyan group-hover:text-accent-cyan transition-colors">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 leading-none">{name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc || "Operational steps tailored to align project details."}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. Case Study Preview Section */}
        {relatedProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Proven Track Record</h2>
                <p className="text-slate-500 text-sm">Past solutions showcasing our capabilities in action.</p>
              </div>
              <Link 
                to="/portfolio"
                className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-accent-cyan inline-flex items-center gap-1 transition-colors"
              >
                View Full Portfolio
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.slice(0, 3).map((project) => (
                <Link 
                  key={project.id} 
                  to={`/projects/${project.id}`}
                  className="group block border border-slate-200/60 rounded-3xl overflow-hidden bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300"
                >
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="px-3 pb-3">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase">{project.category}</span>
                    <h3 className="font-bold text-slate-900 mt-1 mb-2 group-hover:text-accent-cyan transition-colors line-clamp-1">{project.title}</h3>
                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 7. CTA Section */}
        <div className="border border-slate-200/60 rounded-[40px] bg-slate-950 p-8 md:p-16 shadow-xl relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-accent-cyan text-xs font-mono font-bold tracking-widest uppercase mb-4 block">Get Started Today</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Partner with Beulex to build high-performance {service.name} solutions. Let's outline a detailed, actionable proposal tailored specifically to your objectives.
            </p>
            <Link
              to={`/contact?service=${encodeURIComponent(service.name)}`}
              className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-md"
            >
              Request Proposal
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
