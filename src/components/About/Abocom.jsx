import React from 'react'

const Abocom = () => {
  return (
    <div className="w-full bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/bg-img-02.jpg')] bg-cover bg-center bg-no-repeat relative py-30 flex justify-center items-center">

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0B2653] opacity-90"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        
        <p className="text-[#FDB900] font-bold tracking-wider mb-4">
          ABOUT US
        </p>

        <h1 className="text-white font-extrabold text-3xl leading-tight">
          High Quality Construction Solutions<br />
          For Residentials & <span className="text-[#FDB900]">Industries!</span>
        </h1>

        <p className="text-gray-300 mt-6 text-1xl leading-relaxed">
          Construction is a general term meaning the art and science to
          form objects systems organizations.
        </p>

      </div>

    </div>
  )
}

export default Abocom;

