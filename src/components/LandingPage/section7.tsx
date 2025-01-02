import { Heading, HeadingGreatVibes } from "../generalComponents/heading";
import  Button from "../generalComponents/button"
import  ChefCard from "../generalComponents/chefCard"
import img1 from "../../assets/Chef Card 1.png"
import img2 from "../../assets/Chef Card 1 (2).png"
import img4 from "../../assets/Chef Card 1 (3).png"
import img3 from "../../assets/Chef Card 1 (4).png"
const SectionSeven = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center'>
<div className="mb-10 text-center">
<HeadingGreatVibes className="" text="Chefs"/>
<Heading colorOfInitial={true} text="Meet our Chefs" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2  gap-16  xl:grid-cols-4 ">
 <ChefCard chefImageUrl={img1} isOnHome chefName="D.Estwood" chefDescription="Chief Chef"/>
 <ChefCard chefImageUrl={img2} isOnHome chefName="D.Scoriesh" chefDescription="Assistant Chef"/>
 <ChefCard chefImageUrl={img3} isOnHome chefName="M. William" chefDescription="Advertising Chef"/>
 <ChefCard chefImageUrl={img4} isOnHome chefName="W.Readfroad" chefDescription="Chef"/>
</div>
     <Button 
        className="w-[180px] h-[50px] mt-6 text-white bg-[#ff9e0d00] rounded-full border-[1px] hover:bg-[#ff9f0d] border-[#FF9F0D]"
        text="See More" 
      />
    </div>
  )
}

export default SectionSeven