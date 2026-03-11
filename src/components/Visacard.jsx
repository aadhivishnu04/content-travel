import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import img from "../assets/rethinkways-serbia-visa-1140x570.jpg";

export default function VisaProcess() {

const [bookmark,setBookmark] = useState(false)

return (

<section className="max-w-[1352px] mx-auto px-4 my-10">

{/* HEADER */}

<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-600"></div>
<h2 className="text-[36px] font-normal font-[Poppins]">VISA Process</h2>
</div>

<button className="group flex items-center gap-2 px-[20px] py-[9px] text-[12px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">

  VIEW ALL

  <span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
    →
  </span>

</button>
</div>


{/* CARD */}

<div className="relative rounded-[16px] overflow-hidden group">

<img
src={img}
alt=""
className="w-full h-[540px] object-cover"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-black/40"></div>

{/* TAG */}

<span className="absolute top-0 left-11 bg-red-500 text-white text-[10px] px-2 py-1 ">
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

<div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-[736px]">

<h3 className="font-['Yeseva_One'] text-[46px] leading-[52px] mt-[120px] text-white max-w-[736px]">
  Serbia VISA for Indian <br />Passport Holders 2026 | Travel Rethink Ways
</h3>

<button className="mt-[60px] flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-white bg-red-600 text-white font-semibold text-[12px] sm:text-[14px] transition-all duration-300 group-hover:bg-black group-hover:border-red-500 hover:bg-black hover:border-red-500">

            READ MORE

            <span className="inline-block -rotate-[35deg] transition-all duration-300 group-hover:rotate-0 group-hover:translate-x-[4px]">
              ➜
            </span>

          </button>

</div>

</div>

</section>

)

}