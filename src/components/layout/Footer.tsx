"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Twitter, 
  Linkedin, 
  Globe, 
  Instagram
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CookieModal from "../CookiesModal";

// Link Data Structures for easy management
const SOLUTIONS_LINKS = [
  { name: "Enterprise Platforms", href: "/services/enterprise-web-platforms" },
  { name: "Learner Management", href: "/solutions/learner-manamagement" },
  { name: "Fin-Tech", href: "/solutions/financial-tech" },
  { name: "Data Analytics", href: "/solutions/data-analytics" },
  { name: "Data & Security", href: "/solutions/threat-detection" },
];

const COMPANY_LINKS = [
  { name: "About Bitmos", href: "/about-us" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Technical Blog", href: "/resources/technical-blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact-us" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  return (
    <>
    <footer className="relative bg-[#121c34] pt-20 pb-10 font-sans text-slate-300 overflow-hidden">
      
      {/* Decorative Top Accent Line (Light Blue to Yellow gradient) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1120] via-blue-500 to-yellow-400 opacity-80"></div>
      
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* COLUMN 1: Brand & Newsletter */}
          <div className="flex flex-col items-start lg:pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              {/* Ensure your logo works on dark backgrounds. If not, use a white/monochrome version here */}
              <Image 
                src="/BitmosWhite.png"
                width={200} 
                height={100}
                alt="Bitmos Technologies Ltd Logo"
                className="h-8 w-auto object-contain drop-shadow-md" 
                priority 
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Architecting elegant, high-performance software systems for global enterprises. Built with absolute precision.
            </p>
            
            {/* Newsletter Input */}
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Subscribe to Insights
              </p>
              <form className="relative flex items-center group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Engineering email address..." 
                  required
                  className="w-full rounded-lg border border-slate-700/50 bg-slate-800/50 py-3 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-md bg-yellow-400 text-slate-900 transition-all hover:bg-yellow-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>

          {/* COLUMN 2: Solutions Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Solutions
            </h3>
            <ul className="flex flex-col gap-4">
              {SOLUTIONS_LINKS.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-light-blue hover:text-yellow-400 font-medium flex items-center gap-2 group">
                    <span className="h-px w-0 bg-blue-400 transition-all group-hover:w-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Company Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {COMPANY_LINKS.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-yellow-400 font-medium flex items-center gap-2 group">
                    <span className="h-px w-0 bg-blue-400 transition-all group-hover:w-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Global Presence & Map */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Headquarters
            </h3>
            
            {/* Styled Map Container - CSS Filters make it a dark-mode map! */}
            <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-700/50 mb-6 bg-slate-800 relative pointer-events-none shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19053880434!2d36.7073041938997!3d-1.3032051016723146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 invert grayscale contrast-125 opacity-70 mix-blend-screen"
              ></iframe>
            </div>

            {/* Contact Info */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-slate-400 group">
                <MapPin className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5 transition-transform group-hover:-translate-y-1" />
                <span className="group-hover:text-white transition-colors">CPA Centre, Ground Floor<br/>Thika Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 group">
                <Mail className="h-4 w-4 text-yellow-400 shrink-0 transition-transform group-hover:scale-110" />
                <a href="mailto:info@bitmostechnologies.com" className="hover:text-amber-400 transition-colors">info@bitmostechnologies.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 group">
                <Phone className="h-4 w-4 text-yellow-400 shrink-0 transition-transform group-hover:scale-110" />
                <a href="tel:+254702357053" className="hover:text-amber-400 transition-colors">+254 702 357053</a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM SECTION: LEGAL & SOCIALS --- */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-800/60 pt-8 mt-4 gap-6">
          
          {/* Copyright */}
          <p className="text-xs text-slate-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Bitmos Technologies Ltd. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}

            <button 
              onClick={() => setIsCookieModalOpen(true)} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="https://twitter.com/bitmos" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/bitmostechnologies" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-yellow-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/company/bitmos" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://bitmos.co.ke" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Global Presence</span>
              <Globe className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>

    <CookieModal
      isOpen={isCookieModalOpen} 
      onClose={() => setIsCookieModalOpen(false)} 
    />
    </>
  );
}