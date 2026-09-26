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

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc, item) => acc + (item.duration || 0), 0);
  const totalCalories = currentList.reduce((acc, item) => acc + Number(item.calories || 0), 0);

  const handleRemove = (id) => {
    if (activeTab === 'todays-plan') {
      setAddTOTodaysPlan(addTOTodaysPlan.filter(item => item.id !== id));
    } else {
      setSaveForLater(saveForLater.filter(item => item.id !== id));
    }
  };

  return (
    <div className="bg-[#121314] text-white min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-1">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Exercises</span>
            <div className="text-4xl font-black text-[#ccff00]">{totalExercises}</div>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-neutral-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Minutes</span>
            <div className="text-4xl font-black text-white">{totalMinutes}</div>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-neutral-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Calories</span>
            <div className="text-4xl font-black text-white">{totalCalories}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-neutral-800 pb-4">
          <div className="flex bg-[#181a1b] p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => setActiveTab('todays-plan')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'todays-plan'
                  ? 'bg-neutral-800 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'saved'
                  ? 'bg-neutral-800 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-400 text-xs uppercase tracking-wider">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#181a1b] border border-neutral-800 text-gray-200 py-2 px-3 rounded-xl focus:outline-none focus:border-[#ccff00]"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-20 text-center text-gray-400 text-lg font-medium animate-pulse">
            Loading workouts…
          </div>
        ) : currentList.length === 0 ? (
          <div className="bg-[#181a1b] border border-neutral-800 border-dashed rounded-2xl py-24 px-6 text-center space-y-4">
            <h3 className="text-2xl font-black tracking-wider text-white">
              NOTHING HERE YET
            </h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Browse the library and add a lift to get today moving.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-block bg-[#ccff00] text-black font-bold py-3.5 px-8 rounded-full shadow-lg hover:bg-[#bce400] transition-all text-sm uppercase tracking-wider"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {currentList.map((item) => (
              <div
                key={item.id}
                className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-neutral-700 transition-all"
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-neutral-900 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-black tracking-wide text-white">{item.name}</h4>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mt-0.5">{item.equipment}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 w-full md:w-auto justify-between md:justify-end">
                  <div className="flex items-center gap-1.5">
                    <span>⏱️</span>
                    <span>{item.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🔥</span>
                    <span>{item.calories} kcal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>⭐</span>
                    <span>{item.rating}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/library/${item.id}`}
                      className="text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg transition-all"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => {
                        const updated = currentList.map(el => el.id === item.id ? { ...el, done: !el.done } : el);
                        if (activeTab === 'todays-plan') setAddTOTodaysPlan(updated);
                        else setSaveForLater(updated);
                      }}
                      className={`text-xs font-semibold py-2 px-4 rounded-lg transition-all ${
                        item.done ? 'bg-green-600 text-white' : 'border border-neutral-700 text-gray-300 hover:border-[#ccff00]'
                      }`}
                    >
                      {item.done ? 'Completed' : 'Mark as Done'}
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 font-bold p-2 transition-all"
                      title="Remove"
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