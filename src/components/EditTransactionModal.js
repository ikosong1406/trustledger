// src/components/EditTransactionModal.jsx
import React, { useState } from "react";
import "../styles/Modal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import api from "../Api/BackendApi";
import Colors from "./Colors";

const EditTransactionModal = ({ transaction, closeModal }) => {
  const [formData, setFormData] = useState({
    Id: transaction._id,
    status: transaction.status,
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
      transactionId: formData.Id,
      status: formData.status,
    };
    try {
      const response = await axios.post(`${api}/adminEdittransaction`, data);
      toast.success("Transaction details updated successfully");
    } catch (error) {
      toast.error("Error updating Transaction details:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <ToastContainer />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ color: "white" }}>Edit Transaction</h2>
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
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="confirmed">Approved</option>
          </select>
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditTransactionModal;
