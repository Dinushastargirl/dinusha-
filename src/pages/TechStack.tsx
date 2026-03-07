import { motion } from "motion/react";
import { Code2, Database, Layout, Terminal, Cloud, Settings, TerminalSquare } from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Redux", "Zustand"],
    color: "text-accent-magenta",
    bg: "bg-accent-magenta/10",
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "SQLite", "Prisma"],
    color: "text-accent-magenta",
    bg: "bg-accent-magenta/10",
  },
  {
    category: "Tools",
    icon: Terminal,
    skills: ["Git", "Docker", "Vite", "NPM/PNPM", "Postman", "Figma", "VS Code", "Jest", "Cypress"],
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    category: "Deployment",
    icon: Cloud,
    skills: ["Vercel", "Netlify", "AWS", "Google Cloud", "DigitalOcean", "Heroku", "Railway"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

export default function TechStack() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Our <span className="text-accent-green">Tech Stack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            We leverage the most modern and reliable technologies to build scalable, 
            high-performance digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {techStack.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] glass border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold">{item.category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {item.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium">
                    <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 p-12 rounded-[40px] glass border-white/10 text-center">
          <TerminalSquare className="text-accent-magenta mx-auto mb-8" size={48} />
          <h2 className="text-3xl font-display font-bold mb-6 tracking-tight">Our Technology Philosophy</h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We don't just follow trends; we choose technologies that offer the best balance of performance, 
            scalability, and developer experience. Our stack is designed to be future-proof and resilient, 
            ensuring your digital product stays ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
}
