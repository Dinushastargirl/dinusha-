import { motion } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Packages", href: "/packages" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Academy", href: "/beulex-academy" },
  { name: "Youth Innovation", href: "/youth-innovation" },
  { name: "SLMC²", href: "/slmc2" },
  { name: "Lab", href: "/innovation-lab" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-accent-cyan rounded-lg flex items-center justify-center neon-glow-cyan"
            >
              <Code2 className="text-background" size={24} />
            </motion.div>
            <span className="text-xl font-display font-bold tracking-tight">
              BEULEX<span className="text-accent-cyan">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 text-sm font-medium ${
                    location.pathname === link.href ? "text-accent-cyan" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-white text-background px-6 py-2 rounded-full text-sm font-semibold hover:bg-accent-cyan transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden glass border-b border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.href ? "text-accent-cyan" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-accent-cyan text-background block px-3 py-3 rounded-full text-base font-bold mt-4"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
