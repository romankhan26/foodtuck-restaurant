import Image from "next/image"
type ChefProps= {
    chefImageUrl: string,
    isOnHome? : boolean,
    chefName : string,
    chefDescription : string
}

const ChefCard = ({chefImageUrl, isOnHome , chefDescription, chefName}:ChefProps) => {
  return (
  <div className=" flex flex-col">
     {isOnHome && 
    <div className='lg:w-[210px] lg:h-[272px] xl:w-[230px] xl:h-[318px] w-[200px] h-[252px] relative'>
        <Image src={chefImageUrl} width={300} height={300} alt="chefImage" className="w-full rounded-md m-0"/>
        <div className="absolute  w-[65%] xl:bottom-6 lg:bottom-2 bottom-0 left-0 bg-white text-black md:p-3 p-1  text-left">
            <h3 className="font-bold md:text-[20px] text-base">
                {chefName}
            </h3>
            <p className="md:text-[18px] text-sm pb-2">
                {chefDescription}
            </p>
        </div> 

    </div>
        }
    {!isOnHome &&
     <div className='lg:w-[200px] lg:h-[262px]  w-[200px] h-[252px] relative md:my-5 my-2'>
     <Image src={chefImageUrl} width={300} height={300} alt="chefImage" className="w-full  m-0"/>
  
    <div className="text-black text-center">
          <h3 className="font-bold text-[18px]">
                {chefName}
            </h3>
            <p className="text-[16px] pb-2 -mt-2">
                {chefDescription}
            </p>
    </div>
    </div>
    }
  </div>
  )
}

export default ChefCard