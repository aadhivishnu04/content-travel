import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-blog-boutique-kerala-cover.jpg";

export default function UniqueStayStories() {

const [bookmark,setBookmark] = useState(false)

return (

<section className="max-w-[1204px] mx-auto px-4 my-10">

{/* HEADER */}

<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-500"></div>
<h2 className="text-[22px] font-semibold">
Unique Stay Stories
</h2>
</div>

<button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full">
VIEW ALL →
</button>

</div>


{/* CARD */}

<div className="flex rounded-[18px] overflow-hidden shadow-sm">

{/* LEFT PANEL */}

<div className="w-[38%] bg-[#d9cbe8] p-10 flex flex-col justify-center relative">

{/* TAG */}

<span className="absolute top-6 left-6 bg-purple-600 text-white text-[10px] px-2 py-1 rounded">
UNIQUE STAYS
</span>


{/* TITLE */}

<h3 className="font-serif text-[30px] leading-tight mb-4">

10 Boutique Hotels in Kerala Where Nature
Meets Timeless Charm

</h3>


{/* TEXT */}

<p className="text-gray-600 text-sm mb-6">

Kerala, often called God's Own Country,
is more than a destination — it's an emotion.

</p>


{/* BUTTON */}

<button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm w-fit hover:bg-black transition">

READ MORE →

</button>

</div>


{/* IMAGE */}

<div className="w-[62%] relative">

<img
src={img}
alt=""
className="w-full h-[380px] object-cover"
/>


{/* BOOKMARK */}

<button
onClick={()=>setBookmark(!bookmark)}
className="absolute top-5 right-5 w-9 h-9 bg-white rounded-full flex items-center justify-center text-red-500 shadow"
>

{bookmark ? <FaBookmark/> : <FaRegBookmark/>}

</button>

</div>

</div>

</section>

)

}