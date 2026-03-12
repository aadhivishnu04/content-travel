import { useState } from "react";
import poolImg from "../assets/rethinkways-blog-boutique-kerala-cover.jpg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function UniqueStay() {

const [bookmark,setBookmark] = useState(false)

return (

<section className="w-full md:max-w-[1320px] mx-auto mt-[40px] md:mt-[60px] px-0 md:px-4">

{/* Header */}

<div className="flex items-center justify-between mb-[20px] md:mb-[25px]">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-700"></div>

<h2 className="text-[20px] md:text-[36px] font-normal font-[Poppins]">
Unique Stay Stories
</h2>
</div>

<button className="group w-[36px] h-[36px] md:w-auto md:h-auto flex items-center justify-center md:gap-2 px-0 md:px-[20px] py-0 md:py-[9px] text-[11px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">

<span className="hidden md:inline">VIEW ALL</span>

<span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>

</div>

{/* CARD */}

<div className="relative rounded-[10px] overflow-hidden group">

{/* IMAGE WRAPPER */}
<div className="relative">

<img
src={poolImg}
className="w-full h-[240px] md:h-[540px] object-cover"
alt="Kerala Pool"
/>

{/* TAG (mobile only) */}
<span className="absolute top-[0px] left-[12px] md:hidden bg-[#5b3dbb] text-white text-[10px] px-[10px] py-[3px] uppercase font-semibold rounded-[3px]">
UNIQUE STAYS
</span>

{/* BOOKMARK */}
<div
onClick={()=>setBookmark(!bookmark)}
className="absolute top-[12px] right-[12px] md:top-[16px] md:right-[16px] w-[32px] h-[32px] md:w-[36px] md:h-[36px] bg-white rounded-full flex items-center justify-center shadow cursor-pointer"
>

{bookmark ? (
<FaBookmark className="text-red-600 text-[13px] md:text-[14px]" />
) : (
<FaRegBookmark className="text-red-600 text-[13px] md:text-[14px]" />
)}

</div>

{/* MOBILE READ MORE */}
<button className="absolute bottom-[12px] right-[12px] md:hidden flex items-center gap-2 px-3 py-1 rounded-full bg-[#5b3dbb] text-white text-[11px] font-semibold">
READ MORE →
</button>

</div>

{/* CONTENT CARD */}
<div className="bg-[#F1E4FF] px-[16px] py-[16px] md:absolute md:left-[100px] md:top-[0px] md:w-[528px] md:p-[32px] md:rounded-[10px]">

{/* TAG (desktop only) */}
<span className="hidden md:block absolute top-[0px] left-[32px] bg-[#5b3dbb] text-white text-[11px] px-[12px] py-[4px] uppercase font-semibold rounded-[3px]">
UNIQUE STAYS
</span>

{/* Heading */}
<h3 className="font-['Yeseva_One'] text-[16px] md:text-[40px] leading-[22px] md:leading-[48px] text-black md:mt-[18px]">
10 Boutique Hotels in Kerala Nature Meets Timeless Charm...
</h3>

{/* Paragraph */}
<p className="hidden md:block font-[Poppins] text-[18px] leading-[28px] text-gray-700 mt-[20px] max-w-[420px]">
Kerala, often called God’s Own Country, is more than a destination
it’s an emotion. A place misty hills meet...
</p>

{/* Button (desktop only) */}
<button className="hidden md:flex mt-[24px] ml-[300px] items-center gap-2 px-[24px] py-[11px] bg-[#5b3dbb] text-white text-[14px] font-semibold rounded-full border-2 border-transparent group-hover:bg-black group-hover:border-red-600 transition-all duration-300">

READ MORE

<span className="-rotate-[35deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>

</div>

</div>

</section>

);
}