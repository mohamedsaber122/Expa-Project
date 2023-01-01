import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ name, email, phone }) => {
  return (
    <>
      <div className="item-main">
        <div className="item">
          <p>Name :</p>
          <b>{name}</b>
        </div>
        <div className="item">
          <p>Email :</p>
          <b>{email}</b>
        </div>
        <div className="item">
          <p>Phone number :</p>
          <b>{phone}</b>
        </div>
        <div className="item check">
          <div><input type="checkbox" /> </div> <div> <label>Reviewed</label> </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ReviewItem;
