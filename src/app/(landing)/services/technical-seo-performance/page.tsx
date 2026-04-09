"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Activity, 
  Globe, 
  Code2, 
  Database,
  Network,
  Zap,
  Gauge,
  BarChart
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ==========================================
// DATA PAYLOADS
// ==========================================
const ADVANTAGES = [
  {
    title: "Core Web Vitals",
    icon: Activity,
    desc: "We engineer interfaces that mathematically guarantee passing Core Web Vitals. Optimizing for sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift."
  },
  {
    title: "Server-Side Rendering",
    icon: Globe,
    desc: "Single Page Applications are invisible to most crawlers. We implement robust SSR and SSG to deliver pre-compiled, fully indexable HTML to search engines."
  },
  {
    title: "Semantic DOM Arch",
    icon: Code2,
    desc: "We structure the Document Object Model with strict adherence to W3C standards, injecting automated JSON-LD structured data for rich SERP snippets."
  }
];

const METRICS = [
  { value: "100", unit: "", label: "Lighthouse Score", desc: "Performance guaranteed" },
  { value: "<50", unit: "ms", label: "Time to First Byte", desc: "Global edge propagation" },
  { value: "<1.2", unit: "s", label: "LCP Rendering", desc: "Instant visual completeness" },
  { value: "0", unit: "ms", label: "Blocking Time", desc: "Uninterrupted main thread" }
];

const STACK_DATA = [
  {
    platform: "Rendering Layer",
    language: "React / Node",
    frameworks: ["Next.js App Router", "Astro", "Remix", "Vercel Edge Compute"],
  },
  {
    platform: "Observability",
    language: "CI/CD Protocols",
    frameworks: ["Lighthouse CI", "Datadog RUM", "Sentry", "Search Console API"],
  }
];

export default function TechnicalSEOPage() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Smooth, airy hero reveal
    tl.fromTo(".hero-reveal", 
      { y: 60, opacity: 0, filter: "blur(10px)" }, 
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, stagger: 0.15, ease: "expo.out", delay: 0.2 }
    );

    tl.fromTo(".dashboard-reveal",
      { y: 100, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
      "-=1"
    );

    // Soft floating scroll animations
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((sec: any) => {
      gsap.fromTo(sec.querySelectorAll('.fade-up'),
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      <section className="relative pt-32 lg:pt-48 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[90vh]">
  
  {/* ========================================== */}
  {/* LEFT SIDE: Narrative & CTA                 */}
  {/* ========================================== */}
  <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
    

    <h1 className="hero-reveal font-heading text-[14vw] lg:text-[6.5vw] font-black leading-[0.9] tracking-tighter text-[#121212] mb-8">
      Algorithmic <br />
      <span className="text-slate-400 italic font-light">Discoverability.</span>
    </h1>

    <p className="hero-reveal text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mb-12">
      We do not write blog posts. We engineer the underlying DOM architecture, edge-caching protocols, and server-side rendering pipelines required to dominate search engine crawlers.
    </p>

    <button className="hero-reveal group flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-full shadow-xl shadow-blue-600/20 hover:bg-[#121212] hover:shadow-slate-900/20 transition-all duration-500">
      <span className="text-[11px] font-bold uppercase tracking-widest">
        Initialize Site Audit
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </button>
  </div>

  {/* ========================================== */}
  {/* RIGHT SIDE: Floating Glass Dashboard       */}
  {/* ========================================== */}
  <div className="dashboard-reveal w-full lg:w-[45%] relative z-20 perspective-1000 hidden md:block">
    

    {/* The Glass Card - Tilted for a 3D isometric feel */}
    <div className="w-full bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(37,99,235,0.15)] p-6 lg:p-10 flex flex-col transform-gpu -rotate-y-6 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 px-2 border-b border-slate-100/50 pb-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-slate-200 rounded-full" />
          <div className="h-3 w-3 bg-slate-200 rounded-full" />
          <div className="h-3 w-3 bg-slate-200 rounded-full" />
        </div>
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md">Live CI Pipeline</span>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Score Circular Indicator */}
        <div className="flex justify-between items-center bg-slate-50/50 rounded-3xl p-8 border border-slate-100/50">
          <div>
            <div className="text-2xl font-heading font-black text-slate-900 mb-1">Production</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Passing Vitals</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-20 w-20 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="36" className="fill-none stroke-slate-200" strokeWidth="6" />
                <motion.circle 
                  cx="40" cy="40" r="36" 
                  className="fill-none stroke-emerald-500" 
                  strokeWidth="6" strokeLinecap="round" strokeDasharray="226"
                  initial={{ strokeDashoffset: 226 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                />
              </svg>
              <span className="font-heading font-black text-2xl text-slate-900 z-10">100</span>
            </div>
          </div>
        </div>

        {/* Network Waterfall */}
        <div className="bg-slate-50/50 rounded-3xl p-8 flex flex-col justify-center gap-5 border border-slate-100/50">
          {[
            { label: "DNS Resolve", w: "15%", color: "bg-slate-300", delay: 1.2 },
            { label: "Edge SSL", w: "25%", color: "bg-blue-300", delay: 1.3 },
            { label: "TTFB", w: "40%", color: "bg-blue-500", delay: 1.4 },
            { label: "LCP", w: "65%", color: "bg-emerald-500", delay: 1.5 }
          ].map((bar, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-24 text-[10px] font-mono text-slate-500">{bar.label}</span>
              <div className="flex-1 h-2 bg-slate-200/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: bar.w }} 
                transition={{ 
                  duration: 1, 
                  delay: bar.delay, 
                  ease: "easeOut" // <-- Changed from "power3.out"
                }}
                className={`h-full rounded-full ${bar.color}`} 
              />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  </div>
</section>

      {/* ========================================== */}
      {/* SECTION 2: FLOATING FEATURES               */}
      {/* ========================================== */}
      {/* Added extra padding-top to account for the overlapping hero dashboard */}
      <section className="scroll-section relative z-10 pt-32 pb-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-[#121212] mb-6">
            The Technical Advantage.
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Search engine algorithms heavily penalize slow rendering. We enforce strict quantitative thresholds to guarantee indexation.
          </p>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVANTAGES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div key={i} className={`fade-up bg-white rounded-[2rem] p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)] transition-all duration-500'`}>
                <div className="h-16 w-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-black tracking-tight text-[#121212] mb-4">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      
      <section className="scroll-section relative z-10 py-20 lg:py-20 bg-[#FAFAFA] overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20 relative z-10">
          
          {/* Left: Sticky Editorial Narrative */}
          <div className="w-full lg:w-[40%] flex flex-col items-start relative">
            <div className="lg:sticky lg:top-40 fade-up">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-1 w-8 bg-blue-600 rounded-full" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600">
                  Performance SLAs
                </span>
              </div>
              
              <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95] text-[#121212]">
                Physics of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 italic font-light pr-2">
                  Search.
                </span>
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-sm">
                We do not hope for performance; we engineer for it. Our DOM architectures are bound by strict quantitative SLAs to guarantee instantaneous edge delivery.
              </p>

              <button className="group flex items-center gap-4 text-[#121212] font-bold uppercase tracking-widest text-[10px]">
                <span className="border-b-2 border-[#121212] pb-1 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                  View Case Studies
                </span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-blue-600" />
              </button>
            </div>
          </div>

          {/* Right: Asymmetrical Floating Metrics */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
            {METRICS.map((metric, i) => (
              <div 
                key={i} 
                className={`fade-up group relative flex flex-col justify-between bg-white/60 backdrop-blur-2xl border border-white p-10 lg:p-12 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  i % 2 !== 0 ? 'md:mt-24' : 'md:mb-24' // Creates the staggered/masonry effect
                }`}
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 mb-12">
                  <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-slate-100 text-slate-400 group-hover:text-blue-600 transition-colors">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm font-medium text-slate-600">
                    {metric.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-baseline gap-1">
                  <div className="font-heading text-6xl lg:text-7xl font-black tracking-tighter text-[#121212] group-hover:text-blue-600 transition-colors duration-500">
                    {metric.value}
                  </div>
                  <div className="text-2xl font-bold text-slate-300">
                    {metric.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: PROGRAMMATIC OVERLAP            */}
      {/* ========================================== */}
      <section className="scroll-section relative z-10 py-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 fade-up relative">
            <div className="aspect-square bg-slate-100 rounded-[3rem] border border-slate-200 overflow-hidden relative flex items-center justify-center shadow-lg">
               {/* Abstract Programmatic Graphic */}
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
               <div className="relative z-10 flex gap-4 items-center">
                 <div className="h-24 w-24 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100 z-20">
                   <Database className="h-8 w-8 text-blue-600" />
                 </div>
                 <div className="w-16 h-1 bg-slate-300 rounded-full" />
                 <div className="flex flex-col gap-4">
                   <div className="h-16 w-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100">
                     <Network className="h-6 w-6 text-emerald-500" />
                   </div>
                   <div className="h-16 w-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100">
                     <Zap className="h-6 w-6 text-emerald-500" />
                   </div>
                 </div>
               </div>
            </div>
            {/* Floating context pill */}
            <div className="absolute -bottom-6 -right-6 bg-white px-8 py-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
              <div className="text-3xl font-heading font-black text-[#121212]">10M+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Dynamic Routes</div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 fade-up lg:pl-12">
            <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-[#121212] mb-6">
              Programmatic Scaling.
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              We leverage database-driven routing and edge compute to generate millions of hyper-targeted, indexable pages programmatically. 
            </p>
            <ul className="space-y-6">
              {[
                "Automated canonical clustering architectures.",
                "Stale-while-revalidate (SWR) CDN caching.",
                "Algorithmic internal link graph distribution."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: PLATFORM ARSENAL (Glass Cards)  */}
      {/* ========================================== */}
      <section className="scroll-section relative z-10 py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20 fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-[#121212] mb-6">
              The Protocol.
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Enterprise frameworks combined with real-user monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STACK_DATA.map((stack, idx) => (
              <div key={idx} className="fade-up p-10 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                   <h3 className="font-heading text-2xl font-black tracking-tight text-[#121212]">{stack.platform}</h3>
                   <div className="px-4 py-2 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                     {stack.language}
                   </div>
                 </div>

                 <div className="flex flex-col gap-4">
                   <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                     {stack.frameworks.map((fw, i) => (
                       <div key={i} className="flex items-center gap-3">
                         <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                           <Code2 className="h-3.5 w-3.5 text-blue-600" />
                         </div>
                         <span className="text-sm font-bold text-slate-700">{fw}</span>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <EnterpriseCTA />

    </main>
  );
}