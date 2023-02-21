import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PrjNumber from "./PrjNumber";


const DownloadVrf = () => {
  //const [hideVrf,setHideVrf]= useState(false)
  const [showPrjNumber,setShowPrjNumber]= useState(false)

  return (
    <>

    <Box
      sx={{
        width: 600,
        height: 250,
        marginLeft:"10%",
        marginBottom:"50px",
        backgroundColor: '#407dde',
        '&:hover': {
          backgroundColor: 'primary.main',
    
        },
      }}
    >
       
        <Button 
        variant="contained" 
        style={{
          margin:"auto",
          width:"300px",
          top: "60%", 
          left: "20%",
          backgroundColor: '#bcc2cc' 
          }}

          onClick={()=>setShowPrjNumber( showPrjNumber)}
          >
          Download VRF
         {
          showPrjNumber && <PrjNumber/>
         }
        </Button>

      

    </Box>
    </>
  )
}

export default DownloadVrf;
