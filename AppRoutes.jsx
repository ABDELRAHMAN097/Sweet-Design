import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './src/pages/Contact'
import Home from './src/pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes