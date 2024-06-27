import React, { useState } from "react";
import "../styles/Modal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import api from "../Api/BackendApi";

const EditMethodModal = ({ method, closeModal }) => {
  const [formData, setFormData] = useState({
    Id: method._id,
    name: method.name,
    network: method.network,
    walletAddress: method.walletAddress,
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
      id: formData.Id,
      name: formData.name,
      network: formData.network,
      walletAddress: formData.walletAddress,
    };
    try {
      const response = await axios.post(`${api}/editMethod`, data);
      toast.success("Deposit Method updated successfully");
    } catch (error) {
      toast.error("Error updating method details:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <ToastContainer />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ color: "white" }}>Edit Method</h2>
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
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Network:
          <input
            type="text"
            name="network"
            value={formData.network}
            onChange={handleChange}
          />
        </label>
        <label>
          Wallet Address:
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditMethodModal;
