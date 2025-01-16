import React, { useState, useEffect } from 'react'
import { Box, Typography, Stack, Button, TextField } from '@mui/material'
import { options, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ bodyPart, setExercises, setBodyPart, setSearchTitle}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchBodyPartData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchBodyPartData();
  }, [])

  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=150', options)
      console.log("Fetched Exercise Data:", exerciseData)
      console.log('search is', search)
      const searchingExercises = exerciseData.filter((part) => part.name.toLowerCase().includes(search)
       || part.target.toLowerCase().includes(search) || part.bodyPart.toLowerCase().includes(search) 
       || part.equipment.toLowerCase().includes(search)
      )
      console.log('searched exercises', searchingExercises)
      setSearchTitle(search)
      setSearch('')
      setExercises(searchingExercises)
    }
  }

  return (
    <Stack justifyContent='center' alignItems='center' mt='120px'>
      <Typography fontWeight='700' textAlign='center' mb='48px' sx={{ fontSize: {lg: '36px', xs: '26px'}}}>
        Search for an exercise below!
      </Typography>
      <Box position='relative' mb='82px'>
        <TextField height='64px' type='text' value={search} onChange={(e) =>
          setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' sx={{width: 
          { lg: '600px', xs: '400px'}, backgroundColor:'#fff', borderRadius:'24px', input: { fontSize:'18px'},
          '& .MuiOutlinedInput-root': { borderRadius: '24px' , '&.Mui-focused fieldset': { borderColor: 'red' }}
          }}/>
        <Button onClick={handleSearch} className="search-btn" sx={{bgcolor:'red', color:'#fff', width: {lg:'120px', xs: '64px'}, 
          height:'60px', fontSize: { lg: '18px', xs: '12px'}, position:'absolute', right:'0'}}>
          Search
        </Button>
      </Box>
      <Box sx={{ position:'relative', p: '20px', width:'100%'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart setSearchTitle={setSearchTitle}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
