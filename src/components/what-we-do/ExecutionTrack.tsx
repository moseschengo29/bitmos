import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";


const METHODOLOGY = [
    {
      phase: "Phase 01",
      name: "System Diagnostic",
      text: "We do not guess. We deploy senior architects to audit your existing codebase, map infrastructure bottlenecks, and identify critical technical debt before a single line of code is written."
    },
    {
      phase: "Phase 02",
      name: "Blueprint & Schema",
      text: "Strict architectural mapping. We design the database schemas, define the microservice boundaries, and establish the exact CI/CD deployment pipelines required for zero-downtime execution."
    },
    {
      phase: "Phase 03",
      name: "High-Velocity Build",
      text: "Agile, full-stack development governed by rigorous peer-review and automated testing. We build in isolated VPC environments, ensuring absolute security and rapid iteration cycles."
    },
    {
      phase: "Phase 04",
      name: "Global Deployment",
      text: "Orchestrated rollouts using blue/green deployment strategies. We push your platform to the edge, utilizing multi-region clustering to guarantee sub-50ms latency worldwide."
    }
  ];

gsap.registerPlugin(useGSAP, ScrollTrigger);


export function ExecutionTrack() {
    const container = useRef<HTMLElement>(null);
  
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
  
      tl.fromTo(".exec-title", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "expo.out" });
      tl.fromTo(".exec-phase", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "expo.out" }, "-=0.6");
    }, { scope: container });
  
    return (
      <section ref={container} className="w-full bg-[#FAFAFA] py-24 md:py-32 font-sans border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-1/3 shrink-0">
              <div className="sticky top-32">
                <span className="exec-title text-[10px] font-bold tracking-[0.2em] uppercase text-blue-600 block mb-6">
                  Methodology
                </span>
                <h3 className="exec-title text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
                  Deterministic <br/> Execution.
                </h3>
                <p className="exec-title text-lg text-slate-500 font-medium leading-relaxed max-w-sm mb-10">
                  We do not believe in agile chaos. We believe in strict architectural planning, unyielding code standards, and flawless deployment physics.
                </p>
                
                <div className="exec-title h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                  <MoveRight className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>
            </div>
  
            <div className="lg:w-2/3 flex flex-col border-l border-slate-200">
              {METHODOLOGY.map((item, index) => (
                <div key={index} className="exec-phase relative pl-10 md:pl-16 pb-20 md:pb-32 group">
                  
                  {/* Timeline Node */}
                  <div className="absolute top-0 left-[-5px] h-2.5 w-2.5 bg-slate-200 rounded-full group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-500"></div>
  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-1/3 shrink-0">
                       <span className="text-sm font-bold tracking-[0.1em] text-slate-400 block mb-2 group-hover:text-blue-600 transition-colors duration-300">
                         {item.phase}
                       </span>
                       <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                         {item.name}
                       </h4>
                    </div>
                    <div className="md:w-2/3">
                       <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                         {item.text}
                       </p>
                    </div>
                  </div>
  
                </div>
              ))}
            </div>
  
          </div>
        </div>
      </section>
    );
  }