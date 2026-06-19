import { X, Check } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";
import { useState } from "react";

interface Package {
  name: string;
  description: string;
  features: string[];
}

interface PackageModalProps {
  serviceName: string;
  packages: Package[];
  onClose: () => void;
}

export default function PackageModal({ serviceName, packages, onClose }: PackageModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  if (selectedPackage) {
    return (
      <LeadCaptureForm 
        selectedService={serviceName} 
        selectedPackage={selectedPackage} 
        onClose={onClose} 
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-50 rounded-3xl max-w-6xl w-full shadow-2xl relative my-8 border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 bg-white hover:bg-slate-100 p-2 rounded-full transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{serviceName} Packages</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a package to see the features included. Our packages are designed to scale with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col h-full relative overflow-hidden">
                {idx === 1 && (
                  <div className="absolute top-0 right-0 bg-accent-magenta text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-8">{pkg.description}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 rounded-full p-0.5 shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    idx === 1 
                      ? "bg-accent-magenta text-white hover:opacity-90 shadow-md" 
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Request Proposal
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
