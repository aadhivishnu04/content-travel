import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import heroImg from "../assets/horse.jpg";
import card1 from "../assets/visa.jpg";
import card2 from "../assets/secondcard2.jpg";
import card3 from "../assets/thirdcard3.jpg";

export default function LatestUpdates() {

const [heroBookmark, setHeroBookmark] = useState(false);
const [cardBookmark, setCardBookmark] = useState([false, false, false]);

const toggleCard = (index) => {
const updated = [...cardBookmark];
updated[index] = !updated[index];
setCardBookmark(updated);
};

const cards = [
{
tag: "VISA-FREE",
img: card1,
title: "Top 10 Exotic VISA Free Honeymoon Destinations for..."
},
{
tag: "INDIA",
img: card2,
title: "Best Travel Deals 2026: International Vacation Offers..."
},
{
tag: "INDIA",
img: card3,
title: "India Travel Deals 2026: Top Domestic Vacation Offers..."
}
];

return ( <section className="w-full md:max-w-[1320px] mx-auto px-4 my-10 md:my-14">


  {/* HEADER */}

  <div className="flex items-center justify-between mb-6 md:mb-8">

    <div className="flex items-center gap-3">
      <div className="w-[3px] h-[24px] md:h-[26px] bg-red-500"></div>

      <h2 className="text-[18px] md:text-[22px] font-semibold">
        Latest Updates
      </h2>
    </div>

    <button className="w-[36px] h-[36px] md:w-auto md:h-auto flex items-center justify-center md:gap-2 px-0 md:px-5 py-0 md:py-2 bg-red-500 text-white text-[11px] md:text-sm rounded-full transition-all duration-300 hover:bg-black">

  <span className="hidden md:inline">VIEW ALL</span>

  <span className="rotate-[-45deg] transition-transform duration-300">
    →
  </span>

</button>

  </div>


  {/* HERO ARTICLE */}

  <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8 md:mb-10">

    {/* IMAGE */}

    <div className="w-full md:w-[48%] relative">

      <img
        src={heroImg}
        alt=""
        className="rounded-[16px] w-full h-[220px] md:h-[471px] object-cover"
      />

      <span className="absolute top-0 left-3 md:top-0 md:left-4 bg-red-500 text-white text-[10px] px-2 py-1 rounded">
        WILDLIFE
      </span>

      <button
        onClick={() => setHeroBookmark(!heroBookmark)}
        className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-9 md:h-9 bg-white rounded-full border flex items-center justify-center text-red-500"
      >
        {heroBookmark ? <FaBookmark /> : <FaRegBookmark />}
      </button>

    </div>


    {/* CONTENT */}

    <div className="w-full md:w-[52%] flex flex-col justify-center">

      <h3 className="font-['Yeseva_One'] text-[18px] md:text-[30px] leading-[26px] md:leading-[38px] text-[#0D1317]">

        The Wild Splendor of India: 15 Breathtaking
        Forests, Wildlife & Untamed Landscapes |
        Travel Rethink Ways

      </h3>

      <p className="font-[Poppins] text-[13px] md:text-[22px] leading-[20px] md:leading-[26px] text-[#5B5F62] mt-[10px] md:mt-[14px]">

        India is not just monuments and megacities.
        The Wild Splendor of India unfolds far beyond
        its historic forts and bustling...

      </p>

      <button className="mt-[14px] md:mt-[18px] ml-auto bg-red-500 text-white px-[16px] md:px-[22px] py-[8px] md:py-[10px] rounded-full text-[11px] md:text-[13px] font-semibold flex items-center gap-2 group hover:bg-black transition-all duration-300">

        READ MORE

        <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
          →
        </span>

      </button>

    </div>

  </div>


  {/* CARD GRID */}

  <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[40px]">

    {cards.map((card, index) => (

      <div
        key={index}
        className="border border-[#EDEDED] rounded-[14px] group p-3 md:p-4 hover:shadow-sm transition"
      >

        {/* IMAGE */}

        <div className="relative mb-3 md:mb-4">

          <img
            src={card.img}
            alt=""
            className="rounded-[12px] w-full h-[200px] md:h-[350px] object-cover"
          />

          <span className="absolute top-0 left-2 md:top-0 md:left-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded">
            {card.tag}
          </span>

          <button
            onClick={() => toggleCard(index)}
            className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-8 md:h-8 bg-white rounded-full border flex items-center justify-center text-red-500"
          >
            {cardBookmark[index] ? <FaBookmark /> : <FaRegBookmark />}
          </button>

        </div>


        {/* TITLE */}

        <h4 className="font-['Yeseva_One'] text-[16px] md:text-[22px] leading-[22px] md:leading-[30px] text-[#0D1317] mb-3">
          {card.title}
        </h4>


        {/* BUTTON */}

        <button className="ml-auto px-[16px] md:px-[22px] py-[8px] md:py-[10px] rounded-full text-[11px] md:text-[13px] font-semibold flex items-center gap-2 bg-red-500 text-white border border-transparent transition-all duration-300 group-hover:bg-black group-hover:border-red-500">

          READ MORE

          <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
            →
          </span>

        </button>

      </div>

    ))}

  </div>

</section>


);
}
