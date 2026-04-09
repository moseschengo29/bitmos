"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Brain, 
  Database, 
  Cpu, 
  Activity, 
  Network,
  Workflow,
  Sparkles,
  Gauge,
  Layers
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA"; // Ensure this path is correct

// Register GSAP plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ==========================================
// DATA PAYLOADS
// ==========================================
const ADVANTAGES = [
  {
    title: "Proprietary LLMs",
    icon: Brain,
    desc: "We deploy, fine-tune, and orchestrate open-weight models (Llama 3, Mistral) directly on private, secure VPCs to protect your enterprise data from public API leakage."
  },
  {
    title: "RAG Architecture",
    icon: Database,
    desc: "We build high-dimensional vector databases that ground language models in your exact, proprietary business logic, mathematically eliminating AI hallucinations."
  },
  {
    title: "Deterministic Execution",
    icon: Workflow,
    desc: "Complex multi-agent workflows are handled via strict semantic routing and structured JSON outputs, ensuring predictable, highly reliable automated reasoning."
  }
];

const METRICS = [
  { value: "<20", unit: "ms", label: "Time to First Token", desc: "Streaming inference latency" },
  { value: "100", unit: "M+", label: "Vector Embeddings", desc: "High-speed semantic search" },
  { value: "99.9", unit: "%", label: "Inference Uptime", desc: "Redundant GPU scaling" },
  { value: "0", unit: "Data", label: "Training Leakage", desc: "Absolute privacy guarantee" }
];

const STACK_DATA = [
  {
    platform: "Neural Infrastructure",
    language: "Python / CUDA",
    frameworks: ["PyTorch", "vLLM", "HuggingFace", "TensorRT"],
    gradient: "from-indigo-600 to-indigo-400"
  },
  {
    platform: "Data & Orchestration",
    language: "Vector / Ops",
    frameworks: ["Pinecone", "LangChain", "Kubernetes", "Redis"],
    gradient: "from-blue-600 to-blue-400"
  }
];

export default function AIEngineeringPage() {
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

      {/* ========================================== */}
      {/* SECTION 1: HERO                            */}
      {/* ========================================== */}
      <section className="relative pt-20 pb-24 lg:pt-12 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto z-10 min-h-[90vh] flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
          
          {/* Left Narrative */}
          <div className="w-full lg:w-[50%] pt-12 lg:pt-0">
            {/* Main Heading matched to global aesthetic */}
            <h1 className="hero-fade font-heading text-5xl sm:text-7xl lg:text-[80px] font-black leading-[1.05] tracking-tighter text-slate-900 max-w-2xl mb-8 relative z-10">
              <span className="relative inline-block whitespace-nowrap px-2">
                <span className="relative z-10">Cognitive</span>
                {/* Playful/Creative SVG Highlight */}
                <svg 
                  className="absolute inset-0 h-full w-full -rotate-2 text-indigo-500/20 z-0 drop-shadow-sm scale-110" 
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
                infrastructure.
              </span>
            </h1>

            {/* Refined Paragraph */}
            <p className="hero-fade text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
              We do not build generic chatbots. We engineer proprietary machine learning models, semantic vector databases, and highly deterministic <strong className="font-semibold text-slate-900">LLM orchestrations</strong>.
            </p>

            {/* Modern SaaS/Agency Button */}
            <div className="hero-fade flex flex-col sm:flex-row items-start gap-4">
              <button className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/25">
                Initialize ML Audit
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Right: Pure CSS AI Inference Visualizer */}
          <div className="w-full lg:w-[45%] h-[600px] relative hidden lg:block perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200/40 blur-[100px] rounded-full pointer-events-none" />

            {/* The Floating Processing Hub */}
            <motion.div 
              initial={{ y: 50, rotateY: -15, rotateZ: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="absolute top-10 right-0 w-[400px] h-[500px] bg-white border-[12px] border-slate-100 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden z-10"
            >
              <div className="flex-1 bg-slate-50 flex flex-col p-8">
                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 bg-indigo-500 rounded-full animate-pulse" />
                      <span className="font-heading font-bold text-slate-900">Inference Engine</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Active</span>
                 </div>

                 {/* Token Processing Visualization */}
                 <div className="flex flex-wrap gap-2 mb-8">
                    {["Query", "embedding", "vector", "search", "attention", "weights", "generation", "output"].map((token, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0.3, backgroundColor: "#f1f5f9", color: "#64748b" }} // slate-100, slate-500
                        animate={{ 
                          opacity: [0.3, 1, 0.3], 
                          backgroundColor: ["#f1f5f9", "#e0e7ff", "#f1f5f9"], // slate-100, indigo-100
                          color: ["#64748b", "#4f46e5", "#64748b"] // slate-500, indigo-600
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-200"
                      >
                        {token}
                      </motion.div>
                    ))}
                 </div>

                 {/* GPU Utilization Chart */}
                 <div className="mt-auto">
                   <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                     <span>GPU Utilization</span>
                     <span className="text-indigo-600">92%</span>
                   </div>
                   <div className="w-full h-24 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-end p-3 gap-1.5">
                      {[40, 70, 45, 90, 95, 80, 92, 85].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1 + (i * 0.1) }} className="flex-1 bg-indigo-500 rounded-sm" />
                      ))}
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: THE AI ADVANTAGE                */}
      {/* ========================================== */}
      <section className="scroll-section relative z-10 py-32 bg-white border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="mb-20 fade-up">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 block">
              Architectural Thesis
            </span>
            <h2 className="cap-header font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1]">
              The Intelligence Advantage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            {ADVANTAGES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="fade-up bg-white p-10 lg:p-14 flex flex-col hover:bg-slate-50 transition-colors">
                  <div className="h-14 w-14 bg-indigo-50 border border-indigo-100 flex items-center justify-center rounded-2xl mb-10 text-indigo-600">
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
              We leverage raw compute power to build features that out-of-the-box API wrappers simply cannot execute efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Item 1 */}
            <div className="fade-up md:col-span-2 bg-white border border-slate-200 p-10 rounded-3xl shadow-sm flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Network className="w-40 h-40 text-indigo-600" />
              </div>
              <div className="relative z-10 max-w-md">
                <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="h-5 w-5 text-[#121212]" />
                </div>
                <h3 className="text-2xl font-bold text-[#121212] mb-3">Model Fine-Tuning</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  We utilize Parameter-Efficient Fine-Tuning (PEFT) and LoRA to train massive open-source models specifically on your corporate documentation, reducing hallucinations and increasing domain accuracy.
                </p>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="fade-up md:col-span-1 bg-[#121212] text-white p-10 rounded-3xl shadow-sm flex flex-col justify-between">
              <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Layers className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Vector Search</h3>
                <p className="text-slate-400 font-medium text-sm">
                  High-dimensional semantic search and retrieval architectures capable of querying millions of documents in milliseconds.
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
            Physics of <br /> Inference.
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
              AI is useless if it is slow. We optimize model weights, implement continuous batching, and utilize TensorRT to ensure sub-second response times at scale.
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
                  <Gauge className="h-5 w-5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
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
              The Neural Protocol.
            </h2>
          </div>
          <p className="text-slate-500 text-sm font-medium max-w-sm text-right hidden md:block">
            Enterprise-grade machine learning frameworks combined with hardware-level acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {STACK_DATA.map((stack, idx) => (
            <div key={idx} className="fade-up p-10 border border-slate-200 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-indigo-200 transition-colors">
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
                       <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full" />
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