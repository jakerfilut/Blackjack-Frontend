import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    console.log("logging in");
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <div>
          Username:{" "}
          <input
            type="text"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Dont have a account?
        <nav>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default LoginPage;
