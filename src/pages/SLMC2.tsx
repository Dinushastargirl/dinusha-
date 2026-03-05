import { motion } from "motion/react";
import { Calculator, Sparkles, ArrowRight, Brain, Lightbulb, Target, CheckCircle2, MessageSquare } from "lucide-react";

export default function SLMC2() {
  return (
    <div className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-cyan text-sm font-medium mb-8"
          >
            <Calculator size={16} />
            <span>Founded by Dinusha Pushparajah</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            SLMC² — Sri Lanka <br />
            <span className="text-accent-cyan">Mathematical Circle</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            A professional community for individuals who believe mathematics is more than calculation — it is a way of thinking.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://chat.whatsapp.com/BbKNlFjHcUQ2uBucvWzjXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-cyan text-background rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              <MessageSquare size={20} />
              Join our WhatsApp Community
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8 leading-tight">Our Focus & <br />Philosophy</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                We bring together professionals, academics, engineers, analysts, researchers, and lifelong learners who share a passion for mathematical reasoning, problem-solving, and intellectual growth.
              </p>
              <p>
                SLMC² exists to cultivate deeper thinking, collaborative learning, and a strong mathematical culture within Sri Lanka.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Pure & Applied Maths",
                "Modelling & Optimisation",
                "Logic & Proof-based Thinking",
                "Data & Finance Maths",
                "Computational Maths",
                "Structured Problem Sessions",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 p-4 rounded-2xl glass border-white/5">
                  <CheckCircle2 className="text-accent-cyan" size={20} />
                  <span className="text-white font-medium">{point}</span>
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
            <div className="aspect-square rounded-[40px] overflow-hidden glass border-white/10 p-2 flex items-center justify-center bg-white/5">
              <img
                src="https://i.postimg.cc/z3F2jPLv/smlc2-logo.png"
                alt="SLMC2 Logo"
                className="w-full h-full object-contain rounded-[32px] p-8"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/math/1000/1000";
                }}
              />
            </div>
            <div className="absolute -top-6 -right-6 p-8 glass rounded-3xl border-accent-cyan/20 neon-glow-cyan">
              <div className="text-4xl font-bold text-accent-cyan mb-1">SLMC²</div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Mathematical Culture</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Mathematical Reasoning",
              desc: "Developing the ability to analyze information and solve problems through pure logic and proof-based thinking.",
              icon: Brain,
              color: "text-accent-cyan",
            },
            {
              title: "Collaborative Learning",
              desc: "Open discussions and structured problem sessions where academics and professionals share insights.",
              icon: Lightbulb,
              color: "text-accent-magenta",
            },
            {
              title: "Professional Network",
              desc: "Connecting engineers, analysts, and researchers to cultivate a strong mathematical culture in Sri Lanka.",
              icon: Target,
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[40px] glass border border-accent-cyan/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-accent-cyan/5 pointer-events-none" />
          <h2 className="text-4xl font-display font-bold mb-6 relative z-10">Join the Circle</h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Connect with like-minded professionals and academics. Let's cultivate a strong mathematical culture together.
          </p>
          <a
            href="https://chat.whatsapp.com/BbKNlFjHcUQ2uBucvWzjXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-background rounded-full font-bold text-xl hover:scale-105 transition-all relative z-10"
          >
            <MessageSquare size={24} />
            Join WhatsApp Group
          </a>
        </motion.div>
      </div>
    </div>
  );
}
