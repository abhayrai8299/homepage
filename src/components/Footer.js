import React from "react";
import Logo from "./images/logo.svg";
import '../index.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
        <div className="footer_text">
        <h5>HOME</h5>
        <h5>ABOUT US</h5>
        <h5>OUR SERVICES</h5>
        </div>
    </div>
  );
};

export default Footer;
