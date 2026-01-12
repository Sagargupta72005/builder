import React from "react";
import { MdOutlineFactory } from "react-icons/md";
import { FaCogs, FaOilCan } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Automobile & Manufacturing",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-4-768x512.jpg",
      icon: MdOutlineFactory,
      desc: "We produce positive results from growing industrial estates, we have established a corporate mandate to maintain the manufacturing economy.",
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-3-768x512.jpg",
      icon: FaCogs,
      desc: "We produce positive results from growing industrial estates, we have established a corporate mandate to maintain the manufacturing economy.",
    },
    {
      id: 3,
      title: "Oil Gas & Power Plant",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-5-768x512.jpg",
      icon: FaOilCan,
      desc: "We produce positive results from growing industrial estates, we have established a corporate mandate to maintain the manufacturing economy.",
    },
  ];

  return (
    <section className="py-9 bg-[#f4f4f4] px-9 flex justify-center items-center ">
      <div className="container mx-auto lg:px-20 text-center">

        <p className="text-[#ffb400] font-semibold uppercase tracking-wide">
          Our Services
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1b3d] mt-2">
          High Quality Construction Solutions <br />
          For Residentials &{" "}
          <span className="text-[#ffb400]">Industries!</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Construction is a general term meaning the art and science to form
          objects systems organizations.
        </p>
        <div className="mt-12 grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white overflow-hidden shadow-md h-full hover:shadow-xl transition duration-300 rounded"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-66 object-cover"
                />

                <div className="p-8 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#ffb400] w-12 h-12 flex items-center justify-center rounded-sm">
                      <Icon className="text-white text-2xl" />
                    </div>

                    <h3 className="font-bold text-[#0d1b3d] text-2xl leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-md p-5 mb-4">{service.desc}</p>

                  <a
                    href="#"
                    className="text-[#ffb400] text-sm font-semibold relative group"
                  >
                    READ MORE
                    <span className="block w-10 h-0.5 bg-gray-300 mt-1 group-hover:bg-[#ffb400] transition-all"></span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
