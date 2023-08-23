import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './components/Notes/Notes';
import SemNotes from './components/SemNotes/SemNotes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Home /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/notes' element={<Notes />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/notes/:note' element={<SemNotes />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

