import React from "react";
import { Search, MapPin } from "lucide-react";

const SearchForm = ({ setOpen }) => {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition duration-500">
      <div className="relative w-[90%] md:w-[600px]">
        <div className="flex items-center gap-2">
          <MapPin className="text-[#ffb400]" size={24} />
          <input
            type="text"
            placeholder="Enter location or keywords..."
            className="w-full bg-transparent border border-gray-400 text-white text-lg px-6 py-3 rounded-full outline-none placeholder-gray-400 focus:border-[#ffb400] transition"
            autoFocus
          />
          <Search
            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[#ffb400] transition"
            size={28}
          />
        </div>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-[-70px] right-0 text-white text-3xl font-light hover:text-[#ffb400] transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
