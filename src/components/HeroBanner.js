import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Button} from '@mui/material'
import HeroBannerImg from '../assets /images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
        }} position={'relative'} p={'20px'}>
        <Typography color={'#FF2625'} fontWeight={'600'} fontSize={'26px'} mb={'23px'} mt={'30px'}>
            Fitness club
        </Typography>
        <Typography fontWeight={'700'} sx={{fontSize:{lg:'44px',xs:'40px'}}}>
            Sweat,Smile <br/> and Repeat
        </Typography>
        <Typography fontSize={'22px'} lineHeight={'35px'} mb={'45px'}>
            check out the most effective Exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises' sx={{padding:'10px', backgroundColor:'#FF2625'}}>Explore Exercises</Button>
        <Typography 
            fontWeight={'600'}
            color={'#FF2625'}
            sx={{
                opacity:0.1,
                display:{lg:'block', xs:'none'}
            }}
            fontSize={'200px'}>
            Excerses
        </Typography>
        <img src={HeroBannerImg} alt='BannerImg' className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner