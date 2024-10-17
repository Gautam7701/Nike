// import React from 'react'
// import "./ServicesCard.css"

// const ServicesCard = ({ imgURL, label, subtext }) => {
//     return (
//         <div className=' card flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 flex flex-col gap-5'>
//             <div className='w-11 h-11 flex flex-col justify-center items-center bg-coral-red rounded-full'>
//                 <img src={imgURL} alt="" width={24} height={24} />
//             </div>
//             <h3 className='card-title font-palanquin text-xl font-bold'>{label}</h3>
//             <p className='card-content font-montserrat text-slate-gray'>{subtext}</p>
//         </div>
//     )
// }

// export default ServicesCard

import React from 'react';
import "./ServicesCard.css";

const ServicesCard = ({ imgURL, label, subtext }) => {
    return (
        <div className='parent flex-1 sm:w-[350px] sm:min-w-[350px] w-full'>
            <div className='card rounded-[20px] shadow-3xl px-10 py-16 flex flex-col gap-5'>
                <div className='w-11 h-11 flex flex-col justify-center items-center bg-coral-red rounded-full'>
                    <img src={imgURL} alt="" width={24} height={24} />
                </div>
                <div className='content-box'>
                    <h3 className='card-title font-palanquin text-xl font-bold'>{label}</h3>
                    <p className='card-content font-montserrat text-slate-gray'>{subtext}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;

