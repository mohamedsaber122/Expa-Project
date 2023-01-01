import React from "react";
import NavBar from "../Landing Page/NavBar";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="about-main">
        <div>
          <h2>About us</h2>
        </div>
        <div className="about-boxes">
          <div className="about-box box1">
            <h2>About AIESEC</h2>
            <p>
              AIESEC is the world's largest youth-run organization. It is an
              international non-governmental and Not-for-profit that provides
              young people with leadership development, cross-cultural any
              internships, and volunteer exchange experiences across the globe.
            </p>
          </div>
          <div className="about-box box2">
            <h2>Our Vision</h2>
            <p>
              We strive to build a world where people can work towards their own
              understanding of 'peace' while acknowledging and respecting the
              views of others. Additionally, we strive for a world where through
              "fulfilment of humankind's potential", people can be the best
              version of themselves.
            </p>
          </div>
          <div className="about-box box3">
            <h2>How we do it ?</h2>
            <p>
              We develop youth leadership through learning from practical
              experiences in challenging environments by facilitating
              cross-cultural exchange and creating these opportunities in
              membership roles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
