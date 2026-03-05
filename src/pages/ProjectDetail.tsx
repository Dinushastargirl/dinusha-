import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Sparkles } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project || project.id === "under-development") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">
            {project?.id === "under-development" ? "Project Under Development" : "Project Not Found"}
          </h1>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">
            {project?.id === "under-development" 
              ? "This project is currently in the works. Stay tuned for updates!" 
              : "The project you are looking for doesn't exist or has been moved."}
          </p>
          <Link to="/projects" className="text-accent-cyan flex items-center gap-2 justify-center hover:underline">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link to="/projects" className="text-zinc-500 hover:text-white flex items-center gap-2 mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-background rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all"
              >
                Live Demo
                <ExternalLink size={20} />
              </a>
              <a
                href={project.github}
                className="px-8 py-4 glass border-white/10 text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Source Code
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="aspect-video rounded-[40px] overflow-hidden glass border-white/10 p-2 mb-24"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-[32px]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
                <Sparkles className="text-accent-cyan" size={24} />
                Project Overview
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {project.caseStudy && (
              <section className="p-10 rounded-[40px] glass border-white/10 bg-accent-cyan/5">
                <h2 className="text-3xl font-display font-bold mb-8 text-accent-cyan">Case Study</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">The Challenge</h3>
                    <p className="text-zinc-400">{project.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">The Solution</h3>
                    <p className="text-zinc-400">{project.caseStudy.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">The Result</h3>
                    <p className="text-zinc-400">{project.caseStudy.result}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {project.caseStudy.metrics.map((m, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold text-accent-cyan">{m.value}</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section>
              <h2 className="text-3xl font-display font-bold mb-6">Key Goals & Objectives</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.goals.map((goal) => (
                  <div key={goal} className="p-6 rounded-3xl glass border-white/5 flex items-start gap-4">
                    <CheckCircle2 className="text-accent-green shrink-0 mt-1" size={20} />
                    <span className="text-zinc-300">{goal}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-8 rounded-[40px] glass border-white/10">
              <h3 className="text-xl font-display font-bold mb-6">Technologies Used</h3>
              <div className="space-y-4">
                {project.tech.map((t) => (
                  <div key={t} className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">{t}</span>
                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-[40px] glass border-white/10">
              <h3 className="text-xl font-display font-bold mb-4">Interested in something similar?</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Let's discuss how we can bring your vision to life with modern technology and creative design.
              </p>
              <Link to="/contact" className="w-full py-4 bg-accent-cyan text-background rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all">
                Start a Project
              </Link>
            </div>
          </aside>
        </div>

        {/* Screenshots */}
        <section>
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden glass border-white/10 p-2"
              >
                <img src={s} alt={`Screenshot ${i + 1}`} className="w-full h-auto rounded-2xl" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
