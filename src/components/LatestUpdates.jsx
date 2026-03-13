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

<div className="max-w-[1320px] mx-auto px-4 py-14">

{/* HEADER */}

<div className="flex items-center justify-between mb-10">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-600"></div>

<h2 className="text-[28px] md:text-[36px] font-medium font-poppins">
Latest Updates
</h2>
</div>

<button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-black transition">
VIEW ALL →
</button>

</div>


{/* FEATURED POST */}

<div className="grid md:grid-cols-2 gap-10 mb-12 items-center group">

<div className="relative overflow-hidden rounded-xl">

<span className="absolute top-0 left-8 bg-red-600 text-white text-[11px] px-2 py-1 rounded uppercase z-10">
{posts[0].tag}
</span>

<button
onClick={()=>toggleBookmark("featured")}
className="absolute top-3 right-3 w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-md z-20"
>
{bookmarks["featured"] ? (
<FaBookmark className="text-red-600 text-[14px]" />
):(
<FaRegBookmark className="text-red-600 text-[14px]" />
)}
</button>

<img
src={posts[0].image}
className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
/>

</div>

<div>

<h3 className="text-[26px] md:text-[32px] font-['Yeseva_One'] leading-[1.3] mb-4 transition group-hover:text-red-600">
{posts[0].title}
</h3>

<p className="font-poppins text-[18px] text-[#5B5F62] leading-[1.6] mb-6">
{posts[0].desc}
</p>

<div className="flex">
<button className="ml-auto flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500">
READ MORE
<span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
→
</span>
</button>
</div>

</div>

</div>


{/* SMALL POSTS */}

<div className="grid md:grid-cols-3 gap-8">

{posts.slice(1).map((post,index)=>(
<div
key={index}
className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 p-4 rounded-xl border border-gray-200 hover:shadow-md bg-white"
>

<div className="relative overflow-hidden rounded-lg mb-4">

<span className="absolute top-0 left-8 bg-red-600 text-white text-[10px] px-2 py-1 rounded uppercase z-10">
{post.tag}
</span>

<button
onClick={()=>toggleBookmark(index)}
className="absolute top-3 right-3 w-[32px] h-[32px] flex items-center justify-center bg-white rounded-full shadow-md z-20"
>
{bookmarks[index] ? (
<FaBookmark className="text-red-600 text-[14px]" />
):(
<FaRegBookmark className="text-red-600 text-[14px]" />
)}
</button>

<img
src={post.image}
className="w-full h-[200px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
/>

</div>

<h4 className="text-[18px] font-['Yeseva_One'] leading-[1.4] mb-4 transition group-hover:text-red-600">
{post.title}
</h4>

<button className="ml-auto flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500">
READ MORE
<span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
→
</span>
</button>

</div>
))}

</div>

</div>

);

}