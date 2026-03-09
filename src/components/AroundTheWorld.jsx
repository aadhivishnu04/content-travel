import asia from "../assets/world-01.svg"
import europe from "../assets/world-02.svg"
import africa from "../assets/world-03.svg"
import north from "../assets/world-04.svg"
import south from "../assets/world-05.svg"
import oceania from "../assets/world-06.svg"
import antarctica from "../assets/world-07.svg"
 
export default function AroundWorld() {

const data = [
{title:"ASIA", img:asia, color:"#67b4b8"},
{title:"EUROPE", img:europe, color:"#e4c46f"},
{title:"AFRICA", img:africa, color:"#8ea4d5"},
{title:"NORTH AMERICA", img:north, color:"#89c15e"},
{title:"SOUTH AMERICA", img:south, color:"#e47798"},
{title:"OCEANIA", img:oceania, color:"#e79269"},
{title:"ANTARCTICA", img:antarctica, color:"#b998d6"},
]

return (

<section className="max-w-[1204px] mx-auto px-4 my-10">

{/* HEADER */}

<div className="flex justify-between items-center mb-6">

<div className="flex items-center gap-3">
<div className="w-[3px] h-[26px] bg-red-500"></div>
<h2 className="text-[22px] font-semibold">
Around the World
</h2>
</div>

<button className="bg-red-500 text-white px-4 py-2 text-sm rounded-full">
VIEW ALL →
</button>

</div>


{/* GRID */}

<div className="grid grid-cols-3 gap-6 mb-6">

{data.slice(0,3).map((item,i)=>(

<div
key={i}
style={{background:item.color}}
className="rounded-[14px] h-[220px] relative flex items-center justify-center"
>

<img src={item.img} className="w-[160px]" />

<button className="absolute bottom-4 right-4 bg-black/40 text-white text-xs px-4 py-2 rounded-full backdrop-blur">

{item.title} →

</button>

</div>

))}

</div>


{/* SECOND ROW */}

<div className="grid grid-cols-4 gap-6">

{data.slice(3).map((item,i)=>(

<div
key={i}
style={{background:item.color}}
className="rounded-[14px] h-[200px] relative flex items-center justify-center"
>

<img src={item.img} className="w-[140px]" />

<button className="absolute bottom-4 right-4 bg-black/40 text-white text-xs px-4 py-2 rounded-full backdrop-blur">

{item.title} →

</button>

</div>

))}

</div>

</section>

)

}