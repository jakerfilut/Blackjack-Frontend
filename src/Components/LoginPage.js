import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
const API = "http://localhost:3000/api/v1";

function LoginPage({
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
  user,
  setUser,
}) {
  // const [user, updateUser] = useState(0);

  function submitLogin(e) {
    e.preventDefault();
    const loginData = {
      user: { username: loginUsername, password: loginPassword },
    };

    fetch(`${API}/login`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((json) => localStorage.setItem("jwt", json.jwt));

    setLoginUsername("");
    setLoginPassword("");
    setUser(user + 1);
  }

  return (
    <div className="login_container">
      {/* <div className="img__container">
        <img
          classname="login__img"
          // width="946"
          // height="709.6"
          src={" Girl.jpg"}
        />
      </div> */}
      <div className="intro__wrapper">
        <div className="logo">Blackjack Trainer</div>
        <h1 className="title">Login</h1>
        <form onSubmit={submitLogin}>
          <div className="form__field">
            <div className="promt">Username: </div>
            <input
              className="input__field"
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="form__field">
            <div className="promt">Password: </div>
            <input
              className="input__field"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="login__btn" type="submit">
            Login
          </button>
        </form>
        <div>
          <div className="promt">Dont have an account?</div>
          <nav>
            <Link to="/signup">
              <button className="login__btn">Sign Up</button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
