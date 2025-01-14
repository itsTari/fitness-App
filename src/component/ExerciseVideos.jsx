import React from 'react'
import { Stack, Box , Typography } from '@mui/material'

function ExerciseVideos ({youtubeExercise, name}) {
  console.log(youtubeExercise)
  return (
    <Box sx={{marginTop:{lg:'200px', xs:'20px'}, padding:'20px'}}>
         <Typography variant='h4'>
          Watch <span style={{color:'red', textTransform:'capitalize'}}>{name}</span> exercise Video 
        </Typography>
        <Stack>
            {youtubeExercise?.slice(0, 3).map((item, index)=>(
              <a key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
                <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
              </a>
            ))}
        </Stack> 
    </Box>
  )
}

export default ExerciseVideos
