import brandImage from "../assets/brandstory@.jpg";
import { FaRegBookmark } from "react-icons/fa";

export default function BrandStory() {
  return (
    <section className="max-w-[1320px] mx-auto mt-[60px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[36px] bg-red-600"></div>
          <h2 className="text-[36px] font-normal pl-[ 15px] font-[Poppins]">
  Brand Story
</h2>
          
        </div>

<button className="group flex items-center gap-2 px-[20px] py-[9px] text-[12px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">

  VIEW ALL

  <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
    →
  </span>

</button>
      </div>


      {/* Banner Card */}
      <div className="relative group">

        {/* Banner Image */}
        <img
          src={brandImage}
          alt="brand story"
          className="w-540px rounded-md"
        />

        {/* BRAND STORY TAG */}
        <span className="absolute top-[8px] left-[42px] bg-red-600 text-white text-[11px] px-3 py-1 uppercase font-semibold">
          BRAND STORY
        </span>


        {/* BOOKMARK */}
        <div className="absolute top-[15px] right-[20px] bg-white w-[36px] h-[36px] rounded-full flex items-center justify-center shadow cursor-pointer">
          <FaRegBookmark className="text-red-600 text-[14px]" />
        </div>


        {/* TEXT OVERLAY */}
        <div className="absolute top-[160px] left-[73px] max-w-[621px]">

          <h3 className="font-['Yeseva_One'] text-[46px] leading-[56px] text-black">
            The Tourist 360: A Luxury Maldives Honeymoon
            Specialist in South India | Travel Rethink Ways
          </h3>

          <button className="mt-5 flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500">

            READ MORE

            <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
              ➜
            </span>

          </button>

        </div>

      </div>

    </section>
  );
}