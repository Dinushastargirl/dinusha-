import { motion } from "motion/react";
import { Code, Layout, Smartphone, Zap, Search, Palette, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance, responsive websites built with the latest technologies to ensure speed and scalability.",
    benefits: ["SEO Optimized", "Mobile First", "Lightning Fast", "Secure Architecture"],
    icon: Code,
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development, from database architecture to intuitive user interfaces.",
    benefits: ["Scalable Backend", "Real-time Features", "API Integration", "Database Design"],
    icon: Zap,
    color: "text-accent-magenta",
    bg: "bg-accent-magenta/10",
  },
  {
    title: "Startup Landing Pages",
    description: "Conversion-optimized landing pages designed to help startups launch and validate their ideas quickly.",
    benefits: ["High Conversion", "A/B Testing Ready", "Modern Aesthetic", "Quick Turnaround"],
    icon: Layout,
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that combines aesthetics with functionality to create memorable digital experiences.",
    benefits: ["User Research", "Wireframing", "Prototyping", "Visual Identity"],
    icon: Palette,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Digital Solutions",
    description: "Custom digital tools and automated systems tailored to solve specific business challenges.",
    benefits: ["Workflow Automation", "Custom Dashboards", "Cloud Integration", "Legacy Migration"],
    icon: Smartphone,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Product Strategy",
    description: "Helping you define your product roadmap and market positioning for maximum impact.",
    benefits: ["Market Analysis", "MVP Definition", "Growth Strategy", "Technical Consulting"],
    icon: Search,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Our <span className="text-accent-cyan">Expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            We provide a comprehensive range of digital services designed to help your business 
            thrive in an increasingly competitive landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] glass border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className={`w-20 h-20 shrink-0 ${service.bg} rounded-[24px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={service.color} size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle2 className={service.color} size={16} />
                        {benefit}
                      </div>
                    ))}
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
