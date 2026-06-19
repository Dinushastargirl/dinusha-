import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ventures, Venture } from "../data/ventures";
import { Filter, ArrowRight, ShieldCheck, Flame, Cpu, Code } from "lucide-react";

export default function Ventures() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const statuses = ["All", "Active SaaS", "AI Experiment", "Concept Rebuild", "Prototype"];

  const filteredVentures = ventures.filter((v) => {
    if (activeFilter === "All") return true;
    return v.status === activeFilter;
  });

  const getStatusStyle = (status: Venture["status"]) => {
    switch (status) {
      case "Active SaaS":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "AI Experiment":
        return "bg-purple-50 text-purple-600 border-purple-200";
      case "Concept Rebuild":
        return "bg-blue-50 text-blue-600 border-blue-200";
      case "Prototype":
        return "bg-amber-50 text-amber-600 border-amber-200";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  const getStatusIcon = (status: Venture["status"]) => {
    switch (status) {
      case "Active SaaS":
        return <ShieldCheck size={12} />;
      case "AI Experiment":
        return <Cpu size={12} />;
      case "Concept Rebuild":
        return <Code size={12} />;
      case "Prototype":
        return <Flame size={12} />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-background grid-bg relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/10 w-96 h-96 bg-accent-magenta/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">Beulex Ventures</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
          >
            Incubating the <span className="text-accent-cyan">Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We don't just build software for clients — we design and launch our own internal SaaS platforms, 
            artificial intelligence tools, and conceptual rebuilds. This is our playground of digital innovation.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 relative">
          <div className="flex items-center gap-2 text-slate-400 mr-2">
            <Filter size={16} />
            <span className="text-[10px] font-mono uppercase tracking-widest">Filter by status:</span>
          </div>
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${
                activeFilter === status
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Ventures Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredVentures.map((venture) => (
              <motion.div
                key={venture.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="border border-slate-200/60 rounded-[32px] overflow-hidden bg-white shadow-sm flex flex-col justify-between group hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  
                  {/* Card Header (Title & Status) */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-accent-cyan transition-colors leading-tight">
                        {venture.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1 leading-snug font-medium italic">
                        {venture.tagline}
                      </p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shrink-0 ${getStatusStyle(venture.status)}`}>
                      {getStatusIcon(venture.status)}
                      {venture.status}
                    </span>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {venture.description}
                  </p>

                  {/* Problem & Solution Blocks */}
                  <div className="space-y-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div>
                      <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">The Problem</div>
                      <p className="text-slate-600 text-xs leading-relaxed">{venture.problemSolved}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-accent-cyan uppercase tracking-widest mb-1">Our Solution</div>
                      <p className="text-slate-700 text-xs leading-relaxed font-semibold">{venture.solutionDetails}</p>
                    </div>
                  </div>

                  {/* Expected Impact Block */}
                  <div className="flex items-center gap-3 p-4 bg-slate-900 text-white rounded-xl mb-6">
                    <span className="text-xl">📈</span>
                    <div>
                      <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Expected Impact</div>
                      <div className="text-xs font-bold text-slate-100">{venture.expectedImpact}</div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {venture.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-slate-100 border border-slate-200/50 rounded-md text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card CTA */}
                <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Interested in this architecture?</span>
                  <Link
                    to={`/contact?service=Venture Inquiry: ${encodeURIComponent(venture.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-accent-cyan transition-colors"
                  >
                    Inquire About Product
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
