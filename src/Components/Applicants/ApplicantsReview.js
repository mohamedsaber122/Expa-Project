import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Landing Page/NavBar";
import "./ApplicantsReview.css";
import ReviewItem from "./ReviewItem";
const ApplicantsReview = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("https://expa-server.onrender.com/getUser", {})
      .then((response) => {
        console.log(response);
        setData(response.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <NavBar />
      <div className="review-main">
        <h2>Applicants Review</h2>
        <div className="review-items">
          {data.map((item) =>
            item.map((i) => (
              <ReviewItem email={i.email} name={i.name} phone={i.phoneNumber} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicantsReview;
