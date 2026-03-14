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
link:
"https://travel.rethinkways.com/30-best-places-to-visit-in-january-in-india/",
},
{
image: img2,
title:
"Top 10 Exotic VISA Free Honeymoon Destinations for Indians 2026 Romantic Travel Guide | Travel Rethink Ways",
tag: "FAMILY GETAWAYS",
link:
"https://travel.rethinkways.com/top-10-visa-free-honeymoon-destinations/",
},
{
image: img3,
title:
"Top 10 Family Friendly Destinations in India | Travel Rethink Ways",
tag: "HONEYMOON GLOBAL",
link:
"https://travel.rethinkways.com/family-friend-destination/",
},
];

useEffect(() => {
const interval = setInterval(() => {
setActive((prev) => (prev + 1) % slides.length);
}, 4000);


return () => clearInterval(interval);


}, []);

return ( <div className="w-full max-w-[420px] sm:max-w-[1368px] mx-auto px-0 sm:px-4 lg:px-6 md:mt-[30px] lg:mt-[40px]">


  {/* CARD */}
  <div className="group relative w-full h-[380px] sm:h-[480px] md:h-[560px] lg:h-[540px] overflow-hidden rounded-none md:rounded-[16px] shadow-lg">

    {/* SLIDES */}
    {slides.map((slide, index) => (
      <img
        key={index}
        src={slide.image}
        alt="banner"
        className={`absolute inset-0 w-full h-full object-cover brightness-[0.75] pointer-events-none transition-opacity duration-700 ${
          index === active ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* MOBILE OVERLAYS */}
    <div className="absolute inset-0 bg-[#4b6f9e]/40 md:hidden"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden"></div>

    {/* DESKTOP OVERLAY */}
    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0"></div>

    {/* TAG */}
    <span className="absolute top-0 left-4 md:left-10 bg-[#55364b] md:bg-red-600 text-white text-[10px] sm:text-[11px] font-semibold uppercase px-2 py-[3px] rounded-sm shadow z-20">
      {slides[active].tag}
    </span>

    {/* BOOKMARK */}
    <button
      onClick={() => setBookmark(!bookmark)}
      className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-md z-20"
    >
      {bookmark ? <FaBookmark /> : <FaRegBookmark />}
    </button>

    {/* TEXT */}
    <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 max-w-[720px] text-white z-30">

      <h1 className="text-[24px] md:text-[36px] lg:text-[46px] leading-[1.25] mb-5 font-['Yeseva_One']">
        {slides[active].title}
      </h1>

      {/* HOVER BUTTON (card hover trigger) */}
      <a
  href={slides[active].link}
  className="absolute right-[-500px] bottom-[-80px]"
>
  <div
    className="
    relative flex items-center
    h-[44px] w-[44px]
    rounded-full
    bg-[#D02525]
    text-white
    overflow-hidden
    transition-all duration-[650ms]
    ease-[cubic-bezier(0.19,1,0.22,1)]
    group-hover:w-[150px]
    "
    style={{ fontFamily: "Poppins, Helvetica, Arial, sans-serif" }}
  >

    {/* Arrow */}
    <span
      className="
      flex items-center justify-center
      w-[44px] h-[44px]
      text-[14px]
      transition-transform duration-[650ms]
      group-hover:translate-x-[2px]
      "
    >
      →
    </span>

    {/* Text */}
    <span
      className="
      absolute left-[52px]
      whitespace-nowrap
      text-[14px]
      font-semibold
      opacity-0
      transform translate-x-[-10px]
      transition-all duration-[650ms]
      delay-[40ms]
      group-hover:opacity-100
      group-hover:translate-x-0
      "
    >
      READ MORE
    </span>

  </div>
</a>

    </div>

    {/* DOT NAVIGATION */}
    <div className="hidden md:flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-20">
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

  </div>
</div>


);
}
