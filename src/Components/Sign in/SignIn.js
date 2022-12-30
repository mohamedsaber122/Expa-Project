import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import NavBar from "../Landing Page/NavBar";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [isAdmin ,setIsAdmin] = useState(false);
    const navigate = useNavigate();
  const handleSignIn = () => {
    alert("Hello");
    axios
      .post("https://expa-server.onrender.com/getAdmin", {
        email : email,
        password : password,
      })
      .then((response) => {
        console.log(response);
        if(response.data == "Admin signin !"){
            navigate('/applicants')
        }
        else{
            navigate('/projects-main')
        }
      })
      .catch((err) => console.log(err));

    console.log("Tessstttt");
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
