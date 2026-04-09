"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Quote, Plus } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function ContactElite() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".reveal-heading", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.1 });
      tl.fromTo(".elite-card", { opacity: 0, y: 40, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "expo.out" }, "-=0.6");
      tl.fromTo(".form-element", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 }, "-=0.8");
      
      // FAQ Reveal on scroll
      gsap.fromTo(".faq-item", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: ".faq-section", start: "top 85%" } }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative min-h-screen bg-[#FAFAFA] pt-24 pb-32 font-sans overflow-hidden">
      
      {/* --- HEADER --- */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center mb-16">
        <div className="reveal-heading mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Engineering team available
        </div>
        <h1 className="reveal-heading font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
          Let's engineer <br/> <span className="text-slate-400">your next breakthrough.</span>
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* --- MAIN ELITE CARD --- */}
        <div className="elite-card flex flex-col lg:flex-row w-full rounded-[2.5rem] border border-slate-200/80 bg-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.06)] overflow-hidden mb-24">
          
          {/* LEFT SIDE: THE FORM (60%) */}
          <div className="w-full lg:w-[60%] p-8 sm:p-12 lg:p-16">
            
            <h3 className="form-element text-2xl font-bold text-slate-900 mb-8">Project Requirements</h3>

            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Intent Toggle */}
              <div className="form-element flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Engagement Type</label>
                <div className="flex rounded-xl bg-slate-50 p-1 border border-slate-100">
                  <label className="relative flex-1 cursor-pointer">
                    <input type="radio" name="engagement" className="peer sr-only" defaultChecked />
                    <div className="text-center rounded-lg py-2.5 text-sm font-semibold text-slate-500 transition-all peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm">
                      End-to-End Build
                    </div>
                  </label>
                  <label className="relative flex-1 cursor-pointer">
                    <input type="radio" name="engagement" className="peer sr-only" />
                    <div className="text-center rounded-lg py-2.5 text-sm font-semibold text-slate-500 transition-all peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm">
                      Team Augmentation
                    </div>
                  </label>
                  <label className="relative flex-1 cursor-pointer">
                    <input type="radio" name="engagement" className="peer sr-only" />
                    <div className="text-center rounded-lg py-2.5 text-sm font-semibold text-slate-500 transition-all peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm">
                      System Audit
                    </div>
                  </label>
                </div>
              </div>

              {/* Floating Label Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-element relative">
                  <input type="text" id="name" className="peer w-full rounded-xl border border-slate-200 bg-transparent px-4 pb-2 pt-6 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all placeholder-transparent" placeholder="Full Name" />
                  <label htmlFor="name" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-blue-600">Full Name</label>
                </div>
                <div className="form-element relative">
                  <input type="email" id="email" className="peer w-full rounded-xl border border-slate-200 bg-transparent px-4 pb-2 pt-6 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all placeholder-transparent" placeholder="Work Email" />
                  <label htmlFor="email" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-blue-600">Work Email</label>
                </div>
              </div>

              {/* Budget Selector */}
              <div className="form-element flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Estimated Budget (USD)</label>
                <div className="flex flex-wrap gap-3">
                  {["<$10k", "$10k-$50k", "$50k-$100k", "$100k+"].map((budget) => (
                    <label key={budget} className="relative cursor-pointer">
                      <input type="radio" name="budget" className="peer sr-only" />
                      <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:border-slate-300 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700">
                        {budget}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-element relative">
                <textarea id="details" rows={4} className="peer w-full resize-none rounded-xl border border-slate-200 bg-transparent px-4 pb-2 pt-6 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all placeholder-transparent" placeholder="Project Details"></textarea>
                <label htmlFor="details" className="absolute left-4 top-4 text-xs font-semibold text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-blue-600">Technical requirements & timeline...</label>
              </div>

              <div className="form-element mt-2 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] font-medium text-slate-400 w-full sm:w-1/2">
                  By submitting, you agree to our <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>. Protected by AES-256.
                </p>
                <button type="submit" className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-slate-900 px-10 font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]">
                  Submit Inquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE: CONTEXT & TRUST (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-100">
            
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center flex-grow">
              
              {/* Contact Info */}
              <div className="form-element flex flex-col gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-slate-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Direct Email</p>
                    <a href="mailto:hello@bitmos.tech" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">hello@bitmos.tech</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-slate-700">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Response Time</p>
                    <p className="text-sm font-bold text-slate-900">Under 24 Hours</p>
                  </div>
                </div>
              </div>

              {/* Embedded Social Proof */}
              <div className="form-element relative rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-100 rotate-180" />
                <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10 italic">
                  "Bitmos completely overhauled our legacy backend. Their architecture review alone saved us months of misdirected engineering effort."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">SJ</div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Sarah Jenkins</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">CTO, Nexus Systems</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Seamless Map Footer inside the card */}
            <div className="form-element relative w-full h-[200px] bg-slate-200 border-t border-slate-200 group overflow-hidden">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm border border-slate-200">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Nairobi, KE</span>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17382221375!2d36.73516515403061!3d-1.303193370903348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" 
                className="absolute inset-0 grayscale contrast-125 opacity-70 transition-opacity duration-700 group-hover:opacity-100"
              ></iframe>
            </div>

          </div>
        </div>

        {/* --- FAQ SECTION (Below the card) --- */}
        <div className="faq-section mx-auto max-w-4xl pt-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-slate-900">Common Operations Questions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: "Do you sign NDAs before discovery?", a: "Yes. We are happy to execute a mutual NDA before you share any proprietary system architecture or business logic." },
              { q: "What is your typical team structure?", a: "A standard squad includes a Lead Architect, 2-3 Full Stack Engineers, and a dedicated QA. Teams scale based on project velocity needs." },
              { q: "Do you work with legacy codebases?", a: "Absolutely. A significant portion of our work involves carefully untangling and modernizing legacy monoliths into scalable microservices." },
              { q: "How do you handle project handoffs?", a: "We deliver full documentation, CI/CD pipeline configurations, and conduct knowledge transfer sessions with your internal engineering team." }
            ].map((faq, idx) => (
              <div key={idx} className="faq-item rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-sm font-bold text-slate-900">{faq.q}</h4>
                  <Plus className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                </div>
                <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}