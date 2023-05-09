import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Service from './Pages/Service/Service'
import Web_Development from './Pages/Web_Development/Web_Development'
import Graphic_Design from './Pages/Graphic_Designing/Graphic_Design'
import Digital_Marketing from './Pages/Digital_Marketing/Digital_Marketing'
import Mobile_Apps from './Pages/Mobile_Apps/Mobile_Apps'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Service' element={<Service />} />
          <Route exact path='/Web_Development' element={<Web_Development />} />
          <Route exact path='/Graphic_Design' element={<Graphic_Design />} />
          <Route exact path='/Digital_Marketing' element={<Digital_Marketing />} />
          <Route exact path='/Mobile_Apps' element={<Mobile_Apps />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
