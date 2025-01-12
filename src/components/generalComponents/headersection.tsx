import "./headersection.css"
import { HeadingLink } from "./heading"
const HeaderSection = ({text, textHeading}:{text:string, textHeading :string}) => {
  return (
    <div className='h-56 header-section w-full relative px-[12vw] flex justify-center items-center'>
<HeadingLink text={text} textHeading={textHeading}/>

    </div>
  )
}

export default HeaderSection