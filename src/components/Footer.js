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
      </div>
      <h3 style={{ textAlign: "center" }}>© Trustledger 2024</h3>
    </div>
  );
};

export default Footer;
