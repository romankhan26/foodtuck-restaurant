import Image from "next/image";
import { Heading, HeadingGreatVibes } from "../generalComponents/heading";
import Button from "../generalComponents/button";
import { CiPlay1 } from "react-icons/ci";

const SectionNine = () => {
  return (
    <div className=' bg-[#000000f2] overflow-hidden px-[12vw]'>

    <div className="relative w-full md:[h-65vh] xl:h-[550px] h-[400px] max-w-7xl  mx-auto flex items-center justify-end px-4">
      <Image
        src="/assets/section9bg.png"
        width={400}
        height={400}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col space-y-4 items-end text-right justify-center w-full max-w-7xl md:w-[60%] lg:w-[50%] text-white mr-4 md:mr-16 lg:mr-24 xl:mr-32">
        <HeadingGreatVibes
          text="Restaurant Active Process"
          className="text-lg md:text-2xl lg:text-3xl"
        />
        <Heading
          text="We Document Every Food Bean Process until it is saved"
          colorOfInitial={true}
        />
        <p className="text-xs md:text-sm lg:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna.
        </p>
        <div className="flex justify-center md:flex-row flex-col mr-8 sm:mr-0 items-center gap-3 mt-4">
          <Button
            className="w-[150px] md:w-[180px] h-[40px] md:h-[50px] text-sm md:text-base text-white bg-[#ff9e0d00] rounded-full border border-[#FF9F0D] hover:bg-[#ff9f0d] transition-all"
            text="See More"
          />
          <div className="flex justify-center gap-2 items-center" >
            <CiPlay1 className="w-8 h-8 md:w-10 md:h-10 font-bold text-white hover:text-[#ff9f0d]  border border-[#ff9f0d] bg-[#ff9F0d] hover:bg-transparent cursor-pointer rounded-full p-2 md:p-3" />
          <span className="text-xs md:text-sm lg:text-base">Play Video</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectionNine;
