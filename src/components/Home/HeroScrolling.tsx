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
import Image from "next/image";

const PROJECT_POOL = [
  { id: 6, title: "FinTech Cloud", category: "Infrastructure", icon: Cpu, img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "DealzQuest", category: "E-Commerce Engine", icon: ShoppingBag, img: "https://images.unsplash.com/photo-1612103198005-b238154f4590?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "BulkSMS Gateway", category: "Communications", icon: MessageSquare, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "LindaKura", category: "Voting System", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Car-Tracker", category: "Telematics & IoT", icon: Navigation, img: "https://images.unsplash.com/photo-1516579486067-6d7ef4d67c1e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 1, title: "EduAnalytics", category: "LMS Platform", icon: Activity, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
  { id: 7, title: "FinSec API", category: "Security", icon: Lock, img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
  { id: 8, title: "Edge Network", category: "Networking", icon: Globe, img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" },
];

export function ProjectCard({ title, category, icon: Icon, img }: any) {
  return (
    // Changed the outer div to a Link pointing to the case studies page
    <Link 
      href="/case-studies"
      className="group relative w-[300px] md:w-[380px] shrink-0 aspect-[16/10] overflow-hidden border-r border-slate-800 bg-[#0B1120] cursor-pointer block"
    >
      
      {/* Replaced <img> with Next.js <Image> using the 'fill' property */}
      <Image 
        src={img} 
        alt={title}
        fill
        sizes="(max-width: 768px) 300px, 380px"
        className="object-cover opacity-40 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110 ease-out"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/70 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

      {/* Content Container */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
        
        {/* Top Row: Icon & Category */}
        <div className="flex justify-between items-start">
          <div className="h-12 w-12 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-700/50 flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:border-amber-400/50 transition-all duration-500 shadow-xl">
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-300 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-md">
            {category}
          </span>
        </div>

        {/* Bottom Row: Title & Action */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading text-xl md:text-2xl font-black tracking-tight text-white leading-tight group-hover:text-amber-400 transition-colors duration-300 drop-shadow-lg">
            {title}
          </h4>
          
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            VIEW CASE STUDY <ArrowUpRight size={14} className="text-amber-400" />
          </div>
        </div>
      </div>

      {/* Hover Accent Line (Gradient) */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-600 to-amber-400 group-hover:w-full transition-all duration-700 ease-out z-20" />
    </Link>
  );
}

// 3. MAIN SECTION
export default function HeroProjectRibbon() {
  const triggerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "end start"], 
  });

  const xRow1 = useSpring(useTransform(scrollYProgress, [0, 1], ["0px", "-1400px"]), { stiffness: 50, damping: 20 });
  const xRow2 = useSpring(useTransform(scrollYProgress, [0, 1], ["-1400px", "0px"]), { stiffness: 50, damping: 20 });

  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      
      {/* Hero Content */}
      <div className="pt-32 md:pt-36 pb-16 md:pb-24">
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
            
            {/* Added relative and overflow-hidden here */}
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-amber-400 overflow-hidden">
              
              {/* Arrow 1: Starts in center, flies out top-right on hover */}
              <ArrowUpRight 
                className="absolute h-4 w-4 text-white transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full group-hover:opacity-0" 
                strokeWidth={2.5}
              />
              
              {/* Arrow 2: Starts bottom-left, flies into center on hover */}
              <ArrowUpRight 
                className="absolute h-4 w-4 text-[#0B1120] -translate-x-full translate-y-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" 
                strokeWidth={2.5}
              />
              
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

      {/* --- IMAGE RIBBON SECTION --- */}
      <div 
        ref={triggerRef} 
        className="relative w-full bg-[#0B1120] -rotate-2 border-y border-slate-800 shadow-2xl py-0"
      >
        {/* CSS Mask: Creates the smooth fade-out effect on the left and right edges */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        />

        <div className="flex flex-col rotate-2 scale-105">
          
          <motion.div style={{ x: xRow1 }} className="flex w-max border-b border-slate-800">
            {PROJECT_POOL.map((p) => <ProjectCard key={`r1-a-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r1-b-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r1-c-${p.id}`} {...p} />)}
          </motion.div>

          <motion.div style={{ x: xRow2 }} className="flex w-max">
            {PROJECT_POOL.map((p) => <ProjectCard key={`r2-a-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r2-b-${p.id}`} {...p} />)}
            {PROJECT_POOL.map((p) => <ProjectCard key={`r2-c-${p.id}`} {...p} />)}
          </motion.div>
          
        </div>
      </div>

      <div className="h-24 md:h-32" />
    </section>
  );
}