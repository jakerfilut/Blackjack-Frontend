import { React, useState } from "react";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const API = "http://localhost:3000/api/v1";

function Navbar({ setLoginPassword, setLoginUsername, user, setUser }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function handleLogoutClick() {
    const loginData = {
      user: { username: "", password: "" },
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
    <IconContext.Provider value={{ color: "#fff", size: 40 }}>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            Blackjack Trainer
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/rules" onClick={closeMobileMenu}>
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links"
                to="/counting"
                onClick={closeMobileMenu}
              >
                Counting
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blackjack"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blackjack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="layered">Profile</div>
              </Link>
            </li>
            <li onClick={handleLogoutClick} className="nav-item">
              <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
