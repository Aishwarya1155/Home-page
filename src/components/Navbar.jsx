import { AppBar, InputBase, Toolbar, Typography,styled, colors, Box, Grid , Badge , Avatar, Stack} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'


const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:"space-between"
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));
 

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems :'center',
  gap: ' 10px ',
  [theme.breakpoints.up("sm")]: {
    display: "none"
},
}));


const Navbar = () => {
  const [open , setOpen] = useState(false);
  return (
     <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LIFE LITE
        </Typography>
        <BeachAccessIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://img.freepik.com/free-photo/inspired-brown-haired-woman-summer-dress-laughing-with-eyes-closed-portrait-refined-latin-girl-chilling_197531-9825.jpg?size=626&ext=jpg"
          
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://img.freepik.com/free-photo/inspired-brown-haired-woman-summer-dress-laughing-with-eyes-closed-portrait-refined-latin-girl-chilling_197531-9825.jpg?size=626&ext=jpg"
          />
          <Typography variant="span"> Zarah </Typography>
        </UserBox>
      </StyledToolbar>
      {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu> */}
    </AppBar>
  );
};

export default Navbar;
   


     
    
