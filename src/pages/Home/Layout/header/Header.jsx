import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderComponent = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="larger"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => {}}
          >
            E-Cart
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit"> Logout </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
