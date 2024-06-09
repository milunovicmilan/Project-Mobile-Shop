import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Robert Lewandowski
          </h1>
          <p className="primary-text">
          One of the best strikers ever, the Polish forward's stats speak for themselves.
          The striker from Poland stands out for his goalscoring abilities. Inside the box he has all the tools to make him a difficult striker to read as he can find the net with his head and both feet with equal precision. 
          
          </p>
          <button className="secondary-button">
            Read more <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;