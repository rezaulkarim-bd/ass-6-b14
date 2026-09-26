'use client'

import React, { useContext } from 'react';
import { librariesContext } from '../context/librariesContext';



const SaveButton = ({library}) => {
    const {saveForLater,setSaveForLater} = useContext(librariesContext)
    const handleSaveBook = () =>{
       setSaveForLater([...saveForLater,library])
       alert(`${library.name}`)
    }
    return (
        <div>
    
              <button className="btn w-full sm:w-auto border border-neutral-700 bg-transparent text-gray-300 font-medium py-3.5 px-6 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center gap-2 text-sm" onClick={()=>handleSaveBook()}>
              <span>🔖</span>
              <span>Save for later</span>
            </button> 
        </div>
    );
};

export default SaveButton;