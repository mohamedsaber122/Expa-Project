import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Landing Page/NavBar";
import "./ApplicantsReview.css";
import ReviewItem from "./ReviewItem";
const ApplicantsReview = () => {
    // state variable to store the data retrieved from the server
  const [data, setData] = useState([]);
  // useEffect hook to perform an effect when the component mounts
  // sends a post request to the server to retrieve user data
  // updates the data state variable with the response from the server
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
          <hr></hr>
          {data.map((item) => (
            <ReviewItem
              email={item.email}
              name={item.name}
              phone={item.phoneNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantsReview;
