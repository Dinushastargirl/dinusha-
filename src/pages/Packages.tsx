import { motion } from "motion/react";
import { Check, Zap, ShoppingCart, Globe, Shield, MessageSquare, MapPin, Languages, CreditCard, Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: "starter",
    name: "Starter Website",
    icon: Zap,
    price: "45,000",
    range: "LKR 30,000 – 60,000",
    bestFor: "Small businesses, personal brands, small shops.",
    features: [
      "3–5 Professional Pages",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Social Media Links",
      "Basic SEO Setup",
      "1 Business Email Account",
      "Free Domain (1 Year)",
      "Free Hosting (1 Year)"
    ],
    color: "text-accent-cyan",
    borderColor: "border-accent-cyan/20"
  },
  {
    id: "business",
    name: "Business Website",
    icon: Globe,
    price: "95,000",
    range: "LKR 70,000 – 150,000",
    bestFor: "Growing companies, restaurants, agencies.",
    features: [
      "8–15 Custom Pages",
      "Custom UI/UX Design",
      "CMS (WordPress / Webflow)",
      "Blog / News Section",
      "Advanced SEO Optimization",
      "Google Analytics Setup",
      "WhatsApp Integration",
      "5 Business Email Accounts",
      "Speed Optimization"
    ],
    color: "text-accent-magenta",
    borderColor: "border-accent-magenta/20",
    popular: true
  },
  {
    id: "ecommerce",
    name: "E-Commerce Website",
    icon: ShoppingCart,
    price: "220,000",
    range: "LKR 150,000 – 350,000+",
    bestFor: "Online stores & Retailers.",
    features: [
      "Full Product Catalog",
      "Shopping Cart & Checkout",
      "Payment Gateway (PayHere/Stripe)",
      "Order Management System",
      "Product Search & Filters",
      "Delivery/Shipping System",
      "Customer Accounts",
      "Admin Dashboard"
    ],
    color: "text-accent-green",
    borderColor: "border-accent-green/20"
  },
  {
    id: "custom",
    name: "Premium Web App",
    icon: Shield,
    price: "350,000+",
    range: "LKR 350,000 – 1M+",
    bestFor: "Startups, SaaS, Large Companies.",
    features: [
      "Custom UI/UX Design",
      "Full-Stack Development",
      "Scalable Database Systems",
      "Secure User Authentication",
      "Third-party API Integrations",
      "Advanced Admin Dashboards",
      "AI / Machine Learning Integration",
      "Enterprise-grade SEO"
    ],
    color: "text-blue-500",
    borderColor: "border-blue-500/20"
  }
];

const addOns = [
  { service: "Logo Design", price: "10k – 30k" },
  { service: "SEO Monthly", price: "20k – 60k" },
  { service: "Maintenance", price: "5k – 20k / month" },
  { service: "Hosting", price: "10k – 30k / year" },
  { service: "Content Writing", price: "5k – 20k" }
];

const localFeatures = [
  { icon: MessageSquare, label: "WhatsApp Integration" },
  { icon: Languages, label: "Sinhala / Tamil Support" },
  { icon: CreditCard, label: "PayHere Payment Gateway" },
  { icon: MapPin, label: "Google Maps Location" },
  { icon: Globe, label: "Social Media Links" }
];

export default function Packages() {
  return (
    <div className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-magenta/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-cyan text-sm font-medium mb-8"
          >
            <Star size={16} />
            <span>Transparent Pricing</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
          >
            Digital <span className="text-gradient-cyan">Packages</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect plan for your business growth. From simple starters to complex 
            enterprise solutions, we deliver excellence at every scale.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[40px] glass border ${pkg.popular ? 'border-accent-cyan/40 scale-105 z-20 shadow-2xl shadow-accent-cyan/10' : 'border-white/5'} flex flex-col h-full group hover:border-white/20 transition-all duration-500`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-cyan text-background text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${pkg.color}`}>
                <pkg.icon size={28} />
              </div>

              <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-tight">{pkg.bestFor}</p>

              <div className="mb-8">
                <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-1">Starting from</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-bold text-white">Rs {pkg.price}</span>
                </div>
                <div className="text-zinc-500 text-[10px] mt-1 italic">{pkg.range}</div>
              </div>

              <div className="space-y-4 flex-grow mb-10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <Check size={16} className={`${pkg.color} mt-0.5 shrink-0`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                  pkg.popular 
                    ? 'bg-accent-cyan text-background hover:scale-105' 
                    : 'glass text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Local Features & Add-ons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Localized for Sri Lanka */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] glass border-white/5"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Optimized for Sri Lanka</h2>
            <p className="text-zinc-400 mb-10">
              We understand the local market. Every package includes these essential integrations 
              to ensure your business succeeds in the Sri Lankan digital landscape.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {localFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl glass border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-cyan">
                    <feat.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{feat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] glass border-white/5"
          >
            <h2 className="text-3xl font-display font-bold mb-8">Extra Services</h2>
            <div className="space-y-4">
              {addOns.map((addon, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl glass border-white/5 group hover:border-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-magenta">
                      <Plus size={20} />
                    </div>
                    <span className="text-white font-medium">{addon.service}</span>
                  </div>
                  <div className="text-accent-magenta font-mono font-bold">Rs {addon.price}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pro Tip Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-[40px] bg-gradient-to-br from-accent-cyan/10 to-accent-magenta/10 border border-white/10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-accent-green text-xs font-mono mb-6">
            <Shield size={14} />
            <span>PRO TIP</span>
          </div>
          <h2 className="text-3xl font-display font-bold mb-6">Transparent Payment Process</h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-0">
            To ensure trust and project security, we follow the industry-standard payment method in Sri Lanka: 
            <span className="text-white font-bold"> 50% upfront payment</span> to initiate the project and 
            <span className="text-white font-bold"> 50% upon successful completion</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
