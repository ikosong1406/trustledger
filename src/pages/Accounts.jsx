import React, { useState } from "react";

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
  const [avatarSeed, setAvatarSeed] = useState("default-seed"); // This can be any string
  const [email, setEmail] = useState("user@example.com");
  const [fullName, setFullName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe");
  const [password, setPassword] = useState("");

  const handleAvatarStyleChange = (e) => {
    setAvatarStyle(e.target.value);
  };

  const handleAvatarSeedChange = (e) => {
    setAvatarSeed(e.target.value);
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
    <div>
      <h1>Account</h1>
      <div>
        <img src={avatarUrl} alt="Avatar" style={{ width: 100, height: 100 }} />
        <label>
          Avatar Style:
          <select value={avatarStyle} onChange={handleAvatarStyleChange}>
            {avatarStyles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </label>
        <label>
          Avatar Seed:
          {/* <input
            type="text"
            value={avatarSeed}
            onChange={handleAvatarSeedChange}
          /> */}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} readOnly />
        </label>
      </div>
      <div>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </label>
      </div>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default Account;
