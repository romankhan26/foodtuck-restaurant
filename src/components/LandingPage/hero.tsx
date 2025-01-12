import Button from "../generalComponents/button";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Heading, HeadingGreatVibes } from "../generalComponents/heading";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
const Hero = () => {
  return (
   <div className=' bg-[#000000ce] overflow-hidden px-[12vw]  z-0'>

<div className="flex flex-col md:flex-row  w-full max-w-7xl mx-auto my-[80px]  items-center">
  <div className="flex flex-nowrap gap-8 items-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-[1px] h-[100px] bg-white"></div>
      <FaFacebookF className="hover:scale-110 transition-transform cursor-pointer hover:text-[#FF9F0D]" />
      <FaTwitter className="hover:scale-110 transition-transform cursor-pointer hover:text-[#FF9F0D]" />
      <FaPinterestP className="hover:scale-110 transition-transform cursor-pointer hover:text-[#FF9F0D]" />
      <div className="w-[1px] h-[100px] bg-white"></div>
    </div>
    <div className="w-full md:w-4/5 lg:w-[60%] text-left">
      <HeadingGreatVibes text="ItsQuickAndAmusing!" className="" />
      <Heading text="The Art of Speed Food Quality" colorOfInitial={true}/>
      <p className="text-[14px] md:text-[16px] mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Varius sed pharetra dictum neque massa congue.
      </p>
      <Button 
        className="w-[180px] h-[50px] mt-6 text-white bg-[#FF9F0D] rounded-full border-[1px] hover:bg-transparent border-[#FF9F0D]"
        text="See Menu" 
      />
    </div>
  </div>
  <div className=" mt-6 hidden lg:block lg:w-[50%]">
        <Image
          src='/assets/Capture.png'
          alt="image"
          width={250}
          height={250}
          className=" h-auto w-[550px] object-cover rounded-lg"
        />
      </div>
      </div>
      </div>

  );
};

export default Hero;
