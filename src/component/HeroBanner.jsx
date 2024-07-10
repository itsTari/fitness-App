import { Box, Stack, Typography, Button } from "@mui/material"
import Banner from '../assets/images/banner.png'
function HeroBanner(){
    return(
        <Box position='relative' p='20px' sx={{mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}}>
            <Stack direction='row' sx={{gap:{lg:'50px', xs:'20px'}}}>
                <Stack sx={{width:{lg:'50%', xs:'100%'}, alignItems:{xs:'center', lg:'flex-start', sm:'flex-start'}}}>
                    <Typography mb='23px' mt='30px' color='#ff2625' fontWeight='600' fontSize='20px'>Fitness Club</Typography>
                    <Typography color='#3a1212' fontWeight='700' sx={{fontSize:{lg:'44px', xs:'40px'}}}>sweat, Smile <br/> And Repeat</Typography>
                    <Typography color='#3a1212' mb={3} lineHeight='44px' fontSize='20px'>Check out the most effective exercises</Typography>
                    <Button href="#exercises" variant="contained" color="error" sx={{width:'200px', padding:'10px', backgroundColor:'#ff2625'}} >Explore Exercises</Button>
                    <Typography fontSize='200px' fontWeight='600' color='#ff2625' sx={{opacity:0.1, display:{lg:'block', xs:'none'}}}>Exercise</Typography>
                </Stack>
                    <img src={Banner} alt='banner' className="hero-banner"/>
            </Stack>
        </Box>
    )
}
export default HeroBanner