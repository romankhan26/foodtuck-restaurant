'use client';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <div className="flex relative items-center gap-3 top-2">
      <form onSubmit={handleSearch} className="max-w-full md:w-3/4 text-[10px] md:text-[12px] lg:w-[260px] hidden relative h-[39px] md:flex justify-between px-5 items-center border-[1px] border-[#FF9F0D] rounded-[27px]">
        <input
          type="text"
          name="name"
          placeholder="Search...."
          className="flex-1 bg-transparent placeholder:text-gray-500 outline-none"
        />
        <button aria-label="Search" className="cursor-pointer">
          <CiSearch className="w-6 h-5" />
        </button>
      </form>
      <IoSearch className="md:hidden cursor-pointer hover:text-[#FF9F0D]" />
      <HiOutlineShoppingBag className="cursor-pointer hover:text-[#FF9F0D]" />
    </div>
  );
};

export default SearchBar;
