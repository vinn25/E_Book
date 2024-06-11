// mui
import {
  Tooltip,
  Fab,
  List,
  ListItem,
  IconButton,
  Avatar,
} from "@mui/material";
// icons
import NightlightIcon from "@mui/icons-material/Nightlight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AvatarMenu from "./AvatarMenu";
import { useState } from "react";

const NavIcons = () => {
  const [open, setOpen] = useState(false);
  return (
    <List sx={{ display: "flex", flexDirection: "row" }}>
      <ListItem>
        <Tooltip title="Do Not Disturb" placement="bottom">
          {/* <Fab> */}
          <IconButton
            sx={{
              bgcolor: "lightgrey",
              color: "white",
              "&:hover": { color: "grey" },
            }}
          >
            <NightlightIcon />
          </IconButton>
          {/* </Fab> */}
        </Tooltip>
      </ListItem>
      <ListItem>
        <Tooltip title="Notifications">
          <IconButton
            sx={{
              bgcolor: "lightgrey",
              color: "white",
              "&:hover": { color: "grey" },
            }}
          >
            <NotificationsIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem>
        <Tooltip title="Profile">
          <Avatar
            sx={{ width: 40, height: 40, "&:hover": { cursor: "pointer" } }}
            alt="Travis Howard"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            onClick={(e) => setOpen(true)}
          />
        </Tooltip>
        <AvatarMenu open={open} setOpen={setOpen} />
      </ListItem>
    </List>
  );
};

export default NavIcons;
