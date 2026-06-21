import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Globe, CheckCircle2, ChevronRight } from "lucide-react";
import { services } from "../data/services";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const initialPackage = searchParams.get("package") || "";

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    serviceSelected: "",
    packageInterest: "",
    projectDescription: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync query params when component mounts or query params change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      serviceSelected: initialService,
      packageInterest: initialPackage
    }));
  }, [initialService, initialPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit proposal request. Please try again.");
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch (err: any) {
      console.error(err);
      setIsSubmitting(false);
      setSubmitError(err.message || "A network error occurred. Please try again.");
    }
  };

  if (submitSuccess) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-background grid-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full mx-auto px-4 text-center"
        >
          <div className="border border-slate-200 bg-white rounded-[40px] p-8 md:p-16 shadow-lg">
            <div className="w-24 h-24 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-500">
              <CheckCircle2 size={48} />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Proposal Requested!
            </h1>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your project details have been securely logged in our database. 
              Our team has been notified and will prepare a tailored proposal for <span className="font-semibold text-accent-cyan">{formData.serviceSelected || "your selected service"}</span> within 24 hours.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:opacity-95 transition-all shadow-sm"
              >
                Go to Homepage
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-background grid-bg relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-cyan/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/10 w-96 h-96 bg-accent-magenta/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">Beulex Proposal Hub</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
          >
            Request a <span className="text-accent-cyan">Proposal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Fill out the project parameters below. All submissions are processed securely in our local databases 
            and trigger direct advisory notifications to our division heads.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Our Offices</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Proposal Inquiries</div>
                    <div className="text-sm font-bold text-slate-950">hello@beulex.studio</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Helpline</div>
                    <div className="text-sm font-bold text-slate-950">+94 7X XXX XXXX</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">HQ Location</div>
                    <div className="text-sm font-bold text-slate-950">Colombo, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">INCUBATING NETWORKS</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Connect with our developer pipelines and review code guidelines on our open channels.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                  <Globe size={18} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Unified proposal form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 border border-slate-200 bg-white rounded-[32px] p-8 md:p-12 shadow-sm"
          >
            {submitError && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-2xl flex items-center gap-3">
                <span className="text-lg">⚠️</span>
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium"
                    placeholder="Enter your name"
                  />
                </div>

                {/* 2. Company Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
                  <input
                    required
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium"
                    placeholder="e.g. Acme Corp"
                  />
                </div>

                {/* 3. Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium"
                    placeholder="you@company.com"
                  />
                </div>

                {/* 4. Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium"
                    placeholder="e.g. +94 XX XXX XXXX"
                  />
                </div>

                {/* 5. Country */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Country</label>
                  <input
                    required
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium"
                    placeholder="e.g. Sri Lanka"
                  />
                </div>

                {/* 6. Service Selected */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Service Division / Type</label>
                  <select
                    required
                    name="serviceSelected"
                    value={formData.serviceSelected}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium appearance-none"
                  >
                    <option value="">Select a service</option>
                    <optgroup label="Beulex Digital">
                      {services.filter(s => s.division === "digital").map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Beulex Labs">
                      {services.filter(s => s.division === "labs").map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Beulex Startup">
                      <option value="Beulex Startup Acceleration">Beulex Startup Acceleration</option>
                      <option value="Startup Launch Package">Startup Launch Package</option>
                      <option value="Business Proposal Development">Business Proposal Development</option>
                      <option value="MVP Planning">MVP Planning</option>
                      <option value="Digital Presence Setup">Digital Presence Setup</option>
                      <option value="Startup Growth Strategy">Startup Growth Strategy</option>
                    </optgroup>
                    <optgroup label="Beulex Academy">
                      <option value="Corporate Training">Corporate Training</option>
                      <option value="Webinars">Webinars</option>
                      <option value="Student Training">Student Training</option>
                      <option value="AI Awareness Programs">AI Awareness Programs</option>
                      <option value="AI Cert Awareness Program">AI Cert Awareness Program</option>
                    </optgroup>
                    <optgroup label="Beulex Ventures (Inquiry)">
                      <option value="Venture: Beulex CRM Lite">Beulex CRM Lite</option>
                      <option value="Venture: Shelf Analyzer">Shelf Analyzer</option>
                      <option value="Venture: Headless Commerce Bridge">Headless Commerce Bridge</option>
                      <option value="Venture: Agent Desk Support Hub">Agent Desk Support Hub</option>
                      <option value="Venture: Beulex Cortex">Beulex Cortex (AI product layer)</option>
                    </optgroup>
                    <option value="Other / Custom Project">Other / Custom Software</option>
                  </select>
                </div>

                {/* 7. Package Interest */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Package Interest (Optional)</label>
                  <select
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium appearance-none"
                  >
                    <option value="">No package selected</option>
                    <option value="Starter">Starter Package / MVP</option>
                    <option value="Growth">Growth Package</option>
                    <option value="Premium">Premium Package</option>
                    <option value="Enterprise">Enterprise Solution</option>
                    <option value="Custom Scope">Custom Scope</option>
                  </select>
                </div>

                {/* 8. Timeline */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Estimated Timeline</label>
                  <select
                    required
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium appearance-none"
                  >
                    <option value="">Select a timeline</option>
                    <option value="ASAP">As soon as possible (ASAP)</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Flexible">Flexible / Ongoing</option>
                  </select>
                </div>

              </div>

              {/* 9. Project Description */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Project Description</label>
                <textarea
                  required
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent-cyan focus:bg-white transition-colors text-slate-900 font-medium resize-none"
                  placeholder="Outline your project scope, problems you are facing, and expected features..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4.5 bg-slate-950 text-white rounded-2xl font-bold hover:bg-slate-900 transition-colors shadow-md flex items-center justify-center gap-2 group disabled:opacity-75"
              >
                {isSubmitting ? "Sending Request..." : "Submit Proposal Request"}
                <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
