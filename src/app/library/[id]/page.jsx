import Image from 'next/image';
import React from 'react';
import PlanButton from '../../components/libraryDetail/PlanButton';
import SaveButton from '../../components/libraryDetail/SaveButton';

const getData = async() => {
    const res = await fetch ('https://api.api-store.workers.dev/api/fitlog')
    return res.json()
}

const LibraryDetailPage = async({params}) => {
    const {id} = await params;
    const data = await getData()
    const rawLibrary = data.find(item => String(item.id) === String(id));

    // Mapping caloriesBurned correctly
    const library = rawLibrary ? {
        ...rawLibrary,
        calories: rawLibrary.caloriesBurned ?? rawLibrary.calories ?? rawLibrary.calorie ?? 0,
        duration: rawLibrary.duration ?? rawLibrary.time ?? 0,
    } : null;

    return (
        <div className="bg-[#121314] text-white min-h-screen py-6 px-4 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                
                <div className="w-full relative h-[350px] sm:h-[450px] lg:h-full lg:min-h-[550px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
                    {library?.image ? (
                        <Image
                            src={library.image}
                            alt={library?.name || "Library Image"}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                            No Image Available
                        </div>
                    )}
                </div>

                <div className="space-y-6 flex flex-col justify-between">
                    
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide mb-2">
                                {library?.name}
                            </h1>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                                {library?.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {library?.muscleGroups?.map((group, index) => (
                                <span key={index} className="bg-[#ccff00] text-black text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {group}
                                </span>
                            ))}
                        </div>

                        <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm">
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                                <span className="text-gray-400 font-medium uppercase tracking-wider">Equipment</span>
                                <span className="font-semibold text-gray-200">{library?.equipment || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                                <span className="text-gray-400 font-medium uppercase tracking-wider">Difficulty</span>
                                <span className="font-semibold text-gray-200">{library?.difficulty || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                                <span className="text-gray-400 font-medium uppercase tracking-wider">Sets</span>
                                <span className="font-semibold text-gray-200">{library?.sets || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                                <span className="text-gray-400 font-medium uppercase tracking-wider">Reps</span>
                                <span className="font-semibold text-gray-200">{library?.reps || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                                <span className="text-gray-400 font-medium uppercase tracking-wider">Duration</span>
                                <span className="font-semibold text-gray-200">{library?.duration ? `${library.duration} min` : 'N/A'}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                                <span className="text-gray-400 font-medium uppercase tracking-wider">Calories Burn</span>
                                <span className="font-semibold text-[#ccff00]">
                                    {library?.caloriesBurned || library?.calories ? `${library?.caloriesBurned || library?.calories} kcal` : 'N/A'}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 font-medium uppercase tracking-wider">Rating</span>
                                <span className="font-semibold text-gray-200">⭐ {library?.rating || 'N/A'}</span>
                            </div>
                        </div>

                        {library?.instructions && library.instructions.length > 0 && (
                            <div className="space-y-3">
                                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-300">
                                    Instructions
                                </h3>
                                <ol className="space-y-2 text-xs sm:text-sm text-gray-400">
                                    {library.instructions.map((step, index) => (
                                        <li key={index} className="flex gap-3">
                                            <span className="text-white font-bold">{index + 1}.</span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                         <PlanButton library={library}></PlanButton>
                         <SaveButton library={library}></SaveButton>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LibraryDetailPage;