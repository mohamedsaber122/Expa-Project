import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import NavBar from "../Landing Page/NavBar";
import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router";

// Functional component for the sign up form
const SignUp = () => {
    // State variables managed with the useState hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState(""); 
   // Hook for navigating to different routes
  const navigate = useNavigate();
  const handleClick = () => {


    axios
      .post("https://expa-server.onrender.com/registration", {
            // Make an HTTP POST request to the server with the form data
        name: name,
        email: email,
        phoneNumber: phone,
        password: password,
        country: country,
      })
      .then((response) => {
                // If the request is successful and the server responds with "New User Saved!", 
                //display an alert and navigate to the landing page
        if (response.data == "New User Saved!") {
          alert("User added successufly");
          navigate("/");
        } else {
                    // If there is an error, display an alert

          alert("error while sign up");
        }
      })
      .catch((err) => console.log(err));

    // axios
    //   .post("http://localhost:3001/registration", {
    //     name: name,
    //     email: email,
    //     phoneNumber: phone,
    //     password: password,
    //     country: country,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };
  // Render the sign up form with a NavBar at the top and form inputs and a button
  return (
    <div>
      <NavBar />
      <div className="signup-main">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <p>Sign up for our organization</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone number"
          />
          <input
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="Country"
          />
          <div
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <input style={{ width: "7%", height: "100%" }} type="checkbox" />
            <small>By clicking you agree to terms and conditions</small>
          </div>
          <Button onClick={handleClick}>Signup !</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
