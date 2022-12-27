import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Landing Page/NavBar.js";
import Body from "./Components/Landing Page/Body";
import CreateProject from "./Components/Create Project/CreateProject";
import Volanter from "./Components/Volanteer Page/Volanter";
import { Routes, Route } from "react-router-dom";
import VolanterCustom from "./Components/Volanteer Page/VolanterCustom";
import SignUp from "./Components/Sign up/SignUp";
import SignIn from "./Components/Sign in/SignIn";
import ProjectDetails from "./Components/Project details/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Volanter />} />
        <Route path="/projects" element={<ProjectDetails />} />
        <Route path="/about" element={<CreateProject />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/data" element={<VolanterCustom />} />
      </Routes>
    </>
  );
}

export default App;
