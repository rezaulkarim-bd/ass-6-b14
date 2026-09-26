'use client'

import React, { useContext } from 'react';
import { librariesContext } from '../context/librariesContext';

const PlanButton = ({ library }) => {
    const { addTOTodaysPlan = [], setAddTOTodaysPlan = () => {} } = useContext(librariesContext);

    const handlePlanBook = () => {
        const isAlreadyAdded = addTOTodaysPlan.some(item => item.id === library.id);
        
        if (!isAlreadyAdded) {
            setAddTOTodaysPlan([...addTOTodaysPlan, library]);
            showToast(`${library.name} has been added to Today's Plan!`);
        } else {
            showToast(`${library.name} is already in Today's Plan!`);
        }
    };

    const showToast = (message) => {
        const toastEl = document.createElement('div');
        toastEl.className = 'fixed bottom-5 right-5 z-50 bg-[#ccff00] text-black font-bold py-3 px-6 rounded-xl shadow-2xl transition-all duration-300 animate-bounce';
        toastEl.innerText = message;
        document.body.appendChild(toastEl);
        setTimeout(() => {
            toastEl.remove();
        }, 2500);
    };

    return (
        <div>
            <button 
                className="btn w-full sm:flex-1 bg-[#ccff00] text-black font-bold py-3.5 px-6 rounded-full border-none hover:bg-[#bce400] flex items-center justify-center gap-2 text-sm shadow-lg cursor-pointer" 
                onClick={handlePlanBook}
            >
                <span>📅</span>
                <span>Add to today's plan</span>
            </button> 
        </div>
    );
};

export default PlanButton;