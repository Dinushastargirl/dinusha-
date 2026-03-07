import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "NutriGPT",
    category: "AI Landing Page",
    image: "https://picsum.photos/seed/nutrition/1200/800",
    link: "https://nutrigpt-h37z.vercel.app/"
  },
  {
    id: "02",
    title: "Little Heart Bakes",
    category: "E-Commerce",
    image: "https://picsum.photos/seed/bakery/1200/800",
    link: "https://little-heart-bakes.base44.app/"
  },
  {
    id: "03",
    title: "Aurum Bookings",
    category: "AI Software",
    image: "https://picsum.photos/seed/booking/1200/800",
    link: "https://aurum-bookings.vercel.app/login"
  },
  {
    id: "04",
    title: "Vork Global",
    category: "Corporate Web",
    image: "https://picsum.photos/seed/corporate/1200/800",
    link: "https://vorkglobal.vercel.app/"
  }
];

export default function CircularShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * projects.length),
        projects.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Rotation for the "clock" element
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Clock & Info */}
          <div className="relative z-10">
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-accent-magenta font-mono text-xs uppercase tracking-[0.3em] mb-4"
              >
                Selected Works
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none">
                OUR <br />
                <span className="text-zinc-600">PROJECTS</span>
              </h2>
            </div>

            <div className="relative flex items-center gap-12">
              {/* The "Clock" Counter */}
              <div className="relative w-40 h-40 flex items-center justify-center">
                <motion.div 
                  style={{ rotate: rotation }}
                  className="absolute inset-0 border border-white/10 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent-magenta rounded-full shadow-[0_0_10px_rgba(255,0,255,0.5)]" />
                </motion.div>
                <div className="text-6xl font-display font-bold text-white">
                  {projects[activeIndex].id}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-4xl font-display font-bold mb-2">{projects[activeIndex].title}</h3>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">
                      {projects[activeIndex].category}
                    </p>
                    <a 
                      href={projects[activeIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold group"
                    >
                      View Project <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Image Showcase */}
          <div className="relative aspect-[4/5] md:aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full rounded-[40px] overflow-hidden border border-white/10 p-2 glass"
              >
                <img 
                  src={projects[activeIndex].image} 
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-magenta/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-magenta/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
