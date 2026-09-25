'use client';


import toast, { Toaster } from 'react-hot-toast';
import React from 'react';


const data = [
  {
    "id": 1,
    "name": "Barbell Bench Press",
    "image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
    "muscleGroups": [
      "Chest",
      "Arms"
    ],
    "equipment": "Barbell, Bench",
    "difficulty": "Intermediate",
    "duration": 25,
    "caloriesBurned": 180,
    "sets": 4,
    "reps": "6-8",
    "rating": 4.8,
    "description": "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
    "instructions": [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and a natural arch in the back."
    ]
  },
  {
    "id": 2,
    "name": "Pull-Up",
    "image": "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740",
    "muscleGroups": [
      "Back",
      "Arms"
    ],
    "equipment": "Pull-up Bar",
    "difficulty": "Intermediate",
    "duration": 15,
    "caloriesBurned": 120,
    "sets": 4,
    "reps": "6-10",
    "rating": 4.7,
    "description": "Bodyweight vertical pull that hammers lats, biceps, and grip while improving relative strength.",
    "instructions": [
      "Hang from the bar with a shoulder-width overhand grip.",
      "Brace your core and pull your chest toward the bar.",
      "Pause at the top with elbows tucked, then lower with control.",
      "Avoid kipping unless you are training a specific variation."
    ]
  },
  {
    "id": 3,
    "name": "Back Squat",
    "image": "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691401.jpg?w=740",
    "muscleGroups": [
      "Legs",
      "Core"
    ],
    "equipment": "Barbell, Rack",
    "difficulty": "Advanced",
    "duration": 30,
    "caloriesBurned": 240,
    "sets": 5,
    "reps": "5-8",
    "rating": 4.9,
    "description": "The king of lower-body lifts: quads, glutes, and spinal stability under a loaded bar.",
    "instructions": [
      "Set the bar on your upper traps and unrack with a tight brace.",
      "Sit the hips down and back while keeping knees tracking over toes.",
      "Descend until thighs are at least parallel, chest tall.",
      "Drive through mid-foot to stand, locking hips at the top."
    ]
  },
  {
    "id": 4,
    "name": "Overhead Press",
    "image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666703.jpg?w=740",
    "muscleGroups": [
      "Shoulders",
      "Arms"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermediate",
    "duration": 20,
    "caloriesBurned": 150,
    "sets": 4,
    "reps": "6-8",
    "rating": 4.6,
    "description": "Strict standing press that builds delts, triceps, and overhead stability without leg drive.",
    "instructions": [
      "Hold the bar at the front rack with a vertical forearm.",
      "Brace abs and glutes, then press the bar over the crown of the head.",
      "Lock out with biceps by the ears and a stacked ribcage.",
      "Lower to the clavicle under control before the next rep."
    ]
  },
  {
    "id": 5,
    "name": "Dumbbell Bicep Curl",
    "image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666702.jpg?w=740",
    "muscleGroups": [
      "Arms"
    ],
    "equipment": "Dumbbells",
    "difficulty": "Beginner",
    "duration": 12,
    "caloriesBurned": 80,
    "sets": 3,
    "reps": "10-12",
    "rating": 4.3,
    "description": "An isolation curl to thicken the biceps with a full stretch and a hard peak contraction.",
    "instructions": [
      "Stand tall with dumbbells at your sides, palms forward.",
      "Curl the weights without swinging the torso.",
      "Squeeze at the top, then lower until arms are fully extended.",
      "Keep elbows pinned near the ribs throughout."
    ]
  },
  {
    "id": 6,
    "name": "Hollow-Body Plank",
    "image": "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691489.jpg?w=740",
    "muscleGroups": [
      "Core"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Beginner",
    "duration": 10,
    "caloriesBurned": 60,
    "sets": 3,
    "reps": "30-45s",
    "rating": 4.4,
    "description": "A braced plank variation that trains anti-extension through the entire anterior core.",
    "instructions": [
      "Set elbows under shoulders and squeeze glutes and quads.",
      "Tuck the pelvis so the lower back stays flat.",
      "Breathe into the brace without sagging the hips.",
      "Hold for the prescribed time, then rest and repeat."
    ]
  },
  {
    "id": 7,
    "name": "Burpee",
    "image": "https://img.magnific.com/free-photo/3d-cartoon-business-character_1048-16544.jpg?w=740",
    "muscleGroups": [
      "Full Body"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermediate",
    "duration": 12,
    "caloriesBurned": 160,
    "sets": 4,
    "reps": "8-12",
    "rating": 4.2,
    "description": "A high-output full-body drill that mixes a squat, plank, and jump for conditioning.",
    "instructions": [
      "Squat down and plant your hands on the floor.",
      "Kick the feet back to a solid plank, then jump them forward.",
      "Explode up into a jump and land softly.",
      "Keep a steady rhythm and a braced midline."
    ]
  },
  {
    "id": 8,
    "name": "Conventional Deadlift",
    "image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666704.jpg?w=740",
    "muscleGroups": [
      "Back",
      "Legs"
    ],
    "equipment": "Barbell",
    "difficulty": "Advanced",
    "duration": 28,
    "caloriesBurned": 260,
    "sets": 4,
    "reps": "3-5",
    "rating": 4.9,
    "description": "Hip-hinge powerhouse for the posterior chain, grip, and total-body tension.",
    "instructions": [
      "Stand with the bar over mid-foot and take a strong mixed or double-overhand grip.",
      "Set the back flat, brace hard, and push the floor away.",
      "Stand tall by driving hips to the bar, then reverse the path.",
      "Do not bounce the plates; reset tension every rep."
    ]
  },
  {
    "id": 9,
    "name": "Push-Up",
    "image": "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691429.jpg?w=740",
    "muscleGroups": [
      "Chest",
      "Arms",
      "Core"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Beginner",
    "duration": 10,
    "caloriesBurned": 90,
    "sets": 3,
    "reps": "12-15",
    "rating": 4.5,
    "description": "A scalable pressing staple that trains chest, triceps, and a rigid trunk.",
    "instructions": [
      "Place hands slightly wider than shoulders, body in a straight line.",
      "Lower until the chest nearly kisses the floor.",
      "Press up without letting hips pike or sag.",
      "Keep elbows about 45 degrees from the torso."
    ]
  },
  {
    "id": 10,
    "name": "Walking Lunge",
    "image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666701.jpg?w=740",
    "muscleGroups": [
      "Legs"
    ],
    "equipment": "Dumbbells (optional)",
    "difficulty": "Beginner",
    "duration": 18,
    "caloriesBurned": 170,
    "sets": 3,
    "reps": "10-12/leg",
    "rating": 4.4,
    "description": "Unilateral stepping pattern that builds quads, glutes, and balance under load.",
    "instructions": [
      "Step forward and drop the back knee toward the floor.",
      "Keep the front knee stacked over the mid-foot.",
      "Drive through the front heel to the next step.",
      "Stay tall through the torso and control each landing."
    ]
  },
  {
    "id": 11,
    "name": "Russian Twist",
    "image": "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691487.jpg?w=740",
    "muscleGroups": [
      "Core"
    ],
    "equipment": "Medicine Ball",
    "difficulty": "Beginner",
    "duration": 8,
    "caloriesBurned": 70,
    "sets": 3,
    "reps": "16-20",
    "rating": 4.1,
    "description": "Rotational core work that trains the obliques while you stay balanced on the sit bones.",
    "instructions": [
      "Sit with a slight lean back and feet lightly off the floor.",
      "Hold the ball at chest height and rotate to one side.",
      "Tap the floor, then rotate to the other side.",
      "Move from the ribcage, not just the arms."
    ]
  },
  {
    "id": 12,
    "name": "Kettlebell Swing",
    "image": "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691505.jpg?w=740",
    "muscleGroups": [
      "Full Body",
      "Shoulders"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermediate",
    "duration": 16,
    "caloriesBurned": 200,
    "sets": 5,
    "reps": "12-15",
    "rating": 4.7,
    "description": "Explosive hip hinge that builds posterior power, grip, and conditioning in one move.",
    "instructions": [
      "Hinge, hike the bell back between the legs, then snap the hips.",
      "Let the bell float to chest height with loose arms.",
      "Brace at the top, then hinge as the bell falls.",
      "Never squat the swing — it is a hinge, not a squat."
    ]
  }
]

const LibraryDetailPage = ({params}) => {
    const {id} = params;
    const library = data.find(library => library.id === parseInt(id))

    // ১. Add to today's plan হ্যান্ডলার
  const handleAddToPlan = () => {
    // লোকাল স্টোরেজ থেকে প্ল্যান ডাটা ফেচ করা বা ইনিশিয়ালাইজ করা
    const existingPlan = JSON.parse(localStorage.getItem('todaysPlan')) || [];
    
    // ডুপ্লিকেট চেক করা যাতে একই ওয়ার্কআউট বারবার অ্যাড না হয়
    const isAlreadyAdded = existingPlan.some((item) => item.id === data.id);
    
    if (!isAlreadyAdded) {
      existingPlan.push(data);
      localStorage.setItem('todaysPlan', JSON.stringify(existingPlan));
      
      // ব্যাজ কাউন্টার আপডেটের জন্য কাস্টম ইভেন্ট বা ট্রিগার (ঐচ্ছিক)
      window.dispatchEvent(new Event('storage'));
    }

    // টোস্ট নোটিফিকেশন দেখানো
    toast.success("Added to today's plan", {
      style: {
        background: '#181a1b',
        color: '#fff',
        border: '1px solid #ccff00',
      },
      iconTheme: {
        primary: '#ccff00',
        secondary: '#000',
      },
    });
  };

  // ২. Save for later হ্যান্ডলার
  const handleSaveForLater = () => {
    const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    
    const isAlreadySaved = savedWorkouts.some((item) => item.id === data.id);
    
    if (!isAlreadySaved) {
      savedWorkouts.push(data);
      localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts));
      window.dispatchEvent(new Event('storage'));
    }

    // টোস্ট নোটিফিকেশন দেখানো
    toast.success("Saved for later", {
      style: {
        background: '#181a1b',
        color: '#fff',
        border: '1px solid #71717a',
      },
      iconTheme: {
        primary: '#ccff00',
        secondary: '#000',
      },
    });
  };

  
    return (
        <div>
            <div className="bg-[#121314] text-white min-h-screen py-10 px-6 md:px-12">
      {/* টোস্ট নোটিফিকেশনের কনটেইনার */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Large Image */}
        <div className="w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-full h-auto object-cover max-h-[550px]"
          />
        </div>

        {/* Right Side: Details & Info */}
        <div className="space-y-6">
          
          <div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-2">
              {data?.name}
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {data?.description}
            </p>
          </div>

          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-2">
            {data?.muscleGroups?.[0] && (
              <span className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {data.muscleGroups[0]}
              </span>
            )}
            {data?.muscleGroups?.[1] && (
              <span className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {data.muscleGroups[1]}
              </span>
            )}
          </div>

          {/* Specifications Box */}
          <div className="bg-[#181a1b] border border-neutral-800 rounded-2xl p-5 space-y-3.5 text-sm">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
              <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Equipment</span>
              <span className="font-semibold text-gray-200">{data?.equipment}</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
              <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Difficulty</span>
              <span className="font-semibold text-gray-200">{data?.difficulty}</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
              <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Sets</span>
              <span className="font-semibold text-gray-200">{data?.sets}</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
              <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Reps</span>
              <span className="font-semibold text-gray-200">{data?.reps}</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
              <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Duration</span>
              <span className="font-semibold text-gray-200">{data?.duration}</span>
            </div>
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
              <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Calories</span>
              <span className="font-semibold text-gray-200">{data?.calories}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">Rating</span>
              <span className="font-semibold text-gray-200">{data?.rating}</span>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300">
              Instructions
            </h3>
            <ol className="space-y-2 text-sm text-gray-400">
              {data?.instructions?.[0] && (
                <li className="flex gap-3">
                  <span className="text-white font-bold">1.</span>
                  <span>{data.instructions[0]}</span>
                </li>
              )}
              {data?.instructions?.[1] && (
                <li className="flex gap-3">
                  <span className="text-white font-bold">2.</span>
                  <span>{data.instructions[1]}</span>
                </li>
              )}
              {data?.instructions?.[2] && (
                <li className="flex gap-3">
                  <span className="text-white font-bold">3.</span>
                  <span>{data.instructions[2]}</span>
                </li>
              )}
              {data?.instructions?.[3] && (
                <li className="flex gap-3">
                  <span className="text-white font-bold">4.</span>
                  <span>{data.instructions[3]}</span>
                </li>
              )}
            </ol>
          </div>

          {/* Action Buttons with functionality */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            
            {/* Add to today's plan Button */}
            <button
              onClick={handleAddToPlan}
              className="w-full sm:flex-1 bg-[#ccff00] text-black font-bold py-3.5 px-6 rounded-full hover:bg-[#bce400] transition-all flex items-center justify-center gap-2 text-sm shadow-lg cursor-pointer"
            >
              <span>📅</span>
              <span>Add to today's plan</span>
            </button>

            {/* Save for later Button */}
            <button
              onClick={handleSaveForLater}
              className="w-full sm:w-auto border border-neutral-700 text-gray-300 font-medium py-3.5 px-6 rounded-full hover:border-[#ccff00] hover:text-[#ccff00] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <span>🔖</span>
              <span>Save for later</span>
            </button>

          </div>

        </div>

      </div>
    </div>  
        </div>
    );
};

export default LibraryDetailPage;