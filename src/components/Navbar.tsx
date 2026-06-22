import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, Mail, MessageSquare } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  href?: string;
  dropdown?: boolean;
}

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", dropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Ventures", href: "/ventures" },
  { name: "Contact", href: "/contact" },
];

const servicesMenuData = [
  {
    title: "Beulex Digital",
    href: "/services/digital",
    items: [
      { name: "Website Development", href: "/services/digital/website-development" },
      { name: "Branding & Identity", href: "/services/digital/branding-identity" },
      { name: "Social Media Management", href: "/services/digital/social-media-management" },
      { name: "Content Strategy", href: "/services/digital?service=content-strategy" },
      { name: "Marketing Strategy", href: "/services/digital?service=marketing-strategy" },
    ],
  },
  {
    title: "Beulex Startup",
    href: "/services/startup",
    items: [
      { name: "Startup Launch Package", href: "/packages" },
      { name: "Business Proposal Development", href: "/contact?service=Business Proposal Development" },
      { name: "MVP Planning", href: "/contact?service=MVP Planning" },
      { name: "Digital Presence Setup", href: "/contact?service=Digital Presence Setup" },
      { name: "Startup Growth Strategy", href: "/contact?service=Startup Growth Strategy" },
    ],
  },
  {
    title: "Beulex Academy",
    href: "/beulex-academy",
    items: [
      { name: "Corporate Training", href: "/beulex-academy?program=corporate-training" },
      { name: "Webinars", href: "/beulex-academy?program=webinars" },
      { name: "Student Training", href: "/beulex-academy?program=student-training" },
      { name: "AI Awareness Programs", href: "/beulex-academy?program=ai-awareness" },
      { name: "AI Cert Awareness Program", href: "/beulex-academy?program=ai-cert" },
    ],
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
                    {activeDropdown === link.name && link.dropdown && link.name === "Services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[980px] lg:w-[1100px]"
                      >
                        <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl overflow-hidden shadow-2xl p-8 text-left">
                          <div className="grid grid-cols-3 gap-8">
                            {servicesMenuData.map((division) => (
                              <div key={division.title} className="flex flex-col">
                                <Link
                                  to={division.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group/title flex items-center gap-1.5 font-display font-extrabold text-slate-900 hover:text-slate-800 transition-colors text-base mb-5"
                                >
                                  <span className={`transition-transform duration-200 group-hover/title:translate-y-0.5 text-[10px] ${
                                    division.title.includes("Digital") ? "text-accent-magenta" :
                                    division.title.includes("Labs") ? "text-accent-cyan" :
                                    division.title.includes("Startup") ? "text-accent-green" :
                                    "text-violet-600"
                                  }`}>
                                    ▼
                                  </span>
                                  {division.title}
                                </Link>
                                <ul className="space-y-3.5">
                                  {division.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        to={subItem.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2 text-sm text-slate-600 hover:text-slate-955 transition-colors py-0.5"
                                      >
                                        <span className={`font-bold transition-colors ${
                                          division.title.includes("Digital") ? "text-accent-magenta/60 group-hover/item:text-accent-magenta" :
                                          division.title.includes("Labs") ? "text-accent-cyan/60 group-hover/item:text-accent-cyan" :
                                          division.title.includes("Startup") ? "text-accent-green/60 group-hover/item:text-accent-green" :
                                          "text-violet-500/60 group-hover/item:text-violet-600"
                                        }`}>
                                          *
                                        </span>
                                        <span className="leading-tight">{subItem.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
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
                            <div className="py-3 px-2 space-y-6 text-left">
                              {servicesMenuData.map((division) => (
                                <div key={division.title} className="space-y-3">
                                  <Link
                                    to={division.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-1.5 text-sm font-extrabold text-slate-800 uppercase tracking-wider pl-2 hover:text-slate-955 transition-colors"
                                  >
                                    <span className={
                                      division.title.includes("Digital") ? "text-accent-magenta" :
                                      division.title.includes("Labs") ? "text-accent-cyan" :
                                      division.title.includes("Startup") ? "text-accent-green" :
                                      "text-violet-650"
                                    }>
                                      ▼
                                    </span>
                                    {division.title}
                                  </Link>
                                  <div className="pl-4 space-y-2.5">
                                    {division.items.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        onClick={() => setIsOpen(false)}
                                        className="py-1 text-sm text-slate-500 hover:text-slate-900 transition-colors flex items-start gap-2"
                                      >
                                        <span className={
                                          division.title.includes("Digital") ? "text-accent-magenta/60" :
                                          division.title.includes("Labs") ? "text-accent-cyan/60" :
                                          division.title.includes("Startup") ? "text-accent-green/60" :
                                          "text-violet-500/60"
                                        }>
                                          *
                                        </span>
                                        <span className="leading-tight">{subItem.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
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
