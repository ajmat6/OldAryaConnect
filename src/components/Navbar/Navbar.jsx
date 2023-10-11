import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  const auth = useSelector((state) => state.auth)

  return (
    <nav className="bg-black p-4 flex items-center justify-between w-full z-10">
        <div className="text-xl font-semibold">
          <span className="inline-block animate-bounce text-[#4db5ff] mr-2">Old</span>
          <span className="inline-block animate-pulse text-white">Arya</span>
        </div>
        <div className="ml-6 space-x-16 font-semibold md:flex hidden">
          <Link to="/" className="text-white hover:text-white-300 px-4">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300 px-4 transition-color duration-300">About</Link>
          <Link to="/notes" className="text-white hover:text-gray-300 px-4">Notes</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 px-4">Contact</Link>
        </div>
        <div className='hidden text-white font-semibold md:block bg-gray-800 px-[13px] py-[5px] rounded-md mx-5'>
          {
            !auth.authenticate ? 
            <>
              <Link to={'/signin'}><button >Login</button></Link>
              <Link to={'/signup'}><button > /Signup</button></Link> 
            </>
            :
            <Link to={'/myProfile'}><div>{auth.userInfo.name}</div></Link>
          }
        </div>
    </nav>
  )
}