import React from 'react'

const HomeCard = ({ img, title, price }) => {
  return (
    <div className="w-full h-full py-2 md:w-64 text-center">
      <div className='h-2/3 brder'>
      <img src={img} alt={title} className="w-full object-cover rounded-md mb-4" />
      </div>
      <div className='h-1/3 flex flex-col justify-end items-center gap-2 pb-2'>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-black font-bold">{price}</p>
      </div>
    </div>
  )
}
export default HomeCard

