import React from 'react'
import offer from "../assets/images/offer.svg"
import Button from '../Components/Button'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687} />
      </div>
      <div className='flex flex-col flex-1 justify-start lg:max-w-lg'>
        <h1 className='font-palanquin font-bold text-4xl'>Special<span className='text-coral-red'>  Offer</span></h1>
        <p className='font-montserrat text-slate-gray mt-6 lg:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita cum quibusdam sequi tempora veniam minus veritatis, asperiores in, facilis ut saepe hic cupiditate ducimus culpa eveniet autem at! Et?0</p>
        <p className='font-montserrat text-slate-gray mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, mollitia.</p>
        <div className='mt-11 flex flex-row gap-4'>
        <Button label="View Details"></Button>
        {/* <Button label="Learn More"></Button> */}
        <button className='flex justify-center items-center gap-2 px-7 py-4 border info-text rounded-full text-slate-gray'>Learn More</button>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers
