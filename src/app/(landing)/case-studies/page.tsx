"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Activity, 
  ShieldCheck, 
  Users, 
  Database, 
  Lock, 
  BarChart 
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";
import CaseStudyCards from "./_components/CaseStudiesCards";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ==========================================
// CUSTOM ARCHITECTURAL VISUALIZERS
// ==========================================

const EduAnalyticsVisual = () => (
  <div className="w-full h-full min-h-[400px] bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    
    <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4 relative z-10">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Live Learner Telemetry</span>
      </div>
      <Users className="h-4 w-4 text-blue-500" />
    </div>

    <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Concurrent Sessions</span>
        <span className="text-3xl font-heading font-black text-[#121212]">12,450</span>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Avg. Latency</span>
        <span className="text-3xl font-heading font-black text-emerald-500">42ms</span>
      </div>
    </div>

    {/* Animated Bar Chart */}
    <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-end gap-2 relative z-10">
      {[40, 60, 45, 80, 55, 90, 75, 100].map((h, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 bg-blue-500 rounded-t-sm"
        />
      ))}
    </div>
  </div>
);

const LindaKuraVisual = () => (
  <div className="w-full h-full min-h-[400px] bg-[#0A0A0A] rounded-3xl border border-slate-800 p-8 flex flex-col justify-between relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_100%)] opacity-50" />
    
    <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4 relative z-10">
      <div className="flex items-center gap-3">
        <Lock className="h-4 w-4 text-emerald-500" />
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Cryptographic Ledger</span>
      </div>
      <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold uppercase tracking-widest rounded">Zero-Trust Active</span>
    </div>

    {/* Simulated Node Network Verification */}
    <div className="flex-1 flex flex-col justify-center gap-4 relative z-10">
      {[
        { hash: "0x8F2A...9B1C", status: "Verified", delay: 0 },
        { hash: "0x3E7D...4A2F", status: "Verified", delay: 0.2 },
        { hash: "0x9C1B...5D8E", status: "Verifying...", delay: 0.4, pending: true },
      ].map((node, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: node.delay }}
          viewport={{ once: true }}
          className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <Database className="h-4 w-4 text-slate-500" />
            <span className="font-mono text-xs text-slate-300">{node.hash}</span>
          </div>
          <div className="flex items-center gap-2">
            {node.pending ? (
              <div className="h-1.5 w-1.5 bg-amber-500 rounded-full animate-ping" />
            ) : (
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
            )}
            <span className={`text-[10px] font-bold uppercase tracking-widest ${node.pending ? 'text-amber-500' : 'text-emerald-500'}`}>
              {node.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Streaming Data Log */}
    <div className="mt-6 h-16 overflow-hidden relative z-10 mask-image-fade">
      <motion.div 
        animate={{ y: [-50, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-2 font-mono text-[9px] text-slate-600"
      >
        <p>{`>`} Block 8942 committed to ledger</p>
        <p>{`>`} Consensus achieved across 12 nodes</p>
        <p className="text-emerald-500/50">{`>`} Payload encrypted (AES-256-GCM)</p>
        <p>{`>`} Block 8943 pending verification...</p>
      </motion.div>
    </div>
  </div>
);

// ==========================================
// CASE STUDIES DATA
// ==========================================
const CASE_STUDIES = [
  {
    id: "01",
    client: "EduAnalytics",
    title: "Enterprise Learner Management System.",
    date: "2024 — 2025",
    tags: ["High Concurrency", "Real-Time Telemetry", "SSR Performance"],
    metrics: [
      { label: "Active Learners", value: "1M+" },
      { label: "API Latency", value: "<50ms" },
      { label: "System Uptime", value: "99.99%" }
    ],
    description: "Architected a highly scalable, distributed Learning Management System designed to handle massive concurrent traffic spikes during enterprise training rollouts. We engineered a real-time analytics engine to track learner progression deterministically.",
    Visual: EduAnalyticsVisual,
    reverse: false
  },
  {
    id: "02",
    client: "LindaKura",
    title: "Cryptographic Civic Voting Platform.",
    date: "2022",
    tags: ["Zero-Trust Security", "High Throughput", "Data Integrity"],
    metrics: [
      { label: "Requests/Sec", value: "50k+" },
      { label: "Security Breaches", value: "Zero" },
      { label: "Data Integrity", value: "100%" }
    ],
    description: "Engineered a secure, highly resilient voting infrastructure capable of surviving extreme traffic surges and anomalous mitigation. Built on a zero-trust architecture, the platform ensured absolute ledger accuracy and real-time tabulation during critical civic deployments.",
    Visual: LindaKuraVisual,
    reverse: true
  }
];

export default function CaseStudiesPage() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(".hero-reveal", 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "expo.out", delay: 0.1 }
    );

    const cases = gsap.utils.toArray('.case-section');
    cases.forEach((section: any) => {
      gsap.fromTo(section.querySelectorAll('.fade-up'),
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans selection:bg-blue-100 selection:text-blue-900">
      

      <CaseStudyCards />

      <EnterpriseCTA />

    </main>
  );
}