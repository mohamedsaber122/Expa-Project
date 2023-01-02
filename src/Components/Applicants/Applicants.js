import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "../Landing Page/NavBar";
import { Link } from "react-router-dom";
import "./Applicants.css";

const Applicants = () => {
    // state variable to store the data retrieved from the server
  const [data, setData] = useState();
    // useEffect hook to perform an effect when the component mounts
  // sends a post request to the server to retrieve project data
  useEffect(() => {
    axios
      .post("https://expa-server.onrender.com/getProject", {})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <NavBar />
      <h2 style={{ textAlign: "center", marginTop: "5%" }}>Dashboard</h2>
      <div className="applicants-main">
        <div className="applicants-box1">
          <h2>Hey, there</h2>
          <div className="applicants-data-container">
            <div className="applicants-data-row">
              <div className="applicants-data">
                <i
                  className="far fa-address-book"
                  style={{ fontSize: "23px" }}
                ></i>{" "}
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/applicants-review"
                >
                  <span>Applicants</span>
                </Link>
              </div>
              <div className="applicants-data">
                <i class="gg-add-r"></i>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/create-project"
                >
                  {" "}
                  <span>Add project</span>{" "}
                </Link>
              </div>
            </div>
            <div className="applicants-data-row">
              <div className="applicants-data">
                <i class="gg-danger"></i> <span>Help center</span>
              </div>
              <div className="applicants-data">
                <i class="gg-debug"></i> <span>Report a bug</span>
              </div>
            </div>
          </div>
        </div>
        <div className="applicants-box2">
          <img src="https://aiesec.org.eg/img/logos/aiesec-member.png" />
        </div>
      </div>
    </div>
  );
};

export default Applicants;
