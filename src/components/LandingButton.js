import React from "react";
import { FaCommentDots } from "react-icons/fa";
import "../styles/LandingButton.css";

const handleChat = () => {
  const email = "support@bitvelar.com";
  window.open(`mailto:${email}`, "_blank");
};

const LandingButton = () => {
  return (
    <div className="fab1" onClick={handleChat} style={{ marginTop: 50 }}>
      <FaCommentDots className="fab1-icon" />
    </div>
  );
};

export default LandingButton;
