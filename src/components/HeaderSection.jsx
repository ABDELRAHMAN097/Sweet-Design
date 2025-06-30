import React from 'react'

export const HeaderSection = ({header, subHeader}) => {
  return (
    <div className='col-span-1 md:col-span-2 lg:col-span-3 p-4'>
    <h2 className='text-2xl font-bold text-center'>{header}</h2>
    <p className='text-center text-gray-400'>{subHeader}</p>
</div>
  )
}
