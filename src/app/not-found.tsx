import HeaderSection from "@/components/GeneralComponents/HeaderSection";
import HeaderTwo from "@/components/Header/HeaderGeneral";
import Link from "next/link";

const NotFound = () => {
  return (<>
    <HeaderTwo/>
            <HeaderSection text='404' textHeading='404 Error'/>
    <div className=' h-[100vh] bg-white'>
            <div className="flex flex-col items-center justify-center mt-28 gap-2 text-center md:gap-4">
              <h1 className=" md:text-6xl text-4xl font-bold text-[#ff9f0d] ">404</h1>
              <h2 className="text-3xl text-black font-bold ">Oops! Looks like something went wrong</h2>
              <p className="md:text-base  text-[#1c1c1c] text-sm ">
              Page Cannot be found! we’ll have it figured out in no time.
              Meanwhile, check out these fresh ideas:
              </p>
              <Link className="px-8 md:px-12 py-3 md:py-5 rounded-md hover:bg-[hsl(36,100%,48%)] mt-5 md:mt-0  bg-[#ff9f0d] text-white" href="/">Go to home</Link>
            </div>
    </div>
    </>
  )
}

export default NotFound