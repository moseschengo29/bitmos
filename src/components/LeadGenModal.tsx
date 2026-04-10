"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function LeadGenModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("bitmos_lead_modal_dismissed");
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); 
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("bitmos_lead_modal_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);
    localStorage.setItem("bitmos_lead_modal_dismissed", "true");
    
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 pt-10 pb-20">
          
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-slate-900/20"
            onClick={handleClose}
          />


          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-300/50 overflow-hidden"
          >
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            <div className="relative z-10 p-8 sm:p-10">
              <AnimatePresence mode="wait">
                
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 text-blue-600 mb-6">
                      <Zap className="h-4 w-4" fill="currentColor" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Priority Access</span>
                    </div>

                    <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-3 leading-tight">
                      Architecting something <br /> ambitious?
                    </h3>
                    
                    <p className="text-sm text-slate-600 font-medium mb-8 leading-relaxed">
                      Leave your email below. Our lead engineers will reach out to discuss your technical constraints and blueprint a scalable solution.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="engineering@company.com"
                          className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-medium"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="group relative w-full flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold text-sm mt-2 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 transition-all active:scale-[0.98]"
                      >
                        Initiate Contact
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                      </button>
                      
                      <p className="text-[10px] text-slate-400 text-center mt-3 font-medium uppercase tracking-wider">
                        Strictly confidential. No marketing spam.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  
                  
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="h-16 w-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle2 className="h-8 w-8" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
                      Signal Received.
                    </h3>
                    <p className="text-sm text-slate-600 font-medium max-w-[250px] leading-relaxed">
                      Our engineering team will review your domain and reach out to <span className="text-slate-900 font-bold">{email}</span> shortly.
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}