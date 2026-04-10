"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Database, 
  Webhook, 
  Cloud, 
  Activity, 
  ShieldAlert, 
  Cpu, 
  Server, 
  Zap, 
  TrendingDown, 
  ShieldCheck,
  ChevronRight,
  ArrowDownRight
} from "lucide-react";

gsap.registerPlugin(useGSAP);

// --- CONFIGURATION & COORDINATES ---
const HEIGHT = 500;
const CENTER_Y = HEIGHT / 2;

// Technological Input Sources
const INPUTS = [
  { id: "legacy_db", label: "LEGACY DATABASES", y: 50, icon: Database },
  { id: "apis", label: "THIRD-PARTY APIS", y: 130, icon: Webhook },
  { id: "cloud", label: "CLOUD TELEMETRY", y: 210, icon: Cloud },
  { id: "events", label: "USER EVENT STREAMS", y: 290, icon: Activity },
  { id: "security", label: "SECURITY LOGS", y: 370, icon: ShieldAlert },
  { id: "iot", label: "IOT SENSOR DATA", y: 450, icon: Cpu },
];

// Enterprise Technical Outcomes
const OUTCOMES = [
  { id: "uptime", label: "SYSTEM UPTIME", y: 100, icon: Server },
  { id: "speed", label: "PROCESSING SPEED", y: 200, icon: Zap },
  { id: "cost", label: "COST EFFICIENCY", y: 300, icon: TrendingDown },
  { id: "threats", label: "THREAT MITIGATION", y: 400, icon: ShieldCheck },
];

export default function TechArchitectureFlow() {
  const container = useRef<HTMLElement>(null);
  
  const [activeInputs, setActiveInputs] = useState<string[]>(["legacy_db", "cloud", "apis"]);
  const [metrics, setMetrics] = useState({ uptime: 0, speed: 0, cost: 0, threats: 0 });
  const [prevMetrics, setPrevMetrics] = useState({ uptime: 0, speed: 0, cost: 0, threats: 0 });

  // Toggle Logic
  const toggleInput = (id: string) => {
    setActiveInputs((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  // The Processing Logic
  useEffect(() => {
    setPrevMetrics(metrics);
    let upt = 0, spd = 0, cst = 0, thr = 0;

    if (activeInputs.includes("legacy_db")) { spd += 12; cst += 8; }
    if (activeInputs.includes("apis")) { spd += 15; cst += 5; }
    if (activeInputs.includes("cloud")) { upt += 45; cst += 12; }
    if (activeInputs.includes("events")) { spd += 18; thr += 5; }
    if (activeInputs.includes("security")) { thr += 65; upt += 10; }
    if (activeInputs.includes("iot")) { spd += 10; thr += 8; }

    setMetrics({ uptime: upt, speed: spd, cost: cst, threats: thr });
  }, [activeInputs]);

  // GSAP Animations
  useGSAP(() => {
    Object.keys(metrics).forEach((key) => {
      const metricKey = key as keyof typeof metrics;
      const prevVal = prevMetrics[metricKey];
      const newVal = metrics[metricKey];

      if (prevVal !== newVal) {
        const proxy = { val: prevVal };
        gsap.to(proxy, {
          val: newVal,
          duration: 1.2,
          ease: "power3.out",
          onUpdate: () => {
            document.querySelectorAll(`.metric-value-${key}`).forEach(el => {
              el.innerHTML = `+${Math.round(proxy.val)}%`;
            });
          },
        });
      }
    });

    gsap.to(".flowing-bits", {
      strokeDashoffset: -36, 
      duration: 1,
      ease: "none",
      repeat: -1
    });

    // 3. Animate Vertical CSS "Bits" (Mobile)
    gsap.to(".flowing-bits-vertical", {
      y: 40, // Distance to drop
      opacity: 0,
      duration: 0.8,
      ease: "none",
      repeat: -1
    });

    // 4. Pulse the center engine
    gsap.fromTo(".center-engine-card", 
      { scale: 0.97, boxShadow: "0px 0px 0px 0px rgba(37, 99, 235, 0)" }, 
      { scale: 1, boxShadow: "0px 20px 40px -10px rgba(37, 99, 235, 0.15)", duration: 0.6, ease: "back.out(1.5)" }
    );

  }, { dependencies: [metrics], scope: container });

  return (
    <section ref={container} className="w-full bg-[#FAFAFA] py-16 md:py-20 font-sans text-slate-900 px-4 sm:px-8 overflow-hidden">
      
      <div className="flex-shrink-0 mb-10 md:mb-12 flex flex-col items-center text-center">
        <div className="mb-4 md:mb-6 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
          <ArrowDownRight className="h-4 w-4 md:h-5 md:w-5 text-blue-600" strokeWidth={2} />
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] md:leading-[1.05] max-w-3xl">
          Transforming <span className="text-slate-400">fragmented inputs</span> into <span className="font-serif italic font-medium tracking-tight text-slate-500">measurable</span> outcomes.
        </h2>
      </div>


      <div className="flex flex-col lg:hidden w-full max-w-xl mx-auto items-center">
        
        {/* 1. Mobile Inputs Grid */}
        <div className="grid grid-cols-2 gap-3 w-full z-10">
          {INPUTS.map((input) => {
            const isActive = activeInputs.includes(input.id);
            const Icon = input.icon;
            return (
              <button
                key={`mobile-in-${input.id}`}
                onClick={() => toggleInput(input.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 text-left ${isActive ? "bg-white border-blue-500 shadow-md shadow-blue-500/10" : "bg-white border-slate-200"}`}
              >
                <div className={`flex shrink-0 h-8 w-8 items-center justify-center rounded-lg transition-colors ${isActive ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className={`text-[9px] font-bold tracking-widest uppercase ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                  {input.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. Mobile Connector Down */}
        <div className="h-10 w-px bg-slate-200 relative my-2">
          {activeInputs.length > 0 && (
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-blue-600 rounded-full flowing-bits-vertical" />
          )}
        </div>

        {/* 3. Mobile Processing Core */}
        <div className="center-engine-card flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl relative z-10">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
            <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-inner relative">
              <Cpu className="h-6 w-6" />
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-500 animate-ping opacity-75"></div>
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">Bitmos Processing Core</h4>
              <p className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE // {activeInputs.length} STREAMS
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 rounded-xl bg-slate-50 border border-slate-100 p-3 font-mono text-[9px] text-slate-600">
             {activeInputs.length > 0 ? (
                <>
                  <p className="text-slate-500 truncate">{`>`} Ingesting unnormalized payloads...</p>
                  <p className="text-emerald-600 truncate">{`>`} Protocols initialized successfully.</p>
                </>
              ) : (
                <p className="text-slate-400">{`>`} Awaiting data stream connection...</p>
              )}
          </div>
        </div>

        <div className="h-10 w-px bg-slate-200 relative my-2">
          {activeInputs.length > 0 && (
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-blue-600 rounded-full flowing-bits-vertical" />
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full z-10">
          {OUTCOMES.map((outcome) => {
            const val = metrics[outcome.id as keyof typeof metrics];
            const isActive = val > 0;
            const Icon = outcome.icon;
            
            return (
              <div
                key={`mobile-out-${outcome.id}`}
                className={`flex w-full items-center justify-between rounded-xl border-2 bg-white p-4 transition-all duration-500 ${isActive ? "border-blue-500 shadow-md shadow-blue-500/10" : "border-slate-100"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex shrink-0 h-8 w-8 items-center justify-center rounded-lg transition-colors ${isActive ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400"}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-700">
                    {outcome.label}
                  </span>
                </div>
                
                <span className={`metric-value-${outcome.id} font-mono text-lg font-bold transition-colors duration-300 ${isActive ? "text-emerald-500" : "text-slate-300"}`}>
                  +{val}%
                </span>
              </div>
            );
          })}
        </div>

      </div>

    
      <div className="hidden lg:flex mx-auto max-w-[1300px] items-center justify-center pb-10">
        <div className="flex w-full items-center px-4">
          
          {/* 1. DESKTOP INPUTS */}
          <div className="relative w-64 shrink-0 z-20" style={{ height: HEIGHT }}>
            {INPUTS.map((input) => {
              const isActive = activeInputs.includes(input.id);
              const Icon = input.icon;
              return (
                <button
                  key={`desk-in-${input.id}`}
                  onClick={() => toggleInput(input.id)}
                  className="absolute left-0 flex items-center gap-3 transition-transform duration-300 hover:translate-x-2"
                  style={{ top: input.y, transform: "translateY(-50%)" }}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300 ${isActive ? "bg-blue-600 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-white border-slate-200"}`}>
                    <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  </div>
                  <span className={`text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                    {input.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 2. SVG LINES IN */}
          <div className="relative w-32 shrink-0 z-10" style={{ height: HEIGHT }}>
            <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 100 ${HEIGHT}`} preserveAspectRatio="none">
              {INPUTS.map((input) => {
                const isActive = activeInputs.includes(input.id);
                const pathD = `M 0 ${input.y} C 50 ${input.y}, 50 ${CENTER_Y}, 100 ${CENTER_Y}`;
                return (
                  <g key={`path-in-${input.id}`}>
                    <path d={pathD} fill="none" stroke="#F1F5F9" strokeWidth="1.5" />
                    <path 
                      d={pathD} fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 12" 
                      className="flowing-bits transition-opacity duration-300" style={{ opacity: isActive ? 1 : 0 }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 3. CORE PROCESSING */}
          <div className="relative w-[400px] shrink-0 flex flex-col items-center justify-center z-30" style={{ height: HEIGHT }}>
            <div className="center-engine-card flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-inner">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Bitmos Processing Core</h4>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ACTIVE // {activeInputs.length} STREAMS
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-xl bg-slate-50 border border-slate-100 p-4 font-mono text-[10px] text-slate-600">
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-3 w-3 text-blue-500 shrink-0 mt-0.5" />
                  <p>Ingesting unnormalized data payloads across multiple end-points...</p>
                </div>
                {activeInputs.length > 0 ? (
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-3 w-3 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-emerald-700">Payload normalized. Edge-caching protocols initialized successfully.</p>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <span className="h-3 w-3 text-slate-400 shrink-0 mt-0.5 text-center">_</span>
                    <p className="text-slate-400">Awaiting data stream connection...</p>
                  </div>
                )}
              </div>
            </div>
            {/* Center Node Pulse */}
            <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-600">
               <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-50"></div>
            </div>
          </div>

          {/* 4. SVG LINES OUT */}
          <div className="relative w-32 shrink-0 z-10" style={{ height: HEIGHT }}>
            <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 100 ${HEIGHT}`} preserveAspectRatio="none">
              {OUTCOMES.map((outcome) => {
                const isActive = metrics[outcome.id as keyof typeof metrics] > 0;
                const pathD = `M 0 ${CENTER_Y} C 50 ${CENTER_Y}, 50 ${outcome.y}, 100 ${outcome.y}`;
                return (
                  <g key={`path-out-${outcome.id}`}>
                    <path d={pathD} fill="none" stroke="#F1F5F9" strokeWidth="1.5" />
                    <path 
                      d={pathD} fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 12" 
                      className="flowing-bits transition-opacity duration-300" style={{ opacity: isActive ? 1 : 0 }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 5. DESKTOP OUTCOMES */}
          <div className="relative w-[280px] shrink-0 z-20" style={{ height: HEIGHT }}>
            {OUTCOMES.map((outcome) => {
              const val = metrics[outcome.id as keyof typeof metrics];
              const isActive = val > 0;
              const Icon = outcome.icon;
              
              return (
                <div
                  key={`desk-out-${outcome.id}`}
                  className={`absolute right-0 flex w-full items-center justify-between rounded-2xl border-2 bg-white px-5 py-4 transition-all duration-500 ${isActive ? "border-blue-500 shadow-lg shadow-blue-500/10" : "border-slate-100"}`}
                  style={{ top: outcome.y, transform: "translateY(-50%)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex shrink-0 h-8 w-8 items-center justify-center rounded-lg transition-colors ${isActive ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400"}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-slate-700">
                      {outcome.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <span className={`metric-value-${outcome.id} font-mono text-base font-bold transition-colors duration-300 ${isActive ? "text-emerald-500" : "text-slate-300"}`}>
                      +{val}%
                    </span>
                    {isActive && (
                      <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}