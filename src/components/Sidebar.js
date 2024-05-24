import { useState } from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { AiFillPieChart } from "react-icons/ai";
import { PiHandDepositFill } from "react-icons/pi";
import { PiHandWithdrawFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="sideDiv1">
      <div className="sideDiv2">
        <h1 className="logo">F</h1>
      </div>
      <div className="sideDiv3">
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
    </div>
  );
};

export default Sidebar;
