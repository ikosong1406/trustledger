import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import "../styles/Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      toast.error("Please fill out all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
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
      toast.success("Now Login with your registered details");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error("Registration error");
    }
  };

  return (
    <div className="registerDiv1">
      <ToastContainer />
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
          <div
            style={{
              display: "flex",
              marginTop: 20,
              width: "100%",
            }}
          >
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ width: 20 }}
            />
            <h3>
              I agree to the{" "}
              <a
                href="/termsofuse"
                style={{ textDecoration: "none", color: "goldenrod" }}
              >
                terms and conditions
              </a>
            </h3>
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
      </div>
    </div>
  );
};

export default Register;
