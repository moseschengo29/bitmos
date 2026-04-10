"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  CloudCog, 
  BrainCircuit, 
  CodeXml, 
  Network, 
  Database, 
  TerminalSquare, 
  Cpu, 
  Smartphone, 
  ServerCrash, 
  Zap, 
  Workflow 
} from "lucide-react";

const CAPABILITIES = [
  { id: 0, shortTitle: "Cloud Infra", icon: <CloudCog className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Cloud Infrastructure", desc: "Scalable, highly available cloud architectures designed for massive throughput." },
  { id: 1, shortTitle: "Zero Trust", icon: <ShieldCheck className="h-7 w-7 text-[#FFD700]" strokeWidth={1.5} />, title: "Digital Security", desc: "Zero-trust architectures mitigating high risks of cyberattacks." },
  { id: 2, shortTitle: "AI Models", icon: <BrainCircuit className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Predictive AI Models", desc: "Analytical tools for predicting trends and optimizing processes." },
  { id: 3, shortTitle: "Enterprise", icon: <CodeXml className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Enterprise Software", desc: "Custom software development built with modern, performant stacks." },
  { id: 4, shortTitle: "Edge Network", icon: <Network className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Edge Distribution", desc: "Global content and API delivery minimizing latency worldwide." },
  { id: 5, shortTitle: "Data Eng", icon: <Database className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Data Lakes & Pipelines", desc: "Centralization of information ensuring a single source of truth." },
  { id: 6, shortTitle: "CI/CD", icon: <TerminalSquare className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Automated Deployment", desc: "Rigorous CI/CD pipelines enabling 10x faster deployment velocities." },
  { id: 7, shortTitle: "IoT", icon: <Cpu className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "IIoT Integration", desc: "Seamless bridging of hardware telemetry with cloud dashboards." },
  { id: 8, shortTitle: "Mobile Apps", icon: <Smartphone className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Native & Cross-Platform", desc: "High-performance apps delivering flawless user experiences." },
  { id: 9, shortTitle: "Failover", icon: <ServerCrash className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Fault Tolerance", desc: "Multi-region configurations ensuring 99.99% guaranteed uptime." },
  { id: 10, shortTitle: "Fast APIs", icon: <Zap className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Low-Latency Systems", desc: "Microservices optimized for high-throughput data processing." },
  { id: 11, shortTitle: "Architecture", icon: <Workflow className="h-7 w-7 text-white" strokeWidth={1.5} />, title: "Legacy Modernization", desc: "Deconstructing monoliths into scalable microservice clusters." },
];

export default function HeroDynamicGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getGridStyle = () => {
    // 1.8fr ensures structural elegance over aggressive scale.
    const active = "1.8fr";
    const inactive = "1fr";

    if (hoveredIndex === null) {
      return {
        "--c0": inactive, "--c1": inactive, "--c2": inactive, "--c3": inactive,
        "--r0": inactive, "--r1": inactive, "--r2": inactive,
      } as React.CSSProperties;
    }

    const col = hoveredIndex % 4;
    const row = Math.floor(hoveredIndex / 4);

    return {
      "--c0": col === 0 ? active : inactive,
      "--c1": col === 1 ? active : inactive,
      "--c2": col === 2 ? active : inactive,
      "--c3": col === 3 ? active : inactive,
      "--r0": row === 0 ? active : inactive,
      "--r1": row === 1 ? active : inactive,
      "--r2": row === 2 ? active : inactive,
    } as React.CSSProperties;
  };

  return (
    <section className="relative w-full bg-[#061121] font-sans text-white overflow-hidden flex flex-col pt-24 pb-24 border-t border-[#1a2b4a]">
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-center text-center">
        <span className="text-[#FFD700] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
          [ Core Capabilities ]
        </span>
        
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-black leading-tight tracking-tighter text-white max-w-3xl">
          Architected for scale.<br />
          Engineered for performance.
        </h2>
        
        <p className="mt-6 text-sm sm:text-base text-[#8a9db8] max-w-2xl font-medium leading-relaxed">
          We provide end-to-end technical solutions designed to future-proof your business. Hover over a module to explore our specialized engineering domains.
        </p>

      </div>

   
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        
        <div 
          // Solid background colors for the grid. No blur.
          className="relative w-full h-[450px] md:h-[500px] grid border-t border-l border-[#1a2b4a] overflow-hidden bg-[#0A1629]"
          style={{
            gridTemplateColumns: "var(--c0) var(--c1) var(--c2) var(--c3)",
            gridTemplateRows: "var(--r0) var(--r1) var(--r2)",
            transition: "grid-template-columns 0.6s cubic-bezier(0.22, 1, 0.36, 1), grid-template-rows 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            ...getGridStyle()
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {CAPABILITIES.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div 
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group relative border-b border-r border-[#1a2b4a] overflow-hidden flex items-center justify-center cursor-crosshair
                  ${isHovered ? 'bg-[#0f2142]' : 'bg-[#0A1629]'}
                `}
              >
                
                {/* Intersection Nodes (The HUD/Cyber corner rectangles) */}
                <div 
                  className={`absolute -bottom-[2px] -right-[2px] w-[4px] h-[4px] transition-all duration-300 ease-out
                    ${isHovered ? 'bg-[#FFD700] z-20 scale-125' : 'bg-[#1a2b4a] z-0'}
                  `} 
                />

               
                <div className="absolute inset-0 flex items-center justify-center p-2 z-10 pointer-events-none">
                  <AnimatePresence>
                    {!isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        // Conditionally dim other cells when something is hovered
                        animate={{ opacity: isAnyHovered && !isHovered ? 0.2 : 0.7, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                      >
                        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8a9db8] text-center">
                          {item.shortTitle}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center z-10 pointer-events-none">
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        // Wait for grid to expand before fading in the text
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} // Easy ease
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="mb-4 bg-[#14264d] p-3 rounded-xl border border-[#1a2b4a]">
                          {item.icon}
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-3 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-[10px] md:text-xs font-medium text-[#8a9db8] max-w-[220px] leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}