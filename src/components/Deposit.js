import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "../styles/Deposit.css";
import { FiAlertOctagon } from "react-icons/fi";
import { SiTether } from "react-icons/si";
import { BiClipboard } from "react-icons/bi";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";

const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const walletAddress = "0xE447f3Dc0dc5BA8B3e874eB2259bdDff8a7667bA";
  const coinNetwork = "ERC20";
  const [userData, setUserData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);

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

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setActiveButton(null);
  };

  const handleDepositClick = (amount) => {
    setAmount(amount);
    // setActiveButton(amount);
  };

  const handleConfirmClick = async () => {
    const data = {
      userId: userData._id,
      amount,
      type: "deposit",
    };

    try {
      const response = await axios.post(`${BackendApi}/transaction`, data);
      alert(
        "You have converted your USD to gold valuable coin and your deposit will be confirmed in a short time."
      );
    } catch (error) {
      alert("Deposit error", error);
    }
  };

  return (
    <div className="depositMain">
      <div className="depositDiv1">
        <div className="depositDiv11">
          <button
            onClick={() => handleDepositClick(500)}
            className={`button ${amount === 500 ? "active" : ""}`}
          >
            $500
          </button>
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
        </div>
        <div className="depositDiv11">
          <button
            onClick={() => handleDepositClick(5000)}
            className={`button ${amount === 5000 ? "active" : ""}`}
          >
            $5000
          </button>
          <button
            onClick={() => handleDepositClick(10000)}
            className={`button ${amount === 10000 ? "active" : ""}`}
          >
            $10000
          </button>
          <button
            onClick={() => handleDepositClick(20000)}
            className={`button ${amount === 20000 ? "active" : ""}`}
          >
            $20000
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
      <div className="depositDiv3">
        <FiAlertOctagon className="i" />
        <h3>You will receive {amount * 2.5} </h3>
      </div>
      <div className="depositDiv4">
        <SiTether className="ii" />
        <h3>Tether(USDT)</h3>
      </div>
      <div className="depositDiv5">
        <h4>Network: {coinNetwork}</h4>
      </div>
      <div className="depositDiv6">
        <QRCode value={walletAddress} className="qr" />
      </div>
      <div className="depositDiv7">
        <h3>{walletAddress}</h3>
      </div>
      <div className="depositDiv8">
        <BiClipboard
          onClick={() => navigator.clipboard.writeText(walletAddress)}
        />
      </div>
      <div className="depositDiv9">
        <button onClick={handleConfirmClick}>I have made the transfer</button>
      </div>
    </div>
  );
};

export default Deposit;
