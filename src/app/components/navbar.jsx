'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ planCount = 3, savedCount = 0 }) {
  const pathname = usePathname();

 
  const navLinks = [
    { name: 'Workout', href: '/' },
    { name: 'My Plan', href: '/my-plan' },

  ];

  return (
    <nav className="bg-[#181a1b] text-white px-8 md:px-12 py-4 rounded-2xl max-w-[1400px] w-full mx-auto my-4 shadow-2xl border border-neutral-800 flex items-center justify-between">
      
      
      <div className="flex items-center gap-3">
        <Link href="/" className="text-xl font-black uppercase tracking-wider text-white flex items-center gap-2.5">
          <span className="w-3 h-3 bg-[#ccff00] rounded-full inline-block shadow-[0_0_8px_#ccff00]"></span>
          FITLOG
        </Link>
      </div>

     
      <div className="hidden md:flex items-center gap-10 font-medium text-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition-colors py-1 ${
                isActive 
                  ? 'text-[#ccff00] font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            
              {isActive && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-[#ccff00] rounded-t-full"></span>
              )}
            </Link>
          );
        })}
      </div>


      <div className="flex items-center gap-3">
        
        
        <Link
          href="/my-plan"
          className="flex items-center gap-2 bg-[#ccff00] text-black text-xs md:text-sm font-bold px-4 py-1.5 rounded-full hover:bg-[#b8de00] transition-all shadow-md"
        >
          <span>Plan</span>
          <span className="bg-black/15 px-2 py-0.5 rounded-full text-xs">
            {planCount}
          </span>
        </Link>

       
        <Link
          href="/my-plan"
          className="flex items-center gap-2 border border-neutral-700 text-gray-300 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] transition-all"
        >
          <span>Saved</span>
          <span className="text-gray-400 text-xs">
            {savedCount}
          </span>
        </Link>

      </div>
    </nav>
  );
}