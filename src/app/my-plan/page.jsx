'use client';

import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { librariesContext } from '../components/context/librariesContext';

export default function MyPlanPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('todays-plan');
  const [sortBy, setSortBy] = useState('Duration');

  const { 
    addTOTodaysPlan = [], 
    setAddTOTodaysPlan = () => {}, 
    saveForLater = [], 
    setSaveForLater = () => {} 
  } = useContext(librariesContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const currentList = activeTab === 'todays-plan' ? addTOTodaysPlan : saveForLater;

  // Toast notification
  const showToast = (message) => {
    const toastEl = document.createElement('div');
    toastEl.className = 'fixed bottom-5 right-5 z-50 bg-[#ccff00] text-black font-bold py-3 px-6 rounded-xl shadow-2xl transition-all duration-300 animate-bounce text-xs sm:text-sm';
    toastEl.innerText = message;
    document.body.appendChild(toastEl);
    setTimeout(() => {
        toastEl.remove();
    }, 2500);
  };

  // Helper function to grab caloriesBurned safely
  const getCalories = (item) => {
    if (!item) return 0;
    const raw = item.caloriesBurned ?? item.calories ?? item.calorie ?? 0;
    if (typeof raw === 'number') return raw;
    const cleaned = String(raw).replace(/[^0-9.]/g, '');
    return Number(cleaned) || 0;
  };

  // Sorting logic (C1)
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === 'Duration') {
      return Number(b.duration || 0) - Number(a.duration || 0);
    } else if (sortBy === 'Calories') {
      return getCalories(b) - getCalories(a);
    } else if (sortBy === 'Rating') {
      return Number(b.rating || 0) - Number(b.rating || 0); // fixed
    }
    return 0;
  });

  const totalExercises = sortedList.length;
  
  const totalMinutes = sortedList.reduce((acc, item) => {
    if (!item) return acc;
    const rawDuration = item.duration ?? item.time ?? 0;
    const parsed = Number(typeof rawDuration === 'string' ? rawDuration.replace(/[^0-9.]/g, '') : rawDuration);
    return acc + (isNaN(parsed) ? 0 : parsed);
  }, 0);
  
  // Total Calories calculation using caloriesBurned
  const totalCalories = sortedList.reduce((acc, item) => {
    return acc + getCalories(item);
  }, 0);

  const handleRemove = (item) => {
    if (activeTab === 'todays-plan') {
      setAddTOTodaysPlan(addTOTodaysPlan.filter(el => el.id !== item.id));
    } else {
      setSaveForLater(saveForLater.filter(el => el.id !== item.id));
    }
    showToast(`${item.name || 'Workout'} removed from plan.`);
  };

  const handleToggleDone = (item) => {
    const updated = currentList.map(el => {
      if (el.id === item.id) {
        const newDoneState = !el.done;
        if (newDoneState) {
          showToast(`${el.name} marked as done! 🎉`);
        }
        return { ...el, done: newDoneState };
      }
      return el;
    });

    if (activeTab === 'todays-plan') {
      setAddTOTodaysPlan(updated);
    } else {
      setSaveForLater(updated);
    }
  };

  return (
    <div className="bg-[#121314] text-white min-h-screen py-6 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide mb-1">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Analytics Card */}
        <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Exercises</span>
            <div className="text-3xl sm:text-4xl font-black text-[#ccff00]">{totalExercises}</div>
          </div>
          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-neutral-800 pt-4 sm:pt-0 sm:pl-6">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Minutes</span>
            <div className="text-3xl sm:text-4xl font-black text-white">{totalMinutes}</div>
          </div>
          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-neutral-800 pt-4 sm:pt-0 sm:pl-6">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Calories</span>
            <div className="text-3xl sm:text-4xl font-black text-white">{totalCalories}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 border-b border-neutral-800 pb-4">
          <div className="flex bg-[#181a1b] p-1 rounded-xl border border-neutral-800 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('todays-plan')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'todays-plan'
                  ? 'bg-neutral-800 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'bg-neutral-800 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown (C1) */}
          <div className="flex items-center justify-between sm:justify-start gap-3 text-sm">
            <span className="text-gray-400 text-xs uppercase tracking-wider">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#181a1b] border border-neutral-800 text-gray-200 py-2 pl-3 pr-8 rounded-xl focus:outline-none focus:border-[#ccff00] appearance-none cursor-pointer"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                ▼
              </span>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-12 sm:p-20 text-center text-gray-400 text-base sm:text-lg font-medium animate-pulse">
            Loading workouts…
          </div>
        ) : sortedList.length === 0 ? (
          <div className="bg-[#181a1b] border border-neutral-800 border-dashed rounded-2xl py-16 sm:py-24 px-6 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-black tracking-wider text-white">
              NOTHING HERE YET
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Browse the library and add a lift to get today moving.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-block bg-[#ccff00] text-black font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-[#bce400] transition-all text-xs sm:text-sm uppercase tracking-wider"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {sortedList.map((item) => (
              <div
                key={item.id}
                className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-4 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-neutral-700 transition-all"
              >
                <div className="flex items-center gap-4 w-full lg:w-auto">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-neutral-900 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-black tracking-wide text-white truncate">{item.name}</h4>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">{item.equipment}</p>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 w-full lg:w-auto justify-between lg:justify-end">
                  <div className="flex items-center gap-1.5">
                    <span>⏱️</span>
                    <span>{item.duration} min</span>
                  </div>
                  {/* Displaying caloriesBurned using getCalories helper */}
                  <div className="flex items-center gap-1.5">
                    <span>🔥</span>
                    <span>{getCalories(item)} kcal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>⭐</span>
                    <span>{item.rating}</span>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-800">
                    <Link
                      href={`/library/${item.id}`}
                      className="flex-1 sm:flex-initial text-center text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-3 sm:px-4 rounded-lg transition-all"
                    >
                      View Details
                    </Link>
                    
                    {/* Mark as Done button (C3) */}
                    <button
                      onClick={() => handleToggleDone(item)}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 sm:px-4 rounded-lg transition-all ${
                        item.done 
                          ? 'bg-green-600 text-white' 
                          : 'border border-neutral-700 text-gray-300 hover:border-[#ccff00]'
                      }`}
                    >
                      <span>✓</span>
                      <span>{item.done ? 'Completed' : 'Mark as Done'}</span>
                    </button>

                    {/* Remove button (C3) */}
                    <button
                      onClick={() => handleRemove(item)}
                      className="text-gray-400 hover:text-red-500 font-bold p-2 transition-all ml-auto sm:ml-0 cursor-pointer"
                      title="Remove workout"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}