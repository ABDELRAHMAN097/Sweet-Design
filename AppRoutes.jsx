import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './src/pages/Contact'
import Home from './src/pages/Home'
import NotFound from './src/components/NotFound'
import AddProduct from './src/components/AddProduct'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default AppRoutes