import Header from '@/components/header/header'
import Hero from '@/components/LandingPage/hero'
import SectionTwo from '@/components/LandingPage/section2'
import SectionThree from '@/components/LandingPage/section3'
import SectionFour from '@/components/LandingPage/section4'
import SectionFive from '@/components/LandingPage/section5'
import SectionSix from '@/components/LandingPage/section6'
import SectionSeven from '@/components/LandingPage/section7'
import SectionEight from '@/components/LandingPage/section8'
import SectionNine from '@/components/LandingPage/section9'
import SectionTen from '@/components/LandingPage/section10'


export default function Home  () {
  return(
   <div className=' bg-[#000000d5] overflow-hidden px-[12vw]'>
     <Header/>
        <Hero/>
<SectionTwo/> 
<SectionThree/> 
<SectionFour/> 
<SectionFive/> 
<SectionSix/> 
<SectionSeven/> 
<SectionEight/> 
<SectionNine/> 
<SectionTen/> 
   </div>
  )
}
