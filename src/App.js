import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import pages
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Updates from './pages/Updates'
//import components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Hero />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/More info' element={<Questions />} />
        <Route path='/updates' element={<Updates />} />

        <Route path='*' element={<Error />} />
      </Routes>
      <Navbar></Navbar>
    </BrowserRouter>
  )
}

export default App
