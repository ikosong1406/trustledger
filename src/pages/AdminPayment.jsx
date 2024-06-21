import React, { useState, useEffect } from "react";

const AdminPayment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments and withdrawals from the server (dummy data for now)
    setPayments([
      {
        id: 1,
        user: "John Doe",
        method: "USDT",
        amount: 100,
        status: "Completed",
      },
      {
        id: 2,
        user: "Jane Smith",
        method: "Bitcoin",
        amount: 0.005,
        status: "Pending",
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Payment and Withdrawal Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Method</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.user}</td>
              <td>{payment.method}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPayment;
