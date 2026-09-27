
import React from 'react';
import LibraryCard from '../libraryCard/page';

const getData = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog')
    return res.json()
}

const LibraryPage = async() => {
    const libraries = await getData()

    return (
        <div className="py-6">
            <div className="max-w-6xl mx-auto px-4 mb-6">
                <h1 className="text-xl font-bold tracking-wider text-white uppercase mb-1">
                    THE LIBRARY
                </h1>
                <p className="text-xs text-neutral-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {
                    libraries.map(library => { return <LibraryCard key={library.id} library={library}></LibraryCard>})
                }
            </div>
        </div>
    );
};

export default LibraryPage;