import Image from "next/image";
import { Heading } from "../generalComponents/heading";
import { HeadingGreatVibes } from "../generalComponents/heading";

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
            src='/assets/img4.png'
            width={300}
            height={300}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 1"
          />
   
          <Image
            src='/assets/img5.png'
            width={300}
            height={300}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 2"
          />
   
          <Image
            src='/assets/img6.png'
            width={300}
            height={300}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 3"
          />
   
          <Image
            src='/assets/img7.png'
            width={300}
            height={300}
            className="rounded-[5px] w-full h-[250px] md:h-[280px] object-cover"
            alt="Food Item 4"
          />
        </div>
    </div>
  );
}
