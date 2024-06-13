// LiveChatButton.js
import React from "react";
import { FaCommentDots } from "react-icons/fa";
import "../styles/LiveChatButton.css";

const LiveChatButton = ({ onClick }) => {
  return (
    <div className="fab" onClick={onClick}>
      <FaCommentDots className="fab-icon" />
    </div>
  );
};

export default LiveChatButton;
