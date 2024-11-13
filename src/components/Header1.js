import React, { useState } from "react";
import "../styles/Header1.css";
import { NavLink } from "react-router-dom";
import logo from "../images/bitvelar.png";

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
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <img src={logo} className="logoImage" />
        </NavLink>
      </div>

      <div className="navList">
        <NavLink to="/market" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Market</h3>
        </NavLink>
        <NavLink to="/privacy" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Privacy</h3>
        </NavLink>
        <NavLink to="/termsofuse" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Terms </h3>
        </NavLink>
      </div>

      <div className="authLinks">
        <NavLink to="/login" className="signBtn">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header1;
