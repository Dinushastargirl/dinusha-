import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight, Filter, Beaker } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Web", "App", "Lab", "Design"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Our <span className="text-accent-magenta">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-3xl mx-auto mb-12"
          >
            Every project below was built to solve a real problem, fulfill an urgent campaign requirement, 
            or deliver a fast interactive solution inside my workplace. I often had very little time, 
            unclear briefs, or zero prior experience with the required technology — but each time, 
            I stepped up, learned fast, and delivered.
            <br /><br />
            <span className="text-white font-medium">
              These projects represent my growth from content creator → problem-solving developer.
            </span>
          </motion.p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 text-zinc-500 mr-4">
              <Filter size={18} />
              <span className="text-sm font-mono uppercase tracking-widest">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? "bg-accent-magenta text-white shadow-lg shadow-accent-magenta/20" 
                    : "glass text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={project.id === "under-development" ? "#" : `/projects/${project.id}`}>
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 glass border-white/5 p-2">
                  <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {project.id === "under-development" ? (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <div className="px-8 py-4 glass border-white/20 text-white rounded-full font-bold flex items-center gap-2">
                          <Beaker className="text-accent-cyan" size={20} />
                          Under Development
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-8 py-4 bg-white text-background rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Case Study
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-accent-magenta transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mb-6">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="px-6 py-2 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                    >
                      View Case Study
                    </Link>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full bg-accent-cyan text-background text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2"
                      >
                        Live Demo
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[40px] glass border-white/10 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-white">The Beulex Promise</h3>
          <p className="text-zinc-400 text-xl leading-relaxed italic">
            "Every project in this portfolio was born from a real need — urgent client campaigns, 
            internal workflow problems, or team requirements. I learned whatever was needed, 
            solved the problem, and delivered the product. My journey is proof that I adapt fast, 
            build fast, and never step back from a challenge."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
