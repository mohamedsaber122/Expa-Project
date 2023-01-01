import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ name, email, phone }) => {
  return (
    <div>
      <div>
        <h2>item</h2>
        <p>{email} </p>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
