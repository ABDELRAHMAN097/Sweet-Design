import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <div className='border-b text-white p-4 grid grid-cols-1 shadow'>
    <nav>
      <ul className='flex justify-center items-center gap-4 text-gray-500 font-[500]'>
        <Link to="/">
          <li className={location.pathname === "/" ? "text-primary border-b-2" : ""}>Home</li>
        </Link>
        <Link to="/contact">
          <li className={location.pathname === "/contact" ? "text-primary border-b-2" : ""}>Contact</li>
        </Link>
        <Link to="/not-found">
          <li className={location.pathname === "/not-found" ? "text-primary border-b-2" : ""}>Not Found</li>
        </Link>
      </ul>
    </nav>
  </div>
  )
}

export default NavBar