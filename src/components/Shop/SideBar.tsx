import { IoSearch } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="md:block hidden w-[25%] p-2  bg-white-700 h-[80%] border-[1px] text-black border-[#d3d3d378]">
      {/* search bar */}
      <div className="flex justify-center items-center">
        <input type="text" className="py-1 px-2 bg-[#ff9e0d30] w-[90%]" />
        <button className="p-2 bg-[#ff9f0d] text-white">
          <IoSearch />
        </button>
      </div>
      </div>
      
  );
};

export default SideBar;
