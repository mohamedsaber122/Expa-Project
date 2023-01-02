import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../Landing Page/NavBar";

import "./ProjectDetails.css";

const ProjectDetails = () => {
    // retrieve project data from the global state
  const projectData = useSelector((state) => state.volunteer.custom);
   // extract the date from the project data and slice the string to only get the first 10 characters (YYYY-MM-DD)
  const date = projectData.date.slice(0, 10);
   // function to handle the click event of the apply button
  const handleClick = () => {
    alert("Applied!");
  };
  return (
    <div>
      <NavBar />
      <div className="projects-main">
        <div className="projects-right">
          <h1>{projectData.title}</h1>
          <p style={{ color: "orange" }}>Description and Details</p>
          <hr style={{ color: "orange" }} />
          <p style={{ color: "#A9A9A9" }}>{projectData.description}</p>
          <hr />
          <div className="projects-data">
            <p>Date</p>
            <p>{date}</p>
          </div>
          <div className="projects-data">
            <p>Country</p>
            <p>{projectData.country} </p>
          </div>
          <div className="projects-fees">
            <h3>{projectData.fees}$</h3>
            <Button
              style={{
                color: "white",
                backgroundColor: "orange",
                width: "fit-content",
              }}
              onClick={handleClick}
            >
              Apply
            </Button>
          </div>
        </div>
        <div className="projects-left">
          <img src={projectData.image} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
