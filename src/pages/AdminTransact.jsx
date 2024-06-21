import React, { useState, useEffect } from "react";

const AdminTransact = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the server (dummy data for now)
    setTransactions([
      {
        id: 1,
        user: "John Doe",
        amount: 100,
        type: "Deposit",
        status: "Completed",
      },
      {
        id: 2,
        user: "Jane Smith",
        amount: 50,
        type: "Withdrawal",
        status: "Pending",
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Transaction Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.user}</td>
              <td>{tx.amount}</td>
              <td>{tx.type}</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTransact;
