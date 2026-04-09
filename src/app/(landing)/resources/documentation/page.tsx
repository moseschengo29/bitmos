"use client";

import React, { useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Terminal, 
  BookOpen, 
  Key, 
  Database, 
  Activity, 
  Copy, 
  Check,
  ChevronRight,
  ShieldAlert,
  Code2,
  Menu,
  X
} from "lucide-react";

// ==========================================
// FULL DATA PAYLOAD (MOCK CMS)
// ==========================================
const SIDEBAR_NAV = [
  {
    group: "GETTING STARTED",
    items: [
      { id: "quickstart", label: "Quickstart Guide", icon: Terminal },
      { id: "auth", label: "Authentication", icon: Key },
    ]
  },
  {
    group: "CORE APIs",
    items: [
      { id: "ledger", label: "Ledger API", icon: Database },
      { id: "events", label: "Event Webhooks", icon: Activity },
    ]
  }
];

// The actual content mapped by the sidebar ID
const DOCS_DATA: Record<string, any> = {
  quickstart: {
    title: "Quickstart Guide",
    badge: "INITIALIZATION",
    desc: "Get up and running with the Bitmos Enterprise API in under 5 minutes. This guide covers sandbox initialization, basic authentication, and making your first test ledger entry.",
    sections: [
      {
        id: "install",
        title: "1. Install the SDK",
        desc: "While you can interact with our API using raw HTTP requests, we strongly recommend using our official, mathematically verified SDKs for automatic retry logic and payload signing.",
        code: {
          request: `# Node.js / TypeScript
npm install @bitmos/enterprise-sdk

# Python
pip install bitmos-enterprise

# Rust
cargo add bitmos-sdk`,
          response: null
        }
      },
      {
        id: "init",
        title: "2. Initialize the Client",
        desc: "Initialize the client using your sandbox API keys. Never commit these keys to version control. Use environment variables.",
        code: {
          request: `import { BitmosClient } from '@bitmos/enterprise-sdk';

const bitmos = new BitmosClient({
  apiKey: process.env.BITMOS_SECRET_KEY,
  environment: 'sandbox', // Use 'production' for live systems
  maxRetries: 3
});`,
          response: null
        }
      }
    ]
  },
  auth: {
    title: "Authentication",
    badge: "SECURITY",
    desc: "Every request to the Bitmos API requires cryptographic authentication. We use Bearer tokens for standard REST calls and Mutual TLS (mTLS) for high-frequency WebSocket streams.",
    sections: [
      {
        id: "bearer",
        title: "Bearer Token Authentication",
        desc: "Pass your secret API key in the Authorization header. All API requests must be made over HTTPS. Calls made over plain HTTP will fail.",
        code: {
          request: `curl https://api.bitmos.dev/v2/status \\
  -H "Authorization: Bearer sk_test_51Nx..."`,
          response: `{
  "authenticated": true,
  "environment": "sandbox",
  "permissions": ["ledger:write", "events:read"]
}`
        }
      }
    ]
  },
  ledger: {
    title: "Ledger API",
    badge: "v2.0 // STABLE",
    desc: "The Ledger API provides a mathematically proven, append-only cryptographic ledger. It is designed for high-frequency transaction recording with absolute state integrity.",
    sections: [
      {
        id: "append-entry",
        method: "POST",
        path: "/v2/ledger/append",
        title: "Append Ledger Entry",
        desc: "Appends a new immutable transaction to the specified ledger partition. This endpoint operates synchronously and guarantees ACID compliance before returning a 200 OK.",
        params: [
          { name: "idempotency_key", type: "string", required: true, desc: "A unique UUIDv4 to prevent replay attacks and duplicate entries." },
          { name: "amount", type: "integer", required: true, desc: "The transaction amount in the lowest currency denomination (e.g., cents)." },
          { name: "currency", type: "string", required: true, desc: "ISO 4217 currency code (e.g., USD, EUR)." },
          { name: "destination_node", type: "string", required: true, desc: "The cryptographic identifier of the receiving account." }
        ],
        code: {
          request: `curl -X POST https://api.bitmos.dev/v2/ledger/append \\
  -H "Authorization: Bearer sk_live_8a9b2..." \\
  -H "Idempotency-Key: 9b1deb4d-3b7d..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 45000,
    "currency": "USD",
    "destination_node": "node_99a8b7c6"
  }'`,
          response: `{
  "status": "success",
  "data": {
    "entry_id": "txn_88192aab",
    "ledger_hash": "e3b0c44298fc1c14...",
    "timestamp": "2026-04-05T13:24:00Z",
    "consensus_status": "VERIFIED"
  }
}`
        }
      },
      {
        id: "get-entry",
        method: "GET",
        path: "/v2/ledger/{entry_id}",
        title: "Retrieve an Entry",
        desc: "Fetches the details of a specific ledger entry. The response includes the cryptographic hash used for verifiable auditing.",
        params: [],
        code: {
          request: `curl -X GET https://api.bitmos.dev/v2/ledger/txn_88192aab \\
  -H "Authorization: Bearer sk_live_8a9b2..."`,
          response: `{
  "status": "success",
  "data": {
    "entry_id": "txn_88192aab",
    "amount": 45000,
    "currency": "USD",
    "destination_node": "node_99a8b7c6"
  }
}`
        }
      }
    ]
  },
  events: {
    title: "Event Webhooks",
    badge: "REAL-TIME",
    desc: "Listen for asynchronous events within the Bitmos ecosystem. Webhooks allow your systems to react instantly to ledger updates, compliance flags, and payout state changes.",
    sections: [
      {
        id: "verify-sig",
        title: "Verifying Webhook Signatures",
        desc: "We sign all webhook payloads using HMAC-SHA256. You must verify this signature before processing the event to prevent spoofing attacks.",
        code: {
          request: `import crypto from 'crypto';

const verifySignature = (payload, sigHeader, secret) => {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
    
  return hash === sigHeader;
};`,
          response: null
        }
      }
    ]
  }
};

export default function DocumentationPage() {
  const container = useRef<HTMLElement>(null);
  const [activeItem, setActiveItem] = useState("ledger");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter sidebar based on search
  const filteredNav = useMemo(() => {
    if (!searchTerm) return SIDEBAR_NAV;
    const lowerSearch = searchTerm.toLowerCase();
    
    return SIDEBAR_NAV.map(group => {
      const filteredItems = group.items.filter(item => 
        item.label.toLowerCase().includes(lowerSearch)
      );
      return { ...group, items: filteredItems };
    }).filter(group => group.items.length > 0);
  }, [searchTerm]);

  const activeDoc = DOCS_DATA[activeItem];

  useGSAP(() => {
    gsap.fromTo(".nav-item", 
      { opacity: 0, x: -10 }, 
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.1 }
    );
  }, { scope: container });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [id]: false });
    }, 2000);
  };

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-slate-200 sticky top-0 bg-[#FAFAFA] z-10">
        <div className="relative group focus-within:text-blue-600 transition-colors">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <input 
            type="text"
            placeholder="Search docs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 text-sm font-medium text-slate-900 rounded-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
          />
        </div>
      </div>

      <nav className="p-6">
        {filteredNav.length === 0 ? (
          <div className="text-sm text-slate-400 font-medium">No results found.</div>
        ) : (
          filteredNav.map((group, gIdx) => (
            <div key={gIdx} className="mb-8">
              <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">
                {group.group}
              </h4>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const isActive = activeItem === item.id;
                  const Icon = item.icon;
                  return (
                    <li key={item.id} className="nav-item">
                      <button 
                        onClick={() => {
                          setActiveItem(item.id);
                          setMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium transition-all rounded-sm ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                          {item.label}
                        </div>
                        {isActive && <ChevronRight className="h-3 w-3 text-blue-600" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </nav>
    </>
  );

  return (
    <main ref={container} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col border-t border-slate-200">
   
      {/* Mobile Header (Shows only on small screens) */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 bg-[#FAFAFA] sticky top-16 z-30">
        <span className="font-mono text-xs font-bold tracking-widest text-slate-500 uppercase">{activeDoc.title}</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 border border-slate-200 rounded-sm bg-white">
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative z-10 w-full min-w-0">
        
        {/* ========================================== */}
        {/* 1. LEFT SIDEBAR                            */}
        {/* ========================================== */}
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 lg:w-72 shrink-0 border-r border-slate-200 bg-[#FAFAFA] h-[calc(100vh-80px)] sticky top-20 overflow-y-auto custom-scrollbar z-20">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar (Overlay) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.aside 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="md:hidden fixed inset-y-0 left-0 w-4/5 max-w-sm bg-[#FAFAFA] border-r border-slate-200 z-50 pt-16 shadow-2xl overflow-y-auto"
            >
              <SidebarContent />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* ========================================== */}
        {/* 2. MAIN CONTENT AREA                       */}
        {/* ========================================== */}
        <div className="flex-1 w-full bg-white relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full pb-32"
            >
              
              {/* PAGE HEADER */}
              <div className="px-6 lg:px-12 xl:px-16 py-12 lg:py-20 border-b border-slate-200 max-w-[800px]">
                <span className="inline-block px-2.5 py-1 bg-slate-900 text-white text-[10px] font-mono font-bold tracking-widest uppercase mb-6 rounded-sm shadow-sm">
                  {activeDoc.badge}
                </span>
                <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-6">
                  {activeDoc.title}
                </h1>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  {activeDoc.desc}
                </p>
              </div>

              {/* DYNAMIC SECTIONS (Stripe Layout: Grid Cols 2) */}
              <div className="w-full">
                {activeDoc.sections.map((section: any, sIdx: number) => (
                  <div key={sIdx} className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8 px-6 lg:px-12 xl:px-16 py-16 border-b border-slate-100 last:border-0" id={section.id}>
                    
                    {/* LEFT SIDE: Text, Paths, Params */}
                    <div className="xl:pr-8">
                      {section.method && section.path && (
                        <div className="flex items-center gap-4 mb-6">
                          <span className={`px-2 py-1 text-[10px] font-mono font-bold tracking-widest rounded-sm uppercase ${section.method === 'POST' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                            {section.method}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-sm border border-slate-200">
                            {section.path}
                          </span>
                        </div>
                      )}

                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-base text-slate-600 font-medium leading-relaxed mb-10">
                        {section.desc}
                      </p>

                      {section.params && section.params.length > 0 && (
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-3 mb-4">
                            Parameters
                          </h3>
                          <div className="space-y-4">
                            {section.params.map((param: any, pIdx: number) => (
                              <div key={pIdx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4 border-b border-slate-100 last:border-0">
                                <div className="sm:w-1/3 shrink-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-mono text-sm font-bold text-slate-900">{param.name}</span>
                                    {param.required && <span className="text-[9px] font-bold uppercase text-red-500 bg-red-50 px-1.5 py-0.5 rounded-sm">Required</span>}
                                  </div>
                                  <span className="font-mono text-xs text-slate-400">{param.type}</span>
                                </div>
                                <div className="sm:w-2/3">
                                  <p className="text-sm text-slate-600 leading-relaxed">{param.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* RIGHT SIDE: Terminal / Code Blocks */}
                    <div className="relative xl:pl-8">
                      <div className="xl:sticky top-32 space-y-6">
                        
                        {/* Request Code Block */}
                        {section.code.request && (
                          <div className="rounded-md overflow-hidden border border-slate-800 bg-[#0B1121] shadow-2xl">
                            <div className="flex items-center justify-between px-4 py-3 bg-[#121c34] border-b border-slate-800">
                              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Request Example</span>
                              <button 
                                onClick={() => handleCopy(section.code.request, `${section.id}-req`)}
                                className="text-slate-500 hover:text-white transition-colors"
                              >
                                {copiedStates[`${section.id}-req`] ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                              </button>
                            </div>
                            <div className="p-4 overflow-x-auto custom-scrollbar">
                              <pre className="text-xs font-mono leading-relaxed text-blue-300">
                                <code>{section.code.request}</code>
                              </pre>
                            </div>
                          </div>
                        )}

                        {/* Response Code Block */}
                        {section.code.response && (
                          <div className="rounded-md overflow-hidden border border-slate-800 bg-[#0B1121] shadow-2xl">
                            <div className="flex items-center justify-between px-4 py-3 bg-[#121c34] border-b border-slate-800">
                              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">Response</span>
                              <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400">
                                <div className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" /> 200 OK
                              </span>
                            </div>
                            <div className="p-4 overflow-x-auto custom-scrollbar">
                              <pre className="text-xs font-mono leading-relaxed text-emerald-300">
                                <code>{section.code.response}</code>
                              </pre>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0B1121; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1E293B; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155; 
        }
      `}} />
    </main>
  );
}