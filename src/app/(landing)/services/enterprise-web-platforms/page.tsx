"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Globe2, 
  Server, 
  Cpu, 
  ArrowUpRight,
  Activity,
  Layers,
  GitBranch,
  TerminalSquare,
  CheckCircle2,
  Zap,
  Globe,
  Code2
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA"; 

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// DATA PAYLOADS
// ==========================================
const ARCHITECTURAL_THESIS = [
  {
    id: "01",
    title: "Edge-Native Compute.",
    subtitle: "Global sub-50ms latency.",
    desc: "We push rendering and routing logic out of centralized data centers and directly to global edge nodes. By executing compute geographically adjacent to the user, we mathematically guarantee ultra-low Time-To-First-Byte (TTFB) regardless of user origin.",
    icon: Globe2,
    metric: "P99 < 50ms"
  },
  {
    id: "02",
    title: "Micro-Frontend Orchestration.",
    subtitle: "Decoupled engineering.",
    desc: "Monolithic web applications are a bottleneck for scaling engineering teams. We decompose massive interfaces into autonomous, independently deployable micro-frontends. Multiple squads can ship to production simultaneously without merge conflicts or deployment blocking.",
    icon: Layers,
    metric: "Zero Friction"
  },
  {
    id: "03",
    title: "Deterministic State Rendering.",
    subtitle: "Hybrid SSR / SSG.",
    desc: "Pure Client-Side Rendering (CSR) produces unacceptable payload bottlenecks and SEO penalties. We implement rigorous Server-Side Rendering (SSR) to stream pre-compiled, interactive HTML directly to the client, maximizing Core Web Vitals.",
    icon: Server,
    metric: "100/100 CWV"
  }
];

const DEPLOYMENT_PIPELINE = [
  {
    step: "01",
    name: "Immutable Commit",
    desc: "Code is merged. Automated static analysis, type-checking, and unit test matrices run sequentially. If a single strict-mode violation occurs, the pipeline deterministically halts.",
    logs: [
      "> running tsc --noEmit",
      "> executing jest --coverage",
      "> STATUS: 100% PASS"
    ]
  },
  {
    step: "02",
    name: "Containerized Build",
    desc: "The application is compiled into optimized static assets and serverless edge functions. Cache manifests are generated and dependencies are locked to cryptographic hashes.",
    logs: [
      "> building next.js production payload",
      "> optimizing images & bundling chunks",
      "> generating static routes"
    ]
  },
  {
    step: "03",
    name: "Edge Propagation",
    desc: "Assets are distributed globally. Traffic is routed via an instant Blue/Green cutover. Old cache is invalidated simultaneously across 300+ global CDN nodes.",
    logs: [
      "> deploying to Vercel Edge Network",
      "> initiating cache invalidation",
      "> CUTOVER COMPLETE. ZERO DOWNTIME."
    ]
  }
];

const STACK_MATRIX = [
  { category: "Framework", tech: ["Next.js 14", "React 18", "TypeScript", "Remix"] },
  { category: "State & Data", tech: ["GraphQL", "tRPC", "Zustand", "React Query"] },
  { category: "Styling", tech: ["Tailwind CSS", "Framer Motion", "GSAP", "Radix UI"] },
  { category: "Infrastructure", tech: ["Vercel Edge", "AWS CloudFront", "Redis", "Docker"] }
];

export default function EnterpriseWebPlatformsPage() {
  const container = useRef<HTMLElement>(null);
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  useGSAP(() => {
    // Cinematic Hero Reveal
    const tl = gsap.timeline();
    tl.fromTo(".hero-word", 
      { opacity: 0, y: 80, rotateX: -40 }, 
      { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.1, ease: "expo.out", delay: 0.2 }
    );
    tl.fromTo(".hero-meta", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
      "-=0.6"
    );

    // Diagnostic HUD Animation
    tl.fromTo(".diag-element",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
      "-=0.8"
    );

  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-600 selection:text-white">
      
      <HeroEnterpriseWeb />

      <section className="relative bg-white text-slate-900 pt-32 pb-32 lg:pb-48">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left: Sticky Title */}
          <div className="w-full lg:w-[40%]">
            <div className="lg:sticky lg:top-40">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6 block">
                Structural Integrity
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                The <br className="hidden lg:block"/>Architecture.
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                We eliminate technical debt by adhering to strictly deterministic design patterns. Every platform we build is governed by these core physical principles.
              </p>
            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="w-full lg:w-[60%] flex flex-col gap-24 lg:gap-40 pt-12 lg:pt-0">
            {ARCHITECTURAL_THESIS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="group flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="shrink-0">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 block mb-4">[{item.id}]</span>
                    <div className="h-16 w-16 bg-[#FAFAFA] border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-500 rounded-sm">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                      {item.subtitle}
                    </span>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-xl">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-slate-200 bg-[#FAFAFA] text-[10px] font-bold uppercase tracking-widest text-slate-900">
                      <Activity className="h-3 w-3 text-emerald-500" />
                      Target: {item.metric}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-32 bg-[#FAFAFA] border-y border-slate-200">


        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-[10px]  font-bold tracking-[0.2em] uppercase text-slate-400 mb-6 block">
              Operational Velocity
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
              Zero-Downtime <br/>Deployment.
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              We do not rely on manual server updates. We utilize mathematically rigorous, fully automated continuous integration pipelines. Code ships to global edge nodes in under 3 minutes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row bg-white border border-slate-200 shadow-xl overflow-hidden min-h-[500px]">
            
            {/* Pipeline Steps (Left) */}
            <div className="w-full lg:w-[40%] bg-[#FAFAFA] border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
              {DEPLOYMENT_PIPELINE.map((step, idx) => {
                const isActive = activePipelineStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActivePipelineStep(idx)}
                    className={`flex-1 text-left px-8 py-8 transition-all relative ${isActive ? 'bg-white' : 'hover:bg-slate-50'}`}
                  >
                    <div className={`absolute left-0 top-0 h-full w-1 transition-colors ${isActive ? 'bg-blue-600' : 'bg-transparent'}`} />
                    <div className="flex items-center gap-6">
                      <div className={`h-10 w-10 flex items-center justify-center  text-xs font-bold border rounded-sm transition-colors ${isActive ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-slate-200 text-slate-400'}`}>
                        {step.step}
                      </div>
                      <h3 className={`text-xl font-bold tracking-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                        {step.name}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pipeline Details (Right) */}
            <div className="w-full lg:w-[60%] p-8 lg:p-16 bg-white relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePipelineStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <GitBranch className="h-5 w-5 text-blue-600" />
                    <span className="text-[10px]  font-bold tracking-widest text-slate-400 uppercase">
                      Stage {DEPLOYMENT_PIPELINE[activePipelineStep].step} Execution
                    </span>
                  </div>

                  <h3 className="text-3xl font-black tracking-tight text-slate-900 mb-6">
                    {DEPLOYMENT_PIPELINE[activePipelineStep].name}
                  </h3>
                  
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
                    {DEPLOYMENT_PIPELINE[activePipelineStep].desc}
                  </p>

                  <div className="mt-auto bg-[#0A0A0A] rounded-sm p-6 border border-slate-800 shadow-inner">
                    <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                      <TerminalSquare className="h-4 w-4 text-slate-500" />
                      <span className="text-[10px]  text-slate-500 uppercase tracking-widest">Runner Output</span>
                    </div>
                    <div className=" text-xs leading-loose text-slate-300">
                      {DEPLOYMENT_PIPELINE[activePipelineStep].logs.map((log, i) => (
                         <div key={i} className={`${log.includes('STATUS') || log.includes('COMPLETE') ? 'text-emerald-400 font-bold mt-4' : ''}`}>
                           {log}
                         </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      <section className="relative bg-white text-slate-900 pt-32 pb-32 lg:pb-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
             <div>
               <span className="text-[10px]  font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 block">
                 Technology Arsenal
               </span>
               <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900">
                 The Production Stack.
               </h2>
             </div>
             <p className="text-base text-slate-500 font-medium max-w-md md:text-right">
               We utilize modern, typed, and mathematically verifiable frameworks to ensure absolute memory safety and rendering speed.
             </p>
          </div>

          <div className="w-full border-t border-slate-200 flex flex-col">
            {STACK_MATRIX.map((stack, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center py-8 md:py-10 border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 px-4">
                  <span className="text-xs  font-bold tracking-[0.2em] uppercase text-slate-400">
                    {stack.category}
                  </span>
                </div>
                <div className="w-full md:w-2/3 px-4 flex flex-wrap gap-3">
                  {stack.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 border border-slate-200 bg-white text-[11px] font-bold tracking-widest uppercase text-slate-900 shadow-sm rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          </div>
        </section>


      <EnterpriseCTA />

      {/* Global CSS for the terminal scan line */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(350px); opacity: 0; }
        }
      `}} />
    </main>
  );
}



export function HeroEnterpriseWeb() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".reveal-text", 
      { y: 120, skewY: 7, opacity: 0 }, 
      { y: 0, skewY: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" }
    );
    tl.fromTo(".reveal-meta", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 
      "-=0.6"
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen bg-[#FAFAFA] flex flex-col justify-center overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      
      <div className="max-w-[1400px] mx-auto w-full px-6 py-12 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16 mb-24">
          
          <div className="max-w-5xl">
            {/* Meta Label */}
            <div className="reveal-meta flex items-center gap-4 mb-12">
              <span className="h-[2px] w-10 bg-blue-600" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">
                Service -{`>`} Enterprise Web Platforms
              </span>
            </div>

            {/* Specialized Headline */}
            <h1 className="text-[11vw] lg:text-[7vw] font-black leading-[0.8] tracking-tighter uppercase text-[#121212]">
              <div className="overflow-hidden pb-4">
                <span className="reveal-text inline-block">Architectural</span>
              </div>
              <div className="overflow-hidden">
                <span className="reveal-text inline-block italic font-extralight text-blue-600">
                  Web Systems.
                </span>
              </div>
            </h1>
          </div>

          {/* Specific Narrative */}
          <div className="reveal-meta max-w-sm lg:mb-8">
            <p className="text-slate-500 text-base font-medium leading-relaxed mb-10 border-l-2 border-blue-600 pl-8">
              Engineering complex, high-concurrency web ecosystems with micro-frontend orchestration and edge-native hydration protocols.
            </p>
            <button className="group flex items-center gap-4 bg-[#121212] text-white px-8 py-4 rounded-full shadow-2xl shadow-slate-200 hover:bg-blue-600 transition-all duration-500">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Analyze Architecture
              </span>
              <div className="h-6 w-6 bg-white/10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </button>
          </div>
        </div>

        {/* The "Frosted Glass" Performance Matrix - Re-mapped to Web Metrics */}
        <div className="reveal-meta relative w-full grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md bg-white/30 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)]">
          
          {/* Metric 1: Time to First Byte (TTFB) */}
          <div className="bg-white/80 p-10 flex flex-col gap-5">
            <div className="flex items-center gap-3 text-slate-400 uppercase text-[9px] font-bold tracking-widest">
              <Cpu className="h-3.5 w-3.5 text-blue-600" /> TTFB Performance
            </div>
            <div className="text-5xl font-black text-[#121212] tracking-tighter">42<span className="text-sm text-slate-300 ml-1">ms</span></div>
            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 2, delay: 1 }} className="h-full bg-blue-600" />
            </div>
            <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Edge-side rendering optimized</p>
          </div>
          
          {/* Metric 2: Core Web Vitals (LCP) */}
          <div className="bg-white/80 p-10 flex flex-col gap-5">
            <div className="flex items-center gap-3 text-slate-400 uppercase text-[9px] font-bold tracking-widest">
              <Globe className="h-3.5 w-3.5 text-blue-600" /> SSR Cache Hit
            </div>
            <div className="text-5xl font-black text-[#121212] tracking-tighter">99.8<span className="text-sm text-slate-300 ml-1">%</span></div>
            <p className="text-[10px] font-medium text-slate-400">Global content distribution via Vercel Edge Network</p>
          </div>

          {/* Metric 3: System Resilience */}
          <div className="bg-white/80 p-10 flex flex-col justify-center items-center text-center border-l border-slate-100">
            <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Code Integrity</span>
            <span className="text-sm font-black text-emerald-500 uppercase tracking-tighter mt-1">100% Type-Safe SDKs</span>
          </div>
        </div>

      </div>

      {/* Vertical Branding */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 reveal-meta hidden xl:block">
        <span className="text-[8px] font-mono text-slate-300 uppercase tracking-[0.6em] [writing-mode:vertical-rl] rotate-180">
          Enterprise // Structural // Web
        </span>
      </div>
    </section>
  );
}