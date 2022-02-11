import React, { useState, useEffect } from "react";

function Betting() {
  const API = "http://localhost:3000/api/v1";

  const [bankroll, setBankroll] = useState("");
  const [myBet, setMyBet] = useState(0);

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
      .then((money) => {
        setBankroll(money.bankroll);
      });
  }, []);

  function submitBet(e) {
    e.preventDefault();

    console.log("sumbit");
    e.reset();
  }

  return (
    <div>
      <hr />
      Bankroll: {bankroll}
      <br></br>
      Bet: {myBet}
      <br></br>
      <form onSubmit={submitBet}>
        <input
          placeholder="Place Bet"
          type="number"
          min="5"
          max="200"
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
