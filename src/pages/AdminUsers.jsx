// src/pages/AdminUsers.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaComments } from "react-icons/fa";
import "../styles/AdminUser.css";
import api from "../Api/BackendApi";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${api}/allUsers`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (users) => {
    navigate(`/admin/adminUserdetails`, { state: { users } });
  };

  const handleChatClick = (email) => {
    navigate("/admin/adminMessage", { state: { email } });
  };

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <ThreeCircles
            height="80"
            width="80"
            color={Colors.white}
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="adHomeMain">
          <div className="adHomeDiv1">
            <h1 style={{ color: Colors.white, marginLeft: 20 }}>Users</h1>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Balance</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Chat</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id.slice(-5)}</td>
                    <td>
                      {user.firstname} {user.lastname}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.balance}</td>
                    <td>
                      <span
                        className={`status-dot ${
                          user.status === "active"
                            ? "status-active"
                            : "status-blocked"
                        }`}
                      ></span>
                      {user.status}
                    </td>
                    <td>
                      <FaEdit
                        onClick={() => handleEditClick(user)}
                        style={{
                          cursor: "pointer",
                          fontSize: 18,
                          color: Colors.white,
                        }}
                      />
                    </td>
                    <td>
                      <FaComments
                        onClick={() => handleChatClick(user.email)}
                        style={{
                          cursor: "pointer",
                          fontSize: 18,
                          color: Colors.white,
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
