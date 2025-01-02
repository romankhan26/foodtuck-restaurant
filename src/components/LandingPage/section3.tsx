import Image from "next/image";
import { Heading } from "../generalComponents/heading";
import { HeadingGreatVibes } from "../generalComponents/heading";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";

export default function SectionThree() {
  return (
    <div className="bg-transparent w-full flex flex-col  mt-10  max-w-7xl mx-auto   gap-10">
      {/* Heading Section */}
      <div className="flex flex-col items-center">
        <HeadingGreatVibes text="Food Category" className="" />
        <Heading text="Choose Food Item" colorOfInitial={true} />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
          <Image
            src={img4}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 1"
          />
   
          <Image
            src={img5}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 2"
          />
   
          <Image
            src={img6}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 3"
          />
   
          <Image
            src={img7}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 4"
          />
        </div>
    </div>
  );
}
