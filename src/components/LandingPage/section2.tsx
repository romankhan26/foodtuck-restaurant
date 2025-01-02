import Button from "../generalComponents/button";
import { FaPinterestP } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Heading, HeadingGreatVibes } from "../generalComponents/heading";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import image from "../../assets/Capture.png";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";

const SectionTwo = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 w-full max-w-7xl mx-auto  px-4 md:px-8 items-center py-4 md:py-16 bg-black">
      {/* Text Section */}
      <div className="w-full md:w-1/2 lg:w-[60%] text-left">
        <HeadingGreatVibes text="About Us" className="" />
        <Heading text="We create the best foody product" colorOfInitial={true} />
        <p className="text-[14px] md:text-[16px] mt-4 leading-relaxed text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.     </p>
        <br />
        <ul className="text-[14px] space-y-2">
<li className="flex justify-start items-center gap-1"><FaCheck className="w-[10px] h-[10px]" />Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
<li className="flex justify-start items-center gap-1"><FaCheck className="w-[10px] h-[10px]" />Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
<li className="flex justify-start items-center gap-1"><FaCheck className="w-[10px] h-[10px]" />Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
</ul>
        <Button
          className="w-[180px] h-[50px] mt-6 text-white bg-[#FF9F0D] rounded-full border-[1px] hover:bg-transparent border-[#FF9F0D]"
          text="See Menu"
        />
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:ml-6 gap-3 mt-6 md:mt-0">
        {/* Top Image */}
        <div className="w-full">
          <Image
            src={image1}
            className="rounded-[5px] w-full h-[200px] md:h-[240px] object-cover"
            alt="image1"
          />
        </div>

        {/* Bottom Images */}
        <div className="flex gap-3">
          <div className="flex-1">
            <Image
              src={image2}
              className=" rounded-[5px] w-full h-[150px] md:h-[180px] object-cover"
              alt="image2"
            />
          </div>
          <div className="flex-1">
            <Image
              src={image3}
              className="rounded-[5px] w-full h-[150px] md:h-[180px] object-cover"
              alt="image3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
