import React, { useState } from "react";
import "../styles/Settings.css";

const Settings = () => {
  const [language, setLanguage] = useState("US English");
  const [currency, setCurrency] = useState("USD");
  const [notifications, setNotifications] = useState(true);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settingsDiv1">
      <div className="transactDiv2">
        <h2>SETTINGS</h2>
      </div>
      <div style={{ marginTop: 50 }}>
        <h3>Language:</h3>
        <select value={language} onChange={handleLanguageChange}>
          <option value="US English">US English</option>
          <option value="UK English">UK English</option>
        </select>
      </div>
      <div>
        <h3>Default Currency:</h3>
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="CNY">CNY</option>
        </select>
      </div>
      <div>
        <h3>Notifications:</h3>
        <input
          type="checkbox"
          checked={notifications}
          onChange={handleNotificationChange}
        />
        {notifications ? "Enabled" : "Disabled"}
      </div>
      <div>
        <button onClick={() => alert("Privacy Policy")}>
          View Privacy Policy
        </button>
      </div>
      <div>
        <button onClick={() => alert("Terms of Use")}>View Terms of Use</button>
      </div>
    </div>
  );
};

export default Settings;
