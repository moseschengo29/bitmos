"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Linkedin, Github, User } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// DATA PAYLOAD (Images Removed)
// ==========================================
const TEAM_MEMBERS = [
    {
      id: "01",
      name: "Brian Oroni",
      role: "Co-Founder / CEO",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "02",
      name: "Martin Lenga",
      role: "Senior Backend Developer",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
    {
      id: "03",
      name: "Moses Chengo",
      role: "Senior Frontend Developer",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
   
  ];

// ==========================================
// BLANK AVATAR COMPONENT
// ==========================================
const BlankAvatar = () => (
  // Clean, solid background. No grid lines. 
  <div className="absolute inset-0 flex items-center justify-center bg-slate-50 transition-colors duration-500 group-hover:bg-slate-100">
    <div className="relative z-10 text-slate-300 group-hover:text-blue-500 transition-colors duration-500">
      <User className="w-12 h-12" strokeWidth={1.5} />
    </div>
  </div>
);

export default function TeamGrid() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".team-cell",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#FAFAFA] text-slate-900 border-b border-slate-200 font-sans">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto border-x border-slate-200 min-h-[700px]">
        
        <div className="w-full lg:w-[30%] border-b lg:border-b-0 lg:border-r border-slate-200 p-8 md:p-12 lg:p-16 flex flex-col items-start relative bg-white z-10">
          
          <div className="lg:sticky lg:top-32 w-full">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
              Meet The Team
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
              Engineered by <br />
              <span className="text-slate-900">elite talent.</span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mb-12">
              Bitmos is strictly comprised of senior architects and engineers, vetted for their ability to handle mission-critical enterprise scale.
            </p>

            <Link 
              href="/careers" 
              className="group inline-flex items-center gap-3 text-sm font-bold text-blue-600 uppercase tracking-widest"
            >
              Initialize Career 
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </Link>
          </div>

        </div>

      
        <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 bg-[#FAFAFA]">
          
          {TEAM_MEMBERS.map((member, index) => {
            const isLastRow = index >= TEAM_MEMBERS.length - 2;
            const isLeftColumn = index % 2 === 0;

            return (
                <div 
                key={member.name} 
                className={`team-cell group flex flex-col bg-[#FAFAFA] hover:bg-white transition-colors duration-500 cursor-default
                  ${!isLastRow ? 'border-b border-slate-200' : 'border-b md:border-b-0 border-slate-200'}
                  ${isLeftColumn ? 'md:border-r border-slate-200' : ''}
                `}
              >
                
                {/* 1. Image Block (Now using BlankAvatar) */}
                <div className="relative w-full aspect-[4/3] border-b border-slate-200 overflow-hidden bg-slate-100">
                  <BlankAvatar />
                  
                  {/* Subtle hover overlay to connect (Kept for the interaction effect) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                     <div className="bg-blue-600 text-white p-4 rounded-full pointer-events-auto cursor-pointer shadow-lg hover:bg-slate-900 transition-colors">
                        <ArrowUpRight className="h-6 w-6" strokeWidth={2} />
                     </div>
                  </div>
                </div>

                {/* 2. Unified Content Block (Ultra-Clean) */}
                <div className="flex-grow flex flex-col p-6 md:p-8 lg:p-10 justify-between">
                  
                  {/* Top Row: Faint Number & Minimal Socials */}
                  <div className="flex items-start justify-between mb-8">
                    
                    <span className="text-5xl md:text-6xl font-black tracking-tighter text-slate-200 group-hover:text-slate-300 transition-colors duration-500 leading-none select-none">
                      0{index + 1}
                    </span>
                    
                    <div className="flex items-center gap-2 relative z-30 mt-1">
                      <Link 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 -m-1.5 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" strokeWidth={2} />
                      </Link>
                      <Link 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-1.5 -m-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-4 w-4" strokeWidth={2} />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Row: Name & Role */}
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      {member.role}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}