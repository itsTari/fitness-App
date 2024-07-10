import { Link } from "react-router-dom"
import { Stack } from "@mui/material"
import Logo from '../assets/images/Logo.png'
function Navbar(){
  return (
    <>
      <Stack direction='row' justifyContent='space-around' px='' sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}}}>
        <Link to='/' alt='logo' >
        <img src={Logo}/>
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to='/' style={{textDecoration:'none', color:'#3a1212', borderBottom:'3px solid #ff2625'}}>Home</Link>
        <Link to='#exercises' style={{textDecoration:'none', color:'#3a1212'}}>Exercises</Link>
      </Stack>
      </Stack>
    </>
  )
}

export default Navbar
