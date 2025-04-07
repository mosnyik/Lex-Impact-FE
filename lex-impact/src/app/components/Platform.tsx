// import { div, divContent, divDescription, div, divTitle } from "@/components/ui/div"
import Image from "next/image";
import { ourPlatform } from "../../assets/assets";
const Platform = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Our Platform</h1>
        <p className="text-lg text-muted-foreground">Three powerful solutions working together to drive innovation and growth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-gray-600">
        {ourPlatform.map(({title, description, bgImage},index)=>(
           <div key={index} className="flex flex-col h-full items-center">
           <div>
             <div className="w-full h-48 mb-4 rounded-md overflow-hidden">
               <Image
                 src={bgImage}
                 alt={title}
                 className="w-full h-full object-cover"
                 width={40}
                 height={40}
               />
             </div>
             <div className="text-center">{title}</div>
          
           </div>
           <div className="flex-grow">
             <p className="text-muted-foreground text-center">
              {description}
             </p>
           </div>
         </div>
        ))}
        
      </div>
    </div>
    </>
  )
}

export default Platform