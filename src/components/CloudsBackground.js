import React from 'react';

const CloudsBackground = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      {/* Cloud Layer */}
      <div className="relative h-32">
        {/* Large Cloud - Left */}
        <div className="absolute bottom-0 left-0 w-32 h-20 bg-white cloud-shape opacity-90"></div>
        <div className="absolute bottom-4 left-16 w-24 h-16 bg-white cloud-shape-2 opacity-80"></div>
        <div className="absolute bottom-2 left-8 w-20 h-14 bg-white cloud-shape opacity-85"></div>
        
        {/* Medium Clouds - Center Left */}
        <div className="absolute bottom-0 left-32 w-28 h-18 bg-white cloud-shape opacity-90"></div>
        <div className="absolute bottom-3 left-44 w-22 h-15 bg-white cloud-shape-2 opacity-85"></div>
        
        {/* Large Cloud Group - Center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-white cloud-shape-3 opacity-95"></div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/4 w-32 h-20 bg-white cloud-shape opacity-80"></div>
        <div className="absolute bottom-2 left-1/2 transform translate-x-1/4 w-28 h-18 bg-white cloud-shape-2 opacity-85"></div>
        
        {/* Medium Clouds - Center Right */}
        <div className="absolute bottom-0 right-32 w-30 h-19 bg-white cloud-shape opacity-90"></div>
        <div className="absolute bottom-4 right-44 w-24 h-16 bg-white cloud-shape-2 opacity-80"></div>
        
        {/* Large Cloud - Right */}
        <div className="absolute bottom-0 right-0 w-36 h-22 bg-white cloud-shape-3 opacity-95"></div>
        <div className="absolute bottom-3 right-16 w-28 h-18 bg-white cloud-shape opacity-85"></div>
        <div className="absolute bottom-1 right-8 w-24 h-16 bg-white cloud-shape-2 opacity-80"></div>
        
        {/* Small Floating Clouds */}
        <div className="absolute bottom-16 left-1/4 w-16 h-10 bg-white cloud-shape opacity-70"></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-12 bg-white cloud-shape-2 opacity-75"></div>
        <div className="absolute bottom-18 left-3/4 w-14 h-9 bg-white cloud-shape opacity-65"></div>
      </div>
      
      {/* Additional Cloud Layers for Depth */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <div className="absolute bottom-0 left-1/6 w-24 h-12 bg-white/60 cloud-shape"></div>
        <div className="absolute bottom-0 left-2/3 w-28 h-14 bg-white/70 cloud-shape-2"></div>
        <div className="absolute bottom-0 right-1/6 w-22 h-11 bg-white/65 cloud-shape"></div>
      </div>
    </div>
  );
};

export default CloudsBackground;