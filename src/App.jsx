import './App.css';
import React from "react";
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './components/Notes/Notes';
import SemNotes from './components/SemNotes/SemNotes';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/notes' element={<Notes />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/myProfile' element={<UserProfile />}/>
          <Route path='/notes/:note' element={<SemNotes />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

