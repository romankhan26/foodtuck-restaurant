'use client'
import "./NavLinks.css";import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
const NavLinks = () => {

  const [open, setOpen] = useState(false);


  

 
  return (
    <div className="relative">
       <GiHamburgerMenu onClick={() => {setOpen((prev) => !prev); console.log(open)}} className='relative top-2 w-6 h-5 md:hidden cursor-pointer z-20 hover:text-[#FF9F0D]'/>
       {open && (<div className="fixed bg-[#000e] text-white w-screen left-0 -top-5 h-[100vw] flex flex-col items-center justify-center gap-8 text-xl  z-10 ">
      <Link
        href={"/"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] border-y-[1px] border-y-[#3d3d3dba] w-full text-center py-2 "
      >
        Home
      </Link>
      <Link
        href={"/menu"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] border-b-[1px] border-b-[#3d3d3dba] w-full text-center pb-2 -mt-5"
      >
        Menu
      </Link>
      <Link
        href={"/blog"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] border-b-[1px] border-b-[#3d3d3dba] w-full text-center pb-2 -mt-5"
      >
        Blog
      </Link>
      <Link
        href={"/pages"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] border-b-[1px] border-b-[#3d3d3dba] w-full text-center pb-2 -mt-5"
      >
        Pages
      </Link>
      <Link
        href={"/about"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] justify-center flex items-center border-b-[1px] border-b-[#3d3d3dba] w-full text-center pb-2 -mt-5"
      >
        <span>About</span>
        <RiArrowDropDownLine />
      </Link>
      <Link
        href={"/shop"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] border-b-[1px] border-b-[#3d3d3dba] w-full text-center pb-2 -mt-5"
      >
        Shop
      </Link>
      <Link
        href={"/contact"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] border-b-[1px] border-b-[#3d3d3dba] w-full text-center pb-2 -mt-5"
      >
        Contact
      </Link>
        </div>
   )}
         
    <div
      className=" navlinks h-6 relative text-[12px]  top-2 max-w-full md:w-2/4 lg:w-[340px] hidden font-normal leading-6 text-left md:flex gap-4 sm:items-start lg:items-center


"
    >
      <Link
        href={"/"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Home
      </Link>
      <Link
        href={"/menu"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Menu
      </Link>
      <Link
        href={"/blog"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Blog
      </Link>
      <Link
        href={"pages"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Pages
      </Link>
      <Link
        href={"/about"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] justify-between flex items-center"
      >
        <span>About</span>
        <RiArrowDropDownLine />
      </Link>
      <Link
        href={"/shop"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Shop
      </Link>
      <Link
        href={"/contact"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Contact
      </Link>
      
    </div>
   
   
    </div>
  );
};

export default NavLinks;
