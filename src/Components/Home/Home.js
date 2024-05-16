import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AdminappBar from "../Navbar/Navbar";
import background from "../../images/background.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
          top: "60px",
          left: "0px",
          background: "whitesmoke",
          pt: 2,
          pb: 2,
          width: "100%"
        }}
      >
        <br />
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          HOSPITAL MANAGEMENT SYSTEM
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", mt: 1 }}>
          Enjoy Our Services
        </Typography>
        <br />
        <div style={{ margin: "auto", width: "fit-content" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/viewpatient")}
            sx={{ background: "green" }}
          >
            Our Services
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
