import { capitalize, Stack, Typography } from "@mui/material"
import Icon from '../assets/icons/gym.png'

function BodyPart ({item, bodyPart, setBodyPart}) {
  return (
    <>
      <Stack  type='button' alignItems='center' justifyContent='center' className="bodyPart-card"
      sx={{borderTop: bodyPart === item ? '4px solid #ff26245' : '',
        backgroundColor:'#fff', 
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'40px'
      }} 
      onClick={() =>{setBodyPart(item); window.scrollTo({top:1800, left:100, behavior:"smooth"})} }   
      >
        <img src={Icon} alt='dumbbell' style={{width:'40px', height:'40px'}}/>
        <Typography textTransform='capitalize' sx={{fontSize:{lg:'23px', xs:'18px'}}}>{item}</Typography>
      </Stack>
    </>
  )
}

export default BodyPart
