import { PiCoffee } from "react-icons/pi";
import Image from "next/image";
import "./MenuSection.tsx"
import { MenuItems } from "../../data/data.js";
import SectionFive from "../LandingPage/section5";

// Pass `menuType` and `menuItems` as props to `MenuSection`
const MenuSection = ({
  MenuType,
  ImageUrl,
  MenuId,
  MenuItems,
}: {
  MenuType: string;
  MenuId: number;
  ImageUrl: string;
  MenuItems: MenuItems[];
}) => {
  const menuItems = MenuItems;
  return (
<>
    <div className=" px-[12vw] py-20 bg-white text-black h-fit">
      {
        // image on right
        MenuId % 2 == 0 ? (
          <div className="w-full h-fit  gap-12 flex max-w-7xl  mx-auto flex-col-reverse  md:flex-row">

          
            {/* Menu Section */}
            <div className="md:w-[60%] w-full">
              <h2 className="md:text-2xl text-[16px] font-bold">
                <PiCoffee className="text-xs md:text-sm text-[#ff9f0d]" />
                {MenuType}
              </h2>
              {/* MenuItems */}
              {MenuItems.map((element: MenuItems) => {
                return (
                  <div
                    className="flex justify-between items-start border-b-[1px]  py-[13px] border-b-[#bfbfbf77]"
                    key={element.itemId}
                  >
                    <div className="space-y-2">
                      <h4 className="font-bold text-[12px] md:text-[14px]">
                        {element.itemHeading}
                      </h4>
                      <p className="text-[10px] md:text-[12px]">
                        {element.description}
                      </p>
                      <span className="text-gray-600 text-[10px] md:text-[12px]">
                        {element.calories}
                      </span>
                    </div>
                    <p className="font-bold text-[12px] md:text-[14px] text-[#ff9f0d]">
                      {element.price}
                    </p>
                  </div>
                );
              })}

            </div>
            <div className="md:w-[35%] w-full md:h-[442px]">
              <Image
                src={ImageUrl}
                className="w-full h-[320px] md:h-full"
                width={400}
                height={450}
                alt="menu item"
              />
            </div>
          </div>         
        ) : (
          <div className="w-full  gap-12 flex max-w-7xl  mx-auto flex-col  md:flex-row">
            {/* Image on left */}
               <div className="md:w-[35%] w-full md:h-[442px]">
              <Image
                src={ImageUrl}
                className="w-full  h-[320px]  md:h-full"
                width={400}
                height={450}
                alt="menu item"
              />
            </div>
            {/* Menu Section */}
            <div className="md:w-[60%] w-full">
              <h2 className="md:text-2xl text-[16px] font-bold">
                <PiCoffee className="text-xs md:text-sm text-[#ff9f0d]" />
                {MenuType}
              </h2>
              {/* MenuItems */}
              {MenuItems.map((element: MenuItems) => {
                return (
                  <div
                    className="flex justify-between items-start border-b-[1px]  py-[13px] border-b-[#bfbfbf77]"
                    key={element.itemId}
                  >
                    <div className="space-y-2">
                      <h4 className="font-bold text-[12px] md:text-[14px]">
                        {element.itemHeading}
                      </h4>
                      <p className="text-[10px] md:text-[12px]">
                        {element.description}
                      </p>
                      <span className="text-gray-600 text-[10px] md:text-[12px]">
                        {element.calories}
                      </span>
                    </div>
                    <p className="font-bold text-[12px] md:text-[14px] text-[#ff9f0d]">
                      {element.price}
                    </p>
                  </div>
                );
              })}
            </div>
         
          </div>
        )
      }
    </div>
{  MenuId === 2 &&  

<SectionFive />
}

    </>
  );
};

// Use the `menuData` to render `MenuSection` for each category
// const MenuPage = () => {
//   return (
//     <>
//       {menuData.map((menuCategory) => (
//         <MenuSection
//           key={menuCategory.id}
//           MenuType={menuCategory.menuType}
//           MenuItems={menuCategory.menuItems}
//         />
//       ))}
//     </>
//   );
// };

export default MenuSection;
