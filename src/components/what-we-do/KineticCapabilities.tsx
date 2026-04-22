"use client";

import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, Cpu, Database, Network, Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const SERVICES = [
  {
    id: "01",
    title: "Platform Architecture",
    category: "FRONTEND & UX",
    desc: "We engineer lightning-fast, highly responsive user interfaces using React, Next.js, and advanced edge caching. Delivering pixel-perfect, accessible experiences that convert users effortlessly across all ecosystems.",
    tech: ["Next.js 14", "React Native", "TypeScript", "WebGL"],
    icon: Cpu
  },
  {
    id: "02",
    title: "Enterprise Systems",
    category: "BACKEND & APIs",
    desc: "Robust full-stack development designed for reality. From highly relational databases to secure, high-throughput APIs, we architect backend systems mathematically proven to handle intensive operational loads.",
    tech: ["Node.js", "Go", "PostgreSQL", "GraphQL"],
    icon: Database
  },
  {
    id: "03",
    title: "Cloud & DevOps",
    category: "INFRASTRUCTURE",
    desc: "Seamless deployment and rigorous DevOps consulting. We optimize your infrastructure for zero-downtime scaling, containerized microservices, and multi-region fault tolerance under extreme traffic.",
    tech: ["AWS", "Kubernetes", "Docker", "Terraform"],
    icon: Network
  },
  {
    id: "04",
    title: "Zero-Trust Security",
    category: "COMPLIANCE",
    desc: "Military-grade protection for mission-critical enterprise data. We implement strict Zero-Trust architectures, requiring mutual TLS, VPC isolation, and cryptographic validation at every single node.",
    tech: ["OAuth 2.0", "AES-256", "VPC Peering", "IAM"],
    icon: Shield
  }
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function KineticCapabilities() {
  const container = useRef<HTMLElement>(null);
  
  // 1. Set the initial state to 0 so the first item is open by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  // 2. Add a ref to track the initial render
  const isInitialMount = useRef(true);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
    });

    tl.fromTo(".kin-header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out" });
    tl.fromTo(".kin-row", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "expo.out" }, "-=0.6");
  }, { scope: container });

  // Auto-scroll to center the active item
  useEffect(() => {
    // 3. Prevent auto-scrolling on the very first page load
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (activeIndex !== null && rowRefs.current[activeIndex]) {
      rowRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
    <section ref={container} className="relative w-full bg-[#FAFAFA] pt-24 pb-12 md:pt-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-4xl">
            <h2 className="kin-header text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter text-slate-900 leading-[0.95]">
              Engineered for <br className="hidden md:block"/>
              <span className="text-slate-900">extreme scale.</span>
            </h2>
          </div>
          <div className="kin-header max-w-sm">
             <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We abandon standard templates to build highly bespoke, resilient architectures designed to execute flawlessly under intense operational pressure.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-slate-200">
        {SERVICES.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              ref={(el) => { rowRefs.current[index] = el; }}
              className="kin-row border-b border-slate-200 overflow-hidden cursor-pointer"
              onClick={() => setActiveIndex(isActive ? null : index)}
              animate={{
                backgroundColor: isActive ? "#121c34" : "#FAFAFA", 
                color: isActive ? "#FFFFFF" : "#0F172A",
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <div className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 relative z-10">
                  <div className="flex items-center gap-8 md:w-1/4 shrink-0">
                    <span className={`text-2xl md:text-3xl font-light font-mono transition-colors duration-500 ${isActive ? 'text-blue-300' : 'text-slate-300'}`}>{item.id}</span>
                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>{item.category}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <motion.h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none" animate={{ x: isActive ? 10 : 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                      {item.title}
                    </motion.h3>
                  </div>

                  <div className="hidden md:flex justify-end shrink-0">
                    <motion.div className={`h-16 w-16 rounded-full flex items-center justify-center border transition-colors duration-500 ${isActive ? 'border-white bg-white text-[#121c34]' : 'border-slate-200 bg-transparent text-slate-300'}`} animate={{ rotate: isActive ? 45 : 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                      <ArrowUpRight className="h-6 w-6" strokeWidth={2} />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                      <div className="pb-12 md:pb-20 pt-4 flex flex-col md:flex-row gap-12 md:gap-8 border-t border-white/10 mt-4 md:mt-0 md:border-none relative z-10">
                        <div className="hidden md:block w-1/4 shrink-0"></div>
                        <div className="flex-grow max-w-2xl">
                          <p className="text-lg md:text-2xl font-medium leading-relaxed text-blue-50 mb-10 opacity-90">{item.desc}</p>
                          <div className="flex flex-wrap gap-3">
                            {item.tech.map((techItem, i) => (
                              <span key={i} className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-xs font-mono font-medium text-white shadow-sm">
                                {techItem}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="hidden lg:flex w-1/4 shrink-0 justify-end items-end">
                          <Icon className="h-32 w-32 text-white/10 stroke-[1]" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}