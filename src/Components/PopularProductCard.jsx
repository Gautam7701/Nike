// import React from 'react'
// import { star } from '../assets/icons'

// const PopularProductCard = ({imgURL, name, price}) => {
//   return (
//     <div className='flex flex-1 flex-col w-full max-sm:w-full max-sm:ml-12 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl'>
//         <img src={imgURL} alt="shoeimg" className='w-[280px] h-[280px]' />
//         <div className='flex flex-col gap-2'>
//         <div className='mt-8 flex justify-start gap-5'>
//             <img src={star} alt="" className='w-[25px] h-[25px]' />
//             <p className='font-montserrat text-slate-gray leading-7 text-lg'>(4.5)</p>
//         </div>
//         <p className='text-xl font-bold font-palanquin'>{name}</p>
//         <p className='font-montserrat text-coral-red font-bold'>{price}</p>
//         </div>
//     </div>
    
//   )
// }

// export default PopularProductCard
import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='relative w-[300px] h-[200px] bg-gradient-to-br from-[#f89b29] to-[#ff0f7b] rounded-lg flex justify-center items-center overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-110 hover:rotate-[-5deg] hover:shadow-lg'>
      <img src={imgURL} alt="shoeimg" className='w-[188px] transition-all duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:scale-0 hover:rotate-[-45deg]' />

      <div className='absolute flex gap-4 flex-col ml-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] w-full h-full bg-white opacity-0 transition-all duration-300 ease-[cubic-bezier(0.23, 1, 0.32, 1)] hover:rotate-0 hover:opacity-100 '>
        <div className='mt-8 flex justify-start gap-5'>
        <img src={star} alt="" className='w-[25px] h-[25px]' />
        <p className='font-montserrat text-slate-gray leading-7 text-lg'>(4.5)</p>
        </div>
        <p className='text-xl font-bold font-palanquin'>{name}</p>
          <p className='font-montserrat text-coral-red font-bold'>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard

