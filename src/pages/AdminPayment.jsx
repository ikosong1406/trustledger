import React, { useState, useEffect } from "react";
import "../styles/AdminPayment.css";
import { FcSimCardChip } from "react-icons/fc";
import axios from "axios";
import api from "../Api/BackendApi";
import { FaEdit } from "react-icons/fa";
import EditMethodModal from "../components/EditMethodModal";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const AdminPayment = () => {
  const [method, setMethod] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
          <div className="paymentManagementHeader">
            <h1 style={{ color: Colors.white, marginLeft: 20 }}>
              Deposit Methods
            </h1>
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
                    <FcSimCardChip
                      style={{ fontSize: 60, alignSelf: "center" }}
                    />
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
      )}
    </div>
  );
};

export default AdminPayment;
