import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Adminlogin from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Addpatient from "./Components/Patient/Addpatient";
import Viewpatient from "./Components/Patient/Viewpatient";
import Deletepatient from "./Components/Patient/Deletepatient";
import Updatepatient from "./Components/Patient/Updatepatient";
import Editpatient from "./Components/Patient/Editpatient";

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/" element={<Adminlogin />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/addpatient" element={<Addpatient />} />
        <Route exact path="/viewpatient" element={<Viewpatient />} />
        <Route exact path="/deletepatient" element={<Deletepatient />} />
        <Route exact path="/updatepatient" element={<Updatepatient />} />
        <Route exact path="/editpatient" element={<Editpatient />} />
      </Routes>
    </Box>
  );
}

export default App;
