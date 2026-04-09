"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Video, BrainCircuit, Shield } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function LmsCapabilities() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".feat-bento",
      { opacity: 0, y: 40, scale: 0.98 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Engineered for <span className="text-blue-500">absolute scale.</span>
          </h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            EduAnalytics is not a template. It is a custom-engineered suite of microservices designed specifically for the unique demands of modern digital education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* BENTO 1: Video Engine */}
          <div className="feat-bento md:col-span-2 relative rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between overflow-hidden group">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Video className="h-5 w-5" />
              </div>
              {/* Micro UI: Live Status */}
              <div className="flex items-center gap-2 rounded-full bg-slate-950/50 border border-slate-800 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Live Engine</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">WebRTC Video Architecture</h3>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Ultra-low latency synchronous classrooms. We bypass standard HTTP routing to establish peer-to-peer and SFU (Selective Forwarding Unit) connections, supporting 1,000+ interactive video feeds per room.
              </p>
            </div>
          </div>

          {/* BENTO 2: AI Analytics */}
          <div className="feat-bento md:col-span-1 relative rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Predictive Modeling</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Machine learning pipelines analyze student engagement metrics in real-time, automatically flagging at-risk learners before they fail assessments.
              </p>
            </div>
          </div>

          {/* BENTO 3: Async Processing */}
          <div className="feat-bento md:col-span-3 relative rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col sm:flex-row justify-between items-center gap-8 overflow-hidden group">
            <div className="flex-1">
               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Asynchronous Grading Queue</h3>
              <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
                When 50,000 students click "Submit" simultaneously, standard APIs crash. We implemented an Event-Driven Architecture using Kafka. Submissions are instantly accepted into a secure queue and processed by worker nodes, guaranteeing zero data loss.
              </p>
            </div>
            
            {/* Visualizer */}
            <div className="w-full sm:w-1/3 h-24 flex flex-col justify-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-purple-500 w-[80%]"></div>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-purple-500 w-[60%]"></div>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-purple-500 w-[40%]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}