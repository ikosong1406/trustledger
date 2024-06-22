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
import Colors from "../components/Colors";
import LiveChatButton from "../components/LiveChatButton"; // Import the FAB component

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
              position: "right", // Ensure legend is on the right in mobile view
              horizontalAlign: "left",
              verticalAlign: "middle",
              floating: false,
              fontSize: "12px",
              labels: {
                colors: ["#373d3f"],
              },
            },
          },
        },
      ],
      stroke: {
        width: 0,
      },
      legend: {
        position: "right", // Ensure legend is on the right in desktop view
        horizontalAlign: "left",
        verticalAlign: "middle",
        floating: false,
        fontSize: "14px",
        labels: {
          colors: ["#373d3f"],
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%", // Adjust the size of the donut
          },
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

  const handleLiveChatClick = () => {
    const email = "trustledger62@gmail.com";
    window.open(`mailto:${email}`, "_blank");
  };

  const containerRef = useRef(null);
  const advancedChartRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          description: "BTC/USDT",
          proName: "BINANCE:BTCUSDT",
        },
        {
          description: "ETH/USDT",
          proName: "BINANCE:ETHUSDT",
        },
        {
          description: "SOL/USDT",
          proName: "BINANCE:SOLUSDT",
        },
        {
          description: "XRP/USDT",
          proName: "BINANCE:XRPUSDT",
        },
        {
          description: "XLM/USDT",
          proName: "BINANCE:XLMUSDT",
        },
        {
          description: "Stellar",
          proName: "CRYPTOCAP:XLM",
        },
        {
          description: "Tether",
          proName: "CRYPTOCAP:USDT",
        },
        {
          description: "Solana",
          proName: "CRYPTOCAP:SOL",
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "610",
          "symbol": "CRYPTOCAP:XLM",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    if (advancedChartRef.current) {
      advancedChartRef.current.appendChild(script);
    }

    return () => {
      if (advancedChartRef.current) {
        advancedChartRef.current.innerHTML = "";
      }
    };
  }, []);

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
      <div className="mainDiv4">
        <div className="tradingview-widget-container" ref={containerRef}>
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "100%", width: "100%" }}
          ></div>
        </div>

        {/* <div className="tradingview-widget-container" ref={advancedChartRef}>
          <div
            className="tradingview-widget-container__widget"
            style={{ height: "500px", width: "100%" }} // Adjust the height here
          ></div>
        </div> */}
      </div>
      <div className="mainDiv5">
        <h2 style={{ marginBottom: 30, marginTop: 30 }}>Assest Allocation</h2>
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
            <SiTether className="icon" style={{ color: "#26A17B" }} />
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
        <div className="mainDiv61">
          <div className="mainDiv62">
            <SiRipple className="icon" style={{ color: "#00AAE4" }} />
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
            <SiStellar className="icon" style={{ color: " #000000" }} />
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
            <SiSolana className="icon" style={{ color: "#00FFA3" }} />
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
      <LiveChatButton onClick={handleLiveChatClick} />
    </div>
  );
};

export default Main;
