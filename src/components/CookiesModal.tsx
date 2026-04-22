"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Activity, Target, Cookie } from "lucide-react";

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookieModal({ isOpen, onClose }: CookieModalProps) {
  // State for the toggleable cookie preferences
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: false,
  });

  const handleToggle = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    // Here you would typically save to localStorage or a consent management API
    console.log("Saved preferences:", { essential: true, ...preferences });
    onClose();
  };

  const handleAcceptAll = () => {
    setPreferences({ analytics: true, marketing: true });
    // Save logic...
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col border border-slate-200"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-slate-900 text-white shadow-inner">
                    <Cookie className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight">Data & Privacy Controls</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                  We utilize cookies to optimize system performance, analyze telemetry data, and deliver a secure experience. Review and customize your data settings below.
                </p>

                <div className="flex flex-col gap-4">
                  
                  {/* Essential (Always On) */}
                  <div className="flex items-start justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        <h3 className="text-sm font-bold text-slate-900">Strictly Necessary</h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Core infrastructure cookies required for security, network management, and basic platform accessibility.
                      </p>
                    </div>
                    {/* Fake Toggle (Disabled state) */}
                    <div className="shrink-0 mt-1">
                      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500 opacity-80 cursor-not-allowed">
                        <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition-transform" />
                      </div>
                      <span className="block text-[9px] font-bold text-emerald-600 uppercase text-center mt-1">Always On</span>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Activity className="h-4 w-4 text-blue-500" />
                        <h3 className="text-sm font-bold text-slate-900">Performance Telemetry</h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Allows us to measure global traffic, edge node latency, and user interaction to improve system architecture.
                      </p>
                    </div>
                    {/* Interactive Toggle */}
                    <button 
                      onClick={() => handleToggle('analytics')}
                      className={`relative inline-flex h-6 w-11 shrink-0 mt-1 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${preferences.analytics ? 'bg-blue-600' : 'bg-slate-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${preferences.analytics ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-purple-500" />
                        <h3 className="text-sm font-bold text-slate-900">Targeting & Ecosystem</h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Used to track visitors across the platform to deliver relevant enterprise solutions and targeted architectural insights.
                      </p>
                    </div>
                    {/* Interactive Toggle */}
                    <button 
                      onClick={() => handleToggle('marketing')}
                      className={`relative inline-flex h-6 w-11 shrink-0 mt-1 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${preferences.marketing ? 'bg-blue-600' : 'bg-slate-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${preferences.marketing ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>

                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 px-6 py-5 border-t border-slate-100 bg-slate-50/50">
                <button 
                  onClick={handleSave}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
                >
                  Save Preferences
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-900 text-sm font-bold text-white hover:bg-slate-800 transition-colors shadow-md"
                >
                  Accept All
                </button>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}