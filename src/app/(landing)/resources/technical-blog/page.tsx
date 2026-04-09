"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Clock, 
  Calendar, 
  ArrowUpRight,
  Filter,
  Search,
  Database
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA"; // Adjust path if needed

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// DATA PAYLOAD
// ==========================================
const CATEGORIES = ["All", "Architecture", "Infrastructure", "Security", "Performance"];

const FEATURED_POST = {
  id: "RFC-089",
  title: "Migrating 10B Rows to PostGIS with Zero Downtime: A Dual-Write Approach.",
  excerpt: "How we executed a live migration of a massive geospatial dataset from legacy monolithic infrastructure to a distributed PostgreSQL cluster using Apache Kafka event streaming, guaranteeing absolute data integrity and zero operational latency.",
  category: "Infrastructure",
  date: "APR 04, 2026",
  readTime: "14 MIN READ",
  author: "System Architecture Team"
};

const LOG_ENTRIES = [
  {
    id: "LOG-142",
    title: "Why we rewrote our high-frequency matching engine in Rust.",
    excerpt: "Garbage collection pauses in Go were introducing unacceptable microsecond latency spikes. A deep dive into memory safety, deterministic execution, and the borrow checker.",
    category: "Performance",
    date: "MAR 28, 2026",
    readTime: "8 MIN READ"
  },
  {
    id: "LOG-141",
    title: "Implementing strict mutual TLS (mTLS) in a multi-cluster Kubernetes Service Mesh.",
    excerpt: "Moving beyond perimeter defense. How we enforce cryptographic identity validation at every single node within our enterprise VPCs to achieve true Zero-Trust.",
    category: "Security",
    date: "MAR 15, 2026",
    readTime: "12 MIN READ"
  },
  {
    id: "LOG-140",
    title: "The Death of the API Gateway: Decentralized Edge Computing.",
    excerpt: "Centralized API gateways are a bottleneck. We explore pushing routing logic, rate limiting, and JWT validation directly to Vercel/Cloudflare edge workers.",
    category: "Architecture",
    date: "FEB 22, 2026",
    readTime: "10 MIN READ"
  },
  {
    id: "LOG-139",
    title: "Handling 100k+ TPS: Event Sourcing vs. CRUD.",
    excerpt: "When traditional relational databases buckle under write-heavy loads, Event Sourcing provides an immutable, append-only log that guarantees high-throughput capability.",
    category: "Architecture",
    date: "JAN 14, 2026",
    readTime: "16 MIN READ"
  },
  {
    id: "LOG-138",
    title: "React Server Components: A Deterministic Performance Analysis.",
    excerpt: "Stripping away the hype. A mathematical breakdown of payload reduction, Time to Interactive (TTI), and server-side rendering costs using Next.js 14.",
    category: "Performance",
    date: "JAN 02, 2026",
    readTime: "7 MIN READ"
  },
  {
    id: "LOG-137",
    title: "Defeating automated DDoS attacks with heuristic traffic analysis.",
    excerpt: "Static rate limiting fails against sophisticated botnets. How we built a lightweight, edge-deployed machine learning model to score and drop malicious packets.",
    category: "Security",
    date: "DEC 18, 2025",
    readTime: "11 MIN READ"
  }
];

export default function TechnicalBlogPage() {
  const container = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useGSAP(() => {
    // Hero Entrance
    gsap.fromTo(".blog-hero", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out", delay: 0.1 }
    );

    // Featured Article Reveal
    gsap.fromTo(".featured-reveal",
      { opacity: 0, scale: 0.98, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "expo.out", delay: 0.3 }
    );

    // Article Grid Reveal
    const gridTl = gsap.timeline({ scrollTrigger: { trigger: ".log-grid-trigger", start: "top 80%" }});
    gridTl.fromTo(".log-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" });

  }, { scope: container });

  const filteredLogs = activeCategory === "All" 
    ? LOG_ENTRIES 
    : LOG_ENTRIES.filter(log => log.category === activeCategory);

  return (
    <main ref={container} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white border-t border-slate-200">
    
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pt-32 md:pt-40 pb-24 md:pb-32">
        
        <div className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-slate-100 pb-16">
          <div className="max-w-4xl">
            
            <h1 className="blog-hero text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900">
              The Technical <br />
              <span className="text-slate-900">Log.</span>
            </h1>
          </div>
          <div className="blog-hero max-w-sm">
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              Deep dives, architectural blueprints, and post-mortems from the Bitmos engineering team. We share our math, our code, and our logic.
            </p>
          </div>
        </div>

        {/* ========================================== */}
        {/* 2. FEATURED ARTICLE (Brutalist Layout)     */}
        {/* ========================================== */}
        <div className="featured-reveal mb-32 border border-slate-200 bg-[#FAFAFA] group cursor-pointer hover:border-slate-300 transition-colors">
          <div className="flex flex-col lg:flex-row">
            
            {/* Featured Abstract Graphic */}
            <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white p-8 lg:p-12 relative overflow-hidden min-h-[300px] lg:min-h-full flex flex-col">
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} />
              
              {/* Mock System Diagram built with CSS */}
              <div className="relative z-10 w-full flex-grow flex items-center justify-center">
                <div className="w-full max-w-sm flex items-center gap-4">
                  <div className="h-24 w-24 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                    <Database className="h-8 w-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="flex-grow flex flex-col gap-2">
                    <div className="h-0.5 w-full bg-slate-200 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-linear" />
                    </div>
                    <div className="h-0.5 w-full bg-slate-200 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 delay-100 ease-linear" />
                    </div>
                  </div>
                  <div className="h-32 w-32 bg-slate-900 rounded-full flex flex-col items-center justify-center shrink-0 text-white shadow-xl">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">PostGIS</span>
                    <span className="text-xl font-black">LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between bg-white">
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-8">
                <span className="text-blue-600">[{FEATURED_POST.category}]</span>
                <span>{FEATURED_POST.id}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-[1.05] mb-6 group-hover:text-blue-600 transition-colors">
                {FEATURED_POST.title}
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                {FEATURED_POST.excerpt}
              </p>

              <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {FEATURED_POST.date}</span>
                  <span className="flex items-center gap-2"><Clock className="h-3 w-3" /> {FEATURED_POST.readTime}</span>
                </div>
                <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400 mr-2 hidden md:block" />
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] font-bold tracking-widest uppercase border transition-colors rounded-sm ${activeCategory === cat ? 'bg-slate-900 text-white border-slate-900' : 'bg-transparent text-slate-500 border-slate-200 hover:border-slate-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search logs..." 
              className="w-full pl-10 pr-4 py-3 bg-[#FAFAFA] border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all rounded-sm"
            />
          </div>
        </div>

        {/* ========================================== */}
        {/* 4. LOG INDEX (Hairline Grid)               */}
        {/* ========================================== */}
        <section className="log-grid-trigger">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 bg-[#FAFAFA]">
            {filteredLogs.map((log) => (
              <div key={log.id} className="log-card group flex flex-col p-8 lg:p-10 border-r border-b border-slate-200 bg-white hover:bg-slate-900 hover:text-white transition-colors duration-500 cursor-pointer min-h-[380px]">
                
                {/* Meta Header */}
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 group-hover:text-blue-400 transition-colors">
                    [{log.category}]
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300 group-hover:text-slate-600 transition-colors">
                    {log.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-white mb-4 transition-colors">
                  {log.title}
                </h3>
                <p className="text-sm text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed mb-8 transition-colors line-clamp-3">
                  {log.excerpt}
                </p>

                {/* Footer Metadata */}
                <div className="mt-auto pt-6 border-t border-slate-100 group-hover:border-slate-800 flex items-center justify-between transition-colors">
                  <div className="flex flex-col gap-1 text-[10px] font-bold text-slate-400 group-hover:text-slate-500 uppercase tracking-widest transition-colors">
                    <span>{log.date}</span>
                    <span>{log.readTime}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all" strokeWidth={2} />
                </div>

              </div>
            ))}
          </div>

          {filteredLogs.length === 0 && (
             <div className="py-24 text-center border border-slate-200 bg-white mt-8">
               <Terminal className="h-8 w-8 text-slate-300 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-slate-900 mb-2">No logs found.</h3>
               <p className="text-sm text-slate-500">There are currently no RFCs in the &quot;{activeCategory}&quot; category.</p>
             </div>
          )}
        </section>

      </div>
      
      <section className="bg-slate-50 text-black py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-4 block">
              Continuous Integration
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Subscribe to the Log.
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              We publish one highly technical architectural deep-dive per month. No marketing fluff. Pure engineering mechanics.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                required
                placeholder="architect@enterprise.com" 
                className="w-full px-6 py-5 bg-slate-100/50 border border-slate-700 text-slate-400 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors rounded-sm"
              />
              <button 
                type="submit"
                className="w-full px-6 py-5 bg-blue-600 hover:bg-slate-900 hover:text-slate-100 text-white text-sm font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 group rounded-sm"
              >
                Establish Connection
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}