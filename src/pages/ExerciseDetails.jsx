import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { exerciseOptions, fetchData, youtubeOptions } from "../utility/fetchData"
import Details from "../component/Details"
import ExerciseVideos from "../component/ExerciseVideos"
import SimilarExercises from "../component/SimilarExercises"
function ExerciseDetails(){
  const [exerciseDetail, setExerciseDetail ] = useState({})
  const [youtubeExercise, setYoutubeExercise ] = useState({})
  const {id} = useParams()
  useEffect (()=>{
        const fetchExercisesData = async ()=>{
          const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
          const youTubeVideosUrl = 'https://youtube-search-and-download.p.rapidapi.com';
          const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
          setExerciseDetail(exerciseDetailData)

          const youTubeExerciseVideo = await fetchData(`${youTubeVideosUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
          setYoutubeExercise(youTubeExerciseVideo.contents)
          // console.log(youTubeExerciseVideo.contents)
        }
        fetchExercisesData()
  },[id]);
  return (
    <>
      <Box>
        <Details exerciseDetail={exerciseDetail}/>
        <ExerciseVideos youtubeExercise={youtubeExercise} name={exerciseDetail.name}/>
        <SimilarExercises/>
      </Box>
    </>
  )
}
export default ExerciseDetails
