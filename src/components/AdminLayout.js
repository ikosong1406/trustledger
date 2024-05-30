import React from "react";
import { Outlet } from "react-router-dom";
import AdminSide from "./AdminSide";
import AdminTab from "./AdminTab";
import "../styles/Layout.css";
import { useWindowDimensions } from "./useWindowDimensions";

const AdminLayout = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="layout-container">
      {width > 925 ? (
        <div className="sidebar-container">
          <AdminSide />
        </div>
      ) : null}
      <div className="page-container">
        <Outlet />
      </div>
      {width <= 925 ? (
        <div className="bottom-tab-container">
          <AdminTab />
        </div>
      ) : null}
    </div>
  );
};

export default AdminLayout;
