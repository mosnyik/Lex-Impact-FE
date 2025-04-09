// import { div, divContent, divDescription, div, divTitle } from "@/components/ui/div"
import Image from "next/image";
import { ourPlatform } from "../../assets/assets";
import Card from "./Card";
const Platform = () => {
  return (
    
    <div>
      <div className="text-center mb-12 bg-white">
        <h1 className="text-5xl font-medium font-montserrat text-black mb-2 leading-10 h-[59px] mx-auto mt-10 w-[320px]">Our Platform</h1>
        <p className="h-[20px] w-[597px] mx-auto font-montserrat font-normal text-base leading-10 text-[#6b7280]">Three powerful solutions working together to drive innovation and growth</p>
      </div>

      <div className="grid grid-cols-3 w-full h-[580px] py-10 left-1 bg-[#e2f5f9] mx-auto">
        {/* width: 1440;
height: 660;
top: 1071px;
left: 1px;
background: #E2F5F9C4;

 */}
        {ourPlatform.map((card,index)=>(
           <div key={index} className="gap-8 p-6">
        <Card image={card.bgImage} title={card.title} description={card.description}/>
          
         </div>
        ))}
        
      </div>
    </div>
  )
}

export default Platform