import asia from "../assets/ASIA.svg"
import europe from "../assets/EUROPE.svg"
import africa from "../assets/AFRICA.svg"
import north from "../assets/NORTH AMERICA.svg"
import south from "../assets/SOUTH AMERICA.svg"
import oceania from "../assets/OCEANIA.svg"
import antarctica from "../assets/ANTARCTICA.svg"

export default function AroundWorld() {

const data = [
{title:"ASIA", img:asia, color:"#66c5cc"},
{title:"EUROPE", img:europe, color:"#f6cf71"},
{title:"AFRICA", img:africa, color:"#9eb9f3"},
{title:"NORTH AMERICA", img:north, color:"#87c55f"},
{title:"SOUTH AMERICA", img:south, color:"#fe88b1"},
{title:"OCEANIA", img:oceania, color:"#f89c74"},
{title:"ANTARCTICA", img:antarctica, color:"#dcb0f2"},
]

return (

<section className="max-w-[1320px] mt-[40px] md:mt-[60px] mx-auto px-4">

{/* HEADER */}

<div className="flex justify-between items-center mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] md:h-[36px] bg-red-600"></div>

<h2 className="text-[20px] md:text-[36px] font-normal font-[Poppins]">
Around the World
</h2>

</div>

<button className="group w-[36px] h-[36px] md:w-auto md:h-auto flex items-center justify-center md:gap-2 px-0 md:px-[20px] py-0 md:py-[9px] text-[11px] md:text-[13px] font-semibold rounded-full bg-red-600 text-white border-2 border-red-600 hover:bg-black transition-all duration-300">

<span className="hidden md:inline">VIEW ALL</span>

<span className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
→
</span>

</button>

</div>

{/* FIRST ROW */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[25px]">

{data.slice(0,3).map((item,i)=>(

<div
key={i}
style={{ background: item.color }}
className="relative w-full h-[220px] md:h-[250px] rounded-[16px] flex items-center justify-center group"
>

<img src={item.img} className="w-[180px] md:w-[200px] object-contain scale-200" />

<button className="absolute bottom-[15px] right-[15px] md:bottom-[20px] md:right-[20px] flex items-center gap-2 px-[16px] md:px-[18px] py-[7px] md:py-[8px] text-[12px] md:text-[13px] font-semibold text-white rounded-full border border-white/40 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:bg-black group-hover:border-red-500">

{item.title}

<span className="rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0">
→
</span>

</button>

</div>
))}

</div>

{/* SECOND ROW */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] md:gap-[25px] mt-[20px] md:mt-[25px]">

{data.slice(3).map((item,i)=>(

<div
key={i}
style={{background:item.color}}
className="rounded-[14px] h-[220px] md:h-[340px] relative flex items-center justify-center group"
>

<img src={item.img} className="w-[120px] md:w-[140px] object-contain scale-200 md:scale-230" />

<button className="absolute bottom-[15px] right-[15px] md:bottom-[20px] md:right-[20px] flex items-center gap-2 px-[16px] md:px-[18px] py-[7px] md:py-[8px] text-[12px] md:text-[13px] font-semibold text-white rounded-full border border-white/40 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:bg-black group-hover:border-red-500">

{item.title}

<span className="rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0">
→
</span>

</button>

</div>

))}

</div>

</section>

)
}
