import logo from "./logo.svg";
import "./App.css";
import NavBar from "../Landing Page/NavBar.js";
import Body from "../Landing Page/Body";
import CreateProject from "../Create Project/CreateProject";
import Volanter from "./Volanter";
import { Routes, Route } from "react-router-dom";
import VolanterCustom from "./VolanterCustom";

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
