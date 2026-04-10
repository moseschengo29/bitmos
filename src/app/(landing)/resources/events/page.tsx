"use client";

import React, { useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  Radio, 
  ArrowUpRight,
  Plus,
  Minus,
  CalendarDays,
  ChevronLeft,   
  ChevronRight,
  List,          
  LayoutGrid,    
  PlayCircle,
  Clock,
  Filter,
  Terminal
} from "lucide-react";
import EnterpriseCTA from "@/src/components/Home/FinalCTA"; 

gsap.registerPlugin(useGSAP, ScrollTrigger);


const CATEGORIES = ["All Briefings", "Masterclass", "Global Summit", "Technical Panel"];

const MASTER_AGENDA = [
  {
    id: "EVT-089",
    isoDate: "2026-10-14",
    title: "The Zero-Downtime Summit.",
    type: "Global Summit",
    status: "INVITE ONLY",
    desc: "An exclusive summit for Lead Architects. We deconstruct the architectural physics behind handling 1M+ concurrent users, multi-region database clustering, and the absolute elimination of single points of failure.",
    location: "Nairobi, KE // Global Broadcast",
    speaker: "Bitmos Core Architecture Team",
    time: "09:00 - 18:00 EAT",
    color: "bg-slate-900"
  },
  {
    id: "EVT-084",
    isoDate: "2026-10-08",
    title: "Zero-Trust VPCs: Beyond Perimeter Defense.",
    type: "Masterclass",
    status: "OPEN REGISTRATION",
    desc: "A hands-on masterclass on implementing mutual TLS (mTLS), strict micro-segmentation, and cryptographically verified internal networks. We will live-code a secure mesh.",
    location: "Virtual Secure Broadcast",
    speaker: "Head of Infrastructure",
    time: "14:00 - 16:00 EAT",
    color: "bg-blue-600"
  },
  {
    id: "EVT-085",
    isoDate: "2026-10-22",
    title: "High-Frequency Matching in Rust.",
    type: "Technical Panel",
    status: "OPEN REGISTRATION",
    desc: "A deep technical panel on eliminating garbage collection pauses and achieving sub-10ms latency in financial ledger systems. Comparing Go vs. Rust in high-stakes environments.",
    location: "Virtual Secure Broadcast",
    speaker: "Lead Backend Architect",
    time: "16:00 - 17:30 EAT",
    color: "bg-emerald-600"
  },
  {
    id: "EVT-086",
    isoDate: "2026-11-05", 
    title: "The Physics of Edge-Native Commerce.",
    type: "Masterclass",
    status: "WAITLIST",
    desc: "How to push compute and caching to global edge nodes to guarantee sub-50ms latency during massive, unpredictable traffic spikes without invalidating cache prematurely.",
    location: "Bitmos HQ // Virtual Overlay",
    speaker: "Director of Engineering",
    time: "10:00 - 12:00 EAT",
    color: "bg-blue-600"
  }
];

const ARCHIVED_BRIEFINGS = [
  {
    id: "REC-042",
    title: "Scaling PostgreSQL to 10B Rows",
    desc: "A live tear-down of our dual-write migration strategy. No downtime, absolute data integrity.",
    speaker: "Lead Data Architect",
    duration: "45:20",
  },
  {
    id: "REC-041",
    title: "Post-Mortem: The 2025 Outage",
    desc: "A transparent look into a catastrophic cascading failure, and the circuit breakers we built to prevent it.",
    speaker: "Director of Engineering",
    duration: "52:10",
  }
];

const formatUIDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
};

export default function EventsPage() {
  const container = useRef<HTMLElement>(null);
  
  const [expandedId, setExpandedId] = useState<string | null>(MASTER_AGENDA[0].id);
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list"); 
  const [activeCategory, setActiveCategory] = useState("All Briefings");
  
  const [currentDate, setCurrentDate] = useState(new Date(2026, 9, 1)); // Month is 0-indexed (9 = Oct)

  const filteredAgenda = useMemo(() => {
    let filtered = MASTER_AGENDA;
    if (activeCategory !== "All Briefings") {
      filtered = filtered.filter(event => event.type.toLowerCase() === activeCategory.toLowerCase());
    }
    return filtered.sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime());
  }, [activeCategory]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const emptyDaysPrefix = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; 
  
  const totalGridCells = Math.ceil((daysInMonth + emptyDaysPrefix) / 7) * 7;

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToday = () => {
    // In a real app, this would be new Date(). 
    // Setting to Oct 2026 so the mock data stays visible.
    setCurrentDate(new Date(2026, 9, 1)); 
  };

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();

  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-word", 
      { opacity: 0, y: 100, rotate: 5 }, 
      { opacity: 1, y: 0, rotate: 0, duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
    tl.fromTo(".hero-meta", 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 }, 
      "-=0.5"
    );

    gsap.fromTo(".archive-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out",
        scrollTrigger: {
          trigger: ".archive-trigger",
          start: "top 75%"
        }
      }
    );
  }, { scope: container });

  useGSAP(() => {
    if (viewMode === "list") {
      gsap.fromTo(".agenda-row",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out", clearProps: "all" }
      );
    }
  }, { scope: container, dependencies: [viewMode, activeCategory] });

  return (
    <main ref={container} className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      

      <div className="w-full border-b border-slate-200 bg-white overflow-hidden py-4 pt-24 md:pt-32">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              <span className="flex items-center gap-2"><Radio className="h-3 w-3 text-blue-600" /> LIVE BROADCASTS</span>
              <span>--</span>
              <span>Nairobi</span>
              <span>--</span>
              <span>London</span>
              <span>--</span>
              <span>New York</span>
              <span>--</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pt-20 pb-24 md:pb-32">
        
        {/* ========================================== */}
        {/* 2. BRUTALIST HERO & TOGGLE CONTROLS        */}
        {/* ========================================== */}
        <div className="mb-12 md:mb-16">
          <h1 className="flex flex-col text-[60px] md:text-[100px] lg:text-[130px] font-black tracking-tighter leading-[0.85] uppercase overflow-hidden">
            <div className="overflow-hidden pb-4"><span className="hero-word inline-block">Global</span></div>
            <div className="overflow-hidden pb-4"><span className="hero-word inline-block text-slate-900">Briefings</span></div>
          </h1>
          
          <div className="hero-meta mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-xl text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              Join our lead architects for rigorous, deep-technical sessions. We dissect complex system designs, live infrastructure migrations, and scaling physics.
            </p>

            <div className="flex items-center bg-white border border-slate-200 p-1.5 rounded-sm shrink-0 shadow-sm">
              <button 
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-sm ${viewMode === "list" ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"}`}
              >
                <List className="h-4 w-4" /> Ledger
              </button>
              <button 
                onClick={() => setViewMode("calendar")}
                className={`flex items-center gap-2 px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-sm ${viewMode === "calendar" ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"}`}
              >
                <LayoutGrid className="h-4 w-4" /> Matrix
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="hero-meta flex flex-wrap items-center gap-2 mb-12">
          <Filter className="h-4 w-4 text-slate-400 mr-2 hidden md:block" />
          {CATEGORIES.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] font-mono font-bold tracking-widest uppercase border transition-colors rounded-sm ${activeCategory === cat ? 'bg-slate-900 text-white border-slate-900' : 'bg-transparent text-slate-500 border-slate-200 hover:border-slate-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          
          {viewMode === "list" && (
            <motion.section 
              key="list-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="agenda-container border-t-2 border-slate-900"
            >
              <div className="hidden md:flex items-center px-6 py-4 border-b border-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                <div className="w-[15%]">Date</div>
                <div className="w-[15%]">Type</div>
                <div className="w-[50%]">Briefing Subject</div>
                <div className="w-[20%] text-right">Status</div>
              </div>

              <div className="flex flex-col">
                {filteredAgenda.map((event) => {
                  const isOpen = expandedId === event.id;
                  const uiDate = formatUIDate(event.isoDate);

                  return (
                    <div key={event.id} className="agenda-row border-b border-slate-300 bg-white group transition-colors">
                      <div 
                        onClick={() => setExpandedId(prev => prev === event.id ? null : event.id)}
                        className={`flex flex-col md:flex-row md:items-center px-6 py-8 md:py-12 cursor-pointer transition-colors ${isOpen ? 'bg-slate-50' : 'hover:bg-[#FAFAFA]'}`}
                      >
                        <div className="flex md:hidden items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
                          <span className="text-blue-600">{uiDate}</span>
                          <span>//</span>
                          <span>{event.type}</span>
                        </div>

                        <div className="hidden md:block w-[15%] text-xs font-bold tracking-widest text-blue-600">{uiDate}</div>
                        <div className="hidden md:block w-[15%] text-xs font-bold tracking-widest uppercase text-slate-400">{event.type}</div>

                        <div className="w-full md:w-[50%] pr-4">
                          <h2 className={`text-3xl md:text-5xl font-black tracking-tighter transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-slate-600'}`}>
                            {event.title}
                          </h2>
                        </div>

                        <div className="w-full md:w-[20%] flex items-center justify-between md:justify-end mt-6 md:mt-0">
                          <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 border rounded-sm ${
                            event.status === 'INVITE ONLY' ? 'border-slate-900 text-slate-900' : 
                            event.status === 'WAITLIST' ? 'border-orange-500 text-orange-500 bg-orange-50' : 
                            'border-emerald-500 text-emerald-600 bg-emerald-50'
                          }`}>
                            {event.status}
                          </span>
                          <div className="md:ml-8 h-10 w-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:border-slate-900 transition-all">
                            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden bg-slate-50"
                          >
                            <div className="px-6 py-12 md:py-16 md:pl-[30%] pr-6 border-t border-slate-200 flex flex-col xl:flex-row gap-12 xl:gap-24">
                              <div className="flex-grow max-w-2xl">
                                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6">Briefing Overview</h3>
                                <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{event.desc}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                                  <div>
                                    <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">Lead Speaker</span>
                                    <span className="text-sm font-bold text-slate-900">{event.speaker}</span>
                                  </div>
                                  <div>
                                    <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">Duration</span>
                                    <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                      <CalendarDays className="h-4 w-4 text-blue-600" /> {event.time}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="xl:w-[350px] shrink-0">
                                <div className="bg-white border border-slate-200 p-8 shadow-xl">
                                  <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-6">Coordinates</span>
                                  <div className="flex items-start gap-4 mb-8">
                                    <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                                    <span className="text-sm font-bold text-slate-900 leading-tight">{event.location}</span>
                                  </div>
                                  <button className="w-full py-4 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 group">
                                    {event.status === 'INVITE ONLY' ? 'Request Invite' : 'Secure Spot'}
                                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {filteredAgenda.length === 0 && (
                  <div className="py-24 text-center border-b border-slate-300 bg-white">
                    <Terminal className="h-8 w-8 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">No briefings found.</h3>
                    <p className="text-sm text-slate-500">Adjust your filters to see more results.</p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {viewMode === "calendar" && (
            <motion.section 
              key="calendar-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-t-2 border-slate-900 pt-16 md:pt-24 pb-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 px-6 lg:px-0">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-blue-600 mb-4 block">Schedule Matrix</span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">{monthName}</h2>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={prevMonth} className="h-12 w-12 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all rounded-sm">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={nextMonth} className="h-12 w-12 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all rounded-sm">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button onClick={goToday} className="hidden md:flex h-12 px-6 border border-slate-200 items-center justify-center text-xs font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all rounded-sm">
                    Oct 2026 Focus
                  </button>
                </div>
              </div>

              <div className="w-full border-t border-l border-slate-200">
                <div className="grid grid-cols-7 bg-[#FAFAFA]">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
                    <div key={day} className={`py-4 px-2 md:px-4 border-b border-r border-slate-200 text-[9px] md:text-[10px] font-mono font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase ${i >= 5 ? 'text-slate-400' : 'text-slate-900'}`}>
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {Array.from({ length: totalGridCells }).map((_, index) => {
                    const dayNumber = index + 1 - emptyDaysPrefix;
                    const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth;
                    const isWeekend = (index % 7 === 5) || (index % 7 === 6);
                    
                    // Find if any filtered event matches this exact day
                    const event = isValidDay ? filteredAgenda.find(evt => {
                      const evtDate = new Date(evt.isoDate);
                      return evtDate.getFullYear() === year && 
                             evtDate.getMonth() === month && 
                             evtDate.getDate() === dayNumber;
                    }) : null;

                    return (
                      <div 
                        key={index} 
                        className={`min-h-[120px] md:min-h-[160px] lg:min-h-[180px] border-b border-r border-slate-200 p-2 md:p-4 flex flex-col transition-colors ${
                          !isValidDay ? 'bg-[#FAFAFA]' : 
                          isWeekend ? 'bg-slate-50/50' : 
                          'bg-white hover:bg-blue-50/30 cursor-pointer group'
                        }`}
                      >
                        {isValidDay && (
                          <>
                            <span className={`text-sm md:text-base font-bold mb-2 ${isWeekend ? 'text-slate-400' : 'text-slate-900 group-hover:text-blue-600 transition-colors'}`}>
                              {dayNumber.toString().padStart(2, '0')}
                            </span>
                            
                            {event && (
                              <div className="mt-auto flex flex-col gap-1 w-full">
                                <div className="hidden md:block w-full h-1 mb-1">
                                   <div className={`w-full h-full ${event.color}`} />
                                </div>
                                <span className={`text-[7px] md:text-[9px] font-mono font-bold tracking-widest uppercase truncate ${event.color.replace('bg-', 'text-')}`}>
                                  {event.type}
                                </span>
                                <span className="text-[10px] md:text-xs lg:text-sm font-bold text-slate-900 leading-tight line-clamp-2 md:line-clamp-3">
                                  {event.title}
                                </span>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

     <section className="archive-trigger bg-white py-24 md:py-32 border-t border-slate-200 text-black relative overflow-hidden">
             
             <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
               
               <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                     <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 block">Decrypted Briefings</span>
                     <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black">The Video Archive.</h2>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors group">
                     Access Full Vault <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
     
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {ARCHIVED_BRIEFINGS.map((briefing) => (
                   <div key={briefing.id} className="archive-card group cursor-pointer border border-slate-800 bg-[#121C34] flex flex-col">
                     
                     {/* Video Placeholder Container */}
                     <div className="relative aspect-video w-full bg-slate-900 border-b border-slate-800 overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/80 group-hover:scale-105 transition-transform duration-700" />
                       
                       {/* Mock Technical Grid inside video */}
                       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '2rem 2rem' }} />
                       
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                             <PlayCircle className="h-8 w-8 text-white ml-1" />
                          </div>
                       </div>
                       
                       <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-sm flex items-center gap-2">
                          <Clock className="h-3 w-3 text-slate-400" />
                          <span className="text-[10px] font-bold text-white tracking-widest">{briefing.duration}</span>
                       </div>
                     </div>
     
                     {/* Info Container */}
                     <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-500">[{briefing.id}]</span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-blue-400 transition-colors">
                          {briefing.title}
                        </h3>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8 line-clamp-2">
                          {briefing.desc}
                        </p>
                        <div className="mt-auto pt-6 border-t border-slate-800">
                          <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-1">Speaker</span>
                          <span className="text-sm font-bold text-slate-300">{briefing.speaker}</span>
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
     
             </div>
           </section>

      <EnterpriseCTA />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </main>
  );
}