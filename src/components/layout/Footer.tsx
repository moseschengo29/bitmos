"use client";

import React from "react";
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Twitter, 
  Linkedin, 
  Github, 
  Globe 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 font-sans text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- TOP SECTION: 4 COLUMN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* COLUMN 1: Brand & Newsletter */}
          <div className="flex flex-col items-start lg:pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image 
                src="/bitmos_transparent.png"
                width={200} 
                height={100}
                alt="Bitmos Technologies Ltd Logo"
                className="h-8 w-auto object-contain" 
                priority 
              />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              Architecting elegant, high-performance software systems for global enterprises. Built with absolute precision.
            </p>
            
            {/* Newsletter Input */}
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-3">
                Subscribe to Insights
              </p>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Engineering email address..." 
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-4 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 transition-colors"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white transition-transform hover:scale-105 active:scale-95"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Solutions Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">
              Solutions
            </h3>
            <ul className="flex flex-col gap-4">
              {["Enterprise Platforms", "Learner Management", "Cloud Architecture", "System Modernization", "Data & Security"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-slate-500 transition-colors hover:text-blue-600 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Company Links */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {["About Bitmos", "Careers", "Engineering Blog", "Open Source", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-slate-500 transition-colors hover:text-slate-900 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Global Presence & Map */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">
              Headquarters
            </h3>
            
            {/* Styled Map Container */}
            {/* Using Tailwind filters (grayscale, contrast) to make a standard iframe look premium and custom */}
            <div className="w-full h-32 rounded-xl overflow-hidden border border-slate-200 mb-6 bg-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.42845873919!2d36.739733!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-80"
              ></iframe>
            </div>

            {/* Contact Info */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Nairobi, Kenya<br/>Global Tech Hub</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <a href="mailto:hello@bitmos.tech" className="hover:text-slate-900 transition-colors">hello@bitmos.tech</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                <a href="tel:+254000000000" className="hover:text-slate-900 transition-colors">+254 (0) 123 456 789</a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM SECTION: LEGAL & SOCIALS --- */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200 pt-8 mt-4 gap-6">
          
          {/* Copyright */}
          <p className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Bitmos Technologies. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-900 transition-colors">Cookie Settings</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#twitter" className="text-slate-400 hover:text-slate-900 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#github" className="text-slate-400 hover:text-slate-900 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-4 w-4" />
            </a>
            <a href="#linkedin" className="text-slate-400 hover:text-slate-900 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#global" className="text-slate-400 hover:text-slate-900 transition-colors">
              <span className="sr-only">Global Presence</span>
              <Globe className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}