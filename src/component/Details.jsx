import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImg from '../assets/icons/body-part.png'
import TargetImg from '../assets/icons/target.png'
import EquipmentImg from '../assets/icons/equipment.png'


function Details ({exerciseDetail}){
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail
    const extraDetails = [
        {
            icons:BodyPartImg,
            name: bodyPart
        },
        {
            icons:TargetImg,
            name: target
        },
        {
            icons:EquipmentImg,
            name: equipment
        },

    ]
  return (
    <Stack gap='80px'  sx={{flexDirection:{lg:'row'}, p:{lg:'30px', xs:'20px'}, pl:{lg:'20%'}, alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-img'/>
        <Stack  sx={{gap:{lg:'35px', xs:'20px'}, width:{lg:'40%'}}}>
            <Typography variant='h4'>
                {name}
            </Typography>
            <Typography>
                Exercises keep you strong. {name}
                is one of the best exercises to target your {target}. it will help you improve your mood and gain energy
            </Typography>

            {extraDetails.map((items)=>(
                <Stack key={items.name} gap='20px' direction='row' alignItems='center'>
                <Button color='secondary' sx={{background:'#fff2db', borderRadius:'50%', width:'70px', height:'70px'}}>
                    <img src={items.icons} alt={bodyPart} style={{maxWidth:'40px'}}/>
                </Button>
                <Typography textTransform='capitalize'>{items.name}</Typography>
            </Stack>
            ))}
        </Stack>    
    </Stack>
  )
}

export default Details
