"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Database, 
  Lock, 
  Globe2, 
  ArrowUpRight,
  Workflow
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// HIGH-DENSITY DATA PAYLOADS
// ==========================================
const FINTECH_SPECIALTIES = [
  {
    id: "01",
    shortName: "Ledger",
    name: "Immutable Core Ledger",
    challenge: "Traditional databases cannot guarantee mathematical state consistency under high concurrency. Deadlocks and data collision are pervasive.",
    spec: "Sub-10ms transaction finality with ACID guarantees. We engineer the core accounting engine for absolute data integrity.",
    tech: ["Apache Kafka", "KDB+", "gRPC", "Rust"],
    metric: "ZERO DATA LOSS"
  },
  {
    id: "02",
    shortName: "Payouts",
    name: "Global Rails Orchestration",
    challenge: "Navigating fragmented payment rails (SWIFT, SEPA, ACH) across jurisdictions introduces severe latency and massive currency risk.",
    spec: "Multi-currency orchestration with real-time continuous consolidation. Real-time forex normalization via institutional liquidity APIs.",
    tech: ["Go", "VPC Peering", "mtls", "Stripe API"],
    metric: "Live Payouts"
  },
  {
    id: "03",
    shortName: "Fraud",
    name: "Real-Time Detection Engine",
    challenge: "Legacy post-transaction fraud detection models are reactive. Criminals iterate faster than rules engines.",
    spec: "Real-time anomaly detection using streaming analytics. We identify and block suspicious patterns at the edge before authorizing.",
    tech: ["Flink", "Redis", "TensorFlow Edge"],
    metric: "P99 < 15ms"
  },
  {
    id: "04",
    shortName: "Regulatory",
    name: "Programmatic Compliance Gateway",
    challenge: "Integrating fragmented KYC, AML, and PCI-DSS rules into a frictionless onboarding workflow is an engineering impossibility for most.",
    spec: "Native enforcement of KYC/AML. Infrastructure turns regulatory friction into programmatic, verifiable workflows.",
    tech: ["OAuth 2.0", "AES-256", "VPC isolation"],
    metric: "100% SEC"
  }
];

const ARCHITECTURE_NODES = [
  {
    id: "node-1",
    label: "[ INTEGRITY ]",
    title: "Write-Ahead Event Logs",
    desc: "We prioritize deterministic execution. All financial state changes are recorded as an immutable, replayable event stream.",
    icon: Workflow,
    color: "from-blue-600/10 to-indigo-900/20"
  },
  {
    id: "node-2",
    label: "[ VELOCITY ]",
    title: "Multi-Region Edge",
    desc: "We push compute and caching to global edge nodes to minimize round-trip latency and eliminate user friction.",
    icon: Zap,
    color: "from-blue-600/10 to-blue-800/20"
  },
  {
    id: "node-3",
    label: "[ SECURITY ]",
    title: "Micro-Segmentation & mTLS",
    desc: "Every node requires mutual TLS authentication. We implement granular VPC micro-segmentation to isolate critical data.",
    icon: ShieldCheck,
    color: "from-blue-600/10 to-blue-700/20"
  }
];

const DEPLOYMENT_PROTOCOL = [
  {
    id: "step-1",
    num: "01",
    tab: "Regulatory Baseline",
    objective: "Map the strict security boundaries (SOC2/PCI) and establish the cryptographic audit trails required for launch.",
  },
  {
    id: "step-2",
    num: "02",
    tab: "Schema Engineering",
    objective: "Design the core transactional schemas required for absolute ACID compliance and immutable record keeping.",
  },
  {
    id: "step-3",
    num: "03",
    tab: "Rail Orchestration",
    objective: "Build high-throughput, gRPC-driven integration layers to banking rails and third-party payment gateways.",
  },
  {
    id: "step-4",
    num: "04",
    tab: " ब्लू/ग्रीन Launch",
    objective: "Execute a zero-downtime cutover with real-time state integrity verification via an event-driven control plane.",
  }
];

export default function FintechPage() {
  const container = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSpecialty = FINTECH_SPECIALTIES[activeIndex];
  const activeIcon = activeSpecialty.id === "01" ? Database : activeSpecialty.id === "02" ? Globe2 : activeSpecialty.id === "03" ? ShieldCheck : Lock;

  useGSAP(() => {
    // Cinematic entrance
    gsap.fromTo(".hero-line", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out", delay: 0.1 }
    );

    // Grid reveal for Architecture Nodes
    const gridTl = gsap.timeline({ scrollTrigger: { trigger: ".node-grid-wrapper", start: "top 75%" }});
    gridTl.fromTo(".node-grid-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" });

    // Stagger for protocol list
    const protocolTl = gsap.timeline({ scrollTrigger: { trigger: ".protocol-list-trigger", start: "top 75%" }});
    protocolTl.fromTo(".protocol-item", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white border-t border-slate-200">
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-slate-200 bg-[#FAFAFA]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[60%]">
            <div className="hero-line flex items-center gap-3 mb-8">
              <div className="h-2 w-2 bg-blue-600 rounded-sm" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600">
                Core Solutions // Financial Technology
              </span>
            </div>
            
            <h1 className="hero-line text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-slate-900 leading-[0.95] mb-8">
              Deterministic <br />
              <span className="text-slate-400">digital money.</span>
            </h1>
            
            <p className="hero-line text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12">
              We architect secure, high-concurrency financial ecosystems. From low-latency ledgers to real-time clearing engines, we build the deterministic infrastructure that powers global finance.
            </p>
            
            <div className="hero-line flex flex-col sm:flex-row items-center gap-4 mb-16 pt-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10">
                Book Architecture Audit
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Abstract Fintech Visualization (Mock-System Diagnostic) */}
          <div className="w-full lg:w-[40%] hidden lg:block">
            <div className="relative aspect-square border border-slate-200 bg-white shadow-2xl rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
               <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
               
               <div className="relative z-10 flex justify-between items-center pb-6 border-b border-slate-100 mb-6">
                  <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                    <Database className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">State Integrity</span>
                    <span className="text-xl font-black text-slate-900">VERIFIED</span>
                  </div>
               </div>

               <div className="relative z-10 flex-grow flex flex-col justify-end gap-1">
                  <div className="w-full flex items-end gap-1 h-24">
                    {[40, 70, 45, 90, 65, 100, 80, 50].map((h, i) => (
                        <div key={i} className="flex-1 bg-slate-100 rounded-t group relative">
                            <div className="absolute bottom-0 w-full bg-blue-500 group-hover:bg-blue-600" style={{ height: `${h}%` }} />
                        </div>
                    ))}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 pt-3 border-t border-slate-100">LEDGER // TX LOG // P99 LATENCY // EVENT_ID: 9812A</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row border-t border-slate-200">
          
          {/* LEFT: Massive Typographic Index */}
          <div className="w-full lg:w-[55%] border-r border-slate-200">
            {FINTECH_SPECIALTIES.map((sector, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={sector.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="sector-row group border-b border-slate-200 cursor-pointer relative overflow-hidden bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="relative z-10 py-10 md:py-16 px-6 lg:px-12 flex items-center justify-between transition-all duration-500">
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className={`text-sm md:text-lg font-mono font-bold transition-colors duration-500 ${isActive ? 'text-blue-600' : 'text-slate-300'}`}>
                        {sector.id}
                      </span>
                      <h2 className={`text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-500 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                        {sector.shortName}
                      </h2>
                    </div>
                    
                    <div className={`hidden md:flex h-12 w-12 rounded-full border items-center justify-center transition-all duration-500 ${isActive ? 'border-blue-500 bg-blue-50 text-blue-600 opacity-100 rotate-0' : 'border-slate-200 text-slate-300 opacity-0 -rotate-45'}`}>
                      <ArrowRight className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Technical Data HUD (Sticky & Clean) */}
          <div className="w-full lg:w-[45%] bg-[#FDFDFD] hidden lg:block relative">
            <div className="sticky top-0 h-screen flex flex-col justify-center p-12 lg:p-16 overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecialty.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-center"
                >
                  
                  {/* Top Header */}
                  <div className="flex justify-between items-center mb-16 border-b border-slate-200 pb-8">
                    <div className="h-14 w-14 bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm">
                       {React.createElement(activeIcon, { className: "h-6 w-6", strokeWidth: 1.5 })}
                    </div>
                    <div className="text-right">
                       <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Audit Check</span>
                       <span className="block text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-sm">{activeSpecialty.metric}</span>
                    </div>
                  </div>

                  {/* Specification Grid */}
                  <div className="space-y-12">
                    {/* The Challenge */}
                    <div className="grid grid-cols-4 gap-4">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Challenge</span>
                      <p className="col-span-3 text-base text-slate-600 font-medium leading-relaxed">
                        {activeSpecialty.challenge}
                      </p>
                    </div>

                    {/* Bitmos Solution */}
                    <div className="grid grid-cols-4 gap-4">
                      <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mt-1">Bitmos</span>
                      <p className="col-span-3 text-base text-slate-900 font-bold leading-relaxed">
                        {activeSpecialty.spec}
                      </p>
                    </div>

                    {/* Core Stack */}
                    <div className="grid grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Architecture</span>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {activeSpecialty.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1.5 border border-slate-200 bg-white text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>
          
        </div>
      </section>

      <section className="node-grid-wrapper py-24 md:py-32 bg-[#0B1121] text-white border-t border-slate-800 relative">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#FAFAFA 1px, transparent 1px), linear-gradient(90deg, #FAFAFA 1px, transparent 1px)', backgroundSize: '6rem 6rem' }} />

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-28">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-6 block">The Physics of Finance</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95]">
                Hardened by <br className="hidden md:block"/>
                <span className="text-slate-500 italic">design.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-slate-800">
            {ARCHITECTURE_NODES.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.id} className="node-grid-card group relative flex flex-col p-10 lg:p-14 border-r border-b border-slate-800 hover:border-blue-500 transition-colors duration-500 bg-[#121C34] h-[360px] md:h-[400px]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-30 pointer-events-none group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative z-10 flex justify-between items-start mb-16">
                    <div className="h-14 w-14 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 group-hover:text-blue-300 transition-colors">{pillar.label}</span>
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-base text-slate-400 font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="protocol-list-trigger py-24 md:py-32 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-28 border-b border-slate-100 pb-16">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-6 block">Execution</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-[1.05]">Deployment Protocol</h2>
            </div>
            <div className="max-w-sm md:text-right">
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Deterministic engineering requires deterministic execution. We reject MVP chaos for rigorous, pre-planned execution rails.</p>
            </div>
          </div>

          <div className="w-full flex flex-col divide-y divide-slate-100">
            {DEPLOYMENT_PROTOCOL.map((step) => (
              <div key={step.id} className="protocol-item group flex flex-col md:flex-row items-center py-10 md:py-14 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-8 md:w-1/3 mb-6 md:mb-0">
                  <span className="text-sm font-bold font-mono text-slate-300 group-hover:text-blue-600 transition-colors">{step.num}</span>
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">{step.tab}</h3>
                </div>
                <div className="flex-grow max-w-2xl">
                  <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">{step.objective}</p>
                </div>
                <div className="md:w-1/4 flex justify-end shrink-0 mt-6 md:mt-0">
                   <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                        <ArrowRight className="h-4 w-4" />
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}