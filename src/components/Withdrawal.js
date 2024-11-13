import React, { useState, useEffect } from "react";
import "../styles/Withdrawal.css";
import { SiTether, SiBitcoin } from "react-icons/si";
import { FaPaypal, FaCaretDown } from "react-icons/fa";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const Withdrawal = () => {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedOption, setSelectedOption] = useState("tether");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const transactionFee = amount ? (parseFloat(amount) * 0.02).toFixed(2) : 0;

  const total = amount
    ? (parseFloat(amount) + parseFloat(transactionFee)).toFixed(2)
    : 0;

  const handleContinueClick = async () => {
    if (userData.balance < total) {
      toast.error("Insufficient balance");
      return;
    }

    const data = {
      userId: userData._id,
      name: userData.firstname,
      lname: userData.lastname,
      amount,
      type: "withdrawal",
      walletAddress,
      method: selectedOption,
    };

    try {
      const response = await axios.post(`${BackendApi}/transaction`, data);
      toast.success("Your withdrawal will be confirmed ");
    } catch (error) {
      toast.error("Withdrawal error", error);
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
        <div className="depositMain">
          <ToastContainer />
          <div className="withdrawDiv4">
            {selectedOption === "tether" && <SiTether className="ii" />}
            {selectedOption === "bitcoin" && <SiBitcoin className="ii" />}
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
                onClick={() => handleOptionChange("tether")}
              >
                <SiTether className="ii" />
                <span>Tether (USDT)</span>
              </div>
              <div
                className="dropdownItem"
                onClick={() => handleOptionChange("bitcoin")}
              >
                <SiBitcoin className="ii" />
                <span>Bitcoin (BTC)</span>
              </div>
            </div>
          )}
          {selectedOption !== "Paypal" && (
            <div className="depositDiv5">
              <h4>
                Network: {selectedOption === "Tether" ? "TRC20" : "Bitcoin"}
              </h4>
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
            <button onClick={handleContinueClick}>Withdraw</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdrawal;
