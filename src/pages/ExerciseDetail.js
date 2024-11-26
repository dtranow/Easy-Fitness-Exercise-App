import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { options, fetchData, ytOptions } from '../utils/fetchData'

const ExerciseDetail = ({ darkMode }) => {
  const [exerciseDetails, setExerciseDetails] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, options)
      setExerciseDetails(exerciseDetailData)
      const exerciseVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name} exercise tutorial`, ytOptions)
      setExerciseVideos(exerciseVideosData.contents)
      const targetMuscleData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, options)
      setTargetMuscleExercises(targetMuscleData)
    }
    fetchExercisesData()
  }, [id])

  return (
  <Box>
    <Detail exerciseDetails={exerciseDetails}/>
    <ExerciseVideos name={exerciseDetails.name} exerciseVideos={exerciseVideos} darkMode={darkMode}/>
    <SimilarExercises targetMuscleExercises={targetMuscleExercises}/>
  </Box>  
  )
}

export default ExerciseDetail