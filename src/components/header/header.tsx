import NavLinks from "./navlinks";
import SearchBar from "./searchbar";

export default function Header() {
  return (
   <div className=' bg-[#000000ce] overflow-hidden px-[12vw]'>

    <div className="mx-auto w-full max-w-7xl h-auto px-4 relative pb-10 top-[10px]">
      <h1 className="text-center font-bold"><span className="text-[#FF9F0D]">
        Food
      </span>
tuck
      </h1>
      <div className="flex justify-between items-center flex-wrap">
        <NavLinks />
        <SearchBar />
      </div>
    </div>
    </div>
  );
}

