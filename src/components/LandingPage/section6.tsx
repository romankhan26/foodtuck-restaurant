import Image from "next/image";

import Menulistitem from "../generalComponents/menuItemsHomePage";
import { Heading, HeadingGreatVibes } from "../generalComponents/heading";
export default function SectionSix() {
  return (
   <div className=' bg-[#000000f2] overflow-hidden px-[12vw]'>

    <div className=" w-full px-4 md:px-8 mx-auto py-10 md:py-16  max-w-7xl flex flex-col items-center text-white gap-6">
      <div className="flex flex-col  w-full items-center">
        <HeadingGreatVibes text="Choose & Pick" className="" />
        <Heading text="From Our Menu" colorOfInitial={true} />
        <ul className="flex gap-4 md:gap-6 text-sm md:text-base lg:text-lg w-full bg-black justify-between mt-6 flex-wrap">
          <li className="font-semibold text-[#FF9F0D] hover:text-white cursor-pointer">
            Breakfast
          </li>
          <li className="hover:text-[#FF9F0D] cursor-pointer">Lunch</li>
          <li className="hover:text-[#FF9F0D] cursor-pointer">Dinner</li>
          <li className="hover:text-[#FF9F0D] cursor-pointer">Dessert</li>
          <li className="hover:text-[#FF9F0D] cursor-pointer">Drink</li>
          <li className="hover:text-[#FF9F0D] cursor-pointer">Snack</li>
          <li className="hover:text-[#FF9F0D] cursor-pointer">Soups</li>
        </ul>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="flex items-center justify-center row-span-2">
          <Image
            src="/assets/img10.png"
            width={300}
            height={300}
            alt="quick and amusing"
            className="mx-auto  w-[300px] h-[300px] transition transform hover:scale-110 cursor-pointer"
          />
        </div>
          <Menulistitem
            imgURL="/assets/img15.png"
            title="Lettuce Leaf"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="12.5$"
          />
          <Menulistitem
            imgURL="/assets/img16.png"
            title="Glow Cheese"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="14.5$"
          />
          <Menulistitem
            imgURL="/assets/img17.png"
            title="Fresh Breakfast"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="14.5$"
          />
          <Menulistitem
            imgURL="/assets/img18.png"
            title="Italian Pizza"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="12.5$"
          />
          <Menulistitem
            imgURL="/assets/img20.png"
            title="Mild Butter"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="12.5$"
          />
          <Menulistitem
            imgURL="/assets/img21.png"
            title="Slice Beef"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="12.5$"
          />
          <Menulistitem
            imgURL="/assets/img22.png"
            title="Fresh Bread"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="12.5$"
          />
          <Menulistitem
            imgURL="/assets/img22.png"
            title="Mashroom Pizza"
            description="Lacus nisi, et ac dapibus velit in consequat."
            priceNow="12.5$"
          />
        </div>
      </div>
      </div>
  );
}
