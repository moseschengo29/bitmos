"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Cpu, 
  Lock, 
  Zap, 
  Activity, 
  Smartphone,
  ShieldCheck,
  Fingerprint,
  Gauge,
  Layers
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";

// Register GSAP plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ==========================================
// DATA PAYLOADS
// ==========================================
const ADVANTAGES = [
  {
    title: "Bare-Metal Processing",
    icon: Cpu,
    desc: "By eliminating JavaScript bridges, we unlock direct access to the CPU and GPU. The result is mathematically stable 120fps rendering and zero garbage-collection stutter."
  },
  {
    title: "Secure Enclave",
    icon: Lock,
    desc: "We interface directly with iOS Secure Enclave and Android Keystore to manage biometric authentication and localized, hardware-backed encryption keys."
  },
  {
    title: "Deterministic Threading",
    icon: Zap,
    desc: "Complex background syncs are handled on isolated native background threads, ensuring the main UI thread remains completely unblocked during heavy data mutations."
  }
];

const METRICS = [
  { value: "120", unit: "fps", label: "Render Target", desc: "Sustained scroll performance" },
  { value: "<16", unit: "ms", label: "Frame Time", desc: "Zero dropped frames" },
  { value: "-40", unit: "%", label: "Memory Footprint", desc: "Compared to hybrid wrappers" },
  { value: "99.9", unit: "%", label: "Crash-Free", desc: "Enterprise SLA guarantee" }
];

const STACK_DATA = [
  {
    platform: "iOS Ecosystem",
    language: "Swift 5.9+",
    frameworks: ["SwiftUI", "Combine", "CoreData", "Metal Compute"],
    gradient: "from-blue-600 to-blue-400"
  },
  {
    platform: "Android Ecosystem",
    language: "Kotlin 1.9+",
    frameworks: ["Jetpack Compose", "Coroutines", "Room DB", "Vulkan API"],
    gradient: "from-emerald-600 to-emerald-400"
  }
];

export default function NativeMobilePage() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 1. Hero Animations
    const tl = gsap.timeline();
    
    // Reveal text sliding up
    tl.fromTo(".hero-reveal", 
      { y: 100, opacity: 0, rotateX: -20 }, 
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
    
    tl.fromTo(".hero-fade", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 
      "-=0.6"
    );

    // 2. Scroll Animations for all sections
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((sec: any) => {
      gsap.fromTo(sec.querySelectorAll('.fade-up'),
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans selection:bg-blue-100 selection:text-blue-900">

      <section className="relative pt-20 pb-24 lg:pt-12 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto z-10 min-h-[90vh] flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
          
          {/* Left Narrative */}
          <div className="w-full lg:w-[50%] pt-12 lg:pt-0">
                {/* Main Heading matched to your global aesthetic */}
                <h1 className="hero-fade font-heading text-5xl sm:text-7xl lg:text-[80px] font-black leading-[1.05] tracking-tighter text-slate-900 max-w-2xl mb-8 relative z-10">
                    <span className="relative inline-block whitespace-nowrap px-2">
                    <span className="relative z-10">Silicon-level</span>
                    {/* Playful/Creative SVG Highlight (Updated to match brand blue, but you can swap back to amber-400 if preferred) */}
                    <svg 
                        className="absolute inset-0 h-full w-full -rotate-2 text-blue-500/20 z-0 drop-shadow-sm scale-110" 
                        viewBox="0 0 200 100" 
                        preserveAspectRatio="none" 
                        fill="currentColor" 
                        stroke="none"
                    >
                        <path d="M 10 50 C 10 20 80 10 100 10 C 140 10 190 20 190 50 C 190 80 140 90 100 90 C 50 90 10 80 10 50 Z" />
                    </svg>
                    </span>
                    <br />
                    <span className="font-serif italic font-medium text-slate-500 pr-2">
                    execution.
                    </span>
                </h1>

                {/* Refined Paragraph (Removed the heavy side border for a cleaner look) */}
                <p className="hero-fade text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
                    We do not compromise with cross-platform wrappers when absolute performance is required. We engineer architectures directly to the metal using <strong className="font-semibold text-slate-900">Swift</strong> and <strong className="font-semibold text-slate-900">Kotlin</strong>.
                </p>

                {/* Modern SaaS/Agency Button (Less "Brutalist Pill", more rounded rectangle) */}
                <div className="hero-fade flex flex-col sm:flex-row items-start gap-4">
                    <button className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25">
                    Initialize Audit
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                </div>
                
            </div>

          {/* Right: Pure CSS Floating iPhones */}
          <div className="w-full lg:w-[45%] h-[600px] relative hidden lg:block perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200/40 blur-[100px] rounded-full" />

            {/* Back Phone (Android) */}
            <motion.div 
              initial={{ y: 50, rotateY: 20, rotateZ: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="absolute top-10 right-10 w-[280px] h-[580px] bg-white border-[12px] border-slate-200 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-4 bg-slate-900 rounded-full z-20" />
              <div className="flex-1 bg-slate-50 pt-16 px-5">
                 <div className="w-full h-32 bg-emerald-100 rounded-2xl mb-4 border border-emerald-200" />
                 <div className="w-full h-16 bg-white rounded-xl mb-3 shadow-sm" />
                 <div className="w-full h-16 bg-white rounded-xl shadow-sm" />
              </div>
            </motion.div>

            {/* Front Phone (iOS) */}
            <motion.div 
              initial={{ y: 80, rotateY: -15, rotateZ: 5, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
              className="absolute top-0 left-0 w-[300px] h-[620px] bg-[#030303] border-[14px] border-[#121212] rounded-[3.2rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden z-10"
            >
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex justify-end items-center px-2">
                 <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div className="flex-1 bg-[#0A0A0A] pt-20 px-6 flex flex-col">
                 <div className="text-white font-bold text-xl mb-1">System Load</div>
                 <div className="text-slate-500 text-xs mb-8">Optimal Threading</div>
                 <div className="w-full h-32 bg-blue-900/20 rounded-2xl mb-4 border border-blue-500/30 flex items-end p-4 gap-2">
                    {[40, 70, 45, 90, 65, 80].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1 + (i * 0.1) }} className="flex-1 bg-blue-500 rounded-t-sm" />
                    ))}
                 </div>
                 <div className="w-full h-16 bg-white/5 rounded-2xl mb-3 border border-white/10 flex items-center px-4">
                   <Activity className="h-4 w-4 text-blue-400 mr-3" />
                   <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: THE NATIVE ADVANTAGE            */}
      {/* ========================================== */}
      <section className="scroll-section relative z-10 py-32 bg-white border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="mb-20 fade-up">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 block">
              Architectural Thesis
            </span>
            <h2 className="cap-header font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1]">
            The Native Advantage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {ADVANTAGES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="fade-up bg-white p-10 lg:p-14 flex flex-col hover:bg-slate-50 transition-colors">
                  <div className="h-14 w-14 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-2xl mb-10 text-blue-600">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#121212] mb-4">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: CORE CAPABILITIES (BENTO BOX)   */}
      {/* ========================================== */}
      <section className="scroll-section relative z-10 py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="mb-16 max-w-2xl fade-up">
          <h2 className="cap-header font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1]">
              Hardware-Level Integration.
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              We leverage the full suite of proprietary SDKs to build features that hybrid applications simply cannot execute efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Item 1 */}
            <div className="fade-up md:col-span-2 bg-white border border-slate-200 p-10 rounded-3xl shadow-sm flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Fingerprint className="w-40 h-40 text-blue-600" />
              </div>
              <div className="relative z-10 max-w-md">
                <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="h-5 w-5 text-[#121212]" />
                </div>
                <h3 className="text-2xl font-bold text-[#121212] mb-3">Biometric & Crypto</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Deep integration with FaceID and Android BiometricPrompt. We utilize the hardware keystore to sign payloads securely without ever exposing private keys to the OS.
                </p>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="fade-up md:col-span-1 bg-[#121212] text-white p-10 rounded-3xl shadow-sm flex flex-col justify-between">
              <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Layers className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">CoreML & Metal</h3>
                <p className="text-slate-400 font-medium text-sm">
                  On-device machine learning execution and direct GPU rendering for augmented reality and high-fidelity data visualization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: PERFORMANCE SLAs (Light Mode)   */}
      {/* ========================================== */}
      <section className="scroll-section relative z-10 py-12 bg-[#FAFAFA] border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left Narrative */}
          <div className="w-full lg:w-1/3 fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1.5 w-1.5 bg-slate-400 rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">
                Guaranteed Execution
              </span>
            </div>
            
            <h2 className="cap-header font-heading my-4 text-4xl sm:text-5xl font-extrabold text-slate-900">
            Physics of <br /> Performance.
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
              We do not hope for performance; we engineer for it. Our native applications are bound by strict quantitative thresholds to ensure enterprise-grade stability.
            </p>
          </div>

          {/* Right Metrics Grid (Datasheet Aesthetic) */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-sm">
            {METRICS.map((metric, i) => (
              <div 
                key={i} 
                className="fade-up bg-white p-10 lg:p-12 flex flex-col items-start justify-center hover:bg-slate-50 transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between w-full mb-8">
                  <Gauge className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    [0{i + 1}]
                  </span>
                </div>
                
                <div className="font-outfit text-5xl md:text-6xl font-black tracking-tighter mb-2 text-[#121212]">
                  {metric.value}
                  <span className="text-xl md:text-2xl font-medium text-slate-400 ml-1">
                    {metric.unit}
                  </span>
                </div>
                
                <div className="text-[11px] font-bold text-[#121212] uppercase tracking-[0.2em] mb-2 mt-4">
                  {metric.label}
                </div>
                
                <div className="text-sm font-medium text-slate-500">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: THE PLATFORM ARSENAL            */}
      {/* ========================================== */}
      <section className="scroll-section relative z-10 py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-slate-200 pb-12 fade-up">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 block">
              Deployment Arsenal
            </span>
            <h2 className="cap-header font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1]">
            The Protocol.
            </h2>
          </div>
          <p className="text-slate-500 text-sm font-medium max-w-sm text-right hidden md:block">
            Strictly typed, modern languages utilizing declarative UI frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {STACK_DATA.map((stack, idx) => (
            <div key={idx} className="fade-up p-10 border border-slate-200 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-blue-200 transition-colors">
               <div className="flex items-center justify-between mb-12">
                 <h3 className="text-2xl font-black tracking-tight text-[#121212]">{stack.platform}</h3>
                 <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${stack.gradient} text-white text-[10px] font-bold uppercase tracking-widest shadow-md`}>
                   {stack.language}
                 </div>
               </div>

               <div className="flex flex-col gap-4">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                   Core Infrastructure Frameworks
                 </span>
                 <div className="grid grid-cols-2 gap-4 mt-2">
                   {stack.frameworks.map((fw, i) => (
                     <div key={i} className="flex items-center gap-3">
                       <div className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
                       <span className="text-sm font-bold text-slate-700">{fw}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      <EnterpriseCTA />

    </main>
  );
}