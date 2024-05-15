import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else if (email == "admin@gmail.com" && password == "admin") {
      navigate("/home");
    } else {
      alert("invalid email or password.");
    }
  };
  return (
    <Box>
      <Container
        sx={{
          width: { lg: "50%", md: "50%", sm: "80%", xs: "auto" },
          background: "whitesmoke",
          paddingBlock: "30px",
          mt: 5
        }}
      >
        <Stack spacing={4}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            ADMIN LOGIN
          </Typography>
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            id="fullWidth"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ background: "black", ":hover": { background: "darkgreen" } }}
          >
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Adminlogin;
