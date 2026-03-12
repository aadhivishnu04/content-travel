import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-blog-visa-free-destination-cover-1140x540.jpg";

export default function VisaFreeEscapes() {

const [bookmark, setBookmark] = useState(false);

return ( <section className="w-full md:max-w-[1320px] mx-auto mt-[40px] md:mt-[60px] px-0 md:px-4">


  {/* HEADER */}
  <div className="flex items-center justify-between mb-6">

    <div className="flex items-center gap-3">
      <div className="w-[3px] h-[26px] bg-red-700"></div>

      <h2 className="text-[20px] md:text-[36px] font-normal font-[Poppins]">
        VISA-Free Escapes
      </h2>
    </div>

  <button className="group w-[36px] h-[36px] md:w-auto md:h-auto flex items-center justify-center md:gap-2 px-0 md:px-[20px] py-0 md:py-[9px] text-[11px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">

  <span className="hidden md:inline">VIEW ALL</span>

  <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
    →
  </span>

</button>

  </div>


  {/* CARD */}
  <div className="flex flex-col md:flex-row rounded-[18px] overflow-hidden shadow-sm group">


    {/* IMAGE */}
    <div className="relative w-full md:w-[58%]">

      <img
        src={img}
        alt="visa free"
        className="w-full h-[240px] md:h-[540px] object-cover"
      />

      {/* TAG (mobile on image) */}
      <span className="absolute top-[0px] left-[12px] md:hidden bg-[#3f4c60] text-white text-[10px] px-3 py-1 rounded">
        VISA-FREE
      </span>

      {/* BOOKMARK */}
      <button
        onClick={() => setBookmark(!bookmark)}
        className="absolute top-[12px] right-[12px] md:hidden w-8 h-8 bg-white rounded-full border flex items-center justify-center text-red-500"
      >
        {bookmark ? <FaBookmark /> : <FaRegBookmark />}
      </button>

      {/* MOBILE BUTTON */}
      <button className="absolute bottom-[12px] right-[12px] md:hidden flex items-center gap-2 px-[14px] py-[6px] text-[11px] font-semibold rounded-full bg-[#2f3e4f] text-white">
        READ MORE →
      </button>

    </div>


    {/* CONTENT */}
    <div className="w-full md:w-[42%] bg-[#aeb9c8] px-[16px] py-[18px] md:p-12 relative flex flex-col md:justify-center">

      {/* TAG DESKTOP */}
      <span className="hidden md:block absolute top-0 left-6 bg-[#3f4c60] text-white text-[10px] px-3 py-1 rounded">
        VISA-FREE
      </span>

      {/* BOOKMARK DESKTOP */}
      <button
        onClick={() => setBookmark(!bookmark)}
        className="hidden md:flex absolute top-6 right-6 w-9 h-9 bg-white rounded-full border items-center justify-center text-red-500"
      >
        {bookmark ? <FaBookmark /> : <FaRegBookmark />}
      </button>

      {/* TITLE */}
      <h3 className="font-['Yeseva_One'] text-[16px] md:text-[36px] leading-[22px] md:leading-tight mb-3 md:mb-5">

        Top 10 Exotic VISA Free Honeymoon
        Destinations for Indians 2026 Romantic
        Travel Guide | Travel Rethink Ways

      </h3>


      {/* DESCRIPTION (desktop only) */}
      <p className="hidden md:block font-[Poppins] text-gray-700 text-sm mb-8">

        Planning a honeymoon should be exciting,
        not stressful. Yet VISA paperwork often
        becomes the most...

      </p>


      {/* BUTTON DESKTOP */}
      <button
        className="hidden md:flex mt-[20px] ml-auto items-center gap-[8px] px-[22px] py-[10px] text-[13px] font-semibold rounded-full bg-[#2f3e4f] text-white border border-transparent transition-all duration-300 group-hover:bg-black group-hover:border-red-500"
      >

        READ MORE

        <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
          →
        </span>

      </button>

    </div>

  </div>

</section>


);
}
