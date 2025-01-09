import Image from "next/image";
export default function SectionFive() {
  return (
   <div className=' bg-[#000000d5] overflow-hidden px-[12vw] pt-10'>

    <div className=" md:flex text-[white] px-4 md:px-8 flex-wrap md:gap-10 items-center justify-between mx-auto w-full lg:-mt-10 py-4 md:py-16 max-w-7xl gap-10">
      <div className="h-fit flex flex-col items-center space-y-1 cursor-pointer hover:scale-110 transition-transform">
        <Image
           src='/assets/Group1.png'
            width={300}
            height={300}
          alt="services"
          className=" lg:w-[85px] w-[45px] h-[45px] lg:h-[85px] sm:w-[60px] sm:h-[60px] mb-2"
        />
        <p className="font-semibold text-sm md:text-base text-center">
          Professional Chefs
        </p>
        <h1 className="font-bold text-[22px] md:text-[24px] text-center">
          420
        </h1>
      </div>
      <div className="h-fit flex flex-col items-center space-y-1 cursor-pointer hover:scale-110 transition-transform">
        <Image
           src='/assets/Group2.png'
            width={300}
            height={300}
          alt="services"
          className="lg:w-[85px] w-[45px] h-[45px] lg:h-[85px] sm:w-[60px] sm:h-[60px] mb-2"
        />
        <p className="font-semibold text-sm md:text-base text-center">
          Items Of Food
        </p>
        <h1 className="font-bold text-[22px] md:text-[24px] text-center">
          320
        </h1>
      </div>
      <div className="h-fit flex flex-col items-center space-y-1 cursor-pointer hover:scale-110 transition-transform">
        <Image
           src='/assets/Group3.png'
            width={300}
            height={300}
          alt="services"
          className="lg:w-[85px] w-[45px] h-[45px] lg:h-[85px] sm:w-[60px] sm:h-[60px] mb-2"
        />
        <p className="font-semibold text-sm md:text-base text-center">
          Years Of Experience
        </p>
        <h1 className="font-bold text-[22px] md:text-[24px] text-center">
          30+
        </h1>
      </div>
      <div className="h-fit flex flex-col items-center space-y-1 cursor-pointer hover:scale-110 transition-transform">
        <Image
           src='/assets/Group4.png'
            width={300}
            height={300}
          alt="services"
          className="lg:w-[85px] w-[45px] h-[45px] lg:h-[85px] sm:w-[60px] sm:h-[60px] mb-2"
        />
        <p className="font-semibold text-sm md:text-base text-center">
          Happy Customers
        </p>
        <h1 className="font-bold text-[22px] md:text-[24px] text-center">
          220
        </h1>
      </div>
    </div>
    </div>

  );
}
