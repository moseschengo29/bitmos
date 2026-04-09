"use client";


import SolutionsMatrix from "@/src/components/Home/SolutionsMatrix";
import { ExecutionTrack } from "@/src/components/what-we-do/ExecutionTrack";
import { KineticCapabilities } from "@/src/components/what-we-do/KineticCapabilities";
import KineticTimeline from "@/src/components/what-we-do/KineticTimeline";
import FinalCTA from '@/src/components/Home/FinalCTA';
import { FAQSection } from "@/src/components/FAQSection";

export const SERVICES_FAQS = [
  {
    question: "Are your architectures bound to specific cloud providers or vendor lock-ins?",
    answer: "No. We engineer cloud-agnostic, containerized architectures. While we heavily utilize AWS for its robust global infrastructure, our strict adherence to Kubernetes, Docker, and Terraform ensures your platform can be migrated or deployed across multi-cloud environments without systemic rewrites."
  },
  {
    question: "How do you handle massive data migrations without interrupting current operations?",
    answer: "We execute migrations using dual-write systems and real-time event streaming (e.g., Apache Kafka). This allows your legacy databases to run concurrently with our newly architected data lakes. Once cryptographic data integrity is mathematically verified across all records, we execute a seamless DNS cutover with absolute zero downtime."
  },
  {
    question: "How is regulatory compliance (SOC2, HIPAA, GDPR) integrated into your engineering?",
    answer: "Compliance is mathematically enforced at the architectural level. We do not rely on standard perimeter defense. Instead, we implement strict VPC isolation, mutual TLS (mTLS) between all internal microservices, and cryptographic audit logging. This 'Zero-Trust' baseline ensures regulatory compliance is a native byproduct of the system."
  },
  {
    question: "Do you utilize pre-built SaaS platforms or white-label solutions?",
    answer: "Never. We build bespoke, proprietary enterprise systems from the ground up. Relying on fractured SaaS subscriptions creates uncontrollable technical debt and massive security vulnerabilities. We engineer systems where you own 100% of the intellectual property, custom APIs, and operational logic."
  },
  {
    question: "What happens post-deployment? Do you provide ongoing infrastructure support?",
    answer: "We do not simply ship and abandon. Post-deployment, we offer stringent Service Level Agreement (SLA) retainers. This includes continuous CI/CD pipeline monitoring, automated security patching, active threat mitigation, and proactive edge-latency optimization to guarantee our 99.99% uptime metric remains unbroken."
  }
];



export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <KineticCapabilities />
      <SolutionsMatrix />
      <ExecutionTrack />
      <KineticTimeline />
      <FAQSection
        faqs={SERVICES_FAQS} 
        subtitle="What We Do FAQ"
        title="Technical specifications and operational guarantees."
      />
      <FinalCTA />
      
    </main>
  );
}