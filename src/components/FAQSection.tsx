"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: React.ReactNode; 
}

export interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "FAQ"                      
}: FAQSectionProps) {
  
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="w-full bg-white text-slate-900 border-t border-b border-slate-200">
      <div className="flex flex-col md:flex-row w-full max-w-[1600px] mx-auto">
        
        <div className="w-full md:w-[40%] border-b md:border-b-0 md:border-r border-slate-200 p-8 md:p-16 lg:p-24 flex flex-col items-start justify-center relative">
          <div className="md:sticky md:top-32">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] max-w-sm">
              {title}
            </h2>
          </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-slate-200 last:border-b-0 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-8 md:p-12 text-left group transition-colors hover:bg-white"
                >
                  <span className="text-lg md:text-xl font-medium pr-8 group-hover:text-yellow-600 transition-colors">
                    {faq.question}
                  </span>
                  
                  <div className="relative w-6 h-6 shrink-0 flex items-center justify-center text-slate-400 group-hover:text-yellow-600 transition-colors">
                    <Minus className={`absolute h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-0'}`} />
                    <Plus className={`absolute h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-8 md:px-12 pb-8 md:pb-12 text-slate-500 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}