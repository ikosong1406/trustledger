import React, { useState } from "react";

// Dummy data for initial transactions list
const dummyTransactions = [
  { id: 1, userId: 101, amount: 100, type: "deposit", status: "pending" },
  {
    id: 2,
    userId: 102,
    amount: 200,
    type: "withdraw",
    method: "usdt",
    walletAddress: "0x123456...",
    status: "pending",
  },
  {
    id: 3,
    userId: 103,
    amount: 300,
    type: "withdraw",
    method: "bitcoin",
    walletAddress: "1A1zP1...",
    status: "pending",
  },
  {
    id: 4,
    userId: 104,
    amount: 400,
    type: "withdraw",
    method: "paypal",
    emailAddress: "user@example.com",
    status: "pending",
  },
  // Add more transactions as needed
];

const AdminPending = () => {
  const [transactions, setTransactions] = useState(dummyTransactions);

  const handleStatusChange = (transactionId, newStatus) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === transactionId
        ? { ...transaction, status: newStatus }
        : transaction
    );
    setTransactions(updatedTransactions);
    // Add logic to update the transaction status in the backend here
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Pending Transactions</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              User ID
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Amount</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Type</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Method</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Wallet/Email
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {transaction.id}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {transaction.userId}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                ${transaction.amount}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {transaction.type}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {transaction.type === "withdraw" ? transaction.method : "N/A"}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {transaction.method === "paypal"
                  ? transaction.emailAddress
                  : transaction.walletAddress}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {transaction.status}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <select
                  value={transaction.status}
                  onChange={(e) =>
                    handleStatusChange(transaction.id, e.target.value)
                  }
                  style={{ padding: "5px" }}
                >
                  <option value="pending">Pending</option>
                  <option value="successful">Successful</option>
                  <option value="failed">Failed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPending;
