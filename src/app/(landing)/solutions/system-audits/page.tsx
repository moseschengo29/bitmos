"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowDownRight, 
  ShieldAlert, 
  SearchCode, 
  ServerCrash, 
  FileCheck2,
  LockKeyhole,
  ArrowRight,
  Fingerprint,
  TerminalSquare,
  ActivitySquare
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// ==========================================
// 1. AUDIT HERO SECTION
// ==========================================
function AuditHero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".hero-pill", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, delay: 0.2 })
      .fromTo(".hero-word", { opacity: 0, y: 50, rotateX: -15 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.1 }, "-=0.8")
      .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, "-=0.8");
  }, { scope: container });

  return (
    <section ref={container} className="relative bg-[#FAFAFA] pt-32 sm:pt-48 pb-24 font-sans overflow-hidden border-b border-slate-200 min-h-[85vh] flex flex-col justify-center">
      {/* Subtle Fingerprint/Security Background watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.02] pointer-events-none">
        <Fingerprint className="w-[800px] h-[800px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
        

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-[1.05] mb-8 flex flex-wrap gap-x-4 gap-y-2 perspective-1000">
            <span className="hero-word overflow-hidden">Exposing</span>
            <span className="hero-word overflow-hidden text-slate-400">vulnerabilities</span>
            <span className="hero-word overflow-hidden">before</span>
            <span className="hero-word overflow-hidden text-slate-400">they</span>
            <span className="hero-word overflow-hidden">become</span>
            <span className="hero-word overflow-hidden font-serif italic font-medium text-red-600 pr-2">headlines.</span>
          </h1>

          <p className="hero-desc text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12">
            Automated scanners provide a false sense of security. Our elite architects manually tear down your codebase, infrastructure, and deployment pipelines to uncover deep-seated systemic flaws.
          </p>

          <div className="hero-desc flex items-center gap-4">
            <Link href="#methodology" className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95">
              Review Methodology <ArrowDownRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. THE REALITY CHECK
// ==========================================
function AuditContext() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".ctx-element", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 75%" } }
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-24 sm:py-32 font-sans border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative">
            <ArrowDownRight className="ctx-element h-8 w-8 text-red-600 mb-8" strokeWidth={1.5} />
            <h2 className="ctx-element font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Compliance is <span className="text-slate-400">not</span> <br className="hidden sm:block"/>
              <span className="font-serif italic font-medium text-slate-500">true security.</span>
            </h2>
            <p className="ctx-element text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Checking boxes for SOC-2 or ISO 27001 will pass a vendor assessment, but it won't stop a sophisticated breach. Hackers exploit the unique business logic of your application—something a generic checklist cannot measure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: SearchCode, title: "Blind to Logic Flaws", desc: "SaaS scanners catch outdated dependencies, but miss fatal flaws in your custom authentication flows." },
              { icon: ServerCrash, title: "Architectural Debt", desc: "Spaghetti code and monolithic bottlenecks cause catastrophic downtime during traffic spikes." },
              { icon: ShieldAlert, title: "False Positives", desc: "Engineering teams ignore critical alerts because standard tools flood them with thousands of low-risk warnings." },
              { icon: LockKeyhole, title: "The Bitmos Standard", desc: "We perform manual, adversarial auditing. We think like attackers to protect your architecture." }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="ctx-element p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200 shadow-sm transition-shadow hover:shadow-md hover:border-red-100">
                  <Icon className={`h-6 w-6 mb-6 ${i === 3 ? "text-red-600" : "text-slate-400"}`} />
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. THE ACTIVE THREAT VISUALIZER
// ==========================================
function AuditVisualizer() {
  const container = useRef<HTMLElement>(null);
  const scannerLine = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Section reveal
    gsap.fromTo(".vis-header", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, scrollTrigger: { trigger: container.current, start: "top 60%" } }
    );

    // The sweeping radar/scanner line
    if (scannerLine.current) {
      gsap.to(scannerLine.current, {
        top: "100%",
        duration: 3,
        ease: "none",
        repeat: -1,
        yoyo: true
      });
    }

    // Nodes flashing red when the scanner hits them
    const nodes = gsap.utils.toArray(".vuln-node");
    nodes.forEach((node: any, i) => {
      gsap.to(node, {
        backgroundColor: "rgba(239, 68, 68, 0.2)", // red-500/20
        borderColor: "rgba(239, 68, 68, 0.8)",
        color: "#EF4444",
        duration: 0.2,
        repeat: -1,
        repeatDelay: 2.8,
        yoyo: true,
        delay: i * 0.8 // Stagger the flashes based on vertical position
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="bg-slate-950 py-24 sm:py-32 font-sans overflow-hidden border-b border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="vis-header text-xs font-bold uppercase tracking-widest text-red-500 mb-4">Deep Topology Scan</p>
          <h2 className="vis-header font-heading text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05] mb-6">
            Finding the cracks in your <br className="hidden sm:block"/>
            <span className="text-red-500">infrastructure.</span>
          </h2>
        </div>

        {/* --- INTERACTIVE RADAR UI --- */}
        <div className="vis-header relative w-full max-w-4xl mx-auto h-[400px] sm:h-[500px] bg-[#020617] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
          
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          {/* The Scanner Line */}
          <div ref={scannerLine} className="absolute left-0 w-full h-1 bg-red-500 shadow-[0_0_20px_#EF4444] z-20 top-0">
             <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-t from-red-500/20 to-transparent -translate-y-full pointer-events-none"></div>
          </div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <path d="M 20% 30% L 50% 50% L 80% 30%" fill="none" stroke="#1E293B" strokeWidth="2" />
            <path d="M 20% 70% L 50% 50% L 80% 70%" fill="none" stroke="#1E293B" strokeWidth="2" />
            <path d="M 50% 20% L 50% 80%" fill="none" stroke="#1E293B" strokeWidth="2" />
          </svg>

          {/* MOCK NODES */}
          <div className="vuln-node absolute left-[20%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-500 transition-colors z-10">
            <TerminalSquare className="h-6 w-6" />
            <span className="absolute -bottom-6 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap">API Gateway</span>
          </div>

          <div className="absolute left-[50%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-500 z-10">
            <ActivitySquare className="h-6 w-6" />
            <span className="absolute -bottom-6 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">Load Balancer</span>
          </div>

          {/* Core DB (Vulnerable) */}
          <div className="vuln-node absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-900 border border-slate-700 text-slate-500 transition-colors z-10 shadow-xl">
            <SearchCode className="h-8 w-8" />
            <span className="absolute -bottom-6 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap">Core Database</span>
          </div>

          <div className="absolute right-[20%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-500 z-10">
            <TerminalSquare className="h-6 w-6" />
            <span className="absolute -bottom-6 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">Auth Service</span>
          </div>

          <div className="vuln-node absolute right-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-slate-500 transition-colors z-10">
            <ActivitySquare className="h-6 w-6" />
            <span className="absolute -bottom-6 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap">3rd Party Webhook</span>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. THE METHODOLOGY (Sticky Scroll)
// ==========================================
function AuditMethodology() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray(".step-card");
    
    steps.forEach((step: any, i) => {
      gsap.fromTo(step,
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: container });

  const STEPS = [
    { num: "01", title: "Static Application Security Testing (SAST)", desc: "We perform a line-by-line manual and automated review of your source code to identify hardcoded secrets, injection vulnerabilities, and insecure cryptographic practices." },
    { num: "02", title: "Dynamic Analysis & Pen-Testing", desc: "We attack your application in a runtime environment. We attempt to bypass authentication, escalate privileges, and manipulate your API endpoints just like a real threat actor." },
    { num: "03", title: "Infrastructure & Cloud Review", desc: "We audit your AWS/GCP/Azure environments. We verify IAM roles, VPC configurations, S3 bucket policies, and Docker/Kubernetes container security." },
    { num: "04", title: "Performance & Bottleneck Tracing", desc: "Security is only half the audit. We stress-test your databases and identify architectural bottlenecks that will cause your system to crash under heavy user load." }
  ];

  return (
    <section ref={container} id="methodology" className="bg-[#FAFAFA] py-24 sm:py-32 font-sans border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">The Protocol</p>
              <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                A relentless, <br/>
                <span className="text-slate-400">4-phase teardown.</span>
              </h2>
              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-md">
                We leave no stone unturned. Our auditing protocol maps directly to OWASP Top 10 standards, combined with our proprietary performance heuristics.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <div key={idx} className="step-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 sm:gap-8 items-start hover:border-slate-300 transition-colors">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-heading text-xl font-black border border-blue-100 shadow-inner">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

// ==========================================
// 5. THE DELIVERABLES (Bento Grid)
// ==========================================
function AuditDeliverables() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".dlv-card", 
      { opacity: 0, y: 40, scale: 0.98 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 75%" } }
    );
  }, { scope: container });

  return (
    <section ref={container} className="bg-white py-24 sm:py-32 font-sans overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
            Actionable <span className="text-slate-400">Intelligence.</span>
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            We don't hand you a 200-page PDF generated by a bot. You receive prioritized, deeply technical roadmaps that your engineering team can start executing immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          <div className="dlv-card md:col-span-2 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col justify-between overflow-hidden relative shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <FileCheck2 className="h-8 w-8 text-red-400 mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-2">The Executive & Technical Brief</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                A dual-purpose report. The first section translates risk into business impact for the C-Suite. The second section provides exact line numbers, reproducible exploits, and code snippets for developers.
              </p>
            </div>
          </div>

          <div className="dlv-card md:col-span-1 p-8 sm:p-10 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col justify-between group hover:bg-blue-100/50 transition-colors">
            <SearchCode className="h-8 w-8 text-blue-600 mb-6" />
            <div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Remediation Blueprint</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Step-by-step architectural diagrams and specific PR (Pull Request) recommendations to patch the identified holes permanently.
              </p>
            </div>
          </div>

          <div className="dlv-card md:col-span-3 p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">CI/CD Security Integration</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                An audit is a snapshot in time. To ensure long-term security, we help your DevOps team integrate automated SAST/DAST tooling directly into your GitHub Actions or GitLab CI pipelines, blocking vulnerable code before it is merged.
              </p>
            </div>
            <div className="flex gap-2">
               {["GitHub", "GitLab", "Jenkins"].map((tool, i) => (
                 <span key={i} className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 border border-slate-300 rounded-lg bg-white shadow-sm">{tool}</span>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function AuditCTA() {
  return (
    <section className="bg-slate-950 py-32 font-sans overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Find the fatal flaw before <br className="hidden sm:block" />
          <span className="text-red-500">the market does.</span>
        </h2>
        <p className="text-lg text-slate-400 font-medium mb-10 max-w-2xl mx-auto">
          Protect your users, your reputation, and your bottom line. Schedule a confidential scoping call with our lead security architects today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact-us" className="group flex h-14 items-center gap-3 rounded-xl bg-red-600 px-8 font-bold text-white transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] active:scale-95">
            Schedule Confidential Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/solutions" className="flex h-14 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 px-8 font-bold text-slate-300 transition-all hover:bg-slate-800 hover:text-white active:scale-95">
            Explore Other Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN EXPORT
// ==========================================
export default function SystemAuditsPage() {
  return (
    <main className="w-full">
      <AuditHero />
      <AuditContext />
      <AuditVisualizer />
      <AuditMethodology />
      <AuditDeliverables />
      <AuditCTA />
    </main>
  );
}