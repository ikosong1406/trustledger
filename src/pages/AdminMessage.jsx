import React, { useState } from "react";

const AdminMessage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    // Send email logic (dummy implementation for now)
    console.log("Sending email:", { email, subject, message });

    // Replace this with actual email sending logic
    setTimeout(() => {
      setStatus("Email sent successfully!");
    }, 1000);
  };

  return (
    <div>
      <h1>Send Message</h1>
      <div>
        <label>
          To (Email):
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>
      <button onClick={handleSend}>Send Email</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default AdminMessage;
