import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.webp";
import card6 from "../assets/card6.jpg";

export default function HoneymoonSection() {

const [bookmark,setBookmark] = useState({})

const sections = [
{
title:"World Honeymoon Exclusive 2026",
tag:"GLOBAL",
posts:[
{title:"Valentine’s Travel 2026 – Romantic Getaways | Travel...",image:card1,bg:"#cfe7e1"},
{title:"Bali Honeymoon: Love Woven in Waves and Wonder | Travel...",image:card2,bg:"#e7d2ea"},
{title:"Maldives Honeymoon Guide: Dreamy Escapes for Every Couple...",image:card3,bg:"#efcaa7"}
]
},
{
title:"Exclusive India Honeymoon 2026",
tag:"INDIA",
posts:[
{title:"Best Honeymoon Destinations in India by Month 2026 Guide...",image:card4,bg:"#f0c7c9"},
{title:"Love in Every Glow: India’s Best Candlelight Dining Spots...",image:card5,bg:"#f1e0a6"},
{title:"India’s Most Enchanting Honeymoon Retreats 2026 | Travel...",image:card6,bg:"#cfe3ea"}
]
}
]

return(

<div style={{fontFamily:"Poppins"}} className="w-[1204px] mx-auto mt-[40px] space-y-[70px]">

{/* GOOGLE FONTS */}
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Yeseva+One&display=swap" rel="stylesheet"/>

{sections.map((section,sIndex)=>(
<div key={sIndex}>

{/* HEADER */}

<div className="flex justify-between items-center mb-[30px]">

<div className="flex items-center gap-[10px]">
<span className="w-[3px] h-[30px] bg-red-600"></span>
<h2 className="text-[36px] font-semibold">{section.title}</h2>
</div>

<button className="flex items-center gap-2 px-[18px] py-[9px] text-[13px] font-semibold rounded-full bg-black text-white hover:bg-red-600 transition">
VIEW ALL
<span className="rotate-[-45deg] group-hover:rotate-0 transition">→</span>
</button>

</div>

{/* CARDS */}

<div className="grid grid-cols-3 gap-[30px]">

{section.posts.map((post,i)=>{

const id = `${sIndex}-${i}`

return(

<div
key={id}
style={{background:post.bg}}
className="rounded-[20px] p-[16px] group cursor-pointer"
>

<div className="relative rounded-[14px] overflow-visible">

<img
src={post.image}
alt=""
className="w-full h-[260px] object-cover rounded-[14px]"
/>

{/* TAG */}

<span className="absolute top-[0px] left-[12px] text-[11px] px-[10px] py-[4px] bg-black/70 text-white rounded-sm uppercase tracking-wider">
HONEYMOON {section.tag}
</span>

{/* BOOKMARK */}

<button
onClick={(e)=>{
e.stopPropagation()
setBookmark(prev=>({...prev,[id]:!prev[id]}))
}}
className="absolute -top-3 -right-3 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center border border-red-200 text-red-600 shadow-md"
>

{bookmark[id] ? <FaBookmark size={14}/> : <FaRegBookmark size={14}/>}

</button>

</div>

{/* TITLE */}

<h3
className="mt-[18px] text-[22px] leading-[1.35]"
style={{fontFamily:"Yeseva One"}}
>
{post.title}
</h3>

{/* BUTTON */}

<button className="mt-[18px] px-[18px] py-[8px] text-[12px] font-semibold rounded-full border border-transparent group-hover:border-red-500 transition flex items-center gap-[6px]">

READ MORE

<span className="rotate-[-45deg] group-hover:rotate-0 transition">→</span>

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