"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MinimalPrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  // SECTIONS DATA FOR TOC
  const sections = [
    { id: "introduction", title: "1.0 Introduction" },
    { id: "collection", title: "2.0 Information Collection" },
    { id: "utilization", title: "3.0 Data Utilization" },
    { id: "disclosure", title: "4.0 Information Disclosure" },
    { id: "telemetry", title: "5.0 Tracking & Telemetry" },
    { id: "security", title: "6.0 Infrastructure Security" },
    { id: "rights", title: "7.0 Data Protection Rights" },
    { id: "contact", title: "8.0 Privacy Contact" },
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
            Privacy Policy.
          </h1>

          {/* Technical Spec Metadata */}
          <div className="flex flex-wrap items-center gap-6 md:gap-12 text-xs font-mono uppercase tracking-widest text-slate-500">
            <div>
              <span className="text-slate-400 block mb-1">Effective Date</span>
              <span className="text-slate-900 font-bold">April 19, 2026</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Document Ref</span>
              <span className="text-slate-900 font-bold">BT-PRV-0426</span>
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

        {/* RIGHT: The Structured Privacy Text */}
        <div className="lg:col-span-8 flex flex-col gap-20">
          
          {/* CLAUSE 1.0 */}
          <div id="introduction" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">1.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Introduction</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                Welcome to <strong className="text-slate-900 font-medium">Bitmos Technologies Ltd.</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). We respect your privacy and are committed to protecting your personal and enterprise data. 
              </p>
              <p>
                This document dictates the parameters governing how we collect, process, transmit, and safeguard your information when you access our digital infrastructure at <strong className="text-slate-900 font-medium">bitmos.co.ke</strong> or utilize our engineering services.
              </p>
            </div>
          </div>

          {/* CLAUSE 2.0 */}
          <div id="collection" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">2.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Information Collection</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                We collect precise data points necessary to provision high-performance digital solutions and secure environments. The classifications of data we collect include:
              </p>
              <ul className="flex flex-col gap-4 list-none">
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">2.1</span>
                  <span><strong className="text-slate-900 font-medium">Personal & Business Data:</strong> Identifiable parameters such as your name, corporate email address, job title, and organization name voluntarily submitted during diagnostic requests or consultations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">2.2</span>
                  <span><strong className="text-slate-900 font-medium">Derivative Data:</strong> Metadata automatically captured by our edge servers during session initiation, including IP addresses, browser protocols, OS details, and routing history.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">2.3</span>
                  <span><strong className="text-slate-900 font-medium">Infrastructure Data:</strong> Deep technical configurations regarding your current software architectures, collected strictly under active Non-Disclosure Agreements (NDAs) to facilitate engineering audits.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CLAUSE 3.0 */}
          <div id="utilization" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">3.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Data Utilization</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                Accurate data allows us to deploy targeted, secure, and highly optimized solutions. We utilize the captured information strictly to:
              </p>
              <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-slate-300">
                <li>Provision, operate, and maintain our engineering services and APIs.</li>
                <li>Communicate project diagnostics, technical updates, and consulting timelines.</li>
                <li>Analyze traffic topology to optimize the performance of our digital presence.</li>
                <li>Identify, mitigate, and prevent unauthorized access or DDoS events against our systems.</li>
              </ul>
            </div>
          </div>

          {/* CLAUSE 4.0 */}
          <div id="disclosure" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">4.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Information Disclosure</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">Data Monetization Prohibition</h4>
                <p className="text-sm">
                  We do not sell, rent, or lease your personal or enterprise data to third-party brokers under any circumstances.
                </p>
              </div>
              <p>
                Information is only shared under the following strict operational protocols:
              </p>
              <ul className="flex flex-col gap-3 list-none">
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">4.1</span>
                  <span><strong className="text-slate-900 font-medium">Service Providers:</strong> Shared strictly with highly vetted infrastructure partners (e.g., AWS, GCP) required to host, route, or analyze data, bound by compliance standards (SOC2).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">4.2</span>
                  <span><strong className="text-slate-900 font-medium">Legal Compliance:</strong> If mandated by law enforcement to respond to legal processes, or to protect the integrity of our network.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400 font-mono text-xs mt-1">4.3</span>
                  <span><strong className="text-slate-900 font-medium">Business Transfers:</strong> During the negotiation or execution of mergers, asset sales, or corporate restructuring.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CLAUSE 5.0 */}
          <div id="telemetry" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">5.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Tracking & Telemetry</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                We deploy cookies, web beacons, and advanced tracking telemetry to manage session states and analyze network performance. Strictly necessary cookies are deployed by default to maintain security. Non-essential tracking (analytics and marketing telemetry) requires explicit opt-in via our Data & Privacy Controls module.
              </p>
            </div>
          </div>

          {/* CLAUSE 6.0 */}
          <div id="security" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">6.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Infrastructure Security</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                We secure your data utilizing enterprise-grade physical, technical, and administrative controls. This includes end-to-end encryption in transit (TLS 1.3), encryption at rest (AES-256), and Zero-Trust architecture paradigms. Despite these protocols, absolute security across the public internet cannot be mathematically guaranteed.
              </p>
            </div>
          </div>

          {/* CLAUSE 7.0 */}
          <div id="rights" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">7.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Data Protection Rights</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                In compliance with the Kenya Data Protection Act and international GDPR frameworks, you retain the right to:
              </p>
              <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-slate-300">
                <li>Request a comprehensive export of the personal data we hold.</li>
                <li>Demand the correction of incomplete or inaccurate records.</li>
                <li>Request full erasure of your personal data from our databases.</li>
                <li>Restrict or object to the processing of your data for specific operations.</li>
              </ul>
            </div>
          </div>

          {/* CLAUSE 8.0 */}
          <div id="contact" className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-slate-400">8.0</span>
              <h2 className="text-2xl font-medium text-slate-900 tracking-tight">Privacy Contact</h2>
            </div>
            <div className="pl-0 md:pl-12 flex flex-col gap-6 text-[15px] text-slate-600 leading-relaxed">
              <p>
                To exercise your data protection rights, or to submit inquiries regarding this policy, route your communications to our designated Data Protection Officer:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Electronic Mail</span>
                  <a href="mailto:info@bitmostechnologies.com" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">info@bitmostechnologies.com</a>
                </div>
                <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">HQ Address</span>
                  <span className="text-slate-900 font-medium">CPA Centre, Thika Rd. Nairobi</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}