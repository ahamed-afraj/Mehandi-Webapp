import React from "react";
import "./ContactTitle.css";

const ContactTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="title2-container">
      <p>{title}</p>
      <h1>{subtitle}</h1>
    </div>
  );
};

export default ContactTitle;
