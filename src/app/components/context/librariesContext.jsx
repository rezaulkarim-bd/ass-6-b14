// 'use client';
// import { createContext } from 'react';

// import React, { useState } from 'react';

//  export const librariesContext = createContext({})

// const LibrariesProvider = ({children}) => {
    
//      const [addTOTodaysPlan,setAddTOTodaysPlan] = useState([])
//      const [saveForLater,setSaveForLater] = useState([])

//      const sharedData ={
//         addTOTodaysPlan,
//         setAddTOTodaysPlan,
//         saveForLater,
//         setSaveForLater
//      }
//     return (
//         <librariesContext.Provider value ={sharedData}>{children}</librariesContext.Provider>
      
//     );
// };

// export default LibrariesProvider;

'use client';

import React, { createContext, useState } from 'react';

export const librariesContext = createContext({});

export default function LibrariesProvider({ children }) {
  const [addTOTodaysPlan, setAddTOTodaysPlan] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);

  const sharedData = {
    addTOTodaysPlan,
    setAddTOTodaysPlan,
    saveForLater,
    setSaveForLater
  };

  return (
    <librariesContext.Provider value={sharedData}>
      {children}
    </librariesContext.Provider>
  );
}