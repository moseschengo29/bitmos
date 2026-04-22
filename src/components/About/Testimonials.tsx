"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CLIENTS = [
  "NEXUS SYSTEMS", "AERODYNAMICS", "GLOBALTECH", 
  "SYNTHESIS", "ACME CORP", "VERTEX LABS", "QUANTUM"
];

export default function AnchorTestimonial() {
  const container = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Initial Reveal Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      });

      tl.fromTo(
        ".quote-reveal",
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.15, 
          ease: "power4.out",
        }
      );

      // 2. Infinite Marquee Animation
      // We animate the track to move exactly 50% of its width (since we duplicated the items)
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 40, // Adjust for speed
          repeat: -1,
        });
      }
    },
    { scope: container }
  );

  return (
    <section 
      ref={container} 
      className="relative bg-yellow-50 font-sans overflow-hidden py-32 sm:py-40 border-y border-[#0B1120]/10"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Over-title */}
        <div className="quote-reveal mb-8 flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
        </div>
        
        {/* --- THE MASSIVE EDITORIAL QUOTE --- */}
        <div className="relative mb-14 max-w-4xl">
          {/* Watermark Quote Mark */}
          <span className="quote-reveal absolute -top-16 -left-10 text-[160px] leading-none text-slate-400 font-serif opacity-10 select-none hidden sm:block">
            &ldquo;
          </span>
          
          <h2 className="quote-reveal relative z-10 font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1120] tracking-tight leading-[1.15]">
            Bitmos didn&apos;t just untangle our legacy backend; they fundamentally changed how our engineering team ships software. Their standard for architecture is absolute.
          </h2>
        </div>
        
        {/* --- AUTHOR GLASS PILL --- */}
        <div className="quote-reveal inline-flex items-center gap-4 rounded-full border border-[#0B1120]/10 bg-[#0B1120]/5 p-2 pr-6 shadow-sm backdrop-blur-md transition-all hover:bg-[#0B1120]/10 hover:shadow-md">
          {/* Avatar with glowing ring */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500">
            <div className="absolute inset-0 rounded-full border-2 border-[#0B1120]/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
              alt="Sarah Jenkins" 
              className="h-full w-full rounded-full object-cover grayscale-[20%]"
            />
          </div>
          
          <div className="text-left">
            <p className="text-sm font-bold text-[#0B1120]">Sarah Jenkins</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#0B1120]/70 mt-0.5">
              CTO, Nexus Systems
            </p>
          </div>
        </div>

      </div>

      {/* --- INFINITE CLIENT MARQUEE --- */}
      <div className="quote-reveal relative z-10 mx-auto mt-24 sm:mt-32 w-full max-w-[1400px] border-t border-[#0B1120]/10 pt-12 overflow-hidden">
        
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-[#0B1120]/60 mb-8 px-6">
          Trusted by engineering teams globally
        </p>
        
        {/* Fade masks for the edges of the marquee (matched to the yellow bg) */}
        <div className="absolute left-0 bottom-0 top-20 w-32 bg-gradient-to-r from-yellow-50 to-transparent z-20"></div>
        <div className="absolute right-0 bottom-0 top-20 w-32 bg-gradient-to-l from-yellow-50 to-transparent z-20"></div>

        {/* The Scrolling Track (Removed grayscale so the navy blue stays true) */}
        <div className="flex w-fit overflow-visible opacity-60 transition-opacity duration-500 hover:opacity-100">
          <div ref={marqueeRef} className="flex flex-nowrap items-center gap-16 sm:gap-24 px-8 sm:px-12 w-max">
            
            {/* Array 1 */}
            {CLIENTS.map((client, idx) => (
              <span key={`first-${idx}`} className="font-heading text-xl sm:text-2xl font-black tracking-tighter text-[#0B1120] whitespace-nowrap">
                {client}
              </span>
            ))}
            
            {/* Array 2 (Duplicate for seamless looping) */}
            {CLIENTS.map((client, idx) => (
              <span key={`second-${idx}`} className="font-heading text-xl sm:text-2xl font-black tracking-tighter text-[#0B1120] whitespace-nowrap">
                {client}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}