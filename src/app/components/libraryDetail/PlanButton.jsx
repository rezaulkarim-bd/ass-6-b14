'use client'

import React, { useContext } from 'react';
import { librariesContext } from '../context/librariesContext';


const PlanButton = ({library}) => {
    const {addTOTodaysPlan,setAddTOTodaysPlan} = useContext(librariesContext)
    const handlePlanBook = () =>{
       setAddTOTodaysPlan([...addTOTodaysPlan,library])
       alert(`${library.name}`)
    }
    return (
        <div>
            <button className="btn w-full sm:flex-1 bg-[#ccff00] text-black font-bold py-3.5 px-6 rounded-full border-none hover:bg-[#bce400] flex items-center justify-center gap-2 text-sm shadow-lg" onClick={()=>handlePlanBook()}>
              <span>📅</span>
              <span>Add to today's plan</span>
            </button> 
        </div>
    );
};

export default PlanButton;