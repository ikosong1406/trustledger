import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import EditUserModal from "../components/EditUserModal";
import "../styles/AdminUser.css";
import Colors from "../components/Colors";
import api from "../Api/BackendApi";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <EditUserModal user={selectedUser} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AdminUsers;
