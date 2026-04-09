"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Database, Users, LineChart, ShieldCheck } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const METRICS = [
  { label: "Concurrent Users", value: "50k+", icon: Users },
  { label: "Query Latency", value: "<40ms", icon: Database },
  { label: "Data Accuracy", value: "99.99%", icon: LineChart },
  { label: "Security Standard", value: "SOC-2", icon: ShieldCheck },
];

export default function LmsShowcase() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // 1. Reveal Project Tag
      tl.fromTo(
        ".cs-tag",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.2 }
      );

      // 2. Stagger Massive Headline
      tl.fromTo(
        ".cs-title-word",
        { opacity: 0, y: 50, rotateX: -20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.1 },
        "-=0.6"
      );

      // 3. Reveal Context Paragraph
      tl.fromTo(
        ".cs-context",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      );

      // 4. Reveal Metrics Grid
      tl.fromTo(
        ".cs-metric",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
        "-=0.6"
      );

      // 5. Parallax Image Reveal (Scroll triggered)
      gsap.fromTo(
        ".cs-image-wrapper",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-image-wrapper",
            start: "top 85%",
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-white font-sans selection:bg-blue-100 selection:text-blue-900 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- CASE STUDY HERO --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          
          <div className="w-full lg:w-3/5">
            {/* Project Tag */}
            <div className="cs-tag mb-8 inline-flex items-center gap-2 rounded-full  x-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-500">
              
            </div>

            {/* Massive Title */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5rem] font-black tracking-tighter text-slate-900 leading-[1.05] mb-8 perspective-1000 flex flex-wrap gap-x-4 gap-y-2">
              <span className="cs-title-word overflow-hidden">Architecting</span>
              <span className="cs-title-word overflow-hidden text-slate-400">the</span>
              <span className="cs-title-word overflow-hidden">future</span>
              <span className="cs-title-word overflow-hidden text-slate-400">of</span>
              <span className="cs-title-word overflow-hidden">digital</span>
              <span className="cs-title-word overflow-hidden text-slate-400">learning.</span>
            </h1>
          </div>

          <div className="w-full lg:w-2/5 lg:pt-20">
            <ArrowDownRight className="cs-context h-6 w-6 text-blue-600 mb-6" strokeWidth={2} />
            <p className="cs-context text-lg text-slate-600 font-medium leading-relaxed mb-8">
              Legacy education platforms buckle under scale. We engineered a highly distributed Learner Management System capable of processing real-time analytics, synchronous video, and complex grading algorithms without dropping a single frame.
            </p>
            
            {/* Role & Tech Stack Minimalist Table */}
            <div className="cs-context border-t border-slate-200 pt-6 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Scope</p>
                <p className="text-sm font-bold text-slate-900">Full-Stack Architecture</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Core Tech</p>
                <p className="text-sm font-bold text-slate-900">React, TypeScript, Node</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- PERFORMANCE METRICS GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden mb-24">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="cs-metric bg-white p-8 sm:p-10 flex flex-col justify-between transition-colors hover:bg-slate-50">
                <Icon className="h-5 w-5 text-blue-600 mb-8" strokeWidth={1.5} />
                <div>
                  <p className="font-heading text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                    {metric.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {metric.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- ABSTRACT UI SHOWCASE (The "Hero Image") --- */}
        <div className="cs-image-wrapper relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[2.5rem] bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
          
          {/* Abstract background grid for the mock UI */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Mock Dashboard UI Overlay (Pure CSS/HTML to keep it lightweight and sharp) */}
          <div className="relative z-10 w-[80%] h-[70%] bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Top Bar */}
            <div className="h-12 border-b border-slate-800 flex items-center px-6 gap-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-slate-700"></div>
                <div className="h-3 w-3 rounded-full bg-slate-700"></div>
                <div className="h-3 w-3 rounded-full bg-slate-700"></div>
              </div>
              <div className="h-4 w-48 bg-slate-800 rounded-full ml-auto"></div>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1 p-6 flex gap-6">
              {/* Sidebar */}
              <div className="w-48 hidden sm:flex flex-col gap-4">
                <div className="h-4 w-full bg-slate-800 rounded"></div>
                <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-800 rounded"></div>
              </div>
              {/* Main Area */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="h-8 w-1/3 bg-slate-800 rounded"></div>
                {/* Mock Chart Area */}
                <div className="flex-1 border border-slate-800 rounded-xl flex items-end px-8 pb-8 gap-4">
                   {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
                     <div key={i} className="flex-1 bg-blue-600/20 border-t-2 border-blue-500 rounded-t-sm" style={{ height: `${h}%` }}></div>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glowing Accents */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}