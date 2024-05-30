import React, { useState } from "react";
import "../styles/Stake.css";
import Modal from "react-modal";
import { TfiWallet } from "react-icons/tfi";
import { GiAirZigzag } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

// Helper function to calculate earnings

const Stake = () => {
  const [amount, setAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [passcode, setPasscode] = useState(Array(4).fill(""));
  const [days, setDays] = useState(0);
  const [rate] = useState(0.05); // Assuming a fixed annual interest rate of 5%

  const handleAmountChange = (e) => setAmount(e.target.value);

  const calculateEarnings = (amount, days, rate) => {
    const interestRatePerDay = rate / 365;
    return amount * interestRatePerDay * days + amount;
  };

  const projectedEarnings =
    amount && days ? calculateEarnings(amount, days, rate) : 0;

  const handleDecrement = () => {
    setDays(days - 1);
  };

  const handleIncrement = () => {
    setDays(days + 1);
  };

  // const handleConfirm = () => {
  //   alert(
  //     `You have locked $${amount} for ${days} days. You will earn $${projectedEarnings.toFixed(
  //       2
  //     )} in interest.`
  //   );
  //   // Add logic to handle the locking of the amount, e.g., sending data to a server.
  // };

  const balance = 5000;
  const profit = 1200;
  const profitPercentage = 6;

  const handlePasscodeChange = (index, value) => {
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
  };

  const handleContinueClick = () => {
    const amountValue = parseFloat(amount);
    if (amountValue > balance) {
      setModalMessage("Insufficient balance");
      setIsModalOpen(true);
    } else {
      setModalMessage("Enter your code to confirm staking");
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
    setPasscode(Array(4).fill(""));
  };

  return (
    <div className="transactDiv1">
      <div className="transactDiv2">
        <h2>STAKE</h2>
      </div>
      <div className="mainDiv3">
        <TfiWallet className="walicon" />
        <div className="mainDiv31">
          <h3>Stake balance</h3>
          <h1> $ {balance}</h1>
          <h3 style={{ color: "#008000", marginTop: -7 }}>
            +${profit} ({profitPercentage}%)
          </h3>
          <div className="circle">
            <GiAirZigzag className="zi" />
          </div>
        </div>
      </div>
      <div className="stakeDiv1">
        <h3>Amount to Lock ($): </h3>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div className="stakeDiv2">
        <h3>Number of Days to Lock: </h3>
        <div className="stakeDiv21">
          <button onClick={handleDecrement}>-</button>
          <h3>{days}</h3>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      <div className="stakeDiv3">
        <h3>Annual Interest Rate: </h3>
        <h3>{rate * 100}%</h3>
      </div>
      <div className="stakeDiv4">
        <h3>Projected Earnings: </h3>
        <h3>${projectedEarnings.toFixed(2)}</h3>
      </div>
      <button className="stakeBtn" onClick={handleContinueClick}>
        <h3>CONTINUE</h3>
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
      >
        <div className="modalContent">
          <IoClose className="iq" onClick={closeModal} />
          <h2>{modalMessage}</h2>
          {modalMessage !== "Insufficient balance" && (
            <>
              <div className="passcodeInput">
                {passcode.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) =>
                      handlePasscodeChange(index, e.target.value)
                    }
                  />
                ))}
              </div>
              <div className="depositDiv9">
                <button onClick={handleConfirmClick}>Confirm </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Stake;
