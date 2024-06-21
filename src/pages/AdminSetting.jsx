import React, { useState } from "react";

const AdminSetting = () => {
  const [settings, setSettings] = useState({
    feeStructure: 0.01,
    transactionLimits: 10000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save settings to the server
    console.log("Settings saved:", settings);
  };

  return (
    <div>
      <h1>Settings and Configuration</h1>
      <div>
        <label>
          Fee Structure (%):
          <input
            type="number"
            name="feeStructure"
            value={settings.feeStructure}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Transaction Limits ($):
          <input
            type="number"
            name="transactionLimits"
            value={settings.transactionLimits}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default AdminSetting;
