import React, { useState } from "react";
import api from "../Api/BackendApi";
import axios from "axios";
import Colors from "../components/Colors";
import "../styles/AdminMessage.css";

const AdminMessage = () => {
  const [emailDetails, setEmailDetails] = useState({
    to: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSendEmail = async () => {
    try {
      await axios.post(`${api}/sendEmail`, emailDetails);
      alert("Email sent successfully!");
      setEmailDetails({ to: "", subject: "", body: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
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
          />
        </label>
        <label>
          Body:
          <textarea
            name="body"
            value={emailDetails.body}
            onChange={handleChange}
            placeholder="Enter email body"
          />
        </label>
        <button onClick={handleSendEmail}>Send</button>
      </div>
    </div>
  );
};

export default AdminMessage;
