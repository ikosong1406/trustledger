import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerDiv1">
      <div className="footerDiv2">
        <div className="footerDiv4">
          <div className="footerDiv3">
            <h2 className="legal">Legal</h2>
            <Link to="/privacy" className="legal1">
              Privacy Policy
            </Link>
            <Link to="/termsofuse" className="legal1">
              Terms of Use
            </Link>
            <Link to="/risk" className="legal1">
              Risk Warning
            </Link>
          </div>
          <div className="footerDiv3">
            <h2 className="legal">Service</h2>
            <Link to="/fee" className="legal1" style={{ marginTop: -10 }}>
              Buy Crypto
            </Link>
            <Link to="/referal" className="legal1" style={{ marginTop: -10 }}>
              Partnership
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
      <h3
        style={{
          textAlign: "center",
          fontSize: 10,
          fontFamily: "Roboto sans-serif",
        }}
      >
        Copyright © 2024 bitvelar. All rights reserved
      </h3>
    </div>
  );
};

export default Footer;
