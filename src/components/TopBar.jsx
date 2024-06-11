import { AppBar, InputBase, Toolbar, Typography, styled } from "@mui/material";
import NavIcons from "./sub-components/NavIcons";

const TopBar = () => {
  return (
    <AppBar position="sticky" sx={{ boxShadow: "none", bgcolor: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography fontWeight="bold" variant="h6" color="black">
          E-Book
        </Typography>
        <InputBase
          placeholder="Search"
          sx={{
            width: "30%",
            px: "10px",
            border: "1px grey solid",
            borderRadius: "10px",
            color: "black",
            bgcolor: "white",
          }}
        />
        <NavIcons />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
