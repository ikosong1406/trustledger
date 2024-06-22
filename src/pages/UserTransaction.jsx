import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp, FaLock } from "react-icons/fa";
// import "./TransactionList.css";

const UserTransaction = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "deposit",
      status: "confirmed",
      amount: 100,
      date: "2024-06-01",
    },
    {
      id: 2,
      type: "withdrawal",
      status: "pending",
      amount: 50,
      date: "2024-06-02",
    },
    {
      id: 3,
      type: "fixed",
      status: "confirmed",
      amount: 200,
      date: "2024-06-03",
    },
    {
      id: 4,
      type: "deposit",
      status: "pending",
      amount: 150,
      date: "2024-06-04",
    },
  ]);

  const getIcon = (type) => {
    switch (type) {
      case "deposit":
        return (
          <FaArrowDown
            style={{ color: "green", fontSize: 25, marginTop: 10 }}
          />
        );
      case "withdrawal":
        return (
          <FaArrowUp style={{ color: "red", fontSize: 25, marginTop: 10 }} />
        );
      case "fixed":
        return (
          <FaLock style={{ color: "white", fontSize: 25, marginTop: 10 }} />
        );
      default:
        return null;
    }
  };
  return (
    <div className="transactDiv1" style={{ minHeight: 670 }}>
      <div className="transactDiv2">
        <h2>TRANSACTIONS</h2>
      </div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          style={{
            borderBottom: "1px solid white",
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <div style={{ display: "flex" }}>
            <div className="transaction-icon">{getIcon(transaction.type)}</div>
            <div style={{ marginLeft: 20 }}>
              <h3>
                {transaction.type.charAt(0).toUpperCase() +
                  transaction.type.slice(1)}
              </h3>

              <p style={{ color: "gray" }}>
                <span
                  className={`status-dot ${
                    transaction.status === "confirmed"
                      ? "status-active"
                      : "status-pending"
                  }`}
                ></span>
                {transaction.status}
              </p>
            </div>
          </div>

          <div>
            <h3>${transaction.amount}</h3>
            <p style={{ color: "gray" }}>{transaction.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTransaction;
