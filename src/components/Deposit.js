import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "../styles/Deposit.css";
import { FiAlertOctagon } from "react-icons/fi";
import { SiTether } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";
import { BiClipboard } from "react-icons/bi";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [method, setMethod] = useState([]);
  const [userData, setUserData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);
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
        // console.log(token);
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const data = {
      token,
    };
    try {
      // console.log(token);
      const response = await axios.post(`${BackendApi}/userdata`, data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  useEffect(() => {
    const fetchMethod = async () => {
      try {
        const response = await axios.get(`${BackendApi}/allMethod`);
        setMethod(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchMethod();
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setActiveButton(null);
  };

  const handleDepositClick = (amount) => {
    setAmount(amount);
    // setActiveButton(amount);
  };

  // console.log(userData);

  const handleConfirmClick = async () => {
    const profit = amount * 2.5;
    const data = {
      userId: userData._id,
      name: userData.firstname,
      lname: userData.lastname,
      amount,
      type: "deposit",
      profit,
    };

    try {
      const response = await axios.post(`${BackendApi}/transaction`, data);
      toast.success("Your deposit will be confirmed ");
    } catch (error) {
      toast.error("Deposit error", error);
    }
  };

  const Address = "wallet address example";

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
        <div className="depositMain">
          <ToastContainer />
          <div className="depositDiv1">
            <div className="depositDiv11">
              <button
                onClick={() => handleDepositClick(100)}
                className={`button ${amount === 100 ? "active" : ""}`}
              >
                $100
              </button>
              <button
                onClick={() => handleDepositClick(200)}
                className={`button ${amount === 200 ? "active" : ""}`}
              >
                $200
              </button>
              <button
                onClick={() => handleDepositClick(500)}
                className={`button ${amount === 500 ? "active" : ""}`}
              >
                $500
              </button>
            </div>
            <div className="depositDiv11">
              <button
                onClick={() => handleDepositClick(1000)}
                className={`button ${amount === 1000 ? "active" : ""}`}
              >
                $1000
              </button>
              <button
                onClick={() => handleDepositClick(2000)}
                className={`button ${amount === 2000 ? "active" : ""}`}
              >
                $2000
              </button>
              <button
                onClick={() => handleDepositClick(5000)}
                className={`button ${amount === 5000 ? "active" : ""}`}
              >
                $5000
              </button>
            </div>
          </div>
          <div className="depositDiv2">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Min deposit $500"
            />
          </div>
          <div>
            <div className="depositDiv6" style={{ marginTop: 20 }}>
              <QRCode value={Address} className="qr" />
            </div>
            <div className="depositDiv7">
              <h3>{Address}</h3>
            </div>
            <div className="depositDiv8">
              <h3>Copy Address</h3>
              <BiClipboard
                onClick={() => navigator.clipboard.writeText(Address)}
                className="clip"
              />
            </div>
            {/* {method.map((data) => (
              <div key={data.walletAddress}>
                <div className="depositDiv4">
                  <FaBitcoin className="ii" />
                  <h3>{data.name}</h3>
                </div>
                <div className="depositDiv5">
                  <h4>Network: {data.network}</h4>
                </div>
               <div className="depositDiv6">
                  <QRCode value={data.walletAddress} className="qr" />
                </div>
                <div className="depositDiv7">
                  <h3>{data.walletAddress}</h3>
                </div>
                <div className="depositDiv8">
                  <h3>Copy Address</h3>
                  <BiClipboard
                    onClick={() =>
                      navigator.clipboard.writeText(data.walletAddress)
                    }
                    className="clip"
                  />
                </div> 
              </div>
            ))} */}
          </div>
          <div className="depositDiv9">
            <button onClick={handleConfirmClick}>
              I have made the transfer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deposit;
