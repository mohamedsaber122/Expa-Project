import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../Landing Page/NavBar";

import "./ProjectDetails.css";

const ProjectDetails = () => {
  const projectData = useSelector((state) => state.volunteer.custom);
  const handleClick = () =>{
    alert('hello')
    
  }
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
            <p>{projectData.date}</p>
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
