import React, { useState, useEffect } from "react";
import "../styles/Stake.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

// Investment options with their respective descriptions, rates, and day numbers
const investmentOptions = {
  STOCKS: {
    description:
      "We have developed and applied a number of strategies such as quantification, macro strategy trading, and private equity fund issuance to the A-share, Hong Kong, and US equity markets, thereby ensuring stable portfolio returns.",
    minAmount: 100,
    maxAmount: 499,
    minRate: 0.0066, // Minimum rate
    maxRate: 0.0667, // Maximum rate
    term: "3 Days",
    days: 3,
    profitRange: "0.66% - 6.67%",
  },
  BLOCKCHAIN: {
    description:
      "We invest in technologies developing the WEB 3.0 concept such as DeFi, NFT, AI, and various cryptocurrency protocols. We support the expansion of supernode networks to increase blockchain capabilities.",
    minAmount: 500,
    maxAmount: 4999,
    minRate: 0.2213, // Minimum rate
    maxRate: 0.3612, // Maximum rate
    term: "7 Days",
    days: 7,
    profitRange: "22.13% - 36.12%",
  },
  VENTURE: {
    description:
      "Venture capital investments regularly show positive results as well as super profit potential, and we strive to maximize the potential of our partners by helping them in all aspects of their business.",
    minAmount: 5000,
    maxAmount: 10000,
    minRate: 0.5674, // Minimum rate
    maxRate: 0.7445, // Maximum rate
    term: "1 Month",
    days: 30, // Assuming 1 month = 30 days
    profitRange: "56.74% - 74.45%",
  },
};

const Stake = () => {
  const [amount, setAmount] = useState("");
  const [days, setDays] = useState(0);
  const [rate, setRate] = useState(0);
  const [userData, setUserData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    fetchData();
  }, []);

  const getData = async () => {
    const data = { token };
    try {
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

  const getRateForAmount = (amount, investment) => {
    const { minAmount, maxAmount, minRate, maxRate } =
      investmentOptions[investment];

    if (amount < minAmount) {
      return minRate;
    }
    if (amount > maxAmount) {
      return maxRate;
    }

    const range = maxRate - minRate;
    const rangeAmount = amount - minAmount;
    const rangeStep = (maxAmount - minAmount) / range;

    return minRate + rangeStep * rangeAmount;
  };

  const calculateEarnings = (amount, days, rate) => {
    const interestRatePerDay = rate;
    return amount * interestRatePerDay * days;
  };

  const handleAmountChange = (e) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
    if (selectedInvestment) {
      const rateForAmount = getRateForAmount(inputAmount, selectedInvestment);
      setRate(rateForAmount);
    }
  };

  const projectedEarnings =
    amount && days ? calculateEarnings(amount, days, rate) : 0;

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
      rate,
    };

    try {
      const response = await axios.post(`${BackendApi}/staking`, data);
      toast.success("Your Fixed Capital has been done safely.");
      setAmount("");
      setModalVisible(false); // Hide the modal on successful staking
    } catch (error) {
      toast.error("Staking Error");
    }
  };

  const handleInvestmentClick = (investmentType) => {
    setSelectedInvestment(investmentType);
    setDays(investmentOptions[investmentType].days);
    setRate(investmentOptions[investmentType].minRate); // Initialize rate with minimum rate
    setModalVisible(true);
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
            <h2>INVESTMENTS</h2>
          </div>
          <h3 style={{ fontSize: 14, marginTop: 30, color: "goldenrod" }}>
            How do portfolios work?
          </h3>
          <h3>
            Each of our investment portfolios is diversified and not focused on
            one asset format and is designed to take into account different
            risks and potential returns, which makes it possible to predict the
            expected returns. Due to the analytical work of our team, you have
            the opportunity to find your niche in the world of cryptocurrency
            industry, regardless of whether you are an experienced investor in
            cryptocurrencies or just starting your way in this field.
          </h3>
          {Object.keys(investmentOptions).map((key) => (
            <div
              key={key}
              className="stakeDiv3"
              style={{
                marginTop: 40,
                display: "block",
                paddingLeft: 30,
                paddingRight: 30,
                width: "80%",
                marginLeft: 7.5,
              }}
              onClick={() => handleInvestmentClick(key)}
            >
              <h3 style={{ fontSize: 16, fontWeight: "900" }}>{key}</h3>
              <h3>{investmentOptions[key].description}</h3>
              <h3 style={{ fontSize: 15, marginTop: 5, color: "goldenrod" }}>
                Minimum amount
              </h3>
              <h3 style={{ fontSize: 15, paddingBottom: 10 }}>
                ${investmentOptions[key].minAmount} - $
                {investmentOptions[key].maxAmount}
              </h3>
              <h3 style={{ fontSize: 15, marginTop: 5, color: "goldenrod" }}>
                Expected Profit
              </h3>
              <h3 style={{ fontSize: 15, paddingBottom: 10 }}>
                {investmentOptions[key].profitRange}
              </h3>
              <h3 style={{ fontSize: 15, marginTop: 5, color: "goldenrod" }}>
                Deposit Term
              </h3>
              <h3 style={{ fontSize: 15, paddingBottom: 10 }}>
                {investmentOptions[key].term}
              </h3>
              <div className="depositDiv9">
                <button style={{ marginTop: 5 }}>Invest</button>
              </div>
            </div>
          ))}
          {modalVisible && (
            <div className="modal">
              <div className="modal-content">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2 style={{ color: "white" }}>{selectedInvestment}</h2>
                  <IoClose
                    style={{
                      fontSize: 25,
                      alignSelf: "center",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => setModalVisible(false)}
                  />
                </div>

                <p style={{ color: "white" }}>
                  {investmentOptions[selectedInvestment]?.description}
                </p>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={handleAmountChange}
                />
                <h3>Estimated Profit: ${projectedEarnings.toFixed(2)}</h3>

                <div className="depositDiv9">
                  <button onClick={handleContinueClick}>Continue</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Stake;
