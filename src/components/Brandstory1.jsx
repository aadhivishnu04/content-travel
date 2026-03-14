import { useState } from "react";
import brandImage from "../assets/brandstory@.jpg";
import brandImageMobile from "../assets/mobile.jpeg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function BrandStory() {

const [bookmark,setBookmark] = useState(false)

return (

<section className="max-w-[1320px] mx-auto mt-[40px] md:mt-[60px] px-4 lg:px-0">

  {/* Header */}
  <div className="flex items-center justify-between mb-6 md:mb-10">
    <div className="flex items-center gap-3">
      <div className="w-[3px] h-[28px] md:h-[36px] bg-red-600"></div>

      <h2 className="text-[15px] md:text-[36px] font-normal font-[Poppins]">
        Brand Story
      </h2>
    </div>

    <button className="group w-[36px] h-[36px] md:w-auto md:h-auto flex items-center justify-center md:gap-2 px-0 md:px-[20px] py-0 md:py-[9px] text-[11px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">
  
      <span className="hidden md:inline">VIEW ALL</span>

      <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
        →
      </span>

    </button>

  </div>

  {/* Banner */}
  <div className="relative group">

    {/* Desktop Image */}
    <img
      src={brandImage}
      alt="brand story"
      className="hidden md:block w-full rounded-md"
    />

    {/* Mobile Image */}
    <img
      src={brandImageMobile}
      alt="brand story"
      className="block md:hidden w-full rounded-md"
    />

    {/* BRAND STORY TAG */}
    <span className="absolute top-[0px] left-[10px] md:left-[42px] bg-red-600 text-white text-[10px] md:text-[11px] px-2 md:px-3 py-1 uppercase font-semibold">
      BRAND STORY
    </span>

    {/* BOOKMARK */}
    <div
      onClick={()=>setBookmark(!bookmark)}
      className="absolute top-[10px] right-[10px] md:top-[15px] md:right-[20px] bg-white w-[30px] h-[30px] md:w-[36px] md:h-[36px] rounded-full flex items-center justify-center shadow cursor-pointer"
    >
      {bookmark ? (
        <FaBookmark className="text-red-600 text-[12px] md:text-[14px]" />
      ) : (
        <FaRegBookmark className="text-red-600 text-[12px] md:text-[14px]" />
      )}
    </div>

    {/* MOBILE READ MORE */}
    <div
      className="
      absolute bottom-[20px] right-4 md:hidden
      flex items-center
      h-[40px] w-[40px]
      rounded-full
      bg-red-600
      text-white
      overflow-hidden
      transition-all duration-[650ms]
      ease-[cubic-bezier(0.19,1,0.22,1)]
      group-hover:w-[130px]
      "
    >

      <span className="flex items-center justify-center w-[40px] h-[40px] text-[12px]">
        →
      </span>

      <span className="
        absolute left-[46px]
        whitespace-nowrap
        text-[12px]
        font-semibold
        opacity-0
        transform translate-x-[-8px]
        transition-all duration-[650ms]
        delay-[40ms]
        group-hover:opacity-100
        group-hover:translate-x-0
      ">
        READ MORE
      </span>

    </div>

    {/* TEXT OVERLAY (Desktop Only) */}
    <div className="hidden md:block absolute top-[160px] left-[73px] max-w-[621px]">

      <h3 className="font-['Yeseva_One'] text-[46px] leading-[56px] text-black">
        The Tourist 360: A Luxury Maldives Honeymoon
        Specialist in South India | Travel Rethink Ways
      </h3>

      {/* DESKTOP READ MORE */}
      <div
        className="
        mt-5 flex items-center
        h-[44px] w-[44px]
        rounded-full
        bg-red-600
        text-white
        overflow-hidden
        transition-all duration-[650ms]
        ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:w-[150px]
        "
      >

        <span className="flex items-center justify-center w-[44px] h-[44px] text-[14px]">
          →
        </span>

        <span className="
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
        ">
          READ MORE
        </span>

      </div>

    </div>

  </div>

</section>

);
}