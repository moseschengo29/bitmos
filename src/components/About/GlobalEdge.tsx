"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe2, MapPin, Zap } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// We use a 1000x500 grid to mathematically place our cities on the map.
// These coordinates are mapped to a standard Robinson/Mercator projection.
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

      // 1. Reveal Text Context
      tl.fromTo(
        ".context-reveal",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      // 2. Fade in the Dotted Map
      tl.fromTo(
        ".world-map-layer",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" },
        "-=0.5"
      );

      // 3. Pop in Nairobi (HQ)
      tl.fromTo(
        ".node-hq",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
        "-=1"
      );

      // 4. Pop in Edge Nodes
      tl.fromTo(
        ".node-edge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.5)" },
        "-=0.5"
      );

      // 5. Draw the Data Arcs across the globe
      gsap.to(".data-arc", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".map-visual-container",
          start: "top 60%",
        }
      });

      // 6. Continuous Data Flow Pulse
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
    <section ref={container} className="bg-white py-24 sm:py-32 font-sans overflow-hidden border-t border-slate-100 min-h-[90vh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <div className="context-reveal mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-100 shadow-sm">
            <Globe2 className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="context-reveal font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Global scale. <br className="sm:hidden" />
            <span className="text-slate-400">Local precision.</span>
          </h2>
          <p className="context-reveal text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
            Headquartered in Nairobi, our architecture routes data through a highly distributed edge network spanning six continents, ensuring absolute data integrity and sub-50ms latency worldwide.
          </p>
        </div>

        {/* --- THE REAL WORLD MAP VISUALIZATION --- */}
        <div className="map-visual-container relative w-full max-w-[1100px] mx-auto aspect-[2.2/1]">
          
          {/* 1. THE PERFECT DOTTED MASK LAYER */}
          {/* This uses a seamless dot grid background, masked perfectly by a real world SVG */}
          <div 
            className="world-map-layer absolute inset-0 opacity-[0.85]"
            style={{
              // The Dot Pattern
              backgroundImage: 'radial-gradient(circle, #CBD5E1 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              // The Geographically Accurate Mask
              // (Note: Replace this Wikimedia URL with '/world-map.svg' if you save the file locally in your public folder)
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
            {/* Draw Arcs from Nairobi to all Edge Nodes */}
            {EDGE_NODES.map((node) => {
              const midX = (NAIROBI_HQ.x + node.x) / 2;
              // Arch the line upwards to simulate the curvature of the earth
              const arcHeight = Math.abs(NAIROBI_HQ.x - node.x) * 0.15; 
              const midY = Math.min(NAIROBI_HQ.y, node.y) - arcHeight - 20; 
              
              const pathD = `M ${NAIROBI_HQ.x} ${NAIROBI_HQ.y} Q ${midX} ${midY} ${node.x} ${node.y}`;
              
              return (
                <g key={`flow-${node.id}`}>
                  {/* Faint Base Arc */}
                  <path d={pathD} fill="none" stroke="#F1F5F9" strokeWidth="1.5" />
                  {/* Glowing Animated Data Stream */}
                  <path 
                    d={pathD} 
                    fill="none" 
                    stroke="#3B82F6" 
                    strokeWidth="2.5" 
                    strokeDasharray="4 8" 
                    strokeDashoffset="1000" // GSAP animates this
                    strokeLinecap="round"
                    className="data-arc data-pulse opacity-70" 
                  />
                </g>
              );
            })}
          </svg>

          {/* 3. HTML INTERACTIVE NODES */}
          {/* We use HTML for the nodes instead of SVG so they scale perfectly and can trigger standard React hover states */}
          
          {/* Edge Nodes */}
          {EDGE_NODES.map((node) => (
            <div 
              key={`node-${node.id}`}
              className="node-edge absolute z-20 flex flex-col items-center justify-center cursor-pointer group"
              style={{ left: `${(node.x / 1000) * 100}%`, top: `${(node.y / 500) * 100}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Invisible Hitbox */}
              <div className="absolute h-8 w-8 rounded-full"></div>
              {/* Visual Node Point */}
              <div className="h-2 w-2 rounded-full bg-slate-400 ring-4 ring-white shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:ring-blue-100 group-hover:scale-125"></div>
              {/* Static City Label */}
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
            <div className="absolute h-10 w-10 rounded-full bg-blue-500 animate-ping opacity-20"></div>
            <div className="relative h-3 w-3 rounded-full bg-blue-600 ring-[6px] ring-white shadow-md"></div>
            <div className="absolute h-12 w-12 rounded-full border border-blue-200 border-dashed animate-[spin_10s_linear_infinite]"></div>
            
            <span className="absolute -top-6 text-[11px] font-black uppercase tracking-widest text-blue-700 whitespace-nowrap bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm">
              {NAIROBI_HQ.name} (HQ)
            </span>
          </div>

          {/* 4. FROSTED GLASS TELEMETRY TOOLTIP */}
          <div 
            className={`absolute z-30 pointer-events-none transition-all duration-300 ease-out ${activeNode ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}`}
            style={{ 
              left: activeNode ? `calc(${(activeNode.x / 1000) * 100}%)` : '50%', 
              top: activeNode ? `calc(${(activeNode.y / 500) * 100}% - 70px)` : '50%',
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="w-48 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">{activeNode?.name}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Region</span>
                <span className="text-[10px] font-bold text-slate-700 uppercase">{activeNode?.region}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Avg Latency</span>
                <span className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1">
                  <Zap className="h-3 w-3 text-amber-500" /> {activeNode?.latency}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}