import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "74fdeba4-0668-448f-bde1-afc5161a2b96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          Feel free to reach out to us through the contact form below or connect
          with us directly using the contact details provided. Whether you have
          questions, need a quote, or want to book a session, we’re here to
          help! Let’s work together to bring your dream Mehndi designs to life.
          We look forward to hearing from you!
        </p>
        <ul>
          <li>
            <MdEmail className="icon" size={30} />{" "}
            <a
              href="admiringhenna@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              admiringhenna@gmail.com
            </a>
          </li>
          <li>
            <FaPhoneAlt className="icon" size={25} />{" "}
            <a href="tel: +91 91505 36113" aria-label="Phone">
              +91 91505 36113
            </a>
          </li>
          <li>
            <FaSquareInstagram className="icon" size={30} />
            <a
              href="https://www.instagram.com/admiringhenna?igsh=NXh5M3Y4dWh6bHVj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              admiringhenna
            </a>
          </li>
          <li>
            <ImLocation className="icon" size={30} />
            <a
              href="https://maps.app.goo.gl/6c3YueFQGA7R8RTXA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
            >
              ISED Nagar, Parakkai, <br /> Nagercoil- 629002
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <iframe
          aria-label="Contact Us"
          src="https://forms.zohopublic.in/thasneem6799gm1/form/ContactUs/formperma/vhDdE7WZb7jX9fb8r-EMvhTDH4LN2YgWOqG5Nl3Jj3s"
          frameBorder="0" // React uses `frameBorder` instead of `frameborder`.
          style={{ height: "500px", width: "99%", border: "none" }}
        ></iframe>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
