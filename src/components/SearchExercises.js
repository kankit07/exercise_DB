import React from 'react'
import { useState, useEffect } from 'react'
import { Stack,Box,TextField,Typography,Button } from '@mui/material'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExcerses = ({setExercises , bodyPart, setBodyPart}) => {
  const [search,setSearch] = useState('')
 
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExcercisesData = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExcercisesData()
  },[])
  const handleSearch= async()=>{
    if(search){
      const excercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      
      const searchedExercises = excercisesData.filter(
        (exercise) => exercise.name.toLocaleLowerCase().includes(search)
        ||exercise.equipment.toLocaleLowerCase().includes(search)
        ||exercise.bodyPart.toLocaleLowerCase().includes(search)
        ||exercise.target.toLocaleLowerCase().includes(search)
      )
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('')
      setExercises(searchedExercises)
     // console.log(excercisesData)
    }
  }

  return (
    <Stack alignItems={'center'} mt={'37px'} justifyContent={'center'} p={'20px'}>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', sm:'30px'}}} mb={'50px'} textAlign={'center'}>
        Awesome Exercises you <br/>
        should know
      </Typography>
      <Box position={'relative'} mb={'72px'}>
      <TextField
      sx={{
        input:{
          fontWeight:'700',
          border:'none',
          borderRadius:'4px'
        },
        width:{lg:'1000px', xs:'300px'},
        backgroundColor:'#fff',
        borderRadius:'40px'
      }}
      height='76px'
      //value={}
      onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
      placeholder='Search Exercises'
      type='text'
      />
      <Button className='search-btn'
      sx={{
        bgcolor:'#ff2625',
        color:'#fff',
        textTransform:'none',
        width:{lg:'175px', xs:'80px'},
        fontSize:{lg:'20px',xs:'14px'},
        height:'54px',
        position:'absloute'
      }}
      onClick={handleSearch}
      >
        Search
      </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} bodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExcerses