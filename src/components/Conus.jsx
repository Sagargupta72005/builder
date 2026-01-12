import React from 'react'

const Conus = () => {
  return (
    <div className="w-full bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/bg-img-02.jpg')] bg-cover bg-center bg-no-repeat relative py-40 flex justify-center items-center">

      <div className="absolute inset-0 bg-[#0B2653] opacity-90"></div>

      <div className="relative z-10 text-center max-w-3xl px-4">

        <p className="text-[#FDB900] font-bold tracking-wider mb-4">
          CONTACT US
        </p>

        <h1 className="text-white font-extrabold text-4xl leading-tight mb-4">
          Trusted By More Than 650,000<br />
          Happy <span className="text-[#FDB900]">Peoples!</span>
        </h1>

        <p className="text-gray-300 mt-3 text-lg leading-relaxed mb-8">
          Construction is a general term meaning the art and science to
          form objects systems organizations.
        </p>

        <button className="bg-[#FDB900] hover:bg-blue-950 text-white font-semibold py-3 px-10 rounded-sm shadow-md transition-all">
          GET A FREE QUOTE
        </button>

      </div>
    </div>
  )
}

export default Conus;
