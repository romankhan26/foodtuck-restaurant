import Image from "next/image"
type ChefProps= {
    chefImageUrl: any,
    isOnHome? : boolean,
    chefName : string,
    chefDescription : string
}

const ChefCard = ({chefImageUrl, isOnHome , chefDescription, chefName}:ChefProps) => {
  return (
  <div className=" flex flex-col">
    <div className='lg:w-[250px] lg:h-[312px] xl:w-[250px] xl:h-[338px] w-[200px] h-[252px] relative'>
        <Image src={chefImageUrl} alt="chefImage" className="w-full rounded-md m-0"/>
        {isOnHome &&  <div className="absolute  w-[65%] xl:bottom-6 bottom-0 left-0 bg-white text-black md:p-3 p-1  text-left">
            <h3 className="font-bold md:text-[20px] text-base">
                {chefName}
            </h3>
            <p className="md:text-[18px] text-sm pb-2">
                {chefDescription}
            </p>
        </div> 
        }

    </div>
    {!isOnHome &&
    <div className="text-black text-center">
          <h3 className="font-bold text-[20px]">
                {chefName}
            </h3>
            <p className="text-[18px] pb-2">
                {chefDescription}
            </p>
    </div>
    }
  </div>
  )
}

export default ChefCard