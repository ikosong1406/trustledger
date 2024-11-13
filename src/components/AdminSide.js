import { useState } from "react";
import "../styles/Sidebar.css";
import logo from "../images/bitvelar.png";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { AiFillMessage } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

const AdminSide = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="sideDiv1">
      <div className="sideDiv2">
        <img src={logo} alt="logo" />
      </div>
      <div className="sideDiv3">
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
          end
        >
          <FaHome className="icon" />
        </NavLink>
        <NavLink
          to="/admin/adminUsers"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
          end
        >
          <FaUser className="icon" />
        </NavLink>
        <NavLink
          to="/admin/adminTransact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <GrTransaction className="icon" />
        </NavLink>
        {/* <NavLink
          to="/admin/adminMessage"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <AiFillMessage className="icon" />
        </NavLink> */}
        <NavLink
          to="/admin/adminPayment"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <FaCreditCard className="icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSide;
