import React from "react";

const Home1 = () => {
  return (
    <section className="py-30 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-2 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-5xl  space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1b3d] leading-snug">
            We're Building Everything Best <br className="hidden md:block" />
            That You <span className="text-[#ffb400]">Needed!</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Construction is a general term meaning the art and science to form
            objects, systems, and organizations, and comes from Latin construction 
            and Old French construction. To construct is the verb: the act of building, 
            and the noun is construction.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mt-6">
       
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <i className="text-[#ffb400] text-3xl fas fa-tools"></i>
                <h4 className="text-lg font-bold text-[#0d1b3d]">
                  Industrus Mission
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                Construction is a general term meaning the art and science 
                to form objects systems.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <i className="text-[#ffb400] text-3xl fas fa-crane"></i>
                <h4 className="text-lg font-bold text-[#0d1b3d]">Our Vision</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Construction is a general term meaning the art and science 
                to form objects systems.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-[#ffb400] hover:bg-[#0d1b3d] cursor-pointer text-white font-semibold px-8 py-3 rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
              More About Us
            </button>

            <div className="text-center sm:text-left">
              <p className="font-[cursive] text-lg text-[#0d1b3d]">Jeremy</p>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center h-8xl lg:justify-end">
          <div className="relative">
            

            <div className=" h-full w-full">
              <img
                src="https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2021/01/About-Image-03.png"
                alt="Construction worker on ladder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* <div className="col-span-1 h-56">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop"
                alt="Construction worker working"
                className="w-full h-full object-cover shadow-lg"
              />
            </div> */}

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 z-5">
              <div className="bg-[#ffb400] text-white px-5 py-2  text-center shadow-2xl">
                <div className="text-1xl font-extrabold leading-tight">25 Years Of</div>
                <div className="text-1xl font-extrabold leading-tight">Experience</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Home1;