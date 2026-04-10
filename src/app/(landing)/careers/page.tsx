"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Code2, 
  MapPin, 
  Clock, 
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// DATA PAYLOAD
// ==========================================
const OPEN_ROLES = [
  {
    id: "REQ-042",
    title: "Software Engineering Attachment",
    department: "Engineering Core",
    type: "Industrial Attachment / Internship",
    location: "Nairobi, Kenya (Hybrid)",
    status: "OPEN",
    desc: "A rigorous, hands-on industrial attachment designed for exceptional computer science students. You will not be fetching coffee or working on internal sandbox apps. You will be embedded directly into our core engineering teams, writing production-grade code, and architecting real enterprise solutions.",
    requirements: [
      "Deep understanding of modern JavaScript/TypeScript and React.",
      "Familiarity with full-stack frameworks (Next.js) and backend logic (Node/Python).",
      "Strong grasp of data structures, algorithms, and deterministic system design.",
      "A relentless drive to write clean, maintainable, and mathematically sound code."
    ],
    tech: ["NEXT.JS", "TYPESCRIPT", "PYTHON", "POSTGRESQL", "GIT"],
  }
  // Future roles can be added to this array
];

const ENGINEERING_CULTURE = [
  {
    title: "Ship to Production",
    desc: "Attachments at Bitmos are not simulations. You will ship code to live enterprise environments and see your architecture handle real-world traffic.",
    icon: Terminal
  },
  {
    title: "Elite Mentorship",
    desc: "You will be paired with senior architects through strict peer-programming and code-review cycles. We invest heavily in leveling up your technical baseline.",
    icon: Code2
  },
  {
    title: "Zero-Agile Chaos",
    desc: "We reject chaotic sprint cycles. We engineer deterministically. You will learn how to write rigorous technical blueprints before writing a single line of code.",
    icon: Cpu
  }
];

export default function CareersPage() {
  const container = useRef<HTMLElement>(null);
  const [activeRole, setActiveRole] = useState<string | null>(OPEN_ROLES[0].id);

  useGSAP(() => {
    // Hero Reveal
    gsap.fromTo(".hero-reveal", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out", delay: 0.1 }
    );

    // Grid Reveal
    const gridTl = gsap.timeline({ scrollTrigger: { trigger: ".culture-trigger", start: "top 80%" }});
    gridTl.fromTo(".culture-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" });

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white border-t border-slate-200">
      
     
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pt-32 md:pt-40">
        
        {/* ========================================== */}
        {/* 1. EDITORIAL HERO                          */}
        {/* ========================================== */}
        <div className="mb-24 md:mb-32 max-w-4xl">
          <h1 className="hero-reveal text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 mb-8">
            Build the <br />
            <span className="text-slate-900">infrastructure.</span>
          </h1>
          <p className="hero-reveal text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            We are a deterministic engineering firm. We are looking for relentless problem solvers, mathematical thinkers, and architects who refuse to compromise on code quality.
          </p>
        </div>

        <div className="border-t border-slate-200 mb-32">
          <div className="flex flex-col lg:flex-row">
            
            <div className="w-full lg:w-1/3 lg:border-r border-slate-200">
              <div className="p-6 lg:p-8 border-b border-slate-200 bg-[#FAFAFA]">
                 <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Open Requisitions</span>
              </div>
              
              <div className="flex flex-col">
                {OPEN_ROLES.map((role) => {
                  const isActive = activeRole === role.id;
                  return (
                    <button 
                      key={role.id}
                      onClick={() => setActiveRole(role.id)}
                      className={`text-left p-6 lg:p-8 border-b border-slate-200 transition-colors duration-300 group ${isActive ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-slate-50'}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] font-bold tracking-widest uppercase ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                          {role.id}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-sm">
                          {role.status}
                        </span>
                      </div>
                      <h3 className={`text-xl font-bold tracking-tight mb-2 ${isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {role.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {role.department}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Role Details */}
            <div className="w-full lg:w-2/3 bg-white min-h-[600px] relative">
              <AnimatePresence mode="wait">
                {OPEN_ROLES.map((role) => role.id === activeRole && (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 lg:p-16 flex flex-col h-full"
                  >
                    
                    {/* Header Metadata */}
                    <div className="flex flex-wrap gap-6 mb-12 pb-8 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {role.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <Clock className="h-4 w-4 text-slate-400" />
                        {role.type}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-12">
                      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6">
                        The Directive
                      </h4>
                      <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        {role.desc}
                      </p>
                    </div>

                    {/* Requirements */}
                    <div className="mb-16">
                      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6">
                        Core Requirements
                      </h4>
                      <ul className="space-y-4">
                        {role.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-slate-600 font-medium leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack & Application */}
                    <div className="mt-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row md:items-end justify-between gap-8">
                      <div>
                        <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
                          Required Stack Context
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {role.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1.5 border border-slate-200 bg-[#FAFAFA] text-[10px] font-bold tracking-widest text-slate-500 uppercase rounded-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/careers/software-engineering-attachment"
                        className="px-8 py-4 bg-blue-600 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2 group shrink-0 shadow-lg shadow-blue-600/20"
                      >
                        Submit Profile
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>

      
        <section className="culture-trigger pb-24 md:pb-32">
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-4 block">
              The Physics of Bitmos
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
              Why attach here?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-slate-200 bg-[#FAFAFA]">
            {ENGINEERING_CULTURE.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="culture-card p-8 lg:p-12 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-500">
                  <div className="mb-10 h-12 w-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm rounded-xl">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      <EnterpriseCTA />
    </main>
  );
}