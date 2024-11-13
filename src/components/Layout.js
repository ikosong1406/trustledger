import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import BottomTabNavigator from "./BottomTabNavigator";
import "../styles/Layout.css";
import { useWindowDimensions } from "./useWindowDimensions";

const Layout = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="layout-container">
      {width > 925 ? (
        <div className="sidebar-container">
          <Sidebar />
        </div>
      ) : null}
      <div className="page-container">
        <Outlet />
      </div>
      {width <= 925 ? (
        <div className="bottom-tab-container">
          <BottomTabNavigator />
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
