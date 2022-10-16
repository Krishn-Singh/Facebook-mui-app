import { AccountBox, Diversity3, Group, Home, ModeNight, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} padding={2} sx={{display:{xs: "none", sm:"block"}}}>
      <Box position="fixed">
    <List>
    <ListItem disablePadding>
      <ListItemButton component ="a" href="#">
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton component ="a" href="#">
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </ListItem>

    <ListItem disablePadding>
      <ListItemButton component ="a" href="#">
        <ListItemIcon>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>
    

    <ListItem disablePadding>
      <ListItemButton component ="a" href="#">
        <ListItemIcon>
          <Group/>
        </ListItemIcon>
        <ListItemText primary="Group" />
      </ListItemButton>
    </ListItem>
    

<ListItem disablePadding>
<ListItemButton component ="a" href="#">
  <ListItemIcon>
    <Diversity3 />
  </ListItemIcon>
  <ListItemText primary="Friends" />
</ListItemButton>

</ListItem>


<ListItem disablePadding>
<ListItemButton component ="a" href="#">
  <ListItemIcon>
    <Storefront />
  </ListItemIcon>
  <ListItemText primary="Marketplace" />
</ListItemButton>
</ListItem>

<ListItem disablePadding>
<ListItemButton component ="a" href="#">
  <ListItemIcon>
    <ModeNight />
  </ListItemIcon>
  <Switch defaultsChecked />
</ListItemButton>
</ListItem>

</List>
</Box>
    </Box>
  )
}

export default Sidebar