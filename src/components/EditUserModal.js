// src/components/EditUserModal.jsx
import React, { useState } from "react";
import "../styles/Modal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import api from "../Api/BackendApi";

const EditUserModal = ({ user, closeModal }) => {
  const [formData, setFormData] = useState({
    Id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    balance: user.balance,
    status: user.status,
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

  return (
    <div className="modal">
      <div className="modal-content">
        <ToastContainer />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ color: "white" }}>Edit User</h2>
          <IoClose
            style={{
              fontSize: 25,
              alignSelf: "center",
              color: "white",
              cursor: "pointer",
            }}
            onClick={closeModal}
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
    </div>
  );
};

export default EditUserModal;
