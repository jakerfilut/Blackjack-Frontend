import { useEffect, useState } from "react";
import "./App.css";
import Homescreen from "./Components/Homescreen";
import Table from "./Components/Blackjack Table/Table";
import SpeedCounting from "./Components/SpeedCounting";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";
const API = "http://localhost:3000/api/v1";

function App() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loggedinUsername, setLoggedInUsername] = useState("");
  const [loggedinEmail, setLoggedInEmail] = useState("");

  const [user, setUser] = useState(0);

  useEffect(() => {
    setTimeout(() => {
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
    }, 250);
  }, [user]);

  useEffect(() => {
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
    console.log("Looked for user");
  }, []);

  console.log(loggedinUsername);
  // console.log(loginUsername);

  if (!loggedinUsername)
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                setUser={setUser}
                user={user}
                setLoginUsername={setLoginUsername}
                setLoginPassword={setLoginPassword}
                loginUsername={loginUsername}
                loginPassword={loginPassword}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
      // <>
      //   <LoginPage
      //     setUser={setUser}
      //     user={user}
      //     setLoginUsername={setLoginUsername}
      //     setLoginPassword={setLoginPassword}
      //     loginUsername={loginUsername}
      //     loginPassword={loginPassword}
      //   />
      //   <Routes>
      //     <Route path="/signup" element={<SignUp />} />
      //   </Routes>
      // </>
    );

  return (
    <>
      {/* <Router> */}
      <Navbar
        setUser={setUser}
        user={user}
        setLoginUsername={setLoginUsername}
        setLoginPassword={setLoginPassword}
      />
      <Routes>
        <Route path="/home" element={<Homescreen />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/blackJack" element={<Table />} />
        <Route path="/counting" element={<SpeedCounting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
