import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import card4 from "../assets/card4.jpg";
import card5 from "../assets/card5.webp";
import card6 from "../assets/card6.jpg";

export default function HoneymoonSection() {

const [bookmarks,setBookmarks] = useState({})

const toggleBookmark = (id)=>{
setBookmarks(prev=>({
...prev,
[id]:!prev[id]
}))
}

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
{title:"Love in Every Glow: India’s Candlelight Dining Spots...",image:card5,bg:"#f1e0a6",btn:"#6b442d"},
{title:"India’s Enchanting Honeymoon 2026 | Travel...",image:card6,bg:"#cfe3ea",btn:"#92a8adff"}
]
}
]

return(

<div style={{fontFamily:"Poppins"}} className="w-full max-w-[420px] sm:max-w-[1352px] mx-auto px-4 mt-[40px] sm:mt-[60px] space-y-[30px] sm:space-y-[40px] md:space-y-[60px]">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Yeseva+One&display=swap" rel="stylesheet"/>

{sections.map((section,sIndex)=>(

<div key={sIndex}>

{/* HEADER */}

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-[18px] sm:mb-[24px] md:mb-[30px]">

<div className="flex items-center gap-[10px]">

<span className="w-[3px] h-[24px] md:h-[30px] bg-red-600"></span>

<h2 className="text-[20px] sm:text-[28px] md:text-[36px] font-medium leading-[1.2]">
{section.title}
</h2>

</div>

<button className="ml-auto group flex items-center justify-center gap-2 w-[36px] h-[36px] md:w-auto md:h-auto md:px-[18px] md:py-[8px] rounded-full bg-red-600 text-white hover:bg-black transition-all duration-300">

<span className="hidden md:inline">VIEW ALL</span>

<span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>

</div>

{/* CARDS */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[22px] md:gap-[30px]">

{section.posts.map((post,i)=>{

const id = `${sIndex}-${i}`

return(

<div
key={id}
style={{background:post.bg}}
className="rounded-[16px] sm:rounded-[20px] p-[12px] sm:p-[14px] md:p-[16px] cursor-pointer group"
>

<div className="relative">

<img
src={post.image}
className="w-full h-[210px] sm:h-[300px] md:h-[375px] object-cover object-[center_25%] rounded-[10px] sm:rounded-[12px]"
/>

{/* BOOKMARK */}

<button
onClick={()=>toggleBookmark(id)}
className="absolute top-[8px] right-[8px] w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-md hover:bg-red-50 transition"
>

{bookmarks[id] ? (
<FaBookmark className="text-red-600 text-[14px]" />
) : (
<FaRegBookmark className="text-red-600 text-[14px]" />
)}

</button>

{/* MOBILE READ MORE */}

<button
className="absolute bottom-[10px] right-[10px] md:hidden flex items-center gap-[6px] px-[12px] py-[5px] rounded-full text-[11px] font-semibold text-white"
style={{ background: post.btn }}
>
READ MORE
<span className="inline-block -rotate-[35deg]">
→
</span>
</button>

<span
className="absolute top-[0px] left-[10px] text-[9px] sm:text-[10px] md:text-[11px] px-[8px] py-[3px] text-white rounded-sm uppercase tracking-wider"
style={{ background: post.btn, opacity: 0.85 }}
>
HONEYMOON {section.tag}
</span>

</div>

<h3
className="mt-[12px] sm:mt-[14px] md:mt-[18px] text-[16px] sm:text-[20px] md:text-[22px] leading-[1.35]"
style={{fontFamily:"Yeseva One"}}
>
{post.title}
</h3>

{/* DESKTOP READ MORE */}

<button
className="hidden md:flex mt-[14px] sm:mt-[18px] ml-auto px-[18px] sm:px-[22px] py-[8px] sm:py-[10px] text-[12px] sm:text-[13px] font-semibold rounded-full items-center gap-[8px] text-white border-2 border-transparent transition-all duration-300 group-hover:bg-black group-hover:border-red-600 group-hover:text-white"
style={{ background: post.btn }}
>

READ MORE

<span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
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