import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-blog-visa-free-destination-cover-1140x540.jpg";

export default function VisaFreeEscapes() {

  const [bookmark, setBookmark] = useState(false);

  return (
    <section className="max-w-[1204px] mx-auto px-4 my-12">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[26px] bg-red-500"></div>

          <h2 className="text-[22px] font-semibold">
            VISA-Free Escapes
          </h2>
        </div>

        <button className="bg-red-500 text-white text-sm px-5 py-2 rounded-full">
          VIEW ALL →
        </button>

      </div>


      {/* CARD */}

      <div className="flex rounded-[18px] overflow-hidden shadow-sm">

        {/* LEFT IMAGE */}

        <div className="w-[58%]">
          <img
            src={img}
            alt="visa free"
            className="w-full h-[420px] object-cover"
          />
        </div>


        {/* RIGHT CONTENT */}

        <div className="w-[42%] bg-[#aeb9c8] p-12 relative flex flex-col justify-center">

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

          <h3 className="font-serif text-[32px] leading-tight mb-5">

            Top 10 Exotic VISA Free Honeymoon
            Destinations for Indians 2026 Romantic
            Travel Guide | Travel Rethink Ways

          </h3>


          {/* DESCRIPTION */}

          <p className="text-gray-700 text-sm mb-8">

            Planning a honeymoon should be exciting,
            not stressful. Yet VISA paperwork often
            becomes the most...

          </p>


          {/* BUTTON */}

          <button className="bg-black text-white px-6 py-2 rounded-full border-2 border-red-500 w-fit text-sm hover:bg-red-500 transition">

            READ MORE →

          </button>

        </div>

      </div>

    </section>
  );
}