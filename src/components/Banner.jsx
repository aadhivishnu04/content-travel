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
      title: "30 Best Places to Visit in India in March 2026 | Travel Rethink Ways",
      tag: "INDIA 2026",
    },
    {
      image: img2,
      title: "Top 10 Family Friendly Destinations in India | Travel Rethink Ways",
      tag: "FAMILY GETAWAYS",
    },
    {
      image: img3,
      title: "Best Romantic Honeymoon Places in India 2026 | Travel Rethink Ways",
      tag: "HONEYMOON GLOBAL",
    },
  ];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:max-w-[1352px] md:mx-auto px-0 md:px-3 lg:px-4 my-0 md:my-6">

      <div className="relative h-[515px] md:h-[460px] lg:h-[540px] overflow-hidden rounded-none md:rounded-[16px] group shadow-lg">

        {/* SLIDES */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="banner"
            className={`absolute inset-0 w-full h-[540] object-cover brightness-[0.85] transition-opacity duration-700 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* OVERLAY */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0"></div>

        {/* TAG */}
        <span className="absolute top-0 left-4 md:left-10 bg-red-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase px-2 py-1 ">
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
        <div className="absolute top-80 hidden md:block absolute left-10 top-1/2 -translate-y-1/2 max-w-[738px] text-white">

          <h1 className="text-[36px] margin top-30 lg:text-[46px] leading-[1.25] mb-5 font-['Yeseva_One'] max-w-[758.26px]">
            {slides[active].title}
          </h1>

          
     <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[12px] sm:text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500 hover:bg-black hover:border-red-500">

            READ MORE

            <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
              ➜
            </span>

          </button>

        </div>

        {/* DOTS NAVIGATION */}
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
        <div className="absolute bottom-0 left-0 w-full md:hidden bg-[#5a3a4d] text-white px-4 pt-10 pb-4">

          {/* MOBILE BUTTON */}
          <button className="absolute bottom-[120px] right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#4a2f4a]/80 backdrop-blur-sm">

            READ MORE

            <span className="inline-block -rotate-[35deg]">
              ➜
            </span>

          </button>

          <h1 className="text-[18px] leading-[1] font-['Yeseva_One']">
            {slides[active].title}
          </h1>

        </div>

      </div>

    </div>
  );
}