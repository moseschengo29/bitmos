"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Linkedin, Github, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TEAM_MEMBERS = [
  {
    name: "Moses Chengo",
    role: "Co-Founder & Chief Architect",
    bio: "Driving the technical vision and architecting resilient, zero-latency backend infrastructure for global scale.",
    links: { linkedin: "#", github: "#" }
  },
  {
    name: "Brian Oroni",
    role: "Head of Engineering",
    bio: "Orchestrating agile execution, CI/CD pipelines, and ensuring flawless deployment velocity across all squads.",
    links: { linkedin: "#", github: "#" }
  },
  {
    name: "Martin Lenga",
    role: "Data Strategy Lead",
    bio: "Securing the foundation. Specializing in distributed databases, zero-trust architecture, and SOC2 compliance.",
    links: { linkedin: "#", github: "#" }
  }
];

export default function MinimalistTeam() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Clean header reveal
      gsap.fromTo(
        ".reveal-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      );

      // 2. Staggered reveal for the team members
      gsap.fromTo(
        ".team-item",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 75%"
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-white py-4 sm:py-32 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-12 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <p className="reveal-header text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Leadership
            </p>
            <h2 className="reveal-header font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              The minds behind <br className="hidden sm:block" />
              the architecture.
            </h2>
          </div>
          <div className="reveal-header hidden md:block">
            <a href="#careers" className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
              Open Positions 
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* --- MINIMALIST GRID --- */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="team-item group flex flex-col">
              
              {/* Soft Blank Avatar */}
              <div className="mb-8 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-slate-50 transition-all duration-500 group-hover:bg-blue-50 group-hover:scale-105">
                <User 
                  className="h-8 w-8 text-slate-300 transition-colors duration-500 group-hover:text-blue-600" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Typography */}
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">
                {member.role}
              </p>
              
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="mt-auto flex items-center gap-5 pt-2">
                <a 
                  href={member.links.linkedin} 
                  className="text-slate-400 hover:text-blue-600 transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href={member.links.github} 
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}