import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assets /icons/gym.png'

const bodyParts = ({item, bodyPart , setBodyPart}) => {
  return (
    <Stack
      type='button'
      alignItems={'center'}
      justifyContent={'center'}
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart===item.id ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height:'280px',
        cursor: 'pointer',
        gap :'47px'
      }}
      onClick={()=>{
        setBodyPart(item)
      }}
    >
        <img src={Icon} alt='dumbbell' style={{width:'60px',height:'60px'}}/>
        <Typography fontSize={'24px'} textTransform={'capitalize'} fontWeight={''} color={'#3a1212'}>{item} </Typography>
    </Stack>
  )
}

export default bodyParts