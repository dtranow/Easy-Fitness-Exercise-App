import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

function App(){
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if(darkMode){
      document.documentElement.setAttribute('data-theme', 'dark')
    } 
    else{
      document.documentElement.removeAttribute('data-theme')
    }}, [darkMode])

  return(
    <Box width="400px" m="auto" sx={{ width: {xl:"1280px" }}}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail darkMode={darkMode}/>} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App