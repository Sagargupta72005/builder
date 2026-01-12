import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchFrom";
import "./styles/Header.css";


const displaySettings = {
  phone: 480,
  tablet: 1195, 
  laptop: 1280,
  desktop: 1440,
};

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openBox, setOpenBox] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const timeoutRef = useRef(null);
  const isMobile = window.innerWidth < displaySettings.tablet;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= displaySettings.phone) {
        setIsScrolled(window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (item) => {
    clearTimeout(timeoutRef.current);
    setOpenBox(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenBox(null), 100);
  };

  const toggleMobileMenu = () => {
    if (isMobile) setMobileMenu(!mobileMenu);
  };

  const OpenLists = {
    HOME: [{ name: "Homepage Default", link: "/" }],
    COMPANY: [{ name: "About us", link: "/about" }],
    PAGES: [{ name: "OurTeam", link: "/Expert" }],
    // PROJECTS: [{ name: "Construction", link: "/project1" }],
    BLOG: [{ name: "Latest Posts", link: "/Blog" }],
  };

  return (
    <header
      className={`transition-all  max-w-screen md: duration-300 font-semibold cursor-pointer left-0 z-60 w-full ${
        isScrolled ? "shadow-lg  bg-[#051441]" : "bg-transparent px-5  "
      }`}
      
    >
      
      <div className="w-full cursor-pointer">
        <nav
          className="bg-[#051441] flex justify-between items-center py-5 px-5 sm: md:px-16 lg:px-28 text-white relative"
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="md:hidden text-2xl text-yellow-400 z-50"
            onClick={toggleMobileMenu}
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
          <img className="h-5 "  src="https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/12/logo-light-Copy.png" alt="" />
          <ul
            className={`${
              mobileMenu
                ? "flex flex-col md:w-screen w-full mt-4 space-y-3 bg-[#051441] p-4 lg:hidden"
                : "hidden md:flex md:gap-6 md:items-center"
            } font-bold tracking-wide text-sm`}
          >
            {Object.keys(OpenLists).map((mainItem) => (
              <li
                key={mainItem}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(mainItem)}
              >
                <button className="hover:text-yellow-400 py-2 transition">
                  {mainItem}
                </button>

                {openBox === mainItem && (
                  <ul className="absolute left-0 top-full bg-white text-gray-900 w-52 shadow-lg rounded-md mt-1 z-50">
                    {OpenLists[mainItem].map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          to={sub.link}
                          className="block px-4 py-2 hover:bg-yellow-500 hover:text-white transition"
                          onClick={() => {
                            setOpenBox(null);
                            setMobileMenu(false);
                          }}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <Link
                to="/contact"
                className="py-2 hover:text-yellow-400 transition"
                onClick={() => setMobileMenu(false)}
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          <div className="flex gap-3 items-center">
            <button
              onClick={() => setOpenSearch(true)}
              className="text-lg hover:text-[#FDB900] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-blue-90 text-white font-bold p-2 rounded-sm text-sm transition-all"
              onClick={() => setMobileMenu(false)}
            >
              GET A QUOTE
            </Link>
          </div>
        </nav>

        {openSearch && <SearchForm setOpen={setOpenSearch} />}
      </div>
    </header>
  );
};

export default Header;
