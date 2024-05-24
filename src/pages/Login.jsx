import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Colors from "../components/Colors";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
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
          <input type="email" name="email" id="email" />
          <h3>Password</h3>
          <input type="password" name="password" id="password" />
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
