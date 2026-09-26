'use client'

import React, { useContext } from 'react';
import { librariesContext } from '../context/librariesContext';

const SaveButton = ({ library }) => {
    const { saveForLater = [], setSaveForLater = () => {} } = useContext(librariesContext);

    const handleSaveBook = () => {
        const isAlreadySaved = saveForLater.some(item => item.id === library.id);

        if (!isAlreadySaved) {
            setSaveForLater([...saveForLater, library]);
            showToast(`${library.name} has been saved for later!`);
        } else {
            showToast(`${library.name} is already in your saved list!`);
        }
    };

    const showToast = (message) => {
        const toastEl = document.createElement('div');
        toastEl.className = 'fixed bottom-5 right-5 z-50 bg-neutral-800 text-[#ccff00] border border-[#ccff00] font-bold py-3 px-6 rounded-xl shadow-2xl transition-all duration-300 animate-bounce';
        toastEl.innerText = message;
        document.body.appendChild(toastEl);
        setTimeout(() => {
            toastEl.remove();
        }, 2500);
    };

    return (
        <div>
            <button 
                className="btn w-full sm:w-auto border border-neutral-700 bg-transparent text-gray-300 font-medium py-3.5 px-6 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center gap-2 text-sm cursor-pointer" 
                onClick={handleSaveBook}
            >
                <span>🔖</span>
                <span>Save for later</span>
            </button> 
        </div>
    );
};

export default SaveButton;