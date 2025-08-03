import React, { useEffect } from 'react'
import { useState } from 'react'
import { API_URL, API_HEADERS } from '../apiConfig'
import { motion } from 'framer-motion'
import { zoomIn } from '../utils/Animations'
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch(API_URL, {
  method: 'GET', /* or POST/PUT/PATCH/DELETE */
  headers: API_HEADERS,
})
.then(res => res.json())
.then(data => setProducts(data.products));
},[])
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  w-full'>
      {products.map(product => (
        <motion.div 
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        className='flex flex-col justify-center items-center gap-4 border rounded-md' key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div className='flex flex-col justify-center items-center w-full h-28 gap-2  py-4'>
          <h2 className="text-lg text-center font-semibold mb-2">{product.title}</h2>
          <p className="text-black font-bold">{product.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Products