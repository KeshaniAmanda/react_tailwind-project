import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/images/hero-bg.jpg')",
          opacity: "0.9"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center text-white w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Best Car Repairing Services
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form.
        </p>
        
        {/* Single Button Only */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;