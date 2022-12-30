import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import NavBar from "../Landing Page/NavBar";
import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Anything");

    axios
      .post("https://expa-server.onrender.com/registration", {
        name: name,
        email: email,
        phoneNumber: phone,
        password: password,
        country: country,
      })
      .then((response) => {
        if (response.data == "New User Saved!") {
          alert("User added successufly");
          navigate("/");
        } else {
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
