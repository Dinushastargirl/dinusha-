import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, Mail, MessageSquare } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  href?: string;
  dropdown?: { name: string; href: string; desc?: string }[];
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    dropdown: [
      { name: "Beulex Digital", href: "/services/digital", desc: "Digital growth & marketing solutions" },
      { name: "Beulex Labs", href: "/services/labs", desc: "Custom software & AI solutions" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-2xl font-display font-bold tracking-tight text-slate-900 group-hover:text-accent-magenta transition-colors">
              BEULEX<span className="text-accent-magenta">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.href && !link.dropdown ? (
                    <Link
                      to={link.href}
                      className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-semibold ${
                        location.pathname === link.href
                          ? "text-accent-magenta bg-slate-100"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-semibold flex items-center gap-1.5 ${
                        activeDropdown === link.name ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}

                  <AnimatePresence>
                    {activeDropdown === link.name && link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                      >
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl p-2">
                          <div className="space-y-1">
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                              >
                                <div className="text-sm font-bold text-slate-900 group-hover:text-accent-magenta transition-colors">
                                  {subItem.name}
                                </div>
                                {subItem.desc && <div className="text-xs text-slate-500 mt-0.5">{subItem.desc}</div>}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pl-4">
                <Link
                  to="/contact"
                  className="bg-accent-magenta text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all duration-300 shadow-md"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  {link.href && !link.dropdown ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        location.pathname === link.href ? "text-accent-magenta bg-slate-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                          mobileExpanded === link.name ? "text-slate-900 bg-slate-50" : "text-slate-600"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${mobileExpanded === link.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            <div className="py-2 space-y-1">
                              {link.dropdown?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 text-sm text-slate-500 hover:text-accent-magenta transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-accent-magenta text-white block px-4 py-4 rounded-2xl text-base font-bold mt-6 shadow-md hover:opacity-90 transition-opacity"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
