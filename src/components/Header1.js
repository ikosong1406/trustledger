import React, { useState } from "react";
import "../styles/Header1.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenuModal from "./MobileMenuModal";
import logo from "../images/logo.png";

const Header1 = ({ clicked, setClicked }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModal, setProfile] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Profile = () => {
    setProfile(!profileModal);
  };

  return (
    <div className="head1Div1">
      <div className="logoDiv">
        <img src={logo} className="logoImage" />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h2 className="logo">TRUST LEDGER</h2>
        </NavLink>
      </div>

      <div className="navList">
        <NavLink to="/about" className="navItems">
          About Us
        </NavLink>
        <NavLink to="/termsofuse" className="navItems">
          Terms of Use
        </NavLink>
        <NavLink to="/riskwarning" className="navItems">
          Risk Warnings
        </NavLink>
        <NavLink to="/support" className="navItems">
          Support
        </NavLink>
      </div>

      <div className="authLinks">
        <NavLink to="/login" className="loginBtn">
          Login
        </NavLink>
        <NavLink to="/register" className="signBtn">
          Register
        </NavLink>
      </div>

      <div>
        <GiHamburgerMenu onClick={toggleModal} className="Icon" />
      </div>
      <MobileMenuModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Header1;
