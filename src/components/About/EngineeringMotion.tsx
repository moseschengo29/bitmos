"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, ShieldCheck, Network } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PRINCIPLES = [
  {
    id: "performance",
    icon: Zap,
    title: "Zero Technical Debt\n& High Performance",
    desc: "We do not compromise on code quality. Every system is built on modern, semantic frameworks and optimized at the edge to ensure lightning-fast execution and sustainable long-term scaling."
  },
  {
    id: "architecture",
    icon: Network,
    title: "Cloud-Native\nGlobal Architecture",
    desc: "We engineer systems utilizing distributed edge networks and containerized microservices, ensuring that data processing occurs instantly with near-zero latency and flawless reliability."
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Immutable Security\n& Zero-Trust Protocols",
    desc: "Security is our foundation. We implement enterprise-grade encryption, strict mutual TLS authentication, and compliance-ready architectures to protect your mission-critical data out of the box."
  }
];

export default function RotatingPrinciples() {
  const container = useRef<HTMLElement>(null);
  const pinSpacer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We create a master timeline that is linked to the user's scroll.
    // The section will "pin" (lock in place) until the user scrolls 2500px.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinSpacer.current,
        start: "top top",
        end: "+=2500", // Total scroll distance to complete the animation
        scrub: 1,      // 1 second smoothing effect on the scrub
        pin: true,     // Locks the screen
      }
    });

    // 1. Rotate the inner ring a full 360 degrees over the entire scroll duration
    tl.to(".inner-ring-group", { 
      rotation: 360, 
      transformOrigin: "center center", 
      ease: "none" 
    }, 0); // The '0' means start at the very beginning of the timeline

    // 2. Cross-fade the text content
    // We have 3 items. 
    // Item 1 fades out at 33%
    // Item 2 fades in at 33%, fades out at 66%
    // Item 3 fades in at 66%
    
    // Animate out Item 1
    tl.to(".content-0", { opacity: 0, y: -20, duration: 0.2 }, 0.25);
    
    // Animate in and out Item 2
    tl.fromTo(".content-1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2 }, 0.35);
    tl.to(".content-1", { opacity: 0, y: -20, duration: 0.2 }, 0.60);

    // Animate in Item 3
    tl.fromTo(".content-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2 }, 0.70);

  }, { scope: container });

  return (
    <section ref={container} className="bg-[#0B1120] py-12 text-slate-200 font-sans overflow-hidden">
      
      {/* This div acts as the trigger and spacer for the pinned scroll */}
      <div ref={pinSpacer} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* --- 1. THE SVG GEOMETRY --- */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="translate(600, 400)">
            
            {/* The Outer Massive Ellipse (Static) */}
            <ellipse 
              cx="0" 
              cy="0" 
              rx="1000" // Extremely wide
              ry="350"  // Flattened height
              fill="none" 
              stroke="#1e293b" 
              strokeWidth="0.75" 
              strokeDasharray="2 6" 
              opacity="0.3"
            />

            {/* The Inner Rotating Ring Group */}
            {/* Everything inside this <g> will rotate together */}
            <g className="inner-ring-group">
              
              {/* Inner Dotted Circle */}
              <circle 
                cx="0" 
                cy="0" 
                r="280" 
                fill="none" 
                stroke="#38bdf8" 
                strokeWidth="0.75" 
                strokeDasharray="2 6" 
                opacity="0.4"
              />

              {/* The 4 Triangle Trackers sitting on the circle border */}
              {/* Top */}
              <polygon points="-6,-280 6,-280 0,-270" fill="#facc15" />
              {/* Bottom */}
              <polygon points="-6,280 6,280 0,270" fill="#facc15" />
              {/* Left */}
              <polygon points="-280,-6 -280,6 -270,0" fill="#facc15" />
              {/* Right */}
              <polygon points="280,-6 280,6 270,0" fill="#facc15" />
            
            </g>
          </g>
        </svg>

        {/* --- 2. THE CENTRAL CONTENT --- */}
        {/* We place all 3 text blocks absolutely centered, and GSAP handles their opacity */}
        <div className="relative z-10 w-full max-w-[420px] text-center flex items-center justify-center">
          
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div 
                key={principle.id}
                className={`content-${index} absolute flex flex-col items-center justify-center w-full px-6 ${index !== 0 ? 'opacity-0' : 'opacity-100'}`}
              >
                {/* Minimalist Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-transparent text-[#38bdf8]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                
                {/* Elegant Heading (Handles line breaks if provided) */}
                <h2 className="font-heading text-2xl sm:text-[28px] font-medium text-white leading-[1.2] mb-6 whitespace-pre-line">
                  {principle.title}
                </h2>
                
                {/* Muted Descriptive Text */}
                <p className="text-[15px] text-slate-400 font-medium leading-[1.7]">
                  {principle.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Scroll prompt indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
           <div className="w-px h-12 bg-slate-600"></div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-3">Scroll</span>
        </div>

      </div>
    </section>
  );
}