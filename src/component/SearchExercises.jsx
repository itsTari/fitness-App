import { useEffect, useState } from "react"
import { Box, Stack, TextField, Button, Typography } from "@mui/material"
function SearchExercises(){
    return(
        <Stack alignItems="center" mt='37px' justifyContent='center' p='20px'>
            <Typography  sx={{fontSize:{lg:'35px', xs:'28px'}}} textAlign='center' mb='50px'>Awesome Exercises You <br/> Should Know</Typography>
            <Box position='relative' mb='72px'>
                <TextField
                
                />
            </Box>
        </Stack>
    )
}
export default SearchExercises