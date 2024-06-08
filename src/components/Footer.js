import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footerDiv1">
        <div className="footerDiv2">
          <div className="logoDiv">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <img src={logo} className="logoImage" />
            </NavLink>
          </div>

          <div className="footerDiv4">
            <div className="footerDiv3">
              <h2 className="legal">Legal</h2>
              <Link to="/privacy" className="legal1">
                Privacy Policy
              </Link>
              <Link to="/termsofuse" className="legal1">
                Terms of Use
              </Link>
            </div>
            <div className="footerDiv3">
              <h2 className="legal">Legal</h2>
              <Link to="/security" className="legal1">
                Security
              </Link>
              <Link to="/risk" className="legal1">
                Risk Warning
              </Link>
            </div>
          </div>
          <div className="footerDiv4">
            <div className="footerDiv3">
              <h2 className="legal">Help</h2>
              <Link to="/faq" className="legal1">
                FAQ
              </Link>
            </div>
            <div className="footerDiv3">
              <h2 className="legal">Company</h2>
              <Link to="/about" className="legal1">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
