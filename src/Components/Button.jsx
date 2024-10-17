import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border info-text bg-coral-red rounded-full border-coral-red ' style={{color:"white"}}>
        {label} 
        {iconURL && <img src={iconURL} alt="arrowright" className='ml-2 rounded-full h-5 w-5'/>}
    </button>
  )
}

export default Button
