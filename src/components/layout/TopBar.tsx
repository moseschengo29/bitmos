import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, CalendarPlus } from "lucide-react";

export default function ContactTopBar() {
  return (
    <div className="w-full bg-[#121c34] border-b border-slate-800/80 hidden md:block relative z-50">
      <div className="mx-auto flex h-12 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-medium">
        
        {/* --- LEFT: Direct Contact Information --- */}
        <div className="flex items-center gap-5">
          
          {/* Email Link */}
          <a 
            href="mailto:info@bitmos.com" 
            className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors duration-200 group"
          >
            <Mail className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" /> 
            info@bitmos.com
          </a>
          
          <div className="w-px h-3 bg-slate-700"></div>
          
          {/* Phone Link */}
          <a 
            href="tel:+254200000000" 
            className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors duration-200 group"
          >
            <Phone className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" /> 
            +254 (0) 00000000
          </a>
          
          <div className="w-px h-3 bg-slate-700"></div>
          
          {/* Location (Non-link, neutral text) */}
          <span className="flex items-center gap-2 text-white">
            <MapPin className="h-3.5 w-3.5 text-slate-400" /> 
            Nairobi, HQ
          </span>

        </div>

        {/* --- RIGHT: Trust Signals & Lead Generation --- */}
        <div className="flex items-center gap-5">
          
          {/* System Status */}
          <div className="flex items-center gap-2 text-white cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            All Systems Operational
          </div>
          
          <div className="w-px h-3 bg-slate-700"></div>
          
          {/* Client Login Link */}
          <Link 
            href="/client-portal" 
            className="text-white hover:text-amber-400 transition-colors duration-200"
          >
            Client Login
          </Link>
          
          
         

        </div>

      </div>
    </div>
  );
}