import { useState } from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdOutlinePendingActions } from "react-icons/md";

const AdminSide = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="sideDiv1">
      <div className="sideDiv2">
        <h1 className="logo">TL</h1>
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
    </div>
  );
};

export default AdminSide;
