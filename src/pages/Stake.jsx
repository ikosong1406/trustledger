import React, { useState, useEffect } from "react";
import "../styles/Stake.css";
import { TfiWallet } from "react-icons/tfi";
import { GiAirZigzag } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

// Helper function to calculate earnings

const Stake = () => {
  const [amount, setAmount] = useState("");
  const [days, setDays] = useState(0);
  const [rate] = useState(0.2);
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
      toast.error("Insufficient balance");
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
      toast.success("Your Assets has been staked safely.");
      setAmount("");
    } catch (error) {
      toast.error("Staking Error");
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
        <div className="transactDiv1">
          <ToastContainer />
          <div className="transactDiv2">
            <h2>FIXED CAPITAL</h2>
          </div>
          <div className="mainDiv3">
            <TfiWallet className="walicon" />
            <div className="mainDiv31">
              <h3>Capital balance</h3>
              <h1> $ {userData.stakingBalance}</h1>
              <div className="circle">
                <GiAirZigzag className="zi" />
              </div>
            </div>
          </div>
          <div className="stakeDiv1">
            <h3>Amount ($): </h3>
            <input type="number" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="stakeDiv2">
            <h3>Number of Days </h3>
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
          <div className="depositDiv9">
            <button onClick={handleContinueClick}>Save Capital</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stake;
