import { Box } from "@mui/material"
function HorizontalScrollbar({data}){
  return (
    <>
      {data.map((item)=> 
            <Box key={item.id || item}  itemId={item.id || item}  title={item.id || item} m='0 40px'>{item}</Box>
        )}
    </>
  )
}

export default HorizontalScrollbar
