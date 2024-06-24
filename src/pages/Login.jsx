import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storeUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackendApi from "../Api/BackendApi";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      setLoading(false); // Stop loading if email is invalid
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${BackendApi}/login`, userData);
      const { token, role, status, message } = response.data;

      if (status === "blocked") {
        toast.error("Account has been deactivated");
        setLoading(false); // Stop loading if account is blocked
        return;
      }

      storeUserToken(token);
      toast.success(message);
      setLoading(false); // Stop loading after success

      if (role === "admin") {
        navigate("/admin");
      } else if (role === "user") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error("Login error");
      setLoading(false); // Stop loading after error
    }
  };

  return (
    <div className="loginDiv1">
      <ToastContainer />
      <div className="loginDiv2">
        <div className="loginDiv21">
          <h1>Welcome back</h1>
          <h3>Enter the information you entered while registering</h3>
        </div>
        <div className="loginDiv22">
          <h3>Email</h3>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h4>Forgot Password ?</h4>
          <button className="loginBtn" onClick={handleLogin} disabled={loading}>
            {loading ? (
              <div className="loadingAnimation"></div>
            ) : (
              <h3>LOGIN</h3>
            )}
          </button>
        </div>
        <div className="loginDiv23">
          <hr />
          <h4>or</h4>
          <hr />
        </div>
        <div className="loginDiv24">
          <h3>
            Don't have an account ?{" "}
            <span>
              <Link
                style={{ textDecoration: "none", color: "goldenrod" }}
                to="/register"
              >
                Sign up
              </Link>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
