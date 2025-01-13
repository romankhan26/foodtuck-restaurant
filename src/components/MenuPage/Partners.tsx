import Image from "next/image";
const Partners = () => {
  return (
    <div className=" px-[12vw] text-black">
      <div className="max-w-7xl w-full mx-auto text-center">
        <p className=" text-[10px] md:text-[14px] ">
          Partners & Clients
        </p>
        <h2 className="md:text-2xl text-[16px] font-bold">We work with the best people</h2>
        <div className="flex flex-wrap justify-between items-center mx-4 py-10 md:py-14">
            <Image src="/assets/img23.png" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[130px] h-[15px] sm:h-[35px] md:h-[60px] lg:h-[80px]" alt="img" width={400} height={400}/>
            <Image src="/assets/img24.png" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[130px] h-[15px] sm:h-[35px] md:h-[60px] lg:h-[80px]" alt="img" width={400} height={400}/>
            <Image src="/assets/img25.png" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[130px] h-[15px] sm:h-[35px] md:h-[60px] lg:h-[80px]" alt="img" width={400} height={400}/>
            <Image src="/assets/img26.png" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[130px] h-[15px] sm:h-[35px] md:h-[60px] lg:h-[80px]" alt="img" width={400} height={400}/>
            <Image src="/assets/img27.png" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[130px] h-[15px] sm:h-[35px] md:h-[60px] lg:h-[80px]" alt="img" width={400} height={400}/>
            <Image src="/assets/img28.png" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[130px] h-[15px] sm:h-[35px] md:h-[60px] lg:h-[80px]" alt="img" width={400} height={400}/>
        </div>
      </div>
    </div>
  );
};

export default Partners;
