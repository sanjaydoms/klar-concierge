"use client";

import { useState } from "react";
import { Planner } from "@/components/planner/Planner";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Chatbox Window */}
      {isOpen && (
        <div className="mb-3 flex h-[600px] max-h-[80vh] w-[90vw] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line bg-brand px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span>
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-tight">Klar AI Concierge</h3>
                <p className="text-[11px] text-white/80">Holiday decision assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Planner Chat Box */}
          <div className="flex-1 overflow-y-auto p-4 text-left">
            <Planner isEmbedded />
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
