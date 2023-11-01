import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../../reducers/userAuthReducer';
import {useNavigate} from 'react-router-dom'
import {RxCross2} from 'react-icons/rx'
import Me from '../../assets/myphoto.jpg'

export default function Navbar(props) {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCross, setShowCross] = useState(false);

  const Logout = () => {
    dispatch(logout())
    navigate('/')
  }

  const hamburgerOpen = () => {
    setShowCross(true)
    const navlinks = document.querySelector('.nav-links')
    navlinks.classList.add('top-[18%]')
    navlinks.classList.remove('top-[-100%]')
  }

  const hamburgerClose = () => {
    setShowCross(false)
    const navlinks = document.querySelector('.nav-links')
    navlinks.classList.add('top-[-100%]')
    navlinks.classList.remove('top-[18%]')
  }

  return (
    <nav className="bg-black p-3 flex items-center justify-between z-10">
        <div className="text-xl font-semibold">
          <span className="inline-block animate-bounce text-[#4db5ff] mr-2">Old</span>
          <span className="inline-block animate-pulse text-white">Arya</span>
        </div>
        <div className='nav-links md:static absolute bg-black md:min-h-fit min-h-[70vh] right-0 top-[-100%] md:w-auto w-full flex items-center'>
          <div className="font-semibold flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 ml-[230px] sm:mb-[36px] md:ml-0 md:mb-0">
            <Link to="/" className="text-white px-4 hover:text-white-gray-300 transtion-color duration-300">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 px-4 transition-color duration-300">About</Link>
            <Link to="/notes" className="text-white hover:text-gray-300 px-4">Notes</Link>
            <Link to="/lost-and-found/allItems" className="text-white hover:text-gray-300 px-4">Lost/Found</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 px-4">Contact</Link>
          </div>
        </div>

          {
            !auth.authenticate ? 
              <Link to={'/signin'}><button className='btn btn-primary p-2'>Login</button></Link>
            :
            <div className='flex flex-row gap-3'>
              <Link className='mr-1'><button onClick={Logout} className='btn btn-primary p-2'>Logout</button></Link>
              <Link to={'/myProfile'}><img src={Me} className='rounded-full h-[43px] w-[45px]'/></Link>
            </div>
          }

        <div className='md:hidden'>
          {
            showCross === false ?
            <button className='text-2xl cursor-pointer' onClick={hamburgerOpen}>&#8801;</button>
            :
            <button className='text-2xl cursor-pointer' onClick={hamburgerClose}>X</button>
          }
        </div>
    </nav>
  )
}