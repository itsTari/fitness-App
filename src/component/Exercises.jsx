import { useEffect, useState } from "react"
// import { Pagination } from "@mui/material/Pagination"
import { Box, Typography, Stack, Pagination } from "@mui/material"
// import { exerciseOptions, fetchData } from "../utility/fetchData"
import ExercisesCard from "./ExercisesCard"

function Exercises({exercises}){
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 2
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top:1800, behavior:'smooth'})
    }
    
    // console.log(exercises)
    return(
        <Box id='exercise' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
            <Typography variant="h3" mb='46px'>
                Showing Results
            </Typography>
            <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{gap:{lg:'110px', xs:'50px'}}}>
                {currentExercise.map((exercise, index)=> 
                        <ExercisesCard key={index} exercise={exercise}/>
                    )
                }
            </Stack>
            <Stack mt='100px' alignItems='center'>
                {exercises.length > exercisesPerPage && (
                    <Pagination  
                    color='secondary'
                    shape="rounded"  
                    count={Math.ceil(exercises.length/exercisesPerPage)} 
                    defaultPage={1}
                     page={currentPage} 
                     onChange={paginate} 
                     size="large"/>
                ) }
            </Stack>
        </Box>
    )
}
export default Exercises