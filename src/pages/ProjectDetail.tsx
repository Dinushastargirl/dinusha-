import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Sparkles, AlertCircle, Laptop, Eye, Workflow, Award } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project || project.id === "under-development") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-slate-900 grid-bg">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">
            {project?.id === "under-development" ? "Project Under Development" : "Project Not Found"}
          </h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            {project?.id === "under-development" 
              ? "This project is currently in the works. Stay tuned for updates!" 
              : "The project you are looking for doesn't exist or has been moved."}
          </p>
          <Link to="/portfolio" className="text-accent-cyan flex items-center gap-2 justify-center hover:underline font-bold">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Determine if it is a conceptual project or client project
  const isConcept = project.github === "#" && project.link === "#";

  // Dynamic Case Study fallbacks for projects without custom case study files
  const defaultProblems = [
    `Establishing a cohesive digital presentation that reflects the product's primary value proposition under limited timeline scopes.`,
    `Optimizing user interaction points to drive high conversion rates while keeping client-side dependencies minimal and lightweight.`
  ];

  const caseStudy = {
    challenge: project.caseStudy?.challenge || `Building a high-performance, responsive layout for ${project.title} that delivers a flawless user experience across modern desktop and mobile browsers.`,
    solution: project.caseStudy?.solution || `Developed a custom frontend structure in ${project.tech.slice(0, 3).join(", ")} utilizing visual optimization techniques, fast asset queries, and fluid animations.`,
    result: project.caseStudy?.result || `Created a highly successful deployment showing immediate user engagement improvements and low overall operational overhead.`,
    metrics: project.caseStudy?.metrics || [
      { label: "Core Speed", value: "Under 1s" },
      { label: "Design Fidelity", value: "100%" }
    ],
    problemDetails: project.caseStudy?.problemDetails || project.fullDescription || `The primary challenge of this project was engineering a fast, reliable mechanism to convey ${project.title}'s capabilities. The legacy interface lacked clear navigational directions and was unoptimized for mobile platforms.`,
    solutionBreakdown: project.caseStudy?.solutionBreakdown || `We restructured the UI framework into isolated modules. By utilizing modern styling architectures, we cut CSS complexity, which reduced bundle sizes and accelerated loading speeds on high-traffic landing pages.`,
    uiuxDesign: project.caseStudy?.uiuxDesign || `The interface focuses on high contrast spacing and readability. Headings use prominent Outfit font parameters while description copy runs on Inter. Grid outlines emphasize structure, mirroring a clean SaaS look.`,
    developmentApproach: project.caseStudy?.developmentApproach || `Developed with a component-driven strategy to ensure code reusability. Integrated automated asset packaging and lint rules to verify bundle clean-up before release.`,
    resultsImpact: project.caseStudy?.resultsImpact || `The resulting platform establishes immediate trust. The layout converts incoming visitors into active prospects by funneling attention to conversion endpoints and clear call-to-actions.`
  };

  return (
    <div className="pt-32 pb-24 bg-background grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/portfolio" className="text-slate-500 hover:text-slate-900 inline-flex items-center gap-2 text-sm font-semibold transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Case Study Header */}
        <div className="border border-slate-200 bg-white rounded-[40px] p-8 md:p-16 shadow-sm mb-16 relative overflow-hidden">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-50 border border-slate-200 text-slate-500 mb-6">
              {project.category} Case Study
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-none">
              {project.title}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Hero image showcase */}
        <div className="aspect-video rounded-[32px] overflow-hidden border border-slate-200 p-2 bg-white shadow-sm mb-16">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-[24px]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Case Study Grid content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Case Study Sections */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Project Overview */}
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Laptop className="text-accent-cyan" size={20} />
                Project Overview
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                {project.goals.map((goal) => (
                  <div key={goal} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={16} />
                    <span className="text-slate-600 text-sm">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Client / Concept Problem */}
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <AlertCircle className="text-accent-cyan" size={20} />
                The Challenge & Problem
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {caseStudy.problemDetails}
              </p>
            </div>

            {/* 3. Solution Breakdown */}
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="text-accent-cyan" size={20} />
                Our Solution Breakdown
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {caseStudy.solutionBreakdown}
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* 4. UI/UX Design */}
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Eye className="text-accent-cyan" size={20} />
                UI/UX Design Direction
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {caseStudy.uiuxDesign}
              </p>
            </div>

            {/* 5. Development Approach */}
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Workflow className="text-accent-cyan" size={20} />
                Development Approach
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {caseStudy.developmentApproach}
              </p>
            </div>

            {/* 6. Results / Impact */}
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="text-accent-cyan" size={20} />
                Results & Expected Impact
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                {caseStudy.resultsImpact}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                {caseStudy.metrics.map((metric, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/50">
                    <div className="text-3xl font-display font-bold text-slate-950">{metric.value}</div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar metadata & CTA */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Meta details */}
            <div className="border border-slate-200 bg-white rounded-[32px] p-8 shadow-sm">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-6">Technical Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/50 text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="space-y-4 pt-6 border-t border-slate-100">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-slate-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    Live Demo Link
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 border border-slate-200 bg-white text-slate-700 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                  >
                    Source Code
                    <Github size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Custom CTA: Build Something Similar */}
            <div className="border border-slate-200 bg-slate-950 text-white rounded-[32px] p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/15 rounded-full filter blur-2xl" />
              <h3 className="text-xl font-display font-bold text-white mb-4 relative z-10">Build Something Similar</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">
                Interested in executing this style of implementation? Reach out to consult with our division leads and request a complete proposal scope.
              </p>
              <Link 
                to={`/contact?service=Build Similar: ${encodeURIComponent(project.title)}`}
                className="w-full py-4 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-102 transition-all relative z-10"
              >
                Request Proposal
              </Link>
            </div>

          </div>

        </div>

        {/* Project Gallery Screenshots */}
        {project.screenshots.length > 0 && (
          <section className="border-t border-slate-200 pt-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Case Study Visuals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.screenshots.map((screenshot, idx) => (
                <div key={idx} className="rounded-3xl overflow-hidden border border-slate-200 p-2 bg-white shadow-sm">
                  <img 
                    src={screenshot} 
                    alt={`${project.title} visual block ${idx + 1}`} 
                    className="w-full h-auto rounded-2xl" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
