"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { FAQSection } from "../FAQSection";


export const HOME_FAQS = [
  {
    question: "How does Bitmos differ from traditional development agencies?",
    answer: "We are a strategic technology partner, not just a coding shop. We bridge the gap between your business objectives and digital execution. Instead of delivering fragile MVP features, we engineer robust, scalable systems designed to drive long-term digital transformation and measurable ROI."
  },
  {
    question: "Do you modernize legacy software, or only build new platforms?",
    answer: "Both. Enterprise modernization is a core Bitmos capability. We systematically upgrade slow, outdated legacy systems into high-performance, modern platforms. Our careful migration strategies guarantee zero downtime, meaning your business operations continue running smoothly while we upgrade your tech."
  },
  {
    question: "Can your architectures handle sudden spikes in user traffic?",
    answer: "Absolutely. We engineer for extreme growth. Whether you are dominating the Kenyan market or scaling globally, our cloud architectures are designed with auto-scaling and multi-region fault tolerance. We ensure your platform remains fast and structurally sound, even during massive traffic surges."
  },
  {
    question: "How does Bitmos handle enterprise data security and compliance?",
    answer: "Security is built into our foundation, not added as an afterthought. We implement bank-grade encryption, Zero-Trust architectures, and strict access controls. We ensure your platforms comply with global and local data protection regulations, protecting both your business assets and your customers' trust."
  },
  {
    question: "What does the initial consulting and development process look like?",
    answer: "Every successful engagement begins with a comprehensive Technical Audit. Before writing a single line of code, our architects evaluate your business bottlenecks and existing technology. We then provide a clear, strategic blueprint and roadmap, ensuring complete transparency on timelines, costs, and deliverables."
  }
];

export const PRINCIPLES = [
  {
    id: "01",
    title: "Engineered for Reliability",
    desc: "We build highly resilient platforms designed to keep your business running 24/7, eliminating the risk of costly downtime."
  },
  {
    id: "02",
    title: "Performance Drives Growth",
    desc: "In the digital economy, speed is revenue. We optimize every millisecond to ensure flawless user experiences and maximum retention."
  },
  {
    id: "03",
    title: "Strategic Transparency",
    desc: "No hidden technical debt or confusing jargon. We provide clear project roadmaps, honest advice, and visible progress."
  },
  {
    id: "04",
    title: "Uncompromising Security",
    desc: "We protect your brand by integrating enterprise-grade security and strict data compliance into your software from day one."
  }
];


export function ManifestoSection() {
  return (
    <section className="w-full bg-white text-slate-900 border-b border-slate-200">
      <div className="flex flex-col md:flex-row-reverse w-full max-w-[1600px] mx-auto">
        <div className="w-full md:w-[40%] border-b md:border-b-0 md:border-l border-slate-200 p-8 md:p-16 lg:p-24 flex flex-col items-start justify-center relative">
          <div className="md:sticky md:top-32">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 ">
          Our Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] max-w-sm">
              The foundational laws that govern our codebase.
            </h2>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col">
          {PRINCIPLES.map((principle) => (
            <div 
              key={principle.id} 
              className="group border-b border-slate-200 last:border-b-0 relative overflow-hidden cursor-pointer bg-white hover:bg-slate-900 transition-colors duration-500 ease-out"
            >
              <div className="flex flex-col md:flex-row md:items-center p-8 md:p-12 lg:px-16 lg:py-16 relative z-10">
                
                {/* Number */}
                <div className="mb-4 md:mb-0 md:w-24 shrink-0 text-sm font-bold tracking-widest text-slate-400 group-hover:text-yellow-400 transition-colors duration-500">
                  [{principle.id}]
                </div>
                
                {/* Content */}
                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500 mb-2">
                      {principle.title}
                    </h3>
                    {/* The description stays hidden until hovered on desktop, creating a clean reveal */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                       <p className="overflow-hidden text-slate-400 text-sm md:text-base max-w-md">
                         {principle.desc}
                       </p>
                    </div>
                  </div>
                  
                  {/* Arrow that shoots to the right on hover */}
                  <div className="shrink-0 ml-8 overflow-hidden h-6 w-6 relative">
                    <ArrowRight className="absolute h-6 w-6 text-yellow-400 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                    <ArrowRight className="absolute h-6 w-6 text-slate-300 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default function InfoPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <FAQSection 
        faqs={HOME_FAQS} 
        subtitle="General FAQ"
        title="Everything you need to know about our engineering standards."
      />
      <ManifestoSection />
    </div>
  );
}