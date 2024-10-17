import React from 'react'
import { products } from '../Constant'
import PopularProductCard from '../Components/PopularProductCard'


const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className='flex justify-start flex-col gap-5 '>
        <h1 className='font-palanquin text-4xl font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h1>
        <p className='font-montserrat text-slate-gray lg:max-w-lg mt-2'>Experince top-notch quality and style with our sought-after selections.Discover a world of comfort, design and value.</p>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 '>
          {products.map((product) => (
            <PopularProductCard key={product.name}{...product}/>
          ))}

        </div>

      </div>
    </section>
  )
}

export default PopularProducts
