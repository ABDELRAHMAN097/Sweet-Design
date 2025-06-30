import React from 'react'

export const AboutCard = ({ img, title, price }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-2  text-center">
      <img src={img} alt={title} className="w-[150px] object-cover rounded-md mb-4" />
      <h2 className="text-lg text-black mb-2 font-[188]">{title}</h2>
      <p className="text-gray-400 font-[400]">{price} EGP</p>
    </div>
  )
}
