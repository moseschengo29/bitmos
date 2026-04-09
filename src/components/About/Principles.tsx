"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PRINCIPLES = [
  {
    num: "01",
    title: "Zero Technical Debt.",
    desc: "We do not compromise on architecture to meet artificial deadlines. Every line of code is peer-reviewed, heavily tested, and built to scale from day one."
  },
  {
    num: "02",
    title: "Absolute Security.",
    desc: "Security is not a feature; it is the foundation. We implement zero-trust architectures, end-to-end encryption, and rigorous compliance standards by default."
  },
  {
    num: "03",
    title: "Performance First.",
    desc: "Latency kills conversion. We optimize at the edge, utilizing serverless functions and highly tuned database queries to deliver sub-50ms response times globally."
  },
  {
    num: "04",
    title: "Transparent Execution.",
    desc: "No black boxes. We integrate seamlessly with your internal teams, providing clear telemetry, open communication, and predictable deployment cadences."
  }
];

const TECH_CATEGORIES = [
  {
    title: "Client-Side Engineering",
    skills: ["React & Next.js", "TypeScript", "Framer Motion & GSAP", "Tailwind CSS", "WebSockets & Real-time"]
  },
  {
    title: "Distributed Systems",
    skills: ["Node.js & Express", "Python (Django/FastAPI)", "PostgreSQL & Redis", "GraphQL & REST APIs", "Kafka Event Streaming"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS & Google Cloud", "Docker & Kubernetes", "Vercel Edge Network", "CI/CD (GitHub Actions)", "SOC2 & GDPR Compliance"]
  }
];

export default function AboutExtended() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Reveal Principles
      gsap.fromTo(
        ".principle-item",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".principles-grid",
            start: "top 80%"
          }
        }
      );

      // Reveal Tech Stack
      gsap.fromTo(
        ".tech-col",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tech-section",
            start: "top 80%"
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-12">
      
      {/* --- SECTION 3: CORE PRINCIPLES --- */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 border-t border-slate-100">
        
        <div className="mb-16 md:mb-24">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Our Standard
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The Bitmos methodology.
          </h2>
        </div>

        <div className="principles-grid grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24">
          {PRINCIPLES.map((item, idx) => (
            <div key={idx} className="principle-item flex flex-col sm:flex-row gap-6 sm:gap-8">
              {/* Massive, muted numbers for editorial flair */}
              <div className="font-heading text-6xl font-black text-slate-100 leading-none shrink-0 tracking-tighter">
                {item.num}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    


    </div>
  );
}