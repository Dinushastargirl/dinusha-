import { motion } from "motion/react";
import { User, Rocket, Target, Heart, Code2, Globe, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-40 pb-24 bg-background grid-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4"
          >
            The Studio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-[0.8]"
          >
            BEULEX <br />
            <span className="text-zinc-600">STUDIO</span>
          </motion.h1>
        </div>

        {/* Bento Grid About */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-32">
          {/* Large Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bento-card p-10 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-zinc-400 text-xl leading-tight max-w-xl">
                Beulex is a creative powerhouse where technology meets innovation. We specialize in crafting high-performance digital experiences that empower businesses to scale and thrive in the modern era.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-full glass border-white/5 text-xs font-mono uppercase tracking-widest text-zinc-500">Innovation</div>
              <div className="px-4 py-2 rounded-full glass border-white/5 text-xs font-mono uppercase tracking-widest text-zinc-500">Creativity</div>
              <div className="px-4 py-2 rounded-full glass border-white/5 text-xs font-mono uppercase tracking-widest text-zinc-500">Performance</div>
            </div>
          </motion.div>

          {/* Small Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bento-card p-8 bg-accent-magenta/5 border-accent-magenta/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent-magenta/20 flex items-center justify-center text-accent-magenta mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Our Vision</h3>
              <p className="text-zinc-500 text-sm">
                To be a leader in the digital landscape, fostering a community of young innovators and tech leaders.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <Sparkles size={16} className="text-accent-magenta" />
            </div>
          </motion.div>

          {/* Founder Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bento-card overflow-hidden group"
          >
            <img 
              src="https://picsum.photos/seed/founder/800/1000" 
              alt="Dinusha Pushparajah" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-display font-bold">Dinusha Pushparajah</h3>
              <p className="text-accent-cyan font-mono text-xs uppercase tracking-widest">Founder & CEO</p>
            </div>
          </motion.div>

          {/* Founder Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bento-card p-10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-accent-cyan text-xs font-mono mb-6">
                <User size={14} />
                <span>MEET THE FOUNDER</span>
              </div>
              <p className="text-zinc-400 text-lg leading-tight mb-8">
                A visionary Full Stack Developer, Creative Technologist, and Young Tech Entrepreneur. Dinusha is the driving force behind BEULEX and the founder of SLMC².
              </p>
              <div className="space-y-4">
                {["Startup Mindset", "Impact Driven", "Creative Engineering"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="text-accent-cyan" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold group mt-8">
              Work with Dinusha <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-12">TECHNICAL <span className="text-zinc-600">STACK</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["TypeScript", "React", "Next.js", "Node.js", "Python", "Three.js", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bento-card p-6 flex items-center justify-center text-center hover:bg-white hover:text-black transition-all cursor-default"
              >
                <span className="font-mono text-sm font-bold uppercase tracking-widest">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestone Gallery */}
        <section className="py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter">
              BEYOND <br />
              <span className="text-gradient-cyan">CODE</span>
            </h2>
            <p className="text-zinc-500 max-w-xs text-right font-mono text-xs uppercase tracking-widest">
              A glimpse into the journey of building impactful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "https://i.postimg.cc/XX5FrdWP/animal-vision.jpg",
              "https://i.postimg.cc/9DLw6BP1/goya.jpg",
              "https://i.postimg.cc/479KhkDQ/mental-health.jpg",
              "https://i.postimg.cc/t7FZqbdB/ponds.jpg",
              "https://i.postimg.cc/ftmLR7dV/personality.jpg",
              "https://i.postimg.cc/ZCcWNLMP/nutriline.jpg"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card aspect-square group"
              >
                <img
                  src={img}
                  alt={`Milestone ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 text-center">
                  <p className="text-white font-display font-bold text-xl">Project Milestone {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
