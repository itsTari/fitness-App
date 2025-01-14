import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { exerciseOptions, fetchData } from "../utility/fetchData"
import Details from "../component/Details"
import ExerciseVideos from "../component/ExerciseVideos"
import SimilarExercises from "../component/SimilarExercises"
function ExerciseDetails(){
  const [exerciseDetail, setExerciseDetail ] = useState({})
  const {id} = useParams()
  useEffect (()=>{
        const fetchExercisesData = async ()=>{
          const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
          const youTubeVideosUrl = 'https://youtube-search-and-download.p.rapidapi.com';
          const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
          console.log({exerciseDetailData})
          setExerciseDetail(exerciseDetailData)
        }
        fetchExercisesData()
  },[id]);
  return (
    <>
      <Box>
        <Details exerciseDetail={exerciseDetail}/>
        <ExerciseVideos/>
        <SimilarExercises/>
      </Box>
    </>
  )
}
export default ExerciseDetails
