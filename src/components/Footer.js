import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

import Logo from '../assets/assets/images/Easy.png'

export function Footer() {
  return (
    <Box mt='50px'>
      <Stack alignItems='center'>
        <img src={Logo} alt='logo' width='160px' height='48px'/>
        <Typography variant='h6' pb='22px'>
          Made by Daniel
        </Typography>
      </Stack>
    </Box>
  )
}
