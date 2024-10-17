import React from 'react'
import { services } from '../Constant'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <section className='flex max-container flex-wrap gap-10 flex-col'>
      <div>
      <h1 className='text-4xl font-bold'>What We<span className='text-coral-red'> Offer</span></h1>
      </div>
      <div className='flex lg:flex-row gap-5 max-lg:flex-col'>
        {services.map((service)=>(
          <ServicesCard 
          key={service.label}{...service} />
        ))}

      </div>

    </section>
  )
}

export default Services
