import { motion } from "motion/react";
import { Code, Layout, Smartphone, Zap, Search, Palette, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Engineering",
    description: "High-performance, responsive websites built with the latest technologies to ensure speed and scalability.",
    benefits: ["SEO Optimized", "Mobile First", "Lightning Fast", "Secure Architecture"],
    icon: Code,
    color: "text-accent-magenta",
    bg: "bg-accent-magenta/10",
    size: "md:col-span-8"
  },
  {
    title: "AI Integration",
    description: "End-to-end application development with smart AI features.",
    benefits: ["Scalable Backend", "Real-time Features"],
    icon: Zap,
    color: "text-accent-magenta",
    bg: "bg-accent-magenta/10",
    size: "md:col-span-4"
  },
  {
    title: "Startup Launch",
    description: "Conversion-optimized landing pages designed to help startups launch quickly.",
    benefits: ["High Conversion", "A/B Testing Ready"],
    icon: Layout,
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    size: "md:col-span-4"
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that combines aesthetics with functionality to create memorable digital experiences.",
    benefits: ["User Research", "Wireframing", "Prototyping", "Visual Identity"],
    icon: Palette,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    size: "md:col-span-8"
  },
];

export default function Services() {
  return (
    <div className="pt-40 pb-24 bg-background grid-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent-magenta font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.8]"
          >
            OUR <br />
            <span className="text-zinc-600">EXPERTISE</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.size} bento-card p-10 flex flex-col justify-between min-h-[350px]`}
            >
              <div>
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-8`}>
                  <service.icon className={service.color} size={28} />
                </div>
                <h3 className="text-4xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-tight max-w-md mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold group">
                  Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bento-card p-8 bg-accent-magenta/5 border-accent-magenta/10">
            <h4 className="text-xl font-bold mb-2">Performance First</h4>
            <p className="text-zinc-500 text-sm">We optimize every line of code for maximum speed and SEO efficiency.</p>
          </div>
          <div className="bento-card p-8">
            <h4 className="text-xl font-bold mb-2">Scalable Design</h4>
            <p className="text-zinc-500 text-sm">Our architectures grow with your business, from MVP to enterprise.</p>
          </div>
          <div className="bento-card p-8 bg-white/5">
            <h4 className="text-xl font-bold mb-2">Global Reach</h4>
            <p className="text-zinc-500 text-sm">Serving clients worldwide with 24/7 support and localized solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
