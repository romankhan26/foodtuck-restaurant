import React from 'react'
import BlogsHomePage from '../generalComponents/blogHome'
import Blog1 from "../../assets/img5.png"
import Blog2 from "../../assets/img6.png"
import Blog3 from "../../assets/img8.png"
import { Heading, HeadingGreatVibes } from "../generalComponents/heading"
const SectionTen = () => {
  return (
    <div className='mb-64 w-full max-w-7xl px-4 md:px-8 mx-auto py-14 md:py-20'>
  <div className="text-center ">
  <HeadingGreatVibes text='Blog Post' className=''/>
  <Heading text=' Latest News & Blog' colorOfInitial/>
  </div>
       <div className='flex items-center justify-center gap-10 mt-6 flex-wrap'>
       <BlogsHomePage imgURL={Blog1} date='10 February 2022 ' heading='Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
        <BlogsHomePage imgURL={Blog2} date='10 February 2022 ' heading='Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
        <BlogsHomePage imgURL={Blog3} date='10 February 2022 ' heading='Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
</div>    </div>
  )
}

export default SectionTen