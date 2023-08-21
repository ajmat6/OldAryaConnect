import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className="bg-blue-400 p-4 flex items-center justify-between fixed top-0 w-full">
        <div className="text-xl font-semibold">
          <span className="inline-block animate-bounce text-black mr-2">Old</span>
          <span className="inline-block animate-pulse text-white">Arya</span>
        </div>
        <div className="ml-6 space-x-16 font-semibold md:flex hidden">
          <Link to="/" className="text-black hover:text-white-300 px-4">Home</Link>
          <Link to="/about" className="text-black hover:text-gray-300 px-4 transition-color duration-300">About</Link>
          <Link to="/notes" className="text-black hover:text-gray-300 px-4">Notes</Link>
          <Link to="/contact" className="text-black hover:text-gray-300 px-4">Contact</Link>
        </div>
        <div className='hidden text-white font-semibold md:block bg-gray-800 px-[13px] py-[5px] rounded-md'>
          <button>Login</button>
          <button>SignUp</button>
        </div>
    </nav>

  )
}