import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import Chat from '../components/Chat'

export default function Home({ darkMode }) {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  const [isOpen, setIsOpen] = useState(false)

  const ToggleChat = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Box>
        <HeroBanner toggleChat={ToggleChat}/>
        <SearchExercises bodyPart={bodyPart} setExercises={setExercises} setBodyPart={setBodyPart}/>
        <Exercises bodyPart={bodyPart} setExercises={setExercises} exercises={exercises} darkMode={darkMode}/>
        <Chat toggleChat={ToggleChat} isOpen={isOpen} darkMode={darkMode}/>
    </Box>
  )
}
