import Image from "next/image";
import services1 from "../../assets/Group1.png";
import services2 from "../../assets/Group2.png";
import services3 from "../../assets/Group3.png";
import services4 from "../../assets/Group4.png";

export default function SectionFive() {
  return (
    <div className=" md:flex text-[white] px-4 md:px-8 flex-wrap md:gap-10 items-center justify-between mx-auto w-full lg:-mt-10 py-4 md:py-16 max-w-7xl gap-10">
      <div className="h-fit flex flex-col items-center space-y-1 cursor-pointer hover:scale-110 transition-transform">
        <Image
          src={services1}
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
          src={services2}
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
          src={services3}
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
          src={services4}
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
  );
}
