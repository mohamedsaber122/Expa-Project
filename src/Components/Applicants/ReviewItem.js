import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ name, email, phone }) => {
  return (
    <>
      <div className="item-main">
        <div className="item">
          <div>
            <p>Name :</p>
          </div>
          <div>
            <b>{name}</b>
          </div>
        </div>
        <div className="item">
          <div>
            <p>Email :</p>
          </div>
          <div>
            <b>{email}</b>
          </div>
        </div>
        <div className="item">
          <div>
            <p>Phone number :</p>
          </div>
          <div>
            <b>{phone}</b>
          </div>
        </div>
        <div className="item check">
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
