import React from 'react'
import Button from '../Components/Button'
import shoe8 from "../assets/images/shoe8.svg"

const SuperQuality = () => {
  return (
    <section id= "about-us"className='mt-12 flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-col flex-1 justify-start lg:max-w-lg'>
        <h1 className='font-palanquin font-bold text-4xl'>We Provide you <span className='text-coral-red'>Super Quality</span> Shoes</h1>
        <p className='font-montserrat text-slate-gray mt-6 lg:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita cum quibusdam sequi tempora veniam minus veritatis, asperiores in, facilis ut saepe hic cupiditate ducimus culpa eveniet autem at! Et?0</p>
        <p className='font-montserrat text-slate-gray mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, mollitia.</p>
        <div className='mt-11'>
        <Button label="View Details"></Button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-1'>
      <img src={shoe8} alt="" width={570} height={522} />

      </div>
    </section>
  )
}

export default SuperQuality
