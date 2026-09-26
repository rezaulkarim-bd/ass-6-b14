



import React from 'react';
import Image from 'next/image';
import PlanButton from '../../components/libraryDetail/PlanButton';
import SaveButton from '../../components/libraryDetail/SaveButton';





const getData = async() => {
    const res = await fetch ('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}


const LibraryDetailPage = async({params}) => {

//     const unwrappedParams = React.use(params);
//   const workoutId = unwrappedParams.id;
    const {id} = await params;
    const data = await getData()
    const library = data.find(library => (library.id)=== parseInt(id))



  
    return (
        <div>
         <div className="bg-[#121314] text-white min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        
        <div className="w-full relative h-full min-h-[550px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          {library?.image ? (
            <Image
              src={library.image}
              alt={library?.name || "Library Image"}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        <div className="space-y-6 flex flex-col justify-between">
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-2">
                {library?.name}
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {library?.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {library?.muscleGroups?.map((group, index) => (
                <span key={index} className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {group}
                </span>
              ))}
            </div>

            <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-5 space-y-3.5 text-sm">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Equipment</span>
                <span className="font-semibold text-gray-200">{library?.equipment}</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Difficulty</span>
                <span className="font-semibold text-gray-200">{library?.difficulty}</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Sets</span>
                <span className="font-semibold text-gray-200">{library?.sets}</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Reps</span>
                <span className="font-semibold text-gray-200">{library?.reps}</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Duration</span>
                <span className="font-semibold text-gray-200">{library?.duration}</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Calories</span>
                <span className="font-semibold text-gray-200">{library?.calories}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Rating</span>
                <span className="font-semibold text-gray-200">{library?.rating}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">
                Instructions
              </h3>
              <ol className="space-y-2 text-sm text-gray-400">
                {library?.instructions?.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-white font-bold">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
             <PlanButton library ={library}></PlanButton>
             <SaveButton library={library}></SaveButton>
          </div>

        

        </div>

      </div>
    </div>
    </div>
    );
};

export default LibraryDetailPage;