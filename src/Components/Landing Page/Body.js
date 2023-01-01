import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./Body.css";
import { Link } from "react-router-dom";
import facebookIcon from "../../Images/WhatsApp Image 2022-12-06 at 21.57.36.jpg";
import NavBar from "./NavBar";

const Body = () => {
  return (
    <div>
      <NavBar />
      <div className="main-body">
        <div className="left-content">
          <h1>Leadership is for every young</h1>
          <p>
            Take part in one of our programs abroad, in your city, or virtually.
            Start your leadership journey with AIESEC
          </p>
        </div>
        <div className="right-content">
          <Link to="/sign-in">
            {" "}
            <a href="#">Sign In</a>{" "}
          </Link>
          <Link to="/sign-up">
            {" "}
            <a href="#">Sign Up with email</a>{" "}
          </Link>
          <Button className="main-button">Donate</Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
