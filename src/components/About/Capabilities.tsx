"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Terminal, Shield, Zap, GitBranch } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ArchitectureGrid() {
  const container = useRef<HTMLElement>(null);

  // Simple ticking timer for the latency card to make it feel alive without CSS animations
  const [latency, setLatency] = useState(42);
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (45 - 38 + 1) + 38));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      });

      tl.fromTo(
        ".arch-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );

      // Snappy, mechanical reveal for the grid items
      tl.fromTo(
        ".arch-card",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "expo.out" 
        },
        "-=0.4"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-[#FAFAFA] py-24 sm:py-32 font-sans overflow-hidden border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="arch-header text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-blue-600"></span>
              Infrastructure Specification
            </p>
            <h2 className="arch-header font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
              Engineered for scale. <br />
              <span className="text-slate-900">Built for permanence.</span>
            </h2>
          </div>
          
          <a href="#tech-stack" className="arch-header group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors pb-2">
            View Full Stack 
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* --- THE BRUTALIST GRID (LIGHT MODE) --- */}
        {/* We use a slate-200 background with a 1px gap. Because the cards are white, this creates perfect 1px structural lines between them. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-slate-200 border border-slate-200 shadow-sm">
          
          {/* CARD 1: Distributed Cloud (Spans 8 cols) */}
          <div className="arch-card lg:col-span-8 bg-white p-8 sm:p-12 flex flex-col justify-between group">
            
            <div className="flex justify-between items-start mb-16">
              <Terminal className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Sys.01</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Distributed Architecture</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We abandon monolithic constraints. Our systems run on horizontally scalable microservices, ensuring your platform handles sudden traffic spikes with absolute stability.
                </p>
              </div>
              
              {/* Raw Terminal Graphic */}
              <div className="bg-slate-50 border border-slate-200 p-4 font-mono text-[10px] leading-relaxed text-slate-500">
                <div className="flex gap-4"><span className="text-blue-600">node_eu_west</span><span>STATUS: [ACTIVE]</span></div>
                <div className="flex gap-4"><span className="text-blue-600">node_us_east</span><span>STATUS: [ACTIVE]</span></div>
                <div className="flex gap-4"><span className="text-blue-600">node_apac_01</span><span>STATUS: [SCALING]</span></div>
                <div className="flex gap-4 text-emerald-600 mt-2"><span> LOAD_BALANCER_OPTIMIZED</span></div>
              </div>
            </div>

          </div>

          {/* CARD 2: Zero-Trust Security (Spans 4 cols) */}
          <div className="arch-card lg:col-span-4 bg-white p-8 sm:p-12 flex flex-col justify-between group">
            
            <div className="flex justify-between items-start mb-16">
              <Shield className="h-6 w-6 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Sec.02</span>
            </div>

            <div>
              {/* Hex Graphic */}
              <div className="font-mono text-xs text-slate-300 break-words mb-8 group-hover:text-slate-400 transition-colors">
                e3b0c44298fc1c149afbf4c<br/>
                8996fb92427ae41e4649b93<br/>
                <span className="text-emerald-500">4ca495991b7852b855</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Zero-Trust</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                End-to-end encryption, strict role-based access, and SOC-2 compliant protocols embedded at the codebase level.
              </p>
            </div>

          </div>

          {/* CARD 3: Edge Latency (Spans 4 cols) */}
          <div className="arch-card lg:col-span-4 bg-white p-8 sm:p-12 flex flex-col justify-between group">
            
            <div className="flex justify-between items-start mb-16">
              <Zap className="h-6 w-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Net.03</span>
            </div>

            <div>
              {/* Active Metric Graphic */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-mono font-medium text-blue-600 tracking-tighter">{latency}</span>
                <span className="text-sm font-mono text-slate-400">ms</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Edge Routing</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Database round-trips are eliminated. We serve data directly from global edge nodes, guaranteeing instant execution.
              </p>
            </div>

          </div>

          {/* CARD 4: CI/CD Pipelines (Spans 8 cols) */}
          <div className="arch-card lg:col-span-8 bg-white p-8 sm:p-12 flex flex-col justify-between group">
            
            <div className="flex justify-between items-start mb-16">
              <GitBranch className="h-6 w-6 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Dev.04</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Automated CI/CD</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Rigorous automated testing and integration pipelines ensure every push to production is safe, verified, and instantaneous.
                </p>
              </div>

              {/* Raw Code Graphic */}
              <div className="bg-slate-50 border border-slate-200 p-4 font-mono text-[10px] leading-relaxed">
                <div className="text-slate-500">$ git push origin main</div>
                <div className="text-slate-400 mt-2">Running unit_tests.sh... <span className="text-blue-600">[PASS]</span></div>
                <div className="text-slate-400">Building docker_image... <span className="text-blue-600">[PASS]</span></div>
                <div className="text-emerald-600 mt-2"> DEPLOYMENT SUCCESSFUL</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}