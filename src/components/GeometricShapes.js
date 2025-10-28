import React from 'react';

const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Circle */}
      <div className="absolute top-12 left-12 w-8 h-8 border-2 border-teal-primary/30 rounded-full"></div>
      
      {/* Top Right Triangle */}
      <div className="absolute top-16 right-16 w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-teal-primary/30"></div>
      
      {/* Middle Left Circle */}
      <div className="absolute top-1/3 left-8 w-6 h-6 border-2 border-teal-primary/40 rounded-full"></div>
      
      {/* Middle Right Circle */}
      <div className="absolute top-1/2 right-12 w-10 h-10 border-2 border-teal-primary/25 rounded-full"></div>
      
      {/* Bottom Left Lines */}
      <div className="absolute bottom-1/3 left-16">
        <div className="w-12 h-0.5 bg-teal-primary/30 mb-2 transform rotate-45"></div>
        <div className="w-8 h-0.5 bg-teal-primary/30 mb-2 transform rotate-45"></div>
        <div className="w-6 h-0.5 bg-teal-primary/30 transform rotate-45"></div>
      </div>
      
      {/* Bottom Right Curved Line */}
      <div className="absolute bottom-1/4 right-1/4">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-teal-primary/30">
          <path d="M10 50 Q 30 10 50 30" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Left Side Triangle */}
      <div className="absolute left-1/4 top-1/4">
        <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-teal-primary/20 transform rotate-12"></div>
      </div>
      
      {/* Right Side Triangle */}
      <div className="absolute right-1/3 bottom-1/3">
        <div className="w-0 h-0 border-l-5 border-r-5 border-t-7 border-l-transparent border-r-transparent border-t-teal-primary/25 transform -rotate-12"></div>
      </div>
    </div>
  );
};

export default GeometricShapes;