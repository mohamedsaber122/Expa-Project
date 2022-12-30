import React, { useEffect, useState } from "react";
import NavBar from "../Landing Page/NavBar";
import "./Volanter.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firstCard from "../../Images/first-card.jpg";
import VolanteCard from "./VolanterCard";
import { useDispatch, useSelector } from "react-redux";
import { addData, test } from "../../Redux/volunteerReducer";
import axios from "axios";

const Volanter = () => {
  const dispatch = useDispatch();
  const [cards, setCards] = useState();
  useEffect(() => {
    setTimeout(() => {}, 5000);
    alert("Signed in");
    axios
      .post("https://expa-server.onrender.com/getProject", {})
      .then((response) => {
        console.log(response);
        setCards(response.data);
      })
      .catch((err) => console.log(err));
    setTimeout(() => {}, 5000);
  }, []);
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
              title={card.ProjectName}
              description={card.ProjectDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volanter;
