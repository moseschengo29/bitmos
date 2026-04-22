"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TechTermsPage() {
  const [activeSection, setActiveSection] = useState("scope");

  // SECTIONS DATA FOR TOC
  const sections = [
    { id: "scope", title: "1.0 Scope of Agreement" },
    { id: "ip", title: "2.0 Codebase & IP" },
    { id: "conduct", title: "3.0 Operational Conduct" },
    { id: "sla", title: "4.0 Telemetry & SLAs" },
    { id: "liability", title: "5.0 Liability Limitations" },
    { id: "jurisdiction", title: "6.0 Jurisdiction" },
    { id: "notices", title: "7.0 Legal Notices" },
  ];

  // Intersection Observer to highlight TOC based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100 selection:text-slate-900">
      
      {/* --- MINIMALIST HEADER --- */}
      <header className="w-full pt-20 pb-16 px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-12"
          >
            <ArrowLeft className="h-3 w-3" />
            Return to Index
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-8">
            Terms of Service.
          </h1>

          {/* Technical Spec Metadata */}
          <div className="flex flex-wrap items-center gap-6 md:gap-12 text-xs font-mono uppercase tracking-widest text-slate-500">
            <div>
              <span className="text-slate-400 block mb-1">Effective Date</span>
              <span className="text-slate-900 font-bold">April 19, 2026</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Document Ref</span>
              <span className="text-slate-900 font-bold">BT-TOS-0426</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Status</span>
              <span className="text-slate-900 font-bold flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-black rounded-full"></span> Active
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTENT & SIDEBAR GRID --- */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: Sticky Table of Contents */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4">
              Contents
            </h3>
            <nav className="flex flex-col gap-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-sm py-2 px-3 rounded-md transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-slate-50 text-slate-900 font-semibold"
                      : "text-slate-500 font-medium hover:text-slate-900 hover:bg-slate-50/50"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* RIGHT: The Structured Legal Text */}
        <div className="lg:col-span-8 flex flex-col gap-20">
          
          {/* CLAUSE 1.0 */}
          <div id="scope" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">1.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Scope of Agreement</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                This agreement establishes the legally binding parameters governing your access to and utilization of the engineering services, proprietary platforms, and digital infrastructure (collectively, the &quot;Services&quot;) provided by <strong className="text-slate-900 font-medium">Bitmos Technologies Ltd.</strong> (&quot;Bitmos&quot;, &quot;we&quot;, or &quot;us&quot;).
              </p>
              <p>
                By interfacing with our endpoints, deploying our code, or utilizing our consulting services, you explicitly acknowledge that you have reviewed, understood, and consented to these operating terms. Execution of separate Master Service Agreements (MSAs) will supersede these general terms where explicitly noted.
              </p>
            </div>
          </div>

          {/* CLAUSE 2.0 */}
          <div id="ip" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">2.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Codebase & Intellectual Property</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                The foundational architecture, proprietary libraries, website design, and pre-existing frameworks utilized to deliver our Services remain the exclusive intellectual property of Bitmos Technologies Ltd. 
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Client Deliverables Exemption</h4>
                <p className="text-sm">
                  Upon final payment execution, intellectual property rights for bespoke application code, specific database schemas, and custom UI/UX assets generated exclusively for your enterprise are transferred entirely to you, unless otherwise specified in your distinct Statement of Work (SOW).
                </p>
              </div>
            </div>
          </div>

          {/* CLAUSE 3.0 */}
          <div id="conduct" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">3.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Operational Conduct</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                To maintain network integrity, clients and users interacting with our infrastructure must adhere to the following strict operational protocols:
              </p>
              <ul className="flex flex-col gap-3 list-none">
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">3.1</span>
                  <span>No deployment of unauthorized automated scripts, scrapers, or DDoS-style load testing against production endpoints without scheduled, written consent.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">3.2</span>
                  <span>No attempts to bypass implemented authentication gateways or Reverse Proxy/WAF configurations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">3.3</span>
                  <span>Complete compliance with local and international data privacy regulations regarding the data you transmit through our systems.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CLAUSE 4.0 */}
          <div id="sla" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">4.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Telemetry & SLAs</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                We architect for zero-downtime, but standard informational environments (such as our public website) are deployed on an &quot;as-is&quot; basis.
              </p>
              <p>
                <strong className="text-slate-900 font-medium">Enterprise Guarantees:</strong> Service Level Agreements (SLAs)—including 99.999% uptime guarantees, dedicated DevOps support routing, and explicit sub-100ms latency targets—are strictly reserved for active clients operating under an enterprise contract. 
              </p>
            </div>
          </div>

          {/* CLAUSE 5.0 */}
          <div id="liability" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">5.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Liability Limitations</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                Under no operational circumstances shall Bitmos Technologies Ltd., its lead architects, or development personnel be held liable for indirect, consequential, or punitive damages—including data loss, revenue interruption, or hardware failure—resulting from the use or inability to use our general Services.
              </p>
            </div>
          </div>

          {/* CLAUSE 6.0 */}
          <div id="jurisdiction" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">6.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Jurisdiction</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                These parameters and your utilization of our architecture are governed exclusively by the laws and technological regulatory frameworks of <strong className="text-slate-900 font-medium">Kenya</strong>. Any operational disputes will be resolved within this legal jurisdiction.
              </p>
            </div>
          </div>

          {/* CLAUSE 7.0 */}
          <div id="notices" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">7.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Legal Notices</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                To execute a Master Service Agreement, request an NDA, or resolve a compliance inquiry, please route your communications to our Legal Operations team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-lg border border-slate-200">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Electronic Mail</span>
                  <a href="mailto:legal@bitmostechnologies.com" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">legal@bitmostechnologies.com</a>
                </div>
                <div className="p-4 rounded-lg border border-slate-200">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Direct Line</span>
                  <span className="text-slate-900 font-medium">+254 742 363 472</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}