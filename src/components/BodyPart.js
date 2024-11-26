import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/assets/icons/gym.png'

const BodyPart = ({ part, bodyPart, setBodyPart }) => {
  return (
    <Stack className='bodyPart-card' type="button" justifyContent='center' alignItems='center'
        sx={{ borderTop: bodyPart === part ? '4px solid #ff2625' : '',
            backgroundColor: '#fff', width: '250px', height: '250px', cursor:'pointer', gap:'42px',
            borderBottomLeftRadius:'18px'
        }} onClick={() => {
          setBodyPart(part)
          window.scrollTo({top: 1500, behavior:'smooth'})
          }}>
        <img src={Icon} alt='icons' style={{ width: '36px', height: '36px'}}/>
        <Typography fontSize='28px' fontWeight='bold' textTransform='capitalize' color='black'>{part}</Typography>
    </Stack>
  )
}

export default BodyPart