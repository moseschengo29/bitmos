"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  FileText, 
  BookOpen, 
  ArrowUpRight,
  DownloadCloud,
  ShieldAlert,
  BarChart3,
  Briefcase
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA"; 

gsap.registerPlugin(useGSAP, ScrollTrigger);


const FEATURED_GUIDE = {
  id: "WP-2026-Q2",
  type: "STRATEGIC WHITEPAPER",
  title: "The Hidden Balance Sheet: Calculating the True Cost of Technical Debt.",
  desc: "Legacy architecture is not just an engineering friction point; it is a compounding financial liability. This guide provides a mathematical framework for CTOs and CFOs to quantify technical debt, justify migration budgets, and measure the ROI of architectural modernization.",
  target: "CTO, CFO, VP Engineering",
  readTime: "25 MIN READ >> 14 PAGES",
  icon: BarChart3
};

const GUIDE_LIBRARY = [
  {
    id: "DOC-094",
    title: "Build vs. Buy: The Infrastructure Dilemma.",
    desc: "A decision matrix for enterprise architecture. When to leverage managed services (AWS, Vercel) and when to build bespoke, bare-metal infrastructure for extreme scale.",
    category: "Architecture Strategy",
    target: "C-Suite / Lead Architects",
    icon: Briefcase
  },
  {
    id: "DOC-093",
    title: "Zero-Trust as a Business Enabler.",
    desc: "How migrating to mutual TLS and micro-segmented VPCs accelerates enterprise sales cycles by natively proving SOC2 and HIPAA compliance.",
    category: "Security & Risk",
    target: "CISO / CTO",
    icon: ShieldAlert
  },
  {
    id: "DOC-092",
    title: "The Physics of Engineering Velocity.",
    desc: "Why adding more developers slows you down. A guide to establishing deterministic CI/CD pipelines and structural code reviews to increase deployment frequency by 10x.",
    category: "Engineering Operations",
    target: "VP Engineering",
    icon: BookOpen
  },
  {
    id: "DOC-091",
    title: "Predictable Cloud Economics.",
    desc: "Moving beyond variable OPEX panic. How to architect auto-scaling infrastructure that strictly aligns cloud compute costs with active revenue-generating traffic.",
    category: "Financial Engineering",
    target: "CFO / Cloud Architects",
    icon: BarChart3
  }
];

export default function ExecutiveGuidesPage() {
  const container = useRef<HTMLElement>(null);
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  useGSAP(() => {
    gsap.fromTo(".hero-reveal", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out", delay: 0.1 }
    );

    gsap.fromTo(".featured-doc-reveal",
      { opacity: 0, scale: 0.98, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "expo.out", delay: 0.3 }
    );

    const gridTl = gsap.timeline({ scrollTrigger: { trigger: ".library-trigger", start: "top 80%" }});
    gridTl.fromTo(".doc-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" });

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-600 selection:text-white border-t border-slate-200">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pt-32 md:pt-40 pb-24 md:pb-32">  

        <div className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-slate-200 pb-16">
          <div className="max-w-4xl">
            <h1 className="hero-reveal text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.9] text-slate-900">
              Strategic <br />
              <span className="text-slate-900">Intelligence.</span>
            </h1>
          </div>
          <div className="hero-reveal max-w-sm">
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Whitepapers, economic models, and architectural playbooks designed for technical leaders making high-stakes infrastructure decisions.
            </p>
          </div>
        </div>

        <div className="featured-doc-reveal mb-32 border border-slate-200 bg-white group cursor-pointer hover:border-slate-300 transition-colors shadow-xl shadow-slate-200/50">
          <div className="flex flex-col lg:flex-row">            
            <div className="w-full lg:w-[40%] border-b lg:border-b-0 lg:border-r border-slate-200 bg-[#0B1121] p-8 lg:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-between">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
              
              <div className="relative z-10 flex justify-between items-start">
                 <div className="h-14 w-14 bg-blue-600/20 border border-blue-500 rounded-sm flex items-center justify-center text-blue-400">
                   <FEATURED_GUIDE.icon className="h-6 w-6" strokeWidth={1.5} />
                 </div>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest rotate-90 origin-right translate-y-8">
                   ORIGINAL RESEARCH
                 </span>
              </div>

              {/* Graphic Element representing Data/Debt */}
              <div className="relative z-10 w-full flex-grow flex items-center justify-center py-12">
                 <div className="w-full max-w-[200px] flex flex-col gap-2">
                   {[100, 80, 60, 40, 20].map((w, i) => (
                     <div key={i} className="h-4 bg-slate-800 rounded-r-sm w-full relative overflow-hidden group-hover:bg-slate-700 transition-colors">
                        <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: `${w}%` }} />
                     </div>
                   ))}
                 </div>
              </div>

              <div className="relative z-10 border-t border-slate-800 pt-6">
                <span className="block text-2xl font-black text-white tracking-widest">{FEATURED_GUIDE.id}</span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest mt-1">BITMOS ENTERPRISE ARCHIVE</span>
              </div>
            </div>

            <div className="w-full lg:w-[60%] p-8 lg:p-16 flex flex-col justify-between bg-white relative">
              
              <div>
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-8">
                  <span className="text-blue-600">[{FEATURED_GUIDE.type}]</span>
                  <span>Featured Release</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.05] mb-8">
                  {FEATURED_GUIDE.title}
                </h2>
                
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
                  {FEATURED_GUIDE.desc}
                </p>
              </div>

              {/* Meta Data */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 mb-12">
                 <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Target Audience</span>
                    <span className="text-sm font-bold text-slate-900">{FEATURED_GUIDE.target}</span>
                 </div>
                 <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Format</span>
                    <span className="text-sm font-bold text-slate-900">{FEATURED_GUIDE.readTime}</span>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-slate-900/10">
                  <DownloadCloud className="h-4 w-4" /> Download PDF
                </button>
                <button className="px-8 py-4 bg-transparent border border-slate-300 hover:border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2 group">
                  Read Abstract Online <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>

        <section className="library-trigger">
          <div className="mb-12 flex items-end justify-between">
            <h3 className="text-3xl font-black tracking-tighter text-slate-900">
              The Document Vault.
            </h3>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hidden sm:block">
              {GUIDE_LIBRARY.length} Briefings Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200 bg-[#FAFAFA]">
            {GUIDE_LIBRARY.map((doc) => {
              const Icon = doc.icon;
              const isHovered = hoveredDoc === doc.id;

              return (
                <div 
                  key={doc.id} 
                  onMouseEnter={() => setHoveredDoc(doc.id)}
                  onMouseLeave={() => setHoveredDoc(null)}
                  className="doc-card relative flex flex-col p-8 lg:p-12 border-r border-b border-slate-200 bg-white cursor-pointer min-h-[400px] overflow-hidden"
                >
                  {/* Hover Background Fill */}
                  <div className={`absolute inset-0 bg-blue-50/50 transform origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'scale-y-100' : 'scale-y-0'}`} />
                  
                  <div className="relative z-10 flex justify-between items-start mb-12">
                    <div className={`h-12 w-12 border flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${isHovered ? 'text-blue-600' : 'text-slate-300'}`}>
                      {doc.id}
                    </span>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
                      {doc.category}
                    </span>
                    <h4 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                      {doc.title}
                    </h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 pt-8 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] font-bold tracking-widest uppercase text-slate-400 mb-1">Audience</span>
                      <span className="text-xs font-bold text-slate-900">{doc.target}</span>
                    </div>
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-blue-600 text-white' : 'border border-slate-200 text-slate-400'}`}>
                      <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

      </div>

      <section className="bg-[#121c34] text-white py-24 md:py-32 overflow-hidden relative border-t border-slate-900">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-4 block">
              Direct Advisory
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              Require specific architectural context?
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              If your enterprise is facing a unique structural bottleneck, our lead architects are available for private technical briefings and infrastructure audits.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto px-10 py-5 bg-white hover:bg-blue-600 hover:text-white text-slate-900 text-sm font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-3 group">
              <BookOpen className="h-4 w-4" /> Schedule Briefing
            </button>
          </div>

        </div>
      </section>

      <EnterpriseCTA />
    </main>
  );
}