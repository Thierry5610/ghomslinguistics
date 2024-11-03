import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className='inset-0 fixed bg-stone-100 flex items-center justify-center '>
        <div className="relative p-4 md:p-10">
        <div className="text-center">
            {/* Large outlined 404 with amber shadow */}
            <div className="relative font-black text-[9rem] md:text-[12rem] leading-none mb-6 select-none">
            <span 
                className="text-stone-100 relative z-10"
                style={{ 
                WebkitTextStroke: '2px #292524',
                textShadow: '4px 4px 0px #f59e0b'  // amber-500
                }}
            >
                404
            </span>
            </div>

            {/* Error message */}
            <h2 className="text-lg md:text-xl font-bold text-stone-800 mb-2">
            Page not found
            </h2>
            <p className="text-sm md:text-base text-stone-600 mb-6 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm md:text-base">
            <a 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
                <Home size={20} />
                <span>Back to Home</span>
            </a>
            <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-white transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Go Back</span>
            </button>
            </div>

            {/* Optional: Decorative elements */}
            <div className="hidden md:block absolute top-0 left-0 w-[20%] h-[20%] border-t-4 border-l-4 border-amber-500 " />
            <div className="hidden md:block absolute bottom-0 right-0 w-[20%] h-[20%] border-b-4 border-r-4 border-amber-500 " />
        </div>
        </div>
    </div>
  );
};

export default NotFound;