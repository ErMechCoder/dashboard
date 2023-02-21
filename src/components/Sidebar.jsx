import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import DescriptionIcon from '@mui/icons-material/Description';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import '../index.css'
import { Typography } from '@mui/material';


const logo={
    color:'black',
    margin:'5px',
    marginLeft:'15px',
    padding:'10px',
}
 const Sidebar=()=> {
  return (
    <div  className='sidebarContainer'>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            style={logo}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              margin:'5px',
              padding:'1px',
              fontSize:'40px',
              backgroundColor: '#fffbfb'
            }}
          >
            React
          
          </Typography>
         
    <Box sx={{ width: '1024px', maxWidth: 250, bgcolor: 'background.paper',margin:'auto' }}>
    <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor: '#fffbfb'
            }}
          >
                 React
          </Typography>
 
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <DashboardIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/customer">
              <ListItemIcon>
                <HeadphonesIcon />
              </ListItemIcon>
              <ListItemText  primary="Customer" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/slpc">
              <ListItemIcon>
                <HeadphonesIcon />
              </ListItemIcon>
              <ListItemText  primary="SLPC" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/email">
              <ListItemIcon>
                < DescriptionIcon/>
              </ListItemIcon>
              <ListItemText primary="Email Us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/chat">
              <ListItemIcon>
                < DescriptionIcon/>
              </ListItemIcon>
              <ListItemText primary="Invoice" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/chat">
              <ListItemIcon>
                <FormatQuoteIcon/>
              </ListItemIcon>
              <ListItemText primary="Quote" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/chat">
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Payment Invoice" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/employee">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Employee" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/chat">
              <ListItemIcon>
                < PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/chat">
              <ListItemIcon>
                < ChatIcon  />
              </ListItemIcon>
              <ListItemText primary="Chat Us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/chart">
              <ListItemIcon>
                < InsertChartIcon />
              </ListItemIcon>
              <ListItemText primary="Chart" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/chat">
              <ListItemIcon>
                < SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Payment Mode" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Role" />
            </ListItemButton>
          </ListItem>
        </List>
     
    </Box>
    </div>
  );
}

export default Sidebar;