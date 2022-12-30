import React, { useEffect, useState } from "react";
import NavBar from "../Landing Page/NavBar";
import "./Volanter.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firstCard from "../../Images/first-card.jpg";
import VolanteCard from "./VolanterCard";
import { useDispatch, useSelector } from "react-redux";
import { test } from "../../Redux/volunteerReducer";
import axios from "axios";

const Volanter = () => {
  const cards = useSelector((state) => state.volunteer.data);
  const dispatch = useDispatch();

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
      <div className="main-volunteer">
        <h2 className="title">Volunteer</h2>
        <p>
          With us, the search for international talent becomes as easy as
          recruiting in your local market. It is attainable and gives access to
          young talents with the global network of AIESEC
        </p>
        <div className="cards-container">
          {cards.map((card) => (
            <VolanteCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volanter;
