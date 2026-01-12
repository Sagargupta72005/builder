import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-white text-[#0a1c50] p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300"
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-white text-[#0a1c50] p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300"
  >
    <FaArrowRight />
  </button>
);

const OurProject1 = () => {
  const projects = [
    {
      id: 1,
      type: "ARCHITECTURE",
      title: "Federation Tower",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-1.jpg",
    },
    {
      id: 2,
      type: "CONSTRUCTION",
      title: "Shun Hing Square",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-2.jpg",
    },
    {
      id: 3,
      type: "HOUSE",
      title: "Central Park Tower",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-3.jpg",
    },
    {
      id: 4,
      type: "INDUSTRIAL",
      title: "Vincom Landmark 81",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/project-4.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full">

      <div className="relative py-20 bg-white bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/map-pattern.png')] bg-cover">
        
        <div className="container mx-auto px-6 md:px-16 lg:px-24 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <p className="text-yellow-500 font-semibold uppercase tracking-wider mb-2">
              OUR PROJECTS
            </p>

            <h2 className="text-4xl font-extrabold text-[#0a1c50] leading-tight">
              Transforming The Ideas And<br />
              Visions For <span className="text-yellow-500">Industries!</span>
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="text-gray-600 max-w-md">
              Construction is a general term meaning the art and science to form
              objects systems organizations.
            </p>
            <button className="mt-6 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md  hover:bg-blue-950 transition">
              VIEW ALL PROJECTS
            </button>
          </div>

        </div>
      </div>

      <div className="bg-[#0a1c50] relative pt-10 pb-24">
        <div className=" bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/map-pattern.png')] bg-cover py-5xl w-full relative">

        <div className="container mx-auto px-6 md:px-16 lg:px-24 relative">

          <Slider {...settings}>
            {projects.map((p) => (
              <div key={p.id} className="px-3">

                <div className="relative overflow-hidden shadow-lg rounded-md group">

                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="bg-white p-4">
                    <p className="text-sm font-semibold text-gray-500 uppercase">
                      {p.type}
                    </p>
                    <h4 className="text-[#0a1c50] font-bold text-lg">
                      {p.title}
                    </h4>
                  </div>

                </div>

              </div>
            ))}
          </Slider>
        </div>
        <div className="text-white text-center mt-20">
          <p className="text-yellow-500 uppercase font-semibold">Some Facts</p>
          <h3 className="text-4xl font-extrabold mb-10">
            Delivering The Most <br />
            <span className="text-yellow-500">Innovation Goals.</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

            {[
              { label: "Project Complete", value: "3,245" },
              { label: "Happy Customer", value: "4,518" },
              { label: "Hours Worked", value: "6,274" },
              { label: "Worldwide Branch", value: "1,479" },
            ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-yellow-500 text-4xl font-bold">
                  {stat.value}
                </h4>
                <p className="text-sm mt-2">{stat.label}</p>
              </div>
            ))}

          </div>
        </div>
        </div>
      </div>

    </section>
  );
};

export default OurProject1;
