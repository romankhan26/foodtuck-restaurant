import Image from "next/image"
import { LuThumbsUp } from "react-icons/lu";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
const BlogsHomePage = ({imgURL, date, heading}: {
    imgURL:any, date:string, heading:string
}) => {
  return (
    <div className='w-[310px] h-[410px]  relative border-r-[1px] border-b-[1px] border-white flex-shrink-0'>
<Image src={imgURL}  alt="" className="h-[65%] w-[310px] absolute top-0 "/>
<div className=" absolute h-[35%] bottom-0 p-5 space-y-2 border-l-[1px] border-white">
<p className="text-[#FF9F0D]  text-[10px] md:text-[13px]">{date}</p>
<h1 className="text-sm md:text-base font-bold ">{heading}</h1>
<div className="flex items-center justify-between">
<p className=" text-[10px] md:text-[13px]">Learn More</p>
    <div className="flex items-center justify-end gap-2"> 
        <LuThumbsUp className="w-[18px] h-[18px] " />
        <LuMessageSquareMore className="w-[18px] h-[18px] text-[#FF9F0D]" />
        <FiShare2 className="w-[18px] h-[18px] " />  
    </div>
</div>
</div>
    </div>
  )
}

export default BlogsHomePage