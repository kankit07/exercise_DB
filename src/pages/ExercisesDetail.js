import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions,fetchData,youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'

const ExercisesDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams()

  useEffect(()=>{
    const fetchExcercisesData=async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSeatchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      // console.log(exerciseDetailData)
      setexerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSeatchUrl}/search?query=${exerciseDetailData.name} gym`,youtubeOptions)
      // console.log(exerciseVideosData)
      setexerciseVideos(exerciseVideosData)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    }

    fetchExcercisesData()
  },[id])
  return (
   <Box>
    <Detail exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos.contents} name={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
   </Box>
  )
}

export default ExercisesDetail