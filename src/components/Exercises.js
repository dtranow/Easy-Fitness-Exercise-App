import React, { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Pagination from '@mui/material/Pagination'

import ExerciseCard from './ExerciseCard'
import { options, fetchData } from '../utils/fetchData'

const Exercises = ({ bodyPart, exercises, setExercises, darkMode }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 6
  const indexLast = currentPage * exercisesPerPage
  const indexFirst = indexLast - exercisesPerPage
  const current = (exercises || []).slice(indexFirst, indexLast)

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = []

      if(bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', options)
      }
      else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`, options)
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  }, [bodyPart])

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1500, behavior: 'smooth'})
  }

  return (
    <Box id='exercises' p='20px' mt='40px' sx={{mt: { lg: '120px' }}}>
      <Typography fontSize='32px' fontWeight='700' mb='40px'>
        Showing results for {bodyPart}
      </Typography>
      <Stack alignItems='center' mt='40px' mb='80px'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='secondary' variant='outlined' size='large' count={Math.ceil(exercises.length / exercisesPerPage)}
            onChange={paginate} page={currentPage} 
            sx={{
              '& .MuiPaginationItem-root': darkMode ? {
                color: '#fff',
                borderColor: '#fff',
              } : {},
              '& .Mui-selected': darkMode ? {
                backgroundColor: '#FF2625',
                color: '#fff',
                borderColor: '#FF2625',
              } : {},
              '& .MuiPaginationItem-ellipsis': {
                color: darkMode ? '#fff' : '#000',
              }
            }}
          />
        )}
      </Stack>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' gap='75px'>
        {current.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}>{exercise.name}</ExerciseCard>
        ))}
      </Stack>
      <Stack alignItems='center' mt='80px' mb='40px'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='secondary' variant='outlined' size='large' count={Math.ceil(exercises.length / exercisesPerPage)}
            onChange={paginate} page={currentPage} 
            sx={{
              '& .MuiPaginationItem-root': darkMode ? {
                color: '#fff',
                borderColor: '#fff',
              } : {},
              '& .Mui-selected': darkMode ? {
                backgroundColor: '#FF2625',
                color: '#fff',
                borderColor: '#FF2625',
              } : {},
              '& .MuiPaginationItem-ellipsis': {
                color: darkMode ? '#fff' : '#000',
              }
            }}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises