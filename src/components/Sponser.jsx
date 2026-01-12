import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponser = () => {
  const logos = [
    { id: 1, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-1.png" },
    { id: 2, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-2.png" },
    { id: 3, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-3.png" },
    { id: 4, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-4.png" },
    { id: 5, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-5.png" },
    { id: 6, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-6.png" },
    { id: 7, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-2.png" },
    { id: 8, img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/sponsor-3.png" },
  ];

  // Arrows use group-hover classes to show/hide
  const PrevArrow = ({ style, onClick }) => (
    <button
      onClick={onClick}
      style={{ ...style }}
      className={
        "absolute left-3 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-md bg-white " +
        "opacity-0 scale-90 pointer-events-none transition-all duration-200 " +
        "group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto cursor-pointer"
      }
      aria-label="Previous"
    >
      <FaArrowLeft />
    </button>
  );

  const NextArrow = ({ style, onClick }) => (
    <button
      onClick={onClick}
      style={{ ...style }}
      className={
        "absolute right-3 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-md bg-white " +
        "opacity-0 scale-90 pointer-events-none transition-all duration-200 " +
        "group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto cursor-pointer"
      }
      aria-label="Next"
    >
      <FaArrowRight />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
   
    <section className="relative w-full py-10 bg-gray-50 overflow-hidden cursor-pointer">
      <div className="max-w-6xl mx-auto px-6 relative group">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center py-6">
              <img
                src={logo.img}
                alt={`Sponsor ${logo.id}`}
                className="w-40 h-auto mx-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sponser;
