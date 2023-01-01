import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ name, email, phone }) => {
  return (
    <>
      <div className="item-main">
        <div className="item">
          <p>Name :</p>
          <p>
            <b> {name} </b>
          </p>
        </div>
        <div className="item">
          <p>Email :</p>
          <p><b> {email} </b></p>
        </div>
        <div className="item">
          <p>Phone number :</p>
          <p> <b>{phone} </b></p>
        </div>
        <div className="item">
          <div>
            <input type="checkbox" />{" "}
          </div>{" "}
          <div>
            {" "}
            <label>Reviewed</label>{" "}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ReviewItem;
