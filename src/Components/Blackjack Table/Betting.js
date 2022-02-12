import React, { useState, useEffect, Profiler } from "react";

function Betting({ runningCount }) {
  const API = "http://localhost:3000/api/v1";

  const [myBet, setMyBet] = useState(5);
  const [correctBet, setCorrectBet] = useState(5);

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
      console.log("correct");
    } else {
      console.log("wrong");
    }
  }

  return (
    <div>
      <hr />
      <br></br>
      How Much Should you bet?
      <br></br>
      Your bet: ${myBet}
      <br></br>
      Correct bet:{correctBet}
      <form onSubmit={placeBet}>
        <input
          placeholder="Bet"
          type="number"
          min="5"
          max="50"
          step="5"
          value={myBet}
          onChange={(e) => setMyBet(e.target.value)}
        />
      </form>
      <hr />
    </div>
  );
}

export default Betting;
