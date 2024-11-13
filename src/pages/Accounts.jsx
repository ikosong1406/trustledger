import React, { useState, useEffect } from "react";
import "../styles/Accounts.css";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const diceBearBaseUrl = "https://api.dicebear.com/8.x/";

const avatarStyles = [
  "adventurer-neutral",
  "bottts",
  "thumbs",
  "notionists-neutral",
  "lorelei-neutral",
  "fun-emoji",
  "bottts-neutral",
  "big-ears-neutral",
  "avataaars-neutral",
];

const Account = () => {
  const navigate = useNavigate();
  const [avatarStyle, setAvatarStyle] = useState(avatarStyles[0]);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleAvatarStyleChange = (style) => {
    setAvatarStyle(style);
    setIsModalOpen(false); // Close modal after selection
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSaveChanges = () => {
    // Save changes logic here
    alert("Changes saved successfully!");
  };

  const avatarUrl = `${diceBearBaseUrl}${avatarStyle}/svg`;

  const handleLogout = () => {
    navigate("/");
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
        <div className="accountsDiv1">
          <div className="transactDiv2">
            <h2>ACCOUNTS</h2>
          </div>
          <div className="avatar-container">
            <img src={avatarUrl} alt="Avatar" className="avatar-image" />
            <FaPencilAlt
              className="edit-icon"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className="accountDiv9">
            <button onClick={handleSaveChanges} style={{ border: "none" }}>
              Save Changes
            </button>
          </div>
          <div>
            <h3>Email:</h3>
            <input
              type="email"
              value={email}
              placeholder={userData.email}
              readOnly
            />
          </div>
          <div>
            <h3>Name:</h3>
            <input
              type="text"
              value={fullName}
              placeholder={userData.firstname}
              onChange={handleFullNameChange}
            />
          </div>
          <div>
            <h3>Password:</h3>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="accountDiv92">
            <button onClick={handleLogout} style={{ border: "none" }}>
              Logout
            </button>
          </div>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setIsModalOpen(false)}>
                  &times;
                </span>
                <div className="avatar-options">
                  {avatarStyles.map((style) => (
                    <img
                      key={style}
                      src={`${diceBearBaseUrl}${style}/svg`}
                      alt={style}
                      className="avatar-option"
                      onClick={() => handleAvatarStyleChange(style)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Account;
