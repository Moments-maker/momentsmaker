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

const drawerWidth = 240;

const useStyles = makeStyles({
  paper: {
    background: 'rgba(216 180 254 )',
    color: 'slate'
  }
});
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
              <ListItemText>Photography</ListItemText>
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

