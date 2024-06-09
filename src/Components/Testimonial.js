import React from "react";
import ProfilePic from "../Assets/barcelona-logo.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">About us</p>
        <h1 className="primary-heading">FCB Fans</h1>
        <p className="primary-text">
        The fan page also plays a crucial role in connecting fans with the club. Through interactive content such as quizzes, polls, and giveaways, supporters have the opportunity to showcase their knowledge, support, and love for the club. Additionally, through the fan page, fans can directly communicate with the club, ask questions, provide suggestions, and even have the chance to win exclusive prizes as a token of the club's appreciation for its loyal supporters.
Social connectivity is key to the FC Barcelona Fan Page. Through integration with social media, this page enables fans to share their favorite moments, comment on live matches, and follow club news from the comfort of their homes or on their mobile devices. This creates a sense of unity and belonging among fans worldwide, regardless of geographical origin.
In summary, the FC Barcelona Fan Page is more than just a website. It's a digital world where love for the club transforms into a community, where the past, present, and future of the club are celebrated, where passions are shared, and where fans connect on a global level. For all those who love Barça, this fan page is a virtual stadium where the heart of the club beats strongest.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Te resultaría difícil encontrar algo mejor que Barcelona para comer, en cuanto a ser un centro
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>FC Barcelona</h2>
      </div>
    </div>
  );
};

export default Testimonial;
