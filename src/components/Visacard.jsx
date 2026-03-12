import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-serbia-visa-1140x570.jpg";

export default function VisaProcess() {

const [bookmark, setBookmark] = useState(false);

return (


<section className="w-full md:max-w-[1352px] mx-auto px-0 md:px-4 my-10">

  {/* HEADER */}
  <div className="flex items-center justify-between mb-6">

    <div className="flex items-center gap-3">
      <div className="w-[3px] h-[26px] bg-red-600"></div>

      <h2 className="text-[20px] md:text-[36px] font-normal font-[Poppins]">
        VISA Process
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
  <div className="md:rounded-[16px] overflow-hidden group">

    {/* IMAGE WRAPPER */}
    <div className="relative">

      <img
        src={img}
        alt="Serbia Visa"
        className="w-full h-[240px] md:h-[540px] object-cover"
      />

      {/* OVERLAY (DESKTOP ONLY) */}
      <div className="hidden md:block absolute inset-0 bg-black/40"></div>


      {/* TAG */}
      <span className="absolute top-[0px] left-[12px] md:top-0 md:left-11  text-white text-[10px] bg-[#7a5959] px-2 py-1">
        VISA-PROCESS
      </span>


      {/* BOOKMARK */}
      <button
        onClick={() => setBookmark(!bookmark)}
        className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500"
      >
        {bookmark ? <FaBookmark /> : <FaRegBookmark />}
      </button>


      {/* MOBILE READ MORE */}
      <button className="absolute bottom-[15px] right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#7a5959]  hover:bg-[#4a2f4a] transition">
        READ MORE →
      </button>


      {/* DESKTOP TEXT */}
      <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-[736px]">

        <h3 className="font-['Yeseva_One'] text-[26px] md:text-[36px] lg:text-[46px] leading-[1.25]  ">
          Serbia VISA for Indian <br />
          Passport Holders 2026 | Travel Rethink Ways
        </h3>

        <button className="mt- flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500">

          READ MORE

          <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
            ➜
          </span>

        </button>

      </div>

    </div>


    {/* MOBILE TITLE BLOCK */}
    <div className="md:hidden bg-[#7a5959] text-white py-4 px-4">

      <h3 className="font-['Yeseva_One'] text-[16px] leading-[22px]">
        Serbia VISA for Indian Passport Holders 2026 | Travel Rethink Ways
      </h3>

    </div>

  </div>

</section>


);
}
