import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img1 from "../assets/image1.jpg";

export default function Banner() {
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className="w-full max-w-[1204px] mx-auto px-3 sm:px-4 md:px-6 my-6">
      
      <div className="relative h-[240px] sm:h-[360px] md:h-[460px] lg:h-[540px] rounded-[16px] overflow-hidden group shadow-lg">

        {/* IMAGE */}
        <img
          src={img1}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

        {/* TAG */}
        <span className="absolute top-0 left-4 sm:left-6 md:left-10 bg-red-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase px-2 py-1 rounded">
          INDIA 2026
        </span>

        {/* TEXT */}
        <div className="absolute left-4 sm:left-6 md:left-10 top-[55%] sm:top-1/2 -translate-y-1/2 max-w-[85%] sm:max-w-[520px] md:max-w-[600px] text-white">

          <h1 className="text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px] leading-[1.3] mb-4 font-['Yeseva_One']">
            30 Best Places to Visit in India in March 2026 | Travel Rethink Ways
          </h1>

          {/* BUTTON */}
          <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[12px] sm:text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500 hover:bg-black hover:border-red-500">

            READ MORE

            <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
              ➜
            </span>

          </button>

        </div>

        {/* BOOKMARK */}
        <button
          onClick={() => setBookmark(!bookmark)}
          className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md"
        >
          {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>

      </div>

    </div>
  );
}