import { useEffect, useState } from "react"
import { Box, Stack, TextField, Button, Typography } from "@mui/material"
import { fetchData, exerciseOptions } from "../utility/fetchData"
import HorizontalScrollbar from "./HorizontalScrollbar"
function SearchExercises({setExercises, bodyPart, setBodyPart}){

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    
    useEffect(()=>{
        const fetchExercisesData = async()=>{
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setBodyParts(['all', ...bodyPartData])
        }
        fetchExercisesData()
        
        
    },[])
    
    const handleSearch = async() => {
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            // console.log(exerciseData)
            const searchedExercises = exerciseData.filter((exercise)=>
                exercise.name.toLocaleLowerCase().includes(search) || 
            exercise.target.toLocaleLowerCase().includes(search) ||
                exercise.equipment.toLocaleLowerCase().includes(search) ||
                exercise.bodyPart.toLocaleLowerCase().includes(search) 
            )
            setSearch('')
            setExercises(searchedExercises);
        }
        
    }
    return(
        <Stack alignItems="center" mt='37px' justifyContent='center' p='20px'>
            <Typography  sx={{fontSize:{lg:'35px', xs:'28px'}}} textAlign='center' mb='50px'>Awesome Exercises You <br/> Should Know</Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{input:{
                        fontWeight:'700',
                        border:'none',
                        borderRadius:'10px'},
                    width:{
                        lg:'800px', xs:'350px'},
                    backgroundColor:'#fff', borderRadius:'40px'}}
                    height='76px'
                    value={search}
                    onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                    outline='none'
                />
                <Button onClick={handleSearch} sx={{bgcolor:'#ff2625', color:'#fff', textTransform:'none', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'14px'}, height:'56px', position:'absolute', right:'0'}}>Search</Button>
            </Box>
            <Box sx={{position:'relative', width:'100%', padding:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        </Stack>
    )
}
export default SearchExercises