import { FaAngleRight } from "react-icons/fa6";
import { Great_Vibes } from "next/font/google";

const great_vibes = Great_Vibes({
  weight:"400",
  variable: "--font-great-vibes",
  subsets: ["latin"],

});


export function Heading({
    text,
    colorOfInitial,
  }: {
    text: string;
    colorOfInitial: boolean;
  }) {
    return (
      <h1
        className={` md:text-[36px] text-[20px]  font-bold leading-tight`}
      >
        {colorOfInitial ? (
          <span className="text-[#FF9F0D]">{text.slice(0, 2)}</span>
        ) : (
          text.slice(0, 2)
        )}
        {text.slice(2)}
      </h1>
    );
  }

export function HeadingGreatVibes({ className, text }: { className: string; text: string }) {
  return (
    <h1 className={`${great_vibes.className} text-[#FF9F0D] text-[20px] md:text-[30px] ${className}`}>{text}</h1>
  );
}

export const HeadingLink = ({textHeading, text}: {textHeading:string,text:string}) => {
  return (
    <div className="text-center"><h1 className="font-bold md:text-4xl text-2xl pb-3">{textHeading}</h1>
    <p className="md:text-sm  text-xs flex items-center justify-center "> Home <FaAngleRight/> <span className="text-[#ff9f0d]"> {text} </span> </p></div>
  )
}
