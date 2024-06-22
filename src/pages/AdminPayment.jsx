import React, { useState } from "react";
import "../styles/AdminPayment.css";
import Colors from "../components/Colors";

const AdminPayment = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "USDT", address: "USDT-Wallet-Address", limit: 1000 },
    { id: 2, type: "Bitcoin", address: "Bitcoin-Wallet-Address", limit: 2000 },
  ]);

  const [withdrawalMethods, setWithdrawalMethods] = useState([
    { id: 1, type: "USDT", address: "USDT-Wallet-Address", limit: 500 },
    { id: 2, type: "Bitcoin", address: "Bitcoin-Wallet-Address", limit: 1000 },
    { id: 3, type: "PayPal", address: "PayPal-Email", limit: 1500 },
  ]);

  const [newPaymentMethod, setNewPaymentMethod] = useState({
    type: "",
    address: "",
    limit: "",
  });

  const [newWithdrawalMethod, setNewWithdrawalMethod] = useState({
    type: "",
    address: "",
    limit: "",
  });

  const handleChange = (e, setMethod) => {
    const { name, value } = e.target;
    setMethod((prevMethod) => ({
      ...prevMethod,
      [name]: value,
    }));
  };

  const addPaymentMethod = () => {
    setPaymentMethods([
      ...paymentMethods,
      { id: Date.now(), ...newPaymentMethod },
    ]);
    setNewPaymentMethod({ type: "", address: "", limit: "" });
  };

  const addWithdrawalMethod = () => {
    setWithdrawalMethods([
      ...withdrawalMethods,
      { id: Date.now(), ...newWithdrawalMethod },
    ]);
    setNewWithdrawalMethod({ type: "", address: "", limit: "" });
  };

  return (
    <div className="adHomeMain" style={{ minHeight: 500 }}>
      <div className="paymentManagementHeader">
        <h1 style={{ color: Colors.white, marginLeft: 20 }}>
          Payment and Withdrawal Management
        </h1>
      </div>
      <div className="form-container">
        <h2>Add Payment Method</h2>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={newPaymentMethod.type}
            onChange={(e) => handleChange(e, setNewPaymentMethod)}
            placeholder="Enter type (e.g., USDT, Bitcoin)"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={newPaymentMethod.address}
            onChange={(e) => handleChange(e, setNewPaymentMethod)}
            placeholder="Enter wallet address"
          />
        </label>
        <label>
          Limit:
          <input
            type="number"
            name="limit"
            value={newPaymentMethod.limit}
            onChange={(e) => handleChange(e, setNewPaymentMethod)}
            placeholder="Enter limit amount"
          />
        </label>
        <button onClick={addPaymentMethod}>Add Payment Method</button>
      </div>

      <div className="form-container">
        <h2>Add Withdrawal Method</h2>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={newWithdrawalMethod.type}
            onChange={(e) => handleChange(e, setNewWithdrawalMethod)}
            placeholder="Enter type (USDT, Bitcoin, PayPal)"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={newWithdrawalMethod.address}
            onChange={(e) => handleChange(e, setNewWithdrawalMethod)}
            placeholder="Enter wallet address or email"
          />
        </label>
        <label>
          Limit:
          <input
            type="number"
            name="limit"
            value={newWithdrawalMethod.limit}
            onChange={(e) => handleChange(e, setNewWithdrawalMethod)}
            placeholder="Enter limit amount"
          />
        </label>
        <button onClick={addWithdrawalMethod}>Add Withdrawal Method</button>
      </div>

      <div className="methods-container">
        <h2>Payment Methods</h2>
        <div className="card-container">
          {paymentMethods.map((method) => (
            <div className="card" key={method.id}>
              <h3>{method.type}</h3>
              <p>Address: {method.address}</p>
              <p>Limit: ${method.limit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="methods-container">
        <h2>Withdrawal Methods</h2>
        <div className="card-container">
          {withdrawalMethods.map((method) => (
            <div className="card" key={method.id}>
              <h3>{method.type}</h3>
              <p>Address: {method.address}</p>
              <p>Limit: ${method.limit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPayment;
