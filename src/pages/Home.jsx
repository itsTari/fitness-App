
import { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../component/HeroBanner'
import SearchExercises from '../component/SearchExercises'
import Exercises from '../component/Exercises'
function Home(){
    return(
        <Box>
            <HeroBanner/>
            <SearchExercises/>
            <Exercises/>
        </Box>
    )
}
export default Home