"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Globe2, ShieldCheck, HardDrive } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TelemetryGrid() {
  const container = useRef<HTMLElement>(null);
  const throughputRef = useRef<HTMLSpanElement>(null);
  const requestsRef = useRef<HTMLSpanElement>(null);

  // GSAP Number Counters & Reveal Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      // Reveal grid items
      tl.fromTo(
        ".telemetry-cell",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // Number Counters
      if (throughputRef.current && requestsRef.current) {
        const data = { throughput: 0, requests: 0 };
        
        gsap.to(data, {
          throughput: 50,
          requests: 120,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            if (throughputRef.current) throughputRef.current.innerText = Math.round(data.throughput).toString();
            if (requestsRef.current) requestsRef.current.innerText = Math.round(data.requests).toString();
          },
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          }
        });
      }
    },
    { scope: container }
  );

  return (
    <section ref={container} className="w-full bg-[#FAFAFA] text-slate-900 border-b border-slate-200 font-sans overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto lg:min-h-[600px]">
        
        {/* ======================================= */}
        {/* LEFT COLUMN: Sticky Context             */}
        {/* ======================================= */}
        <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-slate-200 p-6 sm:p-10 lg:p-16 flex flex-col items-start relative bg-[#FAFAFA] z-10">
          <div className="lg:sticky lg:top-32 w-full">
            
            <div className="flex items-center justify-between mb-6 lg:mb-8 w-full">
              <span className="inline-block px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 lg:border-none rounded-full lg:px-0 lg:py-0">
                Live Telemetry
              </span>
              {/* Blinking Status Indicator */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-4 sm:mb-6">
              Built for <br className="hidden sm:block" />
              <span className="text-slate-900 font-bold lg:font-medium">global scale.</span>
            </h2>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Our architectures are currently processing petabytes of data across distributed edge networks, maintaining strict SLA compliances without breaking a sweat.
            </p>
          </div>
        </div>

        {/* ======================================= */}
        {/* RIGHT COLUMN: The Data Grid             */}
        {/* ======================================= */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 bg-[#FAFAFA]">
          
          {/* CELL 1: System Uptime */}
          <div className="telemetry-cell group border-b md:border-r border-slate-200 p-6 sm:p-8 lg:p-12 flex flex-col justify-between hover:bg-white transition-colors duration-500 min-h-[250px] sm:min-h-[300px]">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-slate-400 group-hover:text-blue-600 transition-colors">
                <Activity className="h-4 w-4 sm:h-5 sm:w-5" />
                <h3 className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                  System Uptime
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap">SLA Active</span>
            </div>

            <div>
              <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-none">99.999</span>
                <span className="text-lg sm:text-xl font-bold text-slate-400">%</span>
              </div>
              
              <div className="flex items-end gap-1 h-10 sm:h-12 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                {[...Array(24)].map((_, i) => {
                  const height = 40 + Math.random() * 60;
                  const delay = Math.random() * 1.5;
                  return (
                    <div 
                      key={i} 
                      className="flex-1 bg-blue-500 rounded-t-sm origin-bottom animate-pulse"
                      style={{ height: `${height}%`, animationDelay: `${delay}s`, animationDuration: '1.5s' }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CELL 2: Data Throughput */}
          <div className="telemetry-cell group border-b border-slate-200 p-6 sm:p-8 lg:p-12 flex flex-col justify-between hover:bg-white transition-colors duration-500 min-h-[250px] sm:min-h-[300px]">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-slate-400 group-hover:text-emerald-600 transition-colors">
                <HardDrive className="h-4 w-4 sm:h-5 sm:w-5" />
                <h3 className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                  Daily Throughput
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 whitespace-nowrap">Terabytes</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span ref={throughputRef} className="text-6xl sm:text-7xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-none">0</span>
                <span className="text-xl sm:text-2xl font-bold text-slate-400">TB+</span>
              </div>
              <div className="flex items-center gap-3 mt-2 sm:mt-4 text-[9px] sm:text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full"></span> Read</span>
                <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> Write</span>
              </div>
            </div>
          </div>

          {/* CELL 3: Edge Network */}
          {/* FIX: added 'border-b md:border-b-0' to keep borders clean on mobile stacking */}
          <div className="telemetry-cell group border-b md:border-b-0 md:border-r border-slate-200 p-6 sm:p-8 lg:p-12 flex flex-col justify-between hover:bg-white transition-colors duration-500 min-h-[250px] sm:min-h-[300px] relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-56 h-56 sm:w-64 sm:h-64 border border-slate-200 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-700">
               <div className="w-40 h-40 sm:w-48 sm:h-48 border border-slate-200 rounded-full flex items-center justify-center">
                 <div className="w-24 h-24 sm:w-32 sm:h-32 border border-slate-200 rounded-full relative">
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" style={{ animationDelay: '0.5s'}}></div>
                 </div>
               </div>
            </div>

            <div className="flex items-center justify-between mb-6 sm:mb-8 relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 text-slate-400 group-hover:text-indigo-600 transition-colors">
                <Globe2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <h3 className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                  Global Edge Nodes
                </h3>
              </div>
            </div>

            <div className="relative z-10">
               <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                <span ref={requestsRef} className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-none">0</span>
                <span className="text-lg sm:text-xl font-bold text-slate-400">PoPs</span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Routing Traffic Worldwide</p>
            </div>
          </div>

          {/* CELL 4: Security */}
          <div className="telemetry-cell group p-6 sm:p-8 lg:p-12 flex flex-col justify-between hover:bg-white transition-colors duration-500 min-h-[250px] sm:min-h-[300px]">
            <div className="flex flex-wrap gap-3 items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-slate-400 group-hover:text-rose-600 transition-colors">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                <h3 className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                  Threat Mitigation
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-2 py-1 rounded whitespace-nowrap">Zero-Trust</span>
            </div>

            <div>
              <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-none">0</span>
                <span className="text-lg sm:text-xl font-bold text-slate-400">Breaches</span>
              </div>
              
              {/* FIX: Adjusted height to h-24 on mobile to prevent wrapping text from overflowing the box */}
              <div className="w-full bg-[#0B1120] rounded-lg p-3 sm:p-4 font-mono text-[8px] sm:text-[9px] text-slate-400 h-24 overflow-hidden relative border border-slate-200 shadow-inner group-hover:border-slate-300 transition-colors">
                 <div className="flex flex-col gap-1.5 animate-[slideUp_4s_linear_infinite]">
                   <p className="text-emerald-400 truncate">{`>`} Auth token validated [us-east-1]</p>
                   <p className="text-rose-400 truncate">{`>`} Blocked malformed SQL payload [ip: hidden]</p>
                   <p className="text-slate-500 truncate">{`>`} Auto-scaling event triggered</p>
                   <p className="text-emerald-400 truncate">{`>`} VPC peering tunnel established</p>
                   {/* Duplicated for infinite scroll */}
                   <p className="text-emerald-400 truncate">{`>`} Auth token validated [us-east-1]</p>
                   <p className="text-rose-400 truncate">{`>`} Blocked malformed SQL payload [ip: hidden]</p>
                 </div>
                 <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#0B1120] to-transparent"></div>
                 <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0B1120] to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}