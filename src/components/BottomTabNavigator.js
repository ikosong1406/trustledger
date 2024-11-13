// BottomTabNavigator.js
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/BottomTabNavigator.css";
import { AiFillPieChart } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { PiBankFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { MdJoinFull } from "react-icons/md";

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
        to="/dashboard/transaction"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <GrTransaction className="icon" />
      </NavLink>
      {/* <NavLink
        to="/dashboard/secure"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <MdSecurity className="icon" />
      </NavLink> */}
      <NavLink
        to="/dashboard/stake"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <PiBankFill className="icon" />
      </NavLink>
      <NavLink
        to="/dashboard/usertransaction"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <FaList className="icon" />
      </NavLink>
      <NavLink
        to="/dashboard/partner"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <MdJoinFull className="icon" />
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
