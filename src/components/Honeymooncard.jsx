import React from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.webp";
import card6 from "../assets/card6.jpg";

export default function HoneymoonSection() {



const sections = [
{
title:"World Honeymoon Exclusive 2026",
tag:"GLOBAL",
posts:[
{title:"Valentine’s Travel 2026 – Romantic Getaways | Travel...",image:card1,bg:"#cfe7e1",btn:"#3f5b54"},
{title:"Bali Honeymoon: Love Woven in Waves Travel...",image:card2,bg:"#e7d2ea",btn:"#4b3346"},
{title:"Maldives Honeymoon Guide: Dreamy Escapes for Couple...",image:card3,bg:"#efcaa7",btn:"#6a4532"}
]
},
{
title:"Exclusive India Honeymoon 2026",
tag:"INDIA",
posts:[
{title:"Best Honeymoon Destinations in India by 2026 Guide...",image:card4,bg:"#f0c7c9",btn:"#4b3340"},
{title:"Love in Every Glow: India’s  Candlelight Dining Spots...",image:card5,bg:"#f1e0a6",btn:"#6b442d"},
{title:"India’s Enchanting Honeymoon 2026 | Travel...",image:card6,bg:"#cfe3ea",btn:"#92a8adff"}
]
}
]

return(

<div style={{fontFamily:"Poppins"}} className="w-full max-w-[1352px] mx-auto px-4 mt-[60px] space-y-[40px] md:space-y-[60px]">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Yeseva+One&display=swap" rel="stylesheet"/>

{sections.map((section,sIndex)=>(

<div key={sIndex}>

{/* HEADER */}

<div className="flex items-start sm:items-center justify-between gap-4 mb-[24px] md:mb-[30px]">

<div className="flex items-center gap-[10px]">

<span className="w-[3px] h-[26px] md:h-[30px] bg-red-600"></span>

<h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium leading-[1.2]">
{section.title}
</h2>

</div>

<button className="group w-fit flex items-center gap-2 px-[20px] py-[9px] text-[12px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white hover:bg-black transition-all duration-300">

VIEW ALL

<span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>

</div>

{/* CARDS */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] md:gap-[30px]">

{section.posts.map((post,i)=>{

const id = `${sIndex}-${i}`

return(

<div
key={id}
style={{background:post.bg}}
className="rounded-[20px] p-[14px] md:p-[16px]  cursor-pointer group"
>

<div className="relative">
  <img
    src={post.image}
    className="w-full h-[375px] object-coverobject-[center_25%] rounded-[12px]"
  />
  <button className="absolute top-[10px] right-[10px] w-[34px] h-[34px] flex items-center justify-center bg-white rounded-full shadow-md hover:bg-red-50 transition">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="2"
    className="w-[16px] h-[16px]"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
  </svg>
</button>

<span
  className="absolute top-[0px] left-[12px] text-[10px] md:text-[11px] px-[10px] py-[4px] text-white rounded-sm uppercase tracking-wider"
  style={{ background: post.btn, opacity: 0.85 }}
>
  HONEYMOON {section.tag}
</span>



</div>

<h3
className="mt-[14px] md:mt-[18px] text-[18px] sm:text-[20px] md:text-[22px] leading-[1.35]"
style={{fontFamily:"Yeseva One"}}
>
{post.title}
</h3>
<button
className="mt-[18px] ml-auto px-[22px] py-[10px] text-[13px] font-semibold rounded-full flex items-center gap-[8px] text-white border border-transparent transition-all duration-300  group-hover:border-red-500 hover:bg-red hover:border-red-500"
style={{ background: post.btn }}
>
READ MORE

<span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>
</div>

)

})}

</div>

</div>

))}

</div>

)

}
