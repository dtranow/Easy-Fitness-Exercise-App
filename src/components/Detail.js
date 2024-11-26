import React from 'react'
import { Stack, Typography, Button } from '@mui/material'

import TargetImg from '../assets/assets/icons/target.png'
import BodyPartImg from '../assets/assets/icons/body-part.png'
import EquipmentImg from '../assets/assets/icons/equipment.png'
import ExerciseDetail from '../pages/ExerciseDetail'

const Detail = ({ exerciseDetails }) => {
    const { name, bodyPart, target, equipment, gifUrl, instructions } = exerciseDetails
    console.log(exerciseDetails)
    const instructionsText = Array.isArray(instructions) ? instructions.join(' ') : instructions


    const information = [
        {
            icon: BodyPartImg,
            name: target
        },
        {
            icon: EquipmentImg,
            name: equipment
        }
    ]
    
    return (
    <Stack gap='45px' p='22px' alignItems='center' sx={{flexDirection: { lg: 'row'}}}>
        <img className='detail-image' src={gifUrl} alt={name} loading='lazy' />
        <Stack sx={{ gap: { lg: '32px', xs: '18px'}}}>
            <Typography variant='h3' textTransform='capitalize'>
                {name}
            </Typography>
            <Typography variant='h6'>
                The {name} is good for training the {bodyPart}. {instructionsText}
            </Typography>
            {information.map((info) => (
                <Stack key={info.name} direction='row' alignItems='center' gap='16px'>
                    <Button sx={{ backgroundColor:'white', borderRadius:'50%', height:'80px', width:'80px'}}>
                        <img src={info.icon} alt={bodyPart}/>
                    </Button>
                    <Typography textTransform='capitalize' variant='h6' ml='24px'>
                        {info.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail