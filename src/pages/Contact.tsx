import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            Let's <span className="text-accent-magenta">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? Reach out and let's build something 
            extraordinary together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8 leading-tight">
              Ready to <span className="text-accent-green">Innovate</span>?
            </h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              We're always looking for new challenges and exciting projects to work on. 
              Whether you're a startup looking to launch or an established business scaling up, 
              we're here to help.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center text-accent-magenta group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm uppercase font-mono tracking-widest mb-1">Email Us</div>
                  <div className="text-xl font-bold text-white">hello@beulex.studio</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center text-accent-magenta group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm uppercase font-mono tracking-widest mb-1">Call Us</div>
                  <div className="text-xl font-bold text-white">+94 7X XXX XXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center text-accent-green group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm uppercase font-mono tracking-widest mb-1">Location</div>
                  <div className="text-xl font-bold text-white">Colombo, Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/5">
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm font-mono">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent-magenta hover:border-accent-magenta/30 transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent-magenta hover:border-accent-magenta/30 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent-green hover:border-accent-green/30 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-blue-500 hover:border-blue-500/30 transition-all">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] glass border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-magenta transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-magenta transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-magenta transition-colors appearance-none">
                  <option className="bg-background">Web Development</option>
                  <option className="bg-background">UI/UX Design</option>
                  <option className="bg-background">Startup MVP</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-magenta transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <button className="w-full py-5 bg-white text-background rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
