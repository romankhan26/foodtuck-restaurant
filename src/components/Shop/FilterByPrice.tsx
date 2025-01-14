// 'use client'
// import React, { useState } from 'react';
// import { foodProductCards } from '../MockData/data'


// const DraggableProgressBar: React.FC = () => {
//   const [progress, setProgress] = useState<number>(50); // Initial progress state
// // const data = foodProductCards;
// // let DataPrice:number[]= [];
// // data.forEach((item) => {
// //     DataPrice.push(Number(item.priceNow))
// // })
// // const [index, setIndex]= useState(0);
// let priceProgress= (progress / 8000 )*100
//   // Handler for slider change
//   const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProgress(parseInt(event.target.value, 10));
//   };

//   return (
//     <div className=" text-center relative h-3 bg-green-300 ">
//       <div className="relative  h-3 bg-gray-300 rounded-full w-full overflow-hidden">
//         <div
//           className={`absolute top-0 left-0 h-full rounded-full transition-all ease-in-out duration-300 bg-[#ff9f0d]`}
//           style={{ width: `${priceProgress}%` }}
//         ></div>
        
//         <span className="  flex items-center justify-center  text-black font-bold">
//           {priceProgress}%
//         </span>
        
//       </div>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={progress}
//         onChange={handleSliderChange}
//         className="w-full mt-6 appearance-none cursor-pointer bg-transparent focus:outline-none absolute -top-5 opacity-0  left-0"
//         style={{
//           background: `linear-gradient(to right, #38b2ac ${progress}%, #e5e7eb ${progress}%)`,
//         }}
//       />
//     </div>
//   );
// };

// export default DraggableProgressBar;


