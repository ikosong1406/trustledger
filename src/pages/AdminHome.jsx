// UserListComponent.js
import React, { useState, useEffect } from "react";
import api from "../Api/BackendApi";
import axios from "axios";
import "../styles/userList.css";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${api}/allUsers`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  fetchUsers()
    .then((users) => {
      // console.log("Users:", users);
      const data = users;
      setUsers(data);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

  // const handleDeleteUser = async (userId) => {
  //   try {
  //     await fetch(`backend/users/${userId}`, {
  //       method: "DELETE", // Assuming your backend API supports DELETE method for deleting users
  //     });
  //     setUsers(users.filter((user) => user.id !== userId));
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  // };

  return (
    <div>
      <div className="userDiv1">
        <h3>User Id</h3>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Balance</h3>
      </div>
      {users.map((user) => (
        <div className="userDiv2">
          <h3>{user._id}</h3>
          <h3>
            {user.firstname}
            <span />
            {user.lastname}
          </h3>
          <h3>{user.email}</h3>
          <h3>{user.totalbalance}</h3>
        </div>
      ))}
    </div>
  );
};

export default Userlist;
