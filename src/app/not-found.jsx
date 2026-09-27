import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#121314] text-white min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl sm:text-8xl font-black text-[#ccff00] mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-2">Page Not Found</h2>
      <p className="text-gray-400 text-xs sm:text-sm max-w-md mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#ccff00] text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#bce400] transition-all text-xs sm:text-sm uppercase tracking-wider"
      >
        Go Back Home
      </Link>
    </div>
  );
}