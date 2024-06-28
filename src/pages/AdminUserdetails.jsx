// src/pages/UserDetailsPage.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import api from "../Api/BackendApi";
import "../styles/Modal.css"; // You can rename this file if necessary
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate

const AdminUserdetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.users; // Use optional chaining to avoid errors

  const [formData, setFormData] = useState({
    Id: user?._id || "",
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    balance: user?.balance || "",
    status: user?.status || "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const data = {
      userId: formData.Id,
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      balance: formData.balance,
      status: formData.status,
    };
    try {
      const response = await axios.post(`${api}/adminEdituser`, data);
      toast.success("User details updated successfully");
    } catch (error) {
      toast.error("Error updating user details:", error);
    }
  };

  if (!user) {
    // If user is undefined, display an error message or redirect
    return (
      <div className="page-content">
        <h2>User not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="page-content">
      <ToastContainer />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Edit User</h2>
        <IoClose
          style={{
            fontSize: 25,
            alignSelf: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
      </div>
      <label>
        First Name:
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Balance:
        <input
          type="number"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="blocked">Blocked</option>
        </select>
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminUserdetails;
