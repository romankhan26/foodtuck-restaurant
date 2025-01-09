import Image from "next/image";
import { Heading, HeadingGreatVibes } from "../generalComponents/heading";
import { PiWine, PiHamburger, PiCookie } from "react-icons/pi";
import Button from "../generalComponents/button";

export default function SectionFour() {
  return (
   <div className=' bg-[#000000f2] overflow-hidden px-[12vw]'>

    <div className="flex flex-col-reverse lg:flex-row items-center justify-between mx-auto gap-10 w-full px-4 md:px-8 mt-10 py-4 md:py-16 max-w-7xl">
      {/* Image Grid Section */}
      <div className="flex items-center justify-center w-full lg:w-[65%] h-fit mx-auto md:pt-10">
        <div className="flex flex-col gap-2 w-full">
          {/* Top Row */}
          <div className="flex items-end gap-2 justify-center">
            <Image
              src="/assets/img8.png"
              width={300}
              height={300}
              alt="img1"
              className="w-[100px] sm:w-[160px] md:w-[255px] lg:w-[220px] xl:w-[300px] h-[110px] sm:h-[200px] md:h-[280px] lg:h-[250px] xl:h-[300px]  object-cover"
            />
            <Image
              src="/assets/img9.png"
              width={300}
              height={300}
              alt="img2"
              className="w-[75px] sm:w-[140px] md:w-[225px] lg:w-[168px] xl:w-[250px] h-[60px] sm:h-[150px] md:h-[180px] lg:h-[150px] xl:h-[200px] object-cover"
            />
          </div>
          {/* Bottom Row */}
          <div className="flex gap-2 justify-center">
            <Image
              src="/assets/img11.png"
              width={300}
              height={300}
              alt="img3"
              className="w-[70px] sm:w-[150px] md:w-[200px] lg:w-[170px] xl:w-[220px] h-[80px] sm:h-[180px] md:h-[220px] lg:h-[197px] xl:h-[250px] object-cover"
            />
            <Image
              src="/assets/img12.png"
              width={300}
              height={300}
              alt="img4"
              className="w-[60px] sm:w-[120px] md:w-[160px] lg:w-[130px] xl:w-[180px] h-[60px] sm:h-[160px] md:h-[190px] lg:h-[140px] xl:h-[190px] object-cover"
            />
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <Image
                src="/assets/img13.png"
                width={300}
                height={300}
                alt="img5"
                className="w-[40px] sm:w-[100px] md:w-[125px] lg:w-[115px] xl:w-[150px] h-[40px] sm:h-[100px] md:h-[125px] lg:h-[93px] xl:h-[150px] object-cover"
              />
              <Image
                src="/assets/img14.png"
                width={300}
                height={300}
                alt="img6"
                className="w-[40px] sm:w-[100px] md:w-[125px] lg:w-[115px] xl:w-[150px] h-[40px] sm:h-[100px] md:h-[125px] lg:h-[93px] xl:h-[150px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text and Button Section */}
      <div className="w-full lg:w-[40%] space-y-4 text-center lg:text-left">
        <HeadingGreatVibes text="Food Category" className="" />
        <Heading text="Extraordinary Taste and Experience" colorOfInitial />
        <p className="text-[14px] sm:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          {/* FastFood */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FF9F0D] p-4 rounded-md">
              <PiHamburger className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <p className="text-[12px] sm:text-[14px]">FastFood</p>
          </div>
          {/* Lunch */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FF9F0D] p-4 rounded-md">
              <PiCookie className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <p className="text-[12px] sm:text-[14px]">Lunch</p>
          </div>
          {/* Dinner */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FF9F0D] p-4 rounded-md">
              <PiWine className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>
            <p className="text-[12px] sm:text-[14px]">Dinner</p>
          </div>
        </div>
        <div className="flex justify-center items-center lg:justify-start">
          <Button
            className="w-[200px] h-[50px] sm:w-[280px] sm:h-[80px] flex items-center px-4 justify-between text-black text-[13px] font-semibold rounded-[7px] bg-white border-l-8 border-l-[#FF9F0D]"
            text={
              <>
                {/* Left Side - 30+ */}
                <span className="font-bold relative text-[#FF9F0D] text-[32px] sm:text-[36px] top-[20px]">
                  30+
                </span>

                {/* Right Side - Years Of Experience */}
                <span className="flex flex-col leading-tight relative top-[-20px] left-[100px] sm:left-[140px]">
                  <span className="text-[14px] sm:text-[16px] font-normal text-left">
                    Years Of
                  </span>
                  <span className="font-bold text-[14px] sm:text-[16px]">
                    Experience
                  </span>
                </span>
              </>
            }
          />
        </div>
      </div>
    </div>
    </div>
  );
}
