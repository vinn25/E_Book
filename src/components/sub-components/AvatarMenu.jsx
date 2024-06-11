import { Menu, MenuItem } from "@mui/material";
import React from "react";

const AvatarMenu = ({ open, setOpen }) => {
  return (
    <Menu
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
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};

export default AvatarMenu;
