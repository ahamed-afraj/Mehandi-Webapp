import React from "react";
import "./Hero.css";
import Button from "../Button/Button";
import whitearrow from "../../assets/white-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1 className="font-size">Let Your Hands Speak Beauty</h1>
        <p className="margin-bottom">
          Step into the world of Admiring Henna, where tradition meets artistry.
          Our stunning designs bring elegance and charm to your celebrations,
          making every moment extraordinary.
        </p>
        <Button buttonName="Explore Now" pageId="services" />
      </div>
    </div>
  );
};

export default Hero;
