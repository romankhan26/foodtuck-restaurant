import Image from "next/image"
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { ProductCardInterface } from "../../data/data";
const ProductCard = ({imageUrl, priceThen,priceNow, name, id}:ProductCardInterface) => {
  return (
    <div className='w-[210px] h-[265px] group cursor-pointer hover:shadow-2xl my-2'>
    {/* Image of the product */}
<div className="relative bg-black ">
    <Image  className="w-[210px]  h-[210px] hover:opacity-50 transition-all duration-200" src={imageUrl} width={800} height={800} alt="img"/>
{/* Icons on hover */}
    <div className="absolute hidden group-hover:flex w-[100%] gap-2 text-center items-center justify-center bottom-24 text-white ">
<div className="p-2 bg-white rounded-md">
<LuGitCompareArrows className=" text-[#ff9f0d] cursor-pointer"/>
    
    </div>    
<div className="p-2 bg-[#ff9f0d] rounded-md">
<HiOutlineShoppingBag className="text-white w-[20px] h-[20px] cursor-pointer"/>
    
        </div>
        <div className="p-2  bg-white rounded-md">
             <FaRegHeart className=" text-[#ff9f0d]   w-[20px] h-[20px] cursor-pointer"/>
    </div> 
        </div>

</div>
<div className="flex flex-col gap-[5px] py-1">
<h3 className="text-base  text-black">
{name}
</h3>
<p className="flex gap-2 text-sm">
          {priceThen ? (
            <>
              {" "}
              <span className="text-[#ff9f0d]">{"$"+priceNow}</span>
              <span className="text-gray-500 line-through "> {"$"+priceThen}</span>
            </>
          ) : (
            <span className="text-[#ff9f0d]">{priceNow}</span>
          )}{" "}
        </p>


</div>
    </div>
  )
}

export default ProductCard


