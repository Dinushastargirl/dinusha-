import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowRight, Filter, Beaker } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, Project } from "../data/projects";
import { useState } from "react";

export default function Portfolio() {
  const [activeDivision, setActiveDivision] = useState<"All" | "Digital" | "Labs">("All");
  const [subFilter, setSubFilter] = useState<string>("All");

  // Map categories to divisions
  const getProjectDivision = (project: Project): "Digital" | "Labs" => {
    if (
      project.category === "Website" || 
      project.category === "Branding" || 
      project.category === "Marketing" || 
      project.category === "SEO" ||
      project.category === "Creative"
    ) {
      return "Digital";
    }
    return "Labs";
  };

  // Filter projects by division and sub-filters
  const filteredProjects = projects.filter((project) => {
    const division = getProjectDivision(project);
    
    // Division filter
    if (activeDivision !== "All" && division !== activeDivision) {
      return false;
    }

    // Sub-filters mapping
    if (subFilter === "All") return true;
    if (subFilter === "Websites") return project.category === "Website";
    if (subFilter === "Branding Projects") return project.category === "Branding";
    if (subFilter === "Marketing Campaigns") return project.category === "Marketing";
    if (subFilter === "SEO Projects") return project.category === "SEO";
    if (subFilter === "Software Systems") return project.category === "Software";
    if (subFilter === "SaaS Products") return project.category === "SaaS";
    if (subFilter === "Mobile Applications") return project.category === "Mobile";
    if (subFilter === "AI Solutions") return project.category === "AI";
    if (subFilter === "Business Automation Systems") return project.category === "Automation";

    return true;
  });

  // Get available sub-filters based on division
  const getSubFilters = () => {
    if (activeDivision === "All") return ["All"];
    if (activeDivision === "Digital") {
      return ["All", "Websites", "Branding Projects", "Marketing Campaigns", "SEO Projects"];
    }
    if (activeDivision === "Labs") {
      return ["All", "Software Systems", "SaaS Products", "Mobile Applications", "AI Solutions", "Business Automation Systems"];
    }
    return ["All"];
  };

  const handleDivisionChange = (division: "All" | "Digital" | "Labs") => {
    setActiveDivision(division);
    setSubFilter("All");
  };

  // Human readable category badge
  const getCategoryLabel = (category: Project["category"]) => {
    switch (category) {
      case "Website": return "Website Project";
      case "Branding": return "Branding Project";
      case "Marketing": return "Marketing Campaign";
      case "SEO": return "SEO Project";
      case "Software": return "Software System";
      case "SaaS": return "SaaS Product";
      case "Mobile": return "Mobile Application";
      case "AI": return "AI Solution";
      case "Automation": return "Business Automation";
      default: return category;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-background grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-accent-magenta/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">Beulex Group Portfolio</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
          >
            Our Featured <span className="text-accent-cyan">Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Explore our solutions across our two primary divisions: 
            <span className="text-slate-900 font-semibold"> Beulex Digital</span> (growth, marketing, and web campaigns) and 
            <span className="text-slate-900 font-semibold"> Beulex Labs</span> (custom software, mobile apps, and AI integrations).
          </motion.p>
        </div>

        {/* Division Selector Tab */}
        <div className="flex justify-center mb-8 relative">
          <div className="bg-slate-50 p-1.5 rounded-full border border-slate-200 flex gap-1">
            {(["All", "Digital", "Labs"] as const).map((div) => (
              <button
                key={div}
                onClick={() => handleDivisionChange(div)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all relative ${
                  activeDivision === div
                    ? "bg-accent-magenta text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {div === "All" ? "All Divisions" : div === "Digital" ? "Beulex Digital" : "Beulex Labs"}
              </button>
            ))}
          </div>
        </div>

        {/* Sub Filter Bar */}
        {activeDivision !== "All" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16 relative"
          >
            <div className="flex items-center gap-2 text-slate-400 mr-2">
              <Filter size={14} />
              <span className="text-[11px] font-mono uppercase tracking-widest">Filter By:</span>
            </div>
            {getSubFilters().map((sub) => (
              <button
                key={sub}
                onClick={() => setSubFilter(sub)}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  subFilter === sub
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {sub}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 relative"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const division = getProjectDivision(project);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <Link to={project.id === "under-development" ? "#" : `/projects/${project.id}`}>
                      <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-6 bg-slate-50 border border-slate-200/60 p-2 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-slate-300/80">
                        <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          
                          {/* Hover Overlay */}
                          {project.id === "under-development" ? (
                            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                              <div className="px-6 py-3 bg-slate-100 border border-slate-200 text-slate-900 rounded-full font-bold flex items-center gap-2 text-sm">
                                <Beaker className="text-accent-cyan" size={16} />
                                Under Development
                              </div>
                            </div>
                          ) : (
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                View Case Study
                                <ArrowRight size={16} />
                              </div>
                            </div>
                          )}

                          {/* Division Badge */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border ${
                              division === "Digital"
                                ? "bg-blue-500 text-white border-blue-600/20"
                                : "bg-teal-500 text-white border-teal-600/20"
                            }`}>
                              Beulex {division}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200/50 text-[10px] font-mono text-slate-500 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {getCategoryLabel(project.category)}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent-cyan transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center mt-auto">
                    {project.id !== "under-development" && (
                      <Link 
                        to={`/projects/${project.id}`}
                        className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all"
                      >
                        View Case Study
                      </Link>
                    )}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-accent-magenta text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        Live Preview
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all ml-auto"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[32px] border border-slate-200 mt-8">
            <p className="text-slate-500 font-medium">No projects found matching the selected filters.</p>
          </div>
        )}

        {/* Footer banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-10 md:p-14 rounded-[40px] bg-slate-50 border border-slate-200 relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-accent-cyan/5 rounded-full filter blur-2xl" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-3xl font-display font-bold mb-6 text-slate-900">Have a Custom Project in Mind?</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Whether you need high-conversion digital growth tools or custom AI-powered software, our teams at Digital and Labs are ready to build it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-magenta text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-all shadow-md"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
