import React, { useState, useEffect } from "react";
import "./styles/HeroSections.css";

const slides = [
  {
    image:
      "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/slider-1.jpg",
    title: "We Build Your Dream Project",
    subtitle: "Construction & Engineering Solutions",
    button: "Get A Quote",
  },
  {
    image:
      "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/slider-2.jpg",
    title: "Industrial & Commercial Construction",
    subtitle: "Quality You Can Trust",
    button: "Learn More",
  },
  {
    image:
      "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/slider-3.jpg",
    title: "Renovation & Remodeling Services",
    subtitle: "From Concept to Completion",
    button: "Explore Services",
  },
];

const HeroSections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[h-80] overflow-hidden block ">
    
      <img
        src={slides[currentIndex].image}
        alt="slide"
        className="w-full h-full object-cover shrink transition-ease translate-x-auto overflow-hidden duration-1000"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 to-red/40 to-transparent"></div>


      <div className="absolute inset-0 flex flex-col justify-center  items-start px-6 md:px-16 lg:px-24 text-white">
        <h2
          key={currentIndex + "-subtitle"}
          className="text-lg md:text-2xl lg:text-3xl text-yellow-400 font-semibold mb-2 uppercase tracking-wide animate-fadeInUp"
        >
          {slides[currentIndex].subtitle}
        </h2>
        <h1
          key={currentIndex + "-title"}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-xl md:max-w-3xl drop-shadow-lg animate-slide-in-left"
        >
          {slides[currentIndex].title}
        </h1>
        <button className="bg-yellow-500 hover:bg-yellow-600 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition animate-fadeInUp">
          {slides[currentIndex].button}
        </button>
      </div>
  
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 cursor-pointer p-3 rounded-full text-white hover:bg-gray-50/20 transition"
      >
        <img src="https://wp.dynamiclayers.net/industrus/wp-content/plugins/industrus-core/assets/img/arrow-left-light.png" alt="" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 cursor-pointer p-3 rounded-full text-white hover:bg-gray-50/20 transition"
      >
        <img src="https://wp.dynamiclayers.net/industrus/wp-content/plugins/industrus-core/assets/img/arrow-right-light.png" alt="" />
      </button>


      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative group"
          >
            <span
              className={`block w-4 md:w-5 h-4 md:h-5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-500 scale-50"
                  : "bg-white/40 scale-90 group-hover:bg-yellow-400"
              }`}
            ></span>
            {index === currentIndex && (
              <span className="absolute -inset-1 rounded-full border-2 md:border-4 border-yellow-400 animate-pulse"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSections;
