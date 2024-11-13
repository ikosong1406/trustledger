import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Colors from "../components/Colors";
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
    stakingBalance: user?.stakingBalance || "",
    securityPhrase: user?.securityPhrase || [],
    staking: user?.staking || [],
    transactions: user?.transactions || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (arrayName, index, e) => {
    const { name, value } = e.target;
    const updatedArray = [...formData[arrayName]];
    updatedArray[index] = { ...updatedArray[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: updatedArray,
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

  const formatDate = (dateObj) => {
    if (!dateObj || !dateObj.$date) return "";
    const dateLong = dateObj.$date.$numberLong || dateObj.$date;
    return new Date(parseInt(dateLong)).toISOString().split("T")[0];
  };

  return (
    <div className="adHomeMain" style={{ minHeight: 500 }}>
      <ToastContainer />
      <div style={{ display: "flex" }}>
        <h1 style={{ color: Colors.white }}>Edit User</h1>
      </div>
      <h3>First Name:</h3>
      <input
        type="text"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
      />

      <h3>Last Name:</h3>
      <input
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />

      <h3>Email:</h3>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <h3>Balance:</h3>
      <input
        type="number"
        name="balance"
        value={formData.balance}
        onChange={handleChange}
      />
      <h3>Fixed Capital:</h3>
      <input
        type="number"
        name="stakingBalance"
        value={formData.stakingBalance}
        onChange={handleChange}
      />
      <h3>Status:</h3>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        style={{ width: "50%", height: 40 }}
      >
        <option value="active">Active</option>
        <option value="blocked">Blocked</option>
      </select>

      <div style={{ paddingRight: 20, marginTop: 20 }}>
        <h3>Fixed Capital Transactions:</h3>
        {formData.staking.map((stake, index) => (
          <div
            key={stake._id}
            style={{
              borderBottom: "1px solid white",
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: 20 }}>
                <h3>Amount: ${stake.amount}</h3>
                <h3>Days: {stake.days}</h3>
                <h3>Rate: {stake.rate}%</h3>
              </div>
            </div>

            <div>
              <p style={{ color: "gray" }}>
                <span
                  className={`status-dot ${
                    stake.status === "completed"
                      ? "status-active"
                      : "status-pending"
                  }`}
                ></span>
                <select
                  name="status"
                  value={stake.status}
                  onChange={(e) => handleArrayChange("staking", index, e)}
                >
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </select>
              </p>
              <p style={{ color: "gray" }}>{stake.startDate}</p>
              <p style={{ color: "gray" }}>{stake.endDate}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>Security Phrase:</h3>
      <div className="security-phrase-grid">
        {formData.securityPhrase.map((phrase, index) => (
          <div key={index} className="security-phrase-item">
            {phrase}
          </div>
        ))}
      </div>

      <div style={{ paddingRight: 20, marginTop: 20 }}>
        <h3>Transactions:</h3>
        {formData.transactions.map((transaction, index) => (
          <div
            key={transaction._id}
            style={{
              borderBottom: "1px solid white",
              marginTop: 10,
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: 10,
              paddingRight: 20,
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: 20 }}>
                <h3>
                  {transaction.type.charAt(0).toUpperCase() +
                    transaction.type.slice(1)}
                </h3>
                <h3>${transaction.amount}</h3>
                <h3>${transaction.profit}</h3>
              </div>
            </div>

            <div>
              <p style={{ color: "gray" }}>
                <span
                  className={`status-dot ${
                    transaction.status === "confirmed"
                      ? "status-active"
                      : "status-pending"
                  }`}
                ></span>
                <select
                  name="status"
                  value={transaction.status}
                  onChange={(e) => handleArrayChange("transactions", index, e)}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </p>
              <p style={{ color: "gray" }}>{transaction.date}</p>
              <p style={{ color: "gray" }}>{transaction.dueDate}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 30 }}>
        <button
          onClick={handleSave}
          style={{ height: 40, width: "25%", borderRadius: 10, border: "none" }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AdminUserdetails;
