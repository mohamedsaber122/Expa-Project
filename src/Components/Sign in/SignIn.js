import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../Landing Page/NavBar";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    alert("Hello");
    axios
      .post("https://expa-server.onrender.com/adminSignin", {
        email: email,
        password: password,
      })
      .then((responce) => {
        console.log(response);
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
