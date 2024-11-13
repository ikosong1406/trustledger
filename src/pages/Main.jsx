import React, { useState, useEffect, useRef, memo } from "react";
import "../styles/Main.css";
import ReactApexChart from "react-apexcharts";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiStellar, SiRipple, SiSolana } from "react-icons/si";
import { SiTether } from "react-icons/si";
import { BiMenuAltLeft } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";
import { GiAirZigzag } from "react-icons/gi";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";
import LiveChatButton from "../components/LiveChatButton"; // Import the FAB component

const Main = () => {
  const [userData, setUserData] = useState({
    bitcoin: 0,
    ethereum: 0,
    balance: 0,
    firstname: "",
    lastname: "",
  });
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const fetchData = async () => {
    try {
      const userToken = await getUserToken();
      setToken(userToken);
      // console.log(token);
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getData = async () => {
    const data = { token };
    try {
      const response = await axios.post(`${BackendApi}/userdata`, data);
      const fetchedData = response.data.data;

      // Set default values if the fetched data is zero
      const updatedData = {
        bitcoin: fetchedData.bitcoin || 0,
        ethereum: fetchedData.ethereum || 0,
        balance: fetchedData.balance || 0,
        firstname: fetchedData.firstname || "",
        lastname: fetchedData.lastname || "",
      };

      setUserData(updatedData);
      setTransactions(response.data.data.staking);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
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

  const profit = 0; // Example profit

  const fn = userData.firstname ? userData.firstname[0] : ""; // Handle null or undefined
  const ln = userData.lastname ? userData.lastname[0] : "";

  const handleLiveChatClick = () => {
    const email = "support@bitvelar.com";
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <ThreeCircles
            height="80"
            width="80"
            color={Colors.violet}
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="mainDiv1">
          <div className="mainDiv2">
            <BiMenuAltLeft className="icon" />
            <h2>WALLET</h2>
            <h3>
              {fn}
              {ln}
            </h3>
          </div>
          <div className="mainDiv7">
            <h1>
              Hi,{userData.firstname} {userData.lastname}
            </h1>
          </div>
          <div className="mainDiv3">
            <TfiWallet className="walicon" />
            <div className="mainDiv31">
              <h3>Total balance</h3>
              <h1> $ {userData.balance}</h1>
              <h3 style={{ color: "#008000", marginTop: -7 }}>+${profit}</h3>
              <div className="circle">
                <GiAirZigzag className="zi" />
              </div>
            </div>
          </div>
          <div className="mainDiv6">
            <h2>Assests</h2>
            <div className="mainDiv61">
              <div className="mainDiv62">
                <SiTether className="icon" style={{ color: "#26A17B" }} />
                <div className="mainDiv63">
                  <h3>USDT</h3>
                  <h4 style={{ marginTop: -5, color: "gray" }}>Tether</h4>
                </div>
              </div>
              <div className="mainDiv64">
                <h3>{userData.balance}</h3>
              </div>
            </div>
            <div className="mainDiv61">
              <div className="mainDiv62">
                <FaBitcoin className="icon" style={{ color: "#F7931A" }} />
                <div className="mainDiv63">
                  <h3>BTC</h3>
                  <h4 style={{ marginTop: -5, color: "gray" }}>Bitcoin</h4>
                </div>
              </div>
              <div className="mainDiv64">
                <h3>{userData.bitcoin}</h3>
              </div>
            </div>
            <div className="mainDiv61">
              <div className="mainDiv62">
                <FaEthereum className="icon" style={{ color: " #3C3C3D" }} />
                <div className="mainDiv63">
                  <h3>ETH</h3>
                  <h4 style={{ marginTop: -5, color: "gray" }}>Ethereum</h4>
                </div>
              </div>
              <div className="mainDiv64">
                <h3>{userData.ethereum}</h3>
              </div>
            </div>
          </div>
          <div className="mainDiv6">
            <h2>Investments</h2>
            {loading ? (
              <p style={{ color: "white", textAlign: "center", fontSize: 16 }}>
                Loading...
              </p>
            ) : transactions.length === 0 ? (
              <p style={{ color: "white", textAlign: "center", fontSize: 16 }}>
                No transactions
              </p>
            ) : (
              transactions.map((transaction) => (
                <div
                  key={transaction._id}
                  style={{
                    borderBottom: "1px solid white",
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 10,
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginLeft: 20 }}>
                      <h3>Amount: ${transaction.amount}</h3>
                      <h3>Days: {transaction.days}</h3>
                      <h3>
                        Profit: $
                        {(
                          transaction.amount *
                          transaction.days *
                          transaction.rate
                        ).toFixed(2)}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p style={{ color: "gray" }}>
                      <span
                        className={`status-dot ${
                          transaction.status === "confirmed"
                            ? "status-active"
                            : "status-pending"
                        }`}
                      ></span>
                      {transaction.status}
                    </p>
                    <p style={{ color: "gray" }}>{transaction.startDate}</p>
                    <p style={{ color: "gray" }}>{transaction.endDate}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <LiveChatButton onClick={handleLiveChatClick} />
        </div>
      )}
    </div>
  );
};

export default Main;
