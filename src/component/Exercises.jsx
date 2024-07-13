import { useEffect, useState } from "react"
// import { Pagination } from "@mui/material/Pagination"
import { Box, Typography, Stack } from "@mui/material"
import { exerciseOptions, fetchData } from "../utility/fetchData"
import ExercisesCard from "./ExercisesCard"

function Exercises({exercises}){
    console.log(exercises)
    return(
        <Box id='exercise' sx={{mt:{lg:'110px'}}} mt='50px' p='20px'>
            <Typography variant="h3" mb='46px'>
                Showing Results
            </Typography>
            <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{gap:{lg:'110px', xs:'50px'}}}>
                {exercises.map((exercise, index)=> 
                        <ExercisesCard key={index} exercise={exercise}/>
                    )
                }
            </Stack>
        </Box>
    )
}
export default Exercises