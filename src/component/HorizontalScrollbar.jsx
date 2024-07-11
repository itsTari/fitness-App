import { Box, Typography } from "@mui/material"
import { useContext } from "react";
import BodyPart from "./BodyPart"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import 'react-horizontal-scrolling-menu/dist/styles.css';
import LeftIcon from '../assets/icons/left-arrow.png'
import RightIcon from '../assets/icons/right-arrow.png'
function HorizontalScrollbar({data, bodyPart, setBodyPart}){
    const leftArrow = ()=>{
        const {scrollPrev} = useContext(VisibilityContext);
        return (
            <Typography onClick={() => scrollPrev()} className="left-arrow">
                <img src={LeftIcon} alt='left-arrow'/>
            </Typography>
        )
    }
    const rightArrow = ()=>{
        const {scrollNext} = useContext(VisibilityContext);
        return (
            <Typography onClick={() => scrollNext()} className="right-arrow">
                <img src={RightIcon} alt='right-arrow'/>
            </Typography>
        )
    }
  return (
    <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow}>
      {data.map((item)=> 
            <Box key={item.id || item}  itemId={item.id || item}  title={item.id || item} m='0 40px'><BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/></Box>
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
