import React from 'react'
import { Box, Typography, Stack } from '@mui/material'


const ExerciseVideos = ({ name, exerciseVideos, darkMode }) => {

  return (
    <Box p='24px' sx={{ marginTop: { lg: '80px', xs: '18px' }}}>
      <Typography variant='h4' textAlign='center' mb='32px'>
        Check out these {name} videos for additional instructions
      </Typography>
      <Stack flexWrap='wrap' alignItems='center' justifyContent='flex-start' direction='row' gap='24px'>
        {exerciseVideos?.slice(0,3).map((item, index) => (
          <a className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
           key={index} target='_blank' rel='noreferrer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Typography variant='h5' color={darkMode ? '#fff' : '#000'}>{item.video.title}</Typography>
            <Typography color={darkMode ? '#fff' : '#000'}>from {item.video.channelName}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos