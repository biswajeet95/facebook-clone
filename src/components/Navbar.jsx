import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Badge,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Avatarbox = styled(Box)({
  display: "flex",
  gap: "2em",
  justifyContent: "space-between",
  alignItems: "center",
});

const Iconbtn = styled(Box)(({ theme }) => ({
    display: "none", 
  alignItems:"center",
  
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },

  // [theme.breakpoints.down("xl")]:{
  //   display:"flex",
  //   flexDirection:"row",
  //   justifyContent:"center",

  // },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Box display="flex">
          <Typography
            sx={{ fontWeight: 900, display: { xs: "none", sm: "block" } }}
          >
            DEV.
          </Typography>
          <LogoDevIcon sx={{ display: { xs: "block" } }} />
        </Box>
        <Box
          display="flex"
          backgroundColor="White"
          border="1px solid"
          borderRadius="3px"
          width="50%"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Avatarbox>
          <Iconbtn>
            <IconButton type="button" sx={{ p: 1 }}>
              <SettingsIcon />
            </IconButton>
            <Badge badgeContent={4} color="success">
              <NotificationsIcon color="action" />
            </Badge>
          </Iconbtn>

          <Box onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt=""
              src="/static/images/avatar/1.jpg"
            />
          </Box>
        </Avatarbox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        //anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
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
      </Menu>
    </AppBar>
  );
};

export default Navbar;
