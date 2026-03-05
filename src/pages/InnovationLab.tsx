import { motion } from "motion/react";
import { Beaker, Cpu, Globe, Zap, ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function InnovationLab() {
  const labProjects = projects.filter(p => p.category === "Lab");

  return (
    <div className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-magenta/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-magenta text-sm font-medium mb-8"
          >
            <Beaker size={16} />
            <span>Experimental Technology</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            The <span className="text-accent-magenta">Innovation</span> Lab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Where we push the boundaries of what's possible. Our lab is dedicated to experimental 
            tech projects, prototypes, and creative solutions that define the future.
          </motion.p>
        </div>

        {/* Lab Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "AI & ML", desc: "Exploring neural networks and automated intelligence.", icon: Cpu, color: "text-accent-cyan" },
            { title: "Web3 & Decentralization", desc: "Building the next generation of the distributed web.", icon: Globe, color: "text-accent-magenta" },
            { title: "High-Performance UI", desc: "Pushing the limits of browser rendering and interaction.", icon: Zap, color: "text-accent-green" },
          ].map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] glass border-white/5 group hover:border-white/10 transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${area.color}`}>
                <area.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{area.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Lab Projects */}
        <div className="space-y-24">
          <div className="text-center">
            <h2 className="text-4xl font-display font-bold mb-4">Active Prototypes</h2>
            <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm">Research & Development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {labProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-video rounded-[40px] overflow-hidden glass border-white/5 p-2 mb-8">
                  <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center">
                      <div>
                        <p className="text-zinc-300 mb-6 line-clamp-3">{project.fullDescription}</p>
                        <Link
                          to={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-background rounded-full font-bold"
                        >
                          View Prototype
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-accent-magenta">
                    <Code2 size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 p-16 rounded-[40px] glass border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-magenta/10 to-transparent pointer-events-none" />
          <h2 className="text-4xl font-display font-bold mb-6 relative z-10">Have an experimental idea?</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            We love collaborating on high-risk, high-reward technology prototypes. Let's build the 
            impossible together in our Innovation Lab.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent-magenta text-white rounded-full font-bold text-lg hover:scale-105 transition-all relative z-10"
          >
            Collaborate with the Lab
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
