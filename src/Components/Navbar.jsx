import { Facebook, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import { styled } from '@mui/material';
import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';



const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  padding: "0 20px",
  borderRadius: "10px"

}));

const Icons = styled(Box)(({theme}) => ({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display:"flex",
      
    }
}));
const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none",
    
  }
}));

const Navbar = () => {
  
  const [open, setOpen ] = useState(false)

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
          < Typography sx={{ display: { xs: "none", sm: "block" } }}>
            Facebook
          </Typography>
          <Facebook sx={{ display: { xs: "block", sm: "none" } }} />
          <Search><InputBase placeholder='Search' /></Search>
          <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon  />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications  />
          </Badge>
          < Avatar sx={{height:30, width:30}} src="" onClick={(e) => setOpen(true)}/>
          </Icons>
          <UserBox >
          < Avatar sx={{height:30, width:30}} src="" onClick={(e) => setOpen(true)}/>
          <Typography variant='span'>Krish</Typography>
          </UserBox> 
        </Toolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    </Box> 
  )
}

export default Navbar