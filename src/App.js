// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Create New User</h1>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
const API = "http://localhost:3000/api/v1";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loggedinUsername, setLoggedInUsername] = useState("");
  const [loggedinEmail, setLoggedInEmail] = useState("");

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
  }

  function getProfile() {
    fetch(`${API}/profile`, {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("got profile:", json);
        setLoggedInUsername(json.username);
        setLoggedInEmail(json.email);
      });
  }

  function resetProfile() {
    console.log("test");
    setLoggedInUsername();
    setLoggedInEmail();
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

      <hr />

      {!loggedinUsername ? (
        <button onClick={getProfile}>Get Profile</button>
      ) : (
        <>
          <div>Username: {loggedinUsername}</div>
          <div>Email: {loggedinEmail}</div>
          <button onClick={resetProfile}>Reset</button>
        </>
      )}
    </div>
  );
}

export default App;
