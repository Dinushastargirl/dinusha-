import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2, ChevronDown, Phone, Mail, MessageSquare } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  href?: string;
  dropdown?: { name: string; href: string; desc?: string }[];
  contactInfo?: { phone: string; email: string };
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    dropdown: [
      { name: "All Services", href: "/services", desc: "Our full range of digital solutions" },
      { name: "Packages", href: "/packages", desc: "Transparent pricing and plans" },
    ],
  },
  {
    name: "Portfolio",
    dropdown: [
      { name: "Website Projects", href: "/website-projects", desc: "Professional web platforms" },
      { name: "Creative Digital Projects", href: "/creative-projects", desc: "Interactive experiences" },
      { name: "AI Powered Softwares", href: "/ai-softwares", desc: "Smart AI solutions" },
      { name: "Case Studies", href: "/case-studies", desc: "Success stories" },
      { name: "Tech Stack", href: "/tech-stack", desc: "Technologies we use" },
    ],
  },
  {
    name: "Clubs",
    dropdown: [
      { name: "Beulex Academy", href: "/beulex-academy", desc: "Join our training programs" },
      { name: "Youth Innovation Lab", href: "/youth-innovation", desc: "Empowering young creators" },
      { name: "SLMC²", href: "/slmc2", desc: "Professional Mathematical Circle" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
    contactInfo: {
      phone: "0710134406",
      email: "dinushapushparajah@gmail.com",
    },
  },
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
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
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.href && !link.dropdown && !link.contactInfo ? (
                    <Link
                      to={link.href}
                      className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                        location.pathname === link.href
                          ? "text-accent-cyan bg-white/5"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium flex items-center gap-1.5 ${
                        activeDropdown === link.name ? "text-white bg-white/5" : "text-zinc-400 hover:text-white hover:bg-white/5"
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
                    {activeDropdown === link.name && (link.dropdown || link.contactInfo) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
                      >
                        <div className="glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2">
                          {link.dropdown && (
                            <div className="space-y-1">
                              {link.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                >
                                  <div className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors">
                                    {subItem.name}
                                  </div>
                                  {subItem.desc && <div className="text-xs text-zinc-500 mt-0.5">{subItem.desc}</div>}
                                </Link>
                              ))}
                            </div>
                          )}
                          {link.contactInfo && (
                            <div className="p-4 space-y-4">
                              <div className="space-y-3">
                                <a
                                  href={`tel:${link.contactInfo.phone}`}
                                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan/20 group-hover:text-accent-cyan transition-all">
                                    <Phone size={14} />
                                  </div>
                                  <span className="text-sm font-medium">{link.contactInfo.phone}</span>
                                </a>
                                <a
                                  href={`mailto:${link.contactInfo.email}`}
                                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-cyan/20 group-hover:text-accent-cyan transition-all">
                                    <Mail size={14} />
                                  </div>
                                  <span className="text-sm font-medium truncate">{link.contactInfo.email}</span>
                                </a>
                              </div>
                              <Link
                                to="/contact"
                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent-cyan text-background rounded-xl text-sm font-bold hover:scale-[1.02] transition-all"
                              >
                                <MessageSquare size={14} />
                                Contact Page
                              </Link>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pl-4">
                <Link
                  to="/contact"
                  className="bg-white text-background px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent-cyan transition-all duration-300 shadow-lg shadow-white/5"
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
              className="text-zinc-400 hover:text-white p-2 transition-colors"
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
            className="xl:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  {link.href && !link.dropdown && !link.contactInfo ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        location.pathname === link.href ? "text-accent-cyan bg-white/5" : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          mobileExpanded === link.name ? "text-white bg-white/5" : "text-zinc-400"
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
                                  className="block px-4 py-2 text-sm text-zinc-500 hover:text-accent-cyan transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                              {link.contactInfo && (
                                <div className="px-4 py-4 space-y-4 bg-white/5 rounded-2xl mt-2">
                                  <div className="space-y-3">
                                    <a href={`tel:${link.contactInfo.phone}`} className="flex items-center gap-3 text-zinc-400">
                                      <Phone size={14} className="text-accent-cyan" />
                                      <span className="text-sm">{link.contactInfo.phone}</span>
                                    </a>
                                    <a href={`mailto:${link.contactInfo.email}`} className="flex items-center gap-3 text-zinc-400">
                                      <Mail size={14} className="text-accent-cyan" />
                                      <span className="text-sm truncate">{link.contactInfo.email}</span>
                                    </a>
                                  </div>
                                  <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center py-2.5 bg-accent-cyan/10 text-accent-cyan rounded-xl text-sm font-bold"
                                  >
                                    Go to Contact Page
                                  </Link>
                                </div>
                              )}
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
                className="w-full text-center bg-white text-background block px-4 py-4 rounded-2xl text-base font-bold mt-6 shadow-xl"
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
