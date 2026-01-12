import React from "react";

const OurTeam = () => {
  return (
    <div>
      <div className="w-full bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/bg-img-02.jpg')] bg-cover bg-center bg-no-repeat relative py-40 flex justify-center items-center">
        <div className="absolute inset-0 bg-[#0B2653] opacity-90 text-justify"></div>

        <div className="relative text-center max-w-3xl px-4 w-110 ">
          <p className="text-[#FDB900] font-bold tracking-wider text-3xl mb-4">
            Our Team
          </p>

          <h1 className="text-white font-extrabold text-2xl px-10 mb-4 ">
            Expert Team Would Like To Hear From
            <span className="text-[#FDB900]"> You!</span>
          </h1>

          <p className="text-gray-300 mt-3 text-lg leading-relaxed mb-8">
            Construction is a general term meaning the art and science to form
            objects systems organizations.
          </p>

          <button className="bg-[#FDB900] hover:bg-blue-950 text-white font-semibold py-3 px-10 rounded-sm shadow-md transition-all">
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
