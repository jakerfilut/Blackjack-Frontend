import React from "react";
import { Link } from "react-router-dom";
import "./Homescreen.css";

function homescreen() {
  // let navigate = useNavigate();

  return (
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>01</h2>
            <h3>Rules</h3>
            <p>
              Every single Blackjack player needs to learn the rules before you
              play. This will teach you how to play. How to count cards and then
              use that count to calculate how much you should bet.
            </p>
            <Link to="/rules">Rules</Link>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>02</h2>
            <h3>Counting Cards</h3>
            <p>
              Before you can start playing you have to learn how to count cards
              like it is second nature. This speed counter will help you improve
              your skills based on your skill level.
            </p>
            <Link to="/counting">Counting Cards</Link>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>03</h2>
            <h3>Blackjack Game</h3>
            <p>
              Put your skill to the test. See how well you are at implementing
              perfect strategy, counting cards and betting the correct amount.
            </p>
            <Link to="/blackjack">Blackjack Game</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homescreen;
