import React from "react";
import "./Services.css";
import Button from "../Button/Button";
import bridal_henna from "../../assets/bridal_henna3.jpg";
import bridesmaid from "../../assets/bridesmaid1.jpg";
import babyshower_henna from "../../assets/babyshower_henna1.jpg";
import guest_henna from "../../assets/guest_henna.jpg";

const Services = () => {
  return (
    <div id="services" className="service">
      <div className="card services">
        <div className="image-box">
          <img src={bridal_henna} />
          <center>
            <h2 className="service-title">Bridal Henna</h2>
            <Button
              style={{ marginTop: 20 }}
              offset={-210}
              pageId="contact"
              className="btn btnn"
              buttonName="Enquire Now"
            />
          </center>
        </div>
        <div className="content">
          <p>
            Bridal henna is a beautiful tradition symbolizing love, joy, and
            blessings. Intricate designs adorn the bride’s hands and feet,
            reflecting elegance and cultural heritage.
          </p>
        </div>
      </div>
      <div className="card services">
        <div className="image-box">
          <img src={bridesmaid} />
          <center>
            <h2
              style={{ fontFamily: "Times New Roman" }}
              className="service-title"
            >
              Bridedmaid Henna
            </h2>
            <Button
              style={{ marginTop: 20 }}
              offset={-210}
              pageId="contact"
              className="btn btnn"
              buttonName="Enquire Now"
            />
          </center>
        </div>
        <div className="content">
          <p>
            Bridesmaid henna adds charm to wedding celebrations, with elegant
            designs that complement the bridal theme and celebrate friendship
            and joy.
          </p>
        </div>
      </div>
      <div className="card services">
        <div className="image-box">
          <img src={babyshower_henna} />
          <center>
            <h2
              style={{ fontFamily: "Times New Roman" }}
              className="service-title"
            >
              Baby Shower Henna
            </h2>
            <Button
              style={{ marginTop: 20 }}
              offset={-210}
              pageId="contact"
              className="btn btnn"
              buttonName="Enquire Now"
            />
          </center>
        </div>
        <div className="content">
          <p>
            Baby shower henna celebrates the mother-to-be with delicate,
            meaningful designs, symbolizing love, blessings, and the joy of new
            beginnings.
          </p>
        </div>
      </div>
      <div className="card services">
        <div className="image-box">
          <img src={guest_henna} />
          <center>
            <h2
              style={{ fontFamily: "Times New Roman" }}
              className="service-title"
            >
              Guest Henna
            </h2>
            <Button
              style={{ marginTop: 20 }}
              offset={-210}
              pageId="contact"
              className="btn btnn"
              buttonName="Enquire Now"
            />
          </center>
        </div>
        <div className="content">
          <p>
            Guest henna brings everyone together with beautiful, quick designs,
            letting every attendee feel included in the celebration of love and
            culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
