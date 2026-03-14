import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import img1 from "../assets/horse.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";
import img4 from "../assets/card4.jpg";

export default function LatestUpdates() {

const [bookmarks,setBookmarks] = useState({})

const toggleBookmark = (id)=>{
setBookmarks(prev=>({
...prev,
[id]:!prev[id]
}))
}

const posts = [
{
title:"The Wild Splendor of India: 15 Breathtaking Forests, Wildlife & Untamed Landscapes | Travel Rethink Ways",
desc:"India is not just monuments and megacities. The Wild Splendor of India unfolds far beyond its historic forts and bustling...",
image:img1,
tag:"WILDLIFE"
},
{
title:"Best Travel Deals 2026: International Vacation Offers",
image:img2,
tag:"VISA FREE"
},
{
title:"India Travel Deals 2026: Top Domestic Vacation Offers",
image:img3,
tag:"INDIA"
},
{
title:"Explore Hidden Wildlife Destinations Across India",
image:img4,
tag:"WILDLIFE"
}
];

return(

<div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">

<div className="flex items-center justify-between mb-10">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[24px] md:h-[26px] bg-red-600"></div>

<h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-medium font-poppins">
Latest Updates
</h2>
</div>

<button className="hidden md:flex group items-center gap-2 px-5 py-2 rounded-full border-2 border-red-600 bg-red-600 text-white text-sm font-semibold transition-all duration-300 hover:bg-black">

VIEW ALL

<span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
→
</span>

</button>

<button className="flex md:hidden items-center justify-center w-[38px] h-[38px] rounded-full bg-red-600 text-white transition hover:bg-black">

<span className="-rotate-[35deg] text-[14px]">
→
</span>

</button>

</div>


{/* FEATURED POST */}

<div className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 items-center">

<div className="relative overflow-hidden rounded-xl">

<span className="absolute top-0 left-4 md:left-8 bg-red-600 text-white text-[10px] md:text-[11px] px-2 py-1 rounded uppercase z-10">
{posts[0].tag}
</span>

<button
onClick={()=>toggleBookmark("featured")}
className="absolute top-3 right-3 w-[30px] h-[30px] md:w-[32px] md:h-[32px] flex items-center justify-center bg-white rounded-full shadow-md z-20"
>
{bookmarks["featured"] ? (
<FaBookmark className="text-red-600 text-[13px]" />
):(
<FaRegBookmark className="text-red-600 text-[13px]" />
)}
</button>

<img
src={posts[0].image}
className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] object-cover"
/>

</div>

<div>

<h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-['Yeseva_One'] leading-[1.3] mb-4 transition group-hover:text-red-600">
{posts[0].title}
</h3>

<p className="font-poppins text-[15px] md:text-[17px] lg:text-[18px] text-[#5B5F62] leading-[1.6] mb-6">
{posts[0].desc}
</p>

<div className="flex">

<div
className="
ml-auto relative flex items-center
h-[44px] w-[44px]
rounded-full
bg-[#D02525]
text-white
overflow-hidden
transition-all duration-[650ms]
ease-[cubic-bezier(0.19,1,0.22,1)]
group-hover:w-[150px]
"
>

<span className="flex items-center justify-center w-[44px] h-[44px] text-[14px]">
→
</span>

<span
className="
absolute left-[52px]
whitespace-nowrap
text-[14px]
font-semibold
opacity-0
transform translate-x-[-10px]
transition-all duration-[650ms]
delay-[40ms]
group-hover:opacity-100
group-hover:translate-x-0
"
>
READ MORE
</span>

</div>

</div>

</div>

</div>


{/* SMALL POSTS */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

{posts.slice(1).map((post,index)=>(
<div
key={index}
className="group cursor-pointer p-4 rounded-xl bg-white hover:shadow-md transition flex flex-col"
>

<div className="relative overflow-hidden rounded-lg mb-4">

<span className="absolute top-0 left-4 md:left-6 bg-red-600 text-white text-[10px] px-2 py-1 rounded uppercase z-10">
{post.tag}
</span>

<button
onClick={()=>toggleBookmark(index)}
className="absolute top-3 right-3 w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full shadow-md z-20"
>
{bookmarks[index] ? (
<FaBookmark className="text-red-600 text-[13px]" />
):(
<FaRegBookmark className="text-red-600 text-[13px]" />
)}
</button>

<img
src={post.image}
className="w-full h-[180px] sm:h-[200px] md:h-[210px] object-cover rounded-lg"
/>

</div>

<h4 className="text-[16px] md:text-[18px] font-['Yeseva_One'] leading-[1.4] mb-4 transition group-hover:text-red-600">
{post.title}
</h4>

<div className="flex mt-auto">

<div
className="
ml-auto relative flex items-center
h-[44px] w-[44px]
rounded-full
bg-[#D02525]
text-white
overflow-hidden
transition-all duration-[650ms]
ease-[cubic-bezier(0.19,1,0.22,1)]
group-hover:w-[150px]
"
>

<span className="flex items-center justify-center w-[44px] h-[44px] text-[14px]">
→
</span>

<span
className="
absolute left-[52px]
whitespace-nowrap
text-[14px]
font-semibold
opacity-0
transform translate-x-[-10px]
transition-all duration-[650ms]
delay-[40ms]
group-hover:opacity-100
group-hover:translate-x-0
"
>
READ MORE
</span>

</div>

</div>

</div>
))}

</div>

</div>

);

}