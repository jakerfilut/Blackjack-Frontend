import React, { useState } from "react";
import { Link } from "react-router-dom";
const API = "http://localhost:3000/api/v1";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitRegistration(e) {
    e.preventDefault();

    fetch(`${API}/users`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user: { username, email, password } }),
    })
      .then((res) => res.json())
      .then((json) => console.log("GOT SOME", json));
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="App">
      <h1>Create New User</h1>
      <form onSubmit={submitRegistration}>
        <div>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Email:{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        Already Have a Account?
        <nav>
          <Link to="/">
            <button>Sign in</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default SignUp;
