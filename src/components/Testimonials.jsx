import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaStar, FaRegStar } from "react-icons/fa";


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-[#e0a93d] hover:text-white transition-all duration-300 z-20"
  >
    <FaArrowLeft size={16} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-[#e0a93d] hover:text-white transition-all duration-300 z-20"
  >
    <FaArrowRight size={16} />
  </button>
);


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Zosé Carpio",
      role: "TECHNOLOGY OFFICER",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/testimonial-1.jpg",
      text: "The support on this theme is super amazing. Requested a few changes and everything was done professionally!",
      rating: 4,
    },
    {
      id: 2,
      name: "Kyle Frederick",
      role: "FIELD OFFICER",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/testimonial-2.jpg",
      text: "The support on this theme is super amazing. Requested a few changes and everything was done professionally!",
      rating: 4,
    },
    {
      id: 3,
      name: "John Smith",
      role: "PROJECT MANAGER",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/testimonial-3.jpg",
      text: "Superb quality and outstanding customer support. Very responsive and helpful team. Highly recommended!",
      rating: 5,
    },
    {
      id: 4,
      name: "Emma Brown",
      role: "CIVIL ENGINEER",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/testimonial-4.jpg",
      text: "Excellent service! The website looks professional and works flawlessly. I am really happy with the outcome.",
      rating: 5,
    },
  ];

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],

    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-10 gap-2 z-10"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 h-2 rounded-full bg-gray-800/5 hover:bg-[#fcb847] transition-all duration-300"></div>
    ),
  };

  return (
    <section
      className="relative py-20 bg-[#ebe8e8] bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/map-pattern.png')",
      }}
    >
 \
      <div className="text-center mb-20">
        <p className="font-bold text-[#fcb847] uppercase tracking-wide">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl font-extrabold text-[#0a1c50]">
          Words From <span className="text-[#fcb847]">Clients</span>
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Construction is a general term meaning the art and science to form
          objects, systems, or organizations.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-5">
              <div className="bg-white shadow-md hover:shadow-xl transition p-10 mb-5 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
                
                <div className="shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "{item.text}"
                  </p>

                  <h3 className="font-extrabold text-[#0a1c50] text-lg">
                    {item.name}
                  </h3>

                  <p className="text-black text-xs font-semibold tracking-wide">
                    {item.role}
                  </p>

                  <div className="flex justify-center md:justify-start mt-2 text-[#fcb847]">
                    {[...Array(5)].map((_, i) =>
                      i < item.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .slick-dots li.slick-active div {
          background-color:#fcb847 !important;
          width: 60px !important;
          height: 8px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
