import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Landing Page/NavBar.js";
import Body from "./Components/Landing Page/Body";
import CreateProject from "./Components/Create Project/CreateProject";
import Volanter from "./Components/Volanteer Page/Volanter";
import { Routes, Route } from "react-router-dom";
import VolanterCustom from "./Components/Volanteer Page/VolanterCustom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<> <NavBar /> <Body/> </>} />
        <Route path="/about" element={<CreateProject/>} />
        <Route path="/data" element={<VolanterCustom />} />
      </Routes>
    </>
  );
}

export default App;
