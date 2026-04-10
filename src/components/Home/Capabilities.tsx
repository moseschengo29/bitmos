"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register both plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const capabilities = [
  {
    num: "01",
    title: "Digital Transformation Strategy",
    desc: "We bridge the gap between operational vision and digital execution. Our strategy ensures every line of code aligns with your long-term business goals to drive measurable growth.",
  },
  {
    num: "02",
    title: "Product Design & UX",
    desc: "We combine engineering excellence with human-centric design. By prioritizing the user journey, we create intuitive interfaces that maximize adoption and reduce churn.",
  },
  {
    num: "03",
    title: "Continuous Optimization",
    desc: "We provide proactive post-launch support and real-time refinement. By monitoring performance metrics, we ensure your platform adapts to market demands and stays ahead of competitors.",
  },
];

export default function Capabilities() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Starts animation when the top of the section hits 80% down the viewport
          toggleActions: "play none none reverse", // Plays on scroll down, reverses on scroll up
        },
        defaults: { ease: "power3.out" }
      });

      tl.fromTo(
        ".cap-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
      );

      tl.fromTo(
        ".cap-grid-wrapper",
        { borderColor: "rgba(226, 232, 240, 0)" },
        { borderColor: "rgba(226, 232, 240, 1)", duration: 1 },
        "-=0.4"
      );

      tl.fromTo(
        ".cap-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative py-24 sm:py-32 overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2 className="cap-header text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">
            Core Capabilities
          </h2>
          <p className="cap-header font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1]">
            Systems engineered for <br className="hidden sm:block" />
            <span className="text-slate-900">high-performance scale.</span>
          </p>
        </div>

        
        <div className="cap-grid-wrapper grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-y border-slate-200">
          
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="cap-card group flex flex-col p-8 lg:p-12 transition-colors hover:bg-slate-50"
            >
              <div className="mb-12 font-heading text-5xl font-light text-slate-200 transition-colors group-hover:text-blue-600">
                {item.num}
              </div>
              
              <h3 className="mb-4 font-heading text-2xl font-bold text-slate-900">
                {item.title}
              </h3>
              
              <p className="text-base text-slate-600 leading-relaxed font-light">
                {item.desc}
              </p>

              <div className="mt-8 mt-auto pt-8">
                <a 
                  href="#learn-more" 
                  className="inline-flex items-center text-sm font-bold text-slate-900 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >
                  Learn more
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}