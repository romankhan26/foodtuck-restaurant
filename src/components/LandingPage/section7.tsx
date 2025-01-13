import { Heading, HeadingGreatVibes } from "../GeneralComponents/Headings";
import  Button from "../GeneralComponents/Button"
import  ChefCard from "../GeneralComponents/ChefCardHome"
const SectionSeven = () => {
  return (
   <div className=' bg-[#000000f2] overflow-hidden px-[12vw]'>

    <div className='w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center'>
<div className="mb-10 text-center">
<HeadingGreatVibes className="" text="Chefs"/>
<Heading colorOfInitial={true} text="Meet our Chefs" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2   gap-16  lg:grid-cols-4 ">
 <ChefCard chefImageUrl="/assets/Chef Card 1.png" isOnHome chefName="D.Estwood" chefDescription="Chief Chef"/>
 <ChefCard chefImageUrl="/assets/Chef Card 1 (2).png" isOnHome chefName="D.Scoriesh" chefDescription="Assistant Chef"/>
 <ChefCard chefImageUrl="/assets/Chef Card 1 (3).png" isOnHome chefName="M. William" chefDescription="Advertising Chef"/>
 <ChefCard chefImageUrl="/assets/Chef Card 1 (4).png" isOnHome chefName="W.Readfroad" chefDescription="Chef"/>
</div>
     <Button 
        className="w-[180px] h-[50px] mt-6 text-white bg-[#ff9e0d00] rounded-full border-[1px] hover:bg-[#ff9f0d] border-[#FF9F0D]"
        text="See More" 
      />
    </div>
    </div>
  )
}

export default SectionSeven