import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firstCard from "../../Images/first-card.jpg";
import { useDispatch } from "react-redux";
import { setCustom } from "../../Redux/volunteerReducer";
import { useNavigate } from "react-router-dom";
const VolanteCard = ({ image, title, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    const data = {
      image: image,
      title: title,
      description: description,
    };
    dispatch(setCustom(data));
    navigate("/data");
  };
  return (
    <div>
      <Card style={{ width: "18rem", backgroundColor: " rgb(245,245,245)" }}>
        <Card.Img variant="top" src={image} className="card-image" />
        <Card.Body style={{ width: "140%" }}>
          <Card.Title>{title} </Card.Title>
          <Card.Text className="card-text">{description}</Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "80px",
            }}
          >
            <Button onClick={handleClick} variant="primary">
              Apply <span>→</span>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default VolanteCard;
