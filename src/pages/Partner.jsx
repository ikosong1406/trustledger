import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserToken } from "../Api/storage";
import api from "../Api/BackendApi";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";
import { BiClipboard } from "react-icons/bi";

const Partner = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
            <h2>PARTNERS</h2>
          </div>
          <h3>
            Earn 7, 4, 3, 2, 1% on every investment in your structure. Develop
            your structure to get customized referral program terms.
          </h3>

          <h3 style={{ fontSize: 14, marginTop: 30, color: "goldenrod" }}>
            Referral Link
          </h3>
          <h3
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottom: "1px solid white",
            }}
          >
            <span style={{ marginRight: 10 }}>
              <BiClipboard
                //   onClick={() =>
                //     navigator.clipboard.writeText(data.walletAddress)
                //   }
                className="clip"
                style={{ fontSize: 16 }}
              />
            </span>
            https://bitvelar.com/?id=7766256022
          </h3>
          <h3 style={{ fontSize: 14, marginTop: 30, color: "goldenrod" }}>
            Number of partners
          </h3>
          <h3
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottom: "1px solid white",
            }}
          >
            0
          </h3>
          <h3 style={{ fontSize: 14, marginTop: 30, color: "goldenrod" }}>
            Amount earned
          </h3>
          <h3
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottom: "1px solid white",
            }}
          >
            $0.00
          </h3>
          <div className="mainDiv6" style={{ marginTop: 40 }}>
            <h2>Table of Partners</h2>
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
                    <div style={{ marginLeft: 20 }}>
                      <h3>
                        {transaction.type.charAt(0).toUpperCase() +
                          transaction.type.slice(1)}
                      </h3>

                      <h3>${transaction.amount}</h3>
                      <h3>${transaction.profit}</h3>
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
                    <p style={{ color: "gray" }}>{transaction.dueDate}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner;
