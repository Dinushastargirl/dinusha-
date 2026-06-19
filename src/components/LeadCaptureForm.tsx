import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface LeadCaptureFormProps {
  selectedService: string;
  selectedPackage?: string;
  onClose: () => void;
}

export default function LeadCaptureForm({ selectedService, selectedPackage, onClose }: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Proposal Requested!</h3>
          <p className="text-slate-600">
            Thank you for your interest. Our team will review your requirements and get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative my-8">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Request a Proposal</h2>
          <p className="text-slate-600 mb-8">
            Tell us about your project for <span className="font-semibold text-accent-magenta">{selectedService}</span> {selectedPackage && <span>({selectedPackage})</span>}.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Company Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta outline-none transition-all" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta outline-none transition-all" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Country</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta outline-none transition-all" placeholder="United States" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Industry</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta outline-none transition-all" placeholder="Technology, Healthcare, etc." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Project Description</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta outline-none transition-all resize-none" placeholder="Tell us about your goals and requirements..."></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Estimated Budget</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta outline-none transition-all bg-white">
                  <option value="">Select a range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">$25,000+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Timeline</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-magenta outline-none transition-all bg-white">
                  <option value="">Select timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-accent-magenta text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Proposal Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
