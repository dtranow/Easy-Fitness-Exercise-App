import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Stack } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return(
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Typography fontSize='24px' fontWeight='700' textAlign='center' color='black' textTransform='capitalize'>{exercise.name}</Typography>
        <Stack direction='row' justifyContent='center'>
            <Button sx={{ color: '#fff', backgroundColor: 'red', fontSize:'15px', borderRadius:'18px', textTransform:'capitalize'}}>{exercise.bodyPart}</Button>
            <Button sx={{ color: '#fff', backgroundColor: '#fcc757', ml:'12px', fontSize:'15px', borderRadius:'18px', textTransform:'capitalize'}}>{exercise.target}</Button>
        </Stack>
    </Link>
  )
}

export default ExerciseCard