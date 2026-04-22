"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import EngineeringMotion from "@/src/components/About/EngineeringMotion";
import ConnectedTeam from "@/src/components/About/Team";
import AboutExtended from "@/src/components/About/Principles";
import AnchorTestimonial from "@/src/components/About/Testimonials";
import GlobalEdgeNetwork from "@/src/components/About/GlobalEdge";
import FinalCTA from '@/src/components/Home/FinalCTA';
import Capabilities from "@/src/components/Home/Capabilities";
import CapabilitiesBento from "@/src/components/About/Capabilities";
import AboutHero from "@/src/components/About/AboutHero";
import ArchitectureGrid from "@/src/components/About/Capabilities";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const TEAM_MEMBERS = [
  {
    name: "Moses Chengo",
    role: "Co-Founder & Chief Architect",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Brian Oroni",
    role: "Co-Founder & Head of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Martin Lenga",
    role: "Co-Founder & Data Strategy Lead",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

export default function AboutCleanGrid() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Hero Text Reveal
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }
      );

      // 2. Team Grid Staggered Reveal
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid-section",
            start: "top 75%",
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <main ref={container} className="bg-[#FAFAFA] font-sans text-slate-900 overflow-hidden min-h-screen">
      
      <AboutHero />

      <AboutExtended />

      <ConnectedTeam />
      <GlobalEdgeNetwork />
      <ArchitectureGrid />


      <AnchorTestimonial />

      <EngineeringMotion />
      <FinalCTA />
    </main>
  );
}