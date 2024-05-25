import React, { useState } from "react";
import QRCode from "react-qr-code";
import "../styles/Deposit.css";
import { FiAlertOctagon } from "react-icons/fi";
import { SiTether } from "react-icons/si";
import { BiClipboard } from "react-icons/bi";

const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const walletAddress = "0xYourWalletAddressHere";
  const coinNetwork = "ERC20";

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDepositClick = (amount) => {
    setAmount(amount);
  };

  const handleConfirmClick = () => {
    alert(
      "You have converted your USD to gold valuable coin and your deposit will be confirmed in a short time."
    );
  };

  return (
    <div className="depositMain">
      <div className="depositDiv1">
        <div className="depositDiv11">
          <button onClick={() => handleDepositClick(500)}>$500</button>
          <button onClick={() => handleDepositClick(1000)}>$1000</button>
          <button onClick={() => handleDepositClick(2000)}>$2000</button>
        </div>
        <div className="depositDiv11">
          <button onClick={() => handleDepositClick(5000)}>$5000</button>
          <button onClick={() => handleDepositClick(10000)}>$10000</button>
          <button onClick={() => handleDepositClick(20000)}>$20000</button>
        </div>
      </div>
      <div className="depositDiv2">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Min deposit $500"
        />
      </div>
      <div className="depositDiv3">
        <FiAlertOctagon className="i" />
        <h3>You will receive {amount * 2.5} </h3>
      </div>
      <div className="depositDiv4">
        <SiTether className="ii" />
        <h3>Tether(USDT)</h3>
      </div>
      <div className="depositDiv5">
        <h4>Network: {coinNetwork}</h4>
      </div>
      <div className="depositDiv6">
        <QRCode value={walletAddress} className="qr" />
      </div>
      <div className="depositDiv7">
        <h3>{walletAddress}</h3>
      </div>
      <div className="depositDiv8">
        <BiClipboard
          onClick={() => navigator.clipboard.writeText(walletAddress)}
        />
      </div>
      <div className="depositDiv9">
        <button onClick={handleConfirmClick}>I have made the transfer</button>
      </div>
    </div>
  );
};

export default Deposit;
