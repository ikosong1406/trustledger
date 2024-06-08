import React, { useState, useEffect } from "react";
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

const Main = () => {
  const [userData, setUserData] = useState({
    bitcoin: 20,
    ethereum: 20,
    ripples: 20,
    stellar: 20,
    solana: 20,
    balance: 0,
    firstname: "",
    lastname: "",
  });
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState(null);

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
        tether: fetchedData.balance || 1,
        bitcoin: fetchedData.bitcoin || 0.000015,
        ethereum: fetchedData.ethereum || 0.00026,
        ripples: fetchedData.ripples || 1.95,
        stellar: fetchedData.ripples || 1.95,
        solana: fetchedData.solana || 0.006121,
        balance: fetchedData.balance || 0,
        firstname: fetchedData.firstname || "",
        lastname: fetchedData.lastname || "",
      };

      setUserData(updatedData);
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

  const [chartData, setChartData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "Ripple (XRP) Candlestick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
    loading: true, // Add loading state
  });

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=XRP&market=USD&apikey=YOUR_API_KEY"
        );

        const timeSeries =
          response.data["Time Series (Digital Currency Daily)"];
        if (timeSeries) {
          const marketData = Object.keys(timeSeries).map((date) => {
            const dayData = timeSeries[date];
            return {
              x: new Date(date),
              y: [
                parseFloat(dayData["1. open"]),
                parseFloat(dayData["2. high"]),
                parseFloat(dayData["3. low"]),
                parseFloat(dayData["4. close"]),
              ],
            };
          });

          setChartData({
            series: [
              {
                data: marketData,
              },
            ],
            options: chartData.options,
            loading: false, // Update loading state
          });
        } else {
          console.error("Invalid API response structure", response.data);
        }
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchMarketData();
  }, []);

  const [chartData1, setChartData1] = useState({
    series: [20, 20, 20, 20, 20],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Tether", "Bitcoin", "Ethereum", "XRP", "XLM", "Solana"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      stroke: {
        width: 0,
      },
      legend: {
        position: "bottom",
        labels: {
          colors: ["#373d3f"],
          useSeriesColors: false,
          fontSize: "14px",
        },
      },
    },
  });

  useEffect(() => {
    setChartData1({
      series: [
        userData.tether,
        userData.bitcoin,
        userData.ethereum,
        userData.ripples,
        userData.stellar,
        userData.solana,
      ],
      options: chartData1.options,
    });
  }, [userData]);

  const profit = 0; // Example profit

  const fn = userData.firstname ? userData.firstname[0] : ""; // Handle null or undefined
  const ln = userData.lastname ? userData.lastname[0] : "";

  return (
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
        <h2>Hi</h2>
        <h1>
          {userData.firstname} {userData.lastname}
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
      <div className="mainDiv4">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="candlestick"
          height={350}
        />
      </div>
      <div className="mainDiv5">
        <h2>Assest Allocation</h2>
        <ReactApexChart
          options={chartData1.options}
          series={chartData1.series}
          type="donut"
        />
      </div>
      <div className="mainDiv6">
        <h2>Assests</h2>
        <div className="mainDiv61">
          <div className="mainDiv62">
            <SiTether className="icon" />
            <div className="mainDiv63">
              <h3>USDT</h3>
              <h4 style={{ marginTop: -5, color: "gray" }}>Tether</h4>
            </div>
          </div>
          <div className="mainDiv64">
            <h3>{userData.tether}</h3>
          </div>
        </div>
        <div className="mainDiv61">
          <div className="mainDiv62">
            <FaBitcoin className="icon" />
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
            <FaEthereum className="icon" />
            <div className="mainDiv63">
              <h3>ETH</h3>
              <h4 style={{ marginTop: -5, color: "gray" }}>Ethereum</h4>
            </div>
          </div>
          <div className="mainDiv64">
            <h3>{userData.ethereum}</h3>
          </div>
        </div>
        <div className="mainDiv61">
          <div className="mainDiv62">
            <SiRipple className="icon" />
            <div className="mainDiv63">
              <h3>XRP</h3>
              <h4 style={{ marginTop: -5, color: "gray" }}>Ripple</h4>
            </div>
          </div>
          <div className="mainDiv64">
            <h3>{userData.ripples}</h3>
          </div>
        </div>
        <div className="mainDiv61">
          <div className="mainDiv62">
            <SiStellar className="icon" />
            <div className="mainDiv63">
              <h3>XLM</h3>
            </div>
          </div>
          <div className="mainDiv64">
            <h3>{userData.stellar}</h3>
          </div>
        </div>
        <div className="mainDiv61">
          <div className="mainDiv62">
            <SiSolana className="icon" />
            <div className="mainDiv63">
              <h3>SOL</h3>
              <h4 style={{ marginTop: -5, color: "gray" }}>Solana</h4>
            </div>
          </div>
          <div className="mainDiv64">
            <h3>{userData.solana}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
