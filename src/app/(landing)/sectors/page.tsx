"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Database, ShieldCheck, Zap, Server, Globe2, ChevronRight } from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SECTORS = [
  {
    id: "01",
    name: "Financial Services",
    shortName: "Finance",
    desc: "Low-latency trading engines, mathematically proven immutable ledgers, and secure environments that natively enforce strict PCI and SOC2 compliance.",
    tech: ["KAFKA", "KDB+", "MTLS", "RUST", "POSTGRESQL"],
    metric: "<10MS LATENCY",
    icon: Database,
    status: "READY"
  },
  {
    id: "02",
    name: "Healthcare Tech",
    shortName: "Healthcare",
    desc: "Zero-trust data pipelines for real-time patient telemetry, ensuring total HIPAA compliance while maintaining interoperability between fragmented legacy systems.",
    tech: ["FHIR API", "HL7", "VPC", "AWS HEALTH"],
    metric: "100% HIPAA",
    icon: ShieldCheck,
    status: "COMPLIANT"
  },
  {
    id: "03",
    name: "Global E-Commerce",
    shortName: "E-Commerce",
    desc: "High-concurrency event architecture designed to handle massive, unpredictable traffic spikes without latency or database deadlocks.",
    tech: ["REDIS", "NEXT.JS", "GRAPHQL", "STRIPE", "EDGE"],
    metric: "100K+ TPS",
    icon: Globe2,
    status: "SCALABLE"
  },
  {
    id: "04",
    name: "Enterprise SaaS",
    shortName: "SaaS",
    desc: "Multi-tenant, cloud-native architectures optimized for extreme horizontal scaling, zero-downtime deployments, and granular RBAC.",
    tech: ["KUBERNETES", "DOCKER", "TERRAFORM", "GO", "GRPC"],
    metric: "99.99% UPTIME",
    icon: Server,
    status: "ACTIVE"
  },
  {
    id: "05",
    name: "Energy & Utilities",
    shortName: "Energy",
    desc: "High-throughput time-series databases to monitor smart-grid IoT sensors, enabling predictive maintenance and automated load balancing.",
    tech: ["TIMESCALEDB", "PYTHON", "MQTT", "FLINK"],
    metric: "PETERBYTE SCALE",
    icon: Zap,
    status: "MONITORED"
  }
];

export default function SectorsPage() {
  const container = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(".hero-line", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out", delay: 0.1 }
    );

    gsap.fromTo(".sector-row", 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.08, ease: "power2.out", delay: 0.3 }
    );
  }, { scope: container });

  const activeData = SECTORS[activeIndex];
  const ActiveIcon = activeData.icon;

  return (
    <main ref={container} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white border-t border-slate-200">
      
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 pt-32 md:pt-40">
        
        <div className="mb-24 md:mb-32 max-w-5xl">
          <h1 className="hero-line text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.85] text-slate-900">
            Engineering for <br />
            <span className="text-slate-900 italic">impact.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row border-t border-slate-200">
          
          <div className="w-full lg:w-[55%] border-r border-slate-200">
            {SECTORS.map((sector, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={sector.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="sector-row group border-b border-slate-200 cursor-pointer relative overflow-hidden bg-white"
                >
                  <div className="relative z-10 py-10 md:py-14 px-4 lg:px-8 flex items-center justify-between transition-all duration-500">
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className={`text-xs font-mono font-bold transition-colors duration-500 ${isActive ? 'text-blue-600' : 'text-slate-300 group-hover:text-slate-400'}`}>
                        {sector.id}
                      </span>
                      <h2 className={`text-4xl md:text-6xl font-bold tracking-tighter transition-all duration-500 ${isActive ? 'text-slate-900 translate-x-4' : 'text-slate-400 group-hover:text-slate-600 group-hover:translate-x-2'}`}>
                        {sector.shortName}
                      </h2>
                    </div>
                    
                    <ChevronRight className={`h-6 w-6 transition-all duration-500 ${isActive ? 'text-blue-600 translate-x-0 opacity-100' : 'text-slate-200 -translate-x-4 opacity-0'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Technical Data Sheet (Cleaner HUD) */}
          <div className="w-full lg:w-[45%] bg-[#FDFDFD] hidden lg:block">
            <div className="sticky top-0 h-screen flex flex-col p-12 lg:p-16">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Phase & Status Bar */}
                  <div className="flex justify-between items-center mb-16 border-b border-slate-200 pb-8">
                    <div className="h-14 w-14 bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm">
                       <ActiveIcon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                       <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</span>
                       <span className="block text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm">{activeData.status}</span>
                    </div>
                  </div>

                  {/* Specification List */}
                  <div className="space-y-12 mb-auto">
                    {/* 01. Definition */}
                    <div className="grid grid-cols-4 gap-4">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Abstract</span>
                      <p className="col-span-3 text-base text-slate-600 font-medium leading-relaxed">
                        {activeData.desc}
                      </p>
                    </div>

                    {/* 02. Performance */}
                    <div className="grid grid-cols-4 gap-4">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Output</span>
                      <p className="col-span-3 text-2xl font-black tracking-tighter text-slate-900">
                        {activeData.metric}
                      </p>
                    </div>

                    {/* 03. Stack */}
                    <div className="grid grid-cols-4 gap-4">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Stack</span>
                      <div className="col-span-3 flex flex-wrap gap-2">
                        {activeData.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 border border-slate-200 bg-white text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-16 pt-8 border-t border-slate-200">
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group">
                      View Domain Case Study
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>

      <section className="bg-[#0B1120] border-t border-slate-800 py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Sticky Context */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-6 block">
                Engineering Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-[1.1] mb-8">
                Different sectors. <br />
                <span className="text-white">Same physics.</span>
              </h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                While business logic varies by vertical, the requirements for high-availability, 
                deterministic scaling, and zero-trust security are universal. We apply 
                battle-tested architectural patterns across every domain we enter.
              </p>
            </div>
          </div>

          {/* Vertical Features List */}
          {/* Changed border to slate-800 to match the dark theme */}
          <div className="lg:w-2/3 border-l border-slate-800 pl-8 lg:pl-16 space-y-20">
            
            {/* Feature 01 */}
            <div className="group cursor-default">
              <span className="block text-[10px] font-mono font-bold text-yellow-400 mb-4 tracking-widest">
                [ STANDARDS_01 ]
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-gray-300 transition-colors duration-300">
                Deterministic Data Integrity
              </h3>
              <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                Whether it is a financial transaction or a patient health record, data loss is not an option. 
                We utilize write-ahead logging and cryptographically verifiable ledgers to ensure absolute state consistency.
              </p>
            </div>

            {/* Feature 02 */}
            <div className="group cursor-default">
              <span className="block text-[10px] font-mono font-bold text-yellow-400 mb-4 tracking-widest">
                [ STANDARDS_02 ]
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-gray-300 transition-colors duration-300">
                Predictive Scalability
              </h3>
              <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                Our architectures are designed to handle 10x spikes in traffic without manual intervention. 
                We use containerized orchestration and automated horizontal scaling to maintain a flat latency curve.
              </p>
            </div>

            {/* Feature 03 */}
            <div className="group cursor-default">
              <span className="block text-[10px] font-mono font-bold text-yellow-400 mb-4 tracking-widest">
                [ STANDARDS_03 ]
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-gray-300 transition-colors duration-300">
                Edge-First Deployment
              </h3>
              <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                Sub-50ms response times globally. We push compute and caching to the edge, 
                ensuring that your users in London, Nairobi, or New York experience the 
                same instantaneous interaction speed.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

      <EnterpriseCTA />
    </main>
  );
}