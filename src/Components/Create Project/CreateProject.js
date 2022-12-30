import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import NavBar from "../Landing Page/NavBar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./CreateProject.css";
import imageBackground from "../../Images/WhatsApp Image 2022-12-06 at 22.33.32.jpg";
import axios from "axios";
import { useNavigate } from "react-router";
const CreateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fees, setFees] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Hello");
    axios
      .post("https://expa-server.onrender.com/addProject", {
        ProjectName: name,
        ProjectDescription: description,
        ProjectFees: fees,
        ProjectDate: date,
        country: country,
      })
      .then((response) => {
        console.log(response);
        if (response.data == "Project Added") {
          alert("Project added successfully");
          navigate("/applicants");
        } else {
          alert("Error while adding");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <NavBar />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <h1>Create Project</h1>
        </div>
        <div className="main-content">
          <div className="left-content">
            <h4>Add project name</h4>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Project name"
            />
            <h4>Add project description</h4>
            <input
              style={{ height: "100px" }}
              type="text"
              placeholder="Project description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <h4>Add project fees</h4>
            <input
              onChange={(e) => setFees(e.target.value)}
              type="text"
              placeholder="Project fees"
            />
            <h4>Add project time and date</h4>
            <input onChange={(e) => setDate(e.target.value)} type="text" />
            <h4>Add country</h4>
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              placeholder="Project country"
            />
          </div>
          <div className="right-content">
            {/* <h4>Upload project photo</h4>
            <input type="file" className="input-image" /> */}
            <img
              style={{ width: "100%" }}
              src="https://i.pinimg.com/736x/f4/17/e5/f417e50c89038b0b4b377fac5dcc44f4.jpg"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Button
            onClick={handleSubmit}
            style={{ width: 150, height: 50, marginBottom: 30 }}
          >
            Submit Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
