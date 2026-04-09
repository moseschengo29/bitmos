"use client";

import React, { Activity, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  BarChart3, 
  Users, 
  Box, 
  LineChart, 
  ShieldCheck, 
  Server, 
  Workflow,
  ArrowUpRight,
  Database,
  Cloud,
  CreditCard,
  Briefcase,
  ActivityIcon,
  FileText
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// 1. DATA PAYLOADS
// ==========================================
const MODULES = [
  {
    title: "Financial Management",
    desc: "A unified general ledger with real-time continuous consolidation, multi-currency support, and automated revenue recognition. Eliminate end-of-month reconciliation bottlenecks.",
    icon: BarChart3,
  },
  {
    title: "Human Capital (HCM)",
    desc: "End-to-end talent lifecycle management. From automated payroll processing across global jurisdictions to advanced workforce analytics and compliance tracking.",
    icon: Users,
  },
  {
    title: "Supply Chain & Ops",
    desc: "Intelligent inventory forecasting, automated procurement workflows, and real-time vendor portals. Optimize capital allocation with machine-learning-driven demand planning.",
    icon: Box,
  },
  {
    title: "Real-Time Analytics",
    desc: "Customizable, role-based dashboards powered by in-memory data processing. Query millions of rows in milliseconds to drive instantaneous strategic decisions.",
    icon: LineChart,
  }
];

const ARCHITECTURE_PILLARS = [
  {
    title: "API-First Microservices",
    desc: "Headless by design. Integrate seamlessly with your existing tech stack via comprehensive REST and GraphQL APIs.",
    icon: Workflow,
  },
  {
    title: "Cloud-Native Scale",
    desc: "Deployed on multi-region, containerized infrastructure. The system automatically provisions resources to handle extreme traffic spikes without performance degradation.",
    icon: Server,
  },
  {
    title: "Zero-Trust Security",
    desc: "Enterprise-grade protection. Every node requires mutual TLS (mTLS) authentication, backed by field-level AES-256 encryption and immutable audit logs.",
    icon: ShieldCheck,
  }
];


const INTEGRATIONS = [
  { name: "Salesforce", category: "CRM", icon: Cloud },
  { name: "AWS", category: "Infrastructure", icon: Server },
  { name: "Stripe", category: "Payments", icon: CreditCard },
  { name: "Snowflake", category: "Data Lake", icon: Database },
  { name: "SAP", category: "Legacy ERP", icon: Briefcase },
  { name: "Oracle", category: "Database", icon: Database },
];

import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";

const ROADMAP_PHASES = [
  {
    id: "phase-1",
    num: "01",
    tab: "Discovery & Audit",
    objective: "Identify hidden technical debt, map existing data silos, and pinpoint operational bottlenecks within the current legacy infrastructure.",
    execution: "We deploy senior architects to perform a deep-dive diagnostic. We reverse-engineer undocumented systems and establish a baseline performance metric before writing any code.",
    deliverables: ["SYSTEM AUDIT", "TECH DEBT MAP", "FEASIBILITY REPORT"]
  },
  {
    id: "phase-2",
    num: "02",
    tab: "Schema Architecture",
    objective: "Design a scalable, deterministic foundation that guarantees data integrity and supports high-throughput enterprise demands.",
    execution: "Strict definition of relational database schemas, microservice boundaries, and API specifications. We architect the CI/CD deployment pipelines required for zero-downtime execution.",
    deliverables: ["ENTITY RELATIONS", "API SPECS", "VPC DESIGN"]
  },
  {
    id: "phase-3",
    num: "03",
    tab: "Agile Integration",
    objective: "Execute the architectural blueprint with military precision, avoiding the scope creep and delays typical of enterprise software builds.",
    execution: "Iterative, full-stack development governed by rigorous peer-review and automated testing. We build in isolated VPC environments, ensuring absolute security and rapid iteration cycles.",
    deliverables: ["TEST-DRIVEN DEV", "CODE REVIEWS", "ISOLATED ENVS"]
  },
  {
    id: "phase-4",
    num: "04",
    tab: "Zero-Downtime Launch",
    objective: "Transition the enterprise to the new system without interrupting live operations, avoiding revenue loss or user friction.",
    execution: "Orchestrated global rollouts utilizing blue/green deployment strategies. We push your platform to the edge, utilizing multi-region clustering to guarantee sub-50ms latency worldwide.",
    deliverables: ["BLUE/GREEN", "EDGE CACHING", "LOAD BALANCING"]
  }
];

// ==========================================
// 2. MAIN PAGE COMPONENT
// ==========================================
export default function EnterpriseERPPage() {
  const container = useRef<HTMLElement>(null);
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0); // <-- ADD THIS

  useGSAP(() => {
    // Hero Animations
    gsap.fromTo(".hero-reveal", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "expo.out", delay: 0.2 }
    );

    // Module Grid Animations
    const moduleTl = gsap.timeline({ scrollTrigger: { trigger: ".module-trigger", start: "top 80%" }});
    moduleTl.fromTo(".module-header", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    moduleTl.fromTo(".module-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" }, "-=0.4");

    // Architecture Dark Section Animations
    const archTl = gsap.timeline({ scrollTrigger: { trigger: ".arch-trigger", start: "top 75%" }});
    archTl.fromTo(".arch-reveal", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: "expo.out" });

    const roadmapTl = gsap.timeline({ scrollTrigger: { trigger: ".roadmap-trigger", start: "top 75%" }});
    roadmapTl.fromTo(".roadmap-left-col", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "expo.out" });
    roadmapTl.fromTo(".roadmap-tab", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" }, "-=0.6");
    roadmapTl.fromTo(".roadmap-right-col", { opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)", duration: 1, ease: "expo.out" }, "-=0.4");

    // Integrations Animations
    const integrationTl = gsap.timeline({ scrollTrigger: { trigger: ".integration-trigger", start: "top 85%" }});
    integrationTl.fromTo(".integration-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" });

  }, { scope: container });

  const activeRoadmap = ROADMAP_PHASES[activeRoadmapIndex]; // <-- ADD THIS

  return (
    <main ref={container} className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section ref={container} className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FAFAFA] border-b border-slate-200">
      
      {/* ========================================== */}
      {/* BACKGROUND ELEMENTS                        */}
      {/* ========================================== */}
      

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* ========================================== */}
        {/* LEFT COLUMN: EDITORIAL COPY                */}
        {/* ========================================== */}
        <div className="w-full lg:w-[55%]">
         
          
          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter text-slate-900 leading-[0.95] mb-8">
            Unify your <br className="hidden md:block"/>
            <span className="text-slate-900">enterprise data.</span>
          </h1>
          
          <p className="hero-reveal text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12">
            A bespoke, high-throughput Enterprise Resource Planning system designed to eliminate data silos, automate complex workflows, and provide absolute visibility across your entire organization.
          </p>
          
          {/* Dual Call to Action */}
          <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10 hover:shadow-blue-600/20">
              Schedule Architecture Review
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-300 hover:border-slate-900 text-slate-900 text-sm font-bold uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
              <FileText className="h-4 w-4 text-slate-400" />
              Read Documentation
            </button>
          </div>

          {/* Embedded Trust Metrics */}
          <div className="hero-reveal mt-16 pt-8 border-t border-slate-200 flex items-center gap-8 md:gap-16">
            <div>
              <p className="text-3xl font-black tracking-tighter text-slate-900 mb-1">99.99%</p>
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400">Uptime SLA</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div>
              <p className="text-3xl font-black tracking-tighter text-slate-900 mb-1">&lt;50ms</p>
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400">Query Latency</p>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: ABSTRACT UI VISUALIZATION    */}
        {/* ========================================== */}
        <div className="w-full lg:w-[45%] hidden lg:block relative perspective-1000">
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            
            {/* Base UI Card */}
            <div className="hero-graphic-base absolute top-10 right-10 bottom-10 left-10 border border-slate-200 bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 flex flex-col gap-4 z-10">
              
              {/* Mock Browser/App Header */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="h-4 w-32 bg-slate-100 rounded-full" />
              </div>

              {/* Mock Dashboard Body */}
              <div className="flex-1 flex gap-4">
                {/* Sidebar Mock */}
                <div className="w-1/3 h-full rounded-2xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-3">
                  <div className="h-2 w-full bg-slate-200 rounded-full" />
                  <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                  <div className="h-2 w-4/5 bg-slate-200 rounded-full" />
                  
                  <div className="mt-auto h-20 w-full bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-500">
                    <Database className="h-8 w-8 opacity-50" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Main Data Area Mock */}
                <div className="w-2/3 h-full rounded-2xl bg-[#0F172A] p-6 flex flex-col justify-between shadow-inner relative overflow-hidden">
                  {/* Subtle grid inside dark card */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <div className="h-2 w-16 bg-slate-700 rounded-full mb-2" />
                      <div className="h-4 w-24 bg-white rounded-full" />
                    </div>
                    <div className="h-6 w-12 bg-blue-500 rounded-full" />
                  </div>
                  
                  {/* Animated Bar Graph Mock */}
                  <div className="relative z-10 w-full h-24 flex items-end gap-2 mt-auto">
                    {[40, 70, 45, 90, 65, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-slate-800 rounded-t-sm relative overflow-hidden group">
                        <div 
                          className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm transition-all duration-1000" 
                          style={{ height: `${h}%` }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent 1: Server Status */}
            <div className="hero-graphic-accent absolute -top-4 -right-4 h-28 w-28 bg-blue-600 rounded-3xl shadow-xl shadow-blue-600/20 flex flex-col items-center justify-center text-white rotate-12 z-20 border border-blue-500">
               <Server className="h-8 w-8 mb-2" strokeWidth={1.5} />
               <span className="text-[8px] font-mono tracking-widest uppercase opacity-80">Synced</span>
            </div>

            {/* Floating Accent 2: Live Metric */}
            <div className="hero-graphic-accent absolute -bottom-8 -left-4 h-32 w-56 bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 flex flex-col justify-center -rotate-6 z-20">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">System Status</div>
               </div>
               <div className="text-slate-900 font-black text-3xl tracking-tighter">Optimal</div>
               <ActivityIcon className="absolute bottom-4 right-4 h-12 w-12 text-slate-100" strokeWidth={1} />
            </div>

          </div>
        </div>

      </div>
    </section>

      {/* ========================================== */}
      {/* CORE MODULES (Hairline Grid Layout)        */}
      {/* ========================================== */}
      <section className="module-trigger py-24 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          
          <div className="module-header flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Modular by design.<br/>
                <span className="text-slate-900">Integrated by default.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
            {MODULES.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <div key={index} className="module-card group relative flex flex-col p-8 lg:p-10 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-500 min-h-[360px]">
                  <div className="mb-12 h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-300">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* NEW: IMPLEMENTATION ROADMAP (3-Column)     */}
      {/* ========================================== */}
      <section className="roadmap-trigger w-full bg-[#FAFAFA] pt-24 md:pt-32 font-sans overflow-hidden border-t border-slate-200">
        <div className="w-full mx-auto px-6 lg:px-8">
          
          {/* The 3-Column Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-y border-slate-200 bg-[#FAFAFA]">
            
          
            <div className="roadmap-left-col p-8 lg:p-16 flex flex-col justify-center">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6 block">
                 Deployment Protocol
               </span>
               <h2 className="text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.05] max-w-sm">
                 Deterministic Execution.
               </h2>
            </div>

          
            <div className="flex flex-col bg-[#FAFAFA] relative z-10 py-8 lg:py-0">
            {/* FIX 1: Changed justify-center to justify-start to push items to the top */}
            <div className="flex flex-col h-full justify-start">
                {ROADMAP_PHASES.map((phase, index) => {
                const isActive = index === activeRoadmapIndex;

                return (
                    <div 
                    key={phase.id}
                    onClick={() => setActiveRoadmapIndex(index)}
                    className="roadmap-tab relative cursor-pointer group"
                    >
                    {/* FIX 2: Removed the negative margins (lg:-ml-4 lg:-mr-4) so the white background stays inside the div */}
                    <div className={`absolute inset-x-0 inset-y-[-1px] transition-all duration-300 pointer-events-none z-0
                        ${isActive ? 'bg-white border-y border-slate-200 shadow-sm' : 'bg-transparent border-t border-transparent group-hover:bg-slate-50'}
                    `} />
                    
                    {/* Tab Content */}
                    <div className={`relative z-10 flex items-center justify-between px-8 lg:px-12 py-8 transition-colors duration-300 border-b border-slate-200
                        ${isActive ? 'border-transparent' : ''} ${index === ROADMAP_PHASES.length - 1 ? 'border-b-0' : ''}
                    `}>
                        <div className="flex items-center gap-6">
                        <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-500'}`}>
                            {phase.num}
                        </span>
                        <span className={`text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                            {phase.tab}
                        </span>
                        </div>
                        
                        {isActive && (
                        <ArrowRight className="h-5 w-5 text-blue-600 shrink-0" strokeWidth={2} />
                        )}
                    </div>
                    </div>
                );
                })}
            </div>
            </div>

            
            <div className="roadmap-right-col p-8 lg:p-16 bg-white lg:bg-[#FAFAFA] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoadmap.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col h-full justify-center"
                >
                  
                  {/* Objective Section */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1.5 w-1.5 bg-slate-300 rounded-full" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                        The Objective
                      </span>
                    </div>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                      {activeRoadmap.objective}
                    </p>
                  </div>

                  {/* Execution Section */}
                  <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600">
                        Bitmos Execution
                      </span>
                    </div>
                    <p className="text-lg text-slate-900 font-medium leading-relaxed">
                      {activeRoadmap.execution}
                    </p>
                  </div>

                  {/* Footer: Tech Stack Pills */}
                  <div className="mt-auto pt-8 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      {activeRoadmap.deliverables.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 border border-slate-200 rounded-sm bg-white text-[10px] font-bold tracking-widest text-slate-500 uppercase"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      <section className="integration-trigger bg-[#FAFAFA] border-t py-24 border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col text-center items-center mb-16 md:mb-24">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 block">
              Agnostic Compatibility
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 max-w-2xl">
              Connect to your entire enterprise ecosystem.
            </h2>
          </div>

          {/* Minimalist 6-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-slate-200 bg-white">
            {INTEGRATIONS.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="integration-card group flex flex-col items-center justify-center p-8 border-r border-b border-slate-200 hover:bg-[#121C34] transition-colors duration-500 h-[200px] cursor-pointer">
                  <Icon className="h-8 w-8 text-slate-300 group-hover:text-white mb-4 transition-colors duration-500" strokeWidth={1.5} />
                  <span className="text-sm font-bold tracking-wide text-slate-900 group-hover:text-white transition-colors duration-500">
                    {tool.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-blue-200 transition-colors duration-500 mt-2">
                    {tool.category}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* ARCHITECTURE (Dark Mode)                   */}
      {/* ========================================== */}
      <section className="arch-trigger relative py-24 md:py-32 bg-[#121c34] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="arch-reveal text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-6 block">
                  Systems Architecture
                </span>
                <h2 className="arch-reveal text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-8">
                  Engineered to <br className="hidden lg:block"/>
                  never break.
                </h2>
                <p className="arch-reveal text-lg text-slate-400 font-medium leading-relaxed mb-10">
                  We don't do brittle monoliths. Our ERP solutions are built on a deterministic, decoupled infrastructure designed for extreme operational resilience.
                </p>
                <div className="arch-reveal h-px w-full bg-slate-800" />
              </div>
            </div>

            <div className="lg:w-2/3 flex flex-col gap-12">
              {ARCHITECTURE_PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="arch-reveal flex flex-col md:flex-row gap-6 md:gap-10 group cursor-pointer">
                    <div className="shrink-0 mt-1">
                      <div className="h-16 w-16 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-blue-500 group-hover:bg-blue-600/20 transition-all duration-500">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

 
      <EnterpriseCTA />

    </main>
  );
}