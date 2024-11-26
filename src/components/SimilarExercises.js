import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

import HorizontalScrollBar from './HorizontalScrollbar'
import Loading from './Loading'

const SimilarExercises = ({ targetMuscleExercises }) => {
  return (
    <Box width='100%'>
      <Typography variant='h4' textAlign='center' mb='48px' mt='48px'>Exercises targetting the same body part</Typography>
      <Stack direction='row' mb='60px'>
        {targetMuscleExercises.length ? <HorizontalScrollBar data ={targetMuscleExercises} isBodyPart={false} /> 
         : <Loading />}
      </Stack>
    </Box>

  )
}

export default SimilarExercises