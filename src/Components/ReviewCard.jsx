import React from 'react'
import star from "../assets/icons/star.svg"

const ReviewCard = ({imgURL, feedback, rating, customerName}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={imgURL} alt="" className='w-[120px] h-[120px] rounded-full'/>
        <p className='font-montserrat text-slate-gray lg:max-w-lg mt-6 max-w-sm info-text'>{feedback}</p>
        <div>
            <img src={star} alt="" className='object-contain m-0'/>
            <p>({rating})</p>
        </div>
        <h3 className='font-palanquin font-bold text-4xl'>{customerName}</h3>

        
    </div>
  )
}

export default ReviewCard
