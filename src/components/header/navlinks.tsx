import "./navlinks.css";import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
const NavLinks = () => {
  return (
    <>
    <div
      className=" navlinks h-6 relative text-[12px]  top-2 max-w-full md:w-2/4 lg:w-[340px] hidden font-normal leading-6 text-left md:flex gap-4 sm:items-start lg:items-center


"
    >
      <Link
        href={"#"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Home
      </Link>
      <Link
        href={"#"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Menu
      </Link>
      <Link
        href={"#"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Blog
      </Link>
      <Link
        href={"#"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Pages
      </Link>
      <Link
        href={"#"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D] justify-between flex items-center"
      >
        <span>About</span>
        <RiArrowDropDownLine />
      </Link>
      <Link
        href={"#"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Shop
      </Link>
      <Link
        href={"#"}
        className="hover:underline underline-offset-2 decoration-[#FF9F0D]"
      >
        Contact
      </Link>
      
    </div>
   
      <GiHamburgerMenu className=' relative top-2 w-6 h-5 md:hidden cursor-pointer hover:text-[#FF9F0D]'/>

    </>
  );
};

export default NavLinks;
