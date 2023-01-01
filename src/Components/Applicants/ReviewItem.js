import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ name, email, phone }) => {
  return (
    <>
      <div className="item-main">
        <div className="item">
          <p>Name :</p>
          <p>{name}</p>
        </div>
        <div className="item">
          <p>Email :</p>
          <p>{email}</p>
        </div>
        <div className="item">
          <p>Phone number :</p>
          <p>{phone}</p>
        </div>
      </div>
      <hr style={{ width: "80%" }} />
    </>
  );
};

export default ReviewItem;
