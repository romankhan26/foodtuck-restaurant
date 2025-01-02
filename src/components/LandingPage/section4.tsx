import Image from "next/image";
import { Heading, HeadingGreatVibes } from "../generalComponents/heading";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import { PiWine, PiHamburger, PiCookie } from "react-icons/pi";
import img14 from "../../assets/img14.png";
import Button from "../generalComponents/button";

export default function SectionFour() {
  return (
    <div className=" flex flex-col-reverse lg:flex-row items-center justify-between mx-auto gap-10 w-full px-4 md:px-8 mt-10 py-4 md:py-16 max-w-7xl">
      {/* Image Grid Section */}
    <div className="flex items-center justify-center">
    <div className="flex flex-col gap-2 w-full lg:w-[60%]    mx-auto md:pt-10">
        {/* Top Row */}
        <div className="flex items-end gap-2 ">
          <Image
            src={img8}
            alt="img1"
            className="w-[110px] md:w-[260px] md:h-[275px] h-[125px] "
          />
          <Image
            src={img9}
            alt="img2"
            className="w-[80px] md:w-[230px] md:h-[180px] h-[70px] "
          />
        </div>
        {/* Bottom Row */}
        <div className="flex gap-2">
          <Image
            src={img11}
            alt="img3"
            className="w-[75px] md:w-[200px] h-[95px] md:h-[255px] "
          />
          <Image
            src={img12}
            alt="img4"
            className="w-[60px] md:w-[160px] h-[60px] md:h-[175px] "
          />
          <div className="flex flex-col gap-2 ">
            <Image
              src={img13}
              alt="img5"
              className="w-[50px] md:w-[125px] h-[50px] md:h-[125px]  "
            />
            <Image
              src={img14}
              alt="img6"
              className="w-[50px] md:w-[125px] h-[50px] md:h-[125px] "
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
  );
}
