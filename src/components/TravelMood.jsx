import beaches from "../assets/beaches.jpg";
import city from "../assets/city.jpg";
import fantasy from "../assets/fantasy.jpg";
import deserts from "../assets/deserts.jpg";
import heritage from "../assets/heritage.jpg";
import hills from "../assets/hills.jpg";
import volcano from "../assets/volcano.jpg";
import wildlife from "../assets/wildlife.jpg";
import camping from "../assets/camping.jpg";
import festivals from "../assets/festivals.jpg";
import hiking from "../assets/hiking.jpg";
import culinary from "../assets/culinary.jpg";
import adventure from "../assets/adventure.jpg";
import friends from "../assets/friends.jpg";
import family from "../assets/family.jpg";
import solo from "../assets/solo.jpg";
import romantic from "../assets/romantic.jpg";
import weekend from "../assets/weekend.jpg";
import cruise from "../assets/cruise.jpg";
import theme from "../assets/themepark.jpg";

export default function TravelMood() {

const moods = [

{title:"Beaches", img:beaches},
{title:"City Escapes", img:city},
{title:"Fantasy", img:fantasy},
{title:"Deserts", img:deserts},

{title:"Heritage", img:heritage},
{title:"Hill Stations", img:hills},
{title:"Volcanoes", img:volcano},
{title:"Wildlife", img:wildlife},

{title:"Camping", img:camping},
{title:"Festivals", img:festivals},
{title:"Hiking", img:hiking},
{title:"Culinary", img:culinary},

{title:"Adventure", img:adventure},
{title:"Friends", img:friends},
{title:"Family", img:family},
{title:"Solo Travel", img:solo},

{title:"Romantic Escapes", img:romantic},
{title:"Weekend", img:weekend},
{title:"Cruises", img:cruise},
{title:"Theme Parks", img:theme}

]

return (

<section className="max-w-[1320px] mx-auto px-4 my-10 md:my-12">

{/* HEADER */}

<div className="flex items-center gap-3 mb-6 md:mb-8">

<div className="w-[3px] h-[24px] md:h-[26px] bg-red-700"></div>

<h2 className="text-[20px] md:text-[36px] font-normal font-[Poppins]">
What’s Your Travel Mood?
</h2>

</div>

{/* GRID */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

{moods.map((item,i)=>(

<div
key={i}
className="relative rounded-[14px] overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
>

<img
src={item.img}
className="w-full h-[220px] md:h-[320px] object-cover group-hover:scale-105 transition duration-500"
/>

{/* TITLE */}

<h3 className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white text-[13px] md:text-[19px] font-medium font-[Poppins]">
{item.title}
</h3>

{/* BUTTON */}

<button className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-1 bg-white text-black text-[11px] md:text-[14px] px-3 md:px-4 py-[5px] md:py-[6px] rounded-full font-medium shadow-sm transition-all duration-300">

View All

<span className="inline-block transform -rotate-45 transition-transform duration-300 group-hover:rotate-0 group-hover:translate-x-1">
→
</span>

</button>

</div>

))}

</div>

</section>

)

}
