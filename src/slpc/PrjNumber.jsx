import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const PrjNumber = () => {
  return (
    <Box
      sx={{
        display:"block",
        width: 600,
        height: 250,
        marginLeft:"8%",
        marginTop:"50px",
        marginBottom:"80px",
        position:"absolute",
        backgroundColor: '#407dde',
        '&:hover': {
          backgroundColor: 'primary.main',
        
        },
      }}
    >
        <div    style={{ width:"200px",height:"20px",marginTop:'35px',position:"absolute",fontSize:"10px",color:'block',fontWeight:"400",left:"14%" }}>
        <Typography variant="subtitle2" gutterBottom>
       Enter PRJ Number
      </Typography>
       
        </div>
      
       <TextareaAutosize
      aria-label="empty textarea"
      placeholder="PRJ12345"
      style={{ width:"300px",height:"20px",position:"relative",fontSize:"13px",color:'block',fontWeight:"600",marginTop:"100px",marginLeft:"10%" }}
    />
        <Button variant="contained" style={{width:"200px",top:"75%",position:"absolute",left:"100", backgroundColor: '#bcc2cc' }}>
         Submit 
        </Button>



    </Box>
  )
}

export default PrjNumber;
