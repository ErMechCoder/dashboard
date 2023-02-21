import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


function Email() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');

    //console.log(email,message)

    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch("/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });
        console.log(res);
        const data = await res.json();
        console.log(data);

        if (data.status === 401 || !data) {
            console.log("error")
        } else {
            setShow(true);
            setEmail("")
            console.log("Email sent")
        }
    }

    return (
        <>
         {
                show ? <div variant="primary" onClose={() => setShow(false)} dismissible>
                    Your Email Succesfully Send
                </div> : ""
            }
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue="Write here"
                        
                    />

                </div>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={sendEmail}
                    >
                    Send

                </Button>

            </Box>
        </>
    )
}

export default Email;
