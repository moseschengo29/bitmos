"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertCircle, Activity, ServerCrash } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function LmsProblemContext() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".context-fade");
    elements.forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#FAFAFA] py-24 sm:py-32 font-sans border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Sticky Editorial Statement */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <p className="context-fade text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                The Infrastructure Bottleneck
              </p>
              <h2 className="context-fade font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                Education requires <br/>
                <span className="text-slate-400">real-time sync.</span>
              </h2>
              <p className="context-fade text-base text-slate-500 font-medium leading-relaxed">
                When 10,000 students attempt to submit an exam or join a live lecture simultaneously, traditional monolithic architectures fail. We had to rethink the data pipeline from the ground up.
              </p>
            </div>
          </div>

          {/* Right: The Breakdown */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:pt-16">
            
            <div className="context-fade flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 border border-red-100">
                <ServerCrash className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Monolithic Fragility</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Legacy systems bundle video streaming, grading, and user sessions into a single server instance. One traffic spike causes a cascading failure across the entire platform.</p>
              </div>
            </div>

            <div className="context-fade flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500 border border-amber-100">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Synchronous Database Locks</h3>
                <p className="text-sm text-slate-500 leading-relaxed">During mass assessments, database rows become locked, leading to timeout errors for students trying to save their work. Data loss in this context is unacceptable.</p>
              </div>
            </div>

            <div className="context-fade flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Bitmos Resolution</h3>
                <p className="text-sm text-slate-500 leading-relaxed">We decoupled the architecture. Video is handled at the edge, submissions are queued asynchronously via Kafka, and read-heavy workloads are cached aggressively using Redis.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}