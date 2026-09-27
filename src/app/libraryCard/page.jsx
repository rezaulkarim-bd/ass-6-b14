

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const LibraryCard = ({ library }) => {
    return (
        <Link href={`/library/${library.id}`} className="block h-full">
            <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#ccff00] transition-all duration-300 shadow-xl flex flex-col h-full group">
                <div className="relative w-full h-48 bg-neutral-900 overflow-hidden">
                    {library?.image ? (
                        <Image
                            src={library.image}
                            alt={library.name || 'Workout'}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500 text-xs">No Image</div>
                    )}
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                        <div className="flex flex-wrap gap-1.5">
                            {library?.category ? (
                                <span className="bg-[#ccff00] text-black text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                                    {library.category}
                                </span>
                            ) : null}
                            {library?.equipment ? (
                                <span className="bg-[#ccff00] text-black text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                                    {library.equipment}
                                </span>
                            ) : null}
                        </div>

                        <h2 className="text-white font-black text-base tracking-wide uppercase line-clamp-1">
                            {library?.name || 'Workout Name'}
                        </h2>

                        <p className="text-gray-400 text-xs tracking-wide line-clamp-1">
                            {library?.description || 'Equipment info'}
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-neutral-800">
                        <div className="flex items-center gap-1">
                            <span>⏱️</span>
                            <span>{library?.duration || 0} min</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>🔥</span>
                            <span>{library?.calories || 0} kcal</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>⭐</span>
                            <span>{library?.rating || '0.0'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibraryCard;