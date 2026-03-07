import { motion } from "motion/react";
import { GraduationCap, Users, Lightbulb, Brain, Calculator, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function YouthInnovation() {
  return (
    <div className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-green text-sm font-medium mb-8"
          >
            <GraduationCap size={16} />
            <span>Empowering the Next Generation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            Youth Innovation & <br />
            <span className="text-accent-green">Training Initiative</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            BEULEX is committed to empowering young people across the nation by 
            providing training, inspiration, and the tools they need to become future tech leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8 leading-tight">Our Mission to <br />Build Future Innovators</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                We believe that the future of technology lies in the hands of the youth. Our initiative 
                focuses on bridging the gap between traditional education and the rapidly evolving 
                tech industry.
              </p>
              <p>
                Through structured training programs, hands-on workshops, and direct mentorship, we 
                help young individuals develop the skills and mindset needed to create innovative 
                solutions for the challenges of tomorrow.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Programming & Logic",
                "Digital Product Design",
                "Startup Entrepreneurship",
                "Problem Solving Mindset",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3 p-4 rounded-2xl glass border-white/5">
                  <CheckCircle2 className="text-accent-green" size={20} />
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden glass border-white/10 p-2">
              <img
                src="https://picsum.photos/seed/youth/1000/1000"
                alt="Youth Innovation"
                className="w-full h-full object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 glass rounded-3xl border-accent-green/20 neon-glow-green">
              <div className="text-4xl font-bold text-accent-green mb-1">500+</div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Students Trained</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tech Mentorship",
              desc: "Direct guidance from industry experts in programming, design, and digital entrepreneurship.",
              icon: Users,
              color: "text-accent-magenta",
            },
            {
              title: "Innovation Workshops",
              desc: "Hands-on sessions focused on creative problem solving and building real-world solutions.",
              icon: Lightbulb,
              color: "text-accent-magenta",
            },
            {
              title: "Digital Literacy",
              desc: "Equipping youth with essential digital skills to thrive in the modern global economy.",
              icon: Brain,
              color: "text-accent-green",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] glass border-white/5 text-center group hover:border-white/10 transition-all"
            >
              <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
