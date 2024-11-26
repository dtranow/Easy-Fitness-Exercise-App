import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import HeroBannerVideo from '../assets/assets/images/animation.webm'

const HeroBanner = ({ toggleChat }) => {
  return (
    <Box position='relative' p='18px' sx={{mt: { lg: '100px', xs: '44px'}, ml: {sm: '50px'}}}>
      <Typography fontWeight='800' color='red' fontSize='32px' mb={3}>
        Learn to Exercise
      </Typography>
      <Typography fontWeight='800' fontSize='32px' mb={4}>
        Improve your health <br /> and well-being with <br /> proper instructions
      </Typography>
      <Button href='#exercises' variant='contained' color='error' style={{ width: '220px', height: '45px', fontSize:'16px'}}>Explore Exercises</Button>
      <Typography fontWeight='800' fontSize='32px' mb={4} mt={4}>
        Ask exercise questions<br /> to our AI chatbot
      </Typography>
      <Button onClick={toggleChat} variant='contained' color='error' style={{ width: '220px', height: '45px', fontSize:'16px'}}>Ask Questions</Button>
      <Box sx={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <video 
          src={HeroBannerVideo} className='hero-banner-img' autoPlay loop muted 
          style={{ position: 'absolute', top: '220px', left:'280px', width: '90%', height: '90%', 
          overflow: 'auto', zIndex: -1 
          }}
        ></video>
      </Box>
      
    </Box>
  )
}

export default HeroBanner