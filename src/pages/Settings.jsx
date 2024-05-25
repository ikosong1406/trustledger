import React, { useState } from "react";

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
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Language:
          <select value={language} onChange={handleLanguageChange}>
            <option value="US English">US English</option>
            <option value="UK English">UK English</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Default Currency:
          <select value={currency} onChange={handleCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Notifications:
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationChange}
          />
          {notifications ? "Enabled" : "Disabled"}
        </label>
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
