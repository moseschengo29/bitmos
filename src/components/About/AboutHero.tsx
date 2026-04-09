"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function AboutHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Reveal the pre-header pill
      tl.fromTo(
        ".hero-tag",
        { opacity: 0, y: 10, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, delay: 0.2 }
      );

      // 2. Stagger reveal the massive headline words with a cinematic blur
      tl.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, stagger: 0.15 },
        "-=0.8"
      );

      // 3. Fade in the bottom pillars
      tl.fromTo(
        ".hero-pillar",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.1 },
        "-=1"
      );

      // 4. Subtle ambient background animation
      gsap.to(".ambient-glow", {
        x: "random(-50, 50)",
        y: "random(-30, 30)",
        rotation: "random(-10, 10)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2,
      });
    },
    { scope: container }
  );

  return (
    <section 
      ref={container} 
      className="relative bg-[#FAFAFA] pt-32 sm:pt-44 pb-20 font-sans selection:bg-blue-100 selection:text-blue-900 min-h-[90vh] flex flex-col justify-between overflow-hidden"
    >
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      {/* These provide that incredibly soft, premium lighting effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="ambient-glow absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[120px]"></div>
        <div className="ambient-glow absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-slate-200/50 blur-[150px]"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 flex-grow flex flex-col">
        
        {/* --- TOP: SOFT EDITORIAL TYPOGRAPHY --- */}
        <div className="max-w-5xl mb-24 sm:mb-32">
          
          {/* Frosted Glass Pill Tag */}
          <div className="hero-tag mb-8 flex items-center gap-3">
            <span className="h-px w-6 bg-blue-600"></span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Bitmos Technologies
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight text-slate-900 leading-[1.05]">
            <div className="overflow-hidden pb-1 sm:pb-2">
              <div className="hero-title-line">We do not just write code.</div>
            </div>
            <div className="overflow-hidden pb-1 sm:pb-2">
              <div className="hero-title-line">
                We architect <span className="font-serif italic font-medium text-slate-500 pr-2">permanence</span>
              </div>
            </div>
            <div className="overflow-hidden pb-1 sm:pb-2">
              <div className="hero-title-line">for the enterprise.</div>
            </div>
          </h1>
          
        </div>

        {/* --- BOTTOM: THE SOFT PILLARS (Intro, Mission, Vision) --- */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0">
          
          {/* Column 1: Intro Description */}
          <div className="hero-pillar md:col-span-6 md:pr-16 lg:pr-24">
            <ArrowDownRight className="h-5 w-5 text-blue-500 mb-6" strokeWidth={2} />
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Bitmos is an elite collective of software engineers and system architects. We bypass the standard agency pitch to focus entirely on engineering unbreachable, zero-latency digital infrastructure.
            </p>
          </div>

          {/* Column 2: Mission */}
          <div className="hero-pillar md:col-span-3 relative md:px-8">
            {/* Soft Gradient Divider */}
            <div className="hidden md:block absolute top-0 left-0 w-px h-full bg-gradient-to-b from-slate-200 via-slate-200 to-transparent"></div>
            
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-slate-300">01</span> Our Mission
            </p>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              To eradicate technical debt. We partner with organizations to modernize legacy systems, deploying highly resilient codebases that operate flawlessly under immense pressure.
            </p>
          </div>

          {/* Column 3: Vision */}
          <div className="hero-pillar md:col-span-3 relative md:pl-8">
            {/* Soft Gradient Divider */}
            <div className="hidden md:block absolute top-0 left-0 w-px h-full bg-gradient-to-b from-slate-200 via-slate-200 to-transparent"></div>
            
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-slate-300">02</span> Our Vision
            </p>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              A digital landscape where infrastructure never limits ambition. We envision a standard of software engineering where security and massive scalability are guaranteed by default.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}