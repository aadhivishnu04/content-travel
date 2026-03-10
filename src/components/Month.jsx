import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/india.jpg";

export default function ExperienceSection() {

const [bookmark,setBookmark] = useState(false)

return (

<section className="max-w-[1204px] mx-auto px-4 my-10">

{/* HEADER */}

<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-500"></div>
<h2 className="text-[22px] font-semibold">
Experience India by Month 2026
</h2>
</div>

<button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full">
VIEW ALL →
</button>

</div>


{/* CARD */}

<div className="flex rounded-[14px] overflow-hidden shadow-sm">

{/* IMAGE */}

<div className="w-[65%]">
<img
src={img}
alt=""
className="w-full h-[360px] object-cover"
/>
</div>


{/* RIGHT PANEL */}

<div className="w-[35%] bg-[#a7c2bc] p-8 relative flex flex-col justify-center">

{/* TAG */}

<span className="absolute top-0 left-4 bg-[#244b45] text-white text-[10px] px-2 py-1 rounded">
INDIA 2026
</span>


{/* BOOKMARK */}

<button
onClick={()=>setBookmark(!bookmark)}
className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500"
>

{bookmark ? <FaBookmark/> : <FaRegBookmark/>}

</button>


{/* TITLE */}

<h3 className="font-serif text-[26px] leading-tight mb-4">

30 Best Places to Visit in April in India 2026 |
Travel Rethink Ways

</h3>


{/* DESCRIPTION */}

<p className="text-sm text-gray-700 mb-6">

April marks the beginning of summer in India but several
destinations still offer pleasant weather.

</p>


{/* BUTTON */}

<button className="bg-[#244b45] text-white px-5 py-2 rounded-full text-sm w-fit hover:bg-black transition">

READ MORE →

</button>

</div>

</div>

</section>

)

}