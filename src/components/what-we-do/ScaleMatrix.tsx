"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Activity, Lock, ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// DATA PAYLOAD
// ==========================================
const FEATURES = [
  {
    id: "legacy",
    tab: "Legacy Monolith Extraction",
    icon: Database,
    challenge: "A monolithic, deeply coupled legacy system throttling deployment velocity and causing cascading failures during peak traffic events.",
    solution: "We executed the Strangler Fig pattern, systematically decoupling the monolith into domain-driven microservices with zero downtime. Traffic was incrementally routed to the new, highly available cloud infrastructure.",
    tech: ["NODE.JS", "KUBERNETES", "KAFKA", "POSTGRESQL"]
  },
  {
    id: "sync",
    tab: "High-Concurrency Sync",
    icon: Activity,
    challenge: "A globally distributed application suffering from data collision and severe latency spikes during real-time, multi-user collaborative sessions.",
    solution: "We engineered a real-time synchronization engine leveraging WebSocket connections and CRDTs (Conflict-free Replicated Data Types). This guarantees sub-50ms eventual consistency across all global edge nodes.",
    tech: ["GOLANG", "REDIS", "WEBSOCKETS", "AWS EDGE"]
  },
  {
    id: "zero-trust",
    tab: "Zero-Trust Infrastructure",
    icon: Lock,
    challenge: "A financial technology platform requiring stringent regulatory compliance (GDPR/SOC2) while maintaining a frictionless user experience.",
    solution: "We implemented a strict Zero-Trust security model. All internal microservices require mutual TLS authentication. We added field-level encryption for PII and built an immutable, cryptographically verifiable audit log.",
    tech: ["NEXT.JS", "MTLS", "AES-256", "OAUTH2"]
  }
];

export function ArchitecturalProwess() {
  const container = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(2); 
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    // Animate Left Column
    tl.fromTo(".ap-left-col", 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 1, ease: "expo.out" }
    );

    // Stagger Middle Column Tabs
    tl.fromTo(".ap-tab", 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" }, 
      "-=0.6"
    );

    // Animate Right Column Content
    tl.fromTo(".ap-right-col", 
      { opacity: 0, filter: "blur(4px)" }, 
      { opacity: 1, filter: "blur(0px)", duration: 1, ease: "expo.out" }, 
      "-=0.4"
    );
  }, { scope: container });

  const activeData = FEATURES[activeIndex];

  return (
    <section ref={container} className="w-full bg-[#FAFAFA] py-24 md:py-32 font-sans overflow-hidden border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-y border-slate-200 bg-[#FAFAFA]">
          
          <div className="ap-left-col p-8 lg:p-16 flex flex-col justify-center">
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6 block">
               Architectural Prowess
             </span>
             <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05] max-w-sm">
               We untangle complex engineering.
             </h2>
          </div>

          <div className="flex flex-col bg-[#FAFAFA] relative z-10 py-8 lg:py-0">
            <div className="flex flex-col h-full justify-center">
              {FEATURES.map((feature, index) => {
                const isActive = index === activeIndex;
                const Icon = feature.icon;

                return (
                  <div 
                    key={feature.id}
                    onClick={() => setActiveIndex(index)}
                    className="ap-tab relative cursor-pointer group"
                  >
                    <div className={`absolute inset-x-0 inset-y-[-1px] transition-all duration-300 pointer-events-none z-0
                      ${isActive ? 'bg-white border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.04)] lg:-ml-4 lg:-mr-4 rounded-sm' : 'bg-transparent border-t border-transparent group-hover:bg-slate-50'}
                    `} />
                    
                    <div className={`relative z-10 flex items-center justify-between px-8 lg:px-12 py-8 transition-colors duration-300 border-b border-slate-200
                      ${isActive ? 'border-transparent' : ''}
                    `}>
                      <div className="flex items-center gap-6">
                        <Icon className={`h-6 w-6 stroke-[1.5] transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                        <span className={`text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                          {feature.tab}
                        </span>
                      </div>
                      
                      {isActive && (
                        <ArrowRight className="h-5 w-5 text-blue-600 shrink-0" strokeWidth={2} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ap-right-col p-8 lg:p-16 bg-white lg:bg-[#FAFAFA] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full justify-center"
              >
                
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1.5 w-1.5 bg-slate-300 rounded-full" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                      The Challenge
                    </span>
                  </div>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {activeData.challenge}
                  </p>
                </div>

                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600">
                      The Bitmos Solution
                    </span>
                  </div>
                  <p className="text-lg text-slate-900 font-medium leading-relaxed">
                    {activeData.solution}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2">
                    {activeData.tech.map((techItem, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 border border-slate-200 rounded-sm bg-white text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}