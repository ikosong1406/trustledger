import React, { useState, useEffect } from "react";
import "../styles/AdminPayment.css";
import Colors from "../components/Colors";
import { FcSimCardChip } from "react-icons/fc";
import axios from "axios";
import api from "../Api/BackendApi";

const AdminPayment = () => {
  const [method, setMethod] = useState([]);

  useEffect(() => {
    const fetchMethod = async () => {
      try {
        const response = await axios.get(`${api}/allMethod`);
        setMethod(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchMethod();
  }, []);

  const [newPaymentMethod, setNewPaymentMethod] = useState({
    type: "",
    address: "",
    limit: "",
  });

  return (
    <div className="adHomeMain" style={{ minHeight: 500 }}>
      <div className="paymentManagementHeader">
        <h1 style={{ color: Colors.white, marginLeft: 20 }}>
          Payment and Withdrawal Management
        </h1>
      </div>
      <div style={{ marginLeft: 30 }}>
        <div className="methods-container">
          <h2 style={{ color: "gray" }}>Deposit Methods</h2>
          <div className="card-container">
            {method.map((data) => (
              <div className="adHomeDiv21" key={data._id}>
                <div className="adHome211">
                  <h3>{data.name}</h3>
                  <p style={{ color: "gray", fontWeight: 500 }}>
                    Address: {data.walletAddress}
                  </p>
                  <p style={{ color: "gray", fontWeight: 500 }}>
                    Network: {data.network}
                  </p>
                </div>
                <FcSimCardChip style={{ fontSize: 40, alignSelf: "center" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayment;
