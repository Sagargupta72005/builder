import React from "react";

const Contact = () => {
  return (
    <section className="relative py-10 px-6 md:px-12 lg:px-20 bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/map-pattern.png')] bg-cover bg-center">
      
      {/* Heading */}
      <h1 className="text-center font-bold text-4xl bg-blue-950 text-white py-4 rounded-md">
        Contact Us
      </h1>

      {/* Main Content */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between gap-10">

        {/* Left Box */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-8 lg:w-1/2">
          <h3 className="text-3xl font-bold mb-3 leading-tight">
            Reach Out To Us In The Nearest{" "}
            <span className="text-[#FDB900]">Office.</span>
          </h3>

          <p className="mt-4 text-gray-800 leading-relaxed">
            info@dynamiclayers.net <br />
            contact@dynamiclayers.net
          </p>

          <p className="mt-5 text-gray-800">
            198 West 21th Street, Suite 721 <br />
            New York, NY 10010
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-8 w-full lg:w-1/2 space-y-5">
          <h2 className="font-bold text-xl text-gray-900">Enter Your Details</h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 rounded-md bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-1/2 bg-yellow-500 rounded-xl text-white hover:bg-blue-950 transition-all duration-300 py-3 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-14 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <h1 className="text-center text-3xl font-bold text-white py-3 bg-blue-950">
          Find Us
        </h1>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2152.024917320545!2d80.83151958220881!3d24.573952500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f0679c5229b%3A0x18b717285ec5affb!2sTFP%20Coding%20Classes!5e1!3m2!1sen!2sin!4v1763538312730!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
