"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function LmsCTA() {
  return (
    <section className="bg-white py-32 font-sans border-t border-slate-100 relative overflow-hidden">
      
      {/* Soft Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Ready to re-engineer your <br className="hidden sm:block" />
          <span className="text-blue-600">learning infrastructure?</span>
        </h2>
        
        <p className="text-lg text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
          Whether you need a custom Learner Management System from scratch or need to salvage a failing legacy platform, our architects are ready.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/contact-us" 
            className="group flex h-14 items-center gap-3 rounded-xl bg-blue-600 px-8 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
          >
            Schedule Technical Review
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="/solutions" 
            className="flex h-14 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 px-8 font-bold text-slate-700 transition-all hover:bg-slate-100 active:scale-95"
          >
            View More Solutions
          </a>
        </div>
        
      </div>
    </section>
  );
}