import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import "../styles/Register.css";
import Modal from "react-modal";
import { IoClose, IoEyeOff, IoEye } from "react-icons/io5";

const Register = () => {
  const [passcode, setPasscode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      alert("Please fill out all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const userData = {
      firstname,
      lastname,
      email,
      password,
      role: "user",
    };

    try {
      const response = await axios.post(`${BackendApi}/register`, userData);
      setIsModalOpen(true);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert("Registration error", error);
    }
  };

  const codeVerification = async (e) => {
    try {
      const response = await axios.post(`${BackendApi}/verifyEmail`, passcode);
      alert("Account created, please Login");
    } catch (error) {
      alert("Verification error", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPasscode(Array(4).fill(""));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="registerDiv1">
      <div className="registerDiv2">
        <div className="registerDiv21">
          <h1>Welcome</h1>
          <h3>Please Enter the information you would love to register with</h3>
        </div>
        <div className="registerDiv22">
          <h3>Firstname</h3>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <h3>Lastname</h3>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <h3>Email</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <h3>Confirm Password</h3>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="registerBtn" onClick={handleSubmit}>
            <h3>REGISTER</h3>
          </button>
        </div>
        <div className="registerDiv23">
          <hr />
          <h4>or</h4>
          <hr />
        </div>
        <div className="registerDiv24">
          <h3>
            Already have an account?{" "}
            <span>
              <Link
                style={{ textDecoration: "none", color: "goldenrod" }}
                to="/login"
              >
                Login
              </Link>
            </span>
          </h3>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modalContent"
          overlayClassName="modalOverlay"
        >
          <div className="modalContent">
            <IoClose className="iq" onClick={closeModal} />
            <h2>Now Login with your registered details</h2>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Register;
