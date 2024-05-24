// BottomTabNavigator.js
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/BottomTabNavigator.css";
import { AiFillPieChart } from "react-icons/ai";
import { PiHandDepositFill, PiHandWithdrawFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const BottomTabNavigator = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bottom-tab-navigator">
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
        end
      >
        <AiFillPieChart className="icon" />
      </NavLink>
      <NavLink
        to="/dashboard/deposit"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <PiHandDepositFill className="icon" />
      </NavLink>
      <NavLink
        to="/dashboard/withdrawal"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <PiHandWithdrawFill className="icon" />
      </NavLink>
      <NavLink
        to="/dashboard/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <IoSettings className="icon" />
      </NavLink>
      <NavLink
        to="/dashboard/accounts"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <FaUser className="icon" />
      </NavLink>
    </div>
  );
};

export default BottomTabNavigator;
