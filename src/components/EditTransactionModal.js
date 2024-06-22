// src/components/EditTransactionModal.jsx
import React, { useState } from "react";

const EditTransactionModal = ({ transaction, closeModal }) => {
  const [formData, setFormData] = useState({
    type: transaction.type,
    amount: transaction.amount,
    method: transaction.method,
    address: transaction.address,
    status: transaction.status,
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
    console.log("Transaction details updated:", formData);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Transaction</h2>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Method:
          <input
            type="text"
            name="method"
            value={formData.method}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Declined">Declined</option>
          </select>
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTransactionModal;
