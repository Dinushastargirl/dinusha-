import { motion } from "motion/react";
import { User, Rocket, Target, Heart, Code2, Globe, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Agency Section (About Us) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-accent-magenta text-xs font-mono mb-6">
              <Globe size={14} />
              <span>THE STUDIO</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              About <br />
              <span className="text-gradient-cyan">Beulex</span> Studio
            </h1>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Beulex is more than just a development agency; it's a creative powerhouse where technology 
                meets innovation. We specialize in crafting high-performance digital experiences that 
                empower businesses to scale and thrive in the modern era.
              </p>
              <p>
                Our mission is to build the future of the web by combining cutting-edge technology with 
                exceptional design. From startup landing pages to complex full-stack applications, we 
                deliver solutions that are as functional as they are beautiful.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl glass border-white/5 hover:border-accent-cyan/20 transition-all duration-300">
                <Heart className="text-accent-cyan mb-4" size={24} />
                <h3 className="text-white font-bold mb-2">Our Mission</h3>
                <p className="text-zinc-400 text-sm">To empower global businesses through innovative digital solutions and creative technology.</p>
              </div>
              <div className="p-6 rounded-2xl glass border-white/5 hover:border-accent-magenta/20 transition-all duration-300">
                <Code2 className="text-accent-magenta mb-4" size={24} />
                <h3 className="text-white font-bold mb-2">Our Vision</h3>
                <p className="text-zinc-400 text-sm">To be a leader in the digital landscape, fostering a community of young innovators and tech leaders.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden glass border-white/10 p-2">
              <img
                src="https://picsum.photos/seed/studio/1200/800"
                alt="Beulex Digital Studio"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Founder Section (Meet the Founder) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass border-white/10 p-2">
              <img
                src="https://picsum.photos/seed/founder/800/1000"
                alt="Dinusha Pushparajah"
                className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-magenta/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-accent-cyan text-xs font-mono mb-6">
              <User size={14} />
              <span>MEET THE FOUNDER</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Dinusha <br />
              <span className="text-gradient-cyan">Pushparajah</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                A visionary <span className="text-white font-medium">Full Stack Developer</span>, 
                <span className="text-white font-medium">Creative Technologist</span>, and 
                <span className="text-white font-medium">Young Tech Entrepreneur</span>. 
                Dinusha is the driving force behind Beulex Digital Studio and the founder of SLMC².
              </p>
              <p>
                His journey is fueled by a deep passion for technology and an entrepreneurial mindset that 
                seeks to bridge the gap between complex code and human-centric design. As a young innovator, 
                he is dedicated to building impactful technology that solves real-world problems.
              </p>
              <p>
                Dinusha's vision extends beyond just building products; he aims to inspire a new generation 
                of creators through innovation and mentorship.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-accent-cyan">
                  <Rocket size={20} />
                </div>
                <span className="text-sm font-medium">Startup Mindset</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-accent-magenta">
                  <Target size={20} />
                </div>
                <span className="text-sm font-medium">Impact Driven</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-8">Technical Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {["TypeScript", "React", "Next.js", "Node.js", "Python", "Three.js", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"].map(skill => (
                <span key={skill} className="px-6 py-2 rounded-full glass border-white/5 text-sm font-medium text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8">Qualifications</h2>
            <div className="space-y-4">
              {[
                { title: "Full Stack Development", org: "Industry Certified" },
                { title: "UI/UX Design Specialist", org: "Global Standards" },
                { title: "Digital Entrepreneurship", org: "Startup Academy" },
              ].map((q, i) => (
                <div key={i} className="p-6 rounded-2xl glass border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">{q.title}</div>
                    <div className="text-zinc-500 text-xs uppercase tracking-widest">{q.org}</div>
                  </div>
                  <CheckCircle2 className="text-accent-green" size={20} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Moments & Milestones Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-24"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-accent-cyan text-xs font-mono mb-6">
              <Sparkles size={14} />
              <span>MOMENTS & MILESTONES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Behind the Innovation</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              A glimpse into the journey of building impactful digital solutions and creative campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-3xl overflow-hidden glass border-white/10 p-2"
              >
                <img
                  src={img}
                  alt={`Milestone ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white font-display font-bold text-lg">Project Milestone {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
