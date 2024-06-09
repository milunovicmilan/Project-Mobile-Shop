import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Gundogan signed!",
      text: "Football master Ilkay Gundogan has joined FC Barcelona by signing a 2-year contract!",
    },
    {
      image: ChooseMeals,
      title: "Unstoppable",
      text: "In 10 games 4 hat tricks, when does he plan to stop? ",
    },
    {
      image: DeliveryMeals,
      title: "Possible return of the great king of our club",
      text: "There is speculation that Lionel Messi could return to the club where he spent most of his career",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Breaking news</p>
        <h1 className="primary-heading">Fresh news every week!</h1>
        <p className="primary-text">
        Every week we release new information related to our club!
        Good or bad, we share them with you
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
