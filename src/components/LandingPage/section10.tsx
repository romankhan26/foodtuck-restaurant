import BlogsHomePage from '../generalComponents/blogHome'
import { Heading, HeadingGreatVibes } from "../generalComponents/heading"
const SectionTen = () => {
  return (
    <div className='mb-64 w-full max-w-7xl px-4 md:px-8 mx-auto py-14 md:py-20'>
  <div className="text-center ">
  <HeadingGreatVibes text='Blog Post' className=''/>
  <Heading text=' Latest News & Blog' colorOfInitial/>
  </div>
       <div className='flex items-center justify-center gap-10 mt-6 flex-col md:flex-wrap lg:flex-nowrap md:flex-row'>
       <BlogsHomePage imgURL="/assets/img5.png" date='10 February 2022 ' heading='Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
        <BlogsHomePage imgURL="/assets/img5.png" date='10 February 2022 ' heading='Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
        <BlogsHomePage imgURL="/assets/img5.png" date='10 February 2022 ' heading='Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
</div>    </div>
  )
}

export default SectionTen