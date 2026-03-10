import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-serbia-visa-1140x570.jpg";

export default function VisaProcess() {

const [bookmark,setBookmark] = useState(false)

return (

<section className="max-w-[1204px] mx-auto px-4 my-10">

{/* HEADER */}

<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-500"></div>
<h2 className="text-[22px] font-semibold">VISA Process</h2>
</div>

<button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full">
VIEW ALL →
</button>

</div>


{/* CARD */}

<div className="relative rounded-[16px] overflow-hidden">

<img
src={img}
alt=""
className="w-full h-[420px] object-cover"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-black/40"></div>

{/* TAG */}

<span className="absolute top-0 left-4 bg-red-500 text-white text-[10px] px-2 py-1 rounded">
VISA-PROCESS
</span>


{/* BOOKMARK */}

<button
onClick={()=>setBookmark(!bookmark)}
className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500"
>

{bookmark ? <FaBookmark/> : <FaRegBookmark/>}

</button>


{/* TEXT */}

<div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-[520px]">

<h3 className="font-serif text-[36px] leading-tight mb-6">

Serbia VISA for Indian Passport Holders 2026 |
Travel Rethink Ways

</h3>

<button className="bg-red-500 px-6 py-3 rounded-full text-sm hover:bg-black transition">

READ MORE →

</button>

</div>

</div>

</section>

)

}