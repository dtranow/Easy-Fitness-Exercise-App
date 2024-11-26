import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Switch } from '@mui/material'
import { MaterialUISwitch } from './MaterialUISwitch'

import Logo from '../assets/assets/images/Easy.png'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Stack direction='row' justifyContent="space-around" sx={{ gap: {xs:'48px', sm:'88px'}, 
      justifyContent:'none'}} px='24px' >
      <Link to='/'>
        <img src={Logo} alt="Logo" style={{width: '160px', height: '48px', margin:'20px 20px'}}></img>
      </Link>
      <Stack direction='row' gap='50px' fontSize='20px' mt='28px'>
        <Link to='/' style={{ color: darkMode ? '#fff' : '#000' }}>Home</Link>
        <a href="#exercises" style={{ color: darkMode ? '#fff' : '#000' }}>Exercises</a>
        <MaterialUISwitch checked={darkMode} onChange={toggleDarkMode} />
      </Stack>
    </Stack>
  )
}

export default Navbar