import React from "react";
import NavBar from "../Landing Page/NavBar";
import "./Donation.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
const Donation = () => {
    // state variables for managing form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
    // function for navigating to different routes  
  const navigate = useNavigate();
 // function to handle the form submission
  // sends a post request to the server with the form input data
  // displays an alert and navigates to the home page upon successful submission

  const handleClick = () => {
    axios
      .post("https://expa-server.onrender.com/SendDonation", {
        name: name,
        email: email,
        phoneNumber: phone,
        amount: amount,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    alert("Thank you for donation");
    navigate("/");
  };
  return (
    <div>
      <NavBar />
      <div className="signup-main">
        <div className="signup-container">
          <h2>Donation</h2>
          <p>
            Please fill in the following information. We thank you alot for your
            genrious donation !
          </p>
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
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone number"
          />
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="Amount"
          />

          <Button onClick={handleClick}>Pay with fawry</Button>
          <Button onClick={handleClick}>Pay with visa</Button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
