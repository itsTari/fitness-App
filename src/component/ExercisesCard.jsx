import { Button, Typography, Stack } from "@mui/material"
import { Link } from "react-router-dom"
function ExercisesCard({exercise}) {
    // console.log(exercise)
  return (
    <>
      <Link to={`/exercise/${exercise.id}`} className="exercise-card" style={{borderTop:'2px solid red'}}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
            <Stack direction='row' gap='20px'>
                <Button variant="contained" sx={{color:'#fff', backgroundColor:'#ffa9a9', fontSize:'20px', textDecoration:'none', borderRaduis:'10px'}} >Waist</Button>
                <Button variant="contained" >Abs</Button>
            </Stack>
      </Link>
    </>
  )
}
export default ExercisesCard
