"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  ArrowUpRight, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Database, 
  Zap, 
  Lock, 
  Activity, 
  Layers, 
  Layers3,
  MessageSquare,
  Navigation,
  ShoppingBag
} from "lucide-react";
import Link from "next/link";

// 1. DATA: Using Icons
const PROJECT_POOL = [
  { id: 1, title: "EduAnalytics", category: "LMS Platform", icon: Activity },
  { id: 2, title: "LindaKura", category: "Voting System", icon: ShieldCheck },
  { id: 3, title: "BulkSMS Gateway", category: "Communications", icon: MessageSquare },
  { id: 4, title: "Car-Tracker", category: "Telematics & IoT", icon: Navigation },
  { id: 5, title: "DealzQuest", category: "E-Commerce Engine", icon: ShoppingBag },
  { id: 6, title: "FinTech Cloud", category: "Infrastructure", icon: Cpu },
  { id: 7, title: "FinSec API", category: "Security", icon: Lock },
  { id: 8, title: "Edge Network", category: "Networking", icon: Globe },
];

// 2. COMPONENT: Enlarged Light Theme Card
function ProjectCard({ title, category, icon: Icon }: any) {
  return (
    <div className="group relative w-[300px] md:w-[380px] shrink-0 aspect-[16/10] overflow-hidden border-r border-slate-200 cursor-pointer bg-white">
      {/* Content Container */}
      <div className="absolute inset-0 p-10 flex flex-col justify-between transition-colors duration-500 group-hover:bg-slate-50/50">
        
        {/* Top Row: Icon & Category */}
        <div className="flex justify-between items-start">
          <div className="h-12 w-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:bg-white transition-all duration-500 shadow-sm">
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-blue-600 transition-colors">
            {category}
          </span>
        </div>

        {/* Bottom Row: Title & Action */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-xl md:text-2xl font-black tracking-tight text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h4>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            VIEW CASE STUDY <ArrowUpRight size={14} className="text-blue-600" />
          </div>
        </div>
      </div>

      {/* Hover Accent Line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-600 group-hover:w-full transition-all duration-700" />
    </div>
  );
}

// 3. MAIN SECTION
export default function HeroProjectRibbon() {
  const triggerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "end start"], 
  });

  // Opposing directions with refined range for larger cards
  const xRow1 = useSpring(useTransform(scrollYProgress, [0, 1], ["0px", "-1400px"]), { stiffness: 50, damping: 20 });
  const xRow2 = useSpring(useTransform(scrollYProgress, [0, 1], ["-1400px", "0px"]), { stiffness: 50, damping: 20 });

  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      
      <div className="pt-32 md:pt-36 pb-12 md:pb-20">
  <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
    
    <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-slate-900 max-w-4xl relative z-10">
      We build,{" "}
      <span className="relative inline-block whitespace-nowrap px-4 py-1">
        <span className="relative z-10">evolve</span>
        <svg 
          className="absolute inset-0 h-full w-full -rotate-3 text-amber-400 z-0 drop-shadow-sm" 
          viewBox="0 0 200 100" 
          preserveAspectRatio="none" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round"
        >
          <path d="M 20 50 C 20 20 80 10 100 10 C 140 10 180 20 180 50 C 180 80 140 90 100 90 C 50 90 20 80 20 50 Z" />
        </svg>
      </span>
      <br className="hidden sm:block"/> and digitize your{" "}
      <span className="font-serif italic font-medium text-slate-600 pr-2">
        enterprise.
      </span>
    </h1>
    
    <p className="mt-8 text-base sm:text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
      Bitmos Technologies provides high-performance business solutions in Kenya, driving digital transformation through bespoke software development, secure cloud infrastructure, and AI-driven automation for the modern market.
    </p>
    
    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
      <Link 
        href="/contact-us" 
        className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#121c34] pl-8 pr-2 py-2 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 active:scale-95"
      >
        Start Your Project
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-amber-400">
          <ArrowUpRight className="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#0B1120]" strokeWidth={2.5}/>
        </div>
      </Link>
      <Link 
        href="/what-we-do" 
        className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-transparent border-2 border-slate-200 px-8 py-3.5 text-sm font-bold text-[#0B1120] transition-all hover:border-[#0B1120] hover:bg-slate-50 active:scale-95"
      >
        <Layers3 className="h-4 w-4 text-amber-400 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" strokeWidth={2.5} />
        Our Tech Solutions
      </Link>
    </div>
  </div>
</div>

      {/* Enlarged Seamless Ribbon - Light Theme */}
      <div ref={triggerRef} className="relative w-full bg-white -rotate-1 border-y border-slate-200 overflow-hidden py-0 shadow-inner">
        <div className="flex flex-col rotate-1 scale-105">
          
          {/* Row 1 (Moving Left) */}
          <motion.div style={{ x: xRow1 }} className="flex w-max border-b border-slate-200">
            {PROJECT_POOL.map((p) => <ProjectCard key={`r1-a-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r1-b-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r1-c-${p.id}`} {...p} />)}
          </motion.div>

          {/* Row 2 (Moving Right) */}
          <motion.div style={{ x: xRow2 }} className="flex w-max">
            {PROJECT_POOL.map((p) => <ProjectCard key={`r2-a-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r2-b-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r2-c-${p.id}`} {...p} />)}
          </motion.div>
          
        </div>
      </div>

      <div className="h-32" />
    </section>
  );
}