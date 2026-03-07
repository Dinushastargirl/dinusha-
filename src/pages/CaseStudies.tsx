import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function CaseStudies() {
  const caseStudies = projects.filter(p => p.caseStudy);

  return (
    <div className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-magenta/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-magenta/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-magenta text-sm font-medium mb-8"
          >
            <TrendingUp size={16} />
            <span>Measurable Results</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            Professional <span className="text-accent-magenta">Case Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            A deep dive into our most successful projects, showcasing the challenges we faced, 
            the solutions we implemented, and the measurable results we achieved.
          </motion.p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[16/10] rounded-[40px] overflow-hidden glass border-white/10 p-2 mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-[32px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {project.caseStudy?.metrics.map((metric, i) => (
                    <div key={i} className="p-6 rounded-3xl glass border-white/5 text-center">
                      <div className="text-3xl font-display font-bold text-accent-magenta mb-1">{metric.value}</div>
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-magenta/10 text-accent-magenta text-xs font-mono mb-6">
                  <Target size={14} />
                  <span>CASE STUDY: {project.title.toUpperCase()}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  {project.title}
                </h2>
                
                <div className="space-y-10">
                  <section>
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Zap className="text-accent-magenta" size={20} />
                      The Challenge
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {project.caseStudy?.challenge}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-accent-green" size={20} />
                      The Solution
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {project.caseStudy?.solution}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="text-accent-magenta" size={20} />
                      The Result
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {project.caseStudy?.result}
                    </p>
                  </section>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-white text-background rounded-full font-bold hover:scale-105 transition-all"
                >
                  View Full Project Details
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 p-16 rounded-[40px] glass border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-magenta/10 to-transparent pointer-events-none" />
          <h2 className="text-4xl font-display font-bold mb-6 relative z-10">Ready to achieve similar results?</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            Let's discuss how we can apply our expertise to solve your business challenges and 
            deliver measurable impact.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent-magenta text-background rounded-full font-bold text-lg hover:scale-105 transition-all relative z-10"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
