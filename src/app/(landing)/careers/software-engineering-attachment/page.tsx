"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  UploadCloud, 
  Github, 
  Linkedin, 
  Terminal, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA";

export default function ApplicationPage() {
  const container = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(".apply-header", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.1 }
    );

    tl.fromTo(".apply-panel", 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
      "-=0.6"
    );
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate network request
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <main ref={container} className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-24 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pt-32 md:pt-40">
        
        <div className="mb-16 md:mb-24">
          <h1 className="apply-header text-4xl md:text-6xl font-black tracking-tighter leading-[1] text-slate-900">
            Submit Profile.
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row border-t border-l border-slate-200 bg-white">
          
          <div className="apply-panel w-full lg:w-[40%] border-r border-b border-slate-200 p-8 lg:p-16 bg-[#FAFAFA] flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-mono font-bold tracking-widest uppercase mb-8 rounded-sm">
                Software Engineering Attachment
              </span>
              
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                The Evaluation Protocol
              </h2>
              <p className="text-base text-slate-500 font-medium leading-relaxed mb-12">
                We do not use automated resume screeners. Every application is reviewed by a senior architect. We index heavily on demonstrated curiosity, mathematical reasoning, and the ability to write deterministic code.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="text-sm font-mono font-bold text-slate-300">01</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Technical Review</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">We will review your GitHub repository or portfolio to assess your baseline structural logic and code hygiene.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-mono font-bold text-slate-300">02</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Architecture Interview</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">A 45-minute technical deep dive. No trick questions or LeetCode. We will discuss system design and scaling principles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-mono font-bold text-slate-300">03</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Final Alignment</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">A brief discussion with the engineering lead to align on start dates, project placement, and expectations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200">
               <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                  <AlertCircle className="h-4 w-4" />
                  Only short-listed candidates will be contacted.
               </div>
            </div>
          </div>

          {/* RIGHT: The Application Form */}
          <div className="apply-panel w-full lg:w-[60%] border-r border-b border-slate-200 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {formState !== "success" ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col h-full">
                    
                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200">
                      
                      {/* Name Input */}
                      <div className="p-8 group focus-within:bg-blue-50/30 transition-colors">
                        <label className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 group-focus-within:text-blue-600 transition-colors">
                          Full Legal Name
                        </label>
                        <input 
                          type="text" 
                          required
                          placeholder="Jane Doe"
                          className="w-full bg-transparent text-xl font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="p-8 group focus-within:bg-blue-50/30 transition-colors">
                        <label className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 group-focus-within:text-blue-600 transition-colors">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          required
                          placeholder="jane@example.com"
                          className="w-full bg-transparent text-xl font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-b border-slate-200">
                      
                      {/* GitHub Input */}
                      <div className="p-8 group focus-within:bg-blue-50/30 transition-colors">
                        <label className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 group-focus-within:text-blue-600 transition-colors">
                          <Github className="h-3 w-3" /> GitHub URL
                        </label>
                        <input 
                          type="url" 
                          required
                          placeholder="github.com/username"
                          className="w-full bg-transparent text-base font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none"
                        />
                      </div>

                      {/* LinkedIn Input */}
                      <div className="p-8 group focus-within:bg-blue-50/30 transition-colors">
                        <label className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 group-focus-within:text-blue-600 transition-colors">
                          <Linkedin className="h-3 w-3" /> LinkedIn URL
                        </label>
                        <input 
                          type="url" 
                          placeholder="linkedin.com/in/username"
                          className="w-full bg-transparent text-base font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Technical Question */}
                    <div className="p-8 border-b border-slate-200 group focus-within:bg-blue-50/30 transition-colors">
                      <label className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 group-focus-within:text-blue-600 transition-colors">
                        <Terminal className="h-3 w-3" /> Engineering Context
                      </label>
                      <p className="text-sm text-slate-500 font-medium mb-6">
                        Briefly describe the most technically complex bug you have fixed, or a system limitation you successfully engineered around.
                      </p>
                      <textarea 
                        required
                        rows={4}
                        placeholder="In a recent project, I encountered a race condition where..."
                        className="w-full bg-transparent text-base font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none resize-none"
                      />
                    </div>

                    {/* Resume Upload (Custom Dropzone) */}
                    <div className="p-8 border-b border-slate-200 bg-[#FAFAFA]">
                      <label className="block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
                        Curriculum Vitae
                      </label>
                      <div className="relative border border-dashed border-slate-300 hover:border-blue-500 bg-white rounded-sm p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group">
                        <input type="file" required accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="h-10 w-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors mb-4">
                           <UploadCloud className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 mb-1">Click to upload or drag and drop</span>
                        <span className="text-xs font-medium text-slate-400">PDF format only (Max. 5MB)</span>
                      </div>
                    </div>

                    {/* Submit Action */}
                    <div className="p-8 bg-white mt-auto">
                      <button 
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full py-5 bg-slate-900 hover:bg-blue-600 disabled:bg-slate-300 text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-3 group"
                      >
                        {formState === "submitting" ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </motion.div>
              ) : (
                /* Success State */
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center p-12 text-center"
                >
                  <div className="h-20 w-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 shadow-sm">
                    <CheckCircle2 className="h-10 w-10" strokeWidth={2} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tight text-slate-900 mb-4">
                    Profile Received.
                  </h3>
                  <p className="text-lg text-slate-500 font-medium max-w-md">
                    Your application has been logged into our system. Our engineering leads will review your portfolio and reach out within 3 business days.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>

      <EnterpriseCTA />
    </main>
  );
}