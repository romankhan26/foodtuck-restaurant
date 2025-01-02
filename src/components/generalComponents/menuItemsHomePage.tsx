import Image from "next/image";

type Props = {
  title: string;
  description: string;
  priceNow: string;
  imgURL: any;
};

export default function Menulistitem({ title, description, priceNow, imgURL }: Props) {
  return (
    <div className="flex h-fit flex-1 gap-3 p-4 items-center max-w-[400px] lg:max-w-[500px] w-full mx-auto bg-[#1E1E1E] rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[#292929]">
      <Image
        src={imgURL}
        alt={title}
        className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] object-cover rounded-md"
      />
      <div className="flex flex-col text-white">
        <p className="font-bold text-sm md:text-base ">{title}</p>
        <p className="text-xs md:text-sm  text-gray-400">{description}</p>
        <p className="flex items-center gap-1 text-[#FF9F0D] font-bold text-sm ">
          {priceNow}
        </p>
      </div>
    </div>
  );
}
