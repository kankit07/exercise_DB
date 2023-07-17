import React,{useState , useEffect} from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setCurrentPage] = useState('1')
  const exercisesPerPage= 9
  const paginate = (e,value)=>{
    setCurrentPage(value)

    window.scrollTo({ top:1800, behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExcercisesData= async() =>{
      let exerciseData=[]

      if(bodyPart==='all'){
        exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      }else{
        exerciseData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      }

      setExercises(exerciseData)
    }
    fetchExcercisesData()
  },[bodyPart])

  const indexOfLastExercise= currentPage*exercisesPerPage;
  const indexOfFirstExercise= indexOfLastExercise-exercisesPerPage
  const currentExercise= exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  return (
    <Box id='exercises'
      sx={{mt:{lg:'110px'}}}
      mt={'50px'}
      p={'20px'}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Showing Results
      </Typography>
      <Stack direction={'row'} sx={{gap:{lg:'110px', sm:'50px'}}}
      flexWrap={'wrap'} justifyContent={'center'}>
        {currentExercise.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt={'100'} alignItems={'center'}>
        {exercises.length>9 && <Pagination
          color='standard'
          defaultPage={1}
          shape='rounded'
          count={Math.ceil(exercises.length /exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />}

      </Stack>
    </Box>
  )
}

export default Exercises