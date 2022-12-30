import React from "react";
import NavBar from "../Landing Page/NavBar";
import "./Applicants.css";

const Applicants = () => {
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
                <span>Applicants</span>
              </div>
              <div className="applicants-data">
                <i class="gg-add-r"></i>
                <span>Add project</span>
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