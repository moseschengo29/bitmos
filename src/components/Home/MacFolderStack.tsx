"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Box, Cpu, Layers, ArrowRight } from "lucide-react";

const CONTENT = [
  {
    id: "01",
    subtitle: "Digital Platforms & Web",
    title: "High-conversion web architectures.",
    body: "We engineer lightning-fast, edge-native web applications designed to dominate search rankings and drive revenue. By prioritizing sub-second load times, we turn your digital presence into a high-performance business asset.",
    icon: Globe,
    tech: ["Next.js", "React", "Edge Compute", "Redis"]
  },
  {
    id: "02",
    subtitle: "Custom Enterprise Software",
    title: "Bespoke digital infrastructure.",
    body: "Eliminate the bottleneck of fragmented legacy systems. We architect scalable software, secure data portals, and automated workflows that perfectly align with your operational logic and accelerate digital transformation.",
    icon: Box,
    tech: ["Node.js", "PostgreSQL", "Prisma", "Docker"]
  },
  {
    id: "03",
    subtitle: "Native Mobile Applications",
    title: "Enterprise-grade mobile experiences.",
    body: "We deliver high-fidelity iOS and Android applications built for massive scale and user retention. Our mobile solutions integrate deep hardware APIs, offline-first capabilities, and unbreakable biometric security.",
    icon: Cpu,
    tech: ["React Native", "Swift", "Kotlin", "SQLite"]
  },
  {
    id: "04",
    subtitle: "Cloud & DevOps Engineering",
    title: "Zero-downtime scaling.",
    body: "Scale confidently with highly secure, multi-region cloud architectures. We design containerized microservices and automated deployment pipelines to ensure your mission-critical platforms never go offline during peak traffic.",
    icon: Layers,
    tech: ["AWS", "Kubernetes", "Terraform", "Kafka"]
  }
];

// Helper hook to detect mobile screens for complex JS math
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return isMobile;
}

export default function MacFolderStack() {
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#FAFAFA] font-sans relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-16 md:mb-28 pt-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-px w-8 bg-blue-500"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-blue-500">
                Execution at Scale
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1] md:leading-[1.05]">
              Solving the unsolvable. <br />
              <span className="text-slate-900 font-black">Delivering the impossible.</span>
            </h3>
          </div>
          <div className="max-w-sm md:text-right">
             <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
              We thrive in high-stakes environments. From untangling monolithic disasters to architecting fault-tolerant global platforms, Bitmos delivers precision engineering when failure is not an option.
            </p>
          </div>
        </div>

        {/* The Stacking Folders */}
        {mounted && (
          // Reduced gap on mobile to keep scrolling tighter
          <div className="relative w-full flex flex-col gap-[20vh] md:gap-[35vh] pb-[10vh]">
            {CONTENT.map((item, index) => (
              <FolderCard 
                key={item.id} 
                item={item} 
                index={index} 
                total={CONTENT.length}
                isMobile={isMobile}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

function FolderCard({ item, index, total, isMobile }: { item: any, index: number, total: number, isMobile: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  // Smooth, stable scale compression
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  
  
  const tabWidth = isMobile ? 45 : (100 / total); 
  const safeTotal = total > 1 ? total - 1 : 1;
  const tabLeft = isMobile ? (index * (55 / safeTotal)) : (index * tabWidth);
  
  const topOffset = isMobile ? 42 : 56;
  const vhOffset = isMobile ? 10 : 15;
  const stickyTop = `calc(${vhOffset}vh + ${index * topOffset}px)`;

  const Icon = item.icon;
  const FOLDER_COLOR = "bg-[#82C3F5]"; 

  return (
    <div 
      ref={cardRef} 
      className="sticky flex items-start justify-center w-full min-h-[450px] h-[65vh] md:h-[70vh]"
      style={{ top: stickyTop }}
    >
      <motion.div 
        style={{ scale }}
        className={`relative w-full h-full ${isMobile ? "pt-[38px]" : "pt-[48px]"} origin-top drop-shadow-[0_15px_40px_rgba(0,0,0,0.08)]`}
      >

        <div 
          className={`absolute top-0 ${isMobile ? "h-[40px]" : "h-[50px]"} ${FOLDER_COLOR} rounded-t-xl flex items-center px-3 md:px-5 z-0 transition-all duration-300`}
          style={{ left: `${tabLeft}%`, width: `${tabWidth}%` }}
        >
          <div className="flex items-center gap-2 w-full">
             <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-900/60 shrink-0" strokeWidth={2.5} />
             <span className="text-[10px] md:text-xs font-semibold tracking-wide text-blue-900/80 truncate">
               {item.subtitle}
             </span>
          </div>
        </div>

        {/* The Folder Body */}
        <div className={`w-full h-full ${FOLDER_COLOR} rounded-2xl z-10 relative flex flex-col p-2 md:p-3`}>
          
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-white opacity-30 rounded-t-2xl pointer-events-none" />

          <div className="relative flex-grow bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            
            <div className="flex flex-col h-full p-6 sm:p-8 md:p-12 lg:p-16">
              
              {/* Top Row: Number & Tech Stack Pills */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 md:mb-auto">
                
                <span className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter text-slate-200 select-none">
                  0{item.id}
                </span>

                <div className="flex flex-wrap gap-1.5 md:gap-2 justify-start md:justify-end max-w-sm">
                  {item.tech.map((techItem: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-slate-200 text-[9px] md:text-xs font-medium text-slate-500 bg-slate-50/50 whitespace-nowrap"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Row: Typography & Action Button */}
              <div className="mt-auto flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3 md:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed font-medium">
                    {item.body}
                  </p>
                </div>

                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer self-end md:self-auto">
                   <ArrowRight className="h-4 w-4 md:h-5 md:w-5 -rotate-45" strokeWidth={2} />
                </div>

              </div>

            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}