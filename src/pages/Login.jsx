import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { storeUserToken } from "../Api/storage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    navigate("/dashboard");

    // e.preventDefault();

    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (!emailPattern.test(email)) {
    //   alert("Please enter a valid email address");
    //   return;
    // }

    // const userData = {
    //   email,
    //   password,
    // };

    // try {
    //   const response = await axios.post(`${BackendApi}/login`, userData);
    //   const { token, role } = response.data;
    //   storeUserToken(token);
    //   if (role === "admin") {
    //     navigate("/admin");
    //   } else if (role === "user") {
    //     navigate("/dashboard");
    //   } else {
    //     navigate("/");
    //   }
    // } catch (error) {
    //   alert("Login error", error);
    // }
  };

  return (
    <div className="loginDiv1">
      <div className="loginDiv2">
        <div className="loginDiv21">
          <h1>Welcome back</h1>
          <h3>Enter the information you entered while registering</h3>
        </div>
        <div className="loginDiv22">
          <h3>Email</h3>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h4>Forgot Password ?</h4>
          <button className="loginBtn" onClick={handleLogin}>
            <h3>LOGIN</h3>
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
