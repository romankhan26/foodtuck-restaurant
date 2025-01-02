import Image from "next/image"
import "./section8.css"
import { FaStar } from "react-icons/fa6";
import { Heading, HeadingGreatVibes } from "../generalComponents/heading"

const ImageOfClient = ({imgURL, className}:{imgURL:any, className:string})=>{
    return (
        <div className={`${className} flex justify-center items-center max-w-32 max-h-32 md:w-28 md:h-28 sm:w-20 w-14 h-14 sm:h-20`}>
        <Image className="rounded-full" width={300} height={300} src={imgURL} alt="Ellipse"/>

        </div>
        )
}
const SectionEight = () => {
  return (
    <>
    <div className='w-full max-w-7xl px-4 md:px-8 mx-auto my-10 md:my-16 '>
       <div className="md:mb-28 lg:mb-20 ">
       <HeadingGreatVibes className="" text="Testimonials"/>
        <Heading colorOfInitial={false} text="What Our Clients Are Saying" />
      
        </div>  <div className="bg-white relative mx-auto lg:w-[70%] w-[90%] px-2   md:h-full h-fit  max-h-[600px] flex items-center flex-col justify-center md:gap-5 gap-2 text-black text-center py-12 ">
            <ImageOfClient imgURL="/assets/Ellipse 6.png" className="absolute md:-top-14 -top-6"/>
            <Image src="/assets/Quotes.png" width={300} height={300} alt='""' className="w-6 h-6 md:w-8 md:h-8 lg:h-10 lg:w-10 md:mt-5" />
            <p className=" md:mx-28 mx-4 paragraph text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <div className="flex items-center justify-center w-full gap-1">
            <FaStar className="text-[#FF9F0D] w-4 h-4 md:w-6 md:h-6 lg:h-8 lg:w-8 "/>
            <FaStar className="text-[#FF9F0D] w-4 h-4 md:w-6 md:h-6 lg:h-8 lg:w-8 "/>
            <FaStar className="text-[#FF9F0D] w-4 h-4 md:w-6 md:h-6 lg:h-8 lg:w-8 "/>
            <FaStar className="text-[#FF9F0D] w-4 h-4 md:w-6 md:h-6 lg:h-8 lg:w-8 "/>
            <FaStar className="text-[#a4a4a4] w-4 h-4 md:w-6 md:h-6 lg:h-8 lg:w-8 "/>
  
          </div>
          <h2 className="font-bold md:text-[24px] text-base">
          Alamin Hasan
          </h2>
          <p className="text-gray-400 text-sm md:text-base">Food Specialist</p>
                </div>
            <div className="flex items-center justify-center gap-2 mt-5">
                <div className="w-1 h-1 md:w-2 md:h-2 bg-[#FF9F0D] rounded-full text-transparent">.</div>
                <div className="w-1 h-1 md:w-2 md:h-2 bg-[#FF9F0D50] rounded-full text-transparent">.</div>
                <div className="w-1 h-1 md:w-2 md:h-2 bg-[#ff9e0d6b] rounded-full text-transparent">.</div>
                <div className="w-1 h-1 md:w-2 md:h-2 bg-[#FF9F0D50] rounded-full text-transparent">.</div>
            </div>
            </div>
            </>
  )
}

export default SectionEight 