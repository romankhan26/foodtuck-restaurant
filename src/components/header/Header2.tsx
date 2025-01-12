import NavLinks from './navlinks';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const HeaderTwo = () => {
  return (
        <div className=' bg-[#000000] overflow-hidden px-[12vw] -mb-2'>

<div className="md:mx-auto w-full max-w-7xl h-auto -mx-3 relative md:px-8  flex justify-between items-center pb-10 top-[10px]">
  <h1 className=" font-bold   md:block relative top-2 hidden"><span className="text-[#FF9F0D]">
    Food
  </span>
tuck
  </h1>
    <NavLinks />
   <div className="flex items-center  relative bg-transparent gap-3 top-2
">
   <IoSearch className=' cursor-pointer hover:text-[#FF9F0D]  text-white '/>
    <FaRegUser className=' cursor-pointer hover:text-[#FF9F0D] text-white '/> 
    <HiOutlineShoppingBag className='cursor-pointer font-bold hover:text-[#FF9F0D] text-white '/>
    
   </div>
</div>
  </div>

      
  )
}

export default HeaderTwo