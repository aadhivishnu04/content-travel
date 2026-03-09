import React from "react";
import * as Fa from "react-icons/fa";

const tags = [
{ icon:<Fa.FaLeaf/>, text:"Season Stories", bg:"#efd2d2", color:"#9e2a2a" },
{ icon:<Fa.FaPassport/>, text:"VISA-Free", bg:"#ecdcc4", color:"#7a5c23" },
{ icon:<Fa.FaUtensils/>, text:"Culinary", bg:"#ead6be", color:"#7b4a00" },
{ icon:<Fa.FaBed/>, text:"Unique Stays", bg:"#cfe7d8", color:"#206040" },
{ icon:<Fa.FaShip/>, text:"Cruises", bg:"#cfe5e3", color:"#1b6a6a" },
{ icon:<Fa.FaBookOpen/>, text:"Travel Stories", bg:"#cfdde8", color:"#2b5573" },
{ icon:<Fa.FaStar/>, text:"Attractions", bg:"#d7d9ea", color:"#3f4aa3" },

{ icon:<Fa.FaHeart/>, text:"Honeymoon – India", bg:"#dcd5f0", color:"#5b44b2" },
{ icon:<Fa.FaHeart/>, text:"Romantic Escapes", bg:"#f0cfd7", color:"#a02e4c" },
{ icon:<Fa.FaUsers/>, text:"Family Getaways", bg:"#f1d6d2", color:"#9c3a2e" },
{ icon:<Fa.FaUserFriends/>, text:"Friends Trip", bg:"#f0e0bf", color:"#7a5d15" },
{ icon:<Fa.FaUser/>, text:"Solo Travel", bg:"#f1dccf", color:"#9a4a2a" },
{ icon:<Fa.FaFlag/>, text:"India 2026", bg:"#d6eddc", color:"#2b7a49" },

{ icon:<Fa.FaGlobe/>, text:"International Monthly Getaways", bg:"#efe0be", color:"#7a5a15" },
{ icon:<Fa.FaCalendarAlt/>, text:"India Monthly Getaways", bg:"#d2e9d6", color:"#256b3a" },

{ icon:<Fa.FaGlobe/>, text:"Honeymoon – Global", bg:"#d4e5ec", color:"#2e6075" },
{ icon:<Fa.FaFileAlt/>, text:"VISA Process", bg:"#f0d6da", color:"#9a2f48" },
{ icon:<Fa.FaUmbrellaBeach/>, text:"Islands", bg:"#d3dfec", color:"#365b8a" },
{ icon:<Fa.FaLightbulb/>, text:"Travel Tips & Essential", bg:"#efe1cd", color:"#8a5a2c" },

{ icon:<Fa.FaMountain/>, text:"Adventure", bg:"#e0d6f0", color:"#5a39a5" },
{ icon:<Fa.FaMountain/>, text:"Hill Station", bg:"#d6e9de", color:"#2c7a4d" },
{ icon:<Fa.FaHiking/>, text:"Trekking", bg:"#e2f0d4", color:"#4a7c1a" },
{ icon:<Fa.FaCampground/>, text:"Camping", bg:"#f1dfc9", color:"#8a4e1a" },
{ icon:<Fa.FaWater/>, text:"Beaches", bg:"#f3dfc4", color:"#9c5d1f" },

{ icon:<Fa.FaCalendarAlt/>, text:"Weekend", bg:"#d3e0ef", color:"#2b4f86" },
{ icon:<Fa.FaTree/>, text:"Themeparks", bg:"#e1ecd3", color:"#507b1a" },
{ icon:<Fa.FaGem/>, text:"Hidden Gems", bg:"#eadcf0", color:"#6a3a8c" },
{ icon:<Fa.FaMagic/>, text:"Fantasy", bg:"#f2dfd2", color:"#a14a1d" },
{ icon:<Fa.FaSun/>, text:"Deserts", bg:"#f0e4c8", color:"#8a6b21" },

{ icon:<Fa.FaLeaf/>, text:"Nature", bg:"#d8efe2", color:"#1e7a52" },
{ icon:<Fa.FaTree/>, text:"Parks", bg:"#d9ddef", color:"#3d4c9a" },
{ icon:<Fa.FaLandmark/>, text:"Wonders", bg:"#d7d8f1", color:"#4043a1" },
{ icon:<Fa.FaTheaterMasks/>, text:"Festivals", bg:"#e6d6f0", color:"#7a3e94" },

{ icon:<Fa.FaCity/>, text:"City Escapes", bg:"#d6eee3", color:"#207a5c" },
{ icon:<Fa.FaPaw/>, text:"Wildlife", bg:"#d6efe7", color:"#1f7a65" }
];

export default function Tags(){
  return (
    <div className="w-full max-w-[1204px] mx-auto px-3 sm:px-4 md:px-6 my-[25px] flex flex-wrap gap-[10px] sm:gap-[12px] md:gap-[14px] font-[Poppins]">

      {tags.map(({icon,text,bg,color},i)=>(
        <div
          key={i}
          className="flex items-center gap-[6px] sm:gap-[8px] px-[10px] py-[8px] sm:px-[12px] sm:py-[10px] rounded-[10px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold cursor-pointer transition-all duration-200"
          style={{ background:bg, color }}
        >
          <span className="text-[12px] sm:text-[14px]">
            {icon}
          </span>

          {text}
        </div>
      ))}

    </div>
  );
}