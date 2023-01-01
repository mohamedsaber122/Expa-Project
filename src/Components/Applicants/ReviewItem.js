import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ name, email, phone }) => {
  return (
    <div className="item-main">
      <div className="item">
        <label>Name :</label>
        <p>{name}</p>
      </div>
      <div className="item">
        <label>Email :</label>
        <p>{email}</p>
      </div>
      <div className="item">
        <label>Phone number</label>
        <p>{phone}</p>
      </div>
      <hr />
    </div>
  );
};

export default ReviewItem;
