import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";
import DarkModeIcon from '@mui/icons-material/DarkMode';
const SideBar = ({ mode ,setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed"height="100vh">
        <List>
        <ListItemButton>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsApplicationsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <MoveToInboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsApplicationsIcon />
          </ListItemIcon>
          <GroupsIcon primary="Groups" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            < DarkModeIcon />
          </ListItemIcon>
          <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
        </ListItemButton>
      </List>
      </Box>
      
    </Box>
  );
};

export default SideBar;
