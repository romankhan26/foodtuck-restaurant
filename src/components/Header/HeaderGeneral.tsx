'use client'
import { useState } from 'react';
import NavLinks from './NavLinks';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';

const HeaderTwo = () => {
  const [searchbar, setSearchbar] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${query}`);
    }
  };

  return (
    <div className="bg-[#000000] overflow-hidden px-[12vw] -mb-2">
      <div className="md:mx-auto w-full max-w-7xl h-auto -mx-3 relative md:px-8 flex justify-between items-center pb-10 top-[10px]">
        <h1 className="font-bold md:block relative top-2 hidden">
          <span className="text-[#FF9F0D]">Food</span>tuck
        </h1>
        <NavLinks />
        <div className="flex items-center relative gap-3 top-2">
          <IoSearch
            onClick={() => setSearchbar(prev => !prev)}
            className="cursor-pointer hover:text-[#FF9F0D] text-white"
          />
          <FaRegUser className="cursor-pointer hover:text-[#FF9F0D] text-white" />
          <HiOutlineShoppingBag className="cursor-pointer font-bold hover:text-[#FF9F0D] text-white" />
        </div>
      </div>

      {/* Conditional rendering of the search bar */}
      {searchbar && (
        <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-full md:w-[300px] bg-white rounded-[10px] p-4">
            <form onSubmit={handleSearch} className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 rounded-l-[10px] border-[1px] border-[#FF9F0D] outline-none"
              />
              <button aria-label="Search" type="submit" className="bg-[#FF9F0D] p-2 rounded-r-[10px]">
                <CiSearch className="w-5 h-[25px] text-white" />
              </button>
            </form>
            {/* Close search bar on clicking outside */}
            <button
              onClick={() => setSearchbar(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderTwo;
