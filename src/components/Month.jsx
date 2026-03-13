import { useState } from "react";
import indiaImage from "../assets/india.jpg";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function ExperienceIndia() {

const [bookmark,setBookmark] = useState(false)

return (

<section className="w-full md:max-w-[1320px] mx-auto mt-[40px] md:mt-[60px] px-0 md:px-4">

{/* Header */}

<div className="flex items-center justify-between mb-[20px] md:mb-[30px]">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] md:h-[32px] bg-red-600"></div>

<h2 className="text-[15px] md:text-[36px] font-normal font-[Poppins]">
Experience India by Month 2026
</h2>
</div>

<button className="group w-[36px] h-[36px] md:w-auto md:h-auto flex items-center justify-center md:gap-2 px-0 md:px-[20px] py-0 md:py-[9px] text-[11px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">

<span className="hidden md:inline">VIEW ALL</span>

<span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>

</div>

{/* Card */}

<div className="grid md:grid-cols-[65%_35%] md:rounded-[14px] overflow-hidden group">

{/* IMAGE SECTION */}
<div className="relative">

<img
src={indiaImage}
alt="India April"
className="w-full h-[240px] md:h-[540px] object-cover"
/>

{/* TAG */}
<span className="absolute top-[0px] left-[50px] text-[10px] md:text-[11px] px-2 md:px-3 py-1 bg-[#244B46] text-white uppercase font-semibold">
INDIA 2026
</span>

{/* BOOKMARK */}
<div
onClick={()=>setBookmark(!bookmark)}
className="absolute top-[12px] right-[12px] md:top-[18px] md:right-[18px] w-[30px] h-[30px] md:w-[36px] md:h-[36px] bg-white rounded-full flex items-center justify-center shadow cursor-pointer"
>
{bookmark ? (
<FaBookmark className="text-red-600 text-[12px] md:text-[14px]" />
) : (
<FaRegBookmark className="text-red-600 text-[12px] md:text-[14px]" />
)}
</div>

{/* MOBILE READ MORE */}
<button className="absolute bottom-[15px] md:hidden right-4 flex items-center gap-2 px-[14px] py-[6px] rounded-full border border-white/70 text-white text-[12px] bg-[#244B46] hover:bg-[#4a2f4a] transition">
READ MORE →
</button>

</div>

{/* CONTENT */}
<div className="bg-[#c2e5df] px-[18px] md:px-[40px] pt-[18px] md:pt-[36px] pb-[22px] md:pb-[34px] relative flex flex-col">

{/* TITLE */}
<h3 className="font-['Yeseva_One'] text-[15px] md:text-[36px] leading-[22px] md:leading-[44px] tracking-[0.2px] text-black md:mt-[38px] md:max-w-[420px]">
30 Best Places to Visit in April in India 2026 | Travel Rethink Ways
</h3>

{/* DESCRIPTION */}
<p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[28px] text-[#2f2f2f] mt-[10px] md:mt-[80px] md:max-w-[380px] font-[Poppins]">
April marks the beginning of summer in India but several destinations still offer...
</p>

{/* DESKTOP BUTTON */}
<button className="hidden md:flex mt-auto self-start ml-[230px] relative -top-[40px] items-center gap-1 px-[22px] py-[10px] bg-[#244B46] text-white rounded-full border-2 border-[#244B46] text-[14px] font-semibold whitespace-nowrap group-hover:bg-black group-hover:border-red-600 transition-all duration-300">
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