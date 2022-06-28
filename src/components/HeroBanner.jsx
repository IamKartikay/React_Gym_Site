import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import bannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg: '212px' , xs:'70px'}, ml:{sm:'50px'}}} 
      position='relative' p='20px'
      >
      <Typography color='#FF2625' fontSize='26px' fontWeight='600'>
         kartikay
      </Typography>
      <Typography color='black' fontWeight={600} lineHeight = '50px'
        sx={{fontSize: {lg: '44px', xs:'40px  '}}}  
        >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography color='black' fontSize='22px' lineHeight='35px' mt={1} mb={3}>
        Check out the most effective exercises!
      </Typography>
      <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
      <Typography fontStyle='italic' fontWeight={600} color='#FF2625' fontSize='200px'
        sx={{opacity:'0.3', display:{lg:'block' , xs:'none' , marginTop:'4px'}}}
        >
        Exercises
      </Typography>
      <img src={bannerImage} alt='banner' position='absolute' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner