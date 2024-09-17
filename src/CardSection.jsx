import React from 'react'
import { Stack } from '@mui/material'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'

const CardSection = () => {
  return (
    <Stack direction='row' justifyContent='space-around' m={4}>
          <FirstCard/>
          <SecondCard/>
          <ThirdCard/>
    </Stack>
  )
}

export default CardSection
