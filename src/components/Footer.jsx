import React from 'react';
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
        <Stack alignItems='center'  px='40px' pt='15px'>
            <img src={Logo} alt='Logo'/>  
        <Typography variant='h6' mt='20px'>
            Made with ❤️ by Kartikay Singh
        </Typography>
        <Typography variant='h7' pb='20px'>
            All Rights Reserved 2022
        </Typography>
        </Stack>
    </Box>
  )
}

export default Footer