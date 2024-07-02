import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminMessage.css";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackendApi from "../Api/BackendApi";

const AdminMessage = () => {
  const location = useLocation();
  const [emailDetails, setEmailDetails] = useState({
    to: location.state?.email || "", // Set the initial value from the state if available
    subject: "",
    text: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSendEmail = async () => {
    const data = {
      to: emailDetails.to,
      subject: emailDetails.subject,
      text: emailDetails.text,
    };
    try {
      await axios.post(`${BackendApi}/sendMail`, data);
      toast.success("Email sent successfully!");
      setEmailDetails({ to: "", subject: "", text: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
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
        <div className="adHomeMain" style={{ minHeight: 500 }}>
          <div className="sendEmailHeader">
            <h1 style={{ color: Colors.white, marginLeft: 20 }}>Messages</h1>
          </div>
          <div className="emailForm">
            <label>
              To:
              <input
                type="email"
                name="to"
                value={emailDetails.to}
                onChange={handleChange}
                placeholder="Enter recipient's email"
                style={{ color: Colors.white }}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="subject"
                value={emailDetails.subject}
                onChange={handleChange}
                placeholder="Enter email subject"
                style={{ color: Colors.white }}
              />
            </label>
            <label>
              Text:
              <textarea
                name="text"
                value={emailDetails.text}
                onChange={handleChange}
                placeholder="Enter email text"
              />
            </label>
            <button onClick={handleSendEmail}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMessage;
