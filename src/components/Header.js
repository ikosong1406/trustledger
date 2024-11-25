import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { FaPowerOff } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Colors from "./Colors";
import user from "../images/usericon.jpeg";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";

// Sample notifications
const sampleNotifications = [
  "Notification 1",
  "Notification 2",
  "Notification 3",
];

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [userData, setUserData] = useState({
    firstname: "",
  });
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);

  const fetchData = async () => {
    try {
      const userToken = await getUserToken();
      setToken(userToken);
      // console.log(token);
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getData = async () => {
    const data = { token };
    try {
      const response = await axios.post(`${BackendApi}/userdata`, data);
      const fetchedData = response.data.data;

      // Set default values if the fetched data is zero
      const updatedData = {
        firstname: fetchedData.firstname || "",
      };

      setUserData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      const interval = setInterval(() => {
        setRefreshing(true);
        getData();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [token]);

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search query:", searchQuery);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (hasUnreadNotifications) setHasUnreadNotifications(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="headerMain">
      <ToastContainer />

      <div className="headerDiv12">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <FaSearch
          style={{
            alignSelf: "center",
            cursor: "pointer",
            color: Colors.white,
          }}
          onClick={handleSearch}
        />
      </div>

      {/* <div className="headerDiv2">
        <div style={{ position: "relative" }}>
          <IoNotifications
            style={{ cursor: "pointer", color: Colors.white }}
            onClick={toggleModal}
          />
          {hasUnreadNotifications && (
            <span className="notificationIndicator"></span>
          )}
        </div>
      </div> */}

      <div style={{ alignSelf: "center", marginRight: 20 }}>
        <FaPowerOff
          style={{ fontSize: 25, color: Colors.white, alignSelf: "center" }}
          onClick={handleLogout}
        />
      </div>

      <div className="headerDiv3">
        <img src={user} />
        <div style={{ marginLeft: 10, marginRight: 10 }}>
          <h3>{userData.firstname}</h3>
          <h3 style={{ marginTop: -15 }}>Admin</h3>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Notifications"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Header;
