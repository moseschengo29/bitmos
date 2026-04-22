"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Zap } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NAIROBI_HQ = { id: "hq", name: "Nairobi", x: 575, y: 310 };

const EDGE_NODES = [
  { id: "ny", name: "New York", x: 285, y: 195, latency: "42ms", region: "US-East" },
  { id: "sf", name: "San Francisco", x: 175, y: 205, latency: "58ms", region: "US-West" },
  { id: "lon", name: "London", x: 485, y: 165, latency: "28ms", region: "EU-West" },
  { id: "sin", name: "Singapore", x: 775, y: 315, latency: "65ms", region: "APAC" },
  { id: "syd", name: "Sydney", x: 885, y: 415, latency: "80ms", region: "OCE" },
  { id: "gru", name: "São Paulo", x: 335, y: 365, latency: "75ms", region: "LATAM" }
];

export default function TrueWorldDataFlow() {
  const container = useRef<HTMLElement>(null);
  const [activeNode, setActiveNode] = useState<typeof EDGE_NODES[0] | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      });

      tl.fromTo(
        ".context-reveal",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      tl.fromTo(
        ".world-map-layer",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" },
        "-=0.5"
      );

      tl.fromTo(
        ".node-hq",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
        "-=1"
      );

      tl.fromTo(
        ".node-edge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.5)" },
        "-=0.5"
      );

      gsap.to(".data-arc", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".map-visual-container",
          start: "top 60%",
        }
      });

      gsap.to(".data-pulse", {
        strokeDashoffset: -24,
        duration: 1.2,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: container }
  );

  return (
    // Updated container to deep navy blue with slate-800 borders
    <section ref={container} className="relative bg-[#0B1120] py-24 sm:py-32 font-sans overflow-hidden border-t border-slate-800 min-h-[90vh] flex flex-col justify-center">
      
      {/* Subtle Background Glow behind the map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          
          <h2 className="context-reveal font-heading text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Global scale. <br className="sm:hidden" />
            <span className="text-white">Local precision.</span>
          </h2>
          <p className="context-reveal text-sm text-slate-400 font-medium leading-relaxed max-w-2xl">
            Headquartered in Nairobi, our architecture routes data through a highly distributed edge network spanning six continents, ensuring absolute data integrity and sub-50ms latency worldwide.
          </p>
        </div>

        {/* --- THE REAL WORLD MAP VISUALIZATION --- */}
        <div className="map-visual-container relative w-full max-w-[1100px] mx-auto aspect-[2.2/1]">
          
          {/* 1. THE PERFECT DOTTED MASK LAYER (Updated to Dark Theme Dots) */}
          <div 
            className="world-map-layer absolute inset-0 opacity-[0.6]"
            style={{
              // Dark theme dots using slate-700
              backgroundImage: 'radial-gradient(circle, #334155 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              WebkitMaskImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")',
              WebkitMaskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}
          ></div>

          {/* 2. THE SVG DATA FLOW LAYER */}
          <svg 
            className="absolute inset-0 w-full h-full z-10 pointer-events-none" 
            viewBox="0 0 1000 500" 
            preserveAspectRatio="none"
          >
            {EDGE_NODES.map((node) => {
              const midX = (NAIROBI_HQ.x + node.x) / 2;
              const arcHeight = Math.abs(NAIROBI_HQ.x - node.x) * 0.15; 
              const midY = Math.min(NAIROBI_HQ.y, node.y) - arcHeight - 20; 
              
              const pathD = `M ${NAIROBI_HQ.x} ${NAIROBI_HQ.y} Q ${midX} ${midY} ${node.x} ${node.y}`;
              
              return (
                <g key={`flow-${node.id}`}>
                  {/* Faint Base Arc (Darkened for dark mode) */}
                  <path d={pathD} fill="none" stroke="#1e293b" strokeWidth="1.5" />
                  {/* Glowing Animated Data Stream (Vibrant Blue) */}
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="2.5" 
                    strokeDasharray="4 8" 
                    strokeDashoffset="1000" 
                    strokeLinecap="round"
                    className="data-arc data-pulse opacity-80 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" 
                  />
                </g>
              );
            })}
          </svg>

          {/* 3. HTML INTERACTIVE NODES */}
          
          {/* Edge Nodes */}
          {EDGE_NODES.map((node) => (
            <div 
              key={`node-${node.id}`}
              className="node-edge absolute z-20 flex flex-col items-center justify-center cursor-pointer group"
              style={{ left: `${(node.x / 1000) * 100}%`, top: `${(node.y / 500) * 100}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="absolute h-8 w-8 rounded-full"></div>
              {/* Node Point - Now slate-600 resting, vibrant amber on hover */}
              <div className="h-2 w-2 rounded-full bg-slate-600 ring-4 ring-[#0B1120] shadow-sm transition-all duration-300 group-hover:bg-amber-400 group-hover:ring-amber-400/30 group-hover:scale-125"></div>
              {/* Static City Label - Dark mode slate-500 */}
              <span className="absolute top-4 text-[9px] font-bold uppercase tracking-widest text-slate-500 transition-opacity duration-200 group-hover:opacity-0 whitespace-nowrap">
                {node.name}
              </span>
            </div>
          ))}

          {/* Nairobi HQ Node */}
          <div 
            className="node-hq absolute z-20 flex flex-col items-center justify-center"
            style={{ left: `${(NAIROBI_HQ.x / 1000) * 100}%`, top: `${(NAIROBI_HQ.y / 500) * 100}%`, transform: 'translate(-50%, -50%)' }}
          >
            {/* Pulsing HQ Rings */}
            <div className="absolute h-10 w-10 rounded-full bg-blue-500 animate-ping opacity-20"></div>
            <div className="relative h-3 w-3 rounded-full bg-blue-500 ring-[6px] ring-[#0B1120] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <div className="absolute h-12 w-12 rounded-full border border-blue-500/50 border-dashed animate-[spin_10s_linear_infinite]"></div>
            
            {/* HQ Label - Dark Mode frosted glass pill */}
            <span className="absolute -top-7 text-[11px] font-black uppercase tracking-widest text-blue-400 whitespace-nowrap bg-slate-900/80 border border-slate-700/50 px-2 py-0.5 rounded backdrop-blur-md">
              {NAIROBI_HQ.name} (HQ)
            </span>
          </div>

          {/* 4. FROSTED GLASS TELEMETRY TOOLTIP (Dark Mode) */}
          <div 
            className={`absolute z-30 pointer-events-none transition-all duration-300 ease-out ${activeNode ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}`}
            style={{ 
              left: activeNode ? `calc(${(activeNode.x / 1000) * 100}%)` : '50%', 
              top: activeNode ? `calc(${(activeNode.y / 500) * 100}% - 70px)` : '50%',
              transform: 'translate(-50%, -100%)'
            }}
          >
            {/* Dark glass tooltip panel */}
            <div className="w-48 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wide">{activeNode?.name}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Region</span>
                <span className="text-[10px] font-bold text-slate-300 uppercase">{activeNode?.region}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Avg Latency</span>
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                  <Zap className="h-3 w-3 text-amber-400" /> {activeNode?.latency}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}