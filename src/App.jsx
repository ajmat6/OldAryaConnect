import './App.css';
import React, {useEffect} from "react";
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './components/Notes/Notes';
import SemNotes from './components/SemNotes/SemNotes';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import UserProfile from './components/UserProfile/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './reducers/userAuthReducer';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminHome from './adminComponents/AdminHome/AdminHome';
import AdminNotes from './adminComponents/Notes/Notes';
import Users from './adminComponents/Users/Users';
import AdminNavbar from './adminComponents/Navbar/AdminNavbar';
import { useInsertionEffect } from 'react';
import {useNavigate} from 'react-router-dom'


const App = () => {
  // const navigate =  useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [])

  // useEffect(() => {
  //   if(auth.authenticate && auth.userInfo.role === 'admin')
  //   {
  //     // navigate('/adminHome')
  //   }
  // },[auth.authenticate])
  return (
    <>
    {
      auth.authenticate && auth.userInfo.role === 'admin' ?
      <div className="App">
        <BrowserRouter>
        <AdminNavbar />
          <Routes>
            <Route path='/adminHome' exact element={<AdminHome />} /> 
            <Route path='/adminNotes' element={<AdminNotes/>} /> 
            <Route path='/users' element={<Users/>} /> 
          </Routes>
        </BrowserRouter>
    </div>
    :
    <div className='app'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/notes' element={<Notes />}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/myProfile' element={<UserProfile />}/>
            <Route path='/adminLogin' element={<AdminLogin />}/>
            <Route path='/notes/:note' element={<SemNotes />}/>
          </Routes>
        </BrowserRouter>
    </div>
    }
      
    </>
  )
}

export default App;

