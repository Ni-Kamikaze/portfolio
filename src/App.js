import React from 'react'
import About from './About.js'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
