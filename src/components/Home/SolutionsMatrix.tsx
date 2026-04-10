"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Network, Lock, ArrowRight, Activity } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SOLUTIONS = [
  {
    id: "monolith",
    icon: Database,
    label: "System Modernization & Scaling",
    problem: "An aging, rigid software foundation was bottlenecking business growth. Adding new features took weeks, and the system would choke and crash during peak customer traffic.",
    solution: "We carefully untangled the outdated system and rebuilt it into flexible, independent modules with zero downtime. This allowed the business to launch new features instantly and handle massive traffic surges without interrupting the customer experience.",
    techStack: ["Node.js", "PostgreSQL", "Docker", "Redis"],
    metrics: [
      { label: "Deployment Speed", value: "5x", trend: "Faster" },
      { label: "System Uptime", value: "99.99%", trend: "SLA" }
    ]
  },
  {
    id: "realtime",
    icon: Activity,
    label: "High-Traffic Reliability",
    problem: "A digital platform was buckling under the pressure of thousands of users logging in simultaneously, leading to lost data, freezing screens, and highly frustrated customers.",
    solution: "We rebuilt the platform's data foundation to process actions instantly, closer to the user. By eliminating lag and resolving data conflicts in real-time, we stopped system crashes and ensured a flawless, lightning-fast experience for every user globally.",
    techStack: ["TypeScript", "WebSockets", "GraphQL", "Edge Compute"],
    metrics: [
      { label: "Latency", value: "<45ms", trend: "Global" },
      { label: "Data Integrity", value: "100%", trend: "Maintained" }
    ]
  },
  {
    id: "security",
    icon: Lock,
    label: "Enterprise Security & Compliance",
    problem: "A financial platform needed to meet strict legal and security regulations to avoid massive fines, but they couldn't afford to make the app slow or frustrating for customers to use.",
    solution: "We built an invisible fortress around the platform. By encrypting sensitive customer data at every level and tracking every system action with an unbreakable audit log, we ensured complete regulatory compliance while keeping the user experience frictionless.",
    techStack: ["Next.js", "mTLS", "AES-256", "OAuth2"],
    metrics: [
      { label: "Compliance", value: "SOC2", trend: "Certified" },
      { label: "Vulnerabilities", value: "Zero", trend: "Reported" }
    ]
  }
];

export default function SolutionsMatrix() {
  const container = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Tab Switching Animation
  useGSAP(
    () => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      }
    },
    { dependencies: [activeTab], scope: container }
  );

  const activeData = SOLUTIONS[activeTab];

  return (
    <section ref={container} className="w-full bg-[#FAFAFA] text-slate-900 border-y border-slate-200 font-sans">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto lg:min-h-[700px]">
        
  
        <div className="w-full lg:w-[25%] xl:w-[30%] border-b lg:border-b-0 lg:border-r border-slate-200 p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col items-start relative bg-[#FAFAFA]">
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 lg:mb-8 border border-slate-200 rounded-full lg:border-none lg:px-0 lg:py-0">
              Architectural Prowess
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-medium tracking-tight leading-[1.1]">
              We untangle <br className="hidden sm:block" />
              <span className="text-slate-900 font-bold lg:font-medium">complex engineering.</span>
            </h2>
          </div>
        </div>

       
        <div className="w-full lg:w-[30%] xl:w-[30%] border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible bg-[#FAFAFA] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            const isActive = activeTab === index;

            return (
              <button
                key={solution.id}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center justify-between p-5 sm:p-8 lg:p-8 xl:p-10 border-r lg:border-r-0 lg:border-b border-slate-200 last:border-r-0 lg:last:border-b-0 shrink-0 lg:shrink transition-all duration-300 text-left ${
                  isActive ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] lg:shadow-none" : "hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className={`flex items-center justify-center transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                  }`}>
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-sm sm:text-base lg:text-lg xl:text-xl font-medium whitespace-nowrap lg:whitespace-normal transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"
                  }`}>
                    {solution.label}
                  </h3>
                </div>

                {/* Animated Arrow - Hidden on mobile as the content is below, not right */}
                <div className={`hidden lg:block overflow-hidden h-5 w-5 relative shrink-0 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>
                  <ArrowRight className="absolute h-5 w-5 text-blue-600" />
                </div>
              </button>
            );
          })}
        </div>

      
        <div className="w-full lg:flex-1 bg-white flex flex-col relative min-h-[500px]">
          <div ref={contentRef} className="flex flex-col h-full">
            
            <div className="p-6 sm:p-10 lg:p-12 xl:p-16 flex-grow flex flex-col gap-8 lg:gap-10">
              
              <div>
                <h4 className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3 lg:mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                  The Challenge
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeData.problem}
                </p>
              </div>
              
              <div>
                <h4 className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 mb-3 lg:mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                  The Bitmos Solution
                </h4>
                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
                  {activeData.solution}
                </p>
              </div>

              <div className="mt-4 lg:mt-auto pt-6 lg:pt-8 flex flex-wrap gap-2 border-t border-slate-100">
                {activeData.techStack.map((tech) => (
                  <span key={tech} className="inline-flex items-center border border-slate-200 bg-[#FAFAFA] px-2.5 py-1 lg:px-3 lg:py-1.5 text-[9px] lg:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            
            <div className="grid grid-cols-2 border-t border-slate-200 bg-[#FAFAFA] mt-auto">
              {activeData.metrics.map((metric, idx) => (
                <div key={idx} className="p-5 sm:p-8 lg:p-10 border-r border-slate-200 last:border-r-0 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-2 lg:mb-4">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide">{metric.label}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mt-1">
                     <span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900">
                      {metric.value}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold">
                      {metric.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}