import React from 'react';
import { Lock } from 'lucide-react';
import GeometricShapes from './GeometricShapes';
import CloudsBackground from './CloudsBackground';

const ForbiddenPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-blue to-sky-blue/80 relative overflow-hidden">
      {/* Geometric Shapes Background */}
      <GeometricShapes />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Computer with Lock Icon */}
        <div className="relative mb-8">
          {/* Dotted Circle Background */}
          <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="w-full h-full rounded-full border-2 border-dotted border-white/40 animate-pulse"></div>
          </div>
          
          {/* Computer Monitor */}
          <div className="relative z-10">
            {/* Monitor Stand */}
            <div className="w-16 h-8 bg-gray-300 mx-auto mb-2 rounded-b-lg"></div>
            <div className="w-24 h-3 bg-gray-400 mx-auto rounded-full"></div>
            
            {/* Monitor Screen */}
            <div className="w-48 h-32 bg-white rounded-lg border-4 border-gray-300 shadow-lg mx-auto -mt-2 relative">
              {/* Browser Header */}
              <div className="h-6 bg-gray-100 rounded-t-md flex items-center px-2 space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              
              {/* Lock Icon */}
              <div className="flex items-center justify-center h-24">
                <div className="w-12 h-12 bg-teal-primary rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Error Message */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-dark mb-4">
            403 - Forbidden
          </h1>
          <p className="text-lg md:text-xl text-teal-primary font-medium">
            Access to this page is forbidden.
          </p>
        </div>
      </div>
      
      {/* Clouds Background */}
      <CloudsBackground />
    </div>
  );
};

export default ForbiddenPage;