import React, { useState, useEffect } from "react";
import api from "../Api/BackendApi";
import axios from "axios";
import "../styles/pendingTransaction.css";

const PendingTransactionComponent = () => {
  const [pendingTransactions, setPendingTransactions] = useState([]);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}/allTransaction`);
        setPendingTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchData();
  }, []);

  const handleConfirmTransaction = async () => {
    try {
      const data = { transactionId };
      const response = await axios.post(`${api}/confirmTransaction`, data);
      console.log("Response:", response.data);
      if (response.data.status === "ok") {
        alert("Transaction Confirmed");
        setTransactionId("");
        // Update the pending transactions list
        setPendingTransactions((prev) =>
          prev.filter((tx) => tx._id !== transactionId)
        );
      } else {
        alert("Invalid transaction request");
      }
    } catch (error) {
      console.error("Error confirming transaction:", error);
      alert("Error occurred while confirming. Please try again.");
    }
  };

  return (
    <div className="transaction-container">
      <div className="userDiv3">
        <h2>PENDING </h2>
      </div>
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
      <div className="pendingDiv1">
        <h3>Transaction Id</h3>
        <h3>User Id</h3>
        <h3>Amount</h3>
        <h3>Wallet</h3>
        <h3>Type</h3>
        <h3>Status</h3>
      </div>
      {pendingTransactions.map((list) => (
        <div className="pendingDiv2" key={list._id}>
          <h3>
            {" "}
            <span className="m">Transaction Id: </span>
            {list._id}
          </h3>
          <h3>
            {" "}
            <span className="m">User Id: </span>
            {list.userId}
          </h3>
          <h3>
            {" "}
            <span className="m">Amount: </span>
            {list.amount}
          </h3>
          <h3>
            {" "}
            <span className="m">Wallet: </span>
            {list.walletAddress}
          </h3>
          <h3>
            {" "}
            <span className="m">Type: </span>
            {list.type}
          </h3>
          <h3>
            {" "}
            <span className="m">Status: </span>
            {list.status}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default PendingTransactionComponent;
