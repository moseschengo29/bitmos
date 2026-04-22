"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { 
  Menu, 
  X, 
  ChevronDown,
  Mail, 
  Phone, 
  MapPin, 
  CalendarPlus 
} from "lucide-react";
import Image from "next/image";
import ContactTopBar from "./TopBar";

// Helper function to turn "Learner Management" into "learner-management"
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") 
    .replace(/(^-|-$)/g, ""); 
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null); // <-- Added state for desktop menus
  
  // ✅ ADD THIS INSTEAD (Right under your pathname declaration)
const pathname = usePathname();
const [prevPathname, setPrevPathname] = useState(pathname);

if (pathname !== prevPathname) {
  // 1. Update the tracker so this only runs once per route change
  setPrevPathname(pathname); 
  
  // 2. Reset your menus
  setIsMobileMenuOpen(false);
  setActiveMobileDropdown(null);
  setActiveDesktopMenu(null);
}

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Immediate close handler for clicks
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
    setActiveDesktopMenu(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  return (
    <>
      <ContactTopBar />

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo */}
          <Link href="/" onClick={handleLinkClick} className="flex h-full items-center gap-2 relative z-50">
            <Image 
              src="/BitmosColored.png"
              width={200} 
              height={100}
              alt="Bitmos Technologies Ltd Logo"
              className="h-8 w-auto object-contain" 
              priority 
            />
          </Link>

          {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
          <nav className="hidden h-full lg:flex items-center gap-2">
            <div className="flex h-full items-center">
              <Link href="/what-we-do" onClick={handleLinkClick} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">What We Do</Link>
            </div>
            
            {/* 1. SOLUTIONS MEGA MENU (State Controlled) */}
            <div 
              className="flex h-full items-center"
              onMouseEnter={() => setActiveDesktopMenu('solutions')}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeDesktopMenu === 'solutions' ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                Solutions
                <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${activeDesktopMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute left-0 top-16 w-full border-b border-slate-200 bg-white shadow-xl transition-all duration-200 ease-out ${activeDesktopMenu === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-[1.3fr_2.2fr_1.8fr_1.7fr] gap-8 py-8">
                    
                    {/* Core Systems */}
                    <div className="flex flex-col border-r border-slate-100 pr-8">
                      <span className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Core Systems</span>
                      <div className="flex flex-col gap-3">
                        {["Enterprise ERP", "Learner Management", "Financial Tech"].map((item, i) => (
                          <Link key={i} href={`/solutions/${generateSlug(item)}`} onClick={handleLinkClick} className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-50 border border-slate-100 text-slate-500"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round"/></svg></div>
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Engineering Services */}
                    <div className="flex flex-col border-r border-slate-100 pr-8">
                    <span className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Our Services</span>

                      <div className="flex flex-col gap-3">
                        {[
                          "Enterprise Web Platforms", 
                          "Native Mobile Engineering", 
                          "Technical SEO & Performance", 
                          "Bespoke System Architecture",
                          "Applied AI & Machine Learning", 
                        ].map((item, i) => (
                          <Link 
                            key={i} 
                            href={`/services/${generateSlug(item)}`} 
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
                          >
                            <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-slate-50 border border-slate-100 text-slate-500 shrink-0">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                            </div>
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Security & Data */}
                    <div className="flex flex-col border-r border-slate-100 pr-8">
                      <span className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Security & Data</span>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        {["Data Analytics", "Pen Testing", "AI Integrations", "System Audits"].map((item, i) => (
                          <Link key={i} href={`/solutions/${generateSlug(item)}`} onClick={handleLinkClick} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>{item}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Video Promo */}
                    <div className="flex flex-col pl-2">
                      <div className="group/card relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                        <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                          <video autoPlay loop muted playsInline className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105" poster="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80">
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screens-and-code-2173-large.mp4" type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
                        </div>
                        <div className="flex grow flex-col justify-between p-5">
                          <div>
                            <p className="font-heading text-lg font-bold leading-tight text-slate-900">See Bitmos in action.</p>
                            <p className="mt-2 text-xs text-slate-500 leading-relaxed">Watch how our platforms streamline workflows.</p>
                          </div>
                          <Link href="/demo" onClick={handleLinkClick} className="mt-4 flex w-fit items-center text-sm font-semibold text-blue-600 hover:text-blue-700">Watch Demo <span className="ml-1 transition-transform group-hover/card:translate-x-1">&rarr;</span></Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 2. SECTORS MEGA MENU */}
            <div className="flex h-full items-center">
              <Link href="/sectors" onClick={handleLinkClick} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Sectors</Link>
            </div>

            {/* 3. RESOURCES MEGA MENU (State Controlled) */}
            <div 
              className="flex h-full items-center"
              onMouseEnter={() => setActiveDesktopMenu('resources')}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeDesktopMenu === 'resources' ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                Resources
                <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${activeDesktopMenu === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute left-0 top-16 w-full border-b border-slate-200 bg-white shadow-xl transition-all duration-200 ease-out ${activeDesktopMenu === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-[1fr_1fr_1fr_1.5fr] gap-8 py-8">
                    <div className="flex flex-col border-r border-slate-100 pr-8">
                      <span className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Learn</span>
                      {["Technical Blog", "Executive Guides", "Events"].map((item, i) => (
                        <Link key={i} href={`/resources/${generateSlug(item)}`} onClick={handleLinkClick} className="mb-3 text-sm font-medium text-slate-700 hover:text-blue-600">{item}</Link>
                      ))}
                    </div>
                    <div className="flex flex-col border-r border-slate-100 pr-8">
                      <span className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Developers</span>
                      {["Documentation", "API Reference", "System Status"].map((item, i) => (
                        <Link key={i} href={`/resources/${generateSlug(item)}`} onClick={handleLinkClick} className="mb-3 text-sm font-medium text-slate-700 hover:text-blue-600">{item}</Link>
                      ))}
                    </div>
                    <div className="flex flex-col border-r border-slate-100 pr-8">
                      <span className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Company</span>
                      <Link href="/about-us" onClick={handleLinkClick} className="mb-3 text-sm font-medium text-slate-700 hover:text-blue-600">About Us</Link>
                      <Link href="/careers" onClick={handleLinkClick} className="mb-3 text-sm font-medium text-slate-700 hover:text-blue-600">Careers</Link>
                      <Link href="/contact-us" onClick={handleLinkClick} className="text-sm font-medium text-slate-700 hover:text-blue-600">Contact Us</Link>
                    </div>
                    <div className="flex flex-col pl-2">
                      <div className="group/report relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                        <div className="relative h-28 w-full overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" alt="Tech Report Cover" className="h-full w-full object-cover transition-transform duration-700 group-hover/report:scale-105" />
                          <div className="absolute top-2 left-2 rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">New Report</div>
                        </div>
                        <div className="flex grow flex-col justify-between p-4 bg-slate-50/50">
                          <div>
                            <h4 className="font-heading font-semibold text-slate-900 group-hover/report:text-blue-600 transition-colors">2026 Enterprise Cloud State</h4>
                            <p className="mt-1 text-xs text-slate-500 leading-relaxed">Discover the latest trends in infrastructure scaling and zero-trust security models.</p>
                          </div>
                          <Link href="/resources/reports/2026-enterprise-cloud-state" onClick={handleLinkClick} className="mt-3 flex w-fit items-center rounded-md bg-white border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
                            <svg className="mr-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download Free
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full items-center">
              <Link href="/case-studies" onClick={handleLinkClick} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">Case Studies</Link>
            </div>
          </nav>

          {/* --- DESKTOP CTA & MOBILE TOGGLE --- */}
          <div className="flex items-center gap-4 relative z-[60]">
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact-us" onClick={handleLinkClick} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">Start a Project</Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              className={`lg:hidden p-2 -mr-2 rounded-md transition-colors ${isMobileMenuOpen ? "text-white hover:bg-slate-800" : "text-slate-600 hover:bg-slate-50"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* --- MOBILE NAVIGATION --- */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0B1120] overflow-y-auto lg:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto [clip-path:circle(150%_at_calc(100%-2rem)_2rem)]" 
            : "opacity-0 pointer-events-none [clip-path:circle(0%_at_calc(100%-2rem)_2rem)]"
        }`}
      >
        <div className="flex flex-col px-6 pt-[100px] pb-24 gap-2 relative z-10 min-h-screen">

          <Link href="/what-we-do" onClick={handleLinkClick} className="py-4 text-xl font-heading font-bold text-white border-b border-slate-800/60 hover:text-amber-400 transition-colors">
            What We Do
          </Link>
          
          {/* Mobile Solutions Accordion */}
          <div className="border-b border-slate-800/60">
            <button 
              onClick={() => toggleMobileDropdown("solutions")}
              className={`flex w-full items-center justify-between py-4 text-xl font-heading font-bold transition-colors ${activeMobileDropdown === "solutions" ? "text-amber-400" : "text-white"}`}
            >
              Solutions
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeMobileDropdown === "solutions" ? "rotate-180 text-amber-400" : "text-slate-500"}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeMobileDropdown === "solutions" ? "max-h-[1000px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col gap-5 pl-4 border-l border-slate-800 ml-2 pt-2">
                
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Core Systems</span>
                  {["Enterprise ERP", "Learner Management", "Financial Tech"].map((item, i) => (
                    <Link key={i} href={`/solutions/${generateSlug(item)}`} onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">{item}</Link>
                  ))}
                </div>
                
                <div className="flex flex-col gap-3 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Infrastructure</span>
                  {["Cloud Migration", "Serverless Architecture", "Database Scaling"].map((item, i) => (
                    <Link key={i} href={`/solutions/${generateSlug(item)}`} onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">{item}</Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Security & Data</span>
                  {["Threat Detection", "Data Analytics", "Compliance (GDPR)", "Pen Testing"].map((item, i) => (
                    <Link key={i} href={`/solutions/${generateSlug(item)}`} onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">{item}</Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Mobile Sectors Accordion */}
          <Link href="/sectors" onClick={handleLinkClick} className="py-4 text-xl font-heading font-bold text-white border-b border-slate-800/60 hover:text-amber-400 transition-colors">
            Sectors
          </Link>

          {/* Mobile Resources Accordion */}
          <div className="border-b border-slate-800/60">
            <button 
              onClick={() => toggleMobileDropdown("resources")}
              className={`flex w-full items-center justify-between py-4 text-xl font-heading font-bold transition-colors ${activeMobileDropdown === "resources" ? "text-amber-400" : "text-white"}`}
            >
              Resources
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${activeMobileDropdown === "resources" ? "rotate-180 text-amber-400" : "text-slate-500"}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeMobileDropdown === "resources" ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex flex-col gap-5 pl-4 border-l border-slate-800 ml-2 pt-2">
                
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Learn</span>
                  {["Technical Blog", "Executive Guides", "Live Webinars"].map((item, i) => (
                    <Link key={i} href={`/resources/${generateSlug(item)}`} onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">{item}</Link>
                  ))}
                </div>
                
                <div className="flex flex-col gap-3 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Developers</span>
                  {["Documentation", "API Reference", "System Status"].map((item, i) => (
                    <Link key={i} href={`/resources/${generateSlug(item)}`} onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">{item}</Link>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Company</span>
                  <Link href="/about-us" onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">About Us</Link>
                  <Link href="/careers" onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">Careers</Link>
                  <Link href="/contact-us" onClick={handleLinkClick} className="text-[15px] font-medium text-slate-300 hover:text-amber-400">Contact Us</Link>
                </div>

              </div>
            </div>
          </div>

          <Link href="/case-studies" onClick={handleLinkClick} className="py-4 text-xl font-heading font-bold text-white border-b border-slate-800/60 hover:text-amber-400 transition-colors">
            Case Studies
          </Link>

          {/* Mobile CTA */}
          <div className="mt-10">
            <Link 
              href="/contact-us" 
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 text-base font-bold text-[#0B1120] shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:bg-amber-300 active:scale-95 transition-all uppercase tracking-widest"
            >
              <CalendarPlus className="h-5 w-5" />
              Book Consultation
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}