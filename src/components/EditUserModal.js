// src/components/EditUserModal.jsx
import React, { useState } from "react";

const EditUserModal = ({ user, closeModal }) => {
  const [formData, setFormData] = useState({
    name: user.name,
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

  const handleSave = () => {
    // Save changes to the server
    console.log("User details updated:", formData);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
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
            <option value="Active">Active</option>
            <option value="Blocked">Blocked</option>
          </select>
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default EditUserModal;
