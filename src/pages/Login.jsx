import React from "react";
import "../styles/Login.css";
import { NavLink, Link } from "react-router-dom";
import Colors from "../components/Colors";

const Login = () => {
  return (
    <div className="loginDiv1">
      <div className="loginDiv2">
        <div className="loginDiv21">
          <h1>Welcome back</h1>
          <h3>Enter the information you entered while registering</h3>
        </div>
        <div className="loginDiv22">
          <h3>Email</h3>
          <input type="email" name="" id="" />
          <h3>Password</h3>
          <input type="text" />
          <h4>Forgot Password ?</h4>
          <NavLink to="/login" className="loginBtn">
            <h3>LOGIN</h3>
          </NavLink>
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
                style={{ textDecoration: "none", color: Colors.blue }}
                to="/register"
              >
                Sign up
              </Link>
            </span>
          </h3>
        </div>
      </div>
      <div className="loginDiv3"></div>
    </div>
  );
};

export default Login;
