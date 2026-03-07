import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Globe, Code2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-40 border-t border-white/5 bg-background grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-6">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <img 
                src="https://i.postimg.cc/Xv3wSzdS/Untitled-design.png" 
                alt="BEULEX Logo" 
                className="w-16 h-16 object-contain group-hover:rotate-12 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <span className="text-3xl font-display font-bold tracking-tighter">
                BEULEX<span className="text-accent-magenta">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-2xl max-w-md font-display font-medium leading-tight mb-12">
              Creating a revolution to revaluate people's lives.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "#", color: "hover:text-accent-magenta" },
                { icon: Linkedin, href: "#", color: "hover:text-accent-magenta" },
                { icon: Twitter, href: "#", color: "hover:text-accent-magenta" },
                { icon: Globe, href: "#", color: "hover:text-accent-magenta" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  className={`w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center text-zinc-500 ${social.color} hover:border-white/20 transition-all`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-10">Navigation</h4>
            <ul className="space-y-6">
              {[
                { name: "About Us", href: "/about" },
                { name: "Process", href: "/process" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/website-projects" },
                { name: "Packages", href: "/packages" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Tech Stack", href: "/tech-stack" }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xl font-display font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                    {link.name} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-10">Ecosystem</h4>
            <ul className="space-y-6">
              {[
                { name: "Beulex Academy", href: "/beulex-academy" },
                { name: "Youth Innovation", href: "/youth-innovation" },
                { name: "SLMC²", href: "/slmc2" },
                { name: "Innovation Lab", href: "/innovation-lab" }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xl font-display font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                    {link.name} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            © 2026 BEULEX. All rights reserved.
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
          >
            Back to top <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"><ArrowUpRight size={16} className="-rotate-45" /></div>
          </button>
          <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            Designed by <span className="text-zinc-400">Dinusha Pushparajah</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
