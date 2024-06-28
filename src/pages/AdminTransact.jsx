import React, { useState, useEffect } from "react";
import api from "../Api/BackendApi";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import EditTransactionModal from "../components/EditTransactionModal";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const AdminTransact = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${api}/allTransaction`);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <ThreeCircles
            height="80"
            width="80"
            color={Colors.white}
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="adHomeMain" style={{ minHeight: 500 }}>
          <div className="transactionListDiv1">
            <h1 style={{ color: Colors.white, marginLeft: 20 }}>
              Pending Transactions
            </h1>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.userId.slice(-5)}</td>
                    <td>
                      {transaction.name} {transaction.lname}
                    </td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.method}</td>
                    <td>{transaction.address}</td>
                    <td>
                      <span
                        className={`status-dot ${
                          transaction.status === "confirmed"
                            ? "status-active"
                            : "status-pending"
                        }`}
                      ></span>
                      {transaction.status}
                    </td>
                    <td>
                      <FaEdit
                        onClick={() => handleEditClick(transaction)}
                        style={{
                          cursor: "pointer",
                          fontSize: 18,
                          color: Colors.white,
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selectedTransaction && (
            <EditTransactionModal
              transaction={selectedTransaction}
              closeModal={closeModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminTransact;
