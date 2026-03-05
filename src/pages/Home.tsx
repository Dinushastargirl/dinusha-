import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code, Rocket, GraduationCap, Calculator, Beaker, TrendingUp, User, Mail, Check, ShoppingCart, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-magenta/10 rounded-full blur-[150px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-cyan text-sm font-medium mb-8"
          >
            <Sparkles size={16} />
            <span>A Global Digital Studio for the Next Generation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-display font-bold tracking-tight mb-8 leading-[1.0]"
          >
            BEULEX <br />
            <span className="text-gradient-cyan">DIGITAL</span> STUDIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-zinc-400 text-xl md:text-2xl mb-12 leading-relaxed"
          >
            Building the future with code, creativity, and innovation. 
            A professional global tech company empowering the next generation of innovators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="group px-10 py-5 bg-white text-background rounded-full font-bold text-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore Our Work
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 glass text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all border border-white/10"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation Grid (Minimal CTAs) */}
      <section className="py-24 bg-surface/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "About the Founder", link: "/about", icon: User, color: "text-accent-cyan", desc: "Learn about Dinusha Pushparajah." },
              { title: "Our Services", link: "/services", icon: Rocket, color: "text-accent-magenta", desc: "Professional digital solutions." },
              { title: "Packages", link: "/packages", icon: Star, color: "text-accent-cyan", desc: "Transparent pricing & plans." },
              { title: "Beulex Academy", link: "/beulex-academy", icon: GraduationCap, color: "text-accent-green", desc: "Join our training programs." },
              { title: "Youth Innovation", link: "/youth-innovation", icon: Sparkles, color: "text-blue-500", desc: "Empowering young creators." },
              { title: "SLMC²", link: "/slmc2", icon: Calculator, color: "text-yellow-500", desc: "Professional Mathematical Community." },
              { title: "Innovation Lab", link: "/innovation-lab", icon: Beaker, color: "text-purple-500", desc: "Experimental tech projects." },
              { title: "Case Studies", link: "/case-studies", icon: TrendingUp, color: "text-orange-500", desc: "Measurable project results." },
              { title: "Tech Stack", link: "/tech-stack", icon: Code, color: "text-emerald-500", desc: "Our modern technology stack." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.link}
                  className="p-8 h-full rounded-3xl glass border-white/5 hover:border-white/10 transition-all group flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-zinc-500 text-sm mb-6 flex-grow">{item.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                    Explore <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-accent-cyan text-xs font-mono mb-6"
            >
              <TrendingUp size={14} />
              <span>PRICING & PACKAGES</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">Choose Your <span className="text-gradient-cyan">Plan</span></h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Professional digital solutions tailored for every stage of your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Starter Website", 
                price: "45,000", 
                icon: Rocket, 
                color: "text-accent-cyan",
                features: ["5 Professional Pages", "Mobile Responsive", "Contact Form", "Free Domain"]
              },
              { 
                title: "Business Website", 
                price: "95,000", 
                icon: Globe, 
                color: "text-accent-magenta",
                features: ["10 Custom Pages", "Blog System", "SEO Optimization", "Google Analytics"],
                popular: true
              },
              { 
                title: "E-Commerce Website", 
                price: "220,000", 
                icon: ShoppingCart, 
                color: "text-accent-green",
                features: ["Online Store", "Payment Gateway", "Product Management", "Order Dashboard"]
              }
            ].map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-[40px] glass border ${pkg.popular ? 'border-accent-cyan/30 scale-105 z-10' : 'border-white/5'} flex flex-col h-full`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${pkg.color}`}>
                  <pkg.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.title}</h3>
                <div className="mb-8">
                  <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-1">Starting from</div>
                  <div className="text-3xl font-display font-bold text-white">Rs {pkg.price}</div>
                </div>
                <div className="space-y-4 flex-grow mb-10">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                      <Check size={16} className={`${pkg.color} shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/packages"
                  className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                    pkg.popular 
                      ? 'bg-accent-cyan text-background hover:scale-105' 
                      : 'glass text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/packages" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
              View all packages and add-ons <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to build the future?</h2>
          <p className="text-zinc-400 text-xl mb-12">
            Whether you have a startup idea or want to join our academy, we're here to help you innovate.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-white text-background rounded-full font-bold text-lg hover:scale-105 transition-all">
              Contact Us
            </Link>
            <Link to="/beulex-academy" className="px-10 py-5 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
              Join the Academy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
