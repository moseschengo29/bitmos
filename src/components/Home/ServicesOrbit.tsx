"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CONTENT = [
  {
    id: "01",
    subtitle: "High-Performance Web Platforms",
    body: "We engineer lightning-fast, edge-native web experiences that dominate search rankings. By prioritizing sub-second load times and semantic DOM architecture, we transform your digital presence into a high-conversion asset for the Kenyan and international markets.",
  },
  {
    id: "02",
    subtitle: "Native-Level Mobile Engineering",
    body: "We deliver high-fidelity iOS and Android applications that go beyond the browser. Utilizing direct device-native APIs and secure biometric authentication, we build robust mobile solutions focused on reliability and user retention.",
  },
  {
    id: "03",
    subtitle: "Custom Enterprise Software",
    body: "Replace fragmented legacy systems with bespoke digital infrastructure. We architect scalable CRM dashboards and automated workflows tailored strictly to your operational logic, ensuring your software evolves alongside your business.",
  },
  {
    id: "04",
    subtitle: "Cloud Infrastructure & Security",
    body: "Zero-downtime execution for mission-critical platforms. Our engineers design containerized microservices and multi-region fault tolerance, providing Kenyan enterprises with the secure, world-class DevOps backbone required for global scale.",
  }
];

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

export default function ServicesOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white font-sans">
      
      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        
        {/* ======================================= */}
        {/* THE BACKGROUND HUB (Locked Coordinates)   */}
        {/* ======================================= */}
        {/* FIX: Anchored the hub center to exactly top-[65%] on mobile to sync with the text orbit */}
        <div className={`absolute pointer-events-none select-none transition-all duration-700
          w-[150vw] h-[150vw] max-w-[600px] max-h-[600px] top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2
          md:w-[800px] md:h-[800px] md:top-1/2 md:left-0 md:-translate-y-1/2 md:-translate-x-[40%] md:max-w-none md:max-h-none
        `}>

          <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[0.5px] border-slate-200 rounded-full">
             <div className="absolute top-[20%] right-[10%] w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
          </motion.div>

          <motion.div animate={{ rotate: -360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} className="absolute inset-[15%] border-[0.5px] border-slate-200 rounded-full">
             <div className="absolute bottom-[20%] left-[10%] w-1.5 h-1.5 bg-slate-400 rounded-full" />
          </motion.div>
          
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }} 
            className="absolute inset-[30%] border-[0.5px] border-slate-100 rounded-full" 
            style={{ borderStyle: "dashed" }} 
          />

          {/* The Glassmorphic Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
            <div className="absolute inset-[-40px] bg-blue-600/5 rounded-full blur-3xl"></div>
            
            <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full flex flex-col items-center justify-center z-0">
              <div className="relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 mb-3 md:mb-6">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[1.5px] border-blue-600 rounded-xl" />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-1 border-[1.5px] border-slate-300 rounded-xl opacity-60" />
                 <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-600 rounded-full z-10 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </div>

              <h2 className="text-xl md:text-3xl font-bold tracking-[0.15em] text-slate-900 uppercase">
                Bitmos
              </h2>
              <p className="text-[7px] md:text-[9px] font-mono font-bold text-slate-400 tracking-[0.25em] mt-1 md:mt-3 uppercase text-center px-4">
                System Architecture
              </p>
            </div>
          </div>
        </div>

        {/* ======================================= */}
        {/* THE ORBITAL ENGINE TEXT                   */}
        {/* ======================================= */}
        {mounted && (
          // FIX: Positioned the text container exactly 240px above the 65% mark on mobile.
          <div className={`absolute w-full flex z-10 h-0
            top-[65%] mt-[-240px] left-0 justify-center px-6
            md:top-1/2 md:mt-0 md:left-0 md:items-center md:justify-end md:pr-10 lg:pr-24
          `}>
            <div className="relative w-full max-w-sm md:max-w-2xl h-0 flex items-center justify-center">
              {CONTENT.map((item, index) => (
                <OrbitalItem 
                  key={item.id} 
                  item={item} 
                  index={index} 
                  total={CONTENT.length} 
                  progress={scrollYProgress} 
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// ==========================================
// INDIVIDUAL ORBITING ITEM
// ==========================================
function OrbitalItem({ item, index, total, progress, isMobile }: { item: any, index: number, total: number, progress: any, isMobile: boolean }) {
  
  const ITEM_SEPARATION = isMobile ? 75 : 50; 

  const startAngle = 0;
  const endAngle = isMobile 
    ? ((total - 1) * ITEM_SEPARATION)    
    : -((total - 1) * ITEM_SEPARATION); 
  
  const wheelRotation = useTransform(progress, [0, 1], [startAngle, endAngle]);
  
  const rotation = useTransform(wheelRotation, (w) => isMobile 
    ? w - (index * ITEM_SEPARATION) 
    : w + (index * ITEM_SEPARATION)
  );

  const opacity = useTransform(
    rotation, 
    isMobile ? [40, 15, 0, -15, -40] : [45, 20, 0, -20, -45], 
    [0, 0.6, 1, 0.6, 0]
  );
  
  const scale = useTransform(
    rotation, 
    isMobile ? [40, 0, -40] : [45, 0, -45], 
    [0.85, 1, 0.85]
  );

  // FIX: Reduced the orbit radius to 240px. Because the text container is pushed up exactly 240px, 
  // this creates a perfect mathematical pivot directly in the center of the visual Hub.
  const transformOrigin = isMobile ? "50% 240px" : "-100% 50%";

  return (
    <motion.div
      style={{
        rotate: rotation,
        opacity: opacity,
        scale: scale,
        transformOrigin: transformOrigin,
        position: "absolute",
        pointerEvents: "none", 
      }}
      className={`w-full flex flex-col gap-3 md:gap-6 ${isMobile ? "items-center text-center" : "items-start text-left"}`}
    >
      <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 pointer-events-auto">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] shrink-0"></div>
        <h2 className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 leading-tight">
          {item.subtitle}
        </h2>
      </div>
      <p className="text-base sm:text-lg md:text-3xl lg:text-4xl text-slate-800 font-medium leading-relaxed md:leading-[1.4] tracking-tight pointer-events-auto">
        {item.body}
      </p>
    </motion.div>
  );
}