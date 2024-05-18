import React from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "../styles/MobileMenuModal.css";
import logo from "../images/logo.png";

const MobileMenuModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="mobileLogo">
          <div className="logoDiv">
            <img src={logo} className="logoImage" />
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <h2 className="logo">TRUST LEDGER</h2>
            </NavLink>
          </div>
          <ImCross onClick={onClose} className="Icon1" />
        </div>

        <div className="mobile1">
          <NavLink className="link" to="/about">
            About Us
          </NavLink>
          <NavLink className="link" to="/termsofuse">
            Terms of Use
          </NavLink>
          <NavLink className="link" to="/riskwarning">
            Risk Warnings
          </NavLink>
          <NavLink className="link" to="/support">
            Support
          </NavLink>
        </div>

        <div className="login-section">
          <div className="mobile2">
            <NavLink className="loginBtn" to="/login">
              Login
            </NavLink>
            <NavLink className="signBtn" to="/register">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuModal;
