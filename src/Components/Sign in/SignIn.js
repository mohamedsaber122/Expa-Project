import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import NavBar from "../Landing Page/NavBar";
import "./SignIn.css";

const SignIn = () => {
    // state variables for managing form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
    // function for navigating to different routes
  const navigate = useNavigate();
 // function to handle sign in form submission
  // sends a post request to the server with the form input data
  // navigates to different routes based on the response from the server
  const handleSignIn = () => {
    axios
      .post("https://expa-server.onrender.com/getAdmin", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == "admin") {
          navigate("/applicants");
        } else {
          navigate("/projects-main");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      <div className="signup-main">
        <div className="signup-container">
          <h2>Sign In</h2>
          <p>Sign in for our organization</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <Button onClick={handleSignIn}>Sign in !</Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
