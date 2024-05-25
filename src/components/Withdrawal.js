import React, { useState } from "react";
import "../styles/Withdrawal.css";
import Modal from "react-modal";
import { SiTether } from "react-icons/si";

const Withdrawal = () => {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [password, setPassword] = useState("");
  const userBalance = 5000; // Example user balance, replace with actual balance
  const coinNetwork = "ERC20";

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const transactionFee = amount ? (parseFloat(amount) * 0.02).toFixed(2) : 0;

  const total = amount
    ? (parseFloat(amount) + parseFloat(transactionFee)).toFixed(2)
    : 0;

  const handleContinueClick = () => {
    const amountValue = parseFloat(total);
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

  return (
    <div className="depositMain">
      <div className="depositDiv4">
        <SiTether className="ii" />
        <h3>Tether(USDT)</h3>
      </div>
      <div className="depositDiv5">
        <h4>Network: {coinNetwork}</h4>
      </div>
      <div>
        <h3>Amount</h3>
        <div className="withdrawDiv2">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>
      </div>
      <div>
        <h3>Wallet Address</h3>
        <div className="withdrawDiv2">
          <input
            type="text"
            value={walletAddress}
            onChange={handleWalletAddressChange}
            placeholder="Enter wallet address"
          />
        </div>
      </div>
      <div className="withdrawDiv3">
        <h3>Summary</h3>
        <div className="withdrawDiv31">
          <h3>Amount:</h3>
          <h3> {amount}</h3>
        </div>
        <div className="withdrawDiv31">
          <h3>Transaction Fee: </h3>
          <h3>{transactionFee}</h3>
        </div>
        <div className="withdrawDiv31">
          <h3>Total:</h3>
          <h3>{total}</h3>
        </div>
      </div>
      <div className="depositDiv9">
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
