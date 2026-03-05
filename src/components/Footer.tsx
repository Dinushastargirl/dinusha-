import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Globe, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-24 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent-cyan rounded-lg flex items-center justify-center neon-glow-cyan">
                <Code2 className="text-background" size={24} />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                BEULEX<span className="text-accent-cyan">.</span>
              </span>
            </div>
            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed mb-8">
              Building the future with code, creativity, and innovation. A modern global digital studio 
              empowering the next generation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all">
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
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm font-mono">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link to="/about" className="hover:text-accent-cyan transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent-cyan transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-accent-cyan transition-colors">Projects</Link></li>
              <li><Link to="/packages" className="hover:text-accent-cyan transition-colors">Packages</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent-cyan transition-colors">Case Studies</Link></li>
              <li><Link to="/tech-stack" className="hover:text-accent-cyan transition-colors">Tech Stack</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm font-mono">Programs</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link to="/beulex-academy" className="hover:text-accent-cyan transition-colors">Academy</Link></li>
              <li><Link to="/youth-innovation" className="hover:text-accent-cyan transition-colors">Youth Innovation</Link></li>
              <li><Link to="/slmc2" className="hover:text-accent-cyan transition-colors">SLMC²</Link></li>
              <li><Link to="/innovation-lab" className="hover:text-accent-cyan transition-colors">Innovation Lab</Link></li>
            </ul>
          </div>
        </div>
        <div className="pb-12 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm font-mono uppercase tracking-widest">
          <div>© 2026 Beulex Digital Studio. All rights reserved.</div>
          <div>Designed & Developed by <span className="text-white">Dinusha Pushparajah</span></div>
        </div>
      </div>
    </footer>
  );
}
