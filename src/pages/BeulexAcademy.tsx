import { motion } from "motion/react";
import { GraduationCap, Users, Lightbulb, Brain, Calculator, Sparkles, ArrowRight, CheckCircle2, BookOpen, MessageSquare, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function BeulexAcademy() {
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
            <span>Structured Learning & Mentorship</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            Beulex <span className="text-accent-green">Academy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Empowering the next generation of innovators through structured training, 
            hands-on workshops, and direct mentorship from industry experts.
          </motion.p>
        </div>

        {/* Training Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Digital Product Design",
              desc: "Master UI/UX design principles, user research, and prototyping with modern tools like Figma.",
              icon: BookOpen,
              color: "text-accent-cyan",
              bg: "bg-accent-cyan/10",
            },
            {
              title: "Full Stack Engineering",
              desc: "Learn to build end-to-end applications using React, Node.js, and modern cloud infrastructure.",
              icon: Sparkles,
              color: "text-accent-magenta",
              bg: "bg-accent-magenta/10",
            },
            {
              title: "Startup Entrepreneurship",
              desc: "Understand the business of tech, from product-market fit to scaling and fundraising.",
              icon: Award,
              color: "text-accent-green",
              bg: "bg-accent-green/10",
            },
          ].map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] glass border-white/5 hover:border-white/10 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${program.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${program.color}`}>
                <program.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{program.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">{program.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold group-hover:text-accent-green transition-colors">
                Apply for Program
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8 leading-tight">Direct Mentorship <br />from Industry Experts</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                At Beulex Academy, we believe that learning is most effective when guided by those 
                who have already walked the path. Our mentorship program connects students with 
                seasoned professionals who provide personalized guidance and feedback.
              </p>
              <p>
                Whether you're looking to refine your technical skills or navigate the complexities 
                of the startup world, our mentors are here to support your growth.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, text: "1-on-1 Sessions" },
                { icon: MessageSquare, text: "Real-time Feedback" },
                { icon: Brain, text: "Strategic Guidance" },
                { icon: Lightbulb, text: "Creative Brainstorming" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl glass border-white/5">
                  <item.icon className="text-accent-green" size={20} />
                  <span className="text-white font-medium">{item.text}</span>
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
                src="https://picsum.photos/seed/academy/1000/1000"
                alt="Beulex Academy Mentorship"
                className="w-full h-full object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-8 glass rounded-3xl border-accent-green/20 neon-glow-green">
              <div className="text-4xl font-bold text-accent-green mb-1">100+</div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Active Mentors</div>
            </div>
          </motion.div>
        </div>

        {/* Workshops */}
        <div className="p-16 rounded-[40px] glass border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent-green/10 to-transparent pointer-events-none" />
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Upcoming Workshops</h2>
            <p className="text-zinc-400">Join our hands-on sessions to master specific skills in a collaborative environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Advanced React Patterns", date: "March 15, 2026", type: "Technical" },
              { title: "UX for Startups", date: "April 02, 2026", type: "Design" },
              { title: "Building Scalable APIs", date: "April 20, 2026", type: "Backend" },
              { title: "Growth Hacking 101", date: "May 10, 2026", type: "Business" },
            ].map((workshop, i) => (
              <div key={i} className="p-8 rounded-3xl glass border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all">
                <div>
                  <div className="text-accent-green text-xs font-mono uppercase tracking-widest mb-2">{workshop.type}</div>
                  <h4 className="text-xl font-display font-bold mb-1">{workshop.title}</h4>
                  <div className="text-zinc-500 text-sm">{workshop.date}</div>
                </div>
                <button className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white group-hover:bg-accent-green group-hover:text-background transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
