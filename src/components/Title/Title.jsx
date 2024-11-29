import React from "react";
import "./Title.css";

const Title = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="title-container">
      <h1 style={{ fontFamily: "serif" }}>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;
