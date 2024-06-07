import React, { useState, useEffect } from "react";
import "../styles/Stake.css";
import Modal from "react-modal";
import { TfiWallet } from "react-icons/tfi";
import { GiAirZigzag } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";

// Helper function to calculate earnings

const Stake = () => {
  const [amount, setAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [passcode, setPasscode] = useState(Array(4).fill(""));
  const [days, setDays] = useState(0);
  const [rate] = useState(0.2);
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

  const handleAmountChange = (e) => setAmount(e.target.value);

  const calculateEarnings = (amount, days, rate) => {
    const interestRatePerDay = rate;
    return amount * interestRatePerDay * days;
  };

  const projectedEarnings =
    amount && days ? calculateEarnings(amount, days, rate) : 0;

  const handleDecrement = () => {
    setDays(days - 1);
  };

  const handleIncrement = () => {
    setDays(days + 1);
  };

  const profit = 0;

  const handleContinueClick = async () => {
    const amountValue = parseFloat(amount);
    if (userData.balance < amountValue) {
      setModalMessage("Insufficient balance");
      setIsModalOpen(true);
      return;
    }

    const data = {
      userId: userData._id,
      amount: amountValue,
      days,
      rate: 5,
    };

    try {
      const response = await axios.post(`${BackendApi}/staking`, data);
      setModalMessage("Your Assets has been staked safely.");
      setIsModalOpen(true);
    } catch (error) {
      setModalMessage("Staking Error");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPasscode(Array(4).fill(""));
  };

  return (
    <div className="transactDiv1">
      <div className="transactDiv2">
        <h2>STAKE</h2>
      </div>
      <div className="mainDiv3">
        <TfiWallet className="walicon" />
        <div className="mainDiv31">
          <h3>Stake balance</h3>
          <h1> $ {userData.stakingBalance}</h1>
          <h3 style={{ color: "#008000", marginTop: -7 }}>+${profit}</h3>
          <div className="circle">
            <GiAirZigzag className="zi" />
          </div>
        </div>
      </div>
      <div className="stakeDiv1">
        <h3>Amount to Lock ($): </h3>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="stakeDiv2">
        <h3>Number of Days to Lock: </h3>
        <div className="stakeDiv21">
          <button onClick={handleDecrement}>-</button>
          <h3>{days}</h3>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      <div className="stakeDiv3">
        <h3>Daily Interest Rate: </h3>
        <h3>{rate}%</h3>
      </div>
      <div className="stakeDiv4">
        <h3>Projected Earnings: </h3>
        <h3>${projectedEarnings}</h3>
      </div>
      <button className="stakeBtn" onClick={handleContinueClick}>
        <h3>CONTINUE</h3>
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
      >
        <div className="modalContent">
          <IoClose className="iq" onClick={closeModal} />
          <h2>{modalMessage}</h2>
        </div>
      </Modal>
    </div>
  );
};

export default Stake;
