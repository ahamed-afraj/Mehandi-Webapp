import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/hennalogo.png";
import menu_icon from "../../assets/menu-icon.png";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".container");
      if (window.scrollY > 550) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Subtle white overlay
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="container">
      <img className="logo" src={logo} alt="Henna Logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link
            to="hero"
            smooth={true}
            offset={0}
            activeClass="active"
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="services"
            smooth={true}
            offset={-110}
            duration={500}
            activeClass="active"
            onClick={closeMenu}
          >
            Services
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="about"
            smooth={true}
            offset={-135}
            duration={500}
            activeClass="active"
            onClick={closeMenu}
          >
            About Us
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="gallery"
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
            onClick={closeMenu}
          >
            Gallery
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            id="widthspec"
            to="contact"
            smooth={true}
            offset={-210}
            duration={500}
            activeClass="active"
            onClick={closeMenu}
          >
            Contact Us
          </Link>{" "}
        </li>
      </ul>
      <svg
        className={mobileMenu ? "" : "hide-close-menu"}
        onClick={toggleMenu}
        width="20"
        height="20"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3216 0.678819C14.6963 1.05359 14.6963 1.66113 14.3216 2.0359L2.10786 14.2521C1.73306 14.627 1.1253 14.627 0.750501 14.2521V14.2521C0.375808 13.8774 0.375807 13.2698 0.750501 12.8951L12.9642 0.678818C13.339 0.303939 13.9468 0.30394 14.3216 0.678819V0.678819Z"
          fill="white"
        />
        <path
          d="M14.2495 14.3212C14.6242 13.9464 14.6242 13.3389 14.2495 12.9641L2.03576 0.747858C1.66096 0.372979 1.0532 0.372981 0.678402 0.74786V0.74786C0.303708 1.12263 0.303708 1.73017 0.678402 2.10494L12.8921 14.3212C13.2669 14.6961 13.8747 14.6961 14.2495 14.3212V14.3212Z"
          fill="white"
        />
      </svg>

      <img
        className={!mobileMenu ? "menu-icon" : "hide-close-menu "}
        src={menu_icon}
        alt=""
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
