import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
          <section className="bg-[#181a1b] text-white py-10 px-6 md:px-10 rounded-2xl shadow-xl border border-neutral-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <span className="text-[#d4fc00] text-xs font-bold tracking-widest uppercase">
                  WORKOUT LIBRARY
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none font-sans">
                  TRAIN WITH INTENT. <br />
                  LOG EVERY SET.
                </h1>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                </p>

                <div className="pt-1">
                  <a
                    href="#library"
                    className="inline-flex items-center gap-2 bg-[#d4fc00] text-black font-bold px-5 py-2.5 rounded-full hover:bg-[#bce400] transition-all duration-200 text-xs tracking-wide"
                  >
                    <span>BROWSE WORKOUTS</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end w-full">
                <Image
                  src={Logo}
                  alt="Gym Workout Diagram"
                  width={450}
                  height={250}
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </section>
        </div>
    );
};

export default Banner;