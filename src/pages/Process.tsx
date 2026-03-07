import { motion } from "motion/react";
import { Search, Palette, Code, Rocket, CheckCircle2, ArrowRight, MessageSquare, Zap, Target, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market landscape to define a clear roadmap for success.",
    icon: Search,
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
    details: ["Market Research", "User Personas", "Technical Audit", "Project Roadmap"]
  },
  {
    number: "02",
    title: "Design & UX",
    description: "Our design team creates intuitive, high-fidelity prototypes that prioritize user experience and brand identity.",
    icon: Palette,
    color: "text-accent-magenta",
    bg: "bg-accent-magenta/10",
    details: ["Wireframing", "UI Design", "Interactive Prototyping", "Design Systems"]
  },
  {
    number: "03",
    title: "Engineering",
    description: "We build robust, scalable solutions using the latest technologies, ensuring performance and security at every level.",
    icon: Code,
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    details: ["Frontend Development", "Backend Architecture", "API Integration", "Quality Assurance"]
  },
  {
    number: "04",
    title: "Launch & Growth",
    description: "We handle the deployment and provide ongoing support to ensure your product continues to evolve and succeed.",
    icon: Rocket,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    details: ["Deployment", "Performance Monitoring", "Post-Launch Support", "Iterative Growth"]
  }
];

export default function Process() {
  return (
    <div className="pt-40 pb-24 bg-background grid-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent-magenta font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            How we work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.8]"
          >
            OUR <br />
            <span className="text-zinc-600">PROCESS</span>
          </motion.h1>
        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bento-card p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1">
                  <span className="text-4xl font-display font-bold text-zinc-800">{step.number}</span>
                </div>
                <div className="md:col-span-6">
                  <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className={step.color} size={28} />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-4">{step.title}</h2>
                  <p className="text-zinc-400 text-lg leading-tight max-w-md">
                    {step.description}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <CheckCircle2 className={step.color} size={16} />
                        <span className="text-sm font-medium text-zinc-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Bento */}
        <div className="mt-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-12">WHY <span className="text-zinc-600">BEULEX?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bento-card p-8 bg-accent-magenta/5 border-accent-magenta/10">
              <Target className="text-accent-magenta mb-6" size={32} />
              <h3 className="text-2xl font-display font-bold mb-2">Outcome Driven</h3>
              <p className="text-zinc-500 text-sm">We don't just build features; we build solutions that drive measurable business results.</p>
            </div>
            <div className="bento-card p-8">
              <Zap className="text-accent-magenta mb-6" size={32} />
              <h3 className="text-2xl font-display font-bold mb-2">Rapid Iteration</h3>
              <p className="text-zinc-500 text-sm">Our agile methodology allows us to move fast and adapt to changing requirements.</p>
            </div>
            <div className="bento-card p-8 bg-accent-green/5 border-accent-green/10">
              <ShieldCheck className="text-accent-green mb-6" size={32} />
              <h3 className="text-2xl font-display font-bold mb-2">Quality First</h3>
              <p className="text-zinc-500 text-sm">Rigorous testing and code reviews are baked into every step of our process.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card p-16 bg-white text-background"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">READY TO START?</h2>
            <p className="text-zinc-600 text-xl mb-12 max-w-xl mx-auto">
              Let's turn your vision into a high-performance digital reality.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-background text-white rounded-[32px] font-bold text-2xl hover:scale-105 transition-all">
              Book a Strategy Call <ArrowRight size={28} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
