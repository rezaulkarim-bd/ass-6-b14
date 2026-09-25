import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/banner.png'



const Banner = () => {
    return (
        <div>
          <section className="bg-[#181a1b] text-white py-12 px-6 md:px-12 rounded-2xl max-w-7xl mx-auto my-6 shadow-2xl border border-neutral-800">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        
        <div className="flex-1 space-y-6">
          

          <span className="text-[#d4fc00] text-xs md:text-sm font-bold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>


          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none font-sans">
            TRAIN WITH INTENT. <br />
            LOG EVERY SET.
          </h1>

          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>

          
          <div className="pt-2">
            <a
              href="#library"
              className="inline-flex items-center gap-2 bg-[#d4fc00] text-black font-bold px-6 py-3 rounded-full hover:bg-[#bce400] transition-all duration-200 shadow-md text-sm tracking-wide"
            >
              <span>BROWSE WORKOUTS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              width={500} 
             height={300} 
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
        </div>
    );
};

export default Banner;