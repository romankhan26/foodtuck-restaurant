import { FaPinterestSquare, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className="bg-[#6f6f6f]   overflow-hidden px-[12vw] py-4 ">
<div className="flex justify-between items-center max-w-7xl w-full flex-wrap px-4 md:px-8 mx-auto  text-[9px] lg:text-[13px]">
<p className="text-[8px] md:text-[10px] mx-auto md:mx-0">
Copyright © 2024 by Roman Khan. All Rights Reserved.
</p>
<div className="flex gap-2 mt-2 md:mt-0 items-center justify-center mx-auto md:mx-0">
  <div className=" p-1 text-[14px] md:p-2 md:text-[16px] lg:p-3 lg:text-[18px]  bg-white text-[#6f6f6f] hover:text-[#ff9f0d] cursor-pointer transition-colors duration-300">
    <FaFacebookF/>
  </div>
  <div className=" p-1 text-[14px] md:p-2 md:text-[16px] lg:p-3 lg:text-[18px] bg-white text-[#6f6f6f] hover:text-[#ff9f0d] cursor-pointer transition-colors duration-300">
    <FaTwitter/>
  </div>
  <div className=" p-1 text-[14px] md:p-2 md:text-[16px] lg:p-3 lg:text-[18px] bg-white text-[#6f6f6f] hover:text-[#ff9f0d] cursor-pointer transition-colors duration-300">
    <FaInstagram/>
  </div>
  <div className=" p-1 text-[14px] md:p-2 md:text-[16px] lg:p-3 lg:text-[18px] bg-white text-[#6f6f6f] hover:text-[#ff9f0d] cursor-pointer transition-colors duration-300">
    <FaYoutube/>
  </div>
  <div  className=" p-1 text-[14px] md:p-2 md:text-[16px] lg:p-3 lg:text-[18px] bg-white text-[#6f6f6f] hover:text-[#ff9f0d] cursor-pointer transition-colors duration-300">
<FaPinterestSquare className="rounded-full"/>
  </div>
</div>
</div>
</div>
  )
}

export default FooterSection