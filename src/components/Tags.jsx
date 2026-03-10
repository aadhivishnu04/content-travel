import React from "react";
import * as Fa from "react-icons/fa";

const tags = [
{ icon:<Fa.FaLeaf/>, text:"Season Stories", bg:"#ffe5e9", color:"#8f1f35" },
{ icon:<Fa.FaPassport/>, text:"VISA-Free", bg:"#FFF0DA", color:"#8F4F0A" },
{ icon:<Fa.FaUtensils/>, text:"Culinary", bg:"#fff4e5", color:"#87541b" },
{ icon:<Fa.FaBed/>, text:"Unique Stays", bg:"#dcfaec", color:"#145c43" },
{ icon:<Fa.FaShip/>, text:"Cruises", bg:"#d8fbf2", color:"#0f6656" },
{ icon:<Fa.FaBookOpen/>, text:"Travel Stories", bg:"#dbf2ff", color:"#155a82 " },
{ icon:<Fa.FaStar/>, text:"Attractions", bg:"#e2e7ff", color:"#2e3a86" },

{ icon:<Fa.FaHeart/>, text:"Honeymoon – India", bg:"#eae3ff", color:"#563392" },
{ icon:<Fa.FaHeart/>, text:"Romantic Escapes", bg:"#ffe6f2", color:"#8e2a59" },
{ icon:<Fa.FaUsers/>, text:"Family Getaways", bg:"#ffe9eb", color:"#933430" },
{ icon:<Fa.FaUserFriends/>, text:"Friends Trip", bg:"#fff4d9", color:"#5a4500" },
{ icon:<Fa.FaUser/>, text:"Solo Travel", bg:"#ffebd5", color:"#8f4c22" },
{ icon:<Fa.FaFlag/>, text:"India 2026", bg:"#e3ffef", color:"#1f6e4c" },

{ icon:<Fa.FaGlobe/>, text:"International Monthly Getaways", bg:"#fff4d9", color:"#5a4500" },
{ icon:<Fa.FaCalendarAlt/>, text:"India Monthly Getaways", bg:"#d4f5e1", color:"#1f6b44" },

{ icon:<Fa.FaGlobe/>, text:"Honeymoon – Global", bg:"#dcf7ff", color:"#1f5f75" },
{ icon:<Fa.FaFileAlt/>, text:"VISA Process", bg:"#ffe8ef", color:"#8f3e57" },
{ icon:<Fa.FaUmbrellaBeach/>, text:"Islands", bg:"#e2f0ff", color:"#1e4c88" },
{ icon:<Fa.FaLightbulb/>, text:"Travel Tips & Essential", bg:"#fff1e0", color:"#935a1c" },

{ icon:<Fa.FaMountain/>, text:"Adventure", bg:"#f1e4ff", color:"#4a2592" },
{ icon:<Fa.FaMountain/>, text:"Hill Station", bg:"#e0fff2", color:"#206a5a" },
{ icon:<Fa.FaHiking/>, text:"Trekking", bg:"#edffde", color:"#3e6e1f" },
{ icon:<Fa.FaCampground/>, text:"Camping", bg:"#fff2dc", color:"#8f5a1d" },
{ icon:<Fa.FaWater/>, text:"Beaches", bg:"#ffe6c7", color:"#8a3f13" },

{ icon:<Fa.FaCalendarAlt/>, text:"Weekend", bg:"#d7eaff", color:"#1e4178" },
{ icon:<Fa.FaTree/>, text:"Themeparks", bg:"#ebf3dc", color:"#556a19" },
{ icon:<Fa.FaGem/>, text:"Hidden Gems", bg:"#f7e2ff", color:"#71267c" },
{ icon:<Fa.FaMagic/>, text:"Fantasy", bg:"#ffe8de", color:"#8f4a1f" },
{ icon:<Fa.FaSun/>, text:"Deserts", bg:"#fff4e3", color:"#866a22" },

{ icon:<Fa.FaLeaf/>, text:"Nature", bg:"#e4f9f0", color:"#1e6a58" },
{ icon:<Fa.FaTree/>, text:"Parks", bg:"#eae6f9", color:"#47408a" },
{ icon:<Fa.FaLandmark/>, text:"Wonders", bg:"#e5e7ff", color:"#343c96" },
{ icon:<Fa.FaTheaterMasks/>, text:"Festivals", bg:"#f4e2f7", color:"#71367c" },

{ icon:<Fa.FaCity/>, text:"City Escapes", bg:"#e9fff4", color:"#1f6e55" },
{ icon:<Fa.FaPaw/>, text:"Wildlife", bg:"#dbfff6", color:"#146b5e" }
];

export default function Tags(){
  return (
    <div className="w-full max-w-[1204px] mx-auto px-3 sm:px-4 md:px-6 my-[0px 0px 12px] flex flex-wrap gap-[10px] sm:gap-[12px] md:gap-[14px] font-[Poppins]">

      {tags.map(({icon,text,bg,color},i)=>(
        <div
          key={i}
          className="flex items-center gap-[6px] sm:gap-[8px] px-[10px] py-[8px] sm:px-[12px] sm:py-[10px] rounded-[10px] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[20px] font-medium cursor-pointer transition-all duration-200"
          style={{ background: bg, color }}
        >
          <span className="text-[15px] sm:text-[16px]">
            {icon}
          </span>

          {text}
        </div>
      ))}

    </div>
  );
}