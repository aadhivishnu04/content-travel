import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import poster from "../assets/Travel_PR_The-Tourist-360-Home-Page-07-1536x640.jpg"; // single poster image

export default function BrandStory() {

  const [bookmark,setBookmark] = useState(false)

  return (

<section className="max-w-[1204px] mx-auto px-4 my-10">

{/* HEADER */}

<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-500"></div>
<h2 className="text-[22px] font-semibold">Brand Story</h2>
</div>

<button className="group w-fit flex items-center gap-2 px-[20px] py-[9px] text-[12px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white hover:bg-black transition-all duration-300">

VIEW ALL

<span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>
</div>


{/* CARD */}

<div className="relative bg-[#f3f3f3] rounded-[18px] p-10 flex items-center overflow-hidden">

{/* LEFT CONTENT */}

<div className="max-w-[520px] relative z-10">

{/* TAG */}

<span className=" absolute top-0 bg-red-600 text-white text-[10px] px-2 py-1 rounded">
BRAND STORY
</span>

{/* TITLE */}

<h3 className="font-['Yeseva_One'] text-[34px] leading-tight mt-4 mb-6">

<span className="bg-[#f2d48c] px-2">
The Tourist 360: A Luxury Maldives
</span>

<br/>

<span className="bg-[#f2d48c] px-2">
Honeymoon Specialist in South India
</span>

<br/>

<span className="bg-[#f2d48c] px-2">
| Travel Rethink Ways
</span>

</h3>

{/* BUTTON */}

<button className="bg-red-500 text-white px-5 py-2 rounded-full text-sm hover:bg-black transition">
READ MORE →
</button>

</div>


{/* RIGHT POSTER IMAGE */}

<img
src={poster}
alt=""
className="absolute absolute top-5 right-0 bottom-0 h-full object-contain"
/>


{/* BOOKMARK */}

<button
onClick={()=>setBookmark(!bookmark)}
className="absolute top-5 right-5 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-red-600"
>

{bookmark ? <FaBookmark/> : <FaRegBookmark/>}

</button>

</div>

</section>

)

}