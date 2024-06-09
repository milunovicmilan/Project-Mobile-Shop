import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Newcomer</p>
        <h1 className="primary-heading">
         Ilkay Gündogan
        </h1>
        <p className="primary-text">
        With extensive experience of elite football, Gündoğan is an all-round midfielder who has also developed into a great goalscorer
        </p>
        <p className="primary-text">
        İlkay Gündoğan (24 October 1990, Gelsenkirchen, Germany), born to a Turkish family, is a midfielder who joined Barça in the summer of 2023 shortly after winning the Champions League as Manchester City captain and being a fundamental part of the all-conquering sky blue squad.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Read more</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
