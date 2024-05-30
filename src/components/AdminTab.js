// BottomTabNavigator.js
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/BottomTabNavigator.css";
import { FaHome } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdOutlinePendingActions } from "react-icons/md";

const AdminTab = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bottom-tab-navigator">
      <NavLink
        to="/admin"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
        end
      >
        <FaHome className="icon" />
      </NavLink>
      <NavLink
        to="/admin/transact"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <GrTransaction className="icon" />
      </NavLink>
      <NavLink
        to="/admin/pending"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setShowNav(false)}
      >
        <MdOutlinePendingActions className="icon" />
      </NavLink>
    </div>
  );
};

export default AdminTab;
