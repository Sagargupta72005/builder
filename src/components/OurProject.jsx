import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0a1c50] p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
    aria-label="Previous"
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0a1c50] p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
    aria-label="Next"
  >
    <FaArrowRight />
  </button>
);

const OurProject = () => {
  const projects = [
    { id: 1, type: "Building", title: "Empire State Building", img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-1.jpg" },
    { id: 2, type: "Architecture", title: "The Burj Khalifa", img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-2.jpg" },
    { id: 3, type: "Construction", title: "Shun Hing Square", img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-3.jpg" },
    { id: 4, type: "Industrial", title: "Shanghai Tower", img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-4.jpg" },
    { id: 5, type: "Residential", title: "Palm Jumeirah", img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-5.jpg" },
    { id: 6, type: "Commercial", title: "Petronas Towers", img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-6.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative overflow-hidden">
      {/* Top White Section with Map */}
      <div className="relative py-16 bg-white bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/map-pattern.png')] bg-cover bg-center">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-yellow-500 font-semibold uppercase tracking-wider mb-2">Our Projects</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1c50] leading-tight">
              Transforming Ideas Into <span className="text-yellow-500">Industrial Reality</span>
            </h2>
          </div>

          <div className="text-right">
            <p className="text-gray-600 mt-4 max-w-md ml-auto">
              Construction is a general term meaning the art and science to form objects,
              systems, and organizations.
            </p>
            <button className="mt-6 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-[#0a1c50] hover:text-yellow-500 transform transition-all duration-500 hover:scale-105">
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>
      </div>

      {/* Blue Carousel Section with Map BG */}
      <div className="relative bg-[#0a1c50]  py-16 bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/map-pattern.png')]  bg-blend-overlay bg-cover bg-center">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 relative group">
          <Slider {...settings}>
            {projects.map((p) => (
              <div key={p.id} className="px-3">
                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white p-5 transition-all duration-500 group-hover:bg-yellow-500">
                    <p className="text-sm font-semibold text-gray-500 uppercase group-hover:text-white">{p.type}</p>
                    <h4 className="text-[#0a1c50] font-bold text-lg group-hover:text-white">{p.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Card Container Section */}
        <div className="bg-[#0a1c50]/95 text-white py-12 text-center mt-16">
          <p className="text-yellow-500 uppercase font-semibold">Some Facts</p>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-10">
            Delivering The Most <br />
            <span className="text-yellow-500">Innovative Goals</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Project Complete", value: "3,245" },
              { label: "Happy Customer", value: "4,518" },
              { label: "Hours Worked", value: "6,274" },
              { label: "Worldwide Branch", value: "1,479" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-xl py-6 transition-all duration-500 hover:bg-yellow-500 hover:scale-105">
                <h4 className="text-yellow-500 text-3xl font-bold group-hover:text-white">{stat.value}</h4>
                <p className="text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
