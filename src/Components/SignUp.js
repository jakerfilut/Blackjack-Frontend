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
    <div className="intro__wrapper">
      {/* <div className="logo">Blackjack Trainer</div> */}
      <h1 className="title">Sign Up</h1>
      <form onSubmit={submitRegistration}>
        <div className="form__field">
          <div className="promt">Username: </div>
          <input
            className="input__field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__field">
          <div className="promt"> Email: </div>
          <input
            className="input__field"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__field">
          <div className="promt"> Password: </div>
          <input
            className="input__field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="create__btn" type="submit">
          Register
        </button>
      </form>
      <div>
        <div className="promt">Already Have a Account?</div>
        <nav>
          <Link to="/">
            <button className="create__btn">Sign in</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default SignUp;
