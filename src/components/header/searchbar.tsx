import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

const SearchBar = () => {
  return (
  <div className="flex relative items-center gap-3 top-2">
    <div className='max-w-full md:w-3/4 lg:w-[260px] hidden relative  h-[39px] md:flex justify-between px-5 items-center border-[1px] border-[#FF9F0D] rounded-[27px]

'>
    <span className='text-gray-400'>Search...</span>
    <CiSearch className='w-6 h-5'/>
</div>
<IoSearch className=' md:hidden cursor-pointer hover:text-[#FF9F0D]'/>
<HiOutlineShoppingBag className='cursor-pointer hover:text-[#FF9F0D]'/>
</div>
 )
}

export default SearchBar