
import indiaImage from "../assets/india.jpg";
import { FaRegBookmark } from "react-icons/fa";

export default function ExperienceIndia() {
  return (
    <section className="max-w-[1320px] mx-auto mt-[60px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-[30px]">

        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[32px] bg-red-600"></div>

          <h2 className="text-[36px] font-normal font-[Poppins]">
            Experience India by Month 2026
          </h2>
        </div>

        <button className="group flex items-center gap-2 px-[20px] py-[9px] text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">
          VIEW ALL
          <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
            →
          </span>
        </button>

      </div>

      {/* Card */}
      <div className="grid grid-cols-[65%_35%] rounded-[14px] overflow-hidden group">

        {/* Left Image */}
        <img
          src={indiaImage}
          alt="India April"
          className="w-[858px] h-[540px] object-cover"
        />

        {/* Right Content */}
      <div className="bg-[#c2e5df] px-[40px] pt-[36px] pb-[34px] relative flex flex-col">

          {/* Tag */}
          <span className="absolute top-[1px] left-[18px] text-[11px] px-3 py-1 bg-[#244B46] text-white uppercase font-semibold">
            INDIA 2026
          </span>

          {/* Bookmark */}
          <div className="absolute top-[18px] right-[18px] w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow">
            <FaRegBookmark className="text-red-600 text-[14px]" />
          </div>

          {/* Title */}
          <h3 className="font-['Yeseva_One'] text-[36px] leading-[44px] mt-[38px] tracking-[0.2px] text-black max-w-[420px]">
  30 Best Places to Visit in April in India 2026 | Travel Rethink Ways
</h3>
          {/* Description */}
       <p className="text-[16px] leading-[28px] text-[#2f2f2f] mt-[80px] max-w-[380px] font-[Poppins] font-normal">
  April marks the beginning of summer in India but several destinations still offer...
</p>
          {/* Button */}
             <button className="mt-auto self-start ml-[230px] relative -top-[40px] flex items-center gap-2 px-[22px] py-[10px] bg-[#244B46] text-white rounded-full border-2 border-[#244B46] text-[14px] font-semibold group-hover:bg-black group-hover:border-red-600 transition-all duration-300">              
            READ MORE
            <span className="-rotate-[35deg] group-hover:rotate-0 transition-transform duration-300">
              →
            </span>
          </button>

        </div>

      </div>
    </section>
  );
}

