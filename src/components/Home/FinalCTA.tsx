"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CalendarClock, ShieldCheck, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function EnterpriseCTA() {
  const container = useRef<HTMLElement>(null);
  
  // Create 6 vertical panels for the louver effect
  const TOTAL_PANELS = 6;

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%", // Triggers as the white panels come into view
          toggleActions: "play none none reverse",
        },
      });

      // 1. THE ARCHITECTURAL LOUVERS REVEAL
      // The white panels smoothly scale to 0 vertically, sliding upwards
      tl.to(".reveal-panel", {
        scaleY: 0,
        transformOrigin: "top", // They slide up and disappear into the top border
        duration: 1.2,
        ease: "expo.inOut", // This provides that butter-smooth Apple-like acceleration
        stagger: 0.1, // Slight delay between each panel opening
      });

      // 2. REVEAL LEFT TEXT
      tl.fromTo(
        ".cta-text-element",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=0.8" // Start revealing text while the panels are still sliding up
      );

      // 3. REVEAL RIGHT ACTION CARD
      tl.fromTo(
        ".cta-action-card",
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "expo.out" },
        "-=0.8"
      );
      
      // 4. CONTINUOUS FLOATING EFFECT
      gsap.to(".cta-action-card", {
        y: "-=8",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <section 
      ref={container} 
      className="relative overflow-hidden bg-[#FAFAFA] pt-24 pb-32 border-t border-slate-200 font-sans min-h-[600px] flex items-center"
    >
      

      <div className="absolute inset-0 z-30 flex pointer-events-none">
        {Array.from({ length: TOTAL_PANELS }).map((_, i) => (
          <div 
            key={i} 
            className="reveal-panel h-full flex-1 bg-white border-r border-slate-100/50 shadow-[5px_0_15px_-5px_rgba(0,0,0,0.02)]"
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-slate-200 via-transparent to-transparent -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-start lg:pr-12">
            <h2 className="cta-text-element font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
              Stop wrestling with technical debt.
            </h2>
            
            <p className="cta-text-element text-lg text-slate-500 leading-relaxed font-medium mb-10 max-w-lg">
              Partner with Bitmos Technologies to engineer scalable, high-performance software. We bypass the sales pitch and get straight to solving your most complex architectural constraints.
            </p>

            <div className="cta-text-element flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 w-full max-w-md">
              <p className="w-full text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Trusted by elite engineering teams
              </p>
              <span className="font-heading text-xl font-black text-slate-300">ACME</span>
              <span className="font-heading text-xl font-black text-slate-300">NEXUS</span>
              <span className="font-heading text-xl font-black text-slate-300">GLOBALTECH</span>
            </div>
          </div>

          <div className="relative w-full flex justify-center lg:justify-end">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%] rounded-full bg-blue-100/50 blur-[80px] pointer-events-none"></div>

            <div className="cta-action-card relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
              
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-inner">
                  <CalendarClock className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 border border-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Availability: High</span>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                Technical Architecture Review
              </h3>
              
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                Schedule a direct consultation with a Lead Systems Architect. We will analyze your current infrastructure and map out a scalable modernization strategy.
              </p>

              <button className="group relative flex h-14 w-full items-center justify-between overflow-hidden rounded-xl bg-blue-600 px-6 font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-600/20 mb-6">
                <span className="relative z-10">Schedule Review</span>
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>

              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-xs font-medium text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-slate-400" />
                  Zero obligation, pure technical value.
                </li>
                <li className="flex items-center gap-3 text-xs font-medium text-slate-600">
                  <ShieldCheck className="h-4 w-4 text-slate-400" />
                  Full NDA protection before we start.
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}