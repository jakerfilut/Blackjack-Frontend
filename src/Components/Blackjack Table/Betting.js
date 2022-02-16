import React, { useState, useEffect, Profiler } from "react";
import "./Betting.css";

function Betting({ runningCount, response, setResponse, on }) {
  const API = "http://localhost:3000/api/v1";

  const [myBet, setMyBet] = useState(5);
  const [correctBet, setCorrectBet] = useState(5);
  // const [response, setResponse] = useState("");

  function placeBet(e) {
    e.preventDefault();
    console.log("sumbit");
    console.log(runningCount);
    let corBet = 5;
    if (runningCount < 0) {
      console.log("below 0");
      corBet = 5;
    } else if (runningCount === 0) {
      corBet = 5;
    } else if (runningCount === 1) {
      corBet = 5;
    } else if (runningCount === 2) {
      corBet = 10;
    } else if (runningCount === 3) {
      corBet = 15;
    } else if (runningCount === 4) {
      corBet = 20;
    } else if (runningCount === 5) {
      corBet = 25;
    } else if (runningCount === 6) {
      corBet = 30;
    } else if (runningCount === 7) {
      corBet = 35;
    } else if (runningCount === 8) {
      corBet = 40;
    } else if (runningCount === 9) {
      corBet = 45;
    } else if (runningCount > 9) {
      corBet = 50;
    }

    setCorrectBet(corBet);

    if (corBet == myBet) {
      setResponse("Correct");
    } else {
      setResponse(`Incorrect. The bet should be ${correctBet}`);
    }
  }

  return (
    <div className="betting_container">
      <h1 className="betting_num">${myBet}</h1>
      <div className="betting_btn_container">
        <button className="betting_btnn" onClick={() => setMyBet(myBet - 5)}>
          $5
        </button>
        <button className="betting_btnn" onClick={() => setMyBet(myBet - 10)}>
          $10
        </button>
        <button className="betting_btnn" onClick={() => setMyBet(myBet - 25)}>
          $25
        </button>
        <button className="betting_btn" onClick={() => setMyBet(myBet + 5)}>
          $5
        </button>
        <button className="betting_btn" onClick={() => setMyBet(myBet + 10)}>
          $10
        </button>
        <button className="betting_btn" onClick={() => setMyBet(myBet + 25)}>
          $25
        </button>
      </div>
      <div className="betting_btn_container">
        <button className="placeBet_btn" onClick={placeBet}>
          Place Bet
        </button>
      </div>
      <div>
        <h1>{response}</h1>
      </div>
      <div id="text" style={{ display: on ? "block" : "none" }}>
        <h1>Current Count: {runningCount}</h1>
      </div>
    </div>
  );
}

export default Betting;
