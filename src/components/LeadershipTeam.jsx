import React from "react";

const LeadershipTeam = () => {
  const team = [
    {
      id: 1,
      name: "Jhon Castellon",
      role: "Engineering Officer",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/team-1.jpg",
    },
    {
      id: 2,
      name: "Fiorella Ibáñez",
      role: "Marketing Manager",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/team-2.jpg",
    },
    {
      id: 3,
      name: "Zosé Carpio",
      role: "Technology Officer",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/team-3.jpg",
    },
    {
      id: 4,
      name: "Kyle Frederick",
      role: "Field Officer",
      img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/team-4.jpg",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 relative overflow-hidden ">
      <div className="absolute inset-0 bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/11/map-pattern.png')] opacity-10 bg-center bg-cover"></div>

      <div className="relative text-center mb-16">
        <p className="text-yellow-500 font-semibold uppercase tracking-wide">
          Leadership Team
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1c50] mt-2">
          Expert <span className="text-yellow-500">Dedicated</span> Team
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Construction is a general term meaning the art and science to form
          objects, systems, and organizations.
        </p>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500  bg-white"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute bottom-0 right-8 w-full h-1/2 bg-[#0a1c50]/80 [clip-path:polygon(50%_0%,-10%_100%,100%_100%)]  transition-all duration-500 ">
              <div className="absolute left-5 inset-0 flex flex-col justify-end p-6 text-white">
                <h4 className=" text-lg font-bold  transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm uppercase tracking-wide text-gray-300  transition-colors">
                  {member.role}
                </p>

              </div>              
            </div>

            <div className="absolute bottom-0 left-8 w-full h-1/2 bg-yellow-500 [clip-path:polygon(100%_100%,55%_100%,62%_30%)] transition-all duration-500 group-hover:bg-blue-950/50">
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
