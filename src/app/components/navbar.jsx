'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { librariesContext } from '../components/context/librariesContext';

export default function Navbar() {
  const pathname = usePathname();
  const { addTOTodaysPlan = [], saveForLater = [] } = useContext(librariesContext);

  const planCount = addTOTodaysPlan.length;
  const savedCount = saveForLater.length;

  const navLinks = [
    { name: 'Workout', href: '/' },
    { name: 'My Plan', href: '/my-plan' },
  ];

  return (
    <nav className="bg-[#181a1b] text-white px-6 md:px-10 py-3.5 max-w-7xl w-full mx-auto my-4 rounded-2xl shadow-xl border border-neutral-800 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#ccff00] rounded-full inline-block shadow-[0_0_6px_#ccff00]"></span>
          FITLOG
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition-colors py-1 ${
                isActive ? 'text-[#ccff00] font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-[-14px] left-0 w-full h-[2px] bg-[#ccff00] rounded-t-full"></span>
              )}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/my-plan"
          className="flex items-center gap-2 bg-[#ccff00] text-black text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-[#b8de00] transition-all"
        >
          <span>Plan</span>
          <span className="bg-black/15 px-1.5 py-0.2 rounded-full text-xs">
            {planCount}
          </span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 border border-neutral-700 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] transition-all"
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