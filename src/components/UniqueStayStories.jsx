import poolImg from "../assets/rethinkways-blog-boutique-kerala-cover.jpg";
import { FaRegBookmark } from "react-icons/fa";

export default function UniqueStay() {
  return (
    <section className="max-w-[1320px] mx-auto mt-[60px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-[25px]">
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[26px] bg-red-700"></div>
<h2 className="text-[36px] font-normal font-[Poppins]">Unique Stay Stories</h2>
        </div>

         <button className="group flex items-center gap-2 px-[20px] py-[9px] text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">
          VIEW ALL
          <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* Card */}
      <div className="relative rounded-[10px] overflow-hidden group">

        {/* Image */}
        <img
          src={poolImg}
          className="w-full h-[540px] object-cover"
          alt="Kerala Pool"
        />

        {/* Bookmark */}
        <div className="absolute top-[16px] right-[16px] w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow">
          <FaRegBookmark className="text-red-600 text-[14px]" />
        </div>

        {/* Left Content Card */}
       <div className="absolute left-[100px] top-[0px] w-[528px] bg-[#F1E4FF] p-[32px] rounded-[10px] ">

  {/* Tag */}
<span className="absolute top-[0px] left-[32px] bg-[#5b3dbb] text-white text-[11px] px-[12px] py-[4px] uppercase font-semibold rounded-[3px]">
  UNIQUE STAYS
</span>

  {/* Heading */}
  <h3 className="font-['Yeseva_One'] text-[40px] leading-[48px] text-black mt-[18px]">
  10 Boutique Hotels in Kerala Nature Meets Timeless Charm...
</h3>

  {/* Paragraph */}
 <p className="font-[Poppins] text-[18px] leading-[28px] text-gray-700 mt-[20px] max-w-[420px]">
  Kerala, often called God’s Own Country, is more than a destination
  it’s an emotion. A place misty hills meet...
</p>


  {/* Button */}
<button className="mt-[24px] ml-[300px] flex items-center gap-2 px-[24px] py-[11px] bg-[#5b3dbb] text-white text-[14px] font-semibold rounded-full border-2 border-transparent group-hover:bg-black group-hover:border-red-600 transition-all duration-300">

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