import Image from "next/image"
import Link from "next/link"


const Card = ({ image, title, description}) => {
  return (
    <Link href={'#'} className="block">
      <div className="w-[427px] h-[322px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-[#e2f4f8] cursor-pointer">
        <Image src={image} alt={title} width={400} height={250} className="object-cover w-full h-48" />
        <div className="p-4">
          <h2 className="font-montserrat font-semibold text-2xl text-center mb-2">{title}</h2>
          <p className="font-montserrat font-normal text-[16px] text-center">{description}</p>
        </div>
      </div>

    </Link>
  )
}

export default Card