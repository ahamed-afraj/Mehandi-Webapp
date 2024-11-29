import React from "react";
import { Link } from "react-scroll";
import whitearrow from "../../assets/white-arrow.png";
import "./Button.css";

const Button = (props) => {
  const { buttonName, pageId } = props;
  return (
    <Link
      to={pageId}
      smooth={true}
      width={500}
      offset={-110}
      duration={500}
      style={{ marginTop: 20 }}
      className="btn"
    >
      {buttonName}
    </Link>
  );
};

export default Button;
