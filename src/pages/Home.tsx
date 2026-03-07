import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code, Rocket, GraduationCap, Calculator, Beaker, TrendingUp, User, Mail, Check, ShoppingCart, Globe, Star, Zap, Cpu, Globe2, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import RubiksCube from "../components/RubiksCube";
import CircularShowcase from "../components/CircularShowcase";

export default function Home() {
  return (
    <div className="pt-20 grid-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-magenta text-sm font-mono mb-8"
            >
              <Sparkles size={16} />
              <span>EST. 2024 • GLOBAL TECH STUDIO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-[120px] font-display font-bold tracking-tighter leading-[0.85] mb-8"
            >
              BEULEX <br />
              <span className="text-gradient-magenta">STUDIO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-zinc-400 text-xl md:text-2xl mb-12 leading-tight"
            >
              On a mission to help 1000 small businesses scale up online and create a revolution to revaluate people's lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/website-projects"
                className="group px-8 py-4 bg-white text-background rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                View Portfolio
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 glass text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
              >
                Start Project
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            <RubiksCube />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent-magenta to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6">
            CORE <span className="text-zinc-600">CAPABILITIES</span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl">
            Our expertise spans across the entire digital spectrum, from high-end web engineering to advanced AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bento-card p-10 flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Globe2 size={200} />
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent-magenta/10 flex items-center justify-center text-accent-magenta mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-4xl font-display font-bold mb-4">Web Engineering</h3>
              <p className="text-zinc-400 text-lg max-w-md">
                Building lightning-fast, scalable web platforms using the most modern tech stacks available today.
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-accent-magenta font-mono text-sm uppercase tracking-widest group">
              Explore Tech <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bento-card p-8 flex flex-col justify-between bg-accent-magenta/5 border-accent-magenta/20"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent-magenta/20 flex items-center justify-center text-accent-magenta mb-6">
                <Cpu size={20} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">AI Integration</h3>
              <p className="text-zinc-500 text-sm">
                Smart solutions powered by cutting-edge machine learning models.
              </p>
            </div>
            <Link to="/ai-softwares" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bento-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6">
                <Layers size={20} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Creative Digital</h3>
              <p className="text-zinc-500 text-sm">
                Interactive experiences that push the boundaries of the browser.
              </p>
            </div>
            <Link to="/creative-projects" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Large Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bento-card p-10 flex flex-col justify-between min-h-[400px] bg-zinc-900/50"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-6xl font-display font-bold mb-2">99%</h3>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-tighter">Performance Score</p>
              </div>
              <div>
                <h3 className="text-6xl font-display font-bold mb-2">24/7</h3>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-tighter">Global Support</p>
              </div>
              <div className="col-span-2">
                <h4 className="text-2xl font-display font-bold mb-4">Ready to scale?</h4>
                <p className="text-zinc-400 mb-8">
                  Our infrastructure is built to handle millions of users with zero downtime.
                </p>
                <Link to="/contact" className="px-6 py-3 bg-accent-magenta text-background rounded-xl font-bold inline-block">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Circular Showcase */}
      <CircularShowcase />

      {/* Final CTA - Edge Style */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-[140px] font-display font-bold tracking-tighter leading-[0.8] mb-12">
              LET'S <br />
              <span className="text-gradient-magenta">BUILD</span>
            </h2>
            <p className="text-zinc-400 text-2xl mb-16 max-w-xl mx-auto">
              Ready to transform your digital presence? We're currently accepting new projects for 2024.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-background rounded-[32px] font-bold text-2xl hover:scale-105 transition-all">
              Start a Conversation <ArrowRight size={28} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
