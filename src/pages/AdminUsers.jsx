import React, { useState, useEffect } from "react";
import api from "../Api/BackendApi";
import axios from "axios";
import "../styles/userList.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

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

  const handleUserStateChange = async (userId, newState) => {
    try {
      await axios.patch(`${api}/users/${userId}`, { state: newState });
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, state: newState } : user
        )
      );
    } catch (error) {
      console.error("Error updating user state:", error);
    }
  };

  return (
    <div className="user-list-container">
      <div className="userDiv3">
        <h2>DASHBOARD</h2>
      </div>
      <div className="userDiv1">
        <h3>User Id</h3>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Balance</h3>
        <h3>State</h3>
      </div>
      {users.map((user) => (
        <div key={user._id} className="userDiv2">
          <h3>
            <span className="m">User Id: </span>
            {user._id}
          </h3>
          <h3>
            <span className="m">User Name: </span>
            {user.firstname} {user.lastname}
          </h3>
          <h3>
            {" "}
            <span className="m">User Email: </span>
            {user.email}
          </h3>
          <h3>
            {" "}
            <span className="m">User Balance: </span>
            {user.balance}
          </h3>
          <select
            value={user.state}
            onChange={(e) => handleUserStateChange(user._id, e.target.value)}
            className="select"
          >
            <option value="active">Active</option>
            <option value="restricted">Restricted</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
