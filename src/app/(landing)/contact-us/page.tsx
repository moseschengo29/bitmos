"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Quote, Plus, PhoneCall } from "lucide-react";
import { FAQSection } from "@/src/components/FAQSection";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export const CONTACT_FAQS = [
  {
    question: "What happens after I send a message?",
    answer: "We like to keep things simple and fast. We’ll get back to you within 24 hours to schedule a casual, no-pressure discovery call. Our goal is just to listen, understand your vision, and see if we’re the right fit to help you build it."
  },
  {
    question: "Will my idea be kept completely confidential?",
    answer: "Absolutely. Your privacy and intellectual property are our top priority. We are more than happy to sign a Non-Disclosure Agreement (NDA) before you share any specific details about your project or business."
  },
  {
    question: "How do you figure out the cost of a project?",
    answer: "Because every business has different needs, we don't use a one-size-fits-all price tag. During our initial chat, we'll learn about your goals and timeline, and then we'll put together a clear, transparent proposal so you know exactly what to expect—no hidden fees."
  },
  {
    question: "Can you help with an app or website that is already built?",
    answer: "Yes, we do this all the time! We can step in to rescue, modernize, or scale your existing software. We usually start with a quick system audit to see how things are currently running, and then give you our honest advice on the best path forward."
  },
  {
    question: "Who will I actually be talking to during the project?",
    answer: "You’ll be communicating directly with the core team actually building your product. We don't hide behind layers of account managers. We believe in clear, honest, and direct communication so you are always in the loop."
  }
];

export default function ContactElite() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".reveal-heading", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 });
      tl.fromTo(".grid-panel", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "expo.out" }, "-=0.6");
      tl.fromTo(".form-element", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 }, "-=0.8");
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative min-h-screen bg-[#FAFAFA] pt-24 font-sans overflow-hidden flex flex-col">
      
      {/* --- HEADER --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16 shrink-0">
        <p className="reveal-heading text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
          Project Initiation
        </p>
        <h1 className="reveal-heading font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
          Let&apos;s engineer <br/> <span className="text-slate-900">your next breakthrough.</span>
        </h1>
      </div>

      {/* --- FULL WIDTH 3-COLUMN GRID --- */}
      <div className="relative z-10 w-full border-y border-slate-200 bg-white grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 shadow-sm flex-grow">
        
        {/* COLUMN 1: CONTACT INFO & SOCIAL PROOF */}
        <div className="grid-panel p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-slate-50/50">
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-10">Direct Channels</h3>
            
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Electronic Mail</p>
                  <a href="mailto:hello@bitmos.tech" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">info@bitmostechnologies.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-400 group-hover:text-yellow-600 group-hover:border-yellow-200 transition-colors">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Phone Number</p>
                  <a href="tel:+254702357053" className="text-base font-bold text-slate-900 hover:text-yellow-600 transition-colors">+254 702 357053
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-400 group-hover:text-emerald-500 group-hover:border-emerald-200 transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Avg. Response Time</p>
                  <p className="text-base font-bold text-slate-900">Under 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-100 rotate-180" />
            <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10 italic">
              &quot;Bitmos completely overhauled our legacy backend. Their architecture review alone saved us months of misdirected engineering effort.&quot;
            </p>
            <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-700 border border-blue-100">SJ</div>
              <div>
                <p className="text-xs font-bold text-slate-900">Sarah Jenkins</p>
                <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mt-0.5">CTO, Nexus Systems</p>
              </div>
            </div>
          </div>

        </div>

        {/* COLUMN 2: THE INPUT FORM */}
        <div className="grid-panel p-8 sm:p-12 lg:p-16 bg-white">
          <h3 className="text-2xl font-bold text-slate-900 mb-10">Project Requirements</h3>

          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Intent Toggle */}
            <div className="form-element flex flex-col gap-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Engagement Type</label>
              <div className="flex rounded-xl bg-slate-50 p-1 border border-slate-100">
                <label className="relative flex-1 cursor-pointer">
                  <input type="radio" name="engagement" className="peer sr-only" defaultChecked />
                  <div className="text-center rounded-lg py-3 text-xs font-semibold text-slate-500 transition-all peer-checked:bg-white peer-checked:text-blue-600 peer-checked:shadow-sm peer-checked:border peer-checked:border-slate-200">
                    Full Build
                  </div>
                </label>
                <label className="relative flex-1 cursor-pointer">
                  <input type="radio" name="engagement" className="peer sr-only" />
                  <div className="text-center rounded-lg py-3 text-xs font-semibold text-slate-500 transition-all peer-checked:bg-white peer-checked:text-blue-600 peer-checked:shadow-sm peer-checked:border peer-checked:border-slate-200">
                    Augmentation
                  </div>
                </label>
                <label className="relative flex-1 cursor-pointer">
                  <input type="radio" name="engagement" className="peer sr-only" />
                  <div className="text-center rounded-lg py-3 text-xs font-semibold text-slate-500 transition-all peer-checked:bg-white peer-checked:text-blue-600 peer-checked:shadow-sm peer-checked:border peer-checked:border-slate-200">
                    System Audit
                  </div>
                </label>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 gap-6">
              <div className="form-element relative">
                <input type="text" id="name" className="peer w-full rounded-xl border border-slate-200 bg-transparent px-4 pb-2 pt-6 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all placeholder-transparent" placeholder="Full Name" />
                <label htmlFor="name" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-blue-600">Full Name</label>
              </div>
              <div className="form-element relative">
                <input type="email" id="email" className="peer w-full rounded-xl border border-slate-200 bg-transparent px-4 pb-2 pt-6 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all placeholder-transparent" placeholder="Work Email" />
                <label htmlFor="email" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-blue-600">Work Email</label>
              </div>
            </div>

            <div className="form-element relative">
              <textarea id="details" rows={5} className="peer w-full resize-none rounded-xl border border-slate-200 bg-transparent px-4 pb-2 pt-6 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all placeholder-transparent" placeholder="Project Details"></textarea>
              <label htmlFor="details" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-blue-600">Technical requirements & timeline...</label>
            </div>

            <div className="form-element mt-4 border-t border-slate-100 pt-8 flex flex-col gap-6">
              <button type="submit" className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-10 font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]">
                Submit Inquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-[11px] font-medium text-slate-400 text-center">
                By submitting, you agree to our <Link href="/privacy-policy" className="underline hover:text-slate-600">Privacy Policy</Link>.
              </p>
            </div>

          </form>
        </div>

        {/* COLUMN 3: FULL HEIGHT MAP */}
        <div className="grid-panel relative w-full h-[400px] lg:h-auto bg-slate-200 group overflow-hidden">
          
          <div className="absolute top-8 left-8 z-10 flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg border border-slate-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Headquarters</p>
              <span className="text-xs font-bold text-slate-900">Nairobi, KE</span>
            </div>
          </div>
          
          {/* Active Overlay Effect */}
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none z-10" />

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17382221375!2d36.73516515403061!3d-1.303193370903348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            className="absolute inset-0 grayscale contrast-[1.1] opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
          ></iframe>
        </div>

      </div>

        <FAQSection
          faqs={CONTACT_FAQS} 
          subtitle="Common Questions"
          title="Let's clear things up before we chat."
        />

    </section>
  );
}