"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Database, Cpu, Rocket, Pause, Play, CheckCircle2 } from "lucide-react";

// ==========================================
// DATA PAYLOAD
// ==========================================
const PHASES = [
  {
    id: "01",
    title: "System Discovery",
    label: "Audit",
    desc: "We deploy senior architects to audit your existing codebase, map infrastructure bottlenecks, and identify critical technical debt before a single line of code is written.",
    icon: Search,
    metrics: ["Architecture Audit", "Vulnerability Scan", "Tech Debt Mapping"]
  },
  {
    id: "02",
    title: "Blueprint & Schema",
    label: "Architecture",
    desc: "Strict architectural mapping. We design the database schemas, define the microservice boundaries, and establish the exact CI/CD deployment pipelines required for zero-downtime execution.",
    icon: Database,
    metrics: ["Entity Relationship", "API Spec", "VPC Design"]
  },
  {
    id: "03",
    title: "High-Velocity Build",
    label: "Execution",
    desc: "Agile, full-stack development governed by rigorous peer-review and automated testing. We build in isolated VPC environments, ensuring absolute security and rapid iteration cycles.",
    icon: Cpu,
    metrics: ["Test-Driven Dev", "Code Reviews", "Isolated Environments"]
  },
  {
    id: "04",
    title: "Global Deployment",
    label: "Launch",
    desc: "Orchestrated rollouts using blue/green deployment strategies. We push your platform to the edge, utilizing multi-region clustering to guarantee sub-50ms latency worldwide.",
    icon: Rocket,
    metrics: ["Blue/Green Rollout", "Edge Caching", "Load Balancing"]
  }
];

const AUTO_ADVANCE_MS = 6000;

export default function KineticTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PHASES.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const handleNodeClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const activePhase = PHASES[activeIndex];
  const Icon = activePhase.icon;

  return (
    <section className="w-full bg-[#FAFAFA] py-12 font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        
        {/* ========================================== */}
        {/* RESTRUCTURED EDITORIAL HEADER              */}
        {/* ========================================== */}
        <div className="flex justify-between items-start mb-24 relative z-20">
          <div className="max-w-2xl">
            {/* Subtitle moved above Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                Methodology
              </span>
            </div>
            {/* Title styled slightly smaller and pure dark */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Deterministic Execution.
            </h2>
          </div>

          {/* Minimalist Icon-Only Play/Pause Control */}
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm shrink-0"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play className="h-4 w-4 ml-0.5" /> : <Pause className="h-4 w-4" />}
          </button>
        </div>

        {/* ========================================== */}
        {/* REDESIGNED HORIZONTAL TRACK (Segmented)    */}
        {/* ========================================== */}
        <div className="flex items-center justify-between w-full mb-28 relative z-10">
          {PHASES.map((phase, index) => {
            const isPast = index < activeIndex;
            const isActive = index === activeIndex;
            const isNotLast = index < PHASES.length - 1;

            return (
              <React.Fragment key={phase.id}>
                
                {/* The Large Circular Node */}
                <div 
                  onClick={() => handleNodeClick(index)}
                  className="flex flex-col items-center relative group cursor-pointer shrink-0"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold transition-all duration-500 border-2
                    ${isActive ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-110' : 
                      isPast ? 'bg-slate-900 border-slate-900 text-white' : 
                      'bg-[#FAFAFA] border-slate-300 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600'}
                  `}>
                    {phase.id}
                  </div>
                  
                  {/* Integrated Bold Label */}
                  <div className="absolute top-[80px] text-center w-32">
                    <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors duration-500
                      ${isActive ? 'text-blue-600' : isPast ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}
                    `}>
                      {phase.label}
                    </span>
                  </div>
                </div>

                {/* The Connecting Segment */}
                {isNotLast && (
                  <div className="flex-1 h-[2px] mx-4 md:mx-6 rounded-full overflow-hidden bg-slate-200">
                    <motion.div 
                      className="h-full bg-slate-900 origin-left"
                      initial={{ width: "0%" }}
                      animate={{ width: isPast ? "100%" : "0%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                )}
                
              </React.Fragment>
            );
          })}
        </div>

        <div className="relative min-h-[420px] bg-white border border-slate-200 rounded-[2rem] shadow-xl shadow-slate-200/40 overflow-hidden">
          
          {/* Larger, Architectural Background Grid */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', 
              backgroundSize: '4rem 4rem' 
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.id}
              initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col h-full p-8 md:p-14 lg:p-16"
            >
              
              {/* Massive Faint Number moved to Bottom Right */}
              <div className="absolute -bottom-8 -right-4 text-[180px] md:text-[240px] font-black tracking-tighter text-slate-50 leading-none select-none pointer-events-none z-0">
                {activePhase.id}
              </div>

              {/* Top Row: Title & Top-Right Icon */}
              <div className="relative z-10 flex justify-between items-start mb-8 md:mb-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl">
                  {activePhase.title}
                </h3>
                
                {/* Phase Icon positioned top right */}
                <div className="hidden md:flex h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 items-center justify-center text-blue-600 shrink-0 shadow-sm">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 max-w-2xl mb-12">
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {activePhase.desc}
                </p>
              </div>

              {/* Deliverables Grid (Clean layout) */}
              <div className="relative z-10 mt-auto pt-8 border-t border-slate-100">
                 <span className="text-[10px]  font-bold tracking-[0.2em] uppercase text-slate-400 block mb-6">
                    Key Deliverables
                 </span>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activePhase.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-xl shadow-sm">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" strokeWidth={2.5} />
                        <span className="text-xs font-bold text-slate-700 tracking-wide">
                          {metric}
                        </span>
                      </div>
                    ))}
                 </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Clean Auto-Progress Bar Indicator at the very bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-50">
             {!isPaused && (
               <motion.div 
                 key={activeIndex} 
                 className="h-full bg-blue-600"
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
               />
             )}
          </div>

        </div>

      </div>
    </section>
  );
}