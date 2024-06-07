import React, { useState, useEffect } from "react";
import "../styles/Withdrawal.css";
import Modal from "react-modal";
import { SiTether, SiBitcoin } from "react-icons/si";
import { FaPaypal, FaCaretDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";

const Withdrawal = () => {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [passcode, setPasscode] = useState(Array(4).fill(""));
  const [selectedOption, setSelectedOption] = useState("Tether");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setAmount("");
    setWalletAddress("");
    setIsDropdownOpen(false);
  };

  const handlePasscodeChange = (index, value) => {
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
  };

  const transactionFee = amount ? (parseFloat(amount) * 0.02).toFixed(2) : 0;

  const total = amount
    ? (parseFloat(amount) + parseFloat(transactionFee)).toFixed(2)
    : 0;

  const handleContinueClick = async () => {
    if (userData.balance < total) {
      setModalMessage("Insufficient balance");
      setIsModalOpen(true);
      return;
    }

    const data = {
      userId: userData._id,
      amount,
      type: "withdrawal",
      walletAddress,
      method: selectedOption,
    };

    try {
      const response = await axios.post(`${BackendApi}/transaction`, data);
      alert("Your withdrawal will be confirmed shortly");
    } catch (error) {
      alert("Withdrawal error", error);
    }
  };

  const handleConfirmClick = () => {
    // Perform the withdrawal action here
    alert("Withdrawal confirmed!");
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPasscode(Array(4).fill(""));
  };

  return (
    <div className="depositMain">
      <div className="withdrawDiv4">
        {selectedOption === "Tether" && <SiTether className="ii" />}
        {selectedOption === "Bitcoin" && <SiBitcoin className="ii" />}
        {selectedOption === "Paypal" && <FaPaypal className="ii" />}
        <h3>{selectedOption}</h3>
        <FaCaretDown
          className="dropdownIcon"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </div>
      {isDropdownOpen && (
        <div className="dropdownMenu">
          <div
            className="dropdownItem"
            onClick={() => handleOptionChange("Tether")}
          >
            <SiTether className="ii" />
            <span>Tether (USDT)</span>
          </div>
          <div
            className="dropdownItem"
            onClick={() => handleOptionChange("Bitcoin")}
          >
            <SiBitcoin className="ii" />
            <span>Bitcoin (BTC)</span>
          </div>
          <div
            className="dropdownItem"
            onClick={() => handleOptionChange("Paypal")}
          >
            <FaPaypal className="ii" />
            <span>PayPal</span>
          </div>
        </div>
      )}
      {selectedOption !== "Paypal" && (
        <div className="depositDiv5">
          <h4>Network: {selectedOption === "Tether" ? "ERC20" : "Bitcoin"}</h4>
        </div>
      )}
      <div>
        <h3>Amount</h3>
        <div className="withdrawDiv2">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>
      </div>
      {selectedOption !== "paypal" && (
        <div>
          <h3>Wallet Address</h3>
          <div className="withdrawDiv2">
            <input
              type="text"
              value={walletAddress}
              onChange={handleWalletAddressChange}
              placeholder="Enter wallet address"
            />
          </div>
        </div>
      )}
      {selectedOption === "paypal" && (
        <div>
          <h3>PayPal Email</h3>
          <div className="withdrawDiv2">
            <input
              type="email"
              value={walletAddress}
              onChange={handleWalletAddressChange}
              placeholder="Enter PayPal email"
            />
          </div>
        </div>
      )}
      <div className="withdrawDiv3">
        <h3>Summary</h3>
        <div className="withdrawDiv31">
          <h3>Amount:</h3>
          <h3> {amount}</h3>
        </div>
        <div className="withdrawDiv31">
          <h3>Transaction Fee: </h3>
          <h3>{transactionFee}</h3>
        </div>
        <div className="withdrawDiv31">
          <h3>Total:</h3>
          <h3>{total}</h3>
        </div>
      </div>
      <div className="depositDiv9">
        <button onClick={handleContinueClick}>Continue</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
      >
        <div className="modalContent">
          <IoClose className="iq" onClick={closeModal} />
          <h2>{modalMessage}</h2>
          {modalMessage !== "Insufficient balance" && (
            <>
              <div className="passcodeInput">
                {passcode.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) =>
                      handlePasscodeChange(index, e.target.value)
                    }
                  />
                ))}
              </div>
              <div className="depositDiv9">
                <button onClick={handleConfirmClick}>Confirm Withdrawal</button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Withdrawal;
