"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Calendar, FolderGit2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}


const CASE_STUDIES = [
  {
    id: "01",
    category: "System Architecture",
    title: "EduAnalytics LMS Scalability",
    date: "March 2025",
    description: "Architected a highly scalable, distributed Learning Management System designed to handle massive concurrent traffic spikes during enterprise training rollouts.",
    link: "/case-studies/eduanalytics"
  },
  {
    id: "02",
    category: "Zero-Trust Security",
    title: "LindaKura Civic Voting Network",
    date: "August 2022",
    description: "Engineered a secure, highly resilient voting infrastructure capable of surviving extreme traffic surges and anomalous mitigation during civic deployments.",
    link: "/case-studies/lindakura"
  },
  {
    id: "03",
    category: "Edge Computing",
    title: "Global FinTech Ledger Sync",
    date: "November 2024",
    description: "Deployed a multi-region edge architecture that reduced cross-continental transaction settlement latency by 84% while maintaining strict ACID compliance.",
    link: "/case-studies/fintech-ledger"
  }
];

export default function CaseStudyCards() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".insight-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%", 
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative z-10 py-24 lg:py-32 bg-[#FAFAFA] border-y border-slate-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-600 mb-6">
              <span className="h-[2px] w-6 bg-blue-600" />
              Execution Ledger
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#121212]">
              Recent Case Studies.
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#121212] hover:text-blue-600 transition-colors pb-2">
            View All Cases
            <div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-600 transition-colors">
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((card, idx) => (
            <div 
              key={idx} 
              className="insight-card group relative flex flex-col bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] ring-1 ring-slate-200 hover:ring-blue-300"
            >
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-8 -translate-y-8 z-0" />

              <div className="p-8 lg:p-10 flex-1 flex flex-col relative z-10">
                
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                    <FolderGit2 className="h-3.5 w-3.5 text-blue-600" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-blue-700 transition-colors">
                      {card.category}
                    </span>
                  </div>
                  <span className="text-4xl font-heading font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500 select-none">
                    {card.id}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl lg:text-3xl font-black tracking-tight text-[#121212] mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                  {card.description}
                </p>
              </div>

              <div className="px-8 lg:px-10 py-6 border-t border-slate-100 bg-slate-50/50 group-hover:bg-white flex items-center justify-between mt-auto relative z-10 transition-colors duration-300">
                
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-500 transition-colors">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                    {card.date}
                  </span>
                </div>

                <a 
                  href={card.link}
                  className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#121212] group-hover:text-blue-600 transition-colors"
                >
                  Examine
                  <div className="h-8 w-8 rounded-full bg-slate-200/50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}