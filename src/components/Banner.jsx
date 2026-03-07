import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img1 from "../assets/image1.jpg";

export default function Banner() {
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className="relative w-[1204px] h-[540px] mx-auto my-[30px] rounded-[16px] overflow-hidden group">

      {/* image */}
      <img
        src={img1}
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

      {/* tag */}
      <span className="absolute top-[1px] left-[45px] bg-[#e11b1b] text-white text-[11px] font-semibold tracking-[0.7px] uppercase px-[7px] py-[5px] rounded-[3px] z-10">
        INDIA 2026
      </span>

      {/* content */}
      <div className="absolute left-[45px] top-1/2 -translate-y-1/2 max-w-[650px] text-white font-[Yeseva One]">

        <h1 className="text-[32px] leading-[1.2] mb-[20px]">
          30 Best Places to Visit in India in March 2026 | Travel Rethink Ways
        </h1>

        <button className="flex items-center gap-2 px-[28px] py-[12px] rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500 hover:bg-black hover:border-red-500">

          READ MORE

          <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
            ➜
          </span>

        </button>

      </div>

      {/* bookmark */}
      <div
        onClick={() => setBookmark(v => !v)}
        className="absolute top-[20px] right-[20px] w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-[18px] text-red-600 cursor-pointer"
      >
        {bookmark ? <FaBookmark /> : <FaRegBookmark />}
      </div>

    </div>
  );
}