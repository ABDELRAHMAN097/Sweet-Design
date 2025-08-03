import React from 'react'

const HomeCard = ({ img, title, price }) => {
  return (
    <div className="w-full py-2 md:w-64 text-center">
      <img src={img} alt={title} className="w-full object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-black font-bold">{price} EGP</p>
    </div>
  )
}
export default HomeCard

