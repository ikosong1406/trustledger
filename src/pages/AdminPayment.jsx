import React, { useState, useEffect } from "react";
import "../styles/AdminPayment.css";
import Colors from "../components/Colors";
import { FcSimCardChip } from "react-icons/fc";
import axios from "axios";
import api from "../Api/BackendApi";
import { FaEdit } from "react-icons/fa";
import EditMethodModal from "../components/EditMethodModal";

const AdminPayment = () => {
  const [method, setMethod] = useState([]);
  const [selected, setSelected] = useState(null);

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

  const handleEditClick = (method) => {
    setSelected(method);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div className="adHomeMain" style={{ minHeight: 500 }}>
      <div className="paymentManagementHeader">
        <h1 style={{ color: Colors.white, marginLeft: 20 }}>Deposit Methods</h1>
      </div>
      <div className="methods-container">
        <div className="card-container">
          {method.map((data) => (
            <div
              style={{
                backgroundColor: "#253745",
                width: "50%",
                padding: "20px",
                display: "flex",
                borderRadius: 10,
                justifyContent: "space-between",
                border: "2px solid goldenrod",
              }}
              key={data._id}
            >
              <div className="adHome211">
                <h3 style={{ fontSize: 30 }}>{data.name}</h3>
                <p style={{ color: "gray", fontWeight: 500, fontSize: 18 }}>
                  Address: {data.walletAddress}
                </p>
                <p style={{ color: "gray", fontWeight: 500, fontSize: 18 }}>
                  Network: {data.network}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <FcSimCardChip style={{ fontSize: 60, alignSelf: "center" }} />
                <FaEdit
                  onClick={() => handleEditClick(data)}
                  style={{
                    cursor: "pointer",
                    fontSize: 18,
                    color: Colors.white,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <EditMethodModal method={selected} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default AdminPayment;
