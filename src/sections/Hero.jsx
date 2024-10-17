// import React from 'react'
// import rarrow from "../assets/icons/arrow-right.svg"
// import Button from '../Components/Button'
// import { shoes, statistics } from '../Constant'
// import bigshoe1 from "../assets/images/big-shoe1.png"
// import ShoeCard from '../Components/ShoeCard'
// import { useState } from 'react'

// const Hero = () => {
//   const [bigShoeImg, setbigShoeImg] = useState(bigshoe1)
//   return (
//     <section className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10' >
//       <div className='relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 ml-12'>

//         <p className='text-[#FF6524] text-xl font-montserrat'>Our Summer Collection</p>

//         <h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
//           <span className='pr-10 relative z-10 xl:bg-white xl:whitespace-nowrap'>The New Arrival</span>
//           <br />
//           <span className='text-[#FF6452] mt-3 inline-block'>Nike</span> Shoes</h1>

//         <p className='font-montserrat text-slate-gray mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovationfor your active life</p>

//         <Button label="Shop now" iconURL={rarrow}></Button>


//         <div className='flex flex-row gap-5 mt-20 justify-starts items-start flex-wrap w-full'>
//           {statistics.map((stat) => (
//             <div>
//               <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
//               <p className='font-montserrat leading-7 text-slate-gray'>{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='flex-1 flex justify-center relative items-center xl:min-h-screen bg-primary bg-center bg-card max-xl:py-40 hover:bg-red-500'>
//         <img src={bigShoeImg} alt="" width={610} height={500} className='object-contain relative z-10 animate-rotateIn' />
//         <div className='flex sm:gap-6 gap-4 absolute -bottom-[4%] sm:left-[10%] max-sm:px-6'>
//           {shoes.map((shoe, index) => (
//             <div key={shoe}>
//               <ShoeCard
//                 imgURL={shoe}
//                 changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
//                 bigShoeImg={bigShoeImg}
//               />
//             </div>

//           ))}
//         </div>

//       </div>


//     </section>
//   )
// }

// export default Hero


import React, { useState } from 'react';
import rarrow from "../assets/icons/arrow-right.svg";
import Button from '../Components/Button';
import { shoes, statistics } from '../Constant';
import bigshoe1 from "../assets/images/big-shoe1.png";
import ShoeCard from '../Components/ShoeCard';

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigshoe1);
  
 
  const [imgKey, setImgKey] = useState(0);


  const handleShoeChange = (newShoeImg) => {
    setbigShoeImg(newShoeImg);
    setImgKey((prevKey) => prevKey + 1);  
  };

  return (
    <section className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 ml-12'>
        <p className='text-coral-red text-xl font-montserrat'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='pr-10 relative z-10 xl:bg-white xl:whitespace-nowrap'>Step Ahead with</span>
          <br />
          <span className='text-coral-red mt-3 inline-block z-100'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={rarrow} />
        
        <div className='flex flex-row gap-5 mt-20 justify-start items-start flex-wrap w-full'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='font-montserrat leading-7 text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex-1 flex justify-center relative items-center xl: mr-20 xl:min-h-screen bg-primary bg-center bg-card max-xl:py-40 hover:bg-coral-red max-xl:ml-20'>
        <img
          key={imgKey} src={bigShoeImg }alt="Selected Shoe" width={610} height={500}className='object-contain relative z-10 animate-rotateIn'
        />
        
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[4%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => handleShoeChange(shoe.bigShoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
