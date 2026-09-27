

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121314] text-neutral-400 border-t border-neutral-800/80 py-8 px-4 sm:px-6 md:px-12 mt-16">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Brand / Logo section */}
        <div className="flex items-center justify-center sm:justify-start gap-2.5">
          <Link href="/" className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-base sm:text-lg">
            <span className="flex items-center justify-center w-6 h-6 rounded bg-[#ccff00]/10 text-[#ccff00]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M6 8h12M6 16h12" />
              </svg>
            </span>
            FITLOG
          </Link>
        </div>

        {/* Copyright / Info section */}
        <div className="text-xs sm:text-sm text-neutral-500 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </div>

      </div>
    </footer>
  );
}