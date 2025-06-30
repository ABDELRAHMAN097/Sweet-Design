import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='border-b text-white p-4 grid grid-cols-1 shadow'>
        <nav>
            <ul className='flex justify-center items-center gap-4'>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/contact">
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar