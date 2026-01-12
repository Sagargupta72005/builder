import React from 'react';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b2653] text-white  relative w-full overflow-x-hidden">

   
      <div className="relative top-82 w-full bg-[url('https://wp.dynamiclayers.net/industrus/wp-content/themes/industrus/assets/img/city-skiline.png')] bg-repeat-x bg-bottom h-24 "></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-4 gap-12 relative z-10">
     
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <img
              className="h-[50px]"
              src="https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/12/logo-light-Copy.png"
              alt="logo"
            />
            <span className="text-yellow-400">.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Industrus has completed over 30,000 projects specializing in Industrial Building.
          </p>
          <div className="mt-6">
            <p className="font-semibold">Need Free Consultation?</p>
            <a href="#book" className="text-yellow-400 underline hover:text-white">
              Book Schedule
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 relative">
            Information
            <span className="absolute -bottom-1 left-0 w-12 h-2 bg-yellow-400"></span>
          </h3>
          <ul className="space-y-2 text-sm text-gray-300 ">
            <li><a className='hover:text-yellow-300'  href="/contact">Community</a></li>
            <li><a className='hover:text-yellow-300'   href="/about">About Us</a></li>
            <li><a className='hover:text-yellow-300'   href="/testimonials">Become an Affiliate</a></li>
            <li><a className='hover:text-yellow-300'   href="/contact">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 relative">
            Recent Posts
            <span className="absolute -bottom-1 left-0 w-12 h-2 bg-yellow-400"></span>
          </h3>
          <div className="space-y-5">
            {[{
              img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-1-120x120.jpg",
              title: "Industrial Factory Building Eq...",
              date: "September 21, 2020",
            },{
              img: "https://wp.dynamiclayers.net/industrus/wp-content/uploads/sites/17/2020/09/post-2-120x120.jpg",
              title: "The Evolution Of Construction...",
              date: "September 21, 2020",
            }].map((post, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{post.title}</p>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <i className="fa-solid fa-envelope text-2xl"></i>
            Newsletter Signup
          </h3>
          <p className="mt-3 text-sm">
            Stay always in touch! Subscribe to our newsletter.
          </p>
          <div className="bg-yellow-100 p-3 mt-4 rounded text-sm">
            Please activate/install MailChimp for WP to show the subscription form.
          </div>
          <p className="text-xs mt-3">* Don’t worry, we don’t spam.</p>
        </div>
      </div>

      <div className='relative w-full overflow-hidden h-22 '>
      <div className='absolute w-full top-11 overflow-hidden  h-22'>
        <img
          className="absolute h-11 t-8 left-full animate-truck-left"
          src="https://wp.dynamiclayers.net/industrus/wp-content/themes/industrus/assets/img/truck-1.png"
          alt="truck"
        />
      </div>
      <div className='absolute w-full overflow-hidden top-4 h-25'>
        <img className='absolute right-full h-18  animate-truck-right' src="https://wp.dynamiclayers.net/industrus/wp-content/themes/industrus/assets/img/truck-3.png" alt="" />
      </div>
      <div className="absolute w-full top-11 overflow-hidden h-22">
        <img className="absolute left-full right-full h-11 mb-8 animate-truck-slow" 
        src="https://wp.dynamiclayers.net/industrus/wp-content/themes/industrus/assets/img/truck-2.png" alt="" />
      </div>
      </div>

      <div className="border-t border-white/20 py-2 text-center text-sm text-gray-300 relative z-10">
        © Copyright 2025 DynamicLayers - All Rights Reserved.
      </div>

      <style>
        {`
          @keyframes truck-left {
            0% { left: 100%; }
            100% { left: -100px; }
          }
          .animate-truck-left {
            animation: truck-left 50s linear infinite;
          }
        `}
        {`
          @keyframes truck-slow {
            0% { left: 100%; }
            100% { left: -100px; }
          }
          .animate-truck-slow {
            animation: truck-left 90s linear infinite;
          }
        `}
        {`
          @keyframes truck-right {
            0% { right: 100%; }
            100% { right: -100px; }
          }
          .animate-truck-right {
            animation: truck-right 20s linear infinite;
          }
        `}

      </style>
    </footer>
  );
};

export default Footer;
