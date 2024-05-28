import React, { useState } from "react";

const AdminTransact = () => {
  const [transactType, setTransactType] = useState(null);
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransactTypeChange = (type) => {
    setTransactType(type);
    setUserId("");
    setAmount("");
  };

  const handleUserIdChange = (e) => setUserId(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleTransaction = () => {
    if (transactType && userId && amount) {
      alert(
        `${
          transactType === "deposit" ? "Deposited" : "Withdrew"
        } $${amount} for user with ID ${userId}`
      );
      // Add logic to perform the transaction, e.g., sending data to a backend server.
      setUserId("");
      setAmount("");
      setTransactType(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Admin Transact</h2>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => handleTransactTypeChange("deposit")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => handleTransactTypeChange("withdraw")}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Withdraw
        </button>
      </div>
      {transactType && (
        <div>
          <h3>{transactType === "deposit" ? "Deposit" : "Withdraw"} Funds</h3>
          <div style={{ marginBottom: "10px" }}>
            <label>
              User ID:
              <input
                type="text"
                value={userId}
                onChange={handleUserIdChange}
                style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
              />
            </label>
          </div>
          <button
            onClick={handleTransaction}
            style={{ padding: "10px 20px", cursor: "pointer" }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminTransact;
