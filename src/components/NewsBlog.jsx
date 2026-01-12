import React from 'react'

const NewsBlog = () => {
  const news = [
    {
      id: 1,
      title: "Industrial Factory Building Equipment 2024",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-1-640x360.jpg",
      category: "ARCHITECTURE",
      author: "BY DYNAMICLAYERS",
      date: "SEP 21",
      desc: "The new functions coming to construction for equipment mathematics promise make life easier for owners and equipment.",
    },
    {
      id: 2,
      title: "The Evolution Of Construction Services In 2024",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-2-640x360.jpg",
      category: "ARCHITECTURE",
      author: "BY DYNAMICLAYERS",
      date: "SEP 21",
      desc: "The new functions coming to construction for equipment mathematics promise make life easier for owners and equipment.",
    },
    {
      id: 3,
      title: "Manufacturing The Industries Construction Future",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-3-640x360.jpg",
      category: "ARCHITECTURE",
      author: "BY DYNAMICLAYERS",
      date: "SEP 21",
      desc: "The new functions coming to construction for equipment mathematics promise make life easier for owners and equipment.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 1xl:px-90">
      <div className="text-center mb-14">
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Construction is a general term meaning the art and science to form
          objects, systems, and organizations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {news.map((item) => (
          <div
            key={item.id}
            className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 right-0 bg-yellow-500 text-white font-bold px-4 py-2 text-sm">
                {item.date}
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="p-6">
              <p className="text-xs font-semibold text-gray-400 tracking-wider mb-2">
                {item.category} /{" "}
                <span className="text-[#0a1c50] font-bold">{item.author}</span>
              </p>
              <h3 className="text-xl font-bold text-[#0a1c50] mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                {item.desc}
              </p>
              <a
                href="#"
                className="text-[#0a1c50] font-semibold hover:text-yellow-500 transition-all text-sm"
              >
                READ MORE
                <span className="block w-10 h-0.5 bg-gray-300 mt-1 group-hover:bg-yellow-500"></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewsBlog
