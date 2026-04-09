"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowDownRight, 
  Database, 
  BarChart3, 
  Network, 
  ArrowRight,
  Activity,
  Server,
  Workflow,
  LineChart,
  Zap,
  Search,
  Bell,
  ChevronDown,
  TrendingUp
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// 1. DATA HERO SECTION
// ==========================================
function DataHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(".hero-pill", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
      .fromTo(".hero-word", { opacity: 0, y: 40, rotateX: -20 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.1 }, "-=0.8")
      .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.8");
  }, { scope: container });

  return (
    <section ref={container} className="relative bg-white pt-32 sm:pt-48 pb-24 font-sans overflow-hidden border-b border-slate-200 min-h-[85vh] flex flex-col justify-center">
      
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="hero-pill mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Data Engineering & Analytics
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-[1.05] mb-8 flex flex-wrap gap-x-4 gap-y-2 perspective-1000">
            <span className="hero-word overflow-hidden">From</span>
            <span className="hero-word overflow-hidden text-slate-400">raw</span>
            <span className="hero-word overflow-hidden">telemetry</span>
            <span className="hero-word overflow-hidden">to</span>
            <span className="hero-word overflow-hidden font-serif italic font-medium text-slate-500 pr-2">absolute</span>
            <span className="hero-word overflow-hidden text-blue-600">precision.</span>
          </h1>

          <p className="hero-desc text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12">
            Dashboards are useless without data integrity. We engineer robust, high-velocity data pipelines that transform fragmented silos into real-time, actionable intelligence.
          </p>

          <div className="hero-desc flex items-center gap-4">
            <Link href="#architecture" className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95">
              Explore the Architecture <ArrowDownRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. THE REALITY CHECK (Problem Context)
// ==========================================
function DataContext() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".context-fade", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 75%" } }
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#FAFAFA] py-24 sm:py-32 font-sans border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ArrowDownRight className="context-fade h-8 w-8 text-blue-600 mb-8" strokeWidth={1.5} />
            <h2 className="context-fade font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              The <span className="text-slate-400">Data Swamp</span> <br />is costing you.
            </h2>
            <p className="context-fade text-lg text-slate-500 font-medium leading-relaxed">
              Most enterprises don't have a lack of data; they have an excess of noise. When data is siloed across CRMs, legacy databases, and flat files, decision velocity drops to zero.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {[
              { title: "Brittle ETL Pipelines", desc: "Nightly batch jobs that fail silently, leaving executives staring at inaccurate, 24-hour-old dashboards during crucial morning meetings." },
              { title: "Fragmented Truth", desc: "Marketing looks at Salesforce, Finance looks at the ERP, and Engineering looks at the database. No one agrees on the core metrics." },
              { title: "Unscalable Query Costs", desc: "Running heavy analytical queries directly against production databases, causing system lag and massive cloud billing spikes." }
            ].map((item, i) => (
              <div key={i} className="context-fade p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-400 font-mono text-sm font-bold">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// THE TELEMETRY DASHBOARD (Light Theme)
// ==========================================
export function DataDashboardShowcase() {
    const container = useRef<HTMLElement>(null);
    const chartLineRef = useRef<SVGPathElement>(null);
  
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      });
  
      // 1. Reveal Section Header
      tl.fromTo(".ui-header-reveal", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }
      );
  
      // 2. Dashboard Window Scales In
      tl.fromTo(".ui-dashboard-window",
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "expo.out" },
        "-=0.6"
      );
  
      // 3. Stagger in Top Metrics
      tl.fromTo(".ui-metric-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.8"
      );
  
      // 4. Draw the SVG Chart Line
      if (chartLineRef.current) {
        const length = chartLineRef.current.getTotalLength();
        gsap.set(chartLineRef.current, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(chartLineRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
        }, "-=0.4");
      }
  
      // 5. Fade in the Chart Area and Table Rows
      tl.fromTo(".ui-chart-fade", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5");
      tl.fromTo(".ui-table-row",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=1.5"
      );
  
    }, { scope: container });
  
    return (
      <section ref={container} className="bg-[#FAFAFA] py-24 sm:py-32 font-sans overflow-hidden border-b border-slate-200 relative">
        
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
  
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* --- HEADER --- */}
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <p className="ui-header-reveal text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Business Intelligence</p>
            <h2 className="ui-header-reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] max-w-3xl mb-6">
              Visualizing the <span className="text-slate-400">truth.</span>
            </h2>
            <p className="ui-header-reveal text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
              We build custom, pixel-perfect BI layers on top of your data warehouses. Whether you are tracking global market trends, operational latency, or complex financial models, your data becomes immediately actionable.
            </p>
          </div>
  
          {/* --- THE DASHBOARD UI --- */}
          <div className="ui-dashboard-window w-full max-w-5xl mx-auto rounded-[2rem] bg-white border border-slate-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
            
            {/* Top App Bar */}
            <div className="h-14 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between px-6">
              {/* Mac Dots */}
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-slate-200 border border-slate-300"></div>
                <div className="h-3 w-3 rounded-full bg-slate-200 border border-slate-300"></div>
                <div className="h-3 w-3 rounded-full bg-slate-200 border border-slate-300"></div>
              </div>
              
              {/* Mock Search */}
              <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-lg px-3 py-1.5 w-64">
                <Search className="h-3 w-3 text-slate-400" />
                <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
              </div>
  
              {/* Mock Profile/Nav */}
              <div className="flex items-center gap-4 text-slate-500">
                <Bell className="h-4 w-4" />
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-sm"></div>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>
  
            {/* Main Dashboard Content */}
            <div className="p-6 sm:p-8 flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-50/30">
              
              {/* TOP METRICS (3 Cards) */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div className="ui-metric-card p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600"><Activity className="h-4 w-4" /></div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +14.2%</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Global Market Volume</p>
                    <p className="font-heading text-3xl font-bold text-slate-900 tracking-tight">2.4M<span className="text-slate-400 text-lg">/s</span></p>
                  </div>
                </div>
  
                <div className="ui-metric-card p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600"><BarChart3 className="h-4 w-4" /></div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +9.8%</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Prediction Accuracy</p>
                    <p className="font-heading text-3xl font-bold text-slate-900 tracking-tight">99.4<span className="text-slate-400 text-lg">%</span></p>
                  </div>
                </div>
  
                <div className="ui-metric-card p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-8 w-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600"><Zap className="h-4 w-4" /></div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">-12ms</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Algorithm Latency</p>
                    <p className="font-heading text-3xl font-bold text-slate-900 tracking-tight">24<span className="text-slate-400 text-lg">ms</span></p>
                  </div>
                </div>
  
              </div>
  
              {/* MAIN CHART AREA */}
              <div className="lg:col-span-2 ui-chart-fade p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col relative overflow-hidden min-h-[300px]">
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <p className="text-sm font-bold text-slate-900">Trend Analysis Engine</p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-bold text-slate-500">1D</div>
                    <div className="px-3 py-1 rounded bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-600/20">1W</div>
                    <div className="px-3 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-bold text-slate-500">1M</div>
                  </div>
                </div>
  
                {/* The SVG Line Chart */}
                <div className="absolute left-0 right-0 bottom-0 h-[250px] pointer-events-none">
                  <svg viewBox="0 0 1000 250" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-grad-light" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid Lines */}
                    <line x1="0" y1="50" x2="1000" y2="50" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="125" x2="1000" y2="125" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="200" x2="1000" y2="200" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
  
                    {/* Gradient Fill */}
                    <path 
                      d="M0,200 C150,180 250,80 400,120 C550,160 650,40 800,90 C900,120 950,30 1000,30 L1000,250 L0,250 Z" 
                      fill="url(#chart-grad-light)" 
                    />
                    
                    {/* The Animated Stroke Line */}
                    <path 
                      ref={chartLineRef}
                      d="M0,200 C150,180 250,80 400,120 C550,160 650,40 800,90 C900,120 950,30 1000,30" 
                      fill="none" 
                      stroke="#3B82F6" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="drop-shadow-[0_4px_6px_rgba(59,130,246,0.3)]"
                    />
                    
                    {/* Data Points */}
                    <circle cx="400" cy="120" r="4" fill="#ffffff" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="800" cy="90" r="4" fill="#ffffff" stroke="#3B82F6" strokeWidth="2" />
                    <circle cx="1000" cy="30" r="6" fill="#3B82F6" className="animate-pulse shadow-md" />
                  </svg>
                </div>
  
              </div>
  
              {/* LIVE DATA TABLE */}
              <div className="lg:col-span-1 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
                <p className="text-sm font-bold text-slate-900 mb-6">Real-Time Event Log</p>
                
                <div className="flex flex-col gap-4 flex-1">
                  {[
                    { id: "EVT-9921", type: "Ingestion", status: "Active", color: "text-emerald-700 bg-emerald-50 border border-emerald-100" },
                    { id: "EVT-9920", type: "Algorithm Sync", status: "Active", color: "text-emerald-700 bg-emerald-50 border border-emerald-100" },
                    { id: "EVT-9919", type: "ETL Pipeline", status: "Pending", color: "text-amber-700 bg-amber-50 border border-amber-100" },
                    { id: "EVT-9918", type: "Model Training", status: "Completed", color: "text-blue-700 bg-blue-50 border border-blue-100" },
                    { id: "EVT-9917", type: "Vector Upsert", status: "Completed", color: "text-blue-700 bg-blue-50 border border-blue-100" },
                  ].map((row, i) => (
                    <div key={i} className="ui-table-row flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <div>
                        <p className="text-xs font-mono font-bold text-slate-800 mb-0.5">{row.id}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{row.type}</p>
                      </div>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${row.color}`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
  
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export function DataPipelineVisualizer() {
    const container = useRef<HTMLElement>(null);
  
    useGSAP(() => {
      // Reveal animation
      gsap.fromTo(".vis-element",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 60%" } }
      );
  
      // Continuous Flow Animation
      gsap.to(".flow-line", {
        strokeDashoffset: -40,
        duration: 1,
        ease: "none",
        repeat: -1,
      });
      
      // Server Pulse
      gsap.to(".server-pulse", {
        opacity: 0.8, scale: 1.05, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    }, { scope: container });
  
    return (
      <section ref={container} id="architecture" className="bg-white py-24 sm:py-32 font-sans overflow-hidden border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="vis-element text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Architecture</p>
            <h2 className="vis-element font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
              The Modern <span className="text-blue-600">Data Stack.</span>
            </h2>
          </div>
  
          {/* Abstract Tech Diagram Container */}
          <div className="vis-element relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] bg-slate-50/80 border border-slate-200 rounded-[2rem] overflow-hidden shadow-xl flex items-center justify-center">
            
            {/* Animated SVG Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 500" preserveAspectRatio="none">
              {/* Source to Ingestion */}
              <path d="M 150 150 C 300 150, 250 250, 400 250" fill="none" stroke="#E2E8F0" strokeWidth="2" />
              <path d="M 150 150 C 300 150, 250 250, 400 250" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" className="flow-line opacity-60" />
              
              <path d="M 150 350 C 300 350, 250 250, 400 250" fill="none" stroke="#E2E8F0" strokeWidth="2" />
              <path d="M 150 350 C 300 350, 250 250, 400 250" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 8" className="flow-line opacity-60" />
  
              {/* Ingestion to Warehouse */}
              <path d="M 450 250 L 600 250" fill="none" stroke="#E2E8F0" strokeWidth="3" />
              <path d="M 450 250 L 600 250" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="10 10" className="flow-line opacity-80" />
  
              {/* Warehouse to BI */}
              <path d="M 650 250 C 750 250, 800 150, 850 150" fill="none" stroke="#E2E8F0" strokeWidth="2" />
              <path d="M 650 250 C 750 250, 800 150, 850 150" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="8 8" className="flow-line opacity-60" />
              
              <path d="M 650 250 C 750 250, 800 350, 850 350" fill="none" stroke="#E2E8F0" strokeWidth="2" />
              <path d="M 650 250 C 750 250, 800 350, 850 350" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 8" className="flow-line opacity-60" />
            </svg>
  
            {/* --- NODES --- */}
            
            {/* Sources (Left) */}
            <div className="absolute left-[10%] top-[20%] flex flex-col items-center z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-500"><Database className="h-5 w-5" /></div>
              <p className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Prod DB</p>
            </div>
            <div className="absolute left-[10%] bottom-[20%] flex flex-col items-center z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-500"><Network className="h-5 w-5" /></div>
              <p className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">3rd Party APIs</p>
            </div>
  
            {/* Ingestion/Streaming (Middle-Left) */}
            <div className="absolute left-[40%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10 -translate-x-1/2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 shadow-md">
                <Activity className="h-6 w-6" />
              </div>
              <p className="mt-3 text-[10px] font-bold text-blue-600 uppercase tracking-widest text-center">Event Stream<br/>(Kafka)</p>
            </div>
  
            {/* Data Warehouse (Middle-Right) */}
            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 flex flex-col items-center z-20 -translate-x-1/2">
              <div className="absolute inset-0 bg-emerald-300/30 blur-[25px] rounded-full server-pulse pointer-events-none"></div>
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-lg">
                <Server className="h-8 w-8" />
              </div>
              <p className="mt-3 text-xs font-bold text-emerald-600 uppercase tracking-widest text-center">Cloud Data<br/>Warehouse</p>
            </div>
  
            {/* BI / Analytics (Right) */}
            <div className="absolute right-[10%] top-[20%] flex flex-col items-center z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 border border-purple-200 shadow-sm text-purple-600"><BarChart3 className="h-5 w-5" /></div>
              <p className="mt-2 text-[10px] font-bold text-purple-600 uppercase tracking-widest">BI Dashboards</p>
            </div>
            <div className="absolute right-[10%] bottom-[20%] flex flex-col items-center z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-200 shadow-sm text-amber-600"><LineChart className="h-5 w-5" /></div>
              <p className="mt-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest">Predictive ML</p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }


function DataCapabilities() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".bento-card", 
      { opacity: 0, y: 40, scale: 0.98 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1, ease: "expo.out", scrollTrigger: { trigger: container.current, start: "top 70%" } }
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-slate-50 py-24 sm:py-32 font-sans overflow-hidden border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Engineering the <span className="text-blue-600">Analytics Core.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Real-time Streaming (Wide) */}
          <div className="bento-card md:col-span-2 relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                <Zap className="h-5 w-5" />
              </div>
              {/* Micro UI: Live Chart */}
              <div className="flex items-end gap-1 h-10">
                 {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                   <div key={i} className="w-2 rounded-t-sm bg-blue-200 group-hover:bg-blue-500 transition-colors duration-300" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}></div>
                 ))}
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Real-Time Event Streaming</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">
                We implement Apache Kafka and Kinesis to process millions of events per second. Your dashboards update in milliseconds, not hours.
              </p>
            </div>
          </div>

          {/* Card 2: Warehousing (Square) */}
          <div className="bento-card md:col-span-1 relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600">
              <Database className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Cloud Warehousing</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Seamless migration to Snowflake or BigQuery. We decouple storage from compute to drastically reduce your query costs.
              </p>
            </div>
          </div>

          {/* Card 3: Orchestration (Square) */}
          <div className="bento-card md:col-span-1 relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 border border-purple-100 text-purple-600">
              <Workflow className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">dbt Orchestration</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                We treat data transformations like software. Full version control, automated testing, and CI/CD for your data models.
              </p>
            </div>
          </div>

          {/* Card 4: Predictive (Wide) */}
          <div className="bento-card md:col-span-2 relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-50"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
                <LineChart className="h-5 w-5" />
              </div>
              <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                Advanced ML
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Predictive Analytics & AI</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-md">
                Looking backward is no longer enough. We build machine learning models directly into your warehouse to forecast trends, detect anomalies, and predict customer churn.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function DataAnalyticsPage() {
  return (
    <main className="w-full">
      <DataHero />
      <DataContext />
      <DataDashboardShowcase />
      <DataPipelineVisualizer />
      <DataCapabilities />
    </main>
  );
}