import React from 'react';
import LibraryCard from './libraryCard/page';

const getData = async() => {
    const res = await fetch ('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}

const LibraryPage = async() => {
    const libraries = await getData()
    return (
        <div>
<div className="max-w-6xl mx-auto px-4 mb-6">
  <h1 className="text-xl font-bold tracking-wider text-white uppercase mb-1">
    THE LIBRARY
  </h1>
  <p className="text-xs text-neutral-400">
    Twelve lifts covering every major muscle group.
  </p>
</div>
        <div className='grid grid-cols-3 p-4 m-4 items-center'>
            {
              libraries.map(library => { return <LibraryCard key = {library.id} library = {library}></LibraryCard>})
            }
        </div>
        </div>
    );
};

export default LibraryPage;