import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import TechStack from "./pages/TechStack";
import YouthInnovation from "./pages/YouthInnovation";
import SLMC2 from "./pages/SLMC2";
import InnovationLab from "./pages/InnovationLab";
import BeulexAcademy from "./pages/BeulexAcademy";
import CaseStudies from "./pages/CaseStudies";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen selection:bg-accent-cyan/30 selection:text-accent-cyan">
      <ScrollToTop />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-green z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/youth-innovation" element={<YouthInnovation />} />
          <Route path="/slmc2" element={<SLMC2 />} />
          <Route path="/innovation-lab" element={<InnovationLab />} />
          <Route path="/beulex-academy" element={<BeulexAcademy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Background Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
