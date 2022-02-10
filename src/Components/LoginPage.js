import React, { useEffect, useState } from "react";
const API = "http://localhost:3000/api/v1";

function LoginPage({
  loggedInUsername,
  setLoggedInUsername,
  loggedInEmail,
  setLoggedInEmail,
  logInUsername,
  setLogInUsername,
  logInPassword,
  setLogInPassword,
}) {
  const [user, updateUser] = useState(0);

  function submitLogin(e) {
    e.preventDefault();
    const loginData = {
      user: { username: logInUsername, password: logInPassword },
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

    setLogInUsername("");
    setLogInPassword("");
    // updateUser(user + 1);
    console.log("");
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <div>
          Username:{" "}
          <input
            type="text"
            value={logInUsername}
            onChange={(e) => setLogInUsername(e.target.value)}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            value={logInPassword}
            onChange={(e) => setLogInPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>

        <button>Don't have an account? &nbsp; </button>
      </form>
    </div>
  );
}

export default LoginPage;
