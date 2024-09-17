import React from 'react'
import { Stack,Box, Typography } from '@mui/material'

const StackDir = () => {
  return (
    <Stack direction="row" spacing={10} justifyContent={'space-between'}>
          <Box sx={{ display:'flex', flex:'2', justifyContent:'center', alignItems:'center', width:'50%', height:'70vh'}}>
               <Typography variant='h4' fontWeight='bold' sx={{padding:'100px', backgroundImage: 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)', webkitBackgroundClip: 'text',backgroundClip:'text', color:'transparent'}}>
                    Hi! my name is Avinash. I am from Vijayawada
               </Typography>
          </Box>
          <Box sx={{flex:'1', width:'400px'}}>
               <img style={{width:'100%'}} src="public/me.png" alt="" />
          </Box>
    </Stack>
  )
}

export default StackDir
