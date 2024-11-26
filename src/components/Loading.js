import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { Stack } from '@mui/material'

const Loading = () => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <InfinitySpin color='gray'></InfinitySpin>
    </Stack>
    )
}

export default Loading