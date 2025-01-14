import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
// import FilterByPrice from "./FilterByPrice";
const SideBar = () => {
  const latestProducts =[{
   imageURl:"/assets/img11.png", name: "Pizza",price:"35" },
  {imageURl:"/assets/img12.png", name: "Cupcakes",price:"35"},
  {imageURl:"/assets/img13.png", name: "Cookies",price:"35"},
  {imageURl:"/assets/img14.png", name: "Burgers",price:"35"}]
  const productTags =["Services","Our Menu","Pizza","Cupcake","Burger","Cookies","Our Shop","Tandoori Chicken"]
  return (
    <div className="md:block hidden w-[25%] p-5  bg-white-700 h-fit  border-[1px] text-black border-[#d3d3d378]">
      {/* search bar */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="h-8 px-2 bg-[#ff9e0d30] w-[80%] text-[12px] "
          placeholder="Search Product"
        />
        <button className="p-2 bg-[#ff9f0d] text-white">
          <IoSearch />
        </button>
      </div>
      {/* Category */}
      <div className="flex flex-col py-4 gap-2">
        <h2 className="text-[16px] font-bold mb-2">Category</h2>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Sandwiches
        </label>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Burgers
        </label>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Fried Chickens
        </label>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Pizza
        </label>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Thai
        </label>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Non-Veg
        </label>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Beverages
        </label>
        <label>
          <input type="checkbox" name="" className="mr-2 text-[14px]" />
          Uncategroized
        </label>
      </div>

      {/* Image add */}
      <button className="relative text-white w-[100%]   h-[220px]">
        <Image
          src="/assets/sidebar.png"
          className="w-full h-full"
          alt="abc"
          width={600}
          height={600}
        />
        <div className="text-start absolute  top-4 left-4 ">
          <h3 className="text-[12px] font-bold">Perfect Taste</h3>
          <h2 className="text-[14px] font-bold">Classic Restaurant</h2>
          <h3 className="text-[12px] text-[#ff9f0d] font-bold">45.00 $</h3>
        </div>
        <p className="flex text-[12px] absolute text-start xl:bottom-0 bottom-5 left-4 text-white items-center gap-2 justify-start">
          Shop Now
          <FiArrowRightCircle />{" "}
        </p>
      </button>

      {/* Filter By Price*/}
      <div className="flex flex-col py-4 gap-2">
      <h2 className="text-[16px] font-bold mb-2">Filter By Price</h2>
            <div className="bg-[#ff9f0d] h-1 w-full"></div>
        <div className="flex justify-between items-center text-gray-500 text-[12px] mt-2">
          <p className="">From $0 to $8000</p>
          <p>Filter</p>
        </div>
      </div>
      <br />

      {/* Latest Products */}     <div className="flex flex-col py-4 gap-2">
        <h2 className="text-[16px] font-bold mb-2">Latest Products</h2>
      <div className=" w-full gap-4 flex flex-col">
        {latestProducts.map((product, index) => (
          <div key={index} className="flex gap-2">
          <div className=" w-[50px] h-[50px] rounded-sm ">
            <Image
              src={product.imageURl}
              alt="abc"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
            <div className="text-[12px] text-gray-500 ">
           {product.name}
              <span className="flex items-center justify-center w-full gap-1">
                         <FaStar className="text-[#FF9F0D] w-3 h-3 "/>
                         <FaStar className="text-[#FF9F0D] w-3 h-3 "/>
                         <FaStar className="text-[#FF9F0D] w-3 h-3 "/>
                         <FaStar className="text-[#FF9F0D] w-3 h-3 "/>
                         <FaStar className="text-[#a4a4a4] w-3 h-3 "/>
               
                       </span>
                      {"$"+product.price}
            </div>
            
          </div>))
          }
          </div>
          </div>
          {/* Product tags */}     <div className="flex flex-col py-4 gap-2">
        <h2 className="text-[16px] font-bold mb-2">Prduct Tags</h2>
    <div>
      {productTags.map((tag, index) => (
        <button key={index} className="p-2 hover:text-[#FF9F0D] border-b-[1px] border-b-[#b7b7b7] text-gray-400  text-[10px] mr-3 ">
          {tag}
        </button>
      ))}
    </div>
    </div>

          </div>

  );
};

export default SideBar;
