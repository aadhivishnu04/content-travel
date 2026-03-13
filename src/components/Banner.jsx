import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import img1 from "../assets/image1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";

export default function Banner() {
  const [bookmark, setBookmark] = useState(false);
  const [active, setActive] = useState(0);

  const slides = [
    {
      image: img1,
      title:
        "30 Best Places to Visit in India in March 2026 | Travel Rethink Ways",
      tag: "INDIA 2026",
    },
    {
      image: img2,
      title:
        "Top 10 Family Friendly Destinations in India | Travel Rethink Ways",
      tag: "FAMILY GETAWAYS",
    },
    {
      image: img3,
      title:
        "Best Romantic Honeymoon Places in India 2026 | Travel Rethink Ways",
      tag: "HONEYMOON GLOBAL",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="w-full max-w-[420px] sm:max-w-[1368px] mx-auto px-0 sm:px-4 lg:px-6 md:mt-[30px] lg:mt-[40px]">

      {/* Banner Container */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[540px] overflow-hidden rounded-none md:rounded-[16px] shadow-lg group">

        {/* SLIDES */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="banner"
            className={`absolute inset-0 w-full h-full object-cover brightness-[0.75] transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* MOBILE BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#4b6f9e]/40 md:hidden"></div>

        {/* MOBILE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden"></div>

        {/* DESKTOP OVERLAY */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0"></div>

        {/* TAG */}
        <span className="absolute top-0 left-4 md:left-10 bg-[#55364b] md:bg-red-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase px-2 py-[3px] rounded-sm shadow">
          {slides[active].tag}
        </span>

        {/* BOOKMARK */}
        <button
          onClick={() => setBookmark(!bookmark)}
          className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md"
        >
          {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>

        {/* DESKTOP TEXT */}
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 max-w-[720px] text-white">

          <h1 className="text-[24px] md:text-[36px] lg:text-[46px] leading-[1.25] mb-5 font-['Yeseva_One']">
            {slides[active].title}
          </h1>

          <button className="mt-5 flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500">
            READ MORE
            <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
              ➜
            </span>
          </button>

        </div>

        {/* DOT NAVIGATION */}
        <div className="hidden md:flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-[10px] h-[10px] rounded-full border border-white ${
                active === index ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        {/* MOBILE CAPTION */}
        <div className="absolute bottom-0 left-0 w-full md:hidden bg-[#55364b] text-white px-4 pt-8 pb-6">

          {/* MOBILE BUTTON */}
          <button className="absolute bottom-[130px] right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#55364b] hover:bg-[#4a2f4a] transition">
            READ MORE
            <span className="inline-block -rotate-[35deg]">➜</span>
          </button>

          <h1 className="text-[18px] leading-[1.3] font-['Yeseva_One']">
            {slides[active].title}
          </h1>

        </div>
      </div>
    </div>
  );
}