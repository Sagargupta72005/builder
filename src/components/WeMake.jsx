import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

const WeMake = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <section className="relative w-full flex flex-col lg:flex-row overflow-hidden items-stretch">
      <div className="bg-[#0a1c50] text-white w-full lg:w-1/2 px-6 sm:px-10 lg:px-20 py-12 lg:py-20 flex flex-col justify-center relative ">
        <p className="text-yellow-500 font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base">
          We Make Difference
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug mb-4">
          We Are The Leader In <br />
          <span className="text-yellow-500">Industrial Market</span>
        </h2>

        <p className="text-gray-300 mb-8 max-w-md text-sm sm:text-base leading-relaxed">
          Construction is a general term meaning the art and science to form
          objects, systems, and organizations.
        </p>

        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1">
              <span>AUTOMOBILE MANUFACTURING</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-600 h-1.5 relative rounded">
              <div className="absolute top-0 left-0 h-1.5 bg-yellow-500 w-[85%] rounded"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1">
              <span>MECHANICAL ENGINEERING</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-600 h-1.5 relative rounded">
              <div className="absolute top-0 left-0 h-1.5 bg-yellow-500 w-[75%] rounded"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold mb-1">
              <span>OIL GAS & POWER ENERGY</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-600 h-1.5 relative rounded">
              <div className="absolute top-0 left-0 h-1.5 bg-yellow-500 w-[90%] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[400px] lg:h-auto overflow-hidden">
        <img
          src="https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/bg-img-01.jpg"
          alt="Industrial Leader"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={openVideo}
          className="relative bg-yellow-500 text-white rounded-full p-6 sm:p-8 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-white animate-ping"></span>
          <FaPlay className="text-lg sm:text-xl relative z-10 ml-1" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative  rounded-lg shadow-2xl w-[90%] max-w-7xl p-4">

            <button
              onClick={closeVideo}
              className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-full shadow-md cursor-pointer hover:bg-yellow-700"
            >
              <FaTimes />
            </button>

            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/CvRKgnWmwus?autoplay=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeMake;
