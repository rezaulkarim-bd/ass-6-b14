import React from 'react';
import LibraryCard from '../libraryCard/page';

const getData = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}

const LibraryPage = async() => {
    const libraries = await getData();
    return (
        <div className="max-w-7xl mx-auto px-4 my-8">
            <div className="px-2 mb-6">
                <h1 className="text-lg font-bold tracking-wider text-white uppercase mb-1">
                    THE LIBRARY
                </h1>
                <p className="text-xs text-neutral-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    libraries.map(library => { 
                        return <LibraryCard key={library.id} library={library} />;
                    })
                }
            </div>
        </div>
    );
};

export default LibraryPage;