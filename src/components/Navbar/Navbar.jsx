import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../../reducers/userAuthReducer';
import {useNavigate} from 'react-router-dom'
import {RxCross2} from 'react-icons/rx'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import { generatePublicURL } from '../../urlConfig';
import profilePicSample from '../../assets/profilePicSample.jpeg'
import { changeModee } from '../../reducers/modeReducer';
import './navbar.css'

export default function Navbar(props) {
  const auth = useSelector((state) => state.auth)
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showCross, setShowCross] = useState(false);

  const [currentMode, setCurrentMode] = useState('dark');
  const [lg, setLg] = useState('linear-gradient(black, #1f1f38, black)')

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

  const changeMode = () => {
    const body = document.body;
    if(mode.mode === 'dark')
    {
      // setCurrentMode('light');
      body.style.background = 'white'
    }
    else
    {
      setCurrentMode('dark')
      body.style.background = lg
    } 
    
    dispatch(changeModee());
  }

  return (
    <nav className={`${mode.mode === 'dark' ? 'bg-black' : 'bg-white'} p-3 flex items-center justify-between z-10`}>
        <div className="text-xl font-semibold">
          <span className="inline-block animate-bounce text-[#4db5ff] mr-2">Old</span>
          <span className={`inline-block animate-pulse ${mode.mode === 'dark' ? 'text-white' : 'text-black'}`}>Arya</span>
        </div>
        <div className={`nav-links md:static absolute ${mode.mode === 'dark' ? 'text-black' : 'text-white'} md:min-h-fit min-h-[40vh] right-0 top-[-100%] md:w-auto w-full flex items-center`}>
          <div className="font-semibold flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 ml-[230px] sm:mb-[36px] md:ml-0 md:mb-0">
          <Link to="/" className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'} px-4 hover:text-white-gray-300 transtion-color duration-300`}>Home</Link>
            <Link to="/about" className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'} px-4 hover:text-white-gray-300 transtion-color duration-300`}>About</Link>
            <Link to="/notes" className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-300 px-4`}>Notes</Link>
            <Link to="/lost-and-found/allItems" className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-300 px-4`}>Lost | Found</Link>
            <Link to="/contact" className={`${mode.mode === 'dark' ? 'text-white' : 'text-black'} hover:text-gray-300 px-4`}>Contact</Link>
          </div>
        </div>

          {
            !auth.authenticate ? 
            <div className='flex flex-row gap-4'>
              {
                mode.mode === 'dark' ?
                <button className={`text-2xl`} onClick={changeMode}><BsFillMoonStarsFill className='text-white'/></button>
                :
                <button className={`text-2xl`} onClick={changeMode}><BsFillSunFill className='text-black'/></button>
              }
              <Link to={'/signin'}><button className='btn btn-primary p-2'>Login</button></Link>
            </div>
            :
            <div className='flex flex-row gap-2 md:gap-3'>
              {
                mode.mode === 'dark' ?
                <button className={`text-2xl`} onClick={changeMode}><BsFillMoonStarsFill className='text-white'/></button>
                :
                <button className={`text-2xl`} onClick={changeMode}><BsFillSunFill className='text-black'/></button>
              }
              <Link className='mx-3'><button onClick={Logout} className='btn btn-primary p-2'>Logout</button></Link>
              <Link to={'/myProfile'}>
                <img src={auth.userInfo.profilePic !== '' ? generatePublicURL(auth.userInfo.profilePic) : profilePicSample} className={`rounded-full h-[43px] w-[45px] ${mode.mode === 'light' ? 'border border-black' : 'border border-white'}`}/>
              </Link>
            </div>
          }

        <div className='md:hidden'>
          {
            showCross === false ?
            <button className={`text-2xl cursor-pointer ${mode.mode === 'light' ? 'text-black' : ''}`} onClick={hamburgerOpen}>&#8801;</button>
            :
            <button className={`text-2xl cursor-pointer ${mode.mode === 'light' ? 'text-black' : ''}`} onClick={hamburgerClose}>X</button>
          }
        </div>
    </nav>
  )
}