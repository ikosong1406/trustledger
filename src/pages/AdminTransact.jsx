// TransactionComponent.js
import React, { useState } from "react";
import "../styles/adminTransaction.css";
import axios from "axios";
import api from "../Api/BackendApi";

const Transaction = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [userId1, setUserId1] = useState("");
  const [amount1, setAmount1] = useState(0);

  const handleDeposit = async () => {
    try {
      const data = {
        userId,
        amount,
      };
      const response = await axios.post(`${api}/adminDeposit`, data);
      console.log("Response:", response.data);
      if (response.data.status === "ok") {
        alert("Deposit successful");
        setUserId("");
        setAmount(0);
      } else {
        alert("Invalid deposit request");
      }
    } catch (error) {
      console.error("Error depositing:", error);
      alert("Error occurred while depositing. Please try again.");
    }
  };

  const handleWithdraw = async () => {
    try {
      const data = {
        userId1,
        amount1,
      };
      const response = await axios.post(`${api}/adminWithdrawal`, data);
      console.log("Response:", response.data);
      if (response.data.status === "ok") {
        alert("Withdrawal successful");
        setUserId("");
        setAmount(0);
      } else {
        alert("Invalid withdrawal request");
      }
    } catch (error) {
      console.error("Error depositing:", error);
      alert("Error occurred while depositing. Please try again.");
    }
  };

  return (
    <div className="admintransMain">
      <div className="userDiv3">
        <h2>TRANSACTION </h2>
      </div>
      <h2 className="header">Deposit</h2>
      <div className="admintransDiv1">
        <h3> User Id </h3>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          className="input"
        />
        <h3> Amount </h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Amount"
          className="input"
        />
        <button onClick={handleDeposit} className="btn">
          Deposit
        </button>
      </div>

      <h2 className="header1">Withdrawal</h2>
      <div className="admintransDiv1">
        <h3> User Id </h3>
        <input
          type="text"
          value={userId1}
          onChange={(e) => setUserId1(e.target.value)}
          placeholder="User ID"
          className="input"
        />
        <h3> Amount </h3>
        <input
          type="number"
          value={amount1}
          onChange={(e) => setAmount1(parseFloat(e.target.value))}
          placeholder="Amount"
          className="input"
        />
        <button onClick={handleWithdraw} className="btn">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Transaction;
