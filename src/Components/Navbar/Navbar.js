import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Add", "View", "Update", "Delete", "Logout"];

function AdminappBar() {
  const [anchorElNav, setAnchorElNav] = useState("");
  const navigate = useNavigate();
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = menuname => {
    // setAnchorElNav(menuname);
    if (menuname == "Add") {
      navigate("/addpatient");
    } else if (menuname == "View") {
      navigate("/viewpatient");
    } else if (menuname == "Delete") {
      navigate("/deletepatient");
    } else if (menuname == "Update") {
      navigate("/updatepatient");
    } else if (menuname == "Home") {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none"
              }
              // display: { xs: "none", lg: "block", md: "block", sm: "block" }
              }
            >
              HOSPITAL MANAGEMENT SYSTEM
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map(page =>
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            HOSPITAL MANAGEMENT SYSTEM
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between"
              }
            }}
          >
            {pages.map(page =>
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AdminappBar;
