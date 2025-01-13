
import CardsSection from "@/components/Shop/ProductCards";
import ShowDropDown from "@/components/Shop/ShowByDropDown";
import SideBar from "@/components/Shop/SideBar";
import SortDropdown from "@/components/Shop/SortByDropDown";
const Shop = () => {
  return (
    
    <div className="px-[12vw] bg-white">

    <div className="max-w-7xl mx-auto ">
          <div className="flex text-black py-3 mt-16 gap-4 flex-col md:flex-row px-4 md:px-8">
    <SortDropdown />
    <ShowDropDown />
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <CardsSection />
          </div>
          <SideBar/>
        </div>
    </div>
    </div>
     

    
  );
};

export default Shop;
