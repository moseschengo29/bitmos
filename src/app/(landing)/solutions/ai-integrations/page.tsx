"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowDownRight, 
  BrainCircuit, 
  Database, 
  Lock, 
  Network, 
  ArrowRight,
  Server,
  Activity,
  CheckCircle2,
  XCircle,
  Zap,
  TrendingUp,
  ShieldCheck,
  Box,
  Play,
  Terminal,
  Cpu,
  Shield,
  FileText
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export function AiHero() {
    const container = useRef<HTMLElement>(null);
  
    useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
  
      tl.fromTo(
          ".hero-word", 
          { opacity: 0, y: 50, rotateX: -20 }, 
          { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.1 }, 
          "+=0.1"
        )
        .fromTo(
          ".hero-desc", 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 1 }, 
          "-=0.8"
        );
    }, { scope: container });
  
    return (
      <section ref={container} className="relative bg-[#FAFAFA] pt-24 sm:pt-48 pb-20 font-sans overflow-hidden border-b border-slate-200">
        
        {/* --- THE LARGE FAINT WATERMARK ICON --- */}
        {/* Positioned on the right, scaled massively, with a very low opacity */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none text-blue-900">
          <BrainCircuit strokeWidth={1} className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]" />
        </div>
  
        {/* Abstract Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full bg-blue-600 blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-slate-900 blur-[100px]"></div>
        </div>
  
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-[1.05] mb-8 flex flex-wrap gap-x-4 gap-y-2 perspective-1000">
              <span className="hero-word overflow-hidden">Intelligence</span>
              <span className="hero-word overflow-hidden text-slate-400">as</span>
              <span className="hero-word overflow-hidden">core</span>
              <span className="hero-word overflow-hidden font-serif italic font-medium text-slate-500 pr-2">infrastructure.</span>
            </h1>
  
            <p className="hero-desc text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mb-12">
              We bypass the AI hype cycle. We engineer secure, private, and deterministic artificial intelligence models directly into your enterprise databases, transforming raw data into automated operational power.
            </p>
  
            <div className="hero-desc flex items-center gap-4">
              <Link href="#architecture" className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">
                View Architecture
              </Link>
            </div>
  
          </div>
        </div>
      </section>
    );
  }

function AiContext() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".context-fade", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 75%" } }
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-24 sm:py-32 font-sans border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative">
            <ArrowDownRight className="context-fade h-8 w-8 text-blue-600 mb-8" strokeWidth={1.5} />
            <h2 className="context-fade font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Most companies buy <span className="text-slate-400">wrappers.</span> We build <span className="font-serif italic font-medium text-slate-500">engines.</span>
            </h2>
            <p className="context-fade text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Sending your proprietary company data to public LLM APIs is a massive security vulnerability. Furthermore, generic models hallucinate when asked highly specific, context-dependent questions about your business.
            </p>
            <div className="context-fade p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm text-slate-700 font-bold leading-relaxed flex items-start gap-3">
                <Lock className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                The Bitmos standard requires &quot;Private AI.&quot; We deploy localized, fine-tuned models and strict Vector Databases inside your own cloud environment. Your data never leaves your VPC.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Data Privacy", desc: "Zero-data retention policies. Models hosted in your secure VPC." },
              { title: "No Hallucinations", desc: "Strict RAG pipelines ensure the AI only answers using your verified data." },
              { title: "Cost Control", desc: "Optimized inference computing avoids runaway API billing." },
              { title: "Custom Fine-Tuning", desc: "Models trained specifically on your corporate syntax and workflows." }
            ].map((item, i) => (
              <div key={i} className="context-fade p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4">0{i + 1}</div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}





// ==========================================
// 3. VISUAL AI INTEGRATION (The Visualizer)
// ==========================================
export function AiIntegrationVisualizer() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    // Reveal Header
    tl.fromTo(".visualizer-text", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }
    );

    // Reveal Nodes
    tl.fromTo(".node-element",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.5"
    );

    // Animate Data Flow (SVG Paths)
    gsap.to(".data-stream", {
      strokeDashoffset: -100,
      duration: 1.5,
      ease: "none",
      repeat: -1,
    });
    
    // Pulse the center core
    gsap.to(".core-pulse", {
      scale: 1.1,
      opacity: 0.3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  return (
    <section ref={container} className="bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden border-b border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="visualizer-text text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">Neural Topology</p>
          <h2 className="visualizer-text font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
            Intelligence at the <br/><span className="text-blue-500">center of your data.</span>
          </h2>
          <p className="visualizer-text text-slate-400 font-medium leading-relaxed text-sm sm:text-base">
            Our models do not live in a silo. We deploy the AI Engine at the exact center of your operations, turning fragmented databases and legacy ERPs into a unified, sentient nervous system.
          </p>
        </div>

        {/* --- THE INTERACTIVE VISUALIZER --- */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-[21/9] bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
          
          {/* SVG DATA PIPELINES */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
            {/* Top Left to Center */}
            <path d="M 200 125 C 350 125, 400 250, 500 250" fill="none" stroke="#1E293B" strokeWidth="2" />
            <path d="M 200 125 C 350 125, 400 250, 500 250" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10 15" className="data-stream opacity-60" />
            
            {/* Top Right to Center */}
            <path d="M 800 125 C 650 125, 600 250, 500 250" fill="none" stroke="#1E293B" strokeWidth="2" />
            <path d="M 800 125 C 650 125, 600 250, 500 250" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="10 15" className="data-stream opacity-60" />

            {/* Bottom Left to Center */}
            <path d="M 200 375 C 350 375, 400 250, 500 250" fill="none" stroke="#1E293B" strokeWidth="2" />
            <path d="M 200 375 C 350 375, 400 250, 500 250" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="10 15" className="data-stream opacity-60" />

            {/* Bottom Right to Center */}
            <path d="M 800 375 C 650 375, 600 250, 500 250" fill="none" stroke="#1E293B" strokeWidth="2" />
            <path d="M 800 375 C 650 375, 600 250, 500 250" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="10 15" className="data-stream opacity-60" />
          </svg>

          {/* HTML NODES */}
          
          {/* Center: AI Core */}
          <div className="node-element absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[40px] core-pulse pointer-events-none"></div>
            <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-slate-950 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10">
              <BrainCircuit className="h-10 w-10 text-blue-500" strokeWidth={1.5} />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">Bitmos AI Engine</h3>
              <p className="text-[10px] text-blue-400 font-mono mt-1">VPC Deployed</p>
            </div>
          </div>

          {/* Top Left: ERP */}
          <div className="node-element absolute left-[10%] sm:left-[15%] top-[15%] flex flex-col items-center z-10 w-32">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-400">
              <Box className="h-5 w-5" />
            </div>
            <p className="mt-3 text-xs font-bold text-slate-300 uppercase tracking-wider text-center">Legacy ERPs</p>
          </div>

          {/* Top Right: CRM / Data Platform */}
          <div className="node-element absolute right-[10%] sm:right-[15%] top-[15%] flex flex-col items-center z-10 w-32">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-400">
              <Network className="h-5 w-5" />
            </div>
            <p className="mt-3 text-xs font-bold text-slate-300 uppercase tracking-wider text-center">Data Platforms</p>
          </div>

          {/* Bottom Left: Vector DB */}
          <div className="node-element absolute left-[10%] sm:left-[15%] bottom-[15%] flex flex-col items-center z-10 w-32">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-400">
              <Database className="h-5 w-5" />
            </div>
            <p className="mt-3 text-xs font-bold text-slate-300 uppercase tracking-wider text-center">Private Vector DB</p>
          </div>

          {/* Bottom Right: Internal Tools */}
          <div className="node-element absolute right-[10%] sm:right-[15%] bottom-[15%] flex flex-col items-center z-10 w-32">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-400">
              <Activity className="h-5 w-5" />
            </div>
            <p className="mt-3 text-xs font-bold text-slate-300 uppercase tracking-wider text-center">Internal Tooling</p>
          </div>

        </div>

      </div>
    </section>
  );
}

// ==========================================
// 4. THE OPERATIONAL VALUE (ROI Section)
// ==========================================
export function AiBusinessValue() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.fromTo(".value-header", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }
    );

    tl.fromTo(".value-card", 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out" },
      "-=0.6"
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-24 sm:py-32 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="value-header text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Operational Alpha</p>
            <h2 className="value-header font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.05]">
              The concrete ROI of <br/>
              <span className="font-serif italic font-medium text-slate-500">Private AI Infrastructure.</span>
            </h2>
          </div>
          <p className="value-header text-sm text-slate-500 font-medium leading-relaxed max-w-md">
            We don&apos;t sell parlor tricks. Our integration frameworks are designed to radically reduce overhead, eliminate human error in data processing, and protect your intellectual property.
          </p>
        </div>

        {/* --- METRICS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          <div className="value-card p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-slate-200">
            <ShieldCheck className="h-6 w-6 text-emerald-600 mb-6" />
            <div className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">100%</div>
            <h3 className="font-bold text-slate-900 mb-2">Data Sovereignty</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">By hosting fine-tuned models on your own servers, your proprietary data is mathematically guaranteed to never train a public LLM.</p>
          </div>

          <div className="value-card p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-slate-200">
            <TrendingUp className="h-6 w-6 text-blue-600 mb-6" />
            <div className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">~80%</div>
            <h3 className="font-bold text-slate-900 mb-2">Reduction in Triage</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">Autonomous agents handle tier-1 data retrieval and repetitive workflow routing, freeing human capital for high-leverage strategy.</p>
          </div>

          <div className="value-card p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-slate-200">
            <Zap className="h-6 w-6 text-amber-500 mb-6" />
            <div className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">&lt;50<span className="text-3xl">ms</span></div>
            <h3 className="font-bold text-slate-900 mb-2">Inference Latency</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">Direct database integration and optimized embedding generation means the AI responds with enterprise-grade speed.</p>
          </div>

        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="value-card max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* The Competitor / Status Quo */}
            <div className="p-8 sm:p-12 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Standard &quot;SaaS Wrapper&quot; AI</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-600">Sends sensitive corporate data to external APIs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-600">Prone to hallucinations and generalized, unhelpful answers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-600">Subject to third-party rate limits and sudden pricing changes.</span>
                </li>
              </ul>
            </div>

            {/* The Bitmos Way */}
            <div className="p-8 sm:p-12 bg-white">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-8">Bitmos Private AI Infrastructure</h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-slate-900">Deployed securely inside your VPC. Zero data leakage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-slate-900">Strict RAG pipelines ensure answers are cited from your data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-slate-900">Fixed computing costs utilizing highly optimized open-source models.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

const DEMO_PROMPTS = [
    {
      id: 1,
      title: "Supply Chain Analysis",
      prompt: "Identify the primary cause of Q3 freight delays.",
      docs: ["q3_logistics.pdf", "vendor_contracts.docx", "freight_logs.csv"],
      response: "Based on 'freight_logs.csv', 68% of Q3 delays originated at the Port of Long Beach due to a 3-week dockworker strike. I recommend rerouting Q4 shipments through Seattle based on current capacity models."
    },
    {
      id: 2,
      title: "Financial Audit",
      prompt: "Reconcile the Q2 AWS infrastructure spend.",
      docs: ["aws_billing_q2.csv", "budget_forecast_2024.xlsx"],
      response: "AWS spend in Q2 exceeded forecasts by 14% ($42,500). Analysis of 'aws_billing_q2.csv' indicates this was driven by unoptimized EC2 instances left running in the eu-west-1 dev environment."
    },
    {
      id: 3,
      title: "HR Policy Retrieval",
      prompt: "What is the updated remote work policy for engineers?",
      docs: ["employee_handbook_v4.pdf", "engineering_ops.md"],
      response: "According to 'employee_handbook_v4.pdf' (updated last month), Engineering staff are eligible for 100% remote work, provided they maintain a 4-hour timezone overlap with the core team in Nairobi."
    }
  ];
  
  export function AiLiveSimulator() {
    const container = useRef<HTMLElement>(null);
    
    // Simulation State
    const [activePrompt, setActivePrompt] = useState<number | null>(null);
    const [simState, setSimState] = useState<"idle" | "connecting" | "retrieving" | "synthesizing" | "complete">("idle");
    const [typedResponse, setTypedResponse] = useState("");
  
    useGSAP(() => {
      gsap.fromTo(".sim-reveal", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 70%" } }
      );
    }, { scope: container });
  
    // Handle the simulation timing logic
    useEffect(() => {
      if (simState === "idle" || activePrompt === null) return;
  
      const currentData = DEMO_PROMPTS.find(p => p.id === activePrompt);
      if (!currentData) return;
  
      if (simState === "connecting") {
        setTimeout(() => setSimState("retrieving"), 800);
      } else if (simState === "retrieving") {
        setTimeout(() => setSimState("synthesizing"), 1500);
      } else if (simState === "synthesizing") {
        // Typewriter effect for the response
        let i = 0;
        setTypedResponse("");
        const typingInterval = setInterval(() => {
          setTypedResponse(currentData.response.slice(0, i));
          i++;
          if (i > currentData.response.length) {
            clearInterval(typingInterval);
            setSimState("complete");
          }
        }, 15); // typing speed
        return () => clearInterval(typingInterval);
      }
    }, [simState, activePrompt]);
  
    const runSimulation = (id: number) => {
      if (simState !== "idle" && simState !== "complete") return;
      setActivePrompt(id);
      setTypedResponse("");
      setSimState("connecting");
    };
  
    const activeData = DEMO_PROMPTS.find(p => p.id === activePrompt);
  
    return (
      <section ref={container} className="bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden border-y border-slate-900 relative">
        
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
  
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <p className="sim-reveal text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Demonstration
            </p>
            <h2 className="sim-reveal font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Experience <span className="text-slate-500">Private RAG</span> in action.
            </h2>
          </div>
  
          {/* --- INTERACTIVE SANDBOX --- */}
          <div className="sim-reveal grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT: User Inputs */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <p className="text-sm font-bold text-slate-400 mb-2">Select a query to test the infrastructure:</p>
              
              {DEMO_PROMPTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => runSimulation(item.id)}
                  disabled={simState !== "idle" && simState !== "complete"}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                    activePrompt === item.id 
                      ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]" 
                      : "bg-slate-900/50 border-slate-800 hover:bg-slate-800 hover:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${activePrompt === item.id ? "text-blue-400" : "text-slate-500"}`}>
                      {item.title}
                    </span>
                    <Play className={`h-4 w-4 ${activePrompt === item.id ? "text-blue-400" : "text-slate-600"}`} />
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base">"{item.prompt}"</p>
                </button>
              ))}
            </div>
  
            {/* RIGHT: Backend Telemetry (Terminal) */}
            <div className="lg:col-span-7 bg-[#020617] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl h-[450px] flex flex-col font-mono text-sm relative">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-slate-500" />
                  <span className="text-xs font-semibold text-slate-400">bitmos_engine_v2.4</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-700"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-700"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-700"></div>
                </div>
              </div>
  
              {/* Terminal Body */}
              <div className="flex-1 p-6 overflow-y-auto">
                
                {activePrompt === null ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-600 opacity-50">
                    <Cpu className="h-8 w-8 mb-4" />
                    <p>System Idle. Waiting for secure input...</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    
                    {/* Step 1: Connecting */}
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-emerald-500 shrink-0" />
                      <div>
                        <p className="text-emerald-500">[SYSTEM] VPC Connection Established.</p>
                        <p className="text-slate-400 text-xs mt-1">Authenticating IAM Roles... Verified.</p>
                        <p className="text-white mt-2">&gt; {activeData?.prompt}</p>
                      </div>
                    </div>
  
                    {/* Step 2: Retrieving */}
                    {(simState === "retrieving" || simState === "synthesizing" || simState === "complete") && (
                      <div className="flex items-start gap-3 mt-4 opacity-0 animate-[fadeIn_0.3s_ease_forwards]">
                        <Database className="h-5 w-5 text-blue-500 shrink-0" />
                        <div>
                          <p className="text-blue-500">[VECTOR_DB] Performing semantic search...</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {activeData?.docs.map((doc, i) => (
                              <span key={i} className="flex items-center gap-1.5 bg-blue-950/50 border border-blue-900 text-blue-300 text-xs px-2 py-1 rounded">
                                <FileText className="h-3 w-3" /> {doc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
  
                    {/* Step 3: Synthesizing */}
                    {(simState === "synthesizing" || simState === "complete") && (
                      <div className="flex items-start gap-3 mt-4 opacity-0 animate-[fadeIn_0.3s_ease_forwards]">
                        <Cpu className="h-5 w-5 text-amber-500 shrink-0" />
                        <div>
                          <p className="text-amber-500">[LLM] Synthesizing response with isolated context...</p>
                          <div className="mt-3 p-4 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 leading-relaxed min-h-[80px]">
                            {typedResponse}
                            {simState === "synthesizing" && <span className="inline-block w-2 h-4 ml-1 bg-amber-500 animate-pulse"></span>}
                          </div>
                        </div>
                      </div>
                    )}
  
                    {/* Step 4: Complete */}
                    {simState === "complete" && (
                      <div className="flex items-center gap-2 mt-4 text-emerald-500 opacity-0 animate-[fadeIn_0.3s_ease_forwards]">
                        <CheckCircle2 className="h-4 w-4" />
                        <p className="text-xs">Process complete. Zero data leakage detected.</p>
                      </div>
                    )}
  
                  </div>
                )}
  
              </div>
            </div>
  
          </div>
        </div>
        
        {/* Tailwind Custom Keyframe for the terminal lines */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
  
      </section>
    );
  }

export default function AiIntegrationsPage() {
  return (
    <main className="w-full">
      <AiHero />
      <AiContext />
      <AiLiveSimulator />
      <AiBusinessValue />
      <AiIntegrationVisualizer />
      {/* <FinalCTA /> */}
    </main>
  );
}