import { Button, Typography, Stack } from "@mui/material"
import { Link } from "react-router-dom"
function ExercisesCard({exercise}) {
  return (
    <>
      <Link to={`/exercise/${exercise.id}`} className="exercise-card" style={{borderTop:'2px solid red',display:'flex',alignItems:'center', flexDirection:'column',gap:'20px', textDecorationLine:'none'}}>
            <img src={exercise.gifUrl} alt={exercise.name}/>
            <Stack direction='row' gap='20px'>
                <Button sx={{color:'#fff', backgroundColor:'#ffa9a9', fontSize:'16px', borderRadius:'20px', textTransform:'capitalize'}}>{exercise.bodyPart}</Button>
                <Button sx={{color:'#fff', backgroundColor:'#fcc757', fontSize:'16px', borderRadius:'20px', textTransform:'capitalize'}} >{exercise.target}</Button>
            </Stack>
            <Typography ml='25px' color='#000' fontWeight='bold' mt='10px' textTransform='capitalize' fontSize='20px' >{exercise.name}</Typography>
      </Link>
    </>
  )
}
export default ExercisesCard
