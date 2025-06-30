import React from 'react'

export const CategoryCard = ({img, title , className = ''}) => {
  return (
    <div className={`flex flex-col justify-center items-center w-full py-2  text-center ${className}`}>
      <img src={img} alt={title} className="w-64 object-cover rounded-md mb-4" />
      <h2 className="text-lg text-black mb-2 font-[133]">{title}</h2>
    </div>
  )
}
