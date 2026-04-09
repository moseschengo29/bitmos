"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Server, ShieldCheck, Zap, GitPullRequest, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- SPOTLIGHT CARD COMPONENT ---
// This handles the beautiful Vercel-style cursor tracking glow
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => { setOpacity(1); };
  const handleMouseLeave = () => { setOpacity(0); };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white shadow-sm transition-shadow duration-500 hover:shadow-md ${className}`}
    >
      {/* The following glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default function CapabilitiesBento() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      });

      // Header Reveal
      tl.fromTo(
        ".bento-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }
      );

      // Bento Grid Staggered Reveal
      tl.fromTo(
        ".bento-item",
        { opacity: 0, y: 50, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1.2, 
          stagger: 0.1, 
          ease: "expo.out" 
        },
        "-=0.6"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-[#FAFAFA] py-24 sm:py-32 font-sans overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-20">
          <p className="bento-header text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Technical Arsenal
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="bento-header font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] max-w-2xl">
              Engineered for scale. <br />
              <span className="text-slate-400">Built for permanence.</span>
            </h2>
            <a href="#tech" className="bento-header group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors pb-2">
              View Full Stack 
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* --- THE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* BENTO 1: WIDE (Cloud Native) */}
          <div className="bento-item md:col-span-2 h-full">
            <SpotlightCard className="h-full w-full flex flex-col justify-between p-8 sm:p-10 group cursor-default">
              
              <div className="flex justify-between items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
                  <Server className="h-5 w-5" />
                </div>
                {/* Micro-UI: Server Array */}
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col gap-1 w-8 rounded-lg border border-slate-100 bg-slate-50 p-1.5 opacity-60 transition-opacity group-hover:opacity-100">
                      <div className="h-1 w-full rounded-full bg-slate-200"></div>
                      <div className="h-1 w-full rounded-full bg-slate-200"></div>
                      <div className={`h-1 rounded-full ${i === 2 ? 'w-full bg-blue-500 animate-pulse' : 'w-2/3 bg-emerald-400'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Distributed Cloud Architecture</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">
                  We abandon monolithic constraints. Our systems are built on horizontally scalable microservices, ensuring your platform handles millions of concurrent users without breaking a sweat.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* BENTO 2: SQUARE (Security) */}
          <div className="bento-item md:col-span-1 h-full">
            <SpotlightCard className="h-full w-full flex flex-col justify-between p-8 sm:p-10 group cursor-default">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 relative overflow-hidden">
                <ShieldCheck className="h-5 w-5 relative z-10" />
                <div className="absolute inset-0 bg-emerald-200/50 translate-y-full group-hover:-translate-y-full transition-transform duration-1000 ease-in-out"></div>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Zero-Trust<br/>Security</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  End-to-end encryption, strict role-based access, and SOC-2 compliant infrastructure protocols integrated from the first commit.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* BENTO 3: SQUARE (Latency) */}
          <div className="bento-item md:col-span-1 h-full">
            <SpotlightCard className="h-full w-full flex flex-col justify-between p-8 sm:p-10 group cursor-default">
              
              {/* Micro-UI: Live Ping Graph */}
              <div className="flex items-end gap-1 h-12 w-full border-b border-slate-100 pb-2 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                {[20, 35, 25, 60, 30, 45, 25, 15, 30, 20].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-slate-200 transition-all duration-300 group-hover:bg-amber-300" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-amber-500" />
                  <h3 className="font-heading text-2xl font-bold text-slate-900">Microsecond</h3>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  By routing requests through global edge networks, we reduce database round-trips and deliver content instantly to the end user.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* BENTO 4: WIDE (CI/CD Pipelines) */}
          <div className="bento-item md:col-span-2 h-full">
            <SpotlightCard className="h-full w-full flex flex-col justify-between p-8 sm:p-10 group cursor-default relative overflow-hidden">
              
              {/* Background decorative data flow */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                 <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
                   <path d="M0,50 C30,10 70,90 100,50" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_30s_linear_infinite]" />
                   <path d="M0,20 C40,80 60,20 100,80" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="2 6" className="animate-[dash_20s_linear_infinite_reverse]" />
                 </svg>
              </div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
                  <GitPullRequest className="h-5 w-5" />
                </div>
                
                {/* Micro-UI: Pipeline Status */}
                <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="h-1 w-4 bg-slate-200"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors delay-100"></span>
                  <span className="h-1 w-4 bg-slate-200"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors delay-200"></span>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Automated CI/CD Pipelines</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">
                  Say goodbye to "deployment Fridays." We configure rigorous automated testing and seamless integration pipelines, ensuring that every push to production is safe, verified, and instantaneous.
                </p>
              </div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}