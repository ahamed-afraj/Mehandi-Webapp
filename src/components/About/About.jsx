import React from "react";
import "./About.css";
import about_img from "../../assets/visuals3.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>Admiring the Elegance of Henna </h3>
        <p>
          At Admiring Henna, we embrace the timeless beauty of Mehndi as a
          celebration of culture, creativity, and elegance. Rooted in tradition
          and inspired by sunnah, Henna holds a special place in Islamic
          heritage as a symbol of beauty and blessings. We specialize in
          crafting intricate designs—traditional, Arabic, and modern—that tell
          stories of elegance and joy. Whether it's a wedding, festival, or any
          special occasion, our organic, skin-friendly Mehndi ensures vibrant,
          long-lasting designs that leave an impression. Let Admiring Henna
          adorn your moments with grace, turning every occasion into an
          unforgettable masterpiece blessed with beauty and tradition.
        </p>
      </div>
    </div>
  );
};

export default About;
