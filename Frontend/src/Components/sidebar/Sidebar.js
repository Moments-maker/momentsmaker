import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SpeakerIcon from '@mui/icons-material/Speaker';

import { makeStyles } from '@material-ui/core/styles';
const rootUrl = 'http://localhost:5000';

const drawerWidth = 240;

const useStyles = makeStyles({
  paper: {
    background: 'rgba(216 180 254 )',
    color: 'slate'
  }
});
// const handlePhoto=()=>{
//   console.log("clicked Photo")
// };
const handlePhoto = async (e) => {
  e.preventDefault();
  // if (!email || !password) return;
  // const user = { name, email, contact, description, category };
  // console.log(user)
  try {
      const url = `${rootUrl}/api/v1/products?category=Photography`;
      console.log(url)
      // const url = `/api/v1/auth/login`;
      await fetch(url, {
          method: 'GET',
          headers: {
              'Content-type': 'application/json',
          },
          // body: JSON.stringify(user),
      }).then(response => {
          if (response.status === 200) {
              alert("vendor successfully registered")
              console.log('Success');
              console.log(response);
              // setMsg("vendor successfully registered")
              // navigate('/Events')
          } else {
              console.log('Fail');
              console.log(response.body.msg)
              // setMsg("Email Already exists")
              console.log(response)
          }
      });

      // setName('');
      // setPassword('');
      // setEmail('');
      // setOpen(true);

  } catch (error) {
      console.log(error);
  }
};
export default function PermanentDrawerLeft() {
  const styles = useStyles();
  return (
    <Box sx={{ display: 'flex' }} >

      <Drawer
        classes={{ paper: styles.paper }}
        sx={{
          backgroundColor: "pink",
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },


        }}

        variant="permanent"
        anchor="left"
      >

        <List>
          <Typography variant="h6" noWrap component="div" className='flex justify-center'>
            Categories
          </Typography>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VideoCameraBackIcon />
              </ListItemIcon>
              <ListItemText onClick={handlePhoto}>Photography</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalFloristIcon />
              </ListItemIcon>
              <ListItemText>Flowers</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PinDropIcon />
              </ListItemIcon>
              <ListItemText>Venue</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <ListItemText>Dining</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SpeakerIcon />
              </ListItemIcon>
              <ListItemText>DJ and Music</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <ListItemText>Make Over Artists</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <ListItemText>Wedding Officiate</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

