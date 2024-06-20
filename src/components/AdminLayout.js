import React from "react";
import { Outlet } from "react-router-dom";
import AdminSide from "./AdminSide";
import "../styles/Layout.css";

const AdminLayout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar-container">
        <AdminSide />
      </div>
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
