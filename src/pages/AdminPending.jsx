// PendingTransactionComponent.js
import React, { useState } from "react";
import api from "../Api/BackendApi";
import axios from "axios";
import "../styles/pendingTransaction.css";

const PendingTransactionComponent = () => {
  const [pendingTransactions, setPendingTransactions] = useState([]);
  const [transactionId, setTransactionId] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/allTransaction`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  fetchData()
    .then((pendingTransactions) => {
      const data = pendingTransactions;
      setPendingTransactions(data);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });

  const handleConfirmTransaction = async () => {
    try {
      const data = {
        transactionId,
      };
      const response = await axios.post(`${api}/confirmTransaction`, data);
      console.log("Response:", response.data);
      if (response.data.status === "ok") {
        alert("Transaction Confirmed");
        setTransactionId("");
      } else {
        alert("Invalid transaction request");
      }
    } catch (error) {
      console.error("Error depositing:", error);
      alert("Error occurred while depositing. Please try again.");
    }
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          placeholder="Transaction ID"
          className="inputT"
        />
        <button onClick={handleConfirmTransaction} className="btn1">
          Confirm
        </button>
      </div>
      <div className="transactDiv1">
        <h3>Transaction Id</h3>
        <h3>User Id</h3>
        <h3>Amount</h3>
        <h3>Wallet</h3>
        <h3>Type</h3>
        <h3>Status</h3>
      </div>
      {pendingTransactions.map((list) => (
        <div className="userDiv2" key={list.id}>
          <h3>{list._id}</h3>
          <h3>{list.userId}</h3>
          <h3>{list.amount}</h3>
          <h3>{list.walletAddress}</h3>
          <h3>{list.type}</h3>
          <h3>{list.status}</h3>
        </div>
      ))}
    </div>
  );
};

export default PendingTransactionComponent;
