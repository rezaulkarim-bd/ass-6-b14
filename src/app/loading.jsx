export default function Loading() {
  return (
    <div className="bg-[#121314] text-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-neutral-800 border-t-[#ccff00] rounded-full animate-spin"></div>
        <p className="text-gray-400 text-sm font-semibold tracking-wider uppercase animate-pulse">Loading workouts...</p>
      </div>
    </div>
  );
}