import React, { useState } from "react";
import "../styles/Accounts.css";
import { FaPencilAlt } from "react-icons/fa";

const diceBearBaseUrl = "https://api.dicebear.com/8.x/";

const avatarStyles = [
  "adventurer-neutral",
  "bottts",
  "thumbs",
  "notionists-neutral",
  "lorelei-neutral",
  "fun-emoji",
  "bottts-neutral",
  "big-ears-neutral",
  "avataaars-neutral",
];

const Account = () => {
  const [avatarStyle, setAvatarStyle] = useState(avatarStyles[0]);
  const [email, setEmail] = useState("user@example.com");
  const [fullName, setFullName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarStyleChange = (style) => {
    setAvatarStyle(style);
    setIsModalOpen(false); // Close modal after selection
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSaveChanges = () => {
    // Save changes logic here
    alert("Changes saved successfully!");
  };

  const avatarUrl = `${diceBearBaseUrl}${avatarStyle}/svg`;

  return (
    <div className="accountsDiv1">
      <div className="transactDiv2">
        <h2>ACCOUNTS</h2>
      </div>
      <div className="avatar-container">
        <img src={avatarUrl} alt="Avatar" className="avatar-image" />
        <FaPencilAlt
          className="edit-icon"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div style={{ marginTop: 60 }}>
        <h3>Email:</h3>
        <input type="email" value={email} readOnly />
      </div>
      <div>
        <h3>Full Name:</h3>
        <input type="text" value={fullName} onChange={handleFullNameChange} />
      </div>
      <div>
        <h3>Username:</h3>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <h3>Password:</h3>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="depositDiv9">
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <div className="avatar-options">
              {avatarStyles.map((style) => (
                <img
                  key={style}
                  src={`${diceBearBaseUrl}${style}/svg`}
                  alt={style}
                  className="avatar-option"
                  onClick={() => handleAvatarStyleChange(style)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
