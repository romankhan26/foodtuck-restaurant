import React from "react";
import Image from "next/image";
import { CiTimer } from "react-icons/ci";
const Footer = () => {
  return (
  
     <div className="max-w-7xl w-full px-4 md:px-8 mx-auto  text-[9px] lg:text-[13px]">
     <div className="flex justify-between  py-4 border-b-[#ff9f0d] border-b-[0.5px] pb-5 md:pb-10 mb-10 flex-wrap">
        <div>
          <h1 className=" md:text-[26px] text-[17px]  w-fit  font-bold leading-tight">
            <span className="text-[#FF9F0D] w-fit">St</span>ill you need our support
          </h1>
          <p className="   mt-4 w-fit ">
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
        <div>
          {/* Button Section / Subscription section */}
          <form
            action=""
            className="flex  mt-4 md:mt-0"
          >
            <input
              type="text"
              placeholder="Enter You Email"
              className="bg-[#FF9F0D] px-2  md:px-5 md:py-2 md:w-[250px] w-[100px] rounded-sm placeholder:text-[#efefef]"
            />
            <button className="bg-[#fff] px-2  text-[#FF9F0D] md:px-5 md:py-2 -ml-2 rounded-sm">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-start items-start  gap-20 mx-auto pl-10   ">
        <div className="   gap-4 flex flex-col">
          <h2 className="text-[11px] md:text-[14px] font-bold">About Us</h2>
          <p className="w-60">Corporate clients and leisure travelers have
been relying on Groundlink for dependable
safe, and professional chauffeured car
service in major cities across World.</p>
<div className="flex gap-2">
  <div  className="bg-[#ff9f0d] text-[27px] w-12 h-12 rounded-sm p-2"><CiTimer/></div>
 <div className="space-y-0"> <p className="mb-[1px]">Opening Hours</p>
  <p className="text-[8px] md:text-[10px] ">{"Mon - Sat(8.00 - 6.00)"}</p>
  <p className="text-[8px] md:text-[10px] ">Sunday - Closed</p></div>
</div>
        </div>
<div className="flex gap-10 flex-1">
          <div className=" lg:w-1/4 gap-4 flex flex-col">
          <h2 className="text-[11px] md:text-[14px] font-bold">Useful Links</h2>
          <p>About</p>
          <p>News</p>
          <p>Partners</p>
          <p>Team</p>
          <p>Menu</p>
          <p>Contacts</p>
        </div>
        <div className=" lg:w-1/4 gap-4 flex flex-col">
          <h2 className="text-[11px] md:text-[14px] font-bold">Help?</h2>
             <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Reporting</p>
          <p>Documentation</p>
          <p>Support Policy</p>
          <p>Privacy</p>
        </div>
        <div className="w-fit gap-4 flex flex-col">
          <h2 className="text-[11px] md:text-[14px] font-bold">Recent Post</h2>
          <div className="flex gap-2">
  <div  className=" w-[50px] h-[50px] rounded-sm "><Image src="/assets/img11.png" alt="abc" width={100} height={100} className="w-full h-full"/></div>
 <div className="space-y-0"> 
  <p className="text-[9px] md:text-[11px] text-gray-500 ">20 February 2022</p>
  <p >Keep Your Business</p></div>
</div>
<div className="flex gap-2">
  <div  className=" w-[50px] h-[50px] rounded-sm "><Image src="/assets/img12.png" alt="abc" width={100} height={100} className="w-full h-full"/></div>
 <div className="space-y-0"> 
  <p className="text-[9px] md:text-[11px] text-gray-500 ">20 February 2022</p>
  <p >Keep Your Business</p></div>
</div>
<div className="flex gap-2">
  <div  className=" w-[50px] h-[50px] rounded-sm "><Image src="/assets/img13.png" alt="abc" width={100} height={100} className="w-full h-full"/></div>
 <div className="space-y-0"> 
  <p className="text-[9px] md:text-[11px] text-gray-500 ">20 February 2022</p>
  <p >Keep Your Business</p></div>
</div>
        </div>
</div>
      </div>
     </div>
  );
};

export default Footer;
