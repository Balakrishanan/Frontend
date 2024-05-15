import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AdminappBar from "../Navbar/Navbar";
import background from "../../images/background.jpg";

const Home = () => {
  return (
    <Box>
      <AdminappBar />
      <Box
        component="img"
        src={background}
        sx={{ width: "100%", height: "100vh" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "200px",
          left: "10px",
          background: "whitesmoke",
          p: 2,
          width: "100%"
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          HOSPITAL MANAGEMENT SYSTEM
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Enjoy Our Services
        </Typography>
        <br />
        <div style={{ margin: "auto", width: "fit-content" }}>
          <Button variant="contained">Our Services</Button>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
