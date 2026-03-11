import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-blog-visa-free-destination-cover-1140x540.jpg";

export default function VisaFreeEscapes() {

  const [bookmark, setBookmark] = useState(false);

  return (
    <section className="max-w-[1320px] mx-auto px-4 my-10">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
                  <div className="w-[3px] h-[26px] bg-red-700"></div>
<h2 className="text-[36px] font-normal font-[Poppins]">
            VISA-Free Escapes
          </h2>
        </div>

      <button className="group flex items-center gap-2 px-[20px] py-[9px] text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">
          VIEW ALL
          <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
            →
          </span>
        </button>

      </div>


      {/* CARD */}

      <div className="flex rounded-[18px] overflow-hidden shadow-sm group">

        {/* LEFT IMAGE */}

        <div className="w-[58%]">
          <img
            src={img}
            alt="visa free"
            className="w-full h-[540px] object-cover"
          />
        </div>


        {/* RIGHT CONTENT */}

        <div className="w-[42%] bg-[#aeb9c8] p-12 relative flex flex-col justify-center group">

          {/* TAG */}

          <span className="absolute top-0 left-6 bg-[#3f4c60] text-white text-[10px] px-3 py-1 rounded">
            VISA-FREE
          </span>


          {/* BOOKMARK */}

          <button
            onClick={() => setBookmark(!bookmark)}
            className="absolute top-6 right-6 w-9 h-9 bg-white rounded-full border flex items-center justify-center text-red-500"
          >
            {bookmark ? <FaBookmark /> : <FaRegBookmark />}
          </button>


          {/* TITLE */}

          <h3 className="font-['Yeseva_One'] text-[36px] leading-tight mb-5">

            Top 10 Exotic VISA Free Honeymoon
            Destinations for Indians 2026 Romantic
            Travel Guide | Travel Rethink Ways

          </h3>


          {/* DESCRIPTION */}

          <p className="font-[Poppins] text-gray-700 text-sm mb-8">

            Planning a honeymoon should be exciting,
            not stressful. Yet VISA paperwork often
            becomes the most...

          </p>


          {/* BUTTON */}

<button
className="mt-[20px] ml-auto flex items-center gap-[8px] px-[22px] py-[10px] text-[13px] font-semibold rounded-full bg-[#2f3e4f] text-white border border-transparent transition-all duration-300 group-hover:bg-black group-hover:border-red-500"
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