import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const ITEM_HEIGHT = 28;
const ITEM_PADDING_TOP = 6;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Report',
    'Attachments',
    'Report+Attachments',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const PayLoad = () => {

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <>
            <Box
                sx={{
                    width: "600px",
                    display: "block",
                    height: "300px",
                    position: 'absolute',
                    marginLeft: "8%",
                    marginTop: '50px',
                    backgroundColor: '#407dde',
                    '&:hover': {
                        backgroundColor: 'primary.main',

                    },
                }}
            >
                <Box
                    sx={{
                        width: "400px",
                        display: "block",
                        height: "150px",
                        Left: "30%",
                        margin: 'auto',
                        marginTop: '45px',
                        position: "relative"

                    }}>
                    <Typography variant="h6" gutterBottom fontSize="12px">
                        Select Payload
                    </Typography>

                    <FormControl sx={{ m: 1, width: 380, mt: 1, backgroundColor: "#ffffff", }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Report</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">

                            </MenuItem>
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

      

                </Box>


             
                <Button variant="contained" style={{width:"180px",marginTop:"60px", left: "65%", backgroundColor: '#bcc2cc' }}>
         Submit
        </Button>


            </Box>
        </>

    )
}

export default PayLoad;
