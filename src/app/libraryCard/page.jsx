import Link from 'next/link';
import React from 'react';

const LibraryCard = ({library}) => {
  const {id,image,name,muscleGroups,equipment,duration,caloriesBurned,rating} = library
    return (
      <Link href={`/libraries/${library.id}`}>
        <div>
            <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-4 text-white shadow-xl hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col justify-between max-w-sm w-full">
      
      
      <div>
        {/* Thumbnail Image */}
        <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-neutral-900">
          <img
            src={library.image}
            alt={library.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

       
        <div className="flex flex-wrap gap-2 mb-3">
          {library.muscleGroups.map((group, index) => (
            <span
              key={index}
              className="bg-[#ccff00] text-black text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wider"
            >
              {group}
            </span>
          ))}
        </div>

        
        <h3 className="text-lg font-black uppercase tracking-wide text-white mb-1">
          {library.name}
        </h3>

     
        <p className="text-gray-400 text-xs mb-4">
          {library.equipment}
        </p>
      </div>

      {/* Lower Section: Duration, Calories, Rating */}
      <div className="flex items-center justify-between text-xs text-gray-300 pt-3 border-t border-neutral-800/80">
        
        
        <div className="flex items-center gap-1.5">
          <span className="text-[#ccff00]">⏱</span>
          <span>{library.duration} min</span>
        </div>

        
        <div className="flex items-center gap-1.5">
          <span className="text-[#ccff00]">🔥</span>
          <span>{library.caloriesBurned} kcal</span>
        </div>

     
        <div className="flex items-center gap-1.5">
          <span className="text-[#ccff00]">⭐</span>
          <span>{library.rating}</span>
        </div>

      </div>

    </div>
  

        </div>
        </Link>
    );
};

export default LibraryCard;