
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../component/HeroBanner'
import SearchExercises from '../component/SearchExercises'
import Exercises from '../component/Exercises'
import { fetchData, exerciseOptions } from '../utility/fetchData'
function Home(){
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
    useEffect(()=>{
        const exerciseDataFetch = async()=>{
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            setExercises(exerciseData)
        }
        exerciseDataFetch()

    },[])
    return(
        <Box>
            <HeroBanner/>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises exercises={exercises}  />
        </Box>
    )
}
export default Home