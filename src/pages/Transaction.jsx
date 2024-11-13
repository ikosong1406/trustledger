import React, { useState } from "react";
import "../styles/Transaction.css";
import Deposit from "../components/Deposit";
import Withdrawal from "../components/Withdrawal";

const Transaction = () => {
  const [view, setView] = useState("deposit");

  return (
    <div className="transactDiv1">
      <div className="transactDiv2">
        <h2>DEPOSIT/WITHDRAWAL</h2>
      </div>
      <div className="transactDiv3">
        <button
          onClick={() => setView("deposit")}
          className={view === "deposit" ? "actives" : "non"}
        >
          Deposit
        </button>
        <button
          onClick={() => setView("withdraw")}
          className={view === "withdraw" ? "actives" : "non"}
        >
          Withdrawal
        </button>
      </div>

      {view === "deposit" && <Deposit />}
      {view === "withdraw" && <Withdrawal />}
    </div>
  );
};

export default Transaction;
