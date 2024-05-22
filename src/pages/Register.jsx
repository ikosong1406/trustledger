import React from "react";
import { NavLink, Link } from "react-router-dom";
import Colors from "../components/Colors";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="registerDiv1">
      <div className="registerDiv2">
        <div className="registerDiv21">
          <h1>Welcome </h1>
          <h3>Please Enter the information you would love to register with</h3>
        </div>
        <div className="registerDiv22">
          <h3>Firstname</h3>
          <input type="email" name="" id="" />
          <h3>Lastname</h3>
          <input type="email" name="" id="" />
          <h3>Email</h3>
          <input type="email" name="" id="" />
          <h3>Password</h3>
          <input type="text" />
          <NavLink to="/login" className="registerBtn">
            <h3>REGISTER</h3>
          </NavLink>
        </div>
        <div className="registerDiv23">
          <hr />
          <h4>or</h4>
          <hr />
        </div>
        <div className="registerDiv24">
          <h3>
            Already have an account ?{" "}
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
