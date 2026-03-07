import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight, Beaker, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function AISoftwares() {
  const filteredProjects = projects.filter(p => p.category === "AI");

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            AI Powered <span className="text-accent-green">Softwares</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-3xl mx-auto mb-12"
          >
            Leveraging cutting-edge Artificial Intelligence to build smarter, 
            more efficient, and highly personalized digital solutions.
          </motion.p>
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
                    <div className="absolute top-6 right-6 z-10">
                      <div className="px-4 py-2 glass border-white/20 text-accent-green rounded-full font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                        <Sparkles size={12} />
                        AI Powered
                      </div>
                    </div>
                    {project.id === "under-development" ? (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <div className="px-8 py-4 glass border-white/20 text-white rounded-full font-bold flex items-center gap-2">
                          <Beaker className="text-accent-magenta" size={20} />
                          Under Development
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-8 py-4 bg-white text-background rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Details
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
                  <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-accent-green transition-colors">
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
                      View Details
                    </Link>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full bg-accent-green text-background text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2"
                      >
                        Launch App
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
