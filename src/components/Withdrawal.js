import React, { useState } from "react";
import Modal from "react-modal"; // You can install this using npm install react-modal

const Withdrawal = () => {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [password, setPassword] = useState("");
  const userBalance = 5000; // Example user balance, replace with actual balance

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleContinueClick = () => {
    const amountValue = parseFloat(amount);
    if (amountValue > userBalance) {
      setModalMessage("Insufficient balance");
      setIsModalOpen(true);
    } else {
      setModalMessage("Enter your password to confirm withdrawal");
      setIsModalOpen(true);
    }
  };

  const handleConfirmClick = () => {
    // Perform the withdrawal action here
    alert("Withdrawal confirmed!");
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPassword("");
  };

  const transactionFee = amount ? (parseFloat(amount) * 0.02).toFixed(2) : 0;

  return (
    <div>
      <h1>Withdrawal</h1>
      <div>
        <p>Coin: USDT</p>
        <p>Network: ERC20</p>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </label>
      </div>
      <div>
        <label>
          Wallet Address:
          <input
            type="text"
            value={walletAddress}
            onChange={handleWalletAddressChange}
            placeholder="Enter wallet address"
          />
        </label>
      </div>
      <div>
        <h3>Summary</h3>
        <p>Amount: {amount}</p>
        <p>Transaction Fee: {transactionFee}</p>
        <p>
          Total:{" "}
          {amount
            ? (parseFloat(amount) + parseFloat(transactionFee)).toFixed(2)
            : 0}
        </p>
      </div>
      <div>
        <button onClick={handleContinueClick}>Continue</button>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div>
          <h2>{modalMessage}</h2>
          {modalMessage !== "Insufficient balance" && (
            <>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button onClick={handleConfirmClick}>Confirm Withdrawal</button>
            </>
          )}
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Withdrawal;
