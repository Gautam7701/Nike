import React from 'react'
import { reviews } from '../Constant'
import ReviewCard from '../Components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='mt-12 max-container'>
      <h3 className='font-palanquin text-4xl font-bold text-center'>What Our<span className='text-coral-red'> Customer</span> Say?</h3>
      <p className='lg:max-w-lg font-montserrat text-slate-gray text-center info-text mt-4 m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, expedita. Asperiores quisquam rerum.</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName}{...review} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
        ))}

      </div>

    </section>
  )
}

export default CustomerReviews
