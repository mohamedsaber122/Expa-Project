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
import Applicants from "./Components/Applicants/Applicants";
import ApplicantsReview from "./Components/Applicants/ApplicantsReview";
import AboutUs from "./Components/About us/AboutUs";
import Donation from "./Components/Donation/Donation";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Body />
            </>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/applicants-review" element={<ApplicantsReview />} />
        <Route path="/projects" element={<ProjectDetails />} />
        <Route path="/projects-main" element={<Volanter />} />
        <Route path="/about" element={<CreateProject />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dontaion" element={<Donation />} />
      </Routes>
    </>
  );
}

export default App;
