import React from "react";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaClock, FaThumbsUp } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const HeaderTop = () => {
  return (
    <div className="w-full">

      <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 md:px-20 lg:px-32 bg-blue-950 text-white text-sm py-2">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <p>Call: +123 456 7890</p>
          <p>Email: email@example.com</p>
        </div>

        <div className="flex gap-3 text-lg">
          <FaFacebookF className="hover:text-yellow-400" />
          <FaLinkedin className="hover:text-yellow-400" />
          <FaXTwitter className="hover:text-yellow-400" />
          <FaYoutube className="hover:text-yellow-400" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 sm:px-10 md:px-20 lg:px-32 bg-white py-4">
        <img
          src="https://wp.dynamiclayers.net/industrus/wp-content/themes/industrus/assets/img/logo-dark.png"
          className="h-14"
        />

        <div className="flex gap-6 text-blue-900">
          <div className="flex items-center gap-2">
            <IoMdCheckmarkCircleOutline className="text-yellow-500 text-4xl" />
            <div>
              <p className="font-semibold">ISO 9001</p>
              <p className="text-sm text-gray-600">Certification</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-500 text-4xl" />
            <div>
              <p className="font-semibold">24/7</p>
              <p className="text-sm text-gray-600">Service</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaThumbsUp className="text-yellow-500 text-4xl" />
            <div>
              <p className="font-semibold">Qualified</p>
              <p className="text-sm text-gray-600">Professionals</p>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default HeaderTop;
