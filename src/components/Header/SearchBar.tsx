'use client';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim()) {
      // Redirect to the search results page with the query in the URL
      router.push(`/${query}`);
    }
  };

  return (
    <div className="flex relative items-center gap-3 top-2">
      <form onSubmit={handleSearch} className="max-w-full md:w-3/4 text-[10px] md:text-[12px] lg:w-[260px] hidden relative h-[39px] md:flex justify-between px-5 items-center border-[1px] border-[#FF9F0D] rounded-[27px]">
        <input
          type="text"
          name="name"
          placeholder="Search...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent placeholder:text-gray-500 outline-none"
        />
        <button aria-label="Search" className="cursor-pointer">
          <CiSearch className="w-6 h-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
