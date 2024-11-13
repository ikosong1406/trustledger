import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowDown, FaArrowUp, FaLock } from "react-icons/fa";
import { getUserToken } from "../Api/storage";
import api from "../Api/BackendApi";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const UserTransaction = () => {
  const [userData, setUserData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = await getUserToken();
        setToken(userToken);
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const data = { token };
    try {
      const response = await axios.post(`${api}/userdata`, data);
      setUserData(response.data.data);
      setTransactions(response.data.data.transactions); // Assuming transactions are nested in response.data.data.transactions
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false on error
    }
  };

  useEffect(() => {
    if (token) {
      const interval = setInterval(() => {
        setRefreshing(true);
        getData();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [token]);

  const getIcon = (type) => {
    switch (type) {
      case "deposit":
        return (
          <FaArrowDown
            style={{ color: "green", fontSize: 25, marginTop: 20 }}
          />
        );
      case "withdrawal":
        return (
          <FaArrowUp style={{ color: "red", fontSize: 25, marginTop: 20 }} />
        );
      case "fixed":
        return (
          <FaLock style={{ color: "white", fontSize: 25, marginTop: 20 }} />
        );
      default:
        return null;
    }
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
        <div className="transactDiv1" style={{ minHeight: 670 }}>
          <div className="transactDiv2">
            <h2>TRANSACTIONS</h2>
          </div>
          {loading ? (
            <p style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              Loading...
            </p>
          ) : transactions.length === 0 ? (
            <p style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              No transactions
            </p>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction._id}
                style={{
                  borderBottom: "1px solid white",
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="transaction-icon">
                    {getIcon(transaction.type)}
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <h3>
                      {transaction.type.charAt(0).toUpperCase() +
                        transaction.type.slice(1)}
                    </h3>

                    <h3>${transaction.amount}</h3>
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
                    {transaction.status}
                  </p>
                  <p style={{ color: "gray" }}>{transaction.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UserTransaction;
