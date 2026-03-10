import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img1 from "../assets/image1.jpg";

export default function Banner() {
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className="w-full md:max-w-[1204px] md:mx-auto px-0 md:px-3 lg:px-4 my-0 md:my-6">

      <div className="relative h-[515px] md:h-[460px] lg:h-[540px] overflow-hidden rounded-none md:rounded-[16px] group shadow-lg">

        {/* IMAGE */}
        <img
          src={img1}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* DESKTOP OVERLAY */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

        {/* TAG */}
        <span className="absolute top-3 left-4 md:left-10 bg-red-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase px-2 py-1 rounded">
          INDIA 2026
        </span>

        {/* BOOKMARK */}
        <button
          onClick={() => setBookmark(!bookmark)}
          className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md"
        >
          {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>

        {/* DESKTOP TEXT */}
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 max-w-[600px] text-white">

          <h1 className="text-[30px] lg:text-[36px] leading-[1.3] mb-4 font-['Yeseva_One']">
            30 Best Places to Visit in India in March 2026 | Travel Rethink Ways
          </h1>

          
     <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[12px] sm:text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500 hover:bg-black hover:border-red-500">

            READ MORE

            <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
              ➜
            </span>

          </button>


        </div>

        {/* MOBILE CAPTION */}
        <div className="absolute bottom-0 left-0 w-full md:hidden bg-[#5a3a4d] text-white px-4 pt-10 pb-4">

          
   {/* MOBILE BUTTON */}
<button className="absolute bottom-[120px] right-4 md:hidden flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#4a2f4a]/80 backdrop-blur-sm">

  READ MORE

  <span className="inline-block -rotate-[35deg]">
    ➜
  </span>

</button>

          <h1 className="text-[18px] leading-[1] font-['Yeseva_One']">
            30 Best Places to Visit in India in March 2026 | Travel Rethink Ways
          </h1>

        </div>

      </div>

    </div>
  );
}